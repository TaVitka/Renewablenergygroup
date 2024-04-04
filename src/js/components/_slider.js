import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

window.addEventListener('DOMContentLoaded', function() {
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
  };

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
  const swiperProducts = new Swiper('#products', options);
  const swiperPanels = new Swiper('#panels-slider', options);
  const swiperInverters = new Swiper('#inverters-slider', options);

  const filtersBtnAll = document.querySelectorAll('.swiper-filter[data-filter="all"]');
  const pannelFilters = document.querySelector('#panels-filters');
  const inverterFilters = document.querySelector('#inverters-filters');

  let filteringSlides = function(filters, slider) {
    let filterBtns = filters.querySelectorAll('.swiper-filter');

    for (let btn of filterBtns) {
      btn.addEventListener('click', function() {
        let filter = btn.getAttribute('data-filter');
        let filterBtnSiblings = btn.parentElement.querySelectorAll('.swiper-filter');
        let swiperSlides = document.querySelectorAll('.products__slider .products__item');
        let swiperSlidesFilter = document.querySelectorAll(`.products__slider .products__item.${filter}`);

        if (filter !== 'all') {
          swiperSlides.forEach(function(slide) {
            slide.style.display = 'none';
          });

          swiperSlidesFilter.forEach(function(slide) {
            slide.style.display = '';
          });
        } else {
          swiperSlides.forEach(function(slide) {
            slide.style.display = '';
          });
        }

        filterBtnSiblings.forEach(function(slide) {
          slide.classList.remove('active');
        });
        this.classList.add('active');

        slider.updateSize();
        slider.updateSlides();
        slider.updateProgress();
        slider.updateSlidesClasses();
        slider.slideTo(0);
        slider.scrollbar.updateSize();
        return false;
      });
    }
  };

  filtersBtnAll.forEach(function(btn) {
    btn.classList.add('active');
  });

  filteringSlides(pannelFilters, swiperPanels);
  filteringSlides(inverterFilters, swiperInverters);
});