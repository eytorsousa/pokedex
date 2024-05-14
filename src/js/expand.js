const expand = document.querySelector('.expand');
const right = document.querySelector('.right');

expand.addEventListener('click', () => {
    expand.classList.toggle('open');
    right.classList.toggle('open');
});