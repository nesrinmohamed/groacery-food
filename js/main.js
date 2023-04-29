
let searchForm = document.querySelector('.search-form')
let searchBtn = document.querySelector('#search-btn')
searchBtn.onclick=()=>{
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    menuItems.classList.remove('active')
}

// ===========cart===========
let shoppingCart = document.querySelector('.shopping-cart');
let cartBtn = document.querySelector('#cart-btn')
cartBtn.onclick=()=>{
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    loginForm.classList.remove('active')
    menuItems.classList.remove('active')
}
// ===========login form======== 

let loginForm = document.querySelector('.login-form');
let loginBtn = document.querySelector('#login-btn')
loginBtn.onclick=()=>{
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    menuItems.classList.remove('active')
}
// ===========icons menu bar =========
let menuItems = document.querySelector('.nav');
let menuBtn = document.querySelector('#menu-btn')
menuBtn.onclick=()=>{
    menuItems.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
}


window.onscroll = () =>{
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    menuItems.classList.remove('active')
}

// swiper 
const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
loop:true,
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      1020: {
        slidesPerView: 3,
      }
    }
  })
  