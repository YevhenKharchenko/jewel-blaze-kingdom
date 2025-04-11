import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { observeSwiperAutoplay } from './observer.js';

Swiper.use([Autoplay]);

const benefitsSwiperEl = document.querySelector('.benefits-swiper-container');

const benefitsSwiper = new Swiper('.benefits-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 3,
  spaceBetween: 22,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      initialSlide: 2,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.benefits-swiper-container')
        .classList.add('show');
    },
  },
});

observeSwiperAutoplay(benefitsSwiper, benefitsSwiperEl);
