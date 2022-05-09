export class KeyRow {
  constructor(className) {
    this.className = className;
  }

  // KeyRow generator
  generateKeyRow() {
    let template = "";
    let rowElement = document.createElement("div");
    rowElement.className = `row ${this.className}`;
    rowElement.innerHTML = template;
    return rowElement;
  }
}


