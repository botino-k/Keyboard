import { burger, mediaChangeTablet, closeBurgerByOverlay } from "./js/burger.js";
import { pets } from "./js/pet-card.js";
import { Article } from "./js/Article.js";
import { generatePagination } from "./js/pagination.js";

window.onload = function () {
  closeBurgerByOverlay();
  mediaChangeTablet();
  burger();
  if (pets) {
    renderArticlesToDom();
  }
  generatePagination()
};

const renderArticlesToDom = () => {
  if(window.innerWidth>=1280){
    document.querySelectorAll(".main-slider__strip").forEach((e)=> {
      e.innerHTML=`<div class="main-slider__element"></div>
      <div class="main-slider__element"></div>
      <div class="main-slider__element"></div>`
    })
  }else if(window.innerWidth<1280 && window.innerWidth>=768){
    document.querySelectorAll(".main-slider__strip").forEach((e)=> {
      e.innerHTML=`<div class="main-slider__element"></div>
      <div class="main-slider__element"></div>`
    })
  }else{  document.querySelectorAll(".main-slider__strip").forEach((e)=> {
    e.innerHTML=`<div class="main-slider__element"></div>`
  })

  }

  /*let mainSliderWrapper = cleanMainSliderStrip();
  generateArticles(pets).forEach((article) => {
    mainSliderWrapper.append(article.generateArticle());
  });*/
};

/*const cleanMainSliderStrip = () => {
  const mainSliderStrip = document.querySelectorAll(".main-slider__strip");
  mainSliderStrip.forEach((e) => {
    e.innerHTML = "";
  });
 console.log(mainSliderStrip)
  return mainSliderStrip;
};//-подчищает main-slider__strip
cleanMainSliderStrip()*/

const generateArticles = (data) => {
  let articles = [];
  data.forEach((e) => {
    articles.push(new Article(e));
  });
  console.dir(articles);
  return articles;
};//-получеем маасив с карточками
generateArticles(pets);


