export class Key {
  constructor({ code, ...rest }) {
    this.code = code;
    this.rest = rest;
  }

  // Key generator
  generateKey() {
    let template = "";
    let rowElement = document.createElement("button");
    rowElement.className = "key";
    rowElement.setAttribute("data-code", this.code);

    if (this.code) {
      template += ` ${this.rest.en.keyShiftFalse}`;
       }
       rowElement.innerHTML = template;
    return rowElement;
  }

}