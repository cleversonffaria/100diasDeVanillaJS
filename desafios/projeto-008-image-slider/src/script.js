const slider = document.querySelector(".slider");
const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".img");

var index = 1;
var size = slides[index].clientWidth;

update();

function update() {
  slider.style.transform = "translateX(" + -size * index + "px)";
}

function slide() {
  slider.style.transition = "transform .5s ease-in-out";

  update();
}

function btnCheck() {
  if (this.id === "prev") {
    index--;
  } else if (this.id === "next") {
    index++;
  }

  slide();
}

slider.addEventListener("transitionend", () => {
  if (slides[index].id === "last") {
    slider.style.transition = "none";
    index = slides.length - 2;
    slider.style.transform = "translateX(" + -size * index + "px)";
  } else if (slides[index].id === "first") {
    slider.style.transition = "none";
    index = 1;
    slider.style.transform = "translateX(" + -size * index + "px)";
  }
});

buttons.forEach((btn) => btn.addEventListener("click", btnCheck));
