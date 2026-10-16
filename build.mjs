// Генерує статичні сторінки v2: node build.mjs
import { writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const OUT = dirname(fileURLToPath(import.meta.url));
const GOOGLE = "https://g.co/kgs/nrC4cam";
const WA = "https://wa.me/48791017254";
const TG = "https://t.me/jhajecka";
const IG = "https://www.instagram.com/legalnie_w_polsce";
const MAP_ADDR = encodeURIComponent("Gościnna 11, 05-082 Blizne Łaszczyńskiego");
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_ADDR}&output=embed`;
const MAP_DIR = `https://www.google.com/maps/dir/?api=1&destination=${MAP_ADDR}`;
// Email Юлії: вписати адресу сюди — з'явиться в контактах і футері
const EMAIL = "jhajecka@pobyt-legalny.com";
const emailHtml = (ph) => EMAIL ? `<a href="mailto:${EMAIL}">${EMAIL}</a>` : `<span class="todo">${ph}</span>`;

const NAV = {
  uk: [["poslugy.html", "Послуги"], ["firmy.html", "Dla pracodawców"], ["yak-pratsiuiemo.html", "Як працюємо"], ["pro-mene.html", "Про мене"], ["keisy.html", "Кейси"], ["blog.html", "Блог"], ["kontakty.html", "Контакти"]],
  pl: [["poslugy.html", "Usługi"], ["firmy.html", "Dla pracodawców"], ["yak-pratsiuiemo.html", "Jak pracujemy"], ["pro-mene.html", "O mnie"], ["keisy.html", "Case studies"], ["blog.html", "Blog"], ["kontakty.html", "Kontakt"]]
};

