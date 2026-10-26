<script module lang="ts">
	const images = import.meta.glob<string>('/src/posts/**/*.{png,jpg,jpeg,webp}', {
		eager: true,
		query: { enhanced: true },
		import: 'default'
	});
</script>

<script lang="ts">
	let { src, alt = '' }: { src: string; alt?: string } = $props();

	// markdown paths are relative to src/posts
	const image = $derived(images['/src/posts/' + src.replace(/^\.\//, '')]);
</script>

{#if image}
	<enhanced:img src={image} {alt} loading="lazy" sizes="(min-width: 1024px) 976px, 100vw" />
{:else}
	<img {src} {alt} loading="lazy" />
{/if}
