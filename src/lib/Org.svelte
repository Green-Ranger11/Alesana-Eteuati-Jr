<script lang="ts">
	let {
		org,
		href,
		logo,
		roles,
		details
	}: {
		org: string;
		href: string;
		logo: string;
		roles: { title: string; dates: string }[];
		details?: string[];
	} = $props();
</script>

{#snippet header()}
	<img src={logo} alt="" class="size-8 shrink-0 rounded-lg bg-line object-contain p-1" />
	<div class="grow">
		<div class="flex items-baseline justify-between gap-6">
			<a {href} target="_blank" rel="external noopener" class="font-bold">{org} ↗</a>
			{#if details}
				<span class="text-dim transition-transform group-open:rotate-90" aria-hidden="true">›</span>
			{/if}
		</div>
		<ul class="mt-1 space-y-1">
			{#each roles as role (role.title + role.dates)}
				<li class="flex flex-wrap items-baseline justify-between gap-x-6">
					<span class="text-sub">{role.title}</span>
					<span class="text-xs text-dim">{role.dates}</span>
				</li>
			{/each}
		</ul>
	</div>
{/snippet}

<li class="py-5">
	{#if details}
		<details class="group">
			<summary class="flex cursor-pointer list-none gap-4 [&::-webkit-details-marker]:hidden">
				{@render header()}
			</summary>
			<ul class="mt-3 ml-12 list-disc space-y-2 text-sub marker:text-dim">
				{#each details as d (d)}<li>{d}</li>{/each}
			</ul>
		</details>
	{:else}
		<div class="flex gap-4">{@render header()}</div>
	{/if}
</li>
