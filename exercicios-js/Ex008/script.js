
function enviar() {
    let nome = document.getElementById("nome").value;
    let text = ''
    if (nome != '') {
        text = `Obrigado ${nome} os seus dados foram enviados com sucesso!`;
    } else {
        text = 'Por favor preencha os dados!';
    }
    document.getElementById("res").innerHTML = text;
}
// não consegui fazer funcionar ainda