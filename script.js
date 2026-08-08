(() => {
  const state = {
    lang: localStorage.getItem("site-lang") || "en",
    pubFilter: "all",
    showAllPubs: false
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function t(path) {
    const parts = path.split(".");
    let node = I18N[state.lang];
    for (const p of parts) node = node?.[p];
    return node ?? path;
  }

  function localized(obj) {
    if (!obj) return "";
    return typeof obj === "string" ? obj : (obj[state.lang] || obj.en || obj.zh || "");
  }

  function applyLanguage() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    $("#lang-label").textContent = state.lang === "en" ? "中文" : "EN";

    $$("[data-i18n]").forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });

    renderResearch();
    renderPublications();
    renderPeople();
    renderTimeline("#appointments", APPOINTMENTS);
    renderTimeline("#education", EDUCATION);
    renderCompactList("#awards", AWARDS);
    renderCompactList("#funding", FUNDING);
  }

  function renderResearch() {
    const root = $("#research-grid");
    root.innerHTML = RESEARCH.map((item, idx) => `
      <article class="research-card">
        <span class="research-number">${String(idx + 1).padStart(2, "0")}</span>
        <h3>${localized(item.title)}</h3>
        <p>${localized(item.text)}</p>
      </article>
    `).join("");
  }

  function renderPubFilters() {
    const root = $("#pub-filters");
    const keys = ["all", "statistics", "ml", "biomedical"];
    root.innerHTML = keys.map(key => `
      <button type="button"
        class="filter-btn ${state.pubFilter === key ? "active" : ""}"
        data-pub-filter="${key}">
        ${t(`publications.filters.${key}`)}
      </button>
    `).join("");

    $$("[data-pub-filter]", root).forEach(btn => {
      btn.addEventListener("click", () => {
        state.pubFilter = btn.dataset.pubFilter;
        renderPublications();
      });
    });
  }

  function renderPublications() {
    renderPubFilters();

    const list = PUBLICATIONS.filter(pub => {
      const categoryMatch = state.pubFilter === "all" || pub.category === state.pubFilter;
      const selectedMatch = state.showAllPubs || pub.selected;
      return categoryMatch && selectedMatch;
    });

    const root = $("#pub-list");
    if (!list.length) {
      root.innerHTML = `<div class="pub-empty">${t("publications.empty")}</div>`;
    } else {
      root.innerHTML = list.map(pub => `
        <article class="pub-item">
          <div class="pub-year">${pub.year}</div>
          <div>
            <h3 class="pub-title">${pub.title}</h3>
            <p class="pub-authors">${pub.authors}</p>
            <p class="pub-venue">${pub.venue}</p>
          </div>
          ${pub.badge ? `<span class="pub-badge">${pub.badge}</span>` : ""}
        </article>
      `).join("");
    }

    $("#toggle-all-pubs").textContent = state.showAllPubs
      ? t("publications.showSelected")
      : t("publications.showAll");
  }

  function personCard(person) {
    const photo = person.photo || "assets/images/people/placeholder.svg";
    const links = [
      person.email ? `<a href="mailto:${person.email}">Email</a>` : "",
      person.homepage ? `<a href="${person.homepage}" target="_blank" rel="noopener">${t("people.homepage")}</a>` : ""
    ].filter(Boolean).join("");

    return `
      <article class="person-card">
        <img class="person-photo" src="${photo}" alt="${localized(person.name)}" loading="lazy">
        <div class="person-body">
          <h4>${localized(person.name)}</h4>
          <p class="person-role">${localized(person.role)}</p>
          ${person.interests ? `<p class="person-interest">${localized(person.interests)}</p>` : ""}
          ${links ? `<div class="person-links">${links}</div>` : ""}
        </div>
      </article>
    `;
  }

  function renderPeople() {
    const root = $("#people-groups");
    const order = ["postdoc", "phd", "master"];

    root.innerHTML = order.map(group => {
      const members = PEOPLE[group] || [];
      const cards = members.length
        ? members.map(personCard).join("")
        : `<div class="empty-people">${t("people.empty")}</div>`;

      return `
        <section class="people-group">
          <h3>${t(`people.groups.${group}`)}</h3>
          <div class="people-grid">${cards}</div>
        </section>
      `;
    }).join("");
  }

  function renderTimeline(selector, items) {
    $(selector).innerHTML = items.map(item => `
      <article class="timeline-item">
        <div class="timeline-date">${localized(item.date)}</div>
        <div class="timeline-content">
          <h4>${localized(item.title)}</h4>
          <p>${localized(item.detail)}</p>
        </div>
      </article>
    `).join("");
  }

  function renderCompactList(selector, items) {
    $(selector).innerHTML = `
      <ul class="list-compact">
        ${items.map(item => `
          <li><strong>${item.year}</strong> · ${localized(item.text)}</li>
        `).join("")}
      </ul>
    `;
  }

  $("#lang-toggle").addEventListener("click", () => {
    state.lang = state.lang === "en" ? "zh" : "en";
    localStorage.setItem("site-lang", state.lang);
    applyLanguage();
  });

  $("#toggle-all-pubs").addEventListener("click", () => {
    state.showAllPubs = !state.showAllPubs;
    renderPublications();
  });

  const menuToggle = $("#menu-toggle");
  const siteNav = $("#site-nav");
  menuToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  $$("#site-nav a").forEach(a => a.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));

  $("#year").textContent = new Date().getFullYear();
  applyLanguage();
})();
