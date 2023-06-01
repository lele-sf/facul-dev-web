// tabuada
function calcular() {
    let num = prompt("Digite um número:");
    let res = "";
  
    if (num.length === 0) {
      console.log("Por favor, digite um número!");
    } else {
      num = Number(num);
      for (let c = 1; c <= 10; c++) {
        let mult = num * c;
        res += `${num} x ${c} = ${mult}\n`;
      }
      console.log(res);
    }
  }
  
  calcular();
  