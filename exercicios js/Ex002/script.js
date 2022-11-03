function soma(){
    var num1 = Number(prompt("Digite um número:"))
    var num2 = Number(prompt("Digite outro número:"))
    var soma = num1 + num2
    document.getElementById("res").innerHTML = `A soma entre ${num1} e ${num2} é ${soma}.`
}