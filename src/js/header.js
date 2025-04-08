const contextMenu = document.querySelector('.context-menu');
const menuBtn = document.querySelector('.nav-btn');
const closeContextBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', onMenuButtonClick);

function onMenuButtonClick() {
  contextMenu.classList.add('is-open');
  menuBtn.classList.add('closed');
  closeContextBtn.classList.add('is-open');

  contextMenu.addEventListener('click', onContextMenuLinkClick);
  closeContextBtn.addEventListener('click', onCloseContextButtonClick);
  document.addEventListener('click', onOutsideMenuClick);
}

function onCloseContextButtonClick() {
  contextMenu.classList.remove('is-open');
  closeContextBtn.classList.remove('is-open');
  menuBtn.classList.remove('closed');

  contextMenu.removeEventListener('click', onContextMenuLinkClick);
  closeContextBtn.removeEventListener('click', onCloseContextButtonClick);
  document.removeEventListener('click', onOutsideMenuClick);
}

function onContextMenuLinkClick(e) {
  if (e.target.nodeName === 'A') {
    onCloseContextButtonClick();
  }
}

function onOutsideMenuClick(e) {
  const isClickInsideMenu = contextMenu.contains(e.target);
  const isClickOnMenuBtn = menuBtn.contains(e.target);
  const isClickOnCloseBtn = closeContextBtn.contains(e.target);

  if (!isClickInsideMenu && !isClickOnMenuBtn && !isClickOnCloseBtn) {
    onCloseContextButtonClick();
    document.removeEventListener('click', onOutsideMenuClick);
  }
}
