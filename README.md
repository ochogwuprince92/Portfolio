## Deploy to Render (Free Static Site)

This project is a static React-on-CDN site (no build needed). Use Render’s free Static Site hosting.

### 1) Push to GitHub
1. Create a new GitHub repo and push the contents of this folder.
2. Ensure `index.html` is at the repo root and `render.yaml` is present.

### 2) Create Static Site on Render
1. Sign in at [Render](https://render.com/).
2. New → Static Site.
3. Connect your GitHub and select your repository.
4. Set Root Directory to `/`.
5. Build Command: leave empty.
6. Publish Directory: `.`
7. Click Create Static Site.

Render will deploy and give you a live URL. Subsequent pushes to `main` auto-deploy.

### Alternative: Drag & Drop
You can also zip the project and use Render’s Static Site drag‑and‑drop at [Render Static Sites](https://render.com/docs/static-sites).

### Notes
- Static files are served from the repo root.
- `render.yaml` is optional but included for clarity and caching headers.
- Update your profile image at `assets/img/ochogwu.jpg`.

