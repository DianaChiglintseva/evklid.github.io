const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    a11y: {
      paginationBulletMessage: 'Слайд номер {{index}}'
    }
  });

let tabsBtn = document.querySelectorAll('.work__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('work__btn--active')});
    e.currentTarget.classList.add('work__btn--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',

function() {
  burger.classList.toggle('burger--active');
  // menu.classList.toggle('header__nav--active');
  document.querySelector("header").classList.toggle("open");
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    // menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

let search = document.querySelector('.header__serch-panel');
let searchBtn = document.querySelector('.header__serch');
let crossBtn = document.querySelector('.serch-panel__btn');

searchBtn.addEventListener('click', function() {
  search.classList.add('opacity');
});

crossBtn.addEventListener('click', function() {
  search.classList.remove('opacity');
});