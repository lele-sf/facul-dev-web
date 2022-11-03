let nome = document.getElementById("nome")
let n1 = document.getElementById("nota1")
let n2 = document.getElementById("nota2")
let res = document.getElementById("res")
function media(){
    let media = (Number(n1.value) + Number(n2.value)) / 2
    res.innerHTML = `A média de ${nome.value} é ${media}.`
    if (media <= 6) {
        res.innerHTML += `<br>Reprovado(a)!`
    } else {
        res.innerHTML += `<br>Aprovado(a)!`
    }
} 