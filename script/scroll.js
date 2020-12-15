const headerElem = document.querySelector(".header");
const headerHeight = headerElem.offsetHeight;
const headerrTop = headerElem.offsetTop;

const sliderElem = document.querySelector(".slider");
const sliderHeight = sliderElem.offsetHeight;
const sliderTop = sliderElem.offsetTop;

const servicesElem = document.querySelector(".services");
const servicesHeight = servicesElem.offsetHeight;
const servicesTop = servicesElem.offsetTop;

const portfolioElem = document.querySelector(".portfolio");
const portfolioHeight = portfolioElem.offsetHeight;
const portfolioTop = portfolioElem.offsetTop;

const links = document.querySelectorAll(".navigation > li");

const removeActive = () => {
  links.forEach((li) => li.classList.remove("active"));
};

document.addEventListener("scroll", () => {
  onScroll();
});

const onScroll = () => {
    let currentPosition = window.scrollY;
    console.log(currentPosition);
  if (currentPosition < sliderHeight) {
    removeActive();
    links[0].classList.add("active");
  } else if (currentPosition >= sliderHeight && currentPosition < (portfolioTop - headerHeight)) {
    removeActive();
    links[1].classList.add("active");
  } else if (currentPosition >= (portfolioTop - headerHeight)) {
    removeActive();
    links[2].classList.add("active");
  } else {
    removeActive();
  }
}
