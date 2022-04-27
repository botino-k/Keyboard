const headerContainer = document.querySelector(".header__container");
const hamburgerBtn = document.querySelector(".header__hamburger-btn");
const hamburgerContainer = document.querySelector(".hamburger__container");
const navigationLink = document.querySelectorAll(".navigation__link")
const body = document.querySelector("body")
const mediaTablet = window.matchMedia('(min-width: 768px)');
const overlay = document.querySelector(".overlay");
const headerSticky =document.querySelector(".header__sticky");

function burger (){hamburgerBtn.addEventListener("click", ()=> {
  headerContainer.classList.toggle("header__container_open-hamburger");
  hamburgerBtn.classList.toggle("header__hamburger-btn_open-hamburger");
  hamburgerContainer.classList.toggle("hamburger__container_open-hamburger");
  body.classList.toggle("_overflow-hidden");
  overlay.classList.toggle("overlay_active");
  if (headerSticky) {headerSticky.classList.toggle("_overflow-opacity");
}
  navigationLink.forEach((element) => {
    element.addEventListener("click", removeBurgerClass );
  });
})
}

function screenTest(e) {
  if (e.matches) {
    removeBurgerClass()
  } 
}

function removeBurgerClass(){
  headerContainer.classList.remove("header__container_open-hamburger");
  hamburgerBtn.classList.remove("header__hamburger-btn_open-hamburger");
  hamburgerContainer.classList.remove("hamburger__container_open-hamburger");
  body.classList.remove("_overflow-hidden")
  overlay.classList.remove("overlay_active");
  if (headerSticky){headerSticky.classList.remove("_overflow-opacity")};
}

function closeBurgerByOverlay (){
 /* body.addEventListener("click", (e)=> { 
   console.dir(e.target)
    console.dir(e.currentTarget) 
    if(e.target== "div.header__container.header__container_pet-light-theme.header__container_open-hamburger" && e.currentTarget=="body._overflow-hidden"){ removeBurgerClass()}
  })*/
  overlay.addEventListener("click", removeBurgerClass)}

function mediaChangeTablet (){mediaTablet.addEventListener('change', screenTest);}
  export {burger, mediaChangeTablet, closeBurgerByOverlay };
