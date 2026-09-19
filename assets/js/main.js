/* ==========================================================================
   main.js — بناء الواجهة: الترويسة، التذييل، القوائم، وصفحة المقال
   ========================================================================== */

const SITE = {
  email: "azoznan123@gmail.com",
  year: new Date().getFullYear()
};

/* ---------------------------------------------------------------- أدوات */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* مساحة إعلانية — AdSense placeholder */
function adUnit(slotName, extraClass = "") {
  return `
  <div class="ad-unit ${extraClass}" data-ad-slot="${slotName}">
    <!--
      Google AdSense — استبدل ما بداخل هذا العنصر بكود وحدتك الإعلانية بعد الموافقة:
      Replace the content of this block with your approved AdSense unit code:
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"><\/script>
      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="${slotName}" data-ad-format="auto" data-full-width-responsive="true"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
    -->
    <div class="ad-inner">
      <span class="ad-badge" data-i18n="ads.label"></span>
      <span class="ad-size">728 × 90 / Responsive</span>
      <span class="ad-note" data-i18n="ads.note"></span>
    </div>
  </div>`;
}

/* ------------------------------------------------------------- الترويسة */
function renderHeader(active) {
  const navItems = [
    { key: "nav.home", href: "index.html", id: "home" },
    { key: "nav.articles", href: "index.html#articles", id: "articles" },
    { key: "nav.about", href: "about.html", id: "about" },
    { key: "nav.privacy", href: "privacy.html", id: "privacy" }
  ];

  const navHtml = navItems
    .map(
      (item) => `
      <a href="${item.href}" class="nav-link ${active === item.id ? "is-active" : ""}" data-i18n="${item.key}"></a>`
    )
    .join("");

  const categoriesHtml = Object.keys(CATEGORIES)
    .map(
      (key) =>
        `<a class="nav-link nav-sub" href="index.html?category=${key}" data-i18n="nav.${CATEGORIES[key].nav}"></a>`
    )
    .join("");

  const toolsHtml = [
    { href: "quizzes.html", id: "quizzes", key: "nav.quizzes" },
    { href: "challenge.html", id: "challenge", key: "nav.challenge" },
    { href: "bodylanguage.html", id: "bodylang", key: "nav.bodylang" },
    { href: "ask.html", id: "ask", key: "nav.ask" }
  ]
    .map((item) => `<a class="nav-link nav-sub ${active === item.id ? "is-active" : ""}" href="${item.href}" data-i18n="${item.key}"></a>`)
    .join("");

  return `
  <header class="site-header" id="siteHeader">
    <div class="header-bar">
      <div class="container header-inner">
        <a href="index.html" class="brand">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 21c-4.5-2.6-8-5.9-8-10.2A4.8 4.8 0 0 1 12 7.6a4.8 4.8 0 0 1 8 3.2C20 15.1 16.5 18.4 12 21Z"/>
              <path d="M12 7.6V21"/><path d="M8.4 12.6h7.2"/>
            </svg>
          </span>
          <span class="brand-text">
            <strong data-i18n="brand.name"></strong>
            <small data-i18n="brand.tagline"></small>
          </span>
        </a>

        <nav class="main-nav" id="mainNav" aria-label="Main">
          ${navHtml}
          <div class="nav-dropdown">
            <button type="button" class="nav-link nav-drop-btn" aria-expanded="false">
              <span data-i18n="section.categories"></span>
              <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="nav-dropdown-menu">${categoriesHtml}</div>
          </div>
          <div class="nav-dropdown">
            <button type="button" class="nav-link nav-drop-btn ${["quizzes","challenge","bodylang","ask"].includes(active) ? "is-active" : ""}" aria-expanded="false">
              <span data-i18n="nav.tools"></span>
              <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="nav-dropdown-menu">${toolsHtml}</div>
          </div>
        </nav>

        <div class="header-actions">
          <button type="button" class="mode-toggle" data-mode-toggle aria-pressed="false">
            <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>
            </svg>
            <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
            </svg>
            <span class="sr-only" data-mode-label></span>
          </button>

          <button type="button" class="lang-toggle" data-lang-toggle data-i18n-title="lang.switchTitle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z"/>
            </svg>
            <span data-i18n="lang.switch"></span>
          </button>

          <button type="button" class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="mobileNav">
            <span class="sr-only" data-i18n="nav.menu"></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="mobile-nav" id="mobileNav" hidden>
      ${navHtml}
      <div class="mobile-sub">${categoriesHtml}</div>
      <div class="mobile-sub-title" data-i18n="nav.tools"></div>
      <div class="mobile-sub">${toolsHtml}</div>
    </div>
  </header>`;
}

