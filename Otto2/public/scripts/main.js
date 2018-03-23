const formButton = document.getElementById('form-dropdown');
const contactForm = document.querySelector('form');

formButton.addEventListener('click', function() {
  contactForm.classList.toggle('hide');
});
