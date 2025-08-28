// Adiciona o listener de evento ao formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // INSTRUÇÕES: Substitua com suas chaves do EmailJS
    const serviceID = 'service_o8wgnk8'; // Encontrado em "Email Services"
    const templateID = 'template_kebelwh'; // Encontrado em "Email Templates"
    const publicKey = 'jDkz7HbrEe779bCuH'; // Encontrado em "Account" -> "API Keys"

    // Inicializa o EmailJS com sua Public Key
    emailjs.init(publicKey);

    // Envia o formulário usando o EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
            document.getElementById('form-contato').reset(); // Limpa o formulário
        }, (err) => {
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
            console.error('Erro no EmailJS:', JSON.stringify(err));
        });
});