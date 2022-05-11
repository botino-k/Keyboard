import { Key } from "./Key.js";
import { KeyRow } from "./KeyRow.js";

const numbersRow = [
    {
        "code": "Backquote",
        "ru": {
            "keyShiftTrue": "Ё",
            "keyShiftFalse": "ё"
        },
        "en": {
            "keyShiftTrue": "~",
            "keyShiftFalse": "`"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Digit1",
        "ru": {
            "keyShiftTrue": "!",
            "keyShiftFalse": "1"
        },
        "en": {
            "keyShiftTrue": "!",
            "keyShiftFalse": "1"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Digit2",
        "ru": {
            "keyShiftTrue": "\"",
            "keyShiftFalse": "2"
        },
        "en": {
            "keyShiftTrue": "@",
            "keyShiftFalse": "2"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Digit3",
        "ru": {
            "keyShiftTrue": "№",
            "keyShiftFalse": "3"
        },
        "en": {
            "keyShiftTrue": "#",
            "keyShiftFalse": "3"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Digit4",
        "ru": {
            "keyShiftTrue": ";",
            "keyShiftFalse": "4"
        },
        "en": {
            "keyShiftTrue": "$",
            "keyShiftFalse": "4"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Digit5",
        "ru": {
            "keyShiftTrue": "%",
            "keyShiftFalse": "5"
        },
        "en": {
            "keyShiftTrue": "%",
            "keyShiftFalse": "5"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Digit6",
        "ru": {
            "keyShiftTrue": ":",
            "keyShiftFalse": "6"
        },
        "en": {
            "keyShiftTrue": "^",
            "keyShiftFalse": "6"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Digit7",
        "ru": {
            "keyShiftTrue": "?",
            "keyShiftFalse": "7"
        },
        "en": {
            "keyShiftTrue": "&",
            "keyShiftFalse": "7"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Digit8",
        "ru": {
            "keyShiftTrue": "*",
            "keyShiftFalse": "8"
        },
        "en": {
            "keyShiftTrue": "*",
            "keyShiftFalse": "8"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Digit9",
        "ru": {
            "keyShiftTrue": "(",
            "keyShiftFalse": "9"
        },
        "en": {
            "keyShiftTrue": "(",
            "keyShiftFalse": "9"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Digit0",
        "ru": {
            "keyShiftTrue": ")",
            "keyShiftFalse": "0"
        },
        "en": {
            "keyShiftTrue": ")",
            "keyShiftFalse": "0"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Minus",
        "ru": {
            "keyShiftTrue": "_",
            "keyShiftFalse": "-"
        },
        "en": {
            "keyShiftTrue": "_",
            "keyShiftFalse": "-"
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Equal",
        "ru": {
            "keyShiftTrue": "+",
            "keyShiftFalse": "="
        },
        "en": {
            "keyShiftTrue": "+",
            "keyShiftFalse": "="
        },
        "typeBtn": "inputBtn"
    },
    {
        "code": "Backspace",
        "ru": {
            "keyShiftTrue": "Backspace",
            "keyShiftFalse": "Backspace"
        },
        "en": {
            "keyShiftTrue": "Backspace",
            "keyShiftFalse": "Backspace"
        },
        "typeBtn": "controlBtn"
    }
];
const letterRow1 = [
  {
      "code": "Tab",
      "ru": {
          "keyShiftTrue": "Tab",
          "keyShiftFalse": "Tab"
      },
      "en": {
          "keyShiftTrue": "Tab",
          "keyShiftFalse": "Tab"
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "KeyQ",
      "ru": {
          "keyShiftTrue": "Й",
          "keyShiftFalse": "й"
      },
      "en": {
          "keyShiftTrue": "Q",
          "keyShiftFalse": "q"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyW",
      "ru": {
          "keyShiftTrue": "Ц",
          "keyShiftFalse": "ц"
      },
      "en": {
          "keyShiftTrue": "W",
          "keyShiftFalse": "w"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyE",
      "ru": {
          "keyShiftTrue": "У",
          "keyShiftFalse": "у"
      },
      "en": {
          "keyShiftTrue": "E",
          "keyShiftFalse": "e"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyR",
      "ru": {
          "keyShiftTrue": "К",
          "keyShiftFalse": "к"
      },
      "en": {
          "keyShiftTrue": "R",
          "keyShiftFalse": "r"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyT",
      "ru": {
          "keyShiftTrue": "Е",
          "keyShiftFalse": "е"
      },
      "en": {
          "keyShiftTrue": "T",
          "keyShiftFalse": "t"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyY",
      "ru": {
          "keyShiftTrue": "Н",
          "keyShiftFalse": "н"
      },
      "en": {
          "keyShiftTrue": "Y",
          "keyShiftFalse": "y"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyU",
      "ru": {
          "keyShiftTrue": "Г",
          "keyShiftFalse": "г"
      },
      "en": {
          "keyShiftTrue": "U",
          "keyShiftFalse": "u"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyI",
      "ru": {
          "keyShiftTrue": "Ш",
          "keyShiftFalse": "ш"
      },
      "en": {
          "keyShiftTrue": "I",
          "keyShiftFalse": "i"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyO",
      "ru": {
          "keyShiftTrue": "Щ",
          "keyShiftFalse": "щ"
      },
      "en": {
          "keyShiftTrue": "O",
          "keyShiftFalse": "o"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyP",
      "ru": {
          "keyShiftTrue": "З",
          "keyShiftFalse": "з"
      },
      "en": {
          "keyShiftTrue": "P",
          "keyShiftFalse": "p"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "BracketLeft",
      "ru": {
          "keyShiftTrue": "Х",
          "keyShiftFalse": "х"
      },
      "en": {
          "keyShiftTrue": "{",
          "keyShiftFalse": "["
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "BracketRight",
      "ru": {
          "keyShiftTrue": "Ъ",
          "keyShiftFalse": "ъ"
      },
      "en": {
          "keyShiftTrue": "}",
          "keyShiftFalse": "]"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "Backslash",
      "ru": {
          "keyShiftTrue": "/",
          "keyShiftFalse": "\\"
      },
      "en": {
          "keyShiftTrue": "|",
          "keyShiftFalse": "\\"
      },
      "typeBtn": "inputBtn"
  }
];
const letterRow2 = [
  {
      "code": "CapsLock",
      "ru": {
          "keyShiftTrue": "CapsLock",
          "keyShiftFalse": "CapsLock"
      },
      "en": {
          "keyShiftTrue": "CapsLock",
          "keyShiftFalse": "CapsLock"
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "KeyA",
      "ru": {
          "keyShiftTrue": "Ф",
          "keyShiftFalse": "ф"
      },
      "en": {
          "keyShiftTrue": "A",
          "keyShiftFalse": "a"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyS",
      "ru": {
          "keyShiftTrue": "Ы",
          "keyShiftFalse": "ы"
      },
      "en": {
          "keyShiftTrue": "S",
          "keyShiftFalse": "s"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyD",
      "ru": {
          "keyShiftTrue": "В",
          "keyShiftFalse": "в"
      },
      "en": {
          "keyShiftTrue": "D",
          "keyShiftFalse": "d"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyF",
      "ru": {
          "keyShiftTrue": "А",
          "keyShiftFalse": "а"
      },
      "en": {
          "keyShiftTrue": "F",
          "keyShiftFalse": "f"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyG",
      "ru": {
          "keyShiftTrue": "П",
          "keyShiftFalse": "п"
      },
      "en": {
          "keyShiftTrue": "G",
          "keyShiftFalse": "g"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyH",
      "ru": {
          "keyShiftTrue": "Р",
          "keyShiftFalse": "р"
      },
      "en": {
          "keyShiftTrue": "H",
          "keyShiftFalse": "h"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyJ",
      "ru": {
          "keyShiftTrue": "О",
          "keyShiftFalse": "о"
      },
      "en": {
          "keyShiftTrue": "J",
          "keyShiftFalse": "j"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyK",
      "ru": {
          "keyShiftTrue": "Л",
          "keyShiftFalse": "л"
      },
      "en": {
          "keyShiftTrue": "K",
          "keyShiftFalse": "k"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyL",
      "ru": {
          "keyShiftTrue": "Д",
          "keyShiftFalse": "д"
      },
      "en": {
          "keyShiftTrue": "L",
          "keyShiftFalse": "l"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "Semicolon",
      "ru": {
          "keyShiftTrue": "Ж",
          "keyShiftFalse": "ж"
      },
      "en": {
          "keyShiftTrue": ":",
          "keyShiftFalse": ";"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "Quote",
      "ru": {
          "keyShiftTrue": "Э",
          "keyShiftFalse": "э"
      },
      "en": {
          "keyShiftTrue": "\"",
          "keyShiftFalse": "'"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "Enter",
      "ru": {
          "keyShiftTrue": "Enter",
          "keyShiftFalse": "Enter"
      },
      "en": {
          "keyShiftTrue": "Enter",
          "keyShiftFalse": "Enter"
      },
      "typeBtn": "controlBtn"
  }
];
const letterRow3 = [
  {
      "code": "ShiftLeft",
      "ru": {
          "keyShiftTrue": "",
          "keyShiftFalse": "Shift"
      },
      "en": {
          "keyShiftTrue": "",
          "keyShiftFalse": "Shift"
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "KeyZ",
      "ru": {
          "keyShiftTrue": "Я",
          "keyShiftFalse": "я"
      },
      "en": {
          "keyShiftTrue": "Z",
          "keyShiftFalse": "z"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyX",
      "ru": {
          "keyShiftTrue": "Ч",
          "keyShiftFalse": "ч"
      },
      "en": {
          "keyShiftTrue": "X",
          "keyShiftFalse": "x"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyC",
      "ru": {
          "keyShiftTrue": "С",
          "keyShiftFalse": "с"
      },
      "en": {
          "keyShiftTrue": "C",
          "keyShiftFalse": "c"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyV",
      "ru": {
          "keyShiftTrue": "М",
          "keyShiftFalse": "м"
      },
      "en": {
          "keyShiftTrue": "V",
          "keyShiftFalse": "v"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyB",
      "ru": {
          "keyShiftTrue": "И",
          "keyShiftFalse": "и"
      },
      "en": {
          "keyShiftTrue": "B",
          "keyShiftFalse": "b"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyN",
      "ru": {
          "keyShiftTrue": "Т",
          "keyShiftFalse": "т"
      },
      "en": {
          "keyShiftTrue": "N",
          "keyShiftFalse": "n"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "KeyM",
      "ru": {
          "keyShiftTrue": "Ь",
          "keyShiftFalse": "ь"
      },
      "en": {
          "keyShiftTrue": "M",
          "keyShiftFalse": "m"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "Comma",
      "ru": {
          "keyShiftTrue": "Б",
          "keyShiftFalse": "б"
      },
      "en": {
          "keyShiftTrue": "<",
          "keyShiftFalse": ","
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "Period",
      "ru": {
          "keyShiftTrue": "Ю",
          "keyShiftFalse": "ю"
      },
      "en": {
          "keyShiftTrue": ">",
          "keyShiftFalse": "."
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "Slash",
      "ru": {
          "keyShiftTrue": ",",
          "keyShiftFalse": "."
      },
      "en": {
          "keyShiftTrue": "?",
          "keyShiftFalse": "/"
      },
      "typeBtn": "inputBtn"
  },
  {
      "code": "ShiftRight",
      "ru": {
          "keyShiftTrue": "",
          "keyShiftFalse": "Shift"
      },
      "en": {
          "keyShiftTrue": "",
          "keyShiftFalse": "Shift"
      },
      "typeBtn": "controlBtn"
  }
];
const controlRow = [
  {
      "code": "ControlLeft",
      "ru": {
          "keyShiftTrue": "Ctrl",
          "keyShiftFalse": "Ctrl"
      },
      "en": {
          "keyShiftTrue": "Ctrl",
          "keyShiftFalse": "Ctrl"
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "MetaLeft",
      "ru": {
          "keyShiftTrue": "Meta",
          "keyShiftFalse": "Meta"
      },
      "en": {
          "keyShiftTrue": "Meta",
          "keyShiftFalse": "Meta"
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "AltLeft",
      "ru": {
          "keyShiftTrue": "Alt",
          "keyShiftFalse": "Alt"
      },
      "en": {
          "keyShiftTrue": "Alt",
          "keyShiftFalse": "Alt"
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "Space",
      "ru": {
          "keyShiftTrue": " ",
          "keyShiftFalse": " "
      },
      "en": {
          "keyShiftTrue": " ",
          "keyShiftFalse": " "
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "AltRight",
      "ru": {
          "keyShiftTrue": "Alt",
          "keyShiftFalse": "Alt"
      },
      "en": {
          "keyShiftTrue": "Alt",
          "keyShiftFalse": "Alt"
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "ControlRight",
      "ru": {
          "keyShiftTrue": "Ctrl",
          "keyShiftFalse": "Ctrl"
      },
      "en": {
          "keyShiftTrue": "Ctrl",
          "keyShiftFalse": "Ctrl"
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "ArrowLeft",
      "ru": {
          "keyShiftTrue": "←",
          "keyShiftFalse": "←"
      },
      "en": {
          "keyShiftTrue": "←",
          "keyShiftFalse": "←"
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "ArrowUp",
      "ru": {
          "keyShiftTrue": "↑",
          "keyShiftFalse": "↑"
      },
      "en": {
          "keyShiftTrue": "↑",
          "keyShiftFalse": "↑"
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "ArrowDown",
      "ru": {
          "keyShiftTrue": "↓",
          "keyShiftFalse": "↓"
      },
      "en": {
          "keyShiftTrue": "↓",
          "keyShiftFalse": "↓"
      },
      "typeBtn": "controlBtn"
  },
  {
      "code": "ArrowRight",
      "ru": {
          "keyShiftTrue": "→",
          "keyShiftFalse": "→"
      },
      "en": {
          "keyShiftTrue": "→",
          "keyShiftFalse": "→"
      },
      "typeBtn": "controlBtn"
  }
];



function renderTextAreaToDom() {
  const body = document.querySelector("body");
  body.innerHTML = `<div class="information-block">en</div>
<div class="textarea-block">
  <textarea class="textarea" placeholder="Click to start writing..." name="textarea" rows="5" cols="33" ></textarea>
</div>`;

}

function renderKeyBoardToDom() {

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
    const rowsWrapper = document.createElement("div");
    rowsWrapper.className = "keyboard";
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

function handleClick() {
  const textarea = document.querySelector("textarea");
  const allKey = document.querySelectorAll(".key");

  textarea.addEventListener("focus", (e) => {
    console.dir(e);
    console.dir(textarea);
  });

  allKey.forEach((e) => {
    e.addEventListener("click", (key) => {
      const actualKey = e.dataset.code;
      console.dir(e);
    });
  });

  document.addEventListener("keydown", (e) => {
    console.dir(e);
  });
}

function keyboardClick() {
  const allKeys = document.querySelectorAll(".key");
  const textarea = document.querySelector(".textarea");
 

  textarea.addEventListener("keydown", (event) => {
    allKeys.forEach((key) => {
      if (event.code == key.dataset.code && key.dataset.type == "inputBtn") {
        event.preventDefault();
        textarea.focus();
        let ss = textarea.selectionStart;
        let se = textarea.selectionEnd;
        let ln = textarea.value.length;
        let textBefore = textarea.value.substring(0, ss);
        let textAfter = textarea.value.substring(se, ln);
          if (ss == se  ) {
            textarea.value =
              textarea.value.substring(0, ss) + key.innerText + textarea.value.substring(se);
              textarea.selectionStart = ss+1;
              textarea.selectionEnd = se+1;
          } 
          else {
            textarea.value = textBefore + key.innerText+ textAfter;
            textarea.selectionStart = ss+2;
            textarea.selectionEnd = ss+1;
          }
      }
     
    });
    console.dir(textarea)
  });


  document.addEventListener("keydown", (e) => {
    allKeys.forEach((key) => {
      if (e.code == key.dataset.code) {
        key.classList.add("_active");
        console.dir(key)
       /* if(key.dataset.type=='inputBtn')
        {textarea.value+=key.innerText}*/
      }
    });
  });

  document.addEventListener("keyup", (e) => {
    allKeys.forEach((key) => {
      if (e.code == key.dataset.code) {
        key.classList.remove("_active");
      }
    });
  });
}

function activeBackspace() {
  const backspaceKey = document.querySelector(`[data-code="Backspace"]`);
  const textarea = document.querySelector("textarea");

  const clickOnBackspace=() => {
    let ss = textarea.selectionStart;
    let se = textarea.selectionEnd;
    let ln = textarea.value.length;

    let textBefore = textarea.value.substring(0, ss);
    let textAfter = textarea.value.substring(se, ln);

    if (ss == se && ss !== 0) {
      textarea.value =
        textarea.value.substring(0, ss - 1) + textarea.value.substring(se, ln);
      textarea.focus();
      textarea.selectionStart = ss - 1;
      textarea.selectionEnd = ss - 1;
    } else {
      textarea.value = textBefore + textAfter;
      textarea.focus();
      textarea.selectionStart = ss;
      textarea.selectionEnd = ss;
    }
  }
  backspaceKey.addEventListener("click", clickOnBackspace );
}
 



export { renderTextAreaToDom, renderKeyBoardToDom, handleClick, activeBackspace, keyboardClick };
