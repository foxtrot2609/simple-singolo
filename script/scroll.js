// SCRIPT WORKS CORRECTLY ON DESKTOP IN BROWSER SCALE 100%

const servicesElem = document.querySelector("#services");

const servicesTop = servicesElem.offsetTop;
// let servicesBox = servicesElem.getBoundingClientRect();
// let servicesTop = Math.floor(servicesBox.top);

const portfolioElem = document.querySelector("#portfolio");

const portfolioTop = portfolioElem.offsetTop;
// let portfolioBox = portfolioElem.getBoundingClientRect();
// let portfolioTop = Math.floor(portfolioBox.top);

const links = document.querySelectorAll(".navigation > li");

const removeActive = () => {
  links.forEach((li) => li.classList.remove("active"));
};

document.addEventListener("scroll", () => {
  onScroll();
});

const onScroll = () => {
    let currentPosition = window.scrollY;

    // console.log("services Top: " + servicesTop);
    // console.log("portfolio Top: " + portfolioTop);
    // console.log("current position: " + currentPosition);

  if (currentPosition < servicesTop) {
    removeActive();
    links[0].classList.add("active");
  } else if (currentPosition >= servicesTop && portfolioTop > currentPosition) {
    removeActive();
    links[1].classList.add("active");
  } else if (currentPosition >= portfolioTop) {
    removeActive();
    links[2].classList.add("active");
  } else {
    removeActive();
  }
}
