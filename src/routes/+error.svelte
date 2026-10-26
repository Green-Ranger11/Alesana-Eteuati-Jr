<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head><title>{page.status} · Alesana Eteuati Jr</title></svelte:head>

<p><span class="font-bold text-red">❯</span> cd {page.url.pathname}</p>
<p class="mt-2 text-sub">{page.status}: {page.error?.message}</p>
<p class="mt-8"><a href={resolve('/')} class="text-lavender">← home</a></p>
