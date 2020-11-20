function gerar() {
    var num = Number(document.getElementById('num').value)
    var tab = document.getElementById('tabuada')
    var res = 0
    
    if (num == 0) {
        alert('Digite um número diferente de 0 ou vazio.')
        tab.innerHTML = '<option>Digite um número acima</option>'
    } else {
        tab.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            res = num * i
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${res}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}

var hr = document.getElementById('horaAtual')

setInterval(function () {
    var date = new Date();
    hr.innerHTML = '<p><strong>' + date.toLocaleTimeString() + '</strong></p>';
}, 1000);
