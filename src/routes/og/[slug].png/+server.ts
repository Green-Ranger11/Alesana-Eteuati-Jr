import { error } from '@sveltejs/kit';
import { site } from '#lib/data.ts';
import { ogImage } from '#lib/og.ts';
import { posts } from '#lib/blog/posts.ts';
import type { EntryGenerator, RequestHandler } from './$types';

export const prerender = true;

const cards: Record<string, [string, string]> = {
	home: [site.name, site.role],
	blog: ['blog', `Writing by ${site.name}`],
	...Object.fromEntries(posts.map((p) => [p.slug, [p.title, p.description]]))
};

export const entries: EntryGenerator = () => Object.keys(cards).map((slug) => ({ slug }));

export const GET: RequestHandler = async ({ params }) => {
	const card = cards[params.slug];
	if (!card) error(404);
	return new Response(new Uint8Array(await ogImage(...card)), {
		headers: { 'Content-Type': 'image/png' }
	});
};
