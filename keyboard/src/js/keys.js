import { Key } from "./Key.js";
import { KeyRow } from "./KeyRow.js";

let numbersRow = [
  {
    code: "Backquote",
    ru: {
      keyShiftTrue: "Ё",
      keyShiftFalse: "ё",
    },
    en: {
      keyShiftTrue: "~",
      keyShiftFalse: "`",
    },
  },
  {
    code: "Digit1",
    ru: {
      keyShiftTrue: "!",
      keyShiftFalse: "1",
    },
    en: {
      keyShiftTrue: "!",
      keyShiftFalse: "1",
    },
  },
  {
    code: "Digit2",
    ru: {
      keyShiftTrue: '"',
      keyShiftFalse: "2",
    },
    en: {
      keyShiftTrue: "@",
      keyShiftFalse: "2",
    },
  },
  {
    code: "Digit3",
    ru: {
      keyShiftTrue: "№",
      keyShiftFalse: "3",
    },
    en: {
      keyShiftTrue: "#",
      keyShiftFalse: "3",
    },
  },
  {
    code: "Digit4",
    ru: {
      keyShiftTrue: ";",
      keyShiftFalse: "4",
    },
    en: {
      keyShiftTrue: "$",
      keyShiftFalse: "4",
    },
  },
  {
    code: "Digit5",
    ru: {
      keyShiftTrue: "%",
      keyShiftFalse: "5",
    },
    en: {
      keyShiftTrue: "%",
      keyShiftFalse: "5",
    },
  },
  {
    code: "Digit6",
    ru: {
      keyShiftTrue: ":",
      keyShiftFalse: "6",
    },
    en: {
      keyShiftTrue: "^",
      keyShiftFalse: "6",
    },
  },
  {
    code: "Digit7",
    ru: {
      keyShiftTrue: "?",
      keyShiftFalse: "7",
    },
    en: {
      keyShiftTrue: "&",
      keyShiftFalse: "7",
    },
  },
  {
    code: "Digit8",
    ru: {
      keyShiftTrue: "*",
      keyShiftFalse: "8",
    },
    en: {
      keyShiftTrue: "*",
      keyShiftFalse: "8",
    },
  },
  {
    code: "Digit9",
    ru: {
      keyShiftTrue: "(",
      keyShiftFalse: "9",
    },
    en: {
      keyShiftTrue: "(",
      keyShiftFalse: "9",
    },
  },
  {
    code: "Digit0",
    ru: {
      keyShiftTrue: ")",
      keyShiftFalse: "0",
    },
    en: {
      keyShiftTrue: ")",
      keyShiftFalse: "0",
    },
  },
  {
    code: "Minus",
    ru: {
      keyShiftTrue: "_",
      keyShiftFalse: "-",
    },
    en: {
      keyShiftTrue: "_",
      keyShiftFalse: "-",
    },
  },
  {
    code: "Equal",
    ru: {
      keyShiftTrue: "+",
      keyShiftFalse: "=",
    },
    en: {
      keyShiftTrue: "+",
      keyShiftFalse: "=",
    },
  },
  {
    code: "Backspace",
    ru: {
      keyShiftTrue: "Backspace",
      keyShiftFalse: "Backspace",
    },
    en: {
      keyShiftTrue: "Backspace",
      keyShiftFalse: "Backspace",
    },
  },
];
let letterRow1 = [
  {
    code: "Tab",
    ru: {
      keyShiftTrue: "Tab",
      keyShiftFalse: "Tab",
    },
    en: {
      keyShiftTrue: "Tab",
      keyShiftFalse: "Tab",
    },
  },
  {
    code: "KeyQ",
    ru: {
      keyShiftTrue: "Й",
      keyShiftFalse: "й",
    },
    en: {
      keyShiftTrue: "Q",
      keyShiftFalse: "q",
    },
  },
  {
    code: "KeyW",
    ru: {
      keyShiftTrue: "Ц",
      keyShiftFalse: "ц",
    },
    en: {
      keyShiftTrue: "W",
      keyShiftFalse: "w",
    },
  },
  {
    code: "KeyE",
    ru: {
      keyShiftTrue: "У",
      keyShiftFalse: "у",
    },
    en: {
      keyShiftTrue: "E",
      keyShiftFalse: "e",
    },
  },
  {
    code: "KeyR",
    ru: {
      keyShiftTrue: "К",
      keyShiftFalse: "к",
    },
    en: {
      keyShiftTrue: "R",
      keyShiftFalse: "r",
    },
  },
  {
    code: "KeyT",
    ru: {
      keyShiftTrue: "Е",
      keyShiftFalse: "е",
    },
    en: {
      keyShiftTrue: "T",
      keyShiftFalse: "t",
    },
  },
  {
    code: "KeyY",
    ru: {
      keyShiftTrue: "Н",
      keyShiftFalse: "н",
    },
    en: {
      keyShiftTrue: "Y",
      keyShiftFalse: "y",
    },
  },
  {
    code: "KeyU",
    ru: {
      keyShiftTrue: "Г",
      keyShiftFalse: "г",
    },
    en: {
      keyShiftTrue: "U",
      keyShiftFalse: "u",
    },
  },
  {
    code: "KeyI",
    ru: {
      keyShiftTrue: "Ш",
      keyShiftFalse: "ш",
    },
    en: {
      keyShiftTrue: "I",
      keyShiftFalse: "i",
    },
  },
  {
    code: "KeyO",
    ru: {
      keyShiftTrue: "Щ",
      keyShiftFalse: "щ",
    },
    en: {
      keyShiftTrue: "O",
      keyShiftFalse: "o",
    },
  },
  {
    code: "KeyP",
    ru: {
      keyShiftTrue: "З",
      keyShiftFalse: "з",
    },
    en: {
      keyShiftTrue: "P",
      keyShiftFalse: "p",
    },
  },
  {
    code: "BracketLeft",
    ru: {
      keyShiftTrue: "Х",
      keyShiftFalse: "х",
    },
    en: {
      keyShiftTrue: "{",
      keyShiftFalse: "[",
    },
  },
  {
    code: "BracketRight",
    ru: {
      keyShiftTrue: "Ъ",
      keyShiftFalse: "ъ",
    },
    en: {
      keyShiftTrue: "}",
      keyShiftFalse: "]",
    },
  },
  {
    code: "Backslash",
    ru: {
      keyShiftTrue: "/",
      keyShiftFalse: "\\",
    },
    en: {
      keyShiftTrue: "|",
      keyShiftFalse: "\\",
    },
  },
];
let letterRow2 = [
  {
    code: "CapsLock",
    ru: {
      keyShiftTrue: "CapsLock",
      keyShiftFalse: "CapsLock",
    },
    en: {
      keyShiftTrue: "CapsLock",
      keyShiftFalse: "CapsLock",
    },
  },
  {
    code: "KeyA",
    ru: {
      keyShiftTrue: "Ф",
      keyShiftFalse: "ф",
    },
    en: {
      keyShiftTrue: "A",
      keyShiftFalse: "a",
    },
  },
  {
    code: "KeyS",
    ru: {
      keyShiftTrue: "Ы",
      keyShiftFalse: "ы",
    },
    en: {
      keyShiftTrue: "S",
      keyShiftFalse: "s",
    },
  },
  {
    code: "KeyD",
    ru: {
      keyShiftTrue: "В",
      keyShiftFalse: "в",
    },
    en: {
      keyShiftTrue: "D",
      keyShiftFalse: "d",
    },
  },
  {
    code: "KeyF",
    ru: {
      keyShiftTrue: "А",
      keyShiftFalse: "а",
    },
    en: {
      keyShiftTrue: "F",
      keyShiftFalse: "f",
    },
  },
  {
    code: "KeyG",
    ru: {
      keyShiftTrue: "П",
      keyShiftFalse: "п",
    },
    en: {
      keyShiftTrue: "G",
      keyShiftFalse: "g",
    },
  },
  {
    code: "KeyH",
    ru: {
      keyShiftTrue: "Р",
      keyShiftFalse: "р",
    },
    en: {
      keyShiftTrue: "H",
      keyShiftFalse: "h",
    },
  },
  {
    code: "KeyJ",
    ru: {
      keyShiftTrue: "О",
      keyShiftFalse: "о",
    },
    en: {
      keyShiftTrue: "J",
      keyShiftFalse: "j",
    },
  },
  {
    code: "KeyK",
    ru: {
      keyShiftTrue: "Л",
      keyShiftFalse: "л",
    },
    en: {
      keyShiftTrue: "K",
      keyShiftFalse: "k",
    },
  },
  {
    code: "KeyL",
    ru: {
      keyShiftTrue: "Д",
      keyShiftFalse: "д",
    },
    en: {
      keyShiftTrue: "L",
      keyShiftFalse: "l",
    },
  },
  {
    code: "Semicolon",
    ru: {
      keyShiftTrue: "Ж",
      keyShiftFalse: "ж",
    },
    en: {
      keyShiftTrue: ":",
      keyShiftFalse: ";",
    },
  },
  {
    code: "Quote",
    ru: {
      keyShiftTrue: "Э",
      keyShiftFalse: "э",
    },
    en: {
      keyShiftTrue: '"',
      keyShiftFalse: "'",
    },
  },
  {
    code: "Enter",
    ru: {
      keyShiftTrue: "Enter",
      keyShiftFalse: "Enter",
    },
    en: {
      keyShiftTrue: "Enter",
      keyShiftFalse: "Enter",
    },
  },
];
let letterRow3 = [
  {
    code: "ShiftLeft",
    ru: {
      keyShiftTrue: "",
      keyShiftFalse: "Shift",
    },
    en: {
      keyShiftTrue: "",
      keyShiftFalse: "Shift",
    },
  },
  {
    code: "KeyZ",
    ru: {
      keyShiftTrue: "Я",
      keyShiftFalse: "я",
    },
    en: {
      keyShiftTrue: "Z",
      keyShiftFalse: "z",
    },
  },
  {
    code: "KeyX",
    ru: {
      keyShiftTrue: "Ч",
      keyShiftFalse: "ч",
    },
    en: {
      keyShiftTrue: "X",
      keyShiftFalse: "x",
    },
  },
  {
    code: "KeyC",
    ru: {
      keyShiftTrue: "С",
      keyShiftFalse: "с",
    },
    en: {
      keyShiftTrue: "C",
      keyShiftFalse: "c",
    },
  },
  {
    code: "KeyV",
    ru: {
      keyShiftTrue: "М",
      keyShiftFalse: "м",
    },
    en: {
      keyShiftTrue: "V",
      keyShiftFalse: "v",
    },
  },
  {
    code: "KeyB",
    ru: {
      keyShiftTrue: "И",
      keyShiftFalse: "и",
    },
    en: {
      keyShiftTrue: "B",
      keyShiftFalse: "b",
    },
  },
  {
    code: "KeyN",
    ru: {
      keyShiftTrue: "Т",
      keyShiftFalse: "т",
    },
    en: {
      keyShiftTrue: "N",
      keyShiftFalse: "n",
    },
  },
  {
    code: "KeyM",
    ru: {
      keyShiftTrue: "Ь",
      keyShiftFalse: "ь",
    },
    en: {
      keyShiftTrue: "M",
      keyShiftFalse: "m",
    },
  },
  {
    code: "Comma",
    ru: {
      keyShiftTrue: "Б",
      keyShiftFalse: "б",
    },
    en: {
      keyShiftTrue: "<",
      keyShiftFalse: ",",
    },
  },
  {
    code: "Period",
    ru: {
      keyShiftTrue: "Ю",
      keyShiftFalse: "ю",
    },
    en: {
      keyShiftTrue: ">",
      keyShiftFalse: ".",
    },
  },
  {
    code: "Slash",
    ru: {
      keyShiftTrue: ",",
      keyShiftFalse: ".",
    },
    en: {
      keyShiftTrue: "?",
      keyShiftFalse: "/",
    },
  },
  {
    code: "ShiftRight",
    ru: {
      keyShiftTrue: "",
      keyShiftFalse: "Shift",
    },
    en: {
      keyShiftTrue: "",
      keyShiftFalse: "Shift",
    },
  },
];
let controlRow = [
  {
    code: "ControlLeft",
    ru: {
      keyShiftTrue: "Ctrl",
      keyShiftFalse: "Ctrl",
    },
    en: {
      keyShiftTrue: "Ctrl",
      keyShiftFalse: "Ctrl",
    },
  },
  {
    code: "MetaLeft",
    ru: {
      keyShiftTrue: "Meta",
      keyShiftFalse: "Meta",
    },
    en: {
      keyShiftTrue: "Meta",
      keyShiftFalse: "Meta",
    },
  },
  {
    code: "AltLeft",
    ru: {
      keyShiftTrue: "Alt",
      keyShiftFalse: "Alt",
    },
    en: {
      keyShiftTrue: "Alt",
      keyShiftFalse: "Alt",
    },
  },
  {
    code: "Space",
    ru: {
      keyShiftTrue: " ",
      keyShiftFalse: " ",
    },
    en: {
      keyShiftTrue: " ",
      keyShiftFalse: " ",
    },
  },
  {
    code: "AltRight",
    ru: {
      keyShiftTrue: "Alt",
      keyShiftFalse: "Alt",
    },
    en: {
      keyShiftTrue: "Alt",
      keyShiftFalse: "Alt",
    },
  },
  {
    code: "ControlRight",
    ru: {
      keyShiftTrue: "Ctrl",
      keyShiftFalse: "Ctrl",
    },
    en: {
      keyShiftTrue: "Ctrl",
      keyShiftFalse: "Ctrl",
    },
  },
  {
    code: "ArrowLeft",
    ru: {
      keyShiftTrue: "←",
      keyShiftFalse: "←",
    },
    en: {
      keyShiftTrue: "←",
      keyShiftFalse: "←",
    },
  },
  {
    code: "ArrowUp",
    ru: {
      keyShiftTrue: "↑",
      keyShiftFalse: "↑",
    },
    en: {
      keyShiftTrue: "↑",
      keyShiftFalse: "↑",
    },
  },
  {
    code: "ArrowDown",
    ru: {
      keyShiftTrue: "↓",
      keyShiftFalse: "↓",
    },
    en: {
      keyShiftTrue: "↓",
      keyShiftFalse: "↓",
    },
  },
  {
    code: "ArrowRight",
    ru: {
      keyShiftTrue: "→",
      keyShiftFalse: "→",
    },
    en: {
      keyShiftTrue: "→",
      keyShiftFalse: "→",
    },
  },
];

