const bg = document.querySelector('.bg-image-1');

window.addEventListener('scroll', (event) => {
  let scroll = this.scrollY;
  if (scroll > 1000) {
    bg.classList.add('layer-back');
    bg.classList.remove('layer-far');
  } else {
    bg.classList.add('layer-far');
    bg.classList.remove('layer-back');
  }
});
