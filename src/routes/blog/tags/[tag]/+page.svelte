<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '#lib/Seo.svelte';
	import PostList from '#lib/blog/PostList.svelte';

	let { data } = $props();
</script>

<Seo title={`#${data.tag}`} description={`Posts tagged ${data.tag}.`} image="/og/blog.png" />

<a href={resolve('/blog')} class="text-xs text-sub">← blog</a>
<h1 class="mt-6 text-2xl font-bold tracking-tight"><span class="text-teal">#</span>{data.tag}</h1>
<div class="mt-8"><PostList posts={data.posts} /></div>
