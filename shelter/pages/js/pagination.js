import { pets } from "./pet-card.js"; // 8
import { Article } from "./Article.js";

function generatePagination() {
  let fullPetsArr = []; // 48
  const petsSlider = document.querySelector(".pets-slider");

  const cleanPetsSlider = () => {
    petsSlider.innerHTML = "";
    return petsSlider;
  };

  const shuffleArticles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const generateArticles = (data) => {
    const petsArr = [];
    data.forEach((e) => {
      petsArr.push(new Article(e));
    });
    shuffleArticles(petsArr);
    return petsArr;
  };

  const generateFullPetsArr = () => {
    for (let i = 0; i < 6; i++) {
      let petsArr = generateArticles(pets);
      fullPetsArr = [...fullPetsArr, ...petsArr];
    }
    return fullPetsArr;
  };
  generateFullPetsArr(); //- перезаписала fullPetsArr с набором случайных 8ок и получила его

  const checkMatches863 = (array) => {
    for (let i = 0; i < array.length / 6; i++) {
      const stepList = array.slice(i * 6, i * 6 + 6);

      for (let k = 0; k < 6; k++) {
        const duplicatedItem = stepList.find((element, index) => {
          return element.id === stepList[k].id && index !== k;
        });
        if (duplicatedItem) {
          const ind = i * 6 + k;
          const which8OfList = Math.trunc(ind / 8);
          array.splice(which8OfList * 8, 0, array.splice(ind, 1)[0]);
          i -= 2;
          break;
        }
      }
    }
    return array;
  };

  const renderArticlesToDom = () => {
    let petsSliderWrapper = cleanPetsSlider();

    checkMatches863(fullPetsArr).forEach((article) => {
      petsSliderWrapper.append(article.generateArticle());
    });
  };
  renderArticlesToDom();
  return document.querySelector(".pets-slider");
}

function generatePaginationPetsSliderWrapper() {
  let countCards;
  const petsSlider = document.querySelector(".pets-slider");
  let currentPage = 1;

  const mediaTablet = window.matchMedia("(min-width: 768px)");
  const mediaContent = window.matchMedia("(min-width: 1280px)");
  const mediaMobile = window.matchMedia("(min-width: 320px)");
  const mediaSize = [mediaTablet, mediaContent, mediaMobile];

  const btnPaginationStartLeft = document.querySelector(
    ".button__pagination_start-left"
  );
  const btnPaginationLeft = document.querySelector(".button__pagination_left");
  const btnPaginationRight = document.querySelector(
    ".button__pagination_right"
  );
  const btnPaginationEndRight = document.querySelector(
    ".button__pagination_end-right"
  );
  const btnCurrentPage = document.querySelector(
    "button.button.button_circular.button_circular_active"
  );

  const addCardsDependOnWidth = (width) => {
    countCards = width >= 1280 ? 8 : width < 1280 && width >= 768 ? 6 : 3;
    document.querySelectorAll(".main-slider__element_visible").forEach((e) => {
      e.classList = "main-slider__element";
    });
    for (let i = 0; i < countCards; i++) {
      petsSlider.children[i + countCards * (currentPage - 1)].classList =
        "main-slider__element_visible";
    }
    return countCards;
  };
  addCardsDependOnWidth(window.innerWidth);

  const screenTest = () => {
    document.querySelectorAll(".main-slider__element_visible").forEach((e) => {
      e.classList = "main-slider__element";
    });
    addCardsDependOnWidth(window.innerWidth);
  };
  mediaSize.forEach((e) => e.addEventListener("change", screenTest));



  btnPaginationEndRight.addEventListener("click", () => {
    currentPage = petsSlider.children.length / countCards;
    btnCurrentPage.innerHTML = currentPage;
    disableBtnRight();
    handleBtnLeft();
    addCardsDependOnWidth(window.innerWidth);
  });

  btnPaginationRight.addEventListener("click", () => {
    currentPage += 1;
    btnCurrentPage.innerHTML = currentPage;
    addCardsDependOnWidth(window.innerWidth);

    if (currentPage >= petsSlider.children.length / countCards) {
      disableBtnRight();
    } else {handleBtnLeft()
    }
  });

  btnPaginationStartLeft.addEventListener("click", () => {
    currentPage = 1;
    btnCurrentPage.innerHTML = currentPage;
    disableBtnLeft();
    handleBtnRight();
    addCardsDependOnWidth(window.innerWidth);
  });

  btnPaginationLeft.addEventListener("click", () => {
    currentPage -= 1;
    btnCurrentPage.innerHTML = currentPage;
    addCardsDependOnWidth(window.innerWidth);
    if (currentPage <= 1) {
      disableBtnLeft();
    } else {handleBtnRight()
    }
  });


  function disableBtnRight() {
    btnPaginationEndRight.setAttribute("disabled", "disabled");
    btnPaginationRight.setAttribute("disabled", "disabled");
    btnPaginationEndRight.classList.remove("button_circular_hover");
    btnPaginationRight.classList.remove("button_circular_hover");
  }
  function handleBtnLeft() {
    btnPaginationStartLeft.removeAttribute("disabled");
    btnPaginationLeft.removeAttribute("disabled");
    btnPaginationStartLeft.classList.add("button_circular_hover");
    btnPaginationLeft.classList.add("button_circular_hover");
  }
  function disableBtnLeft() {
    btnPaginationStartLeft.setAttribute("disabled", "disabled");
    btnPaginationLeft.setAttribute("disabled", "disabled");
    btnPaginationStartLeft.classList.remove("button_circular_hover");
    btnPaginationLeft.classList.remove("button_circular_hover");
  }
  function handleBtnRight() {
    btnPaginationEndRight.removeAttribute("disabled");
    btnPaginationRight.removeAttribute("disabled");
    btnPaginationEndRight.classList.add("button_circular_hover");
    btnPaginationRight.classList.add("button_circular_hover");
  }
}

export { generatePagination, generatePaginationPetsSliderWrapper };
