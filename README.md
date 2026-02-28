# carlzhang4.github.io Homepage

A lightweight academic-style personal homepage for GitHub Pages.

## File Structure
- `index.html`: page layout template (rarely needs edits)
- `styles.css`: visual style and responsive layout
- `data/content.js`: all editable content blocks (main file you edit)
- `scripts/render.js`: render logic from `content.js` to the page
- `.github/workflows/deploy.yml`: auto deploy to GitHub Pages on push to `main`

## How to Edit Content Fast
Open `data/content.js`, then edit by block:
- `site`: name, subtitle, hero buttons, copyright
- `profile`: right card basic info
- `about`: biography paragraph
- `research`: research cards
- `publications`: paper list and links
- `teaching`: course list
- `service`: academic service list
- `contact`: footer contact info

## Local Preview
```bash
cd "/Users/cj/Nutstore Files/我的坚果云/Bot/个人主页"
python3 -m http.server 8000
```
Open `http://localhost:8000`

## Deploy
```bash
git add .
git commit -m "update homepage"
git push
```
GitHub Actions will publish automatically.
