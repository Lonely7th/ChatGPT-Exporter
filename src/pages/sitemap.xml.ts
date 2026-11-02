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
  ];
  const entries = [
    ...routes.map((route) => ({
      url: `${SITE.origin}${route}`,
      lastmod: undefined as string | undefined,
    })),
    ...(await getCollection('guides')).map((guide) => ({
      url: `${SITE.origin}/guides/${guide.id}/`,
      lastmod: guide.data.updated,
    })),
  ];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.map((entry) => `<url><loc>${entry.url}</loc>${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}</url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
