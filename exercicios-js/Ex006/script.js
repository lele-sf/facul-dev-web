// idade
function calcular() {
    let ano = Number(prompt("Digite o ano que você nasceu:"));
    let calendario = new Date();
    let anoAtual = calendario.getFullYear();
    let idade = anoAtual - ano;
    let res = `Você nasceu em ${ano} e tem ${idade} anos.`;
    console.log(res);
  }
  
  calcular();
