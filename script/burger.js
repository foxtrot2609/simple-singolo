const headerBurger = document.querySelector(".header");
const wrapperBurger = document.querySelector(".header > .header-wrapper");
const menuBackground = document.querySelector(
  ".header-wrapper > .burger-background"
);
const burgerButton = document.querySelector(".header-wrapper > .hamburger");
const logoBurger = document.querySelector(".header-wrapper > .logo");
const menuBurger = document.querySelector(".header-wrapper .navigation");

const linksBurger = document.querySelector(".navigation");


// Open or close burger menu

const onClickBurgerButton = () => {
  headerBurger.classList.toggle("visible-header");
  wrapperBurger.classList.toggle("visible-wrapper");
  menuBackground.classList.toggle("background-active");
  burgerButton.classList.toggle("visible-hamburger");
  logoBurger.classList.toggle("visible-h1");
  menuBurger.classList.toggle("navigation-active");
};

// Close burger menu

const closeBurger = () => {
  headerBurger.classList.remove("visible-header");
  wrapperBurger.classList.remove("visible-wrapper");
  menuBackground.classList.remove("background-active");
  burgerButton.classList.remove("visible-hamburger");
  logoBurger.classList.remove("visible-h1");
  menuBurger.classList.remove("navigation-active");
};

// Click action on BURGER button

burgerButton.addEventListener("click", () => {
  onClickBurgerButton();
});

// Click action on menu links

linksBurger.addEventListener("click", () => {
  closeBurger();
});

// Click action on logo

logoBurger.addEventListener("click", () => {
    closeBurger();
  });

