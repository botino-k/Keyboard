export class Article {
  constructor({ id, name, img, ...rest }) {
    this.id = id;
    this.name = name;
    this.img = img;
  }

  // Article generator
  generateArticle() {
    let template = "";
    let sliderElement = document.createElement("div");
    sliderElement.className = "main-slider__element";
    sliderElement.setAttribute("data-id", this.id);

    if (this.id) {
      template += `<article class="slider-card">`;
      if (this.img) {
        template += `<div class="slider-card__photo">
          <img src= ${this.img} alt=${this.name}></img></div>`;
      }
      if (this.name) {
        template += `<h4 class="slider-card__name">${this.name}</h4>`;
      }
      template += `<button class="button button_bordered"> Learn more </button>`;
      template += `</div>`;
    }

    sliderElement.innerHTML = template;
    return sliderElement;
  }
}
