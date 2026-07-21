# Molei Liu — Academic Pages website

This repository is a migration of the previous hand-written Jekyll homepage to the **Academic Pages** faculty-site style. It pins the upstream theme to `v0.8.4` through `jekyll-remote-theme`, while keeping all personal content and visual overrides in this repository.

## What was migrated

- 43 publications, separated into methods/theory, biomedical informatics, and collaborative research
- Five talks, including the two existing video links
- Research interests and academic experience
- Teaching, mentoring, and professional service
- Redirects for the previous `/pub/` and `/talk/` URLs

## Deploy on GitHub Pages

1. Back up the existing `moleibobliu.github.io` repository.
2. Replace its contents with the contents of this folder and push to `master` or `main`.
3. In **Repository Settings → Pages**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and confirm that “Build and deploy academic website” succeeds.

The included workflow builds and deploys the site after every push to `master` or `main`.

## Preview locally

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open `http://localhost:4000`.

## Routine updates

### Add or edit a publication

Each publication is a Markdown file in `_publications/`. Copy an existing file, or run:

```bash
python scripts/new_publication.py \
  --title "Paper title" \
  --citation "Authors. 2026. Journal." \
  --venue "Journal" \
  --year 2026 \
  --area methods \
  --paper-url "https://..." \
  --selected
```

Set `selected: true` to show an item on the homepage. Valid research areas are `methods`, `informatics`, and `collaborative`.

### Add a talk

Copy a file in `_talks/`, then edit its title, date, venue, and optional `video_url`.

### Update biography or experience

Edit `_pages/about.md`.

### Update navigation

Edit `_data/navigation.yml`.

### Add the CV

Place the PDF at `files/Molei_Liu_CV.pdf`, then uncomment the download button in `_pages/cv.md`.

## Validation

Install the small validation dependencies and run:

```bash
python -m pip install -r scripts/requirements.txt
python scripts/validate_site.py
```

## Theme attribution

The visual foundation is Academic Pages, derived from Minimal Mistakes and distributed under the MIT License. Local content and custom styling are maintained separately in this repository.