function generateKeyBoardRow() {
    const body=document.querySelector('body')
    body.innerHTML=`<div class="information-block">en</div>
    <div class="textarea-block">
      <textarea class="textarea" placeholder="Click to start writing..." name="textarea" rows="5" cols="33" ></textarea>
    </div>`


  const generateKeyCollection = (data) => {
    const keyBoardRow = [];
    data.forEach((e) => {
      keyBoardRow.push(new Key(e));
    });
    return keyBoardRow;
  };

  let rowNum = generateKeyCollection(numbersRow);
  let row1 = generateKeyCollection(letterRow1);
  let row2 = generateKeyCollection(letterRow2);
  let row3 = generateKeyCollection(letterRow3);
  let rowControl = generateKeyCollection(controlRow);

  const generateRowCollection = (data) => {
    const rows = [];
    data.forEach((e) => {
      rows.push(new KeyRow(e));
    });
    console.dir(rows);
    return rows;
  };

  let rows = generateRowCollection([
    "keyboard__numbers-row",
    "keyboard__tab-row",
    "keyboard__caps-row",
    "keyboard__shift-row",
    "keyboard__control-row"
 ]);

  const renderRowsToDom = (collection) => {
    const rowsWrapper=document.createElement('div');
    rowsWrapper.className="keyboard";
    document.body.append(rowsWrapper);
    collection.forEach((e) => {
        rowsWrapper.append(e.generateKeyRow());
    });
  };
  renderRowsToDom(rows);


  const keyboardRowNum = document.querySelector(".keyboard__numbers-row");
  const keyboardRow1 = document.querySelector(".keyboard__tab-row");
  const keyboardRow2 = document.querySelector(".keyboard__caps-row");
  const keyboardRow3 = document.querySelector(".keyboard__shift-row");
  const keyboardRowControl = document.querySelector(".keyboard__control-row");

  const renderKeyRowsToDom = (collection, rowDOM) => {
    collection.forEach((e) => {
      rowDOM.append(e.generateKey());
    });
  };

  renderKeyRowsToDom(rowNum, keyboardRowNum);
  renderKeyRowsToDom(row1, keyboardRow1);
  renderKeyRowsToDom(row2, keyboardRow2);
  renderKeyRowsToDom(row3, keyboardRow3);
  renderKeyRowsToDom(rowControl, keyboardRowControl);


}

/*function writeKeyInTextarea(e){

}

function highlightOfPhysicalKeyboard() {
  const allKeyBtn = document.querySelectorAll('.key')
  allKeyBtn.forEach((e)=> { e.addEventListener("click", writeKeyInTextarea)})
}*/

export { generateKeyBoardRow };
