# Alessandro Bellassai: Portfolio

Static, dependency-free portfolio site (HTML + CSS + vanilla JS), ready for Netlify.

## Before you publish
1. **LinkedIn:** open `js/main.js` and add your handle to `LINKEDIN_URL` (currently `https://www.linkedin.com/in/`).
2. **Screenshots:** already included in `assets/screenshots/`; swap or add more in the `#vr` section of `index.html`.
3. **CV:** replace `assets/Alessandro_Bellassai_CV.pdf` whenever you update your CV.

## Deploy on Netlify (open source via GitHub)
1. Create a public GitHub repo and push this folder.
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick the repo.
3. Build command: *(leave empty)* · Publish directory: `.` (already set in `netlify.toml`).
4. Deploy. Optionally rename the site under **Site configuration → Change site name**.

Or drag-and-drop this folder onto https://app.netlify.com/drop for a quick test.

## Local preview
`python3 -m http.server 8000` then open http://localhost:8000

## License
MIT. See `LICENSE`.
