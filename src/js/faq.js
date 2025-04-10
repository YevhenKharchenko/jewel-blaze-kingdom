import sprite from '../img/sprite.svg';

const faqBtns = document.querySelectorAll('.faq-top-text');
faqBtns.forEach(btn => btn.addEventListener('click', onBtnClick));

function onBtnClick(e) {
  const faqTop = e.currentTarget;
  const faqContainer = faqTop.closest('.faq-list-item');

  document.querySelectorAll('.faq-list-item').forEach(item => {
    if (item !== faqContainer) {
      item.classList.remove('faq-open');
      item.querySelector('.faq-bottom-text').classList.remove('is-visible');
      item.querySelector('use').setAttribute('href', `${sprite}#icon-cross`);
      // item.querySelector('.faq-icon').classList.add('faq-icon-minus');
    }
  });

  const bottomText = faqContainer.querySelector('.faq-bottom-text');
  bottomText.classList.toggle('is-visible');

  if (bottomText.classList.contains('is-visible')) {
    faqContainer.classList.add('faq-open');
    faqContainer
      .querySelector('use')
      .setAttribute('href', `${sprite}#icon-remove`);
  } else {
    faqContainer.classList.remove('faq-open');
    faqContainer
      .querySelector('use')
      .setAttribute('href', `${sprite}#icon-cross`);
  }
}
