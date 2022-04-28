export class Article {
  constructor({ id, name, img, ...rest }) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.rest = rest;
  }

  // Article generator
  generateArticle() {
    let template = "";
    let sliderElement = document.createElement("div");
    sliderElement.className = "slider__element";
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

  // Popup generator
  generatePopupArticle() {
    let template = "";
    let popupElement = document.createElement("div");
    popupElement.className = "modal";
  
    if (this.id){
      template += `<div class="modal__wrapper">
      <button class="button button_circular button_circular_hover  button_popup">
      <span> <img src="../../assets/icons/close-icon.svg" alt="close-icon"> </span>
</button>
      
      <div class="modal__container">
  
      <div class="modal__photo-block">`

      if (this.img){ 
        template +=`<img src= ${this.img} alt=${this.name}></div>`}

      template += ` <div class="modal__description-block">
      <div class="description-block__content">
      <div data-name="${this.name}">${this.name}</div>
      <div data-type="${this.rest.type}">${this.rest.type} - ${this.rest.breed}</div>
      <div data-description="#">${this.rest.description}</div>
      <ul> 
      <li><b>Age: </b>${this.rest.age}</li>
      <li><b>Inoculations: </b>${this.rest.inoculations.join(', ')}</li>
      <li><b>Diseases: </b>${this.rest.diseases.join(', ')}</li>
      <li><b>Parasites: </b>${this.rest.parasites.join(', ')}</li>
      </ul>
      `
      template += `</div></div></div></div> `;
    }
    popupElement.innerHTML = template;
    return popupElement;
  }

}
