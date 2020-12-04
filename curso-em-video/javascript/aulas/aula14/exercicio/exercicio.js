function contar() {
    let ini = Number(document.getElementById('ini').value)
    let fim = Number(document.getElementById('fim').value)
    let inc = Number(document.getElementById('inc').value)
    let div = document.getElementById('res')

    if (ini == 0 || fim == 0 && inc == 0) {
        alert("ERRO! Faltam dados.")
        div.innerHTML = 'Impossível contar!'
    } else if (inc == 0) {
        alert("O passo 0 ou vazio não pode ser calculado, passo 1 considerado.")
        
        inc = 1

        div.innerHTML = 'Contando: <br>'

        while (ini <= fim) {
            div.innerHTML += `${ini} \u{1F449} `
            ini += inc
        }

        div.innerHTML += `\u{1F3C1}`
    } else if (fim < ini) {
        div.innerHTML = 'Contando: <br>'

        while (ini >= fim) {
            div.innerHTML += `${ini} \u{1F449} `
            ini -= inc
        }

        div.innerHTML += `\u{1F3C1}`
    } else {
        div.innerHTML = 'Contando: <br>'

        while (ini <= fim) {
            div.innerHTML += `${ini} \u{1F449} `
            ini += inc
        }

        div.innerHTML += `\u{1F3C1}`
    }
}

var hr = document.getElementById('horaAtual')

setInterval(function () {
    var date = new Date();
    hr.innerHTML = '<p><strong>' + date.toLocaleTimeString() + '</strong></p>';
}, 1000);