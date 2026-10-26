<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '#lib/Seo.svelte';
	import { site } from '#lib/data.ts';
	import { absolute } from '#lib/seo.ts';

	let { data } = $props();
	const post = $derived(data.post);
	const Content = $derived(data.post.content);
</script>

<Seo
	title={post.title}
	description={post.description}
	image={`/og/${post.slug}.png`}
	article={{ published: post.date, modified: post.updated, tags: post.tags }}
	jsonLd={{
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		datePublished: post.date,
		dateModified: post.updated ?? post.date,
		keywords: post.tags.join(', '),
		image: absolute(`/og/${post.slug}.png`),
		url: absolute(`/blog/${post.slug}/`),
		author: { '@type': 'Person', name: site.name, url: site.url }
	}}
/>

<article>
	<a href={resolve('/blog')} class="text-xs text-sub">← blog</a>
	<h1 class="mt-6 text-2xl font-bold tracking-tight">{post.title}</h1>
	<p class="mt-2 flex flex-wrap gap-x-3 text-xs text-dim">
		<span>{post.date}</span>
		<span>{post.readingTime} min read</span>
		{#each post.tags as tag (tag)}
			<a href={resolve('/blog/tags/[tag]', { tag })} class="text-teal">#{tag}</a>
		{/each}
	</p>
	<div
		class="prose prose-sm mt-10 max-w-none font-mono text-fg prose-headings:scroll-mt-8 prose-headings:text-lavender prose-a:text-fg prose-strong:text-fg prose-code:text-green prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-line prose-pre:text-xs prose-img:rounded-lg prose-img:border prose-img:border-line [&_:is(h2,h3,h4)>a]:text-lavender [&_:is(h2,h3,h4)>a]:no-underline"
	>
		<Content />
	</div>
</article>

{#if data.newer || data.older}
	<nav class="mt-16 grid gap-4 border-t border-line pt-6 text-xs sm:grid-cols-2">
		<div>
			{#if data.older}
				<p class="text-dim">← older</p>
				<a href={resolve('/blog/[slug]', { slug: data.older.slug })} class="font-bold"
					>{data.older.title}</a
				>
			{/if}
		</div>
		<div class="sm:text-right">
			{#if data.newer}
				<p class="text-dim">newer →</p>
				<a href={resolve('/blog/[slug]', { slug: data.newer.slug })} class="font-bold"
					>{data.newer.title}</a
				>
			{/if}
		</div>
	</nav>
{/if}
