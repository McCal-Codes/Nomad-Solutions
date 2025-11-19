import type { MetadataRoute } from 'next';

const baseUrl = 'https://nomad-rentals.example';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/fleet', '/booking', '/faq', '/about', '/contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route || '/'}`,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.6,
    lastModified: new Date()
  }));
}
