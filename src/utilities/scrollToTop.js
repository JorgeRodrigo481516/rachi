const elToTop = document.getElementById('to-top');
elToTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

function scrollToTop() {
  if (window.pageYOffset > 110) {
    elToTop.classList.add('active');
  } else {
    elToTop.classList.remove('active');
  }
}

export { scrollToTop };
