const returnToTopButton = document.querySelector('#top-link');
let showing = false;
let isScrolling;

window.addEventListener('scroll', (event) => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    returnToTopButton.classList.remove('back2Top-show');
    showing = false;
  }, 2000);

  let scroll = this.scrollY;
  if (scroll > 500) {
    if (!showing) {
      showing = true;
      returnToTopButton.classList.add('back2Top-show');
    }
  } else {
    if (showing) {
      showing = false;
      returnToTopButton.classList.remove('back2Top-show');
    }
  }
});
