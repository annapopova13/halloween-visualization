# The Halloween Archive
Zero-dependency static site (HTML/CSS/JS). No build step, no network needed.
- **Local/offline:** `cd halloween-archive && python3 -m http.server 8080` → http://localhost:8080 (or double-click index.html).
- **Deploy:** drag the folder onto Netlify Drop, or push to GitHub and enable Pages (root), or `vercel --prod`. Not yet published.
- **Charts:** `assets/charts/` (your 9 original files, unmodified). Mapping + approved copy: top of `app.js`.
- Fonts are system stacks (Palatino/Georgia, Courier New, Segoe UI) so nothing loads remotely.