function page({ file, title, desc, body, lang = "uk", active = "" }) {
  const pl = lang === "pl";
  // Перемикач мов: поки що заглушки, перекладених версій ще немає
  const LANGS = [["uk", "UA", "Українська"], ["pl", "PL", "Polski"], ["ru", "RU", "Русский"], ["en", "EN", "English"]];
  const langs = () => `<div class="langdd" id="langdd">
      <button class="langdd-btn" type="button" aria-haspopup="true" aria-expanded="false">${LANGS.find(([c]) => c === lang)[1]}<span class="car">▾</span></button>
      <div class="langdd-menu">${LANGS.map(([c, t, n]) =>
        c === lang ? `<span class="on">${n}</span>`
          : c === "uk" ? `<a href="index.html">${n}</a>`
          : `<button type="button" data-soon="${n}">${n}</button>`).join("")}</div>
    </div>`;
  const html = `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Federo&family=Manrope:wght@400;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap" rel="stylesheet">
  <link rel="icon" href="favicon.ico?v=29" sizes="any">
  <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32.png?v=29">
  <link rel="apple-touch-icon" href="img/apple-touch-icon.png?v=29">
  <link rel="stylesheet" href="styles.css?v=29">
</head>
<body>

<header class="header">
  <div class="wrap">
    <a class="brand" href="index.html">
      <img class="lmark" src="img/mark-gold.png" alt="">
      <span class="bt"><img class="lword" src="img/wordmark-navy.png" alt="Julia Hajecka"><span>Legalizacja pobytu cudzoziemców w Polsce</span></span>
    </a>
    <nav class="nav" id="nav">
      ${NAV[lang].map(([h, t]) => `<a href="${h}"${h === active ? ' class="on"' : ""}>${t}</a>`).join("\n      ")}
    </nav>
    ${langs()}
    <a class="btn btn-navy" href="kontakty.html">${pl ? "Napisz" : "Написати"}</a>
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
        <img src="img/logo-full-gold.png" alt="Julia Hajecka — Legalizacja w Polsce">
        <p>${pl ? "Legalizacja pobytu i pracy cudzoziemców w Polsce." : "Легалізація перебування та праці іноземців у Польщі."}</p>
      </div>
      <div>
        <h4>${pl ? "Usługi" : "Послуги"}</h4>
        ${SERVICES.map((s) => `<a href="p-${s.slug}.html">${s.name}</a>`).join("")}
        <a href="poslugy.html">${pl ? "Cennik" : "Усі послуги та ціни"}</a>
      </div>
      <div>
        <h4>${pl ? "Strona" : "Сайт"}</h4>
        <a href="index.html">${pl ? "Strona główna" : "Головна"}</a>
        ${NAV[lang].filter(([h]) => h !== "poslugy.html").map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}
      </div>
      <div>
        <h4>${pl ? "Kontakt" : "Контакти"}</h4>
        <a href="tel:+48791017254">+48 791 017 254</a>
        <div class="fmail">Email: ${emailHtml(pl ? "do uzupełnienia" : "буде додано")}</div>
        <a href="${WA}" target="_blank" rel="noopener">WhatsApp</a>
        <a href="${TG}" target="_blank" rel="noopener">Telegram</a>
        <a href="${IG}" target="_blank" rel="noopener">Instagram</a>
        <p>ul. Gościnna 11, piętro 3, lok. 37<br>05-082 Blizne Łaszczyńskiego</p>
      </div>
    </div>
    <div class="fbottom">
      <span>© 2026 Julia Hajecka — Legalizacja pobytu cudzoziemców w Polsce</span>
      <span class="flegal"><a href="polityka-prywatnosci.html">Polityka prywatności</a><a href="klauzula-informacyjna.html">Klauzula informacyjna RODO</a><button type="button" data-cc-open>${pl ? "Ustawienia cookies" : "Налаштування cookies"}</button></span>
    </div>
  </div>
</footer>

${file === "kontakty.html" ? "" : `<a class="btn btn-gold fab" href="${file === "firmy.html" ? "#kontakt" : "kontakty.html"}"><span class="fab-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></span><span class="fab-t">${pl ? "Umów konsultację" : "Записатися на консультацію"}</span></a>\n`}<button class="totop off" id="totop" aria-label="Up">↑</button>

<div class="cc" id="cc" hidden>
  <p>${pl
    ? "Używamy niezbędnych plików cookies. Za Twoją zgodą ładujemy też mapę Google Maps, która zapisuje własne cookies."
    : "Ми використовуємо необхідні cookies. За вашою згодою також завантажуємо карту Google Maps, яка зберігає власні cookies."}
    <a href="polityka-prywatnosci.html">${pl ? "Polityka prywatności" : "Polityka prywatności"}</a></p>
  <div class="cc-btns">
    <button type="button" class="btn btn-line" data-cc="necessary">${pl ? "Tylko niezbędne" : "Лише необхідні"}</button>
    <button type="button" class="btn btn-gold" data-cc="all">${pl ? "Akceptuję wszystkie" : "Прийняти всі"}</button>
  </div>
</div>
<script src="app.js?v=29"></script>
</body>
</html>
`;
  writeFileSync(join(OUT, file), html);
}

const rating = (text = "41 відгук у Google") =>
  `<a class="rating" href="${GOOGLE}" target="_blank" rel="noopener"><b>5,0</b><span class="stars">★★★★★</span><span class="t">${text}</span></a>`;

const band = (h = "Розкажіть про свою ситуацію", p = "Напишіть у месенджер — відповім і запропоную час консультації.") => `
  <div class="band">
    <div class="wrap">
      <div><h2>${h}</h2><p>${p}</p></div>
      <div class="msgs">
        <a class="btn btn-gold" href="${WA}" target="_blank" rel="noopener">WhatsApp</a>
        <a class="btn btn-ghost" href="${TG}" target="_blank" rel="noopener">Telegram</a>
        <a class="btn btn-ghost" href="${IG}" target="_blank" rel="noopener">Instagram</a>
        <a class="btn btn-ghost" href="kontakty.html">Залишити заявку</a>
      </div>
    </div>
  </div>`;

const pageHero = ({ crumbs = [], eyebrow, h1, lead, extra = "" }) => `
  <div class="page-hero">
    <div class="wrap">
      ${crumbs.length ? `<div class="crumbs"><a href="index.html">Головна</a>${crumbs.map(([h, t]) => ` / ${h ? `<a href="${h}">${t}</a>` : t}`).join("")}</div>` : ""}
      <span class="eyebrow">${eyebrow}</span>
      <h1>${h1}</h1>
      ${lead ? `<p>${lead}</p>` : ""}
      ${extra}
    </div>
  </div>`;

/* ---------- Дані ---------- */

const PACKS = [
  { tag: "Базовий", name: "Start Legal", price: "800", f: "Якщо хочете подати документи самостійно, але без помилок.",
    li: ["професійна консультація", "перевірка документів", "індивідуальний чек-лист", "заповнення заяви (MOS)", "електронна подача"] },
  { tag: "Комплексний", name: "Full Support", price: "1800", hot: true, f: "Оптимальний вибір для спокійного та безпечного процесу.",
    li: ["усе з пакета Start Legal", "повний збір документів", "підготовка документів від роботодавця", "супровід під час подачі", "повний контроль справи", "щомісячне донесення документів", "безкоштовна апеляція у разі відмови"],
    note: "Ми ведемо вашу справу від початку до рішення." },
  { tag: "Повний та максимальний", name: "Premium Fast Track", price: "2100", f: "Для тих, хто хоче максимум контролю та пришвидшення процесу.",
    li: ["усе з пакета Full Support", "ponaglenie — прискорення розгляду справи", "скарга до адміністративного суду", "супровід під час отримання карти", "оформлення Profil Zaufany", "налаштування e-Doręczenia"],
    note: "Максимальний супровід та інструменти для пришвидшення справи." }
];

const PACKS_CUKR = [
  { tag: "Оплата в 2 етапи", name: "Базовий пакет", price: "600",
    li: ["консультація спеціаліста", "перевірка та збір усіх документів", "заповнення заяви в системі MOS 2.0", "електронна подача документів", "повний контроль справи", "безкоштовна апеляція у разі відмови", "супровід у день отримання карти"] },
  { tag: "Оплата в 2 етапи", name: "Повний пакет", price: "900", hot: true,
    li: ["усе з базового пакета", "ponaglenie — прискорення розгляду справи", "допомога з Profil Zaufany або електронним підписом", "створення електронної скриньки e-Doręczenia"] }
];

const PACKS_BIZ = [
  { tag: "Оплата в 2 етапи", name: "Базовий пакет", price: "1000",
    li: ["професійна консультація", "чек-лист необхідних документів", "перевірка документів", "заповнення електронної заяви в MOS 2.0", "електронна подача документів"] },
  { tag: "Оплата в 2 етапи", name: "Комплексний пакет", price: "1800", hot: true,
    li: ["усе з базового пакета", "збір документів", "підготовка та оформлення документів від контрагента", "супровід під час особистої подачі", "повний контроль справи", "щомісячне електронне донесення документів", "безкоштовна апеляція у разі відмови"] },
  { tag: "Оплата в 3 етапи", name: "Повний та максимальний", price: "2000",
    li: ["усе з комплексного пакета", "ponaglenie — прискорення розгляду справи", "скарга до адміністративного суду", "супровід у день отримання карти", "допомога зі створенням Profil Zaufany", "створення електронної скриньки e-Doręczenia"] }
];

const PACKSETS = {
  main: { title: "Три пакети", list: PACKS },
  cukr: { title: "Два пакети", list: PACKS_CUKR },
  biz: { title: "Три пакети", list: PACKS_BIZ }
};

const packsHtml = (list = PACKS) => `
      <div class="packs${list.length === 2 ? " two-packs" : ""}">${list.map((p) => `
        <div class="pack${p.hot ? " hot" : ""}">
          <span class="tag">${p.tag}</span>
          <h3>${p.name}</h3>
          <div class="price">${p.price} <small>zł</small></div>
          ${p.f ? `<p class="for">${p.f}</p>` : ""}
          <ul>${p.li.map((x) => `<li>${x}</li>`).join("")}</ul>
          ${p.note ? `<p class="pack-note">${p.note}</p>` : ""}
          <a class="btn ${p.hot ? "btn-gold" : "btn-line"}" href="kontakty.html">Обрати пакет</a>
        </div>`).join("")}
      </div>`;

const TERMS = `
      <div class="terms">
        <div><b>Офіційний договір двома мовами</b> та чеки на всі оплати.</div>
        <div>Ціни вказані без державних зборів за заяву й довіреність та без витрат на переклад документів.</div>
        <div>Ціни остаточні для стандартних справ. Якщо справа потребує додаткових дій або нестандартного пакета документів, вартість визначається індивідуально.</div>
      </div>`;

// Умови лише для карти побиту при подачі кількох членів сім'ї
const TERMS_PACKS = `
      <div class="terms">
        <div><b>Знижка 15%</b> при оформленні від 2 членів сім'ї.</div>
        <div>Кожен наступний член сім'ї — <b>1200 zł</b>, дитина до 18 років — <b>500 zł</b>, за умови одночасної подачі з основним заявником.</div>
        <div>Кожен пакет можна розширити додатковими послугами з прайсу.</div>
        <div><b>Офіційний договір двома мовами</b> та чеки на всі оплати.</div>
        <div>Ціни вказані без державних зборів за заяву й довіреність та без витрат на переклад документів.</div>
        <div>Ціни остаточні для стандартних справ. Якщо справа потребує додаткових дій або нестандартного пакета документів, вартість визначається індивідуально.</div>
      </div>`;

const ASK = "після консультації";

const SERVICES = [
  { slug: "karta-pobytu", name: "Карта побиту", h1: "Карта тимчасового побиту", price: "від 800 zł",
    short: "Тимчасовий побит на підставі роботи, сім'ї або навчання.",
    intro: "Допомагаю отримати дозвіл на тимчасове перебування: на підставі роботи, сім'ї або навчання. Ви обираєте, скільки роботи передати мені — від перевірки документів до повного ведення справи.",
    chips: ["Робота", "Сім'я", "Навчання"],
    does: ["Аналізую вашу ситуацію та підставу для побиту", "Складаю індивідуальний список документів", "Заповнюю заяву в системі MOS і подаю електронно", "Контролюю справу та доношу документи", "Готую ponaglenie або апеляцію, якщо це потрібно"],
    lines: [["Start Legal", "800 zł"], ["Full Support", "1800 zł"], ["Premium Fast Track", "2100 zł"]], packs: "main" },
  { slug: "karta-cukr", name: "Карта побиту CUKR", h1: "Karta pobytu CUKR для українців у Польщі", price: "від 600 zł",
    short: "Карта побиту CUKR для громадян України — від заяви до отримання карти.",
    intro: "Допомагаю громадянам України оформити карту побиту CUKR: перевіряю й збираю документи, заповнюю заяву в MOS 2.0 і супроводжую справу до отримання карти.",
    does: ["Консультую щодо вашої ситуації", "Перевіряю та збираю всі документи", "Заповнюю заяву в системі MOS 2.0 і подаю електронно", "Контролюю справу й готую апеляцію у разі відмови", "Супроводжую в день отримання карти"],
    lines: [["Базовий пакет", "600 zł"], ["Повний пакет", "900 zł"]], packs: "cukr" },
  { slug: "karta-biznes", name: "Карта побиту на підставі бізнесу", h1: "Karta pobytu на підставі бізнесу", price: "від 1000 zł",
    short: "Дозвіл на перебування для іноземців, які ведуть власну справу в Польщі.",
    intro: "Супроводжую заяву на карту побиту на підставі ведення бізнесу в Польщі — від чек-листа документів до отримання карти.",
    does: ["Складаю чек-лист необхідних документів", "Перевіряю та збираю документи, зокрема від контрагентів", "Заповнюю заяву в MOS 2.0 і подаю електронно", "Супроводжую особисту подачу та контролюю справу", "Готую ponaglenie та скаргу до суду, якщо справа затягується"],
    lines: [["Базовий пакет", "1000 zł"], ["Комплексний пакет", "1800 zł"], ["Повний та максимальний", "2000 zł"]], packs: "biz" },
  { slug: "blue-card", name: "Blue Card", h1: "Blue Card — Блакитна карта ЄС", price: "1000–2000 zł",
    short: "Дозвіл на перебування та роботу для висококваліфікованих спеціалістів.",
    intro: "Блакитна карта ЄС — дозвіл на перебування та роботу для спеціалістів із високою кваліфікацією. Готую справу разом із вами та вашим роботодавцем.",
    does: ["Перевіряю, чи відповідають умови договору та кваліфікація вимогам", "Готую документи з боку працівника та роботодавця", "Подаю заяву і веду справу до рішення", "Допомагаю при зміні роботодавця з Blue Card"],
    lines: [["Супровід справи", "1000–2000 zł"], ["Консультація, 1 год", "300 zł"]] },
  { slug: "rezydent-ue", name: "Резидент ЄС і сталий побит", h1: "Карта резидента ЄС та сталий побит", price: "від 1000 zł",
    short: "Безстрокові дозволи для тих, хто живе у Польщі тривалий час.",
    intro: "Дозвіл на постійне перебування та карта довгострокового резидента ЄС — безстрокові статуси. Перевіряю, чи вже можна подаватися, і веду справу до рішення.",
    does: ["Рахую безперервність перебування та перевіряю підстави", "Аналізую й упорядковую документи за попередні роки", "Готую повний пакет і подаю заяву", "Контролюю справу в уженді"],
    chips: ["Польське походження", "Карта поляка", "Резидент ЄС"],
    lines: [["Сталий побит за польським походженням", "2000–3000 zł"], ["Сталий побит на підставі Карти поляка", "1000–2000 zł"], ["Карта резидента ЄС", "1000–2500 zł"], ["Аналіз документів щодо перебування", "350–500 zł"]] },
  { slug: "hromadianstvo", name: "Громадянство", h1: "Польське громадянство", price: "від 2000 zł",
    short: "Комплексна допомога в отриманні польського громадянства.",
    intro: "Супроводжую процес отримання польського громадянства: від оцінки підстав до подачі заяви.",
    does: ["Оцінюю, який шлях до громадянства доступний саме вам", "Перевіряю документи та історію перебування", "Готую заяву й додатки", "Супроводжую до отримання рішення"],
    lines: [["Визнання громадянином Польщі (uznanie za obywatela polskiego)", "від 2000 zł"], ["Консультація, 1 год", "300 zł"]] },
  { slug: "vozziednannia-simi", name: "Возз'єднання сім'ї", h1: "Карта побиту по возз'єднанню родини", price: "1000–1500 zł",
    short: "Побит для членів сім'ї іноземця, який легально перебуває у Польщі.",
    intro: "Допомагаю оформити побит для чоловіка, дружини та дітей. При одночасній подачі кількох членів сім'ї діють знижки.",
    does: ["Перевіряю підстави та документи кожного члена сім'ї", "Готую заяви й подаю їх одночасно", "Допомагаю з реєстрацією іноземних актів, якщо вона потрібна", "Веду справи до рішення"],
    lines: [["Супровід справи", "1000–1500 zł"], ["Кожен наступний член сім'ї", "1200 zł"], ["Дитина до 18 років", "500 zł"], ["Від 2 членів сім'ї", "−15%"]] },
  { slug: "zmina-robotodavtsia", name: "Зміна роботодавця", h1: "Зміна роботодавця з картою побиту", price: "500 zł",
    short: "Щоб нова робота не поставила під загрозу ваш легальний статус.",
    intro: "Зміна місця роботи з чинною картою побиту вимагає формальностей і дотримання термінів. Роблю це за вас.",
    does: ["Перевіряю, що саме потрібно у вашому випадку", "Готую заяву про зміну або нову заяву", "Повідомляю воєводу про припинення роботи", "Контактую з новим роботодавцем щодо документів"],
    lines: [["Зміна роботодавця", "500 zł"], ["Повідомлення воєводи (іноземець)", "200 zł"]] },
  { slug: "dovidky", name: "Довідки: суд, податкова, ZUS", h1: "Довідки із суду, податкової та ZUS", price: "від 150 zł",
    short: "Отримую довідки, потрібні для побиту, громадянства чи банку.",
    intro: "Отримую за вас довідки, які вимагають уженди, банки та роботодавці.",
    does: ["Довідка про відсутність податкової заборгованості", "Довідка із ZUS про історію працевлаштування", "Довідки із суду", "PESEL, Profil Zaufany, EKUZ"],
    lines: [["Довідка з податкової", "150 zł"], ["Довідка із ZUS", "150 zł"], ["Номер PESEL", "150 zł"], ["Profil Zaufany (ePUAP)", "150 zł"], ["Карта EKUZ", "150 zł"], ["Довідки із суду", "за запитом"]] },
  { slug: "akty-tsyvilnoho-stanu", name: "Акти про народження і шлюб", h1: "Транскрипція іноземних актів цивільного стану", price: "800 zł",
    short: "Внесення закордонних свідоцтв про народження і шлюб до польського реєстру, визнання батьківства.",
    intro: "Внесення закордонного свідоцтва про народження чи шлюб до польського реєстру актів цивільного стану (umiejscowienie zagranicznych aktów).",
    about: [
      "Транскрипція — це офіційний процес визнання закордонних документів у Польщі. Свідоцтво про народження або шлюб, видане за кордоном, переноситься до польських книг актів цивільного стану. У результаті ви отримуєте польський документ, який повністю відповідає оригіналу, але має юридичну силу на території Польщі.",
      "Оригінали іноземних документів під час процедури вилучаються, тому заздалегідь рекомендуємо оформити дублікати, якщо вони можуть знадобитися вам у подальшому."
    ],
    when: [
      "якщо ви плануєте подавати документи на отримання польського громадянства;",
      "якщо ви хочете оформити ВНЖ або ПМЖ для члена сім'ї за програмою возз'єднання і не маєте можливості проставити апостиль у країні походження (вимога більшості установ з 1 червня 2025 року)."
    ],
    doesTitle: "Чим ми допомагаємо",
    does: ["Проводимо консультацію щодо вашої ситуації та аналізуємо документи", "Доступно й зрозуміло пояснюємо кожен етап процедури", "Організовуємо професійний присяжний переклад", "Готуємо й подаємо заяву з усіма документами до Urząd Stanu Cywilnego", "Отримуємо готовий польський акт і передаємо його вам", "Супроводжуємо також процедуру визнання батьківства"],
    faq: [
      ["Скільки триває процедура?", "Зазвичай до 30 днів."],
      ["Чи впливає кількість документів на вартість?", "Ціна залежить не від кількості, а від складності документів."],
      ["Чи забирають оригінали свідоцтв про народження та шлюб?", "Так, оригінали вилучаються, тому рекомендуємо заздалегідь оформити дублікати в країні видачі."],
      ["Чи можна подати нотаріально завірені копії?", "Ні, приймаються лише оригінали свідоцтва про народження (а також свідоцтва про шлюб)."]
    ],
    lines: [["Внесення акта до реєстру", "800 zł"], ["Визнання батьківства", ASK], ["Присяжний переклад", "за запитом"]],
    note: "Додатково оплачуються державні збори та присяжний переклад документів." },
  { slug: "strakhuvannia", name: "Страхування", h1: "Усі види страхування", price: ASK,
    short: "Медичне та інше страхування — зокрема поліси, потрібні для побиту.",
    intro: "Підбираю страхування для вас і вашої родини, зокрема медичні поліси, які вимагаються у справах про побит.",
    does: ["Підбираю поліс під вашу ситуацію та вимоги уженду", "Оформлюю медичне страхування для членів сім'ї", "Допомагаю отримати карту EKUZ", "Пояснюю, що покриває поліс"],
    lines: [["Підбір і оформлення поліса", ASK], ["Карта EKUZ", "150 zł"]] }
];

const svcCards = (list = SERVICES) => `
      <div class="svc-grid">${list.map((s) => `
        <a class="svc" href="p-${s.slug}.html">
          <h3>${s.name}</h3>
          <p>${s.short}</p>
          <div class="bottom"><span>Докладніше та ціна</span><span>→</span></div>
        </a>`).join("")}
      </div>`;

const OTHER = [
  ["Консультація, 1 година", "перша година оплачується повністю, далі — половина суми за кожні 30 хв", "300 zł"],
  ["Особистий супровід в уженді", "1 виїзд", "300 zł"],
  ["Паспорт іноземця", "Dokument podróży", "350 zł"],
  ["Заява про доручення виконання роботи іноземцю", "Oświadczenie o powierzeniu pracy — включно з копією договору та повідомленнями про початок і припинення роботи", "500 zł"],
  ["Запрошення для іноземця", "Zaproszenie dla cudzoziemca", "500 zł"],
  ["Аналіз та впорядкування документів щодо перебування", "залежно від кількості документів і складності справи", "350–500 zł"],
  ["Віза до Великої Британії", "", "2000 zł"],
  ["Присяжний переклад документів", "PL→UA, PL→RU", "за запитом"],
  ["Повідомлення воєводи про припинення роботи", "200 zł для іноземця, 300 zł для роботодавця", "200 / 300 zł"],
  ["Обмін посвідчення водія", "", ASK],
  ["Оскарження рішення установи", "у пакеті Full Support апеляція у разі відмови безкоштовна", ASK],
  ["Реєстрація перебування громадян ЄС", "", ASK]
];
const rows = (list) => list.map(([n, s, p]) => `<div class="row"><span class="n">${n}${s ? `<small>${s}</small>` : ""}</span><span class="p">${p}</span></div>`).join("\n        ");

const STAGES = [
  { h: "Первинна консультація та аналіз ситуації",
    p: "Співпраця починається з детального вивчення Вашої ситуації — під час особистої зустрічі в офісі або онлайн-консультації.",
    l: "На цьому етапі ми:",
    li: ["аналізуємо Ваше поточне становище та підстави для легалізації", "перевіряємо документи та оцінюємо можливі ризики", "визначаємо реальні перспективи отримання карти побиту", "підбираємо найбезпечнішу та найефективнішу стратегію ведення справи"],
    o: "Наша мета — вже після першої консультації надати Вам повне розуміння подальших дій, термінів та можливих сценаріїв розвитку процесу." },
  { h: "Індивідуальний план ведення справи",
    p: "Після прийняття рішення про співпрацю ми переходимо до підготовки персональної стратегії.",
    l: "Що входить до цього етапу:",
    li: ["укладення офіційного договору", "формування індивідуального списку необхідних документів", "розробка покрокового плану супроводу", "визначення термінів та порядку подачі документів"],
    o: "Ви отримуєте чітку структуру дій та повний супровід без хаосу, невизначеності та зайвих помилок." },
  { h: "Підготовка повного пакета документів",
    p: "Ми беремо на себе всю організаційну та бюрократичну частину процесу.",
    l: "Зокрема:",
    li: ["підготовку заяв, анкет та необхідних формулярів", "взаємодію з роботодавцем, бухгалтерією та установами", "перевірку правильності всіх документів", "підготовку копій, перекладів та нотаріальних засвідчень", "супровід під час подачі документів до уженду"],
    o: "Завдяки уважній підготовці та контролю деталей ми мінімізуємо ймовірність помилок та підвищуємо шанси на позитивне рішення." },
  { h: "Повний супровід на всіх етапах",
    p: "Протягом усього процесу ми супроводжуємо Вашу справу як офіційний представник (Pełnomocnik).",
    l: "У межах супроводу:",
    li: ["представляємо Ваші інтереси перед державними органами", "контролюємо хід розгляду справи", "відстежуємо статуси та терміни", "готуємо та подаємо додаткові документи за необхідності", "залишаємося з Вами на зв'язку до моменту отримання рішення"],
    o: "Ви завжди розумієте, на якому етапі перебуває Ваша справа та які дії здійснюються з боку спеціалістів." },
  { h: "Завершення процесу",
    p: "",
    l: "Після отримання позитивного рішення ми:",
    li: ["супроводжуємо Вас під час отримання карти побиту", "консультуємо щодо подальшого легального перебування в Польщі", "за потреби допомагаємо з наступними етапами легалізації"],
    o: "Ми супроводжуємо клієнта не лише до моменту подачі документів, а до фактичного результату." }
];

// Чернетки за мотивами дописів в Instagram — перед публікацією перевіряє Юлія
const POSTS = [
  { slug: "podaty-do-ostannoho-dnia", date: "1 квітня 2026", title: "Закінчується легальне перебування: чому не можна чекати",
    lead: "Заяву на побит потрібно подати до останнього дня легального перебування. Що це означає на практиці.",
    body: `<p>Найчастіша помилка у справах про побит — подати заяву запізно. Якщо віза, безвізовий термін або попередня карта закінчуються, заява має потрапити до уженду не пізніше останнього дня вашого легального перебування.</p>
<h2>Що варто зробити заздалегідь</h2>
<ul><li>перевірити точну дату закінчення вашого документа;</li><li>зібрати документи від роботодавця — на це часто йде найбільше часу;</li><li>узгодити спосіб подачі та переконатися, що заява дійде до уженду вчасно.</li></ul>
<p>Якщо до кінця терміну залишилося кілька тижнів — напишіть, розберемо вашу ситуацію і складемо план.</p>` },
  { slug: "mos", date: "17 березня 2026", title: "MOS: подача заяви на побит онлайн",
    lead: "Заяви на побит переходять в електронну систему MOS. Коротко про те, що змінюється для заявника.",
    body: `<p>MOS (Moduł Obsługi Spraw) — електронна система, через яку подаються заяви на дозвіл на перебування. Заява заповнюється онлайн і підписується електронно.</p>
<h2>Що потрібно, щоб подати заяву</h2>
<ul><li>Profil Zaufany або інший електронний підпис;</li><li>правильно заповнена заява — помилки в анкеті затягують справу;</li><li>документи від роботодавця, якщо підстава побиту — робота.</li></ul>
<p>Заповнення заяви в MOS та електронна подача входять у всі мої пакети супроводу.</p>` },
  { slug: "profil-zaufany", date: "12 березня 2026", title: "Що таке Profil Zaufany і навіщо він іноземцю",
    lead: "Довірений профіль — ваш електронний підпис для польських урядових сервісів.",
    body: `<p>Profil Zaufany — безкоштовний електронний підпис, яким можна підтверджувати свою особу в польських державних онлайн-сервісах і підписувати документи без візиту до установи.</p>
<h2>Для чого він знадобиться</h2>
<ul><li>подача заяв онлайн, зокрема у справах про побит;</li><li>отримання довідок з податкової та ZUS;</li><li>доступ до своїх даних у державних реєстрах.</li></ul>
<p>Для оформлення зазвичай потрібен номер PESEL. Допомагаю і з PESEL, і з реєстрацією профілю — це займає один візит.</p>` },
  { slug: "e-doreczenia", date: "12 березня 2026", title: "e-Doręczenia: електронний лист замість рекомендованого",
    lead: "Електронна доставка рівноцінна рекомендованому листу з підтвердженням отримання.",
    body: `<p>e-Doręczenia — державна система електронної доставки. Лист, надісланий через неї, має таку саму юридичну силу, як рекомендований лист із підтвердженням отримання.</p>
<h2>Чому це важливо у справах про побит</h2>
<ul><li>від дати отримання листа з уженду рахуються терміни на відповідь;</li><li>пропущений термін може означати залишення справи без розгляду або відмову;</li><li>електронну скриньку потрібно перевіряти так само уважно, як поштову.</li></ul>
<p>Налаштування e-Doręczenia входить у пакет Premium Fast Track.</p>` }
];

const postCards = (list) => `
      <div class="posts">${list.map((p) => `
        <a class="post" href="b-${p.slug}.html">
          <time>${p.date}</time>
          <h3>${p.title}</h3>
          <p>${p.lead}</p>
          <span class="more">Читати →</span>
        </a>`).join("")}
      </div>`;

const REVIEW_LIST = [
  { n: "sally sally", t: "I cannot recommend Julia Hajecka highly enough! She has been helping me with my permanent residency application in Poland, and the experience has been outstanding from start to finish. Julia is an amazing communicator who keeps you informed every step of the way…" },
  { n: "Vladimir Schneider", t: "Спасибо Юлии за помощь в легализации. Она быстро выявила ошибки при найме, сразу предложила решения и каким-то чудом успела организовать все документы в сжатые…" },
  { n: "Svetlana Savchenko", t: "Хочу выразить огромную благодарность Юлии за помощь в получении карты побыта! Она настоящий профессионал — всегда на связи, подробно объясняет все нюансы…" }
];

const reviewsBlock = () => `
  <section class="reviews-section">
    <div class="wrap">
      <div class="section-head rv-head">
        <div><span class="eyebrow">Відгуки</span><h2>Що кажуть клієнти</h2></div>
        <div class="rv-nav"><button class="rv-btn" data-dir="-1" aria-label="Назад">←</button><button class="rv-btn" data-dir="1" aria-label="Далі">→</button></div>
      </div>
      <div class="rv-track">${REVIEW_LIST.map((r) => `
        <div class="review">
          <span class="stars">★★★★★</span>
          <p>«${r.t}»</p>
          <cite>${r.n}<small>Google</small></cite>
        </div>`).join("")}
        <div class="review all">
          <p>Більше відгуків клієнтів — у профілі Google.</p>
          <a class="btn btn-gold" href="${GOOGLE}" target="_blank" rel="noopener">Читати відгуки в Google</a>
        </div>
      </div>
    </div>
  </section>`;

const portrait = `<div class="portrait"><img src="img/julia.jpg" alt="Julia Hajecka"></div>`;

/* ---------- Сторінки ---------- */

// Головна
page({
  file: "index.html",
  title: "Julia Hajecka — легалізація перебування та праці іноземців у Польщі",
  desc: "Карта побиту, Blue Card, возз'єднання сім'ї, громадянство. Супровід від консультації до рішення. Варшава.",
  body: `
  <div class="hero">
    <div class="wrap">
      <div class="hero-grid">
        <div>
          <span class="eyebrow">Варшава · карта побиту · Blue Card · громадянство</span>
          <h1>Легальне перебування та праця у Польщі — без помилок і зайвих нервів</h1>
          <p class="sub">Супроводжую справу від першої консультації до рішення: перевіряю документи, подаю заяву, контролюю хід справи в уженді.</p>
          <div class="hero-cta">
            <a class="btn btn-gold" href="kontakty.html">Записатися на консультацію</a>
            <a class="btn btn-ghost" href="poslugy.html">Послуги та ціни</a>
          </div>
        </div>
        ${portrait}
      </div>
      <div class="doors">
        <a class="door" href="poslugy.html">
          <h3>Я іноземець</h3>
          <p>Карта побиту, Blue Card, возз'єднання сім'ї, громадянство, довідки</p>
          <span class="arrow">→</span>
        </a>
        <a class="door alt" href="firmy.html">
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
          <h3>Закінчується віза або карта побиту?</h3>
          <ul><li>Заяву потрібно подати до останнього дня легального перебування.</li><li>Що раніше почнемо — то спокійніше пройде процес.</li></ul>
        </div>
        <a class="btn btn-gold" href="kontakty.html">Написати зараз</a>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Послуги</span>
        <h2>З чим допомагаю</h2>
        <p class="lead">Кожна послуга — з відкритою ціною та зрозумілим обсягом роботи.</p>
      </div>
      ${svcCards()}
      <div class="center-link"><a class="btn btn-line" href="poslugy.html">Усі послуги та ціни</a></div>
    </div>
  </section>

  <section class="light" id="komu">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Кому ми допомагаємо</span>
        <h2>Реальна підтримка для іноземців і роботодавців у Польщі</h2>
        <p class="lead">Пропонуємо спеціалізовані послуги, підібрані під індивідуальні потреби. Ми зосереджуємося на тому, щоб зрозуміти вашу ситуацію і дати дієве, практичне рішення.</p>
      </div>
      <div class="who-grid">
        <div class="who-card">
          <h3>Для іноземців</h3>
          <p>Хочете врегулювати перебування в Польщі, залагодити справи в установах або почати власну справу? Допоможемо пройти через формальності.</p>
          <ul class="checks">
            <li><b>Легалізація перебування</b> — отримання карти тимчасового або сталого побиту.</li>
            <li><b>Польське громадянство</b> — підготовка до подання заяви про надання або визнання громадянином Польщі.</li>
            <li><b>Обмін документів</b> — карти побиту та посвідчення водія, а також отримання номера PESEL.</li>
            <li><b>Оскарження рішень</b> — допомога у разі відмови у видачі документа чи дозволу.</li>
            <li><b>Реєстрація перебування громадян ЄС</b> — формальності, пов'язані з перебуванням у Польщі.</li>
            <li><b>Транскрипція іноземних актів цивільного стану</b> — внесення закордонних документів до польського реєстру.</li>
            <li><b>Profil Zaufany</b> — доступ до онлайн-послуг державної адміністрації.</li>
          </ul>
          <a class="btn btn-line" href="poslugy.html">Послуги та ціни</a>
        </div>
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
          <a class="btn btn-gold" href="firmy.html">Dla pracodawców</a>
        </div>
      </div>
      <p class="tagline">Формальності без зайвого стресу.</p>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Процес роботи</span>
        <h2>Як ми працюємо</h2>
      </div>
      <div class="steps">${STAGES.map((x) => `<div class="step"><h3>${x.h}</h3></div>`).join("")}</div>
      <div class="center-link"><a class="btn btn-line" href="yak-pratsiuiemo.html">Докладніше про етапи</a></div>
    </div>
  </section>


  ${reviewsBlock()}

  <section>
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Блог</span>
        <h2>Корисне про легалізацію</h2>
      </div>
      ${postCards(POSTS.slice(0, 3))}
      <div class="center-link"><a class="btn btn-line" href="blog.html">Усі статті</a></div>
    </div>
  </section>
  ${band()}`
});

// Послуги
page({
  file: "poslugy.html", active: "poslugy.html",
  title: "Послуги та ціни — Julia Hajecka",
  desc: "Карта побиту, Blue Card, резидент ЄС, громадянство, возз'єднання сім'ї, довідки, страхування. Ціни на всі послуги.",
  body: `${pageHero({ crumbs: [["", "Послуги"]], eyebrow: "Послуги", h1: "Послуги та ціни", lead: "Оберіть послугу, щоб побачити, що саме я роблю і скільки це коштує." })}
  <section>
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Супровід процесу легалізації</span>
        <h2>Карта тимчасового побиту: три пакети</h2>
        <p class="lead">Обираєте, скільки роботи передати: від перевірки документів до повного ведення справи.</p>
      </div>
      ${packsHtml(PACKS)}
      ${TERMS_PACKS}
    </div>
  </section>
  <section class="light">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Усі послуги</span>
        <h2>Оберіть послугу</h2>
      </div>
      ${svcCards()}
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Прайс</span>
        <h2>Інші послуги</h2>
      </div>
      <div class="pricelist">
        ${rows(OTHER)}
      </div>
      ${TERMS}
    </div>
  </section>
  ${band()}`
});

// Сторінки послуг
for (const s of SERVICES) {
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);
  page({
    file: `p-${s.slug}.html`, active: "poslugy.html",
    title: `${s.h1} — Julia Hajecka`,
    desc: s.short,
    body: `${pageHero({
      crumbs: [["poslugy.html", "Послуги"], ["", s.name]], eyebrow: "Послуга", h1: s.h1, lead: s.intro,
      extra: `<div class="hero-cta"><span class="pricetag">Вартість <b>${s.price}</b></span><a class="btn btn-gold" href="kontakty.html">Записатися на консультацію</a></div>`
    })}
  <section>
    <div class="wrap two">
      <div>
        ${s.about ? `<h2 class="subh">Про процедуру</h2>${s.about.map((p) => `<p class="plain">${p}</p>`).join("")}` : ""}
        ${s.when ? `<h3 class="subh3">Коли це потрібно</h3><ul class="dots">${s.when.map((w) => `<li>${w}</li>`).join("")}</ul>` : ""}
        <h2 class="subh${s.about ? " gap" : ""}">${s.doesTitle || "Що я роблю"}</h2>
        ${s.chips ? `<div class="chips">${s.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>` : ""}
        <ul class="checks">${s.does.map((d) => `<li>${d}</li>`).join("")}</ul>
        ${s.note ? `<p class="plain">${s.note}</p>` : ""}
        <p class="plain">Етапи роботи однакові для всіх справ — <a href="yak-pratsiuiemo.html">як ми працюємо</a>.</p>
      </div>
      <aside class="side">
        <span class="lbl">Вартість</span>
        <div class="big">${s.price}</div>
        <ul>${s.lines.map(([n, p]) => `<li>${n} <b>${p}</b></li>`).join("")}</ul>
        <a class="btn btn-gold" href="${WA}" target="_blank" rel="noopener">Написати у WhatsApp</a>
        <a class="btn btn-line" href="kontakty.html">Залишити заявку</a>
      </aside>
    </div>
  </section>
  ${s.faq ? `<section class="light">
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">Поширені запитання</span><h2>Відповіді на часті питання</h2></div>
      <div class="faq">${s.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>
    </div>
  </section>` : ""}
  ${s.packs ? `<section class="light">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Супровід процесу легалізації</span>
        <h2>${PACKSETS[s.packs].title}</h2>
      </div>
      ${packsHtml(PACKSETS[s.packs].list)}
      ${TERMS_PACKS}
    </div>
  </section>` : ""}
  <section>
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">Також</span><h2>Інші послуги</h2></div>
      ${svcCards(others)}
    </div>
  </section>
  ${band()}`
  });
}

// Як працюємо
page({
  file: "yak-pratsiuiemo.html", active: "yak-pratsiuiemo.html",
  title: "Як ми працюємо — Julia Hajecka",
  desc: "П'ять етапів супроводу: консультація, план справи, документи, супровід, рішення.",
  body: `${pageHero({ crumbs: [["", "Як працюємо"]], eyebrow: "Процес роботи", h1: "Як ми працюємо", lead: "Від першої консультації до отримання карти — п'ять зрозумілих етапів." })}
  <section>
    <div class="wrap">
      ${STAGES.map((x, i) => `<div class="stage"><div class="num">0${i + 1}</div><div><h3>${x.h}</h3>${x.p ? `<p>${x.p}</p>` : ""}<p class="lbl">${x.l}</p><ul>${x.li.map((y) => `<li>${y}</li>`).join("")}</ul><p class="out">${x.o}</p></div></div>`).join("\n      ")}
    </div>
  </section>
  ${band("Почнімо з консультації", "Перша година — 300 zł. Після неї ви розумієте подальші дії, терміни та можливі сценарії.")}`
});

// Про мене
page({
  file: "pro-mene.html", active: "pro-mene.html",
  title: "Про мене — Julia Hajecka",
  desc: "З 2017 року допомагаю іноземцям, їхнім родинам і підприємцям у справах легалізації перебування та праці в Польщі.",
  body: `${pageHero({ crumbs: [["", "Про мене"]], eyebrow: "Про мене", h1: "Julia Hajecka", lead: "Спеціаліст з легалізації перебування та праці іноземців у Польщі." })}
  <section class="about">
    <div class="wrap">
      ${portrait}
      <div>
        <h2 class="subh">Більше, ніж документи</h2>
        <p>Легалізація перебування — це значно більше, ніж документи та адміністративні процедури. Це безпека родини, стабільність роботи й можливість спокійно будувати майбутнє в Польщі.</p>
        <p>З 2017 року я допомагаю іноземцям, їхнім родинам і підприємцям у справах легалізації перебування та праці в Польщі. Сьогодні поєдную власний досвід зі знаннями команди перевірених фахівців: визначаю напрям дій, стежу за єдиною стратегією та якістю обслуговування на кожному етапі.</p>
        <p>Я не вірю в універсальні рішення. Перш ніж діяти, ми аналізуємо обставини справи, потреби клієнта та доступні правові можливості — і дивимося ширше за одну заяву: на довгострокові плани, ризики та наступні етапи перебування в Польщі.</p>
        <p>Мені допомагають освіта в галузі політології зі спеціалізацією з прикордонного руху та курс юридичного перекладу. Я постійно стежу за змінами в законодавстві, щоб кожне рішення спиралося на актуальні знання.</p>
        <p class="pull">Понад 1500 родин довірили мені свої справи. За цим числом — конкретні історії та люди, для яких легалізація означає можливість жити разом, працювати й планувати майбутнє в Польщі.</p>
      </div>
    </div>
  </section>
  <section class="light">
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">Принципи</span><h2>Як я працюю з клієнтами</h2></div>
      <div class="grid3">
        <div class="card"><h3>Офіційно</h3><p>Договір двома мовами та чеки на всі оплати.</p></div>
        <div class="card"><h3>Чесно</h3><p>Кажу про реальні перспективи та ризики ще на консультації.</p></div>
        <div class="card"><h3>До результату</h3><p>Супроводжую не до подачі документів, а до фактичного рішення.</p></div>
      </div>
    </div>
  </section>
  ${reviewsBlock()}
  ${band()}`
});

// Кейси — шаблони, наповнюються реальними історіями
const caseTpl = (tag, h) => `
        <div class="case">
          <span class="tagline">${tag}</span>
          <h3>${h}</h3>
          <dl>
            <div><dt>Ситуація</dt><dd>З чим звернувся клієнт і що було на кону.</dd></div>
            <div><dt>Що зроблено</dt><dd>Які кроки та документи були підготовлені.</dd></div>
            <div><dt>Результат</dt><dd>Рішення уженду та скільки часу це зайняло.</dd></div>
          </dl>
        </div>`;
page({
  file: "keisy.html", active: "keisy.html",
  title: "Кейси — Julia Hajecka",
  desc: "Історії справ: з чим зверталися клієнти і чим усе завершилося.",
  body: `${pageHero({ crumbs: [["", "Кейси"]], eyebrow: "Кейси", h1: "Історії справ", lead: "Без імен і особистих даних: ситуація, що зроблено, результат." })}
  <section>
    <div class="wrap">
      <div class="cases">
        ${caseTpl("Сталий побит", "Назва кейсу про постійне перебування")}
        ${caseTpl("Роботодавець", "Назва кейсу про помилки при наймі")}
        ${caseTpl("Карта побиту", "Назва кейсу про складну ситуацію з термінами")}
        ${caseTpl("Сім'я", "Назва кейсу про возз'єднання родини")}
      </div>
    </div>
  </section>
  ${band()}`
});

// Блог
page({
  file: "blog.html", active: "blog.html",
  title: "Блог про легалізацію у Польщі — Julia Hajecka",
  desc: "Зміни в законах, терміни, MOS, Profil Zaufany, e-Doręczenia — простою мовою.",
  body: `${pageHero({ crumbs: [["", "Блог"]], eyebrow: "Блог", h1: "Корисне про легалізацію", lead: "Зміни в законах, терміни та електронні сервіси — простою мовою." })}
  <section>
    <div class="wrap">
      ${postCards(POSTS)}
    </div>
  </section>
  ${band()}`
});
for (const p of POSTS) {
  page({
    file: `b-${p.slug}.html`, active: "blog.html",
    title: `${p.title} — Julia Hajecka`,
    desc: p.lead,
    body: `${pageHero({ crumbs: [["blog.html", "Блог"], ["", p.title]], eyebrow: p.date, h1: p.title, lead: p.lead })}
  <section>
    <div class="wrap">
      <div class="prose">
        ${p.body}
        <p class="note">Стаття має інформаційний характер. У кожній справі є нюанси — напишіть, і я розберу саме вашу ситуацію.</p>
      </div>
    </div>
  </section>
  <section class="light">
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">Блог</span><h2>Читайте також</h2></div>
      ${postCards(POSTS.filter((x) => x.slug !== p.slug).slice(0, 3))}
    </div>
  </section>
  ${band()}`
  });
}

// Контакти
page({
  file: "kontakty.html", active: "kontakty.html",
  title: "Контакти — Julia Hajecka",
  desc: "WhatsApp, Telegram, офіс у Blizne Łaszczyńskiego під Варшавою.",
  body: `${pageHero({ crumbs: [["", "Контакти"]], eyebrow: "Контакти", h1: "Розкажіть про свою ситуацію", lead: "Напишіть у месенджер або залиште заявку — відповім і запропоную час консультації." })}
  <section class="contact">
    <div class="wrap">
      <div>
        <div class="msgs" style="margin-top:0">
          <a class="btn btn-navy" href="${WA}" target="_blank" rel="noopener">WhatsApp</a>
          <a class="btn btn-line" href="${TG}" target="_blank" rel="noopener">Telegram</a>
          <a class="btn btn-line" href="${IG}" target="_blank" rel="noopener">Instagram</a>
        </div>
        <ul class="clist">
          <li><span>Телефон</span><a href="tel:+48791017254">+48 791 017 254</a></li>
          <li><span>Email</span><div>${emailHtml("буде додано")}</div></li>
          <li><span>Офіс</span><div>ul. Gościnna 11, piętro 3, lok. 37<br>05-082 Blizne Łaszczyńskiego</div></li>
          <li><span>Години</span><div>Пн–Пт з 9:00, зустрічі за попереднім записом</div></li>
          <li><span>Мови</span><div>Українська, Polski, Русский</div></li>
        </ul>
      </div>
      <form id="form">
        <div class="f2">
          <label><span>Ім'я</span><input name="name" required></label>
          <label><span>Телефон</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required></label>
        </div>
        <div class="f2">
          <label><span>Зручний месенджер</span><select name="msgr"><option>WhatsApp</option><option>Telegram</option><option>Viber</option><option>Інше</option></select></label>
          <label><span>Мова спілкування</span><select name="lang"><option>Українська</option><option>Polski</option><option>Русский</option><option>English</option></select></label>
        </div>
        <div class="f2">
          <label><span>Ви</span><select name="who"><option>Приватна особа</option><option>Роботодавець</option></select></label>
          <label><span>Послуга</span><select name="service">${SERVICES.map((s) => `<option>${s.name}</option>`).join("")}<option>Консультація</option><option>Інше</option></select></label>
        </div>
        <label><span>Коротко про ситуацію</span><textarea name="msg"></textarea></label>
        <button class="btn btn-gold" type="submit">Надіслати у WhatsApp</button>
        <p class="fnote">Заявка відкриється у WhatsApp із готовим текстом — залишиться натиснути «Надіслати».</p>
      </form>
    </div>
  </section>
  <section class="light" id="dojazd">
    <div class="wrap visit">
      <div>
        <span class="eyebrow">Як до нас дістатися</span>
        <h2>Плануєте візит до нашого офісу?</h2>
        <p class="plain">Будемо раді вас бачити! Офіс розташований у Blizne Łaszczyńskiego, неподалік варшавського Бемово. Дістатися можна автомобілем або громадським транспортом.</p>
        <p class="visit-addr">ul. Gościnna 11, piętro 3, lok. 37<br>05-082 Blizne Łaszczyńskiego</p>
        <a class="btn btn-line" href="${MAP_DIR}" target="_blank" rel="noopener">Прокласти маршрут у Google Maps</a>
      </div>
      <div class="map" id="map" data-src="${MAP_EMBED}">
        <div class="map-ph">
          <span class="pin" aria-hidden="true">●</span>
          <p>Карта Google Maps з'явиться після згоди на cookies.</p>
          <button class="btn btn-gold" type="button" id="mapLoad">Показати карту</button>
        </div>
      </div>
    </div>
  </section>`
});

// Для роботодавців (польською)
page({
  file: "firmy.html", lang: "pl", active: "firmy.html",
  title: "Dla pracodawców — legalne zatrudnienie cudzoziemców | Julia Hajecka",
  desc: "Zezwolenia na pracę, oświadczenia, Blue Card i karty pobytu dla pracowników. Obsługa firm zatrudniających cudzoziemców.",
  body: `
  <div class="page-hero">
    <div class="wrap">
      <span class="eyebrow">Dla pracodawców</span>
      <h1>Legalne zatrudnienie cudzoziemców — formalności po mojej stronie</h1>
      <p>Od 2017 roku zajmuję się zezwoleniami na pracę i pobyt pracowników spoza Polski. Przygotowuję dokumenty, pilnuję terminów i wspieram nowych pracowników w pierwszych miesiącach w kraju.</p>
      <div class="hero-cta">
        <a class="btn btn-gold" href="#kontakt">Zapytaj o współpracę</a>
        <a class="btn btn-ghost" href="#cennik">Cennik</a>
      </div>
    </div>
  </div>

  <section id="zakres">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Zakres</span>
        <h2>W czym pomagamy firmom</h2>
        <p class="lead">Zatrudniasz cudzoziemców i chcesz mieć pewność, że wszystkie formalności są prawidłowo dopełnione? Wspieramy firmy w legalnym zatrudnianiu obcokrajowców.</p>
      </div>
      <div class="grid3">
        <div class="card"><h3>Zezwolenia na pracę</h3><p>Dobór odpowiedniej procedury i uzyskanie wymaganych dokumentów.</p></div>
        <div class="card"><h3>Oświadczenia o powierzeniu pracy</h3><p>Przygotowanie dokumentacji i przeprowadzenie procedury oświadczenia o powierzeniu pracy cudzoziemcowi.</p></div>
        <div class="card"><h3>Powiadomienia dla obywateli Ukrainy</h3><p>Weryfikacja obowiązków i dopełnienie formalności przy powierzeniu pracy obywatelom Ukrainy, jeśli dana procedura ma zastosowanie.</p></div>
        <div class="card"><h3>Dobór właściwej procedury</h3><p>Ustalenie, jakie dokumenty są potrzebne w konkretnej sytuacji.</p></div>
        <div class="card"><h3>Ograniczanie ryzyka prawnego</h3><p>Weryfikacja formalności związanych z zatrudnieniem cudzoziemców i minimalizowanie ryzyka sankcji za naruszenie przepisów.</p></div>
        <div class="card"><h3>Karty pobytu i zaproszenia</h3><p>Karty pobytu i Blue Card dla pracowników, zmiana pracodawcy, zaproszenia dla cudzoziemców.</p></div>
      </div>
      <p class="tagline">Formalności bez zbędnego stresu.</p>
    </div>
  </section>

  <section id="cennik" class="pricelist-section">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Cennik</span>
        <h2>Ceny wybranych usług</h2>
        <p class="lead">Przy stałej obsłudze lub większej liczbie pracowników przygotuję indywidualną ofertę.</p>
      </div>
      <div class="pricelist">
        ${rows([
          ["Konsultacja, 1 godzina", "dalej — połowa kwoty za każde 30 min", "300 zł"],
          ["Karta pobytu pracownika — Start Legal", "konsultacja, sprawdzenie dokumentów, checklista, wypełnienie wniosku w MOS, złożenie elektroniczne", "800 zł"],
          ["Karta pobytu pracownika — Full Support", "wszystko ze Start Legal + komplet dokumentów, przygotowanie dokumentów od pracodawcy, wsparcie przy składaniu, kontrola sprawy, bezpłatne odwołanie w razie odmowy", "1800 zł"],
          ["Karta pobytu pracownika — Premium Fast Track", "wszystko z Full Support + ponaglenie, skarga do sądu administracyjnego, wsparcie przy odbiorze karty, Profil Zaufany, e-Doręczenia", "2100 zł"],
          ["Blue Card — Niebieska Karta UE", "", "1000–2000 zł"],
          ["Zmiana pracodawcy przy karcie pobytu", "", "500 zł"],
          ["Oświadczenie o powierzeniu wykonywania pracy", "wraz z kopią umowy i zawiadomieniami o rozpoczęciu i zakończeniu pracy", "500 zł"],
          ["Zawiadomienie wojewody o zakończeniu pracy", "po stronie pracodawcy", "300 zł"],
          ["Zaproszenie dla cudzoziemca", "", "500 zł"],
          ["Osobista asysta w urzędzie", "1 wyjazd", "300 zł"]
        ])}
      </div>
      <div class="terms">
        <div><b>Umowa i dokument sprzedaży</b> za każdą usługę.</div>
        <div>Ceny nie obejmują opłat skarbowych ani kosztów tłumaczeń przysięgłych.</div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">Współpraca</span><h2>Jak to wygląda</h2></div>
      <div class="steps" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
        <div class="step"><h3>Rozmowa</h3><p>Ustalamy, kogo i na jakich warunkach chcesz zatrudnić.</p></div>
        <div class="step"><h3>Plan i wycena</h3><p>Dostajesz listę dokumentów, terminy i koszt.</p></div>
        <div class="step"><h3>Dokumenty</h3><p>Przygotowuję i składam wnioski, kontaktuję się z urzędem.</p></div>
        <div class="step"><h3>Opieka</h3><p>Pilnuję terminów ważności i informuję o zmianach w przepisach.</p></div>
      </div>
    </div>
  </section>

  <section id="kontakt" class="biz">
    <div class="wrap">
      <div>
        <span class="eyebrow">Kontakt</span>
        <h2>Porozmawiajmy o Twoich pracownikach</h2>
        <p>Napisz, ilu cudzoziemców zatrudniasz lub planujesz zatrudnić — odpowiem i zaproponuję termin rozmowy.</p>
        <div class="msgs">
          <a class="btn btn-gold" href="${WA}" target="_blank" rel="noopener">WhatsApp</a>
          <a class="btn btn-ghost" href="${TG}" target="_blank" rel="noopener">Telegram</a>
          <a class="btn btn-ghost" href="tel:+48791017254">+48 791 017 254</a>
        </div>
      </div>
      <ul>
        <li>E-mail: ${emailHtml("do uzupełnienia")}</li>
        <li>Biuro: ul. Gościnna 11, piętro 3, lok. 37, 05-082 Blizne Łaszczyńskiego</li>
        <li>Pn–Pt od 9:00, spotkania po wcześniejszym umówieniu</li>
        <li>Obsługa po polsku, ukraińsku i rosyjsku</li>
      </ul>
    </div>
  </section>`
});


// Dokumenty prawne Zamawiającego (po polsku) — treść w content/
for (const [file, title, h1] of [
  ["polityka-prywatnosci.html", "Polityka prywatności", "Polityka prywatności"],
  ["klauzula-informacyjna.html", "Klauzula informacyjna RODO", "Klauzula informacyjna dotycząca przetwarzania danych osobowych"]
]) {
  page({
    file, lang: "pl",
    title: `${title} — Julia Hajecka`,
    desc: `${title} — Julia Hajecka LEGALIZACJA POBYTU CUDZOZIEMCÓW W POLSCE.`,
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

console.log("ok");
