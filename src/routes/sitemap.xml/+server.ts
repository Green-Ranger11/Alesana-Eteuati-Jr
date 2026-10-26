import { absolute } from '#lib/seo.ts';
import { posts, tags } from '#lib/blog/posts.ts';

export const prerender = true;

export function GET() {
	const pages: [string, string?][] = [
		['/', posts[0]?.date],
		['/blog/', posts[0]?.date],
		...posts.map((p): [string, string] => [`/blog/${p.slug}/`, p.updated ?? p.date]),
		...tags.map((t): [string] => [`/blog/tags/${encodeURIComponent(t)}/`])
	];
	const urls = pages
		.map(
			([path, lastmod]) =>
				`<url><loc>${absolute(path)}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
		)
		.join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
