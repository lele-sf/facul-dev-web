// media de nota
let nome = prompt("Digite o nome:")
let n1 = Number(prompt("Digite a primeira nota:"))
let n2 = Number(prompt("Digite a segunda nota:"))
let res = ""

function media() {
  let media = (n1 + n2) / 2;
  res = `A média de ${nome} é ${media}.\n`;
  if (media <= 6) {
    res += "Reprovado(a)!";
  } else {
    res += "Aprovado(a)!";
  }
  console.log(res);
}

media();