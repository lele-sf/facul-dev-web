// maior e menor número
function calcule() {
    var n1 = Number(prompt("Digite um número:"));
    var n2 = Number(prompt("Digite outro número:"));
    if (n1 > n2) {
      console.log("O maior número é " + n1 + " e o menor é " + n2);
    } else if (n2 > n1) {
      console.log("O maior número é " + n2 + " e o menor é " + n1);
    } else {
      console.log("Os números são iguais");
    }
  }
  
  calcule();
 