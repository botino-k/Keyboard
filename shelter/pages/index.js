import { burger, mediaChangeTablet, closeBurgerByOverlay } from "./js/burger.js";
import { pets } from "./js/pet-card.js";
import { Article } from "./js/Article.js";
import { generatePagination , generatePaginationPetsSliderWrapper} from "./js/pagination.js";
import { generatePopup} from "./js/popup.js";

window.onload = function () {
  closeBurgerByOverlay();
  mediaChangeTablet();
  burger();

  if (document.querySelector(".pets-slider")) {
  generatePagination();
  generatePaginationPetsSliderWrapper(); 
}
  generatePopup()
};


