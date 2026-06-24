'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { isValidLocale, getDictionary } from '@/lib/i18n';
import type { Locale, Puzzle, PuzzleClue } from '@/lib/types';
import { getDailyPuzzle, puzzles } from '@/lib/puzzles';
import { Grid3X3, ChevronRight, ChevronDown, Check, RotateCcw, Trophy, Clock } from 'lucide-react';

export default function CrosswordPage() {
  const params = useParams();
  const locale = params.locale as string;
  if (!isValidLocale(locale)) return null;
  const dict = getDictionary(locale as Locale);

  const [puzzle, setPuzzle] = useState<Puzzle>(getDailyPuzzle());
  const [grid, setGrid] = useState<string[][]>(() => puzzle.grid.map(row => row.map(c => c === '.' ? '.' : '')));
  const [selectedRow, setSelectedRow] = useState(0);
  const [selectedCol, setSelectedCol] = useState(0);
  const [direction, setDirection] = useState<'across' | 'down'>('across');
  const [completed, setCompleted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Get puzzle date
  const puzzleDate = puzzle.date || new Date().toLocaleDateString(locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : 'en-US');

  // Timer
  useEffect(() => {
    if (isRunning && !completed) {
      timerRef.current = setTimeout(() => setSeconds(s => s + 1), 1000);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [isRunning, seconds, completed]);

  const formatTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

  // Get clue number for a cell
  const getClueNumber = (row: number, col: number): number | null => {
    const cell = puzzle.grid[row][col];
    if (cell === '.') return null;
    if (col === 0 || puzzle.grid[row][col - 1] === '.') {
      for (const clue of puzzle.across) {
        const c = puzzle.across.find(c => c.number === clue.number);
        // Check if this is the start of an across word
        if (col === 0 || puzzle.grid[row][col - 1] === '.') {
          // Check for first cell in an across clue
        }
      }
    }
    
    // Check if this cell starts an across clue
    if (col === 0 || puzzle.grid[row][col - 1] === '.') {
      for (const clue of puzzle.across) {
        if (row === 0 && puzzle.grid[0][col] !== '.') {
          // Need to find which clue starts here
        }
      }
    }
    
    // Simplified: find matching start positions
    for (const clue of [...puzzle.across, ...puzzle.down]) {
      // For across clues
      for (const ac of puzzle.across) {
        // Check if ac starts at this position
        const matches = puzzle.across.filter(a => {
          // Find where this clue starts
          return false; // simplified
        });
      }
    }
    return null;
  };

  // Simplified clue number detection
  const getClueNumbers = useCallback(() => {
    const numbers: Record<string, number> = {};
    let num = 1;
    for (let r = 0; r < puzzle.height; r++) {
      for (let c = 0; c < puzzle.width; c++) {
        if (puzzle.grid[r][c] === '.') continue;
        const isStartOfAcross = c === 0 || puzzle.grid[r][c - 1] === '.';
        const isStartOfDown = r === 0 || puzzle.grid[r - 1][c] === '.';
        if (isStartOfAcross || isStartOfDown) {
          numbers[`${r},${c}`] = num++;
        }
      }
    }
    return numbers;
  }, [puzzle]);

  const clueNumbers = getClueNumbers();

  const handleCellClick = (row: number, col: number) => {
    if (puzzle.grid[row][col] === '.') return;
    if (!isRunning) setIsRunning(true);
    if (selectedRow === row && selectedCol === col) {
      setDirection(d => d === 'across' ? 'down' : 'across');
    } else {
      setSelectedRow(row);
      setSelectedCol(col);
    }
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (completed) return;
    if (!isRunning) setIsRunning(true);
    
    if (e.key === 'Tab') {
      e.preventDefault();
      setDirection(d => d === 'across' ? 'down' : 'across');
      return;
    }

    if (e.key === 'ArrowRight' && direction === 'across') {
      let nc = selectedCol + 1;
      while (nc < puzzle.width && puzzle.grid[selectedRow][nc] === '.') nc++;
      if (nc < puzzle.width) setSelectedCol(nc);
      return;
    }
    if (e.key === 'ArrowLeft' && direction === 'across') {
      let nc = selectedCol - 1;
      while (nc >= 0 && puzzle.grid[selectedRow][nc] === '.') nc--;
      if (nc >= 0) setSelectedCol(nc);
      return;
    }
    if (e.key === 'ArrowDown' && direction === 'down') {
      let nr = selectedRow + 1;
      while (nr < puzzle.height && puzzle.grid[nr][selectedCol] === '.') nr++;
      if (nr < puzzle.height) setSelectedRow(nr);
      return;
    }
    if (e.key === 'ArrowUp' && direction === 'down') {
      let nr = selectedRow - 1;
      while (nr >= 0 && puzzle.grid[nr][selectedCol] === '.') nr--;
      if (nr >= 0) setSelectedRow(nr);
      return;
    }

    if (e.key === 'Backspace') {
      const newGrid = grid.map(r => [...r]);
      if (grid[selectedRow][selectedCol]) {
        newGrid[selectedRow][selectedCol] = '';
        setGrid(newGrid);
      } else if (direction === 'across' && selectedCol > 0) {
        let nc = selectedCol - 1;
        while (nc >= 0 && puzzle.grid[selectedRow][nc] === '.') nc--;
        if (nc >= 0) {
          newGrid[selectedRow][nc] = '';
          setGrid(newGrid);
          setSelectedCol(nc);
        }
      } else if (direction === 'down' && selectedRow > 0) {
        let nr = selectedRow - 1;
        while (nr >= 0 && puzzle.grid[nr][selectedCol] === '.') nr--;
        if (nr >= 0) {
          newGrid[nr][selectedCol] = '';
          setGrid(newGrid);
          setSelectedRow(nr);
        }
      }
      return;
    }

    const letter = e.key.toUpperCase();
    if (!/^[A-ZÑÁÉÍÓÚ]$/.test(letter)) return;
    e.preventDefault();

    const newGrid = grid.map(r => [...r]);
    newGrid[selectedRow][selectedCol] = letter;
    setGrid(newGrid);

    // Check completion
    let allFilled = true;
    for (let r = 0; r < puzzle.height; r++) {
      for (let c = 0; c < puzzle.width; c++) {
        if (puzzle.grid[r][c] !== '.' && !newGrid[r][c]) allFilled = false;
      }
    }
    if (allFilled) {
      let allCorrect = true;
      for (let r = 0; r < puzzle.height; r++) {
        for (let c = 0; c < puzzle.width; c++) {
          if (puzzle.grid[r][c] !== '.' && newGrid[r][c] !== puzzle.grid[r][c]) allCorrect = false;
        }
      }
      if (allCorrect) {
        setCompleted(true);
        setIsRunning(false);
      }
    }

    // Move to next cell
    if (direction === 'across') {
      let nc = selectedCol + 1;
      while (nc < puzzle.width && puzzle.grid[selectedRow][nc] === '.') nc++;
      if (nc < puzzle.width) setSelectedCol(nc);
    } else {
      let nr = selectedRow + 1;
      while (nr < puzzle.height && puzzle.grid[nr][selectedCol] === '.') nr++;
      if (nr < puzzle.height) setSelectedRow(nr);
    }
  };

  const checkAnswers = () => {
    const newGrid = grid.map(r => [...r]);
    for (let r = 0; r < puzzle.height; r++) {
      for (let c = 0; c < puzzle.width; c++) {
        if (puzzle.grid[r][c] !== '.' && newGrid[r][c] && newGrid[r][c] !== puzzle.grid[r][c]) {
          newGrid[r][c] = ''; // Clear wrong answers
        }
      }
    }
    setGrid(newGrid);
  };

  const resetPuzzle = () => {
    setGrid(puzzle.grid.map(row => row.map(c => c === '.' ? '.' : '')));
    setCompleted(false);
    setSeconds(0);
    setIsRunning(false);
    setSelectedRow(0);
    setSelectedCol(0);
  };

  const getSelectedClue = () => {
    const num = clueNumbers[`${selectedRow},${selectedCol}`];
    if (!num) return null;
    // Find matching across clue
    for (const clue of puzzle.across) {
      // Check if this clue starts at this position - simplified approach
    }
    return null;
  };

  // Find current clue info
  const getCurrentClues = () => {
    const num = clueNumbers[`${selectedRow},${selectedCol}`];
    if (!num) return { across: '', down: '' };
    
    // Find which clues are active for this cell
    let activeAcross = '';
    let activeDown = '';
    
    // For across: find which across word this cell belongs to
    let acrossStart = selectedCol;
    while (acrossStart > 0 && puzzle.grid[selectedRow][acrossStart - 1] !== '.') acrossStart--;
    const acrossNum = clueNumbers[`${selectedRow},${acrossStart}`];
    if (acrossNum) {
      const clue = puzzle.across.find(c => c.number === acrossNum);
      if (clue) activeAcross = `${acrossNum}. ${clue.clue}`;
    }

    let downStart = selectedRow;
    while (downStart > 0 && puzzle.grid[downStart - 1][selectedCol] !== '.') downStart--;
    const downNum = clueNumbers[`${downStart},${selectedCol}`];
    if (downNum) {
      const clue = puzzle.down.find(c => c.number === downNum);
      if (clue) activeDown = `${downNum}. ${clue.clue}`;
    }
    
    return { across: activeAcross, down: activeDown };
  };

  const currentClues = getCurrentClues();
  const cellSize = Math.min(Math.floor((typeof window !== 'undefined' ? Math.min(window.innerWidth - 32, 500) : 400) / puzzle.width), 60);

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Header */}
      <div className="mb-4 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl tool-icon shadow-md">
          <Grid3X3 className="h-6 w-6 text-white" />
        </div>
        <h1 className="mb-1 text-2xl font-bold">{dict.dailyPuzzle}</h1>
        <p className="text-sm text-muted-foreground">{puzzleDate}</p>
      </div>

      <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-center">
        {/* Grid */}
        <div className="rounded-xl border border-border bg-card p-3 shadow-sm">
          <div className="select-none" style={{ width: cellSize * puzzle.width, height: cellSize * puzzle.height }}
            onMouseDown={() => inputRef.current?.focus()}>
            {Array.from({ length: puzzle.height }, (_, r) => (
              <div key={r} className="flex">
                {Array.from({ length: puzzle.width }, (_, c) => {
                  const isBlack = puzzle.grid[r][c] === '.';
                  const isSelected = r === selectedRow && c === selectedCol;
                  const isHighlighted = direction === 'across' ? r === selectedRow : c === selectedCol;
                  const num = clueNumbers[`${r},${c}`];
                  
                  return (
                    <div key={c} onClick={() => handleCellClick(r, c)}
                      className={`relative flex items-center justify-center border text-lg font-bold transition-colors cursor-pointer
                        ${isBlack ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}
                        ${isSelected ? 'bg-blue-200 border-blue-400 z-10' : ''}
                        ${isHighlighted && !isSelected && !isBlack ? 'bg-blue-50' : ''}
                      `}
                      style={{ width: cellSize, height: cellSize, fontSize: cellSize * 0.45 }}>
                      {!isBlack && (
                        <span className={grid[r][c] === puzzle.grid[r][c] ? 'text-gray-900' : 'text-blue-600'}>
                          {grid[r][c]}
                        </span>
                      )}
                      {num && !isBlack && (
                        <span className="absolute left-0.5 top-0.5 text-[8px] font-normal text-gray-500 leading-none">
                          {num}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <input ref={inputRef} onKeyDown={handleKeyDown}
            className="absolute -left-[9999px] opacity-0" type="text" autoComplete="off" />
        </div>

        {/* Clues & Controls */}
        <div className="w-full max-w-sm space-y-4">
          {/* Timer & Controls */}
          <div className="flex items-center justify-between rounded-xl border border-border bg-card p-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Clock className="h-4 w-4 text-primary" /> {formatTime(seconds)}
            </div>
            <div className="flex gap-1">
              <button onClick={checkAnswers} className="flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20">
                <Check className="h-3.5 w-3.5" /> {dict.check}
              </button>
              <button onClick={resetPuzzle} className="flex items-center gap-1 rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium hover:bg-secondary/80">
                <RotateCcw className="h-3.5 w-3.5" /> {dict.reset}
              </button>
            </div>
          </div>

          {/* Active Clue */}
          <div className="rounded-xl border border-border bg-card p-3">
            <p className="mb-1 text-xs text-muted-foreground">
              <ChevronRight className="mr-1 inline h-3 w-3" />{dict.across}
            </p>
            <p className="mb-3 text-sm font-medium">{currentClues.across || '—'}</p>
            <p className="mb-1 text-xs text-muted-foreground">
              <ChevronDown className="mr-1 inline h-3 w-3" />{dict.down}
            </p>
            <p className="text-sm font-medium">{currentClues.down || '—'}</p>
          </div>

          {/* All Clues */}
          <div className="max-h-64 overflow-y-auto rounded-xl border border-border bg-card p-3">
            <p className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              <ChevronRight className="mr-1 inline h-3 w-3" />{dict.across}
            </p>
            {puzzle.across.map(clue => (
              <p key={`a${clue.number}`} className="mb-1 text-sm leading-relaxed">
                <span className="font-bold text-primary">{clue.number}.</span> {clue.clue}
              </p>
            ))}
            <p className="mb-2 mt-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              <ChevronDown className="mr-1 inline h-3 w-3" />{dict.down}
            </p>
            {puzzle.down.map(clue => (
              <p key={`d${clue.number}`} className="mb-1 text-sm leading-relaxed">
                <span className="font-bold text-primary">{clue.number}.</span> {clue.clue}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Completion Modal */}
      {completed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="mx-4 rounded-2xl bg-card p-8 text-center shadow-2xl max-w-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground">{dict.congratulations}</h2>
            <p className="mb-1 text-lg font-semibold text-primary">{formatTime(seconds)}</p>
            <p className="mb-6 text-sm text-muted-foreground">{dict.nextPuzzle}</p>
          </div>
        </div>
      )}
    </div>
  );
}
