const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
if (burger && nav) burger.addEventListener("click", () => nav.classList.toggle("open"));

const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    // Підписи заявки мовою сторінки
    const TT = {
      uk: ["Добрий день! Заявка з сайту.", "Ім'я", "Телефон", "Зручний месенджер", "Хто", "Мова", "Послуга", "Ситуація"],
      pl: ["Dzień dobry! Zgłoszenie ze strony.", "Imię", "Telefon", "Komunikator", "Kto", "Język", "Usługa", "Sytuacja"],
      ru: ["Добрый день! Заявка с сайта.", "Имя", "Телефон", "Удобный мессенджер", "Кто", "Язык", "Услуга", "Ситуация"],
      en: ["Hello! A request from the website.", "Name", "Phone", "Messenger", "Who", "Language", "Service", "Situation"]
    };
    const [hi, ...k] = TT[document.documentElement.lang] || TT.uk;
    const lines = [
      hi,
      `${k[0]}: ${f.get("name")}`,
      `${k[1]}: ${f.get("phone")}`,
      `${k[2]}: ${f.get("msgr")}`,
      `${k[3]}: ${f.get("who")}`,
      `${k[4]}: ${f.get("lang")}`,
      `${k[5]}: ${f.get("service")}`,
      f.get("msg") ? `${k[6]}: ${f.get("msg")}` : ""
    ].filter(Boolean);
    window.open(`https://wa.me/48791017254?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });
}

const fab = document.querySelector(".fab");
if (fab) {
  // ховаємо кнопку на першому екрані (де вже є своя кнопка) і біля нижніх посилань футера
  const hasHero = !!document.querySelector(".hero-cta");
  let atBottom = false;
  const upd = () => fab.classList.toggle("off", atBottom || (hasHero && scrollY < 500));
  const bottom = document.querySelector(".fbottom");
  if (bottom && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { atBottom = e.isIntersecting; upd(); }).observe(bottom);
  }
  addEventListener("scroll", upd, { passive: true });
  upd();
}

const totopEl = document.getElementById("totop");
if (totopEl) {
  const upd = () => totopEl.classList.toggle("off", scrollY < 500);
  addEventListener("scroll", upd, { passive: true });
  upd();
  totopEl.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

// На мобільному кнопка консультації — іконка, що розкривається після першого дотику
const fabBtn = document.querySelector(".fab");
if (fabBtn) {
  fabBtn.addEventListener("click", (e) => {
    if (matchMedia("(max-width: 640px)").matches && !fabBtn.classList.contains("open")) {
      e.preventDefault();
      fabBtn.classList.add("open");
    }
  });
  document.addEventListener("click", (e) => { if (!fabBtn.contains(e.target)) fabBtn.classList.remove("open"); });
}

document.querySelectorAll(".reviews-section").forEach((sec) => {
  const track = sec.querySelector(".rv-track");
  if (!track) return;
  sec.querySelectorAll(".rv-btn").forEach((b) => b.addEventListener("click", () => {
    const card = track.querySelector(".review");
    track.scrollBy({ left: Number(b.dataset.dir) * (card.offsetWidth + 20), behavior: "smooth" });
  }));
});

// Випадаючий список мов
const dd = document.getElementById("langdd");
if (dd) {
  const btn = dd.querySelector(".langdd-btn");
  const set = (open) => { dd.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); };
  btn.addEventListener("click", (e) => { e.stopPropagation(); set(!dd.classList.contains("open")); });
  document.addEventListener("click", () => set(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
}

// Згода на cookies (RODO): необхідні завжди; карта Google — лише після згоди
const CC_KEY = "cookie-consent";
const getCC = () => { try { return localStorage.getItem(CC_KEY); } catch (e) { return null; } };
const setCC = (v) => { try { localStorage.setItem(CC_KEY, v); } catch (e) {} };

const mapBox = document.getElementById("map");
const loadMap = () => {
  if (!mapBox || mapBox.querySelector("iframe")) return;
  const f = document.createElement("iframe");
  f.src = mapBox.dataset.src;
  f.title = "Google Maps";
  f.loading = "lazy";
  f.referrerPolicy = "no-referrer-when-downgrade";
  mapBox.innerHTML = "";
  mapBox.appendChild(f);
};

const ccBar = document.getElementById("cc");
if (ccBar) {
  if (!getCC()) ccBar.hidden = false;
  ccBar.querySelectorAll("[data-cc]").forEach((b) => b.addEventListener("click", () => {
    setCC(b.dataset.cc);
    ccBar.hidden = true;
    ccBar.classList.remove("cc-modal");
    if (b.dataset.cc === "all") loadMap();
  }));
}
document.querySelectorAll("[data-cc-open]").forEach((b) => b.addEventListener("click", () => { if (ccBar) ccBar.hidden = false; }));

const mapBtn = document.getElementById("mapLoad");
// Без згоди карта не вантажиться: натискання відкриває вікно згоди по центру екрана
if (mapBtn) mapBtn.addEventListener("click", () => {
  if (getCC() === "all") return loadMap();
  if (!ccBar) return;
  ccBar.classList.add("cc-modal");
  ccBar.hidden = false;
  const acc = ccBar.querySelector('[data-cc="all"]');
  if (acc) acc.focus();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && ccBar && ccBar.classList.contains("cc-modal")) { ccBar.classList.remove("cc-modal"); if (getCC()) ccBar.hidden = true; }
});
if (getCC() === "all") loadMap();
