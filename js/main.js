// Lógica para o botão "Voltar ao Topo"
const btnTopo = document.getElementById('btn-topo');

// Mostra o botão quando o usuário rolar 400px para baixo
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        btnTopo.classList.add('mostrar');
    } else {
        btnTopo.classList.remove('mostrar');
    }
});

// Leva o usuário de volta ao topo quando o botão é clicado
btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rola suavemente
    });
});