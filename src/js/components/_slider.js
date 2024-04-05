import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

window.addEventListener('DOMContentLoaded', function() {

  let options = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 24,
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
    breakpoints: {
      993: {
        autoHeight: true,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
    },
  };

  const swiperServices = new Swiper('.about__slider', {
    slidesPerView: 1,
    spaceBetween: 24,
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
    breakpoints: {
      993: {
        autoHeight: true,
      },
    },
  });

  const swiperProducts = new Swiper('#products', options);
  const swiperPanels = new Swiper('#panels-slider', options);
  const swiperInverters = new Swiper('#inverters-slider', options);
  const swiperBatteries = new Swiper('#batteries-slider', options);
  const swiperPortfolio = new Swiper('#portfolio-slider', options);

  const filtersBtnAll = document.querySelectorAll('.swiper-filter[data-filter="all"]');
  const pannelFilters = document.querySelector('#panels-filters');
  const inverterFilters = document.querySelector('#inverters-filters');
  const batterieFilters = document.querySelector('#batteries-filters');
  const portfolioFilters = document.querySelector('#portfolio-filters');

  let filteringSlides = function(filters, slider) {
    let filterBtns = filters.querySelectorAll('.swiper-filter');

    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        let filter = btn.getAttribute('data-filter');
        let filterBtnSiblings = btn.parentElement.querySelectorAll('.swiper-filter');
        let swiperSlides = slider.slides;
        let swiperSlidesFilter = slider.el.querySelectorAll(`.products__slider .products__item.${filter}`);

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

        btn.classList.add('active');

        slider.updateSize();
        slider.updateSlides();
        slider.updateProgress();
        slider.updateSlidesClasses();
        slider.slideTo(0);
        slider.scrollbar.updateSize();
      });
    });
  };

  filtersBtnAll.forEach(function(btn) {
    btn.classList.add('active');
  });

  if (pannelFilters && swiperPanels) {
    filteringSlides(pannelFilters, swiperPanels);
  }
  if (inverterFilters && swiperInverters) {
    filteringSlides(inverterFilters, swiperInverters);
  }
  if (batterieFilters && swiperBatteries) {
    filteringSlides(batterieFilters, swiperBatteries);
  }
  if (portfolioFilters && swiperPortfolio) {
    filteringSlides(portfolioFilters, swiperPortfolio);
  }
});