let num = document.getElementById("num");
let res = document.getElementById("res");

function calcule() {
    let n = Number(num.value)
    let abs = Math.abs(n)
    let int = Math.trunc(n)
    let arrend = Math.round(n)
    let raiz2 = Math.sqrt(n)
    let raiz3 = Math.cbrt(n)
    res.innerHTML = `<p>O valor absoluto de ${n} é <mark>${abs}</mark></p>
    <p>O valor inteiro de ${n} é <mark>${int}</mark></p>
    <p>O valor arredondado de ${n} é <mark>${arrend}</mark></p>
    <p>A raiz quadrada de ${n} é <mark>${raiz2}</mark></p>
    <p>A raiz cúbica de ${n} é <mark>${raiz3}</mark></p>`

}

