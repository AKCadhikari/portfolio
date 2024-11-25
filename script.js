document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.style.background = window.scrollY > 50 ? 'rgba(0, 0, 0, 0.8)' : 'transparent';
    header.style.transition = 'background 0.3s';
});
