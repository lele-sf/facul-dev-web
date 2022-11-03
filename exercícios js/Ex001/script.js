function calcule() {
  var texto = ""
  for (var i = 0; i < 2; i++) {
    var num = Number(prompt("Digite um número:"))
    if (num % 2 == 0) {
      texto += `O número ${num} é par<br>`
    } else {
      texto += `O número ${num} é ímpar<br>`
    }
  }
  document.getElementById("res").innerHTML = texto
}