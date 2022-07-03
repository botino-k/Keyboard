export class Key {
  constructor({ code, rowType, ...rest }) {
    this.code = code;
    this.rowType = rowType;
    this.rest = rest;
  }

  // Key generator
  generateKey(lang, shift) {
    let template = "";
    let keyElement = document.createElement("button");
    keyElement.className = "key";
    keyElement.setAttribute("data-code", this.code);
    keyElement.setAttribute("data-type", this.rest.typeBtn);
    template += ` ${this.rest[`${lang}`][`${shift}`]}`;
    keyElement.innerHTML = template;
    return keyElement;
  }
}


export class KeyRow {
  constructor(className) {
    this.className = className;
  }

  // KeyRow generator
  generateKeyRow() {
    let template = "";
    let rowElement = document.createElement("div");
    rowElement.className = `row keyboard__${this.className}`;
    rowElement.innerHTML = template;
    return rowElement;
  }
}
