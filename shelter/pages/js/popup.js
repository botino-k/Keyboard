import { pets } from "./pet-card.js"; // 8
import { Article } from "./Article.js";


function generatePopup(){
  
  const petsArr = [];
  
  const generateArticles = (data) => {
    data.forEach((e) => {
      petsArr.push(new Article(e));
    });
    return petsArr;
  };
  generateArticles(pets )
  
  const paintButtonPopup = () => {
   const modalContainer =document.querySelector(".modal__container")
   const buttonPopup =document.querySelector(".button_popup")

   modalContainer.addEventListener('mouseleave', (event) => {
    buttonPopup.classList.add("button_popup_colored")   })
   modalContainer.addEventListener('mouseenter', (event) => {
    buttonPopup.classList.remove("button_popup_colored")   })
  }

  const removeModalNode = () => {
    const modalContainer =document.querySelector(".modal__container")
    const buttonPopup =document.querySelector(".button_popup")
    const modal =document.querySelector(".modal")

    /*[modal, buttonPopup].forEach((e) => {
      e.addEventListener("click", () => modal.remove() )})*/
     
      modal.addEventListener("click", (e) => {
        if(e.currentTarget==e.target){ modal.remove()
          document.querySelector("body").classList.remove("_overflow-hidden")}
        
       } 
        
       )
       buttonPopup.addEventListener("click", (e) => {
        modal.remove()
        document.querySelector("body").classList.remove("_overflow-hidden") } )
        
}


   document.querySelectorAll(".slider__element").forEach((card) =>
   card.addEventListener("click", () => {
       let petId = card.dataset.id;
       petsArr.forEach((e)=> {
        if (petId == e.id){ document.querySelector("body").append(e.generatePopupArticle());
        paintButtonPopup()
        removeModalNode()
        document.querySelector("body").classList.add("_overflow-hidden");
      };
        
      })
     })
   );





}

export { generatePopup};
