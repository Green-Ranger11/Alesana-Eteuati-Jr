<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<section class="mt-16">
	<h2 class="mb-6 font-bold text-lavender">{title}</h2>
	{@render children()}
</section>
