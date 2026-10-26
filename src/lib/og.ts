import { readFileSync } from 'node:fs';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { site } from './data.ts';

// read at build time from the project root (prerender runs there)
const font = (weight: 400 | 700) =>
	readFileSync(`node_modules/@fontsource/geist-mono/files/geist-mono-latin-${weight}-normal.woff`);
const fonts = [
	{ name: 'Geist Mono', data: font(400), weight: 400 as const },
	{ name: 'Geist Mono', data: font(700), weight: 700 as const }
];

type Node = { type: string; props: { style?: Record<string, unknown>; children?: unknown } };
const el = (style: Record<string, unknown>, children: unknown): Node => ({
	type: 'div',
	props: { style: { display: 'flex', ...style }, children }
});

/** 1200x630 Catppuccin Mocha card, styled like the site's prompt header. */
export async function ogImage(title: string, subtitle: string) {
	// satori sizes boxes content-box, so padding would grow the card; use a fixed inner box instead
	const tree = el(
		{
			width: 1200,
			height: 630,
			flexDirection: 'column',
			background: '#11111b',
			color: '#cdd6f4',
			fontFamily: 'Geist Mono'
		},
		[
			el({ width: 1200, height: 8, background: '#a6e3a1' }, []),
			el(
				{
					width: 1056,
					height: 478,
					margin: '72px 72px 0',
					flexDirection: 'column',
					justifyContent: 'space-between'
				},
				[
					el({ fontSize: 28, fontWeight: 700, gap: 16 }, [
						el({ color: '#b4befe' }, `~/${site.handle}`),
						el({ color: '#94e2d5' }, 'main')
					]),
					el({ flexDirection: 'column', gap: 24 }, [
						el({ fontSize: 64, fontWeight: 700, lineHeight: 1.15 }, [
							el({ color: '#a6e3a1', marginRight: 24 }, '>'),
							el({ width: 980 }, title)
						]),
						el({ fontSize: 30, color: '#a6adc8', lineHeight: 1.4 }, subtitle)
					]),
					el({ fontSize: 24, color: '#6c7086', justifyContent: 'space-between' }, [
						el({}, site.name),
						el({}, new URL(site.url).host)
					])
				]
			)
		]
	);
	const svg = await satori(tree as Parameters<typeof satori>[0], {
		width: 1200,
		height: 630,
		fonts
	});
	return new Resvg(svg).render().asPng();
}
