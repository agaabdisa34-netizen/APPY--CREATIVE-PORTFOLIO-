/* =====================================================================
   APPY CREATIVES — SCRIPT
   Five small, independent features. Nothing here needs editing
   unless you're adding/removing testimonial cards (see part 4).
===================================================================== */

/* 1) SCRUBBER — fills the top progress bar as the page is scrolled */
const playhead = document.getElementById("playhead");
function updateScrubber() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? scrollTop / docHeight : 0;
  playhead.style.transform = `translateX(${progress * (playhead.parentElement.offsetWidth - 2)}px)`;
}
window.addEventListener("scroll", updateScrubber, { passive: true });
window.addEventListener("resize", updateScrubber);
updateScrubber();

/* 2) MOBILE NAV — toggles the menu open/closed on small screens */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

/* 3) REVEAL ON SCROLL — fades sections up into place the first time
      they enter the viewport. One consistent motion, used everywhere. */
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revealObserver.observe(el));

/* 3b) FILMSTRIP ARROWS — the ‹ › buttons next to "Shorts" / "Long-form" */
document.querySelectorAll(".arrow").forEach((btn) => {
  btn.addEventListener("click", () => {
    const track = document.getElementById(btn.dataset.scroll);
    const dir = Number(btn.dataset.dir);
    track.scrollBy({ left: dir * 300, behavior: "smooth" });
  });
});

/* 4) TESTIMONIAL SLIDER — shows one caption card at a time.
      Add or remove testimonials by editing the <li class="caption-card">
      blocks in index.html; this script adapts automatically. */
const captionCards = Array.from(document.querySelectorAll(".caption-card"));
const dotsWrap = document.getElementById("capDots");
let capIndex = 0;

captionCards.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("is-active");
  dot.addEventListener("click", () => showCaption(i));
  dotsWrap.appendChild(dot);
});
const dots = Array.from(dotsWrap.children);

function showCaption(index) {
  captionCards[capIndex].classList.remove("is-active");
  dots[capIndex].classList.remove("is-active");
  capIndex = (index + captionCards.length) % captionCards.length;
  captionCards[capIndex].classList.add("is-active");
  dots[capIndex].classList.add("is-active");
}

document.getElementById("capPrev").addEventListener("click", () => showCaption(capIndex - 1));
document.getElementById("capNext").addEventListener("click", () => showCaption(capIndex + 1));

/* auto-advance every 6s, pausing while the mouse is over the stage */
let autoplay = setInterval(() => showCaption(capIndex + 1), 6000);
const stage = document.querySelector(".caption-stage");
stage.addEventListener("mouseenter", () => clearInterval(autoplay));
stage.addEventListener("mouseleave", () => {
  autoplay = setInterval(() => showCaption(capIndex + 1), 6000);
});
