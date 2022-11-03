let res = document.getElementById('res')
function contagem() {
    for (let i = 1; i <= 10; i++) {
        res.innerHTML += `${i}&#128073 `
    }
    res.innerHTML += `&#127937`
}