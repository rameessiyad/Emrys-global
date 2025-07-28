const slider = document.getElementById("card-slider");
const scrollLeft = document.getElementById("scroll-left");
const scrollRight = document.getElementById("scroll-right");

scrollLeft.addEventListener("click", () => {
  slider.scrollBy({ left: -slider.offsetWidth, behavior: "smooth" });
});

scrollRight.addEventListener("click", () => {
  slider.scrollBy({ left: slider.offsetWidth, behavior: "smooth" });
});
