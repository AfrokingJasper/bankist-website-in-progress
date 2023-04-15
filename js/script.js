const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const openModal = document.querySelectorAll(".openmodal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
console.log(overlay);

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
