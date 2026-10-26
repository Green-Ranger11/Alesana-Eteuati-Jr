import { error } from '@sveltejs/kit';
import { posts } from '#lib/blog/posts.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => posts.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const i = posts.findIndex((p) => p.slug === params.slug);
	if (i === -1) error(404, 'post not found');
	// posts are newest first
	return { post: posts[i], newer: posts[i - 1], older: posts[i + 1] };
};
