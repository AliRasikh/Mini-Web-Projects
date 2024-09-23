const slides = document.querySelectorAll(".slider img");

count = 0;
maxCount = slides.length - 1;
let intervalId = null;

document.addEventListener("DOMContentLoaded", startSlideShow);
function startSlideShow() {
  if (slides.length > 0) {
    slides[count].classList.add("slideRight");
    intervalId = setInterval(next, 3000);
  }
}

function next() {
  count === maxCount ? (count = 0) : count++;
  slides.forEach((slide) => slide.classList.remove("slideRight", "slideLeft"));
  slides[count].classList.add("slideRight");
}

function prev() {
  clearInterval(intervalId);
  count === 0 ? (count = maxCount) : count--;
  slides.forEach((slide) => slide.classList.remove("slideRight", "slideLeft"));
  slides[count].classList.add("slideLeft");
}
