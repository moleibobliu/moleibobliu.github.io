# Molei Liu / 刘默雷 — Academic Homepage

This is a pure static GitHub Pages site. No build framework is required.

## Deploy

Upload the files in this folder directly to the root of:

`moleibobliu/moleibobliu.github.io`

Use:

- **Settings → Pages**
- **Deploy from a branch**
- Branch: `master`
- Folder: `/ (root)` 

## Main content files   

- `index.html` — page structure
- `styles.css` — visual style
- `data.js` — publications, manuscripts, bilingual text, group members
- `script.js` — rendering, bilingual switch, author highlighting
- `assets/images/molei.jpg` — profile photo

## Publications

All methodology papers are now shown directly in the order in `METHODOLOGY`; there is no selected/unselected distinction and no topic filter.

Each work may have:

```js
link: "https://..."
```

The paper title becomes clickable. If a link is uncertain in the future, use:

```js
link: ""
```

## Manuscript status

Available `statusKey` values:

```js
"minor"        // Under minor revision / 小修中
"major"        // Under major revision / 大修中
"submission"   // In submission / 投稿中
"preparation"  // In preparation / 准备中
```

For example:

```js
{
  year: "2026+",
  title: "New manuscript",
  authors: "A. Author, M. Liu",
  venue: "Manuscript",
  statusKey: "preparation",
  roleKey: "coCorr",
  link: ""
}
```

## Authorship contribution labels

Available role keys include:

```js
soleFirst
coFirst
soleCorr
coCorr
soleFirstCorr
coFirstSoleCorr
coFirstCoCorr
alphabetical
coauthor
```

The website automatically bolds `M. Liu`, `M Liu`, and `Molei Liu` in author lists.

## Group members

Edit `PEOPLE` at the bottom of `data.js`.

Example:

```js
phd: [
  {
    name: { en: "Jane Doe", zh: "张三" },
    role: { en: "Ph.D. Student", zh: "博士研究生" },
    interests: { en: "Transfer learning", zh: "迁移学习" },
    photo: "assets/images/people/jane.jpg",
    email: "jane@pku.edu.cn",
    homepage: ""
  }
]
```

Put photos in `assets/images/people/`.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
