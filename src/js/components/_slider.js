import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

let options = {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  autoHeight: true,
  speed: 700,
  autoplay: {
    delay: 200,
  },
  modules: [Navigation, Scrollbar, Pagination, EffectFade],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
}

const swiperProducts = new Swiper('#products', options);


const swiperServices = new Swiper('.about__slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  autoHeight: true,
  speed: 700,
  autoplay: {
    delay: 200,
  },
  modules: [Navigation, Scrollbar, Pagination, EffectFade],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
});