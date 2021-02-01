(function () {
  emailjs.init('user_e0DRVxi8OCOuM6ymCqQl5');
})();

const btn = document.querySelector('.btn__submit');
const form = document.querySelector('.contacts__form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Siunčiama...';

  emailjs.sendForm('service_lbmjlni', 'template_mjo1lcp', this).then(
    () => {
      btn.value = 'Siųsti';
      alert('Dėkojame už žinutę. Greitu laiku su jumis susisieksime!');
      form.reset();
    },
    (err) => {
      btn.value = 'Siųsti';
      alert('Klaida siunčiant formą!');
      console.log('Nepavyko išsiųsti formos.', err.message);
      form.reset();
    }
  );
});
