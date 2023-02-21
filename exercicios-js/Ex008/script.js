const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const mensagem = document.getElementById('obs').value;

    if (nome && email && mensagem && tel) {
        const mensagemSucesso = `Obrigado ${nome}, os seus dados foram enviados com sucesso!`;
        alert(mensagemSucesso);
    } else {
        alert('Por favor preencha todos os campos.');
    }
});