const coll = document.querySelectorAll('.service__icon');
const coll2 = document.querySelectorAll('.service__title');
const { length } = coll;

for (let i = 0; i < length; i++) {
  coll[i].addEventListener('click', function () {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width < 768) {
      this.classList.toggle('active');
      let content = this.nextElementSibling.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }
  });

  coll2[i].addEventListener('click', function () {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width < 768) {
      this.classList.toggle('active');
      let content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }
  });
}
