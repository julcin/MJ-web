(function () {
  emailjs.init('user_NlkV0Drb1XYv7uZOSFY3t');
})();

const btn = document.querySelector('.btn__submit');
const form = document.querySelector('.contacts__form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Siunčiama...';

  emailjs.sendForm('service_ecrtese', 'template_i87yq7f', this).then(
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
