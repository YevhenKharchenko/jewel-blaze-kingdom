import Swiper from 'swiper';
import 'swiper/css/bundle';

const galleryLeftArrow = document.getElementById('galleryLeftArrow');
const galleryRightArrow = document.getElementById('galleryRightArrow');

const gallerySwiper = new Swiper('.gallery-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 20,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      spaceBetween: 0,
      initialSlide: 0,
    },
  },
  on: {
    init: () => {
      document.querySelector('.gallery-swiper-container').classList.add('show');
    },
  },
});
