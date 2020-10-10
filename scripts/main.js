const hamburger = document.getElementById('hamburger');
const headerTextUl = document.getElementById('header-text-ul');

hamburger.addEventListener('click', () => {
    headerTextUl.classList.toggle('show');
});