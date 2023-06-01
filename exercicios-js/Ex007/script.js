// diferentes valores
let num = prompt("Digite um número:");
let res = "";

function calcule() {
  let n = Number(num);
  let abs = Math.abs(n);
  let int = Math.trunc(n);
  let arrend = Math.round(n);
  let raiz2 = Math.sqrt(n);
  let raiz3 = Math.cbrt(n);
  res = `O valor absoluto de ${n} é ${abs}\n`;
  res += `O valor inteiro de ${n} é ${int}\n`;
  res += `O valor arredondado de ${n} é ${arrend}\n`;
  res += `A raiz quadrada de ${n} é ${raiz2}\n`;
  res += `A raiz cúbica de ${n} é ${raiz3}\n`;
  console.log(res);
}

calcule();