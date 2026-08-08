# Molei Liu / 刘默雷 — Personal Academic Website

A lightweight bilingual academic website designed for GitHub Pages.

**Repository target:** `moleibobliu/moleibobliu.github.io`

## Files

```text
.
├── index.html
├── styles.css
├── data.js
├── script.js
├── .nojekyll
├── README.md
└── assets
    ├── CV_Molei_Liu_CN.pdf
    └── images
        └── people
            ├── placeholder.svg
            └── README.md
```

## Deploy to GitHub Pages

1. Create or open the repository:
   `moleibobliu/moleibobliu.github.io`
2. Upload **all files in this folder to the repository root**.
3. Commit to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
6. The site should be served at:
   `https://moleibobliu.github.io`

Because the repository name already matches the GitHub Pages user-site convention, no framework or build command is required.

---

## 最常用的修改：添加课题组成员

打开 `data.js`，找到：

```js
const PEOPLE = {
  postdoc: [],
  phd: [],
  master: []
};
```

例如添加一名博士生：

```js
const PEOPLE = {
  postdoc: [],
  phd: [
    {
      name: { en: "Firstname Lastname", zh: "中文名" },
      role: { en: "Ph.D. Student", zh: "博士研究生" },
      interests: {
        en: "Transfer learning; causal inference",
        zh: "迁移学习；因果推断"
      },
      photo: "assets/images/people/firstname.jpg",
      email: "name@pku.edu.cn",
      homepage: ""
    }
  ],
  master: []
};
```

然后把照片放到：

```text
assets/images/people/firstname.jpg
```

建议照片比例接近 **4:3 横图**；网页会自动裁剪。

---

## 更换主页个人照片

当前主页右侧使用的是极简的 `ML` 占位图。

如果想加入正式照片，可以：

1. 把照片保存为 `assets/images/molei.jpg`
2. 在 `index.html` 中找到：

```html
<div class="profile-placeholder" aria-hidden="true">
  <span>ML</span>
</div>
```

替换为：

```html
<img
  class="person-photo"
  src="assets/images/molei.jpg"
  alt="Molei Liu"
>
```

如果希望主页照片更高，可以在 `styles.css` 里单独调整图片高度。

---

## 修改论文列表

在 `data.js` 里的 `PUBLICATIONS` 数组修改。

```js
{
  year: "2026",
  title: "Paper title",
  authors: "A. Author, M. Liu",
  venue: "Journal / Conference",
  category: "statistics", // statistics | ml | biomedical
  selected: true,        // 首页默认是否展示
  badge: "JASA"
}
```

- `selected: true`：默认精简模式下展示
- `selected: false`：点击“Show all listed work / 显示全部论文”后展示
- `category` 控制统计学 / 机器学习 / 生物医学筛选

---

## 修改中英文文字

绝大多数双语文字都在 `data.js` 的 `I18N` 中。

页面会记住访客最近使用的语言（通过浏览器 `localStorage`）。

---

## Adding an English CV

The current package includes the Chinese CV as:

```text
assets/CV_Molei_Liu_CN.pdf
```

If you later add an English CV, for example:

```text
assets/CV_Molei_Liu_EN.pdf
```

you can add a second button or change the CV link in `index.html`.

---

## Design choices

- No React / Vue / Jekyll dependency
- No external fonts, icons, or CDNs
- Mobile responsive
- Bilingual English / Chinese toggle
- Search-engine-friendly metadata
- Accessible navigation and semantic HTML
- Easy-to-edit group member and publication data
- Suitable for direct GitHub Pages deployment

## Local preview

From the project folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also double-click `index.html`, but a local server is closer to the GitHub Pages environment.
