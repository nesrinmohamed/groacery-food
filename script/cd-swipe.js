import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
const swiper_item = new Swiper('.swiper_item', {
 // Optional parameters

 direction: 'horizontal',
 loop: false,

 //allowTouchMove: true,
 //nested: true,
 //simulateTouch: true,
 //touchReleaseOnEdges:true,
 // If we need pagination
 pagination: {
  el: ".swiper-pagination-nav",
 },

 // Navigation arrows
 navigation: {
  nextEl: '.swiper-item-button-next',
  prevEl: '.swiper-item-button-prev',
 },

 // And if we need scrollbar
 scrollbar: {
  el: '.swiper-scrollbar',
 },
});

const swiper_item_vertical = new Swiper('.swiper_item_vertical', {
 // Optional parameters
 direction: 'vertical',
 loop: false,

 //allowTouchMove: true,
 //nested: true,
 //simulateTouch: true,
 //touchReleaseOnEdges:true,
 // If we need pagination
 pagination: {
  el: '.swiper-pagination',
 },

 // Navigation arrows
 navigation: {
  nextEl: '.swiper-item-button-next',
  prevEl: '.swiper-item-button-prev',
 },

 // And if we need scrollbar
 scrollbar: {
  el: '.swiper-scrollbar',
 },
});

const swiper_nav = new Swiper('.swiper_nav666', {
 // Optional parameters
 direction: 'horizontal',
 loop: false,
 slidesPerView: 3,
 slidesPerColumn: 2,
 spaceBetween: 0,
 //initialSlide: 1,
 //centeredSlides: true,

 // If we need pagination
 pagination: {
  el: '.swiper-pagination',
 },

 // Navigation arrows
 navigation: {
  nextEl: '.swiper-nav-button-next',
  prevEl: '.swiper-nav-button-prev',
 },

 // And if we need scrollbar
 scrollbar: {
  el: '.swiper-scrollbar',
 },
});
swiper_nav.on('click', function () {
 //alert(swiper_nav.clickedIndex);
 swiper_item.slideTo(swiper_nav.clickedIndex, 300, true);
 swiper_nav.slideToClosest(300, true);
 //swiper_item.slideChange(swiper_nav.clickedIndex);
});
swiper_item.on('slideChange', function () {
 //alert(swiper_nav.clickedIndex);
 swiper_nav.slideTo(swiper_item.activeIndex, 300, true);
 //swiper_item.slideChange(swiper_nav.clickedIndex);
});
