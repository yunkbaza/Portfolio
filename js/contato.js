function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome.trim() === '' || mensagem.trim() === '') {
        alert('Por favor, preencha seu nome e a mensagem.');
        return;
    }

    const telefone = '5511947573410';
    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}