/* ------------------------------------------------------------- التذييل */
function renderFooter() {
  const topics = Object.keys(CATEGORIES)
    .map(
      (key) =>
        `<li><a href="index.html?category=${key}" data-i18n="nav.${CATEGORIES[key].nav}"></a></li>`
    )
    .join("");

  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col footer-about">
        <div class="footer-brand">
          <span data-i18n="brand.name"></span>
        </div>
        <p data-i18n="footer.about"></p>
        <p class="footer-lang-note" data-i18n="footer.langNote"></p>
      </div>

      <div class="footer-col">
        <h3 data-i18n="footer.links"></h3>
        <ul>
          <li><a href="index.html" data-i18n="nav.home"></a></li>
          <li><a href="index.html#articles" data-i18n="nav.articles"></a></li>
          <li><a href="about.html" data-i18n="nav.about"></a></li>
          <li><a href="privacy.html" data-i18n="nav.privacy"></a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3 data-i18n="footer.topics"></h3>
        <ul>${topics}</ul>
      </div>

      <div class="footer-col">
        <h3 data-i18n="nav.tools"></h3>
        <ul>
          <li><a href="quizzes.html" data-i18n="nav.quizzes"></a></li>
          <li><a href="challenge.html" data-i18n="nav.challenge"></a></li>
          <li><a href="bodylanguage.html" data-i18n="nav.bodylang"></a></li>
          <li><a href="ask.html" data-i18n="nav.ask"></a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3 data-i18n="footer.contact"></h3>
        <ul class="footer-contact">
          <li>
            <a href="mailto:${SITE.email}" dir="ltr">${SITE.email}</a>
          </li>
          <li><a href="about.html" data-i18n="nav.about"></a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>&copy; ${SITE.year} <span data-i18n="brand.name"></span> — <span data-i18n="footer.rights"></span></p>
        <p data-i18n="footer.madeWith"></p>
      </div>
    </div>
  </footer>`;
}

/* ---------------------------------------------------------- بطاقة مقال */
function categoryBadge(cat) {
  return `<span class="badge badge-${CATEGORIES[cat].color}">${CATEGORIES[cat][currentLang]}</span>`;
}

/* الصورة البارزة للمقال (مع بقاء التدرّج اللوني احتياطياً خلفها) */
function coverMedia(article, options = {}) {
  const { eager = false, alt = "", parallax = false } = options;
  if (!article.image) return `<span class="card-emoji">${article.emoji}</span>`;
  return `<img class="cover-img" src="${article.image}" alt="${escapeHtml(alt)}" width="1200" height="800"
    ${parallax ? 'data-parallax="0.12" ' : ""}loading="${eager ? "eager" : "lazy"}" decoding="async"${
    eager ? ' fetchpriority="high"' : ""
  }>`;
}

function miniCover(article) {
  const img = article.image
    ? `<img src="${article.image}" alt="" loading="lazy" decoding="async">`
    : "";
  return `<span class="mini-cover ${article.cover}">${img}</span>`;
}

function articleCard(article, options = {}) {
  const { large = false, reveal } = options;
  const href = `article.html?id=${article.id}`;
  return `
  <article class="card ${large ? "card-large" : ""}" data-reveal${
    typeof reveal === "number" ? ` style="--reveal-i:${reveal % 3}"` : ""
  }>
    <a class="card-cover ${article.cover}" href="${href}" aria-hidden="true" tabindex="-1">
      ${coverMedia(article)}
    </a>
    <div class="card-body">
      <div class="card-meta">
        ${categoryBadge(article.category)}
        <time datetime="${article.date}">${formatDate(article.date, currentLang)}</time>
        <span class="dot">•</span>
        <span>${article.readTime[currentLang]} ${t("card.min")}</span>
      </div>
      <h3 class="card-title"><a href="${href}">${article.title[currentLang]}</a></h3>
      <p class="card-excerpt">${article.excerpt[currentLang]}</p>
      <a class="card-link" href="${href}">
        <span data-i18n="card.read"></span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path class="arrow-ltr" d="M5 12h14M13 6l6 6-6 6"/><path class="arrow-rtl" d="M19 12H5M11 18l-6-6 6-6"/>
        </svg>
      </a>
    </div>
  </article>`;
}

/* ------------------------------------------------------------ الرئيسية */
function renderHome() {
  const heroEl = document.getElementById("heroSpotlight");
  const featuredEl = document.getElementById("featuredGrid");
  const latestEl = document.getElementById("latestGrid");
  const chipsEl = document.getElementById("categoryChips");
  const countEl = document.getElementById("postsCount");
  const emptyEl = document.getElementById("emptyResults");

  const activeCategory = qs("category") || "all";
  setTheme(activeCategory);

  const statArticles = document.getElementById("statArticles");
  const statCategories = document.getElementById("statCategories");
  if (statArticles) statArticles.textContent = ARTICLES.length;
  if (statCategories) statCategories.textContent = Object.keys(CATEGORIES).length;

  const featured = sortedArticles(getFeatured());
  if (heroEl && featured[0]) {
    const spotlight = featured[0];
    heroEl.innerHTML = `
      <a class="spotlight ${spotlight.cover}" href="article.html?id=${spotlight.id}" aria-hidden="true" tabindex="-1">
        ${coverMedia(spotlight, { eager: true, parallax: true })}
      </a>
      <div class="spotlight-body">
        <div class="card-meta">
          ${categoryBadge(spotlight.category)}
          <time datetime="${spotlight.date}">${formatDate(spotlight.date, currentLang)}</time>
          <span class="dot">•</span>
          <span>${spotlight.readTime[currentLang]} ${t("card.min")}</span>
        </div>
        <h2 class="spotlight-title"><a href="article.html?id=${spotlight.id}">${spotlight.title[currentLang]}</a></h2>
        <p>${spotlight.excerpt[currentLang]}</p>
        <a class="btn btn-primary" href="article.html?id=${spotlight.id}">
          <span data-i18n="card.read"></span>
        </a>
      </div>`;
  }

  if (featuredEl) {
    featuredEl.innerHTML = featured.slice(1).map((a, i) => articleCard(a, { reveal: i })).join("");
  }

  if (chipsEl) {
    const chips = [{ key: "all" }, ...Object.keys(CATEGORIES).map((k) => ({ key: k }))];
    chipsEl.innerHTML = chips
      .map((c) => {
        const label = c.key === "all" ? t("filter.all") : CATEGORIES[c.key][currentLang];
        const count = c.key === "all" ? ARTICLES.length : getByCategory(c.key).length;
        return `<button type="button" class="chip ${activeCategory === c.key ? "is-active" : ""}" data-category="${c.key}">
          <span>${label}</span><em>${count}</em>
        </button>`;
      })
      .join("");

    chipsEl.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const cat = chip.dataset.category;
        const url = new URL(window.location.href);
        if (cat === "all") url.searchParams.delete("category");
        else url.searchParams.set("category", cat);
        window.history.replaceState({}, "", url);
        setTheme(cat);
        renderLatest();
      });
    });
  }

  function renderLatest() {
    if (!latestEl) return;
    const cat = qs("category") || "all";
    const query = (document.getElementById("searchInput") || {}).value || "";
    let list = query.trim() ? searchArticles(query, currentLang) : sortedArticles(getByCategory(cat));

    latestEl.innerHTML = list.map((a, i) => articleCard(a, { reveal: i })).join("");
    if (countEl) {
      countEl.textContent = `${list.length} ${t("posts.count")}`;
    }
    if (emptyEl) emptyEl.hidden = list.length !== 0;

    document.querySelectorAll("#categoryChips .chip").forEach((chip) => {
      chip.classList.toggle("is-active", chip.dataset.category === cat);
    });
    observeReveals();
  }

  renderLatest();

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    let timer;
    searchInput.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(renderLatest, 180);
    });
  }
}

/* ---------------------------------------------------------- صفحة المقال */
function renderArticlePage() {
  const root = document.getElementById("articleRoot");
  if (!root) return;

  const id = qs("id");
  const article = getArticle(id);

  if (!article) {
    root.innerHTML = `
      <div class="not-found">
        <h1 data-i18n="article.notFound"></h1>
        <p data-i18n="article.notFoundHint"></p>
        <a class="btn btn-primary" href="index.html"><span data-i18n="article.back"></span></a>
      </div>`;
    return;
  }

  document.body.dataset.articleTitleAr = article.title.ar;
  document.body.dataset.articleTitleEn = article.title.en;
  setTheme(article.category);

  root.innerHTML = `
    <a class="back-link" href="index.html">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path class="arrow-ltr" d="M19 12H5M11 18l-6-6 6-6"/><path class="arrow-rtl" d="M5 12h14M13 6l6 6-6 6"/>
      </svg>
      <span data-i18n="article.back"></span>
    </a>

    <div class="article-meta-top">
      ${categoryBadge(article.category)}
      <time datetime="${article.date}">${t("article.publishedOn")} ${formatDate(article.date, currentLang)}</time>
      ${article.updated ? `<span>${t("article.updatedOn")}: ${formatDate(article.updated, currentLang)}</span>` : ""}
      <span class="dot">•</span>
      <span>${article.readTime[currentLang]} ${t("card.min")}</span>
    </div>

    <h1 class="article-title">${article.title[currentLang]}</h1>

    <div class="article-byline">
      <span class="avatar" aria-hidden="true">✍️</span>
      <span>${t("card.by")} <strong>${t("card.author")}</strong></span>
    </div>

    <div class="article-hero ${article.cover}">
      ${coverMedia(article, { eager: true, alt: article.title[currentLang], parallax: true })}
    </div>

    ${adUnit("article-top")}

    <div class="prose" id="proseBody">${article.body[currentLang]}</div>

    ${adUnit("article-middle")}

    <div class="article-note">
      <h4 data-i18n="article.disclaimerTitle"></h4>
      <p data-i18n="article.disclaimer"></p>
    </div>

    <div class="article-share">
      <span data-i18n="article.share"></span>
      <div class="share-buttons">
        <a class="share-btn" target="_blank" rel="noopener" data-share="facebook" href="#" aria-label="Facebook">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z"/></svg>
        </a>
        <a class="share-btn" target="_blank" rel="noopener" data-share="twitter" href="#" aria-label="X / Twitter">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 3h3l-6.6 7.6L21.7 21h-6l-4.7-6.1L5.6 21h-3l7.1-8.1L2.5 3h6.2l4.2 5.6L17.5 3Zm-1 16h1.7L7.6 4.7H5.8L16.5 19Z"/></svg>
        </a>
        <a class="share-btn" target="_blank" rel="noopener" data-share="whatsapp" href="#" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 16.4a7.4 7.4 0 0 1-3.8-1l-.3-.2-2.7.7.7-2.6-.2-.3A7.4 7.4 0 1 1 12 19.4Zm4-5.5c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6 6 0 0 1-3-2.6c-.2-.4.2-.4.5-1.2.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3A2.9 2.9 0 0 0 6.5 12a5 5 0 0 0 1 2.6 11.4 11.4 0 0 0 4.4 3.9c1.6.6 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.2-.2-.4-.3Z"/></svg>
        </a>
        <button type="button" class="share-btn" data-share="copy" aria-label="Copy link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>
        </button>
      </div>
    </div>

    <section class="related">
      <h2 class="section-title"><span data-i18n="article.related"></span></h2>
      <div class="cards-grid">
        ${getRelated(article).map((a) => articleCard(a)).join("")}
      </div>
    </section>
  `;

  /* روابط المشاركة */
  const url = `${window.location.origin}${window.location.pathname}?id=${article.id}`;
  const title = article.title[currentLang];
  root.querySelectorAll("[data-share]").forEach((el) => {
    const kind = el.dataset.share;
    if (kind === "facebook") el.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    if (kind === "twitter")
      el.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    if (kind === "whatsapp") el.href = `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`;
    if (kind === "copy")
      el.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(url);
          el.classList.add("copied");
          setTimeout(() => el.classList.remove("copied"), 1500);
        } catch (err) {
          window.prompt("URL", url);
        }
      });
  });

  /* جدول محتويات تلقائي من عناوين h2 */
  buildToc(article);
  renderArticleAside(article);
  updateArticleMeta(article);
  observeReveals();
}

function renderArticleAside(article) {
  const catsEl = document.getElementById("asideCategories");
  if (catsEl) {
    catsEl.innerHTML = Object.keys(CATEGORIES)
      .map(
        (key) => `
        <li>
          <a href="index.html?category=${key}">
            <span class="mini-cover cover-${CATEGORIES[key].cover}"></span>
            <span>${CATEGORIES[key][currentLang]} <em class="text-xs opacity-60">(${getByCategory(key).length})</em></span>
          </a>
        </li>`
      )
      .join("");
  }

  const relEl = document.getElementById("asideRelated");
  if (relEl && article) {
    relEl.innerHTML = getRelated(article, 4)
      .map(
        (a) => `
        <li>
          <a href="article.html?id=${a.id}">
            ${miniCover(a)}
            <span>${a.title[currentLang]}</span>
          </a>
        </li>`
      )
      .join("");
  }
}

function buildToc(article) {
  const tocEl = document.getElementById("articleToc");
  const prose = document.getElementById("proseBody");
  if (!tocEl || !prose) return;

  const headings = [...prose.querySelectorAll("h2")];
  if (headings.length < 2) {
    tocEl.hidden = true;
    return;
  }

  tocEl.hidden = false;
  tocEl.innerHTML = `
    <h3 data-i18n="article.toc"></h3>
    <ol>
      ${headings
        .map((h, i) => {
          h.id = `sec-${i}`;
          return `<li><a href="#sec-${i}">${h.textContent}</a></li>`;
        })
        .join("")}
    </ol>`;
}

/* وسوم SEO: canonical + hreflang + Open Graph لكل مقال */
function updateArticleMeta(article) {
  const base = `${window.location.origin}${window.location.pathname}`;
  const canonical = `${base}?id=${article.id}&lang=${currentLang}`;

  setMeta("link[rel=canonical]", { href: canonical });
  setMeta('link[rel=alternate][hreflang=ar]', { href: `${base}?id=${article.id}&lang=ar`, hreflang: "ar" });
  setMeta('link[rel=alternate][hreflang=en]', { href: `${base}?id=${article.id}&lang=en`, hreflang: "en" });
  setMeta('meta[name=description]', { content: article.excerpt[currentLang] });
  setMeta('meta[property="og:title"]', { content: article.title[currentLang] });
  setMeta('meta[property="og:description"]', { content: article.excerpt[currentLang] });
  setMeta('meta[property="og:type"]', { content: "article" });
  setMeta('meta[property="og:url"]', { content: canonical });
  if (article.image) {
    setMeta('meta[property="og:image"]', { content: `${window.location.origin}/${article.image}` });
  }
  setMeta('meta[property="article:published_time"]', { content: article.date });
  setMeta('meta[name="twitter:card"]', { content: "summary_large_image" });
}

function setMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    if (selector.startsWith("link")) el.rel = selector.includes("canonical") ? "canonical" : "alternate";
    const ident = selector.match(/\[(property|name)=["']?([^"'\]]+)["']?\]/);
    if (ident) el.setAttribute(ident[1], ident[2]);
    document.head.appendChild(el);
  }
  Object.assign(el, attrs);
}

/* ------------------------------------------------------ شريط تقدّم القراءة */
let progressBound = false;
function initReadingProgress() {
  const track = document.getElementById("readingProgress");
  const bar = track && track.firstElementChild;
  if (!bar || progressBound) return;
  progressBound = true;
  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ------------------------------------------ المشاهد الخلفية (Parallax) */
const THEME_SPEED = {
  default: 0.3,
  psychology: 0.13,
  selfdev: 0.6,
  bodylanguage: 0.32,
  relationships: 0.22,
  productivity: 0.44
};

function setTheme(theme) {
  document.body.dataset.theme = THEME_SPEED[theme] ? theme : "default";
}

let parallaxBound = false;
function initParallax() {
  if (parallaxBound) return;
  parallaxBound = true;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  const update = () => {
    const shapes = document.querySelectorAll(".bg-shape");
    const movers = document.querySelectorAll("[data-parallax]");

    if (reduce.matches) {
      shapes.forEach((s) => (s.style.transform = ""));
      movers.forEach((m) => (m.style.transform = ""));
      return;
    }

    const y = window.scrollY;
    const speed = THEME_SPEED[document.body.dataset.theme || "default"] || 0.3;

    shapes.forEach((s) => {
      const f = parseFloat(s.dataset.speed || "0.3");
      s.style.transform = `translate3d(0, ${(y * f * speed).toFixed(1)}px, 0)`;
    });

    const vh = window.innerHeight || 1;
    movers.forEach((m) => {
      const r = m.getBoundingClientRect();
      if (r.bottom < -120 || r.top > vh + 120) return;
      const delta = (r.top + r.height / 2 - vh / 2) / vh;
      const f = parseFloat(m.dataset.parallax || "0.1");
      m.style.transform = `translate3d(0, ${(delta * f * 100).toFixed(2)}%, 0) scale(1.14)`;
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      update();
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  document.addEventListener("langchange", () => requestAnimationFrame(update));
  update();
}

/* --------------------------------------------------- الوضع الفاتح/الداكن */
const MODE_KEY = "mindful_mode";

function detectMode() {
  const stored = localStorage.getItem(MODE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function syncModeButton() {
  const btn = document.querySelector("[data-mode-toggle]");
  if (!btn) return;
  const dark = document.documentElement.dataset.mode === "dark";
  const label = t(dark ? "mode.toLight" : "mode.toDark");
  btn.setAttribute("aria-pressed", String(dark));
  btn.setAttribute("aria-label", label);
  btn.title = label;
  const sr = btn.querySelector("[data-mode-label]");
  if (sr) sr.textContent = label;
}

function applyMode(mode) {
  document.documentElement.dataset.mode = mode;
  localStorage.setItem(MODE_KEY, mode);
  syncModeButton();
}

/* تفويض: الزر يُعاد رسمه مع الترويسة عند تبديل اللغة */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-mode-toggle]");
  if (!btn) return;
  const html = document.documentElement;
  html.classList.add("mode-switching");
  window.setTimeout(() => html.classList.remove("mode-switching"), 450);
  applyMode(html.dataset.mode === "dark" ? "light" : "dark");
});

/* ------------------------------------------- حركات الظهور عند التمرير */
const REVEAL_STATIC =
  ".section-head, .spotlight-wrap, .newsletter, .page-hero > .container, .info-card, .value-item, .article-hero, .article-toc, .article-note, .aside-box";

let revealObserver = null;

function observeReveals() {
  if (!revealObserver) return;
  document.querySelectorAll("[data-reveal]:not(.is-visible):not([data-reveal-obs])").forEach((el) => {
    el.setAttribute("data-reveal-obs", "1");
    revealObserver.observe(el);
  });
}

function initReveal() {
  if (revealObserver || !("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("js-reveal");
  document.querySelectorAll(REVEAL_STATIC).forEach((el) => el.setAttribute("data-reveal", ""));
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
  );
  observeReveals();
}

/* --------------------------------------------------------------- النشرة */
function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  if (!form || form.dataset.bound) return;
  form.dataset.bound = "1";
  const msg = document.getElementById("newsletterMsg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type=email]");
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim());
    msg.textContent = ok ? t("newsletter.thanks") : t("newsletter.error");
    msg.className = ok ? "form-msg is-success" : "form-msg is-error";
    if (ok) form.reset();
  });
}

/* --------------------------------------------------------- القائمة المنسدلة */
function initHeaderUi() {
  const toggle = document.getElementById("menuToggle");
  const mobile = document.getElementById("mobileNav");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      const open = mobile.hidden;
      mobile.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      document.getElementById("siteHeader").classList.toggle("is-open", open);
    });
    mobile.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobile.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        document.getElementById("siteHeader").classList.toggle("is-open", false);
      })
    );
  }

  document.querySelectorAll(".nav-dropdown").forEach((dd) => {
    const btn = dd.querySelector(".nav-drop-btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = !dd.classList.contains("is-open");
      closeAllDropdowns();
      dd.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
    dd.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        dd.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      })
    );
  });
}

function closeAllDropdowns() {
  document.querySelectorAll(".nav-dropdown.is-open").forEach((d) => {
    d.classList.remove("is-open");
    const b = d.querySelector(".nav-drop-btn");
    if (b) b.setAttribute("aria-expanded", "false");
  });
}

document.addEventListener("click", closeAllDropdowns);

/* ------------------------------------------------------------- الإقلاع */
const TOOL_PAGES = ["quizzes", "challenge", "bodylang", "ask"];

function bootPage() {
  const headerHost = document.getElementById("headerHost");
  const footerHost = document.getElementById("footerHost");
  const active = document.body.dataset.page || "";

  if (headerHost) headerHost.innerHTML = renderHeader(active);
  if (footerHost) footerHost.innerHTML = renderFooter();

  if (active === "home") renderHome();
  else if (active === "article") renderArticlePage();
  else if (TOOL_PAGES.includes(active) && typeof bootTools === "function") bootTools();
  else setTheme("default");

  initHeaderUi();
  initNewsletter();
  initReadingProgress();
  initParallax();
  syncModeButton();
  initReveal();
  observeReveals();
}

/* تُستدعى من i18n.js عند بدء الصفحة وعند كل تبديل للغة */
document.addEventListener("langchange", bootPage);
