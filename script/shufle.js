// array of elements - elemArray

const portfolioButtonsArray = document.querySelectorAll(
  ".portfolio-buttons > .portfolio-btn"
);

const portfolioPicturesArray = document.querySelectorAll(
  ".portfolio-img > img"
);

const portfolioDivPicturesArray = document.querySelectorAll(
  ".portfolio-pictures > .portfolio-img"
);

// elements parrent - elemParrent

const portfolioPictures = document.querySelector(".portfolio-pictures");
const portfolioButtons = document.querySelector(".portfolio-buttons");

// random count

const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

// changing of active tab

const changeActiveTab = (elemArray, elemParrent, classActive) => {
  elemParrent.addEventListener("click", (event) => {
    for (let i = 0; i < elemArray.length; i++) {
      elemArray[i].classList.remove(classActive);
    }
    event.target.classList.add(classActive);
    portfolioButtons.classList.remove("active-btn");
  });
};

// random shufle

const shufleRandomPicture = () => {
  for (const elem of portfolioButtonsArray) {
    elem.addEventListener("click", () => {
      for (const elem of portfolioDivPicturesArray) {
        elem.style.order = `${getRandomNumber(portfolioPicturesArray.length)}`;
      }
    });
  }
};

// final functions

shufleRandomPicture();

changeActiveTab(portfolioButtonsArray, portfolioButtons, "active-btn");

changeActiveTab(portfolioPicturesArray, portfolioPictures, "active-img");
