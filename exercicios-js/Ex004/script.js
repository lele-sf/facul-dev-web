// contagem de 1 a 10
function contagem() {
    let output = '';
    for (let i = 1; i <= 10; i++) {
      output += `${i}...`;
    }
    output += `🥳`;
    console.log(output);
  }
  
  contagem();