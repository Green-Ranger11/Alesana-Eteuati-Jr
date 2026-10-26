<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/data.ts';
	import { absolute } from '#lib/seo.ts';

	let {
		title,
		description = site.about,
		image = '/og/home.png',
		article,
		jsonLd
	}: {
		title?: string;
		description?: string;
		/** site-root path of the Open Graph image */
		image?: string;
		article?: { published: string; modified?: string; tags: string[] };
		jsonLd?: Record<string, unknown>;
	} = $props();

	const fullTitle = $derived(title ? `${title} · ${site.name}` : site.name);
	const url = $derived(absolute(page.url.pathname));
	const imageUrl = $derived(absolute(image));
	// split tags so the Svelte parser doesn't read them as this component's script; escape `<` in data
	const ld = $derived(
		jsonLd &&
			'<scr' +
				'ipt type="application/ld+json">' +
				JSON.stringify({ '@context': 'https://schema.org', ...jsonLd }).replace(/</g, '\\u003c') +
				'</scr' +
				'ipt>'
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:type" content={article ? 'article' : 'website'} />
	{#if article}
		<meta property="article:published_time" content={article.published} />
		{#if article.modified}<meta property="article:modified_time" content={article.modified} />{/if}
		{#each article.tags as tag (tag)}<meta property="article:tag" content={tag} />{/each}
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	{#if ld}{@html ld}{/if}
</svelte:head>
