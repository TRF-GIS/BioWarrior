# Animal Anatomy: Guess Who?

A static, three-file site (`index.html`, `styles.css`, `script.js`) — no build step, no dependencies.

## Run it locally
Just open `index.html` in a browser. (Or, for a local server: `python3 -m http.server` from this folder, then visit `http://localhost:8000`.)

## Publish with GitHub Pages
1. Create a new repo on GitHub (or use an existing one) and push these three files to its root.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch," pick your default branch (e.g. `main`) and the `/ (root)` folder, then **Save**.
4. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## What changed in this version
- The old labeled anatomy diagram is now a grid of part cards — each with a small picture (icon), the part's name, and its worksheet-based description.
- All 84 parts from the original data are included: squid (24: 11 external + 13 internal), earthworm (17: 8 external + 9 internal), shrimp (17 external), ant (26 external).
- The elimination game still works the same way: click a card to eliminate it (it turns red, like a flipped Guess Who tile); click it again to restore it. Keyboard users can do the same with Tab + Enter/Space.
