import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

Swiper.use([Autoplay]);

const revLeftArrow = document.getElementById('revLeftArrow');
const revRightArrow = document.getElementById('revRightArrow');

let reviewsSwiper;

reviewsSwiper = new Swiper('.reviews-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 40,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      initialSlide: 1,
    },
  },
  on: {
    init: () => {
      document.querySelector('.reviews-swiper-container').classList.add('show');
    },
    slideChange: () => {
      updateRevArrows();
    },
  },
});

updateRevArrows();

function updateRevArrows() {
  if (reviewsSwiper) {
    revLeftArrow.disabled = reviewsSwiper.isBeginning;
    revRightArrow.disabled = reviewsSwiper.isEnd;
  }
}

revLeftArrow.addEventListener('click', () => {
  reviewsSwiper.slidePrev();
});

revRightArrow.addEventListener('click', () => {
  reviewsSwiper.slideNext();
});
