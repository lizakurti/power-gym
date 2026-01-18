const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});
