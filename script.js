// SCRIPT NEEDS THREE AND MORE SLIDES FOR CORRECT WORK

const slides = document.querySelectorAll(".slider-container .slide");

const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");

let currentSlide = slides.length - 1;

// Mouseover action on NEXT button

nextButton.addEventListener("mouseover", () => {
  slideLeftToRight();
});

// Mauseout action on NEXT button

nextButton.addEventListener("mouseout", () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = currentSlide - 1;
  }
});

// Click action on NEXT button

nextButton.addEventListener("click", () => {
  slideLeftToRight();
});

// Slide moves left to right

const slideLeftToRight = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("right");
    slides[i].classList.remove("right-prev");
    slides[i].classList.add("left");
  }

  slides[currentSlide].classList.remove("left");

  if (currentSlide === 0) {
    slides[slides.length - 1].classList.remove("left");
    slides[slides.length - 1].classList.add("right");
  } else {
    slides[currentSlide - 1].classList.remove("left");
    slides[currentSlide - 1].classList.add("right");
  }

  if (currentSlide + 1 === slides.length) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
};

// Mouseover action on PREVIOUS button

previousButton.addEventListener("mouseover", () => {
  slideRightToLeft();
});

// Mauseout action on PREVIOUS button

previousButton.addEventListener("mouseout", () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide = currentSlide + 1;
  }
});

// Click action on PREVIOUS button

previousButton.addEventListener("click", () => {
  slideRightToLeft();
});

// Slide moves right to left

const slideRightToLeft = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("left");
    slides[i].classList.remove("right");
    slides[i].classList.add("right-prev");
  }

  slides[currentSlide].classList.remove("right-prev");

  if (currentSlide === slides.length - 1) {
    slides[0].classList.remove("right-prev");
    slides[0].classList.add("left");
  } else {
    slides[currentSlide + 1].classList.remove("right-prev");
    slides[currentSlide + 1].classList.add("left");
  }

  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
};