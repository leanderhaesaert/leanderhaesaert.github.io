// set Variables
if (!localStorage.getItem("lsCount")) {
  localStorage.setItem("lsCount", 0);
}
let count = localStorage.getItem("lsCount");
let display = document.getElementById("display-count");
let counter = document.getElementById("counter");
let resetter = document.getElementById("resetter");

// set count when dom loaded
document.addEventListener("DOMContentLoaded", () => {
  display.innerHTML = count;
});
// click count
counter.addEventListener("click", () => {
  count++;
  display.innerHTML = count;
  localStorage.setItem("lsCount", count);
});
// click reset
resetter.addEventListener("click", () => {
  count = 0;
  display.innerHTML = count;
  localStorage.setItem("lsCount", count);
});
