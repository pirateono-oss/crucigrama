import type { Puzzle } from './types';

export const puzzles: Puzzle[] = [
  // Puzzle 1 - Animales 7x7
  {
    title: 'Animales',
    date: '2026-06-23',
    width: 7,
    height: 7,
    grid: [
      ['.', '.', 'P', 'E', 'R', 'R', 'O'],
      ['.', '.', 'E', '.', 'A', '.', '.'],
      ['.', 'G', 'A', 'T', 'O', '.', '.'],
      ['L', 'O', 'B', 'O', '.', '.', '.'],
      ['O', '.', '.', '.', '.', '.', '.'],
      ['S', 'A', 'P', 'O', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Mejor amigo del hombre, 5 letras' },
      { number: 3, clue: 'Animal que maúlla, 4 letras' },
      { number: 4, clue: 'Animal que aúlla a la luna, 4 letras' },
      { number: 5, clue: 'Anfibio que croa, 4 letras' },
    ],
    down: [
      { number: 1, clue: 'Animal que da leche, 3 letras' },
      { number: 2, clue: 'Rey de la selva, 4 letras' },
    ],
  },
  // Puzzle 2 - Frutas 9x9
  {
    title: 'Frutas',
    date: '2026-06-24',
    width: 9,
    height: 9,
    grid: [
      ['.', 'F', 'R', 'E', 'S', 'A', '.', '.', '.'],
      ['.', '.', '.', '.', 'I', '.', '.', '.', '.'],
      ['.', '.', '.', '.', 'M', '.', '.', '.', '.'],
      ['.', '.', '.', '.', 'A', '.', '.', '.', '.'],
      ['.', 'P', 'E', 'R', 'A', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Fruta roja pequeña y dulce, 5 letras' },
      { number: 5, clue: 'Fruta amarilla y dulce, 4 letras' },
    ],
    down: [
      { number: 1, clue: 'Fruta amarilla tropical, 6 letras' },
      { number: 2, clue: 'Fruta que da el sol, 4 letras' },
      { number: 3, clue: 'Fruta cítrica amarilla, 4 letras' },
      { number: 4, clue: 'Fruta verde por fuera, roja por dentro, 5 letras' },
    ],
  },
  // Puzzle 3 - Colores 5x5
  {
    title: 'Colores',
    date: '2026-06-25',
    width: 5,
    height: 5,
    grid: [
      ['R', 'O', 'J', 'O', '.'],
      ['.', '.', '.', 'S', '.'],
      ['A', 'Z', 'U', 'L', '.'],
      ['L', '.', '.', 'D', '.'],
      ['V', 'E', 'R', 'D', 'E'],
    ],
    across: [
      { number: 1, clue: 'Color de la sangre, 4 letras' },
      { number: 3, clue: 'Color del cielo, 4 letras' },
      { number: 5, clue: 'Color de la naturaleza, 5 letras' },
    ],
    down: [
      { number: 1, clue: 'Color del sol, 5 letras' },
      { number: 2, clue: 'Color de la oscuridad, 3 letras' },
      { number: 4, clue: 'Color del carbón, 5 letras' },
    ],
  },
  // Puzzle 4 - Comida 6x6
  {
    title: 'Comida',
    date: '2026-06-26',
    width: 6,
    height: 6,
    grid: [
      ['.', '.', 'P', 'A', 'N', '.'],
      ['.', '.', '.', 'S', '.', '.'],
      ['A', 'R', 'R', 'O', 'Z', '.'],
      ['.', '.', '.', 'O', '.', '.'],
      ['.', 'L', 'E', 'C', 'H', 'E'],
      ['.', '.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Alimento básico con harina, 3 letras' },
      { number: 3, clue: 'Cereal blanco muy cocinado, 5 letras' },
      { number: 5, clue: 'Bebida blanca de vaca, 5 letras' },
    ],
    down: [
      { number: 1, clue: 'Fruta cítrica amarilla, 4 letras' },
      { number: 2, clue: 'Metal precioso, 3 letras' },
      { number: 4, clue: 'Comida nocturna, 5 letras' },
    ],
  },
  // Puzzle 5 - Ciudades 7x7
  {
    title: 'Ciudades',
    date: '2026-06-27',
    width: 7,
    height: 9,
    grid: [
      ['M', 'A', 'D', 'R', 'I', 'D', '.'],
      ['.', '.', '.', '.', 'O', '.', '.'],
      ['.', '.', '.', '.', 'M', '.', '.'],
      ['.', 'L', '.', '.', 'A', '.', '.'],
      ['.', 'I', '.', '.', '.', '.', '.'],
      ['.', 'S', 'E', 'V', 'I', 'L', 'L', 'A'],
      ['.', 'B', '.', '.', '.', '.', '.', '.'],
      ['.', 'O', '.', '.', '.', '.', '.', '.'],
      ['.', 'A', '.', '.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Capital de España, 6 letras' },
      { number: 6, clue: 'Ciudad con la Giralda, 7 letras' },
    ],
    down: [
      { number: 1, clue: 'Capital de Francia, 5 letras' },
      { number: 2, clue: 'Capital de Portugal, 6 letras' },
      { number: 3, clue: 'Ciudad italiana con canales, 5 letras' },
    ],
  },
  // Puzzle 6 - Deportes 7x7
  {
    title: 'Deportes',
    date: '2026-06-28',
    width: 7,
    height: 7,
    grid: [
      ['F', 'U', 'T', 'B', 'O', 'L', '.'],
      ['.', '.', '.', 'A', '.', '.', '.'],
      ['.', 'T', 'E', 'N', 'I', 'S', '.'],
      ['.', '.', '.', 'S', '.', '.', '.'],
      ['.', 'N', 'A', 'D', 'A', 'R', '.'],
      ['.', '.', '.', 'O', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Deporte de once jugadores, 6 letras' },
      { number: 3, clue: 'Deporte de raqueta y red, 5 letras' },
      { number: 5, clue: 'Actividad en el agua, 5 letras' },
    ],
    down: [
      { number: 1, clue: 'Deporte con cesta y pelota, 4 letras' },
      { number: 2, clue: 'Deporte de combate con puños, 4 letras' },
      { number: 4, clue: 'Deporte de equipo con canasta, 5 letras' },
    ],
  },
  // Puzzle 7 - Música 7x7
  {
    title: 'Música',
    date: '2026-06-29',
    width: 7,
    height: 7,
    grid: [
      ['G', 'U', 'I', 'T', 'A', 'R', 'R'],
      ['.', '.', '.', 'A', '.', '.', 'A'],
      ['.', '.', '.', 'M', '.', '.', 'P'],
      ['.', '.', 'B', 'A', 'T', 'E', 'R'],
      ['.', '.', '.', 'B', '.', '.', '.'],
      ['.', '.', '.', 'O', '.', '.', '.'],
      ['.', '.', '.', 'R', '.', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Instrumento de cuerdas, 7 letras' },
      { number: 4, clue: 'Instrumento de percusión con baquetas, 5 letras' },
    ],
    down: [
      { number: 1, clue: 'Instrumento de viento de madera, 4 letras' },
      { number: 2, clue: 'Instrumento de viento de metal, 4 letras' },
      { number: 3, clue: 'Instrumento de cuerdas y arco, 4 letras' },
    ],
  },
  // Puzzle 8 - Viajes 7x7
  {
    title: 'Viajes',
    date: '2026-06-30',
    width: 7,
    height: 7,
    grid: [
      ['.', '.', 'V', 'U', 'E', 'L', 'O'],
      ['.', '.', '.', '.', 'A', '.', '.'],
      ['.', 'H', 'O', 'T', 'E', 'L', '.'],
      ['.', '.', '.', '.', 'I', '.', '.'],
      ['.', '.', '.', '.', 'M', '.', '.'],
      ['.', 'M', 'A', 'L', 'E', 'T', 'A'],
      ['.', '.', '.', '.', 'S', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Trayecto en avión, 5 letras' },
      { number: 3, clue: 'Alojamiento para viajeros, 5 letras' },
      { number: 6, clue: 'Equipaje de mano, 6 letras' },
    ],
    down: [
      { number: 1, clue: 'Documento de viaje, 4 letras' },
      { number: 2, clue: 'Transporte urbano subterráneo, 4 letras' },
      { number: 4, clue: 'Medio de transporte de dos ruedas, 4 letras' },
      { number: 5, clue: 'Lugar de destino, 5 letras' },
    ],
  },
  // Puzzle 9 - Naturaleza 5x5
  {
    title: 'Naturaleza',
    date: '2026-07-01',
    width: 5,
    height: 5,
    grid: [
      ['F', 'L', 'O', 'R', '.'],
      ['.', '.', 'A', 'G', 'U'],
      ['.', '.', 'B', '.', 'N'],
      ['.', '.', 'O', '.', 'A'],
      ['.', '.', 'L', '.', 'S'],
    ],
    across: [
      { number: 1, clue: 'Parte colorida de una planta, 4 letras' },
      { number: 3, clue: 'Líquido esencial para la vida, 3 letras' },
    ],
    down: [
      { number: 1, clue: 'Astro que da luz y calor, 3 letras' },
      { number: 2, clue: 'Parte verde de una planta, 3 letras' },
      { number: 4, clue: 'Temporada de calor, 4 letras' },
    ],
  },
  // Puzzle 10 - Profesiones 7x7
  {
    title: 'Profesiones',
    date: '2026-07-02',
    width: 7,
    height: 7,
    grid: [
      ['M', 'E', 'D', 'I', 'C', 'O', '.'],
      ['.', '.', '.', '.', 'I', '.', '.'],
      ['.', '.', 'P', 'I', 'N', 'T', 'O'],
      ['.', '.', '.', '.', 'E', '.', '.'],
      ['.', 'B', 'O', 'M', 'B', 'E', 'R'],
      ['.', '.', '.', '.', 'O', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Profesional de la salud, 6 letras' },
      { number: 3, clue: 'Artista que crea con colores, 5 letras' },
      { number: 5, clue: 'Apaga incendios, 6 letras' },
    ],
    down: [
      { number: 1, clue: 'Enseña en la escuela, 5 letras' },
      { number: 2, clue: 'Construye edificios, 5 letras' },
      { number: 4, clue: 'Repara automóviles, 5 letras' },
    ],
  },
  // Puzzle 11 - Cine 6x6
  {
    title: 'Cine',
    date: '2026-07-03',
    width: 6,
    height: 6,
    grid: [
      ['.', '.', '.', '.', '.', '.'],
      ['.', 'A', 'C', 'T', 'O', 'R'],
      ['.', '.', 'I', '.', '.', '.'],
      ['.', '.', 'N', '.', '.', '.'],
      ['.', '.', 'E', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Intérprete de películas, 5 letras' },
    ],
    down: [
      { number: 2, clue: 'Sala donde se proyectan películas, 4 letras' },
    ],
  },
  // Puzzle 12 - Deportes II 6x6
  {
    title: 'Deportes II',
    date: '2026-07-04',
    width: 6,
    height: 6,
    grid: [
      ['.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'G', '.', '.'],
      ['.', 'B', 'A', 'L', 'O', 'N'],
      ['.', '.', '.', 'L', '.', '.'],
      ['.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 2, clue: 'Esfera usada en deportes, 5 letras' },
    ],
    down: [
      { number: 1, clue: 'Anotación en fútbol, 3 letras' },
    ],
  },
  // Puzzle 13 - Viajes 5x5
  {
    title: 'Viajes',
    date: '2026-07-05',
    width: 5,
    height: 5,
    grid: [
      ['.', '.', 'R', '.', '.'],
      ['.', '.', 'U', '.', '.'],
      ['H', 'O', 'T', 'E', 'L'],
      ['.', '.', 'A', '.', '.'],
      ['.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 2, clue: 'Alojamiento para viajeros, 5 letras' },
    ],
    down: [
      { number: 1, clue: 'Camino o itinerario, 4 letras' },
    ],
  },
  // Puzzle 14 - Ciencia 5x5
  {
    title: 'Ciencia',
    date: '2026-07-06',
    width: 5,
    height: 5,
    grid: [
      ['.', '.', 'P', '.', '.'],
      ['.', '.', 'E', '.', '.'],
      ['M', 'A', 'S', 'A', '.'],
      ['.', '.', 'O', '.', '.'],
      ['.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 2, clue: 'Cantidad de materia, 4 letras' },
    ],
    down: [
      { number: 1, clue: 'Fuerza ejercida por gravedad, 4 letras' },
    ],
  },
  // Puzzle 15 - Cocina 7x6
  {
    title: 'Cocina',
    date: '2026-07-07',
    width: 7,
    height: 6,
    grid: [
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', 'H', 'O', 'R', 'N', 'O'],
      ['.', '.', '.', 'L', '.', '.', '.'],
      ['.', '.', '.', 'L', '.', '.', '.'],
      ['.', '.', '.', 'A', '.', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Electrodoméstico de cocina, 5 letras' },
    ],
    down: [
      { number: 2, clue: 'Recipiente para cocinar, 4 letras' },
    ],
  },
  // Puzzle 16 - Historia 6x6
  {
    title: 'Historia',
    date: '2026-07-08',
    width: 6,
    height: 6,
    grid: [
      ['C', 'O', 'R', 'O', 'N', 'A'],
      ['.', '.', 'E', '.', '.', '.'],
      ['.', '.', 'I', '.', '.', '.'],
      ['.', '.', 'N', '.', '.', '.'],
      ['.', '.', 'A', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Adorno real en la cabeza, 6 letras' },
    ],
    down: [
      { number: 2, clue: 'Esposa del rey, 5 letras' },
    ],
  },
  // Puzzle 17 - Tecnología 6x6
  {
    title: 'Tecnología',
    date: '2026-07-09',
    width: 6,
    height: 6,
    grid: [
      ['R', '.', '.', '.', '.', '.'],
      ['E', '.', '.', '.', '.', '.'],
      ['D', 'I', 'S', 'C', 'O', '.'],
      ['.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 2, clue: 'Medio de almacenamiento, 5 letras' },
    ],
    down: [
      { number: 1, clue: 'Conexión de computadoras, 3 letras' },
    ],
  },
  // Puzzle 18 - Salud 6x6
  {
    title: 'Salud',
    date: '2026-07-10',
    width: 6,
    height: 6,
    grid: [
      ['.', 'H', '.', '.', '.', '.'],
      ['.', 'U', '.', '.', '.', '.'],
      ['M', 'E', 'N', 'T', 'E', '.'],
      ['.', 'S', '.', '.', '.', '.'],
      ['.', 'O', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 2, clue: 'Parte pensante del ser humano, 5 letras' },
    ],
    down: [
      { number: 1, clue: 'Parte dura del esqueleto, 5 letras' },
    ],
  },
  // Puzzle 19 - Geografía 5x5
  {
    title: 'Geografía',
    date: '2026-07-11',
    width: 5,
    height: 5,
    grid: [
      ['M', 'A', 'R', '.', '.'],
      ['.', '.', 'I', '.', '.'],
      ['.', '.', 'O', '.', '.'],
      ['.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.'],
    ],
    across: [
      { number: 1, clue: 'Masa de agua salada, 3 letras' },
    ],
    down: [
      { number: 2, clue: 'Corriente de agua, 3 letras' },
    ],
  },
  // Puzzle 20 - Música II 5x5
  {
    title: 'Música II',
    date: '2026-07-12',
    width: 5,
    height: 5,
    grid: [
      ['.', 'P', '.', '.', '.'],
      ['.', 'I', '.', '.', '.'],
      ['B', 'A', 'N', 'D', 'A'],
      ['.', 'N', '.', '.', '.'],
      ['.', 'O', '.', '.', '.'],
    ],
    across: [
      { number: 2, clue: 'Grupo de músicos, 5 letras' },
    ],
    down: [
      { number: 1, clue: 'Instrumento de teclas, 5 letras' },
    ],
  },
];

export function getDailyPuzzle(): Puzzle {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return puzzles[dayOfYear % puzzles.length];
}

export function getAllPuzzles(): Puzzle[] {
  return puzzles;
}
