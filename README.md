# Alesana Eteuati Jr

Personal portfolio. SvelteKit + Tailwind 4 + mdsvex, prerendered with `adapter-static`, deployed to GitHub Pages.

```sh
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # static site in build/
```

- Content: `src/lib/data.ts` (about, experience, projects, education, links)
- Blog posts: `src/posts/*.md` with `title`, `date`, `description` and optional `tags`, `updated`, `draft` frontmatter. Images go in `src/posts/<slug>/` and are referenced as `./<slug>/image.png`
- Generated at build: `/rss.xml`, `/sitemap.xml`, `/robots.txt`, and Open Graph cards at `/og/<slug>.png`
- Site URL for canonical links and feeds: `site.url` in `src/lib/data.ts`
- Deploy: push to `main`; `.github/workflows/deploy.yml` builds and publishes
