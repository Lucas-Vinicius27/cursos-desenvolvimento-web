var s = document.getElementById('s')
var resultado = document.querySelector('div#res')
var v = []

function listar(n, a) {
    if (a.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function maior(a) {
    let m = a[0]
    for (let c in a) {
        if (a[c] > m) {
            m = a[c]
        }
    }
    return m
}

function menor(a) {
    let m = a[0]
    for (let c in a) {
        if (a[c] < m) {
            m = a[c]
        }
    }
    return m
}

function somar(a) {
    let r = 0
    for (let c in a) {
        r += a[c]
    }
    return r
}

function media(a) {
    return somar(a) / a.length
}

function limpar() {
    s.innerHTML = ''
    resultado.innerHTML = ''
}

function adicionar() {
    var n = Number(document.querySelector('input#n').value)
    if (n == '' || n < 1 || n > 100) {
        alert('Número Inválido!')
    } else if (listar(n, v)) {
        alert('Valor já adicionado!')
    } else {
        v.push(n)
        let item = document.createElement('option')
        let opt = `Valor ${n} adicionado!`
        item.text = opt
        s.appendChild(item)
        resultado.innerHTML = ''
    }
    let num = document.getElementById('n')
    num.value = ''
    num.focus()
}

function finalizar() {
    if (v.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        resultado.innerHTML = `<p>Ao todo temos ${v.length} valores cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior(v)}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor(v)}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${somar(v)}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media(v)}.</p>`
    }
}

var dhr = document.getElementById('horaAtual')

setInterval(function () {
    var horaAtual = new Date();
    dhr.innerHTML = '<p><strong>' + horaAtual.toLocaleTimeString() + '</strong></p>'
}, 1000);