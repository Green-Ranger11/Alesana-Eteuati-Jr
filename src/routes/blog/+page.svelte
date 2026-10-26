<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '#lib/Seo.svelte';
	import PostList from '#lib/blog/PostList.svelte';
	import { posts, tags } from '#lib/blog/posts.ts';
	import { site } from '#lib/data.ts';
</script>

<Seo title="blog" description={`Writing by ${site.name}.`} image="/og/blog.png" />

<div class="flex flex-wrap items-baseline justify-between gap-4">
	<h1 class="text-2xl font-bold tracking-tight">blog</h1>
	<a href={resolve('/rss.xml')} class="text-xs text-sub">rss ↗</a>
</div>
{#if tags.length}
	<p class="mt-4 flex flex-wrap gap-x-3 text-xs">
		{#each tags as tag (tag)}
			<a href={resolve('/blog/tags/[tag]', { tag })} class="text-teal">#{tag}</a>
		{/each}
	</p>
{/if}
<div class="mt-8">
	{#if posts.length}
		<PostList {posts} />
	{:else}
		<p class="text-sub">no posts yet.</p>
	{/if}
</div>
