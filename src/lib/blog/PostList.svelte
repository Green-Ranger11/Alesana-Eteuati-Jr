<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Post } from './posts.ts';

	let { posts }: { posts: Post[] } = $props();
</script>

<ul class="divide-y divide-line">
	{#each posts as post (post.slug)}
		<li class="py-4">
			<div class="flex flex-wrap items-baseline justify-between gap-x-6">
				<a href={resolve('/blog/[slug]', { slug: post.slug })} class="font-bold">{post.title}</a>
				<span class="text-xs text-dim">{post.date}</span>
			</div>
			<p class="mt-1 text-sub">{post.description}</p>
			<p class="mt-1 flex flex-wrap gap-x-3 text-xs text-dim">
				<span>{post.readingTime} min read</span>
				{#each post.tags as tag (tag)}
					<a href={resolve('/blog/tags/[tag]', { tag })} class="text-teal">#{tag}</a>
				{/each}
			</p>
		</li>
	{/each}
</ul>
