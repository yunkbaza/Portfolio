const sections = document.querySelectorAll('section');

const animateScroll = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
    sections.forEach(section => {
        if (windowTop > section.offsetTop) {
            section.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', () => {
    animateScroll();
});