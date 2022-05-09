

//window.onload = function () {
//let numbersArr = controlRow 
 /* document.body.addEventListener('keydown', (event)=> {


      let obg = {
        code:event.code,

        ru:{
          keyShiftTrue: '',
          keyShiftFalse: '',
        },

        en:{
          keyShiftTrue:'',
          keyShiftFalse: event.key,
        }
      }
      numbersArr.push(obg);
      console.log (event)
      console.log (numbersArr)
    });*/


 /*document.body.addEventListener('keydown', (event)=> {
   if(event.key!='Shift'){
    for (let i=0; i<=numbersArr.length-1; i++) {
   
      if (numbersArr[i].code ===event.code  && event.shiftKey){
        numbersArr[i].en.keyShiftTrue=event.key
      }
      if (numbersArr[i].code ===event.code && event.shiftKey==false){
        numbersArr[i].en.keyShiftFalse=event.key
      }
    }
    console.log(numbersArr)  
    console.log(event)
  
  }})*/
  /*document.body.addEventListener('keydown', (event)=> {
   if(event.key!='Shift'){
    for (let i=0; i<=numbersArr.length-1; i++) {
   
      if (numbersArr[i].code ===event.code && event.shiftKey){
        numbersArr[i].ru.keyShiftTrue=event.key
      }
      if (numbersArr[i].code ===event.code && event.shiftKey==false){
        numbersArr[i].ru.keyShiftFalse=event.key
      }
    }
    console.log(numbersArr)  
    console.log(event) } })*/

  
//}


import { generateKeyBoardRow} from "./js/keys.js";

window.onload = function () {
  generateKeyBoardRow()
  
}









