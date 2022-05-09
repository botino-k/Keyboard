export class Key {
  constructor({ code, ...rest }) {
    this.code = code;
    this.rest = rest;
  }

  // Key generator
  generateKey() {
    const lang = document.querySelector(".information-block").textContent
   
 
    let template = "";
    let keyElement = document.createElement("button");
    keyElement.className = "key";
    keyElement.setAttribute("data-code", this.code);

    if (lang === 'en'){
      template += ` ${this.rest.en.keyShiftFalse}`
       } else {template += ` ${this.rest.ru.keyShiftFalse}`}
       keyElement.innerHTML = template;
       console.log (lang)
    return keyElement;
  }

}

