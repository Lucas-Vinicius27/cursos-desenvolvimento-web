var hr = document.getElementById('horaAtual');
var msg = document.querySelector('div#msg');

if (msg != null) {
    var hora = new Date().getHours();
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `<p><strong>Bom dia!</strong></p>`;
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `<p><strong>Boa tarde!</strong></p>`;
    } else {
        msg.innerHTML = `<p><strong>Boa noite!</strong></p>`;
    }
}

setInterval(() => {
    const date = new Date();
    hr.innerHTML = '<p><strong>' + date.toLocaleTimeString() + '</strong></p>';
}, 1000);