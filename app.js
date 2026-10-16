const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
if (burger && nav) burger.addEventListener("click", () => nav.classList.toggle("open"));

const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const lines = [
      "Добрий день! Заявка з сайту.",
      `Ім'я: ${f.get("name")}`,
      `Телефон: ${f.get("phone")}`,
      `Зручний месенджер: ${f.get("msgr")}`,
      `Хто: ${f.get("who")}`,
      `Мова: ${f.get("lang")}`,
      `Послуга: ${f.get("service")}`,
      f.get("msg") ? `Ситуація: ${f.get("msg")}` : ""
    ].filter(Boolean);
    window.open(`https://wa.me/48791017254?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });
}

const fab = document.querySelector(".fab");
if (fab && document.querySelector(".hero-cta")) {
  const upd = () => fab.classList.toggle("off", scrollY < 500);
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

// Заглушки мовних версій
document.querySelectorAll("[data-soon]").forEach((b) => b.addEventListener("click", () => {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
  t.textContent = `${b.dataset.soon}: ця мовна версія з'явиться незабаром`;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 2600);
}));

// Випадаючий список мов
const dd = document.getElementById("langdd");
if (dd) {
  const btn = dd.querySelector(".langdd-btn");
  const set = (open) => { dd.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); };
  btn.addEventListener("click", (e) => { e.stopPropagation(); set(!dd.classList.contains("open")); });
  document.addEventListener("click", () => set(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
}

// Карта Google вантажиться лише після натискання — без cookies Google до згоди відвідувача
const mapBox = document.getElementById("map");
const mapBtn = document.getElementById("mapLoad");
if (mapBox && mapBtn) {
  mapBtn.addEventListener("click", () => {
    const f = document.createElement("iframe");
    f.src = mapBox.dataset.src;
    f.title = "Google Maps";
    f.loading = "lazy";
    f.referrerPolicy = "no-referrer-when-downgrade";
    mapBox.innerHTML = "";
    mapBox.appendChild(f);
  });
}
