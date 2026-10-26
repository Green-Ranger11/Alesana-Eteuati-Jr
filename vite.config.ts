import { fileURLToPath } from 'node:url';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const theme = 'catppuccin-mocha';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['sh', 'bash', 'ts', 'js', 'json', 'svelte', 'html', 'css', 'go', 'qml', 'cpp', 'yaml']
});

export default defineConfig({
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries and mdsvex output (it uses $$props). Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') || filename.endsWith('.md')
						? undefined
						: true
			},
			adapter: adapter({ fallback: '404.html' }),
			// GitHub Pages serves the repo under /<repo-name>; the deploy workflow sets BASE_PATH
			paths: { base: (process.env.BASE_PATH ?? '') as '' | `/${string}` },
			preprocess: [
				mdsvex({
					extensions: ['.svx', '.md'],
					layout: fileURLToPath(new URL('./src/lib/blog/PostLayout.svelte', import.meta.url)),
					highlight: {
						highlighter: async (code, lang) => {
							const loaded = highlighter.getLoadedLanguages().includes(lang ?? '');
							const html = highlighter.codeToHtml(code, { lang: loaded ? lang! : 'text', theme });
							return `{@html \`${escapeSvelte(html)}\`}`;
						}
					},
					rehypePlugins: [
						rehypeSlug,
						[rehypeAutolinkHeadings, { behavior: 'wrap' }],
						[rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }]
						// mdsvex bundles older unified types than current rehype plugins
					] as never
				})
			],
			extensions: ['.svelte', '.svx', '.md']
		})
	]
});
