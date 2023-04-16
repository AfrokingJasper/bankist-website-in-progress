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
      "top-0"
      // "left-0",
      // "right-0"
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

// navigation hover effect
const hoverfade = function (e, opacity) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".navigation").querySelectorAll(".nav-link");
    const logo = link.closest(".navigation").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", hoverfade.bind(0.5));
nav.addEventListener("mouseout", hoverfade.bind(1));

// // fade in animation
const features = document.querySelector(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  features.classList.remove("fade-in");
  featuresObserver.unobserve(features);
};

const featuresObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

featuresObserver.observe(features);

// tab component reveal

const tabs = document.querySelectorAll(".tab-btn");
const tabsContainer = document.querySelector(".tab-container");
const tabContent = document.querySelectorAll(".tab-content");

tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".tab-btn");
  if (!clicked) return;

  // make all tabs and content inactive
  tabs.forEach((t) => t.classList.remove("active-tab"));
  tabContent.forEach((c) => c.classList.add("hidden"));

  // make the clicked tab active
  clicked.classList.add("active-tab");

  document
    .querySelector(`.tab-content-${clicked.dataset.tab}`)
    .classList.remove("hidden");

  // .classList.remove("hidden");

  // console.log(clicked);
});
