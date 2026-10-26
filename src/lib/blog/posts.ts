import type { Component } from 'svelte';

export type PostMeta = {
	title: string;
	date: string;
	description: string;
	updated?: string;
	tags?: string[];
	draft?: boolean;
};
type PostModule = { default: Component; metadata: PostMeta };

const modules = import.meta.glob<PostModule>('/src/posts/*.md', { eager: true });
const sources = import.meta.glob<string>('/src/posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export const posts = Object.entries(modules)
	.map(([path, mod]) => ({
		...mod.metadata,
		slug: path.split('/').pop()!.replace(/\.md$/, ''),
		tags: mod.metadata.tags ?? [],
		// ~200 words a minute
		readingTime: Math.max(1, Math.round(sources[path].split(/\s+/).length / 200)),
		content: mod.default
	}))
	// drafts show in dev only
	.filter((p) => !(import.meta.env.PROD && p.draft))
	.sort((a, b) => b.date.localeCompare(a.date));

export type Post = (typeof posts)[number];

export const tags = [...new Set(posts.flatMap((p) => p.tags))].sort();
