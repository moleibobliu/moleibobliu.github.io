# Molei Liu / 刘默雷 — Academic Website V2

A bilingual, pure-static GitHub Pages site. **No CV file is included.** No Jekyll, npm, Ruby, or build step is required.

## Deploy
Upload everything in this folder directly to the root of `moleibobliu/moleibobliu.github.io`.

Then use **Settings → Pages → Deploy from a branch**, select the branch that contains these files (your repository has used `master`), and select `/ (root)`.

## Add your profile photo
Put your image at `assets/images/molei.jpg`, then in `index.html` replace:

```html
<img src="assets/images/profile-placeholder.svg" alt="Molei Liu profile placeholder" />
```
 
with:

```html
<img src="assets/images/molei.jpg" alt="Molei Liu" />
```

## Add group members
Edit `PEOPLE` at the bottom of `data.js`.

```js
const PEOPLE = {
  postdoc: [],
  phd: [
    {
      name: { en: "Jane Doe", zh: "张三" },
      role: { en: "Ph.D. Student", zh: "博士研究生" },
      interests: { en: "Transfer learning", zh: "迁移学习" },
      photo: "assets/images/people/jane.jpg",
      email: "jane@pku.edu.cn",
      homepage: ""
    }
  ],
  master: []
};
```

## Publication display
`PUBLICATIONS` in `data.js` contains the methodology/theory list used by the site. Set `selected: true` to show a paper in the compact default view.

Topics: `transfer`, `inference`, `semisup`, `robustml`.

## Local preview
```bash
python -m http.server 8000
```
Open `http://localhost:8000`.
