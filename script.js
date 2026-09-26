// Select elements
const views = document.querySelectorAll(".view");
const openBtn = document.querySelector(".open-btn");
const nav = document.querySelector(".passport-nav");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const projectStamps = document.querySelectorAll(".stamp-project");
const professionStamps = document.querySelectorAll(".stamp-profession");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");

// Track which view is showing (0 = front cover)
let currentIndex = 0;
let lastFocused = null;

// Show one view, hide the rest, and update the nav
function showView(index) {
  currentIndex = index;
  views.forEach((view, i) => view.classList.toggle("is-active", i === index));

  // The nav only appears once the cover is open
  nav.classList.toggle("is-hidden", index === 0);
  nextBtn.disabled = index === views.length - 1;
}

// Open the passport from the cover
openBtn.addEventListener("click", () => showView(1));

// Next and Previous
nextBtn.addEventListener("click", () => {
  if (currentIndex < views.length - 1) showView(currentIndex + 1);
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) showView(currentIndex - 1);
});

// Lightbox
function openLightbox(stamp) {
  lastFocused = stamp;
  lightboxImg.src = stamp.dataset.full;
  lightboxImg.alt = stamp.dataset.caption;
  lightboxCaption.textContent = stamp.dataset.caption;
  lightbox.classList.remove("is-hidden");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.add("is-hidden");
  lightboxImg.src = "";
  if (lastFocused) lastFocused.focus();
}

projectStamps.forEach((stamp) => {
  stamp.addEventListener("click", () => openLightbox(stamp));
});

lightboxClose.addEventListener("click", closeLightbox);

// Clicking the dark backdrop (not the image or caption) also closes it
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.classList.contains("is-hidden")) {
    closeLightbox();
  }
});

// Profession stamps show and hide their description
professionStamps.forEach((stamp) => {
  stamp.addEventListener("click", () => {
    const description = stamp.nextElementSibling;
    const isHidden = description.classList.toggle("is-hidden");
    stamp.setAttribute("aria-expanded", String(!isHidden));
  });
});

// Start on the front cover
showView(0);
