document.querySelector(".hamburger").addEventListener("click", (e) => {
  let hamburger = document.querySelector(".hamburger");
  let menu = document.querySelector(".menu");

  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");

  e.preventDefault(e);
});

document.querySelector(".menu-item").addEventListener("click", (e) => {
  let hamburger = document.querySelector(".hamburger");
  let menu = document.querySelector(".menu");

  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});

document.querySelector(".menu-sublink").addEventListener("click", (e) => {
  let hamburger = document.querySelector(".hamburger");
  let menu = document.querySelector(".menu");

  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});
