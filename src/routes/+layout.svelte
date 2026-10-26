<script lang="ts">
	import './layout.css';
	import '@fontsource/geist-mono/400.css';
	import '@fontsource/geist-mono/700.css';
	import { asset, resolve } from '$app/paths';
	import { site } from '#lib/data.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={asset('favicon.svg')} type="image/svg+xml" />
	<link rel="alternate" type="application/rss+xml" title={site.name} href={resolve('/rss.xml')} />
</svelte:head>

<div class="mx-auto max-w-5xl px-6 py-10 text-sm leading-relaxed sm:py-16">
	<header class="mb-16 flex items-center justify-between gap-4">
		<a href={resolve('/')} class="font-bold text-lavender">~/{site.handle}</a>
		<nav class="flex gap-5 text-sub">
			<a href={resolve('/')}>home</a>
			<a href={resolve('/blog')}>blog</a>
		</nav>
	</header>

	<main>{@render children()}</main>

	<footer class="mt-20 border-t border-line pt-6 text-xs text-dim">
		© {new Date().getFullYear()}
		{site.name}
	</footer>
</div>
