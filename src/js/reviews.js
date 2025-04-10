import Swiper from 'swiper';
import 'swiper/css/bundle';

const revLeftArrow = document.getElementById('revLeftArrow');
const revRightArrow = document.getElementById('revRightArrow');

const reviewsSwiper = new Swiper('.reviews-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 40,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  // breakpoints: {
  //   1440: {
  //     spaceBetween: 22,
  //   },
  // },
  on: {
    init: () => {
      document.querySelector('.reviews-swiper-container').classList.add('show');
    },
    slideChange: () => {
      updateRevArrows();
    },
  },
});

function updateRevArrows() {
  revLeftArrow.disabled = reviewsSwiper.isBeginning;
  revRightArrow.disabled = reviewsSwiper.isEnd;
}

updateRevArrows();

revLeftArrow.addEventListener('click', () => {
  reviewsSwiper.slidePrev();
});

revRightArrow.addEventListener('click', () => {
  reviewsSwiper.slideNext();
});
