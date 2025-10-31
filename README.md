<!-- 🔸 BEGIN DOC: README.md -->
# Rocket Tools

Rocket Tools is a Hugo-driven, HTMX-powered lab for AI tooling. The site marries static generation with just-enough interactivity through Alpine.js and Netlify Functions.

## Stack at a Glance
- **Hugo** for deterministic static builds.
- **Tailwind CSS 4.1 CLI** (no config files) + **DaisyUI CDN** for theming.
- **Alpine.js** micro-interactions, **HTMX** for server-driven swaps.
- **Netlify Functions (Node 20+)** to call LLMs securely.

## Quickstart
1. Install requirements: Tailwind CLI ≥4.1, Hugo Extended, Node 20+.
2. `cd site`
3. `npx tailwindcss -i ./assets/css/input.css -o ./static/assets/css/output.css --minify`
4. `hugo --minify --gc --source site`

Never create `tailwind.config.js` or `postcss.config.js`. All design tokens live in `site/assets/css/input.css`.
<!-- 🔸 END DOC: README.md -->