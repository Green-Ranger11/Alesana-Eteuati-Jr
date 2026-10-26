<script module>
	// mdsvex swaps markdown <img> for this component
	export { default as img } from './PostImage.svelte';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

{@render children?.()}
