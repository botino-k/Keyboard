import { burger, mediaChangeTablet, closeBurgerByOverlay } from "./js/burger.js";
import { generatePagination , generatePaginationPetsSliderWrapper} from "./js/pagination.js";
import { generatePopup} from "./js/popup.js";
import { generateCarousel} from "./js/carousel.js";

window.onload = function () {
  closeBurgerByOverlay();
  mediaChangeTablet();
  burger();

  if (document.querySelector(".pagination-slider")) {
    generatePagination();
    generatePaginationPetsSliderWrapper();
    generatePopup();
  }
   if (document.querySelector(".carousel__block")) {
    generateCarousel();
  }

};


