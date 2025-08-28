document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.icon-sun');
    const moonIcon = document.querySelector('.icon-moon');

    // Função para definir o tema
    const setTheme = (isLight) => {
        document.body.classList.toggle('light-mode', isLight);
        sunIcon.style.display = isLight ? 'none' : 'block';
        moonIcon.style.display = isLight ? 'block' : 'none';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    };

    // Verifica o tema salvo no navegador ou a preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme) {
        setTheme(savedTheme === 'light');
    } else {
        setTheme(prefersLight);
    }

    // Evento de clique para alternar o tema
    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-mode');
        setTheme(!isLight);
    });
});