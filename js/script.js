const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const openModal = document.querySelectorAll(".openmodal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("h-0");
  menu.classList.toggle("min-h-screen");
});

openModal.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.add("hidden");
    menu.classList.remove("h-0");
    menu.classList.remove("min-h-screen");
    menuBtn.classList.remove("open");
    overlay.classList.toggle("hidden");
    overlay.classList.toggle("flex");
  })
);

closeModal.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  overlay.classList.toggle("flex");
});

// sticky navigation
const nav = document.querySelector(".navigation");
const header = document.querySelector("header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add(
      "fixed",
      "bg-white",
      "bg-opacity-90",
      "top-0",
      "left-0",
      "right-0"
    );
  } else {
    nav.classList.remove("fixed", "bg-white", "bg-opacity-90", "top-0");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// // fade in animation
// const features = document.querySelector(".section");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("fade-in");
//   sectionObserver.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// sectionObserver.observe(features);
// features.classList.add("fade-in");

// // features.forEach((section) => {
// //   sectionObserver.observe(section);
// //   section.classList.add("fade-in");
// // });
