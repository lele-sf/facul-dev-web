function calcular() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    let n = Number(num.value)
    res.innerHTML = ''

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
    for (let c = 1; c <= 10; c++) {
         var mult = n * c
        res.innerHTML += `${n} x ${c} = ${mult} <br>`
        }
    }
}

