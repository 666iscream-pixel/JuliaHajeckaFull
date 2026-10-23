// Генерує статичні сторінки: node build.mjs
// Чотири мовні версії: українська в корені, польська, російська й англійська — у підпапках pl/, ru/, en/.
// Усі тексти — у content/i18n/<мова>.mjs; тут лише шаблони.
import { writeFileSync, readFileSync, mkdirSync, readdirSync, unlinkSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import uk from "./content/i18n/uk.mjs";
import pl from "./content/i18n/pl.mjs";
import ru from "./content/i18n/ru.mjs";
import en from "./content/i18n/en.mjs";

const OUT = dirname(fileURLToPath(import.meta.url));
// Адреса сайту для прев'ю посилань; при запуску замінити на https://pobyt-legalny.com
const SITE = "https://666iscream-pixel.github.io/JuliaHajeckaFull/develop";
const V = "39"; // версія файлів для скидання кешу браузера
const GOOGLE = "https://share.google/FwD8Ak1ugBSy3pjfN";
const WA = "https://wa.me/48791017254";
const TG = "https://t.me/jhajecka";
const IG = "https://www.instagram.com/legalnie_w_polsce";
// Картка Google Business Юлії (cid) — карта показує саме її, з назвою та відгуками
const MAP_CID = "10085399209972979363";
const MAP_ADDR = encodeURIComponent("Julia Hajecka - legalizacja pobytu cudzoziemców w Polsce, Gościnna 11, 05-082 Blizne Łaszczyńskiego");
const MAP_DIR = `https://www.google.com/maps/dir/?api=1&destination=${MAP_ADDR}`;
const EMAIL = "biuro@pobyt-legalny.com";

const LANGS = [uk, pl, ru, en];
const DIR = { uk: "", pl: "pl/", ru: "ru/", en: "en/" };
const WRITTEN = new Set();

// Сторінки лише польською: для роботодавців і юридичні документи
const PL_ONLY = ["firmy.html", "polityka-prywatnosci.html", "klauzula-informacyjna.html"];

/* ---------- Шаблон сторінки ---------- */

function page(C, { file, title, desc, body, active = "" }) {
  const L = C.meta.lang;
  const A = L === "uk" ? "" : "../";            // шлях до кореня сайту
  const plOnly = (f) => (L === "pl" ? f : `${A}pl/${f}`);
  const isPlOnly = PL_ONLY.includes(file);
  const href = (x, f) => `${A}${DIR[x.meta.lang]}${f}`;
  const altLinks = isPlOnly ? "" : LANGS.map((x) => `  <link rel="alternate" hreflang="${x.meta.lang}" href="${SITE}/${DIR[x.meta.lang]}${file === "index.html" ? "" : file}">`).join("\n") + "\n";
  const NAV = [["poslugy.html", C.nav.services], [plOnly("firmy.html"), "Dla pracodawców"], ["yak-pratsiuiemo.html", C.nav.how], ["pro-nas.html", C.nav.about], ["keisy.html", C.nav.cases], ["blog.html", C.nav.blog], ["kontakty.html", C.nav.contacts]];
  const langs = `<div class="langdd" id="langdd">
      <button class="langdd-btn" type="button" aria-haspopup="true" aria-expanded="false">${C.meta.code}<span class="car">▾</span></button>
      <div class="langdd-menu">${LANGS.map((x) => x === C
        ? `<span class="on">${x.meta.name}</span>`
        : `<a href="${href(x, isPlOnly ? "index.html" : file)}" data-setlang="${x.meta.lang}" hreflang="${x.meta.lang}">${x.meta.name}</a>`).join("")}</div>
    </div>`;
  const icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>`;
  const html = `<!doctype html>
<html lang="${L}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${desc}">
${altLinks}  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Julia Hajecka — Legalizacja pobytu cudzoziemców w Polsce">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:url" content="${SITE}/${DIR[L]}${file === "index.html" ? "" : file}">
  <meta property="og:image" content="${SITE}/img/og-image.jpg?v=33">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="${C.meta.og}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Federo&family=Manrope:wght@400;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap" rel="stylesheet">
  <link rel="icon" href="${A}favicon.ico?v=29" sizes="any">
  <link rel="icon" type="image/png" sizes="32x32" href="${A}img/favicon-32.png?v=29">
  <link rel="apple-touch-icon" href="${A}img/apple-touch-icon.png?v=33">
  <link rel="stylesheet" href="${A}styles.css?v=${V}">
</head>
<body>

<header class="header">
  <div class="wrap">
    <a class="brand" href="index.html">
      <img class="lmark" src="${A}img/mark-gold.png" alt="">
      <span class="bt"><img class="lword" src="${A}img/wordmark-navy.png" alt="Julia Hajecka"><span>Legalizacja pobytu cudzoziemców w Polsce</span></span>
    </a>
    <nav class="nav" id="nav">
      ${NAV.map(([h, t]) => `<a href="${h}"${h === active || (active && h.endsWith(active) && active === "firmy.html") ? ' class="on"' : ""}>${t}</a>`).join("\n      ")}
    </nav>
    ${langs}
    <a class="btn btn-navy" href="kontakty.html">${C.ui.write}</a>
    <button class="burger" id="burger" aria-label="Menu">☰</button>
  </div>
</header>

<main>
${body}
</main>

<footer class="fat">
  <div class="wrap">
    <div class="fcols">
      <div class="fbrand">
        <img src="${A}img/logo-full-gold.png" alt="Julia Hajecka — Legalizacja w Polsce">
        <p>${C.ui.footerTag}</p>
      </div>
      <div>
        <h4>${C.ui.fServices}</h4>
        ${C.services.map((s) => `<a href="p-${s.slug}.html">${s.name}</a>`).join("")}
        <a href="poslugy.html">${C.ui.fAll}</a>
      </div>
      <div>
        <h4>${C.ui.fSite}</h4>
        <a href="index.html">${C.ui.home}</a>
        ${NAV.filter(([h]) => h !== "poslugy.html").map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}
      </div>
      <div>
        <h4>${C.ui.fContacts}</h4>
        <a href="tel:+48791017254">+48 791 017 254</a>
        <div class="fmail">Email: <a href="mailto:${EMAIL}">${EMAIL}</a></div>
        <a href="${WA}" target="_blank" rel="noopener">WhatsApp</a>
        <a href="${TG}" target="_blank" rel="noopener">Telegram</a>
        <a href="${IG}" target="_blank" rel="noopener">Instagram</a>
        <p>ul. Gościnna 11, piętro 3, lok. 37<br>05-082 Blizne Łaszczyńskiego</p>
      </div>
    </div>
    <p class="disclaimer">${C.ui.disclaimer}</p>
    <div class="fbottom">
      <span>© 2026 Julia Hajecka — Legalizacja pobytu cudzoziemców w Polsce</span>
      <span class="flegal"><a href="${plOnly("polityka-prywatnosci.html")}">Polityka prywatności</a><a href="${plOnly("klauzula-informacyjna.html")}">Klauzula informacyjna RODO</a><button type="button" data-cc-open>${C.ui.cookieSettings}</button></span>
    </div>
  </div>
</footer>

${file === "kontakty.html" ? "" : `<a class="btn btn-gold fab" href="${file === "firmy.html" ? "#kontakt" : "kontakty.html"}"><span class="fab-ic">${icon}</span><span class="fab-t">${C.ui.consult}</span></a>\n`}<button class="totop off" id="totop" aria-label="Up">↑</button>

<div class="cc" id="cc" hidden>
  <p>${C.ui.ccText}
    <a href="${plOnly("polityka-prywatnosci.html")}">Polityka prywatności</a></p>
  <div class="cc-btns">
    <button type="button" class="btn btn-line" data-cc="necessary">${C.ui.ccNecessary}</button>
    <button type="button" class="btn btn-gold" data-cc="all">${C.ui.ccAll}</button>
  </div>
</div>
<script src="${A}app.js?v=${V}"></script>
</body>
</html>
`;
  const rel = DIR[L] + file;
  if (DIR[L]) mkdirSync(join(OUT, DIR[L]), { recursive: true });
  writeFileSync(join(OUT, rel), html);
  WRITTEN.add(rel);
}

/* ---------- Спільні блоки ---------- */

const band = (C, h = C.ui.bandH, p = C.ui.bandP) => `
  <div class="band">
    <div class="wrap">
      <div><h2>${h}</h2><p>${p}</p></div>
      <div class="msgs">
        <a class="btn btn-gold" href="${WA}" target="_blank" rel="noopener">WhatsApp</a>
        <a class="btn btn-ghost" href="${TG}" target="_blank" rel="noopener">Telegram</a>
        <a class="btn btn-ghost" href="${IG}" target="_blank" rel="noopener">Instagram</a>
        <a class="btn btn-ghost" href="kontakty.html">${C.ui.request}</a>
      </div>
    </div>
  </div>`;

const pageHero = (C, { crumbs = [], eyebrow, h1, lead, extra = "" }) => `
  <div class="page-hero">
    <div class="wrap">
      ${crumbs.length ? `<div class="crumbs"><a href="index.html">${C.ui.home}</a>${crumbs.map(([h, t]) => ` / ${h ? `<a href="${h}">${t}</a>` : t}`).join("")}</div>` : ""}
      <span class="eyebrow">${eyebrow}</span>
      <h1>${h1}</h1>
      ${lead ? `<p>${lead}</p>` : ""}
      ${extra}
    </div>
  </div>`;

const packsHtml = (C, list) => `
      <div class="packs${list.length === 2 ? " two-packs" : ""}">${list.map((p) => `
        <div class="pack${p.hot ? " hot" : ""}">
          ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
          <h3>${p.name}<sup>*</sup></h3>
          <div class="price">${Number(p.price).toLocaleString(C.meta.locale)} <small>zł</small></div>
          <p class="for">${p.f}</p>
          ${p.inc ? `<p class="inc">${p.inc}</p>` : ""}
          <ul>${p.li.map((x) => `<li>${x}</li>`).join("")}</ul>
          ${p.note ? `<p class="pack-note">${p.note}</p>` : ""}
          ${p.pay ? `<p class="pay">${p.pay}</p>` : ""}
          <a class="btn ${p.hot ? "btn-gold" : "btn-line"}" href="kontakty.html">${C.ui.choose}</a>
        </div>`).join("")}
      </div>`;

const svcCards = (C, list = C.services) => `
      <div class="svc-grid">${list.map((s) => `
        <a class="svc" href="p-${s.slug}.html">
          <h3>${s.name}</h3>
          <p>${s.short}</p>
          <div class="bottom"><span>${C.ui.more}</span><span>→</span></div>
        </a>`).join("")}
      </div>`;

const rows = (list) => list.map(([n, s, p]) => `<div class="row"><span class="n">${n}${s ? `<small>${s}</small>` : ""}</span><span class="p">${p}</span></div>`).join("\n        ");

const postCards = (C, list) => `
      <div class="posts">${list.map((p) => `
        <a class="post" href="b-${p.slug}.html">
          <time>${C.ui.date}</time>
          <h3>${p.title}</h3>
          <p>${p.lead}</p>
          <span class="more">${C.ui.read}</span>
        </a>`).join("")}
      </div>`;

const caseCards = (C, list) => `
      <div class="posts">${list.map((c) => `
        <a class="post" href="k-${c.slug}.html">
          <time>${C.ui.caseWord} ${C.cases.indexOf(c) + 1} · ${c.tag}</time>
          <h3>${c.title}</h3>
          <p>${c.lead}</p>
          <span class="more">${C.ui.readCase}</span>
        </a>`).join("")}
      </div>`;

// Відгуки — оригінальні цитати з Google, не перекладаються
const REVIEW_LIST = [
  { n: "sally sally", t: "I cannot recommend Julia Hajecka highly enough! She has been helping me with my permanent residency application in Poland, and the experience has been outstanding from start to finish. Julia is an amazing communicator who keeps you informed every step of the way…" },
  { n: "Vladimir Schneider", t: "Спасибо Юлии за помощь в легализации. Она быстро выявила ошибки при найме, сразу предложила решения и каким-то чудом успела организовать все документы в сжатые…" },
  { n: "Svetlana Savchenko", t: "Хочу выразить огромную благодарность Юлии за помощь в получении карты побыта! Она настоящий профессионал — всегда на связи, подробно объясняет все нюансы…" }
];

const reviewsBlock = (C) => `
  <section class="reviews-section">
    <div class="wrap">
      <div class="section-head rv-head">
        <div><span class="eyebrow">${C.ui.rvEyebrow}</span><h2>${C.ui.rvH}</h2></div>
        <div class="rv-nav"><button class="rv-btn" data-dir="-1" aria-label="${C.ui.prev}">←</button><button class="rv-btn" data-dir="1" aria-label="${C.ui.next}">→</button></div>
      </div>
      <div class="rv-track">${REVIEW_LIST.map((r) => `
        <div class="review">
          <span class="stars">★★★★★</span>
          <p>«${r.t}»</p>
          <cite>${r.n}<small>Google</small></cite>
        </div>`).join("")}
        <div class="review all">
          <p>${C.ui.rvMore}</p>
          <a class="btn btn-gold" href="${GOOGLE}" target="_blank" rel="noopener">${C.ui.rvBtn}</a>
        </div>
      </div>
    </div>
  </section>`;

const portrait = (A) => `<div class="portrait"><img src="${A}img/julia.jpg?v=31" alt="Julia Hajecka"></div>`;

// Картка для роботодавців на головній — завжди польською
const employerCard = (href) => `
        <div class="who-card dark">
          <h3>Dla pracodawców</h3>
          <p>Zatrudniasz cudzoziemców i chcesz mieć pewność, że wszystkie formalności są prawidłowo dopełnione? Wspieramy firmy w legalnym zatrudnianiu obcokrajowców.</p>
          <ul class="checks">
            <li><b>Zezwolenia na pracę</b> — dobór odpowiedniej procedury i uzyskanie wymaganych dokumentów.</li>
            <li><b>Oświadczenia o powierzeniu pracy cudzoziemcowi</b> — przygotowanie dokumentacji i przeprowadzenie procedury.</li>
            <li><b>Powiadomienia o powierzeniu pracy obywatelom Ukrainy</b> — weryfikacja obowiązków i dopełnienie formalności, jeśli dana procedura ma zastosowanie.</li>
            <li><b>Dobór właściwej procedury</b> — ustalenie, jakie dokumenty są potrzebne w konkretnej sytuacji.</li>
            <li><b>Ograniczanie ryzyka prawnego</b> — weryfikacja formalności i minimalizowanie ryzyka sankcji za naruszenie przepisów.</li>
          </ul>
          <a class="btn btn-gold" href="${href}">Dla pracodawców</a>
        </div>`;

/* ---------- Сторінки кожної мови ---------- */

// Державні збори: на сторінці послуг і для роботодавців
const feesSection = (C) => `<section class="light" id="oplaty">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">${C.servicesPage.feesEyebrow}</span>
        <h2>${C.servicesPage.feesH}</h2>
        <p class="lead">${C.servicesPage.feesLead}</p>
      </div>
      <div class="pricelist">
        ${rows(C.fees)}
      </div>
    </div>
  </section>`;

for (const C of LANGS) {
  const L = C.meta.lang;
  const A = L === "uk" ? "" : "../";
  const firmy = L === "pl" ? "firmy.html" : `${A}pl/firmy.html`;
  const H = C.home;

  // Головна
  page(C, {
    file: "index.html", title: H.title, desc: H.desc,
    body: `
  <div class="hero">
    <div class="wrap">
      <div class="hero-grid">
        <div>
          <span class="eyebrow">${H.eyebrow}</span>
          <h1>${H.h1}</h1>
          <p class="sub">${H.sub}</p>
          <div class="hero-cta">
            <a class="btn btn-gold" href="kontakty.html">${C.ui.consult}</a>
            <a class="btn btn-ghost" href="poslugy.html">${H.prices}</a>
          </div>
        </div>
        ${portrait(A)}
      </div>
      <div class="doors">
        <a class="door" href="poslugy.html">
          <h3>${H.door1t}</h3>
          <p>${H.door1p}</p>
          <span class="arrow">→</span>
        </a>
        <a class="door alt" href="${firmy}">
          <h3>Dla pracodawców</h3>
          <p>Legalne zatrudnienie cudzoziemców i wsparcie pracowników</p>
          <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </div>

  <section class="urgent" style="padding-top:64px">
    <div class="wrap">
      <div class="urgent-box">
        <div>
          <h3>${H.urgentH}</h3>
          <ul>${H.urgent.map((x) => `<li>${x}</li>`).join("")}</ul>
        </div>
        <a class="btn btn-gold" href="kontakty.html">${H.urgentBtn}</a>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">${H.svcEyebrow}</span>
        <h2>${H.svcH}</h2>
        <p class="lead">${H.svcLead}</p>
      </div>
      ${svcCards(C)}
      <div class="center-link"><a class="btn btn-line" href="poslugy.html">${H.svcAll}</a></div>
    </div>
  </section>

  <section class="light" id="komu">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">${H.komuEyebrow}</span>
        <h2>${H.komuH}</h2>
        <p class="lead">${H.komuLead}</p>
      </div>
      <div class="who-grid">
        <div class="who-card">
          <h3>${H.foreignH}</h3>
          <p>${H.foreignP}</p>
          <ul class="checks">
            ${H.foreignLi.map((x) => `<li>${x}</li>`).join("\n            ")}
          </ul>
          <a class="btn btn-line" href="poslugy.html">${H.prices}</a>
        </div>${employerCard(firmy)}
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">${H.stagesEyebrow}</span>
        <h2>${H.stagesH}</h2>
      </div>
      <div class="steps">${C.stages.map((x) => `<div class="step"><h3>${x.h}</h3></div>`).join("")}</div>
      <div class="center-link"><a class="btn btn-line" href="yak-pratsiuiemo.html">${H.stagesMore}</a></div>
    </div>
  </section>

  ${reviewsBlock(C)}

  <section>
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">${H.blogEyebrow}</span>
        <h2>${H.blogH}</h2>
      </div>
      ${postCards(C, C.posts.slice(0, 3))}
      <div class="center-link"><a class="btn btn-line" href="blog.html">${H.blogAll}</a></div>
    </div>
  </section>
  ${band(C)}`
  });

  // Послуги
  const S = C.servicesPage;
  page(C, {
    file: "poslugy.html", active: "poslugy.html", title: S.title, desc: S.desc,
    body: `${pageHero(C, { crumbs: [["", S.eyebrow]], eyebrow: S.eyebrow, h1: S.h1, lead: S.lead, extra: `<nav class="toc" aria-label="${S.toc[0]}">
        <span class="toc-l">${S.toc[0]}</span>
        ${[["#pakety", S.toc[1]], ["#posluhy", S.toc[2]], ["#dodatkovi", S.toc[3]], ["#oplaty", S.toc[4]]].map(([h, t], i) => `<a href="${h}"><span>${i + 1}</span>${t}</a>`).join("")}
      </nav>` })}
  <section id="pakety">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">${C.ui.packsEyebrow}</span>
        <h2>${S.packsH}</h2>
        <p class="lead">${S.packsLead}</p>
      </div>
      ${packsHtml(C, C.packs)}
      ${C.termsPacks}
    </div>
  </section>
  <section class="light" id="posluhy">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">${S.allEyebrow}</span>
        <h2>${S.allH}</h2>
      </div>
      ${svcCards(C)}
    </div>
  </section>
  <section id="dodatkovi">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">${S.priceEyebrow}</span>
        <h2>${S.priceH}</h2>
      </div>
      <div class="pricelist">
        ${rows(C.other)}
      </div>
      ${C.terms}
    </div>
  </section>
  ${feesSection(C)}
  ${band(C)}`
  });

  // Сторінки послуг
  const PACKSETS = { main: C.packs, biz: C.packsBiz };
  for (const s of C.services) {
    const others = C.services.filter((x) => x.slug !== s.slug).slice(0, 3);
    page(C, {
      file: `p-${s.slug}.html`, active: "poslugy.html", title: `${s.h1} — Julia Hajecka`, desc: s.short,
      body: `${pageHero(C, {
        crumbs: [["poslugy.html", S.eyebrow], ["", s.name]], eyebrow: C.ui.service, h1: s.h1, lead: s.intro,
        extra: `<div class="hero-cta"><span class="pricetag">${C.ui.price} <b>${s.price}</b></span><a class="btn btn-gold" href="kontakty.html">${C.ui.consult}</a></div>`
      })}
  <section>
    <div class="wrap two">
      <div>
        ${s.alert ? `<div class="alert">${s.alert.text}</div>` : ""}
        ${s.about ? `<h2 class="subh">${s.aboutTitle || C.ui.aboutProc}</h2>${s.about.map((p) => `<p class="plain">${p}</p>`).join("")}` : ""}
        ${s.pre || ""}
        ${s.when ? `<h3 class="subh3">${C.ui.when}</h3><ul class="dots">${s.when.map((w) => `<li>${w}</li>`).join("")}</ul>` : ""}
        <h2 class="subh${s.about || s.pre ? " gap" : ""}">${s.doesTitle || C.ui.doesDefault}</h2>
        ${s.chips ? `<div class="chips">${s.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>` : ""}
        <ul class="checks">${s.does.map((d) => `<li>${d}</li>`).join("")}</ul>
        ${s.note ? `<p class="plain">${s.note}</p>` : ""}
        ${s.which ? `<h3 class="subh3">${s.whichTitle}</h3><ul class="dots">${s.which.map((w) => `<li>${w}</li>`).join("")}</ul>` : ""}
        ${s.forWhom ? `<h3 class="subh3">${C.ui.forWhom}</h3><p class="plain">${s.forWhom}</p>` : ""}
        ${s.post || ""}
        ${s.closing ? `<p class="closing">${s.closing}</p>` : ""}
        <p class="plain">${s.stagesNote || C.ui.stagesDefault} ${C.ui.stagesMore} <a href="yak-pratsiuiemo.html">${C.ui.stagesLink}</a>.</p>
      </div>
      <aside class="side">
        <span class="lbl">${C.ui.price}</span>
        <div class="big">${s.price}</div>
        <ul>${s.lines.map(([n, p]) => `<li>${n} <b>${p}</b></li>`).join("")}</ul>
        <a class="btn btn-gold" href="${WA}" target="_blank" rel="noopener">${C.ui.wa}</a>
        <a class="btn btn-line" href="kontakty.html">${C.ui.request}</a>
      </aside>
    </div>
  </section>
  ${s.faq ? `<section class="light">
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">${C.ui.faqEyebrow}</span><h2>${C.ui.faqH}</h2></div>
      <div class="faq">${s.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>
    </div>
  </section>` : ""}
  ${s.packs ? `<section class="light">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">${C.ui.packsEyebrow}</span>
        <h2>${C.ui.packsets[s.packs].title}</h2>
        <p class="lead">${C.ui.packsets[s.packs].lead}</p>
      </div>
      ${packsHtml(C, PACKSETS[s.packs])}
      ${C.termsPacks}
    </div>
  </section>` : ""}
  <section>
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">${C.ui.also}</span><h2>${C.ui.otherServices}</h2></div>
      ${svcCards(C, others)}
    </div>
  </section>
  ${band(C)}`
    });
  }

  // Як працюємо
  const HW = C.how;
  page(C, {
    file: "yak-pratsiuiemo.html", active: "yak-pratsiuiemo.html", title: HW.title, desc: HW.desc,
    body: `${pageHero(C, { crumbs: [["", HW.crumb]], eyebrow: HW.eyebrow, h1: HW.h1, lead: HW.lead })}
  <section>
    <div class="wrap">
      ${C.stages.map((x, i) => `<div class="stage"><div class="num">0${i + 1}</div><div><h3>${x.h}</h3>${x.p ? `<p>${x.p}</p>` : ""}<p class="lbl">${x.l}</p><ul>${x.li.map((y) => `<li>${y}</li>`).join("")}</ul><p class="out">${x.o}</p></div></div>`).join("\n      ")}
    </div>
  </section>
  ${band(C, HW.bandH, HW.bandP)}`
  });

  // Про нас
  const AB = C.about;
  page(C, {
    file: "pro-nas.html", active: "pro-nas.html", title: AB.title, desc: AB.desc,
    body: `${pageHero(C, { crumbs: [["", AB.crumb]], eyebrow: AB.eyebrow, h1: AB.h1 })}
  <section class="about">
    <div class="wrap">
      ${portrait(A)}
      <div>
        <h2 class="subh">Julia Hajecka</h2>
        ${AB.paras.map((p) => `<p>${p}</p>`).join("\n        ")}
        <p class="pull">${AB.pull}</p>
      </div>
    </div>
  </section>
  <section class="light">
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">${AB.prEyebrow}</span><h2>${AB.prH}</h2></div>
      <div class="grid3">
        ${AB.principles.map(([h, p]) => `<div class="card"><h3>${h}</h3><p>${p}</p></div>`).join("\n        ")}
      </div>
    </div>
  </section>
  ${reviewsBlock(C)}
  ${band(C, AB.bandH, AB.bandP)}`
  });

  // Кейси: компактні картки + окрема сторінка кожного кейсу
  const CS = C.casesPage;
  page(C, {
    file: "keisy.html", active: "keisy.html", title: CS.title, desc: CS.desc,
    body: `${pageHero(C, { crumbs: [["", CS.crumb]], eyebrow: CS.eyebrow, h1: CS.h1, lead: CS.lead })}
  <section>
    <div class="wrap">
      ${caseCards(C, C.cases)}
    </div>
  </section>
  ${band(C)}`
  });
  C.cases.forEach((c, i) => {
    page(C, {
      file: `k-${c.slug}.html`, active: "keisy.html", title: `${c.title} — Julia Hajecka`, desc: c.lead,
      body: `${pageHero(C, { crumbs: [["keisy.html", CS.crumb], ["", `${C.ui.caseWord} ${i + 1}`]], eyebrow: `${C.ui.caseWord} ${i + 1} · ${c.tag}`, h1: c.title, lead: c.lead })}
  <section>
    <div class="wrap">
      <article class="case-full">
        <div class="case-part"><h3>${C.ui.caseSit}</h3>${c.sit.map((p) => `<p>${p}</p>`).join("")}</div>
        <div class="case-part"><h3>${C.ui.caseDone}</h3><ul class="checks">${c.done.map((d) => `<li>${d}</li>`).join("")}</ul></div>
        <div class="case-part"><h3>${C.ui.caseRes}</h3>${c.res.map((p) => `<p>${p}</p>`).join("")}</div>
        ${c.imgs ? `<div class="case-imgs">${c.imgs.map(([src], k) => `<a href="${A}${src}" target="_blank" rel="noopener"><img src="${A}${src}" alt="${C.ui.caseImgs[k]}" loading="lazy"><span>${C.ui.caseImgs[k]}</span></a>`).join("")}</div><p class="case-cap">${C.ui.caseHidden}</p>` : ""}
        <p class="moral">${c.moral}</p>
      </article>
    </div>
  </section>
  <section class="light">
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">${CS.eyebrow}</span><h2>${C.ui.otherCases}</h2></div>
      ${caseCards(C, C.cases.filter((x) => x !== c).slice(0, 3))}
    </div>
  </section>
  ${band(C)}`
    });
  });

  // Блог
  const BP = C.blogPage;
  page(C, {
    file: "blog.html", active: "blog.html", title: BP.title, desc: BP.desc,
    body: `${pageHero(C, { crumbs: [["", BP.crumb]], eyebrow: BP.eyebrow, h1: BP.h1, lead: BP.lead })}
  <section>
    <div class="wrap">
      ${postCards(C, C.posts)}
    </div>
  </section>
  ${band(C)}`
  });
  for (const p of C.posts) {
    page(C, {
      file: `b-${p.slug}.html`, active: "blog.html", title: `${p.title} — Julia Hajecka`, desc: p.lead,
      body: `${pageHero(C, { crumbs: [["blog.html", BP.crumb], ["", p.title]], eyebrow: C.ui.date, h1: p.title, lead: p.lead })}
  <section>
    <div class="wrap">
      <div class="prose">
        ${p.body}
        <p class="note">${C.ui.articleNote}</p>
      </div>
    </div>
  </section>
  <section class="light">
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">${BP.eyebrow}</span><h2>${C.ui.readAlso}</h2></div>
      ${postCards(C, C.posts.filter((x) => x.slug !== p.slug).slice(0, 3))}
    </div>
  </section>
  ${band(C)}`
    });
  }

  // Контакти
  const K = C.contact;
  const mapEmbed = `https://maps.google.com/maps?cid=${MAP_CID}&hl=${C.meta.hl}&output=embed`;
  page(C, {
    file: "kontakty.html", active: "kontakty.html", title: K.title, desc: K.desc,
    body: `${pageHero(C, { crumbs: [["", K.crumb]], eyebrow: K.eyebrow, h1: K.h1, lead: K.lead })}
  <section class="contact">
    <div class="wrap">
      <div>
        <div class="msgs" style="margin-top:0">
          <a class="btn btn-navy" href="${WA}" target="_blank" rel="noopener">WhatsApp</a>
          <a class="btn btn-line" href="${TG}" target="_blank" rel="noopener">Telegram</a>
          <a class="btn btn-line" href="${IG}" target="_blank" rel="noopener">Instagram</a>
        </div>
        <ul class="clist">
          <li><span>${K.phone}</span><a href="tel:+48791017254">+48 791 017 254</a></li>
          <li><span>${K.email}</span><div><a href="mailto:${EMAIL}">${EMAIL}</a></div></li>
          <li><span>${K.office}</span><div>ul. Gościnna 11, piętro 3, lok. 37<br>05-082 Blizne Łaszczyńskiego</div></li>
          <li><span>${K.hours}</span><div>${K.hoursV}</div></li>
          <li><span>${K.langs}</span><div>${K.langsV}</div></li>
        </ul>
      </div>
      <form id="form">
        <div class="f2">
          <label><span>${K.fName}</span><input name="name" required></label>
          <label><span>${K.fPhone}</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required></label>
        </div>
        <div class="f2">
          <label><span>${K.fMsgr}</span><select name="msgr"><option>WhatsApp</option><option>Telegram</option><option>Viber</option><option>${K.fOther}</option></select></label>
          <label><span>${K.fLang}</span><select name="lang"><option>Українська</option><option>Polski</option><option>Русский</option><option>English</option></select></label>
        </div>
        <div class="f2">
          <label><span>${K.fWho}</span><select name="who"><option>${K.whoPriv}</option><option>${K.whoEmp}</option></select></label>
          <label><span>${K.fService}</span><select name="service">${C.services.map((s) => `<option>${s.name}</option>`).join("")}<option>${K.svcConsult}</option><option>${K.svcOther}</option></select></label>
        </div>
        <label><span>${K.fMsg}</span><textarea name="msg"></textarea></label>
        <button class="btn btn-gold" type="submit">${K.fSend}</button>
        <p class="fnote">${K.fNote}</p>
      </form>
    </div>
  </section>
  <section class="light" id="dojazd">
    <div class="wrap visit">
      <div>
        <span class="eyebrow">${K.visitEyebrow}</span>
        <h2>${K.visitH}</h2>
        <p class="plain">${K.visitP}</p>
        <p class="visit-addr">ul. Gościnna 11, piętro 3, lok. 37<br>05-082 Blizne Łaszczyńskiego</p>
        <div class="visit-btns">
          <a class="btn btn-line" href="${MAP_DIR}" target="_blank" rel="noopener">${K.route}</a>
          <a class="btn btn-line" href="${GOOGLE}" target="_blank" rel="noopener">${K.gcard}</a>
        </div>
      </div>
      <div class="map" id="map" data-src="${mapEmbed}">
        <div class="map-ph">
          <span class="pin" aria-hidden="true">●</span>
          <p>${K.mapPh}</p>
          <button class="btn btn-gold" type="button" id="mapLoad">${K.mapBtn}</button>
        </div>
      </div>
    </div>
  </section>`
  });
}

/* ---------- Сторінки лише польською ---------- */

// Для роботодавців
page(pl, {
  file: "firmy.html", active: "firmy.html",
  title: "Dla pracodawców — legalne zatrudnienie cudzoziemców | Julia Hajecka",
  desc: "Zezwolenia na pracę, oświadczenia, Blue Card i karty pobytu dla pracowników. Obsługa firm zatrudniających cudzoziemców.",
  body: readFileSync(join(OUT, "content", "firmy.html"), "utf8").replaceAll("${WA}", WA).replaceAll("${TG}", TG).replaceAll("${EMAIL}", EMAIL).replace("${FEES}", feesSection(pl))
});

// Документи RODO Замовника — тексти в content/
for (const [file, title, h1] of [
  ["polityka-prywatnosci.html", "Polityka prywatności", "Polityka prywatności"],
  ["klauzula-informacyjna.html", "Klauzula informacyjna RODO", "Klauzula informacyjna dotycząca przetwarzania danych osobowych"]
]) {
  page(pl, {
    file, title: `${title} — Julia Hajecka`, desc: `${title} — Julia Hajecka LEGALIZACJA POBYTU CUDZOZIEMCÓW W POLSCE.`,
    body: `
  <div class="page-hero">
    <div class="wrap">
      <span class="eyebrow">RODO</span>
      <h1>${h1}</h1>
    </div>
  </div>
  <section>
    <div class="wrap">
      <div class="prose legal">
        ${readFileSync(join(OUT, "content", file), "utf8")}
      </div>
    </div>
  </section>`
  });
}

// Видаляємо сторінки, які більше не генеруються (старі статті, перейменовані сторінки)
for (const d of ["", ...Object.values(DIR).filter(Boolean)]) {
  const dir = join(OUT, d);
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir)) {
    if (f.endsWith(".html") && !WRITTEN.has(d + f)) { unlinkSync(join(dir, f)); console.log("removed", d + f); }
  }
}

console.log("ok", WRITTEN.size, "pages");
