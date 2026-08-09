# Molei Liu / 刘默雷 — Academic Homepage V3

This version intentionally simplifies the visual design while strengthening the academic content.

## Main changes

- Simpler faculty-homepage style
- No CV download/file
- Methodological research remains the primary identity
- Dedicated **Interdisciplinary Collaborations** section
- Dedicated **Selective Preprints & Manuscripts** section
- Every displayed work has an explicit authorship/contribution label
- Default methodology view includes all JASA/JRSSB/Biometrika/JMLR papers in the current list
- Bilingual English/Chinese
- Research-group module retained

## Deploy 

Upload all files in this folder directly to the root of:

`moleibobliu/moleibobliu.github.io`

Then go to **Settings → Pages → Deploy from a branch** and use the branch containing the files (your repository has used `master`) with `/ (root)`.

If you previously clicked **Unpublish site**, save the publishing source again and make one new commit to the publishing branch to trigger a fresh Pages deployment.

## Replace your profile photo

Put your photo at:

`assets/images/molei.jpg`

Then replace in `index.html`:

```html
<img src="assets/images/profile-placeholder.svg" alt="Molei Liu profile placeholder">
```

with:

```html
<img src="assets/images/molei.jpg" alt="Molei Liu">
```

## Add group members

Edit the `PEOPLE` object at the bottom of `data.js`.

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

## Contribution labels

The labels are based on authorship notes explicitly stated in the supplied CV. For work where the CV did not identify a special first/corresponding-author role, the site uses the conservative label **Co-author** rather than inferring a stronger contribution from author order.

## Manuscript status

The preprint/manuscript statuses are copied from the supplied CV: under minor revision, under major revision, or in submission. Update `PREPRINTS` in `data.js` whenever status changes.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## V4 content policy

Grant and award information is intentionally omitted from the homepage. The About section focuses on academic appointments and training.
