<script lang="ts">
	import Section from '#lib/Section.svelte';
	import Org from '#lib/Org.svelte';
	import Seo from '#lib/Seo.svelte';
	import PostList from '#lib/blog/PostList.svelte';
	import { site, experience, projects, education } from '#lib/data.ts';
	import { posts } from '#lib/blog/posts.ts';
</script>

<Seo
	description={`${site.role}. ${site.about}`}
	jsonLd={{
		'@type': 'Person',
		name: site.name,
		url: site.url,
		jobTitle: site.role.split(' @ ')[0],
		worksFor: { '@type': 'Organization', name: experience[0].org, url: experience[0].href },
		alumniOf: { '@type': 'CollegeOrUniversity', name: education[0].org },
		sameAs: site.links.filter((l) => l.href.startsWith('https')).map((l) => l.href)
	}}
/>

<p class="text-xs">
	<span class="font-bold text-lavender">~/{site.handle}</span>
	<span class="font-bold text-teal">main</span>
</p>
<p class="text-xs"><span class="font-bold text-green">❯</span> whoami</p>

<h1 class="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">{site.name}</h1>
<p class="mt-2 text-base text-sub">{site.role}</p>
<p class="mt-6 max-w-prose">{site.about}</p>
<p class="mt-6 flex flex-wrap gap-x-5 gap-y-1">
	{#each site.links as l (l.label)}
		<a
			href={l.href}
			target={l.href.startsWith('mailto:') ? undefined : '_blank'}
			rel="external noopener"
			class="text-sub">{l.label} ↗</a
		>
	{/each}
</p>

<Section title="experience">
	<ul class="divide-y divide-line">
		{#each experience as o (o.org)}
			<Org {...o} />
		{/each}
	</ul>
</Section>

<Section title="projects">
	<ul class="grid gap-x-12 gap-y-8 sm:grid-cols-2">
		{#each projects as p (p.title)}
			<li>
				<div class="flex flex-wrap items-baseline justify-between gap-x-4">
					{#if p.href}
						<a href={p.href} target="_blank" rel="external noopener" class="font-bold"
							>{p.title} ↗</a
						>
					{:else}
						<span class="font-bold">{p.title}</span>
					{/if}
					<span class="text-xs text-dim">{p.dates}</span>
				</div>
				<p class="mt-1 text-sub">{p.summary}</p>
				<p class="mt-2 text-xs text-teal">{p.stack.join(' · ')}</p>
			</li>
		{/each}
	</ul>
</Section>

{#if posts.length}
	<Section title="writing">
		<PostList posts={posts.slice(0, 3)} />
	</Section>
{/if}

<Section title="skills">
	<ul class="flex flex-wrap gap-x-5 gap-y-1 text-sub">
		{#each site.skills as skill (skill)}<li>{skill}</li>{/each}
	</ul>
</Section>

<Section title="education">
	<ul class="divide-y divide-line">
		{#each education as o (o.org)}
			<Org {...o} />
		{/each}
	</ul>
</Section>
