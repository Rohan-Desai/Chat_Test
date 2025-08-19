# DevOps Dashboard (Starter: Steps 1–4)

Stack: **Vite + Vanilla JS + Bootstrap 5 (layout) + Shoelace (drawers/menus)**

This starter includes:
1. Project scaffold (Vite, scripts)
2. App shell (top bar + sidebar + content area)
3. Multi-layer DevOps menu (Plan → Monitor) powered by `src/data/tools.json`
4. Minimal hash router (`#/dashboard`, `#/reports`, `#/security`, `#/tools/:stage/:tool`)

> Next steps in your plan: charts (Chart.js), drawers/wizards, pages, exports.

## Getting Started

```bash
npm i
npm run dev
# open http://localhost:5173
```

If you prefer **pnpm** or **yarn**, those will work too.

## File Layout

```
src/
  app.css
  main.js
  router.js
  components/
    topbar.js
    sidebar.js
  pages/
    dashboard.js
    reports.js
    security.js
    tool.js
  data/
    tools.json
```

## Notes
- Bootstrap and Shoelace are loaded from CDN in `index.html`.
- Routing is hash-based and minimal on purpose.
- Replace placeholder pages with your real content and forms.
