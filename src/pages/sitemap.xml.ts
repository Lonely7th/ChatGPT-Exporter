import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, features } from '../data/site';
export const GET: APIRoute = async () => {
  const routes = [
    '/',
    '/install/',
    '/examples/',
    '/faq/',
    '/about/',
    '/privacy/',
    '/terms/',
    '/changelog/',
    '/guides/',
    ...features.map((f) => `/features/${f.slug}/`),
    ...(await getCollection('guides')).map((g) => `/guides/${g.id}/`),
  ];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${SITE.origin}${route}</loc></url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
