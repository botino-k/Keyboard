import { Key } from "./Key.js";
import { KeyRow } from "./Key.js";
import { data } from "./data.js";

const language = ["ru"];
const shift = ["keyShiftFalse"];

function renderTextAreaToDom() {
  const body = document.querySelector("body");
  body.innerHTML = `<div class="information-block">en</div>
<div class="textarea-block">
  <textarea class="textarea" placeholder="Click to start writing..." name="textarea" rows="5" cols="33" ></textarea>
</div>`;
}

const generateRowCollection = (data) => {
  let rows = [];
  data.forEach((e) => {
    rows.push(new KeyRow(e));
  });
  return rows;
};

function renderRowsCollectionToDom() {
  let rowsNameArr = [...new Set(data.map((row) => row.rowType))];
  let rows = generateRowCollection(rowsNameArr);

  const rowsWrapper = document.createElement("div");
  rowsWrapper.className = "keyboard";
  document.body.append(rowsWrapper);

  rows.forEach((e) => {
    rowsWrapper.append(e.generateKeyRow());
  });
}

const generateKeyCollection = (data) => {
  const keyBoardRow = [];
  data.forEach((e) => {
    keyBoardRow.push(new Key(e));
  });
  return keyBoardRow;
};

function renderKeyToDom(language, shift) {
  const keyboardRows = document.querySelectorAll(".row");
  let keys = generateKeyCollection(data);

  const renderToDom = (collection, rowDOM) => {
    collection.forEach((key) => {
      for (let i of rowDOM) {
        if (i.className.includes(key.rowType)) {
          i.append(key.generateKey(language[0], shift[0]));
        }
      }
    });
  };
  renderToDom(keys, keyboardRows);
}

function animationKeyboardClick() {
  let dataCodeArr = [];
  for (let i of data) {
    dataCodeArr.push(i.code);
  }
  document.addEventListener("keydown", (e) => {
    if (dataCodeArr.find((el) => el == e.code)) {
      document.querySelector(`[data-code=${e.code}]`).classList.add("_active");
    }
  });
  document.addEventListener("keyup", (e) => {
    if (dataCodeArr.find((el) => el == e.code)) {
      document
        .querySelector(`[data-code=${e.code}]`)
        .classList.remove("_active");
    }
  });
}

function getKeyPressValue(key) {
  let keyValue = key.code || key.target.dataset.code;
  key.preventDefault();
  return keyValue;
}

function keyboardClick() {
  const keyboard = document.querySelector(".keyboard");
  const textarea = document.querySelector(".textarea");

  function clickInputBtn(e) {
    textarea.focus();
    let keyCode = getKeyPressValue(e);
    let activeKey = document.querySelector(`[data-code=${keyCode}]`);

    let ss = textarea.selectionStart;
    let se = textarea.selectionEnd;
    let ln = textarea.value.length;

    if (activeKey && activeKey.dataset.type == "inputBtn") {
      let keyValue = activeKey.innerText;

      textarea.value =
      textarea.value.substring(0, ss) +
      keyValue +
      textarea.value.substring(se);

      textarea.selectionStart = ss + 1;
      textarea.selectionEnd = ss + 1;
    }

    if (activeKey && activeKey.dataset.code == "Backspace") {
      if (ss == se && ss !== 0) {
        textarea.value =
          textarea.value.substring(0, ss - 1) +
          textarea.value.substring(se, ln);
        textarea.selectionStart = ss - 1;
        textarea.selectionEnd = ss - 1;
      } else {
        textarea.value =
          textarea.value.substring(0, ss) + textarea.value.substring(se, ln);
        textarea.selectionStart = ss;
        textarea.selectionEnd = ss;
      }
    }

    if (activeKey && activeKey.dataset.code == "Space") {
      textarea.value =
        textarea.value.substring(0, ss) +
        ` ` + 
        textarea.value.substring(se);

      textarea.selectionStart = ss + 1;
      textarea.selectionEnd = ss + 1;
    }

    console.dir(`'ss='${ss},      'se='${se},      'ln='${ln}`)
  }

  document.addEventListener("keydown", clickInputBtn);
  keyboard.addEventListener("click", clickInputBtn);
}

export {
  language,
  shift,
  renderTextAreaToDom,
  renderRowsCollectionToDom,
  renderKeyToDom,
  animationKeyboardClick,
  keyboardClick,
};
