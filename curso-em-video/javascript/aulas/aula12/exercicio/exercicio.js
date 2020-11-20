function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('img')
    var hora = new Date().getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'images/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'images/tarde.jpg'
    } else {
        img.src = 'images/noite.jpg'
        document.body.style.background = 'rgb(2, 29, 63)'
    }
}

var hr = document.getElementById('horaAtual')

setInterval(function () {
    var date = new Date();
    hr.innerHTML = '<strong>' + date.toLocaleTimeString() + '</strong>';
}, 1000);