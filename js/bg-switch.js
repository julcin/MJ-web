const bg = document.querySelector('.bg-image-1');
let showSecond = false;

window.addEventListener('scroll', (event) => {
  let scroll = this.scrollY;
  if (scroll > 1000) {
    if (!showSecond) {
      showSecond = true;
      switchBgImages();
    }
  } else {
    if (showSecond) {
      showSecond = false;
      switchBgImages();
    }
  }
});

const switchBgImages = () => {
  if (bg.classList.contains('layer-far')) {
    bg.classList.add('layer-back');
    bg.classList.remove('layer-far');
  } else {
    bg.classList.add('layer-far');
    bg.classList.remove('layer-back');
  }
};
