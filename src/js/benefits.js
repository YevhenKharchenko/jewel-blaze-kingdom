import Swiper from 'swiper';
import 'swiper/css/bundle';

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

const benefitsSwiper = new Swiper('.benefits-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 22,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  on: {
    init: () => {
      document
        .querySelector('.benefits-swiper-container')
        .classList.add('show');
    },
    slideChange: () => {
      updateArrows();
    },
  },
});

function updateArrows() {
  leftArrow.disabled = benefitsSwiper.isBeginning;
  rightArrow.disabled = benefitsSwiper.isEnd;
}

updateArrows();

leftArrow.addEventListener('click', () => {
  benefitsSwiper.slidePrev();
});

rightArrow.addEventListener('click', () => {
  benefitsSwiper.slideNext();
});
