import { site } from '#lib/data.ts';
import { absolute, escapeXml } from '#lib/seo.ts';
import { posts } from '#lib/blog/posts.ts';

export const prerender = true;

export function GET() {
	const items = posts
		.map((p) => {
			const link = absolute(`/blog/${p.slug}/`);
			return `<item>
<title>${escapeXml(p.title)}</title>
<link>${link}</link>
<guid isPermaLink="true">${link}</guid>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
<description>${escapeXml(p.description)}</description>
${p.tags.map((t) => `<category>${escapeXml(t)}</category>`).join('')}
</item>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${escapeXml(site.name)}</title>
<link>${absolute('/blog/')}</link>
<description>${escapeXml(`Writing by ${site.name}`)}</description>
<language>en</language>
<atom:link href="${absolute('/rss.xml')}" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`;
	return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml' } });
}
