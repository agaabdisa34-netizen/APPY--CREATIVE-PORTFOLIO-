/* =====================================================================
   APPY CREATIVES — SCRIPT
   Three small, independent features. Nothing here needs editing.
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

/* 3b) FILMSTRIP ARROWS — the ‹ › buttons next to "Selected real estate work" */
document.querySelectorAll(".arrow").forEach((btn) => {
  btn.addEventListener("click", () => {
    const track = document.getElementById(btn.dataset.scroll);
    const dir = Number(btn.dataset.dir);
    track.scrollBy({ left: dir * 300, behavior: "smooth" });
  });
});
