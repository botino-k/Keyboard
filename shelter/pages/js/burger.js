const headerContainer = document.querySelector(".header__container");
const hamburgerBtn = document.querySelector(".header__hamburger-btn");
const hamburgerContainer = document.querySelector(".hamburger__container");
const navigationLink = document.querySelectorAll(".navigation__link")
const body = document.querySelector("body")
const mediaTablet = window.matchMedia('(min-width: 768px)');
const overlay = document.querySelector(".overlay");


function burger (){hamburgerBtn.addEventListener("click", ()=> {
  headerContainer.classList.toggle("header__container_open-hamburger");
  hamburgerBtn.classList.toggle("header__hamburger-btn_open-hamburger");
  hamburgerContainer.classList.toggle("hamburger__container_open-hamburger");
  body.classList.toggle("_open-hamburger");
  overlay.classList.toggle("overlay_active");

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
  body.classList.remove("_open-hamburger")
  overlay.classList.remove("overlay_active");
}



function closeBurgerByOverlay (){overlay.addEventListener("click", removeBurgerClass)}
function mediaChangeTablet (){mediaTablet.addEventListener('change', screenTest);}
  export {burger, mediaChangeTablet, closeBurgerByOverlay };
