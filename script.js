(() => {
  const state = {
    lang: localStorage.getItem("molei-lang") || "en"
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const t = path =>
    path.split(".").reduce((obj, key) => obj?.[key], I18N[state.lang]) ?? path;

  const loc = value =>
    typeof value === "string" ? value : (value?.[state.lang] || value?.en || value?.zh || "");

  function roleClass(key) {
    if (["soleFirst", "coFirst"].includes(key)) return "first";
    if (["soleCorr", "coCorr"].includes(key)) return "corresponding";
    if (["soleFirstCorr", "coFirstSoleCorr", "coFirstCoCorr"].includes(key)) return "both";
    return "";
  }

  function roleBadge(key) {
    return `<span class="role-badge ${roleClass(key)}">${t(`roles.${key}`)}</span>`;
  }

  // Bold Molei Liu in every author list, while keeping the rest of the citation unchanged.
  function formatAuthors(authors) {
    return authors
      .replace(/\bMolei Liu\b/g, '<strong class="self-author">Molei Liu</strong>')
      .replace(/\bM\. Liu\b/g, '<strong class="self-author">M. Liu</strong>')
      .replace(/\bM Liu\b/g, '<strong class="self-author">M Liu</strong>');
  }

  function linkedTitle(p) {
    if (!p.link) return p.title;
    return `<a class="paper-title-link" href="${p.link}" target="_blank" rel="noopener">${p.title}<span class="link-arrow" aria-hidden="true">↗</span></a>`;
  }

  function renderI18N() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    $("#lang-button").textContent = state.lang === "en" ? "中文" : "EN";
    $$("[data-i18n]").forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });

    renderResearch();
    renderMethods();
    renderCollaborations();
    renderPreprints();
    renderPeople();
    renderTimeline();
  }

  function renderResearch() {
    $("#research-grid").innerHTML = RESEARCH.map((item, i) => `
      <article class="research-card">
        <span class="research-number">${String(i + 1).padStart(2, "0")}</span>
        <h3>${loc(item.title)}</h3>
        <p>${loc(item.text)}</p>
      </article>
    `).join("");
  }

  function pubRow(p, statusKey = null) {
    return `
      <article class="pub-row">
        <div class="pub-year">${p.year}</div>
        <div>
          <h3 class="pub-title">${linkedTitle(p)}</h3>
          <p class="pub-authors">${formatAuthors(p.authors)}</p>
          <p class="pub-venue">${p.venue}</p>
        </div>
        <div class="pub-meta">
          ${p.journal ? `<span class="venue-badge">${p.journal}</span>` : ""}
          ${statusKey ? `<span class="status-badge">${t(`status.${statusKey}`)}</span>` : ""}
          ${roleBadge(p.roleKey)}
        </div>
      </article>
    `;
  }

  // Methodological papers are shown in the exact order specified in data.js.
  function renderMethods() {
    $("#methodology-list").innerHTML = METHODOLOGY.map(p => pubRow(p)).join("");
  }

  function renderCollaborations() {
    $("#collaboration-list").innerHTML = COLLABORATIONS.map(p => `
      <article class="featured-card">
        <div class="featured-top">
          <span class="journal-name">${p.journal}</span>
          ${roleBadge(p.roleKey)}
        </div>
        <h3>${linkedTitle(p)}</h3>
        <p>${formatAuthors(p.authors)}</p>
        <p>${p.venue}</p>
      </article>
    `).join("");
  }

  function renderPreprints() {
    $("#preprint-list").innerHTML = PREPRINTS.map(p => pubRow(p, p.statusKey)).join("");
  }

  function personCard(p) {
    const img = p.photo || "assets/images/people/placeholder.svg";
    const links = [
      p.email ? `<a href="mailto:${p.email}">Email</a>` : "",
      p.homepage ? `<a href="${p.homepage}" target="_blank" rel="noopener">${t("people.homepage")}</a>` : ""
    ].filter(Boolean).join("");

    return `
      <article class="person-card">
        <img src="${img}" alt="${loc(p.name)}" loading="lazy">
        <div class="person-body">
          <strong>${loc(p.name)}</strong>
          <span>${loc(p.role)}</span>
          ${p.interests ? `<p>${loc(p.interests)}</p>` : ""}
          ${links ? `<div class="person-links">${links}</div>` : ""}
        </div>
      </article>
    `;
  }

  function renderPeople() {
    const groups = ["postdoc", "phd", "master"];
    $("#people-groups").innerHTML = groups.map(group => {
      const members = PEOPLE[group] || [];
      return `
        <section class="people-group">
          <h3>${t(`people.groups.${group}`)}</h3>
          <div class="people-grid">
            ${members.length ? members.map(personCard).join("") : `<div class="people-empty">${t("people.empty")}</div>`}
          </div>
        </section>
      `;
    }).join("");
  }

  function renderTimeline() {
    $("#timeline").innerHTML = TIMELINE.map(item => `
      <div class="timeline-item">
        <span class="timeline-date">${loc(item.date)}</span>
        <div>
          <strong>${loc(item.title)}</strong>
          <p>${loc(item.detail)}</p>
        </div>
      </div>
    `).join("");
  }

  $("#lang-button").addEventListener("click", () => {
    state.lang = state.lang === "en" ? "zh" : "en";
    localStorage.setItem("molei-lang", state.lang);
    renderI18N();
  });

  $("#menu-button").addEventListener("click", () => {
    const nav = $("#nav-links");
    const open = nav.classList.toggle("open");
    $("#menu-button").setAttribute("aria-expanded", String(open));
  });

  $$("#nav-links a").forEach(a => a.addEventListener("click", () => {
    $("#nav-links").classList.remove("open");
    $("#menu-button").setAttribute("aria-expanded", "false");
  }));

  $("#year").textContent = new Date().getFullYear();
  renderI18N();
})();
