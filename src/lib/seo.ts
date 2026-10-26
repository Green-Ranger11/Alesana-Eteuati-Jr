import { site } from './data.ts';

const basePath = new URL(site.url).pathname.replace(/\/$/, '');

/** Absolute URL for a path relative to the site root, with or without the deploy base prefix. */
export const absolute = (path: string) =>
	site.url + (path.startsWith(basePath) ? path.slice(basePath.length) : path);

export const escapeXml = (s: string) => s.replace(/[<>&'"]/g, (c) => `&#${c.charCodeAt(0)};`);
