import type { MetadataRoute } from 'next';

const locales = ['en', 'es', 'pt'];
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crucigrama-kohl.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map(locale => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  }));
}
