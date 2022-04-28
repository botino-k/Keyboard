import { pets } from "./pet-card.js";
import { Article } from "./Article.js";
import { generatePopup } from "./popup.js";

function generateCarousel() {
  const petsArr = [];
  const generateArticles = (data) => {
    data.forEach((e) => {
      petsArr.push(new Article(e));
    });
    return petsArr;
  };
  generateArticles(pets);

  const shuffleArticles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  shuffleArticles(petsArr);
  //console.dir(petsArr);

  let countCards;
  const mediaTablet = window.matchMedia("(min-width: 768px)");
  const mediaContent = window.matchMedia("(min-width: 1280px)");
  const mediaMobile = window.matchMedia("(min-width: 320px)");
  const mediaSize = [mediaTablet, mediaContent, mediaMobile];
  const carouselVisibleStrip = document.querySelector(
    ".carousel-slider__strip_visible"
  );
  const carouselUnVisibleStrip = document.querySelectorAll(
    ".carousel-slider__strip_unvisible"
  );
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const carouselSlider = document.querySelector(".carousel-slider");

  const returnCountDependOnWidth = (width) => {
    countCards = width >= 1280 ? 3 : width < 1280 && width >= 768 ? 2 : 1;
    return countCards;
  };

  let visibleArr = [];
  let unVisibleArr = [];

  const getVisibleStripCards = () => {
    if (!visibleArr[0]) {
      for (let i = 0; i < countCards; i++) {
        visibleArr.push(petsArr.shift(i));
        carouselVisibleStrip.append(visibleArr[i].generateArticle());
        document
          .querySelectorAll(".carousel-slider__strip_visible .slider__element")
          .forEach((card) => card.classList.add("_visible"));
      } // console.dir(petsArr); onload
    } else {
      petsArr.push(...visibleArr);
      [...visibleArr] = [...unVisibleArr];
      carouselVisibleStrip.innerHTML = "";
      for (let i = 0; i < countCards; i++) {
        carouselVisibleStrip.append(visibleArr[i].generateArticle());
        document
          .querySelectorAll(".carousel-slider__strip_visible .slider__element")
          .forEach((card) => card.classList.add("_visible"));
      }

      generatePopup();
      // console.dir(petsArr);
      // console.log(visibleArr);
      return visibleArr;
    }
    return petsArr;
  };

  const getUnVisibleStripCards = () => {
    shuffleArticles(petsArr);
    carouselUnVisibleStrip.forEach((e) => (e.innerHTML = ""));
    unVisibleArr = [];

    for (let i = 0; i < countCards; i++) {
      unVisibleArr.push(petsArr.shift(i));
      carouselUnVisibleStrip.forEach((e) =>
        e.append(unVisibleArr[i].generateArticle())
      );
      document
        .querySelectorAll(".carousel-slider__strip_unvisible .slider__element")
        .forEach((card) => card.classList.add("_visible"));
    }
    // console.log(unVisibleArr);
    return unVisibleArr;
  };

  const addCardsDependOnWidth = () => {
  
    countCards = returnCountDependOnWidth(window.innerWidth);
    carouselVisibleStrip.innerHTML = "";
    carouselUnVisibleStrip.forEach((e) => {
      e.innerHTML = "";
    });

    getVisibleStripCards();
    getUnVisibleStripCards();
    generatePopup();
    //console.log(countCards);
  };

  addCardsDependOnWidth();

  mediaSize.forEach((e) => e.addEventListener("change", addCardsDependOnWidth));

  const moveSliderLeft = () => {
    carouselSlider.classList.add("strip_transition-left");
    btnLeft.removeEventListener("click", moveSliderLeft);
    btnRight.removeEventListener("click", moveSliderRight);
  };
  const moveSliderRight = () => {
    carouselSlider.classList.add("strip_transition-right");
    btnRight.removeEventListener("click", moveSliderRight);
    btnLeft.removeEventListener("click", moveSliderLeft);
  };

  btnLeft.addEventListener("click", moveSliderLeft);
  btnRight.addEventListener("click", moveSliderRight);

  carouselSlider.addEventListener("animationend", () => {
    carouselSlider.classList.remove("strip_transition-right");
    carouselSlider.classList.remove("strip_transition-left");
    btnLeft.addEventListener("click", moveSliderLeft);
    btnRight.addEventListener("click", moveSliderRight);
    getVisibleStripCards();
    getUnVisibleStripCards();
  });
  //console.dir(petsArr);
}

export { generateCarousel };
