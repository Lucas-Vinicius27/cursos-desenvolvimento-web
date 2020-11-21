function verificar() {
    var ano = new Date().getFullYear()
    var fAno = Number(document.getElementById('ano').value)
    var res = document.getElementById('res')

    if (fAno == 0 || fAno > ano) {
        alert('ERRO! Verifique as informações e tente novamente.')
    } else {
        var idade = ano - fAno
        var sexo = document.getElementsByName('sx')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Masculino'
            if (idade <= 3) {
                img.setAttribute('src', 'images/bebe-masc.jpg')
            } else if (idade <= 10) {
                img.setAttribute('src', 'images/crianca-masc.jpg')
            } else if (idade < 25) {
                img.setAttribute('src', 'images/jovem-masc.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adulto-masc.jpg')
            } else {
                img.setAttribute('src', 'images/idoso.jpg')
            }
        } else {
            genero = 'Feminino'
            if (idade <= 3) {
                img.setAttribute('src', 'images/bebe-fem.jpg')
            } else if (idade <= 10) {
                img.setAttribute('src', 'images/crianca-fem.jpg')
            } else if (idade < 25) {
                img.setAttribute('src', 'images/jovem-fem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adulto-fem.jpg')
            } else {
                img.setAttribute('src', 'images/idosa.jpg')
            }
        }
        res.innerHTML = `<p>Detectamos uma pessoa de sexo ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}

var hr = document.getElementById('horaAtual')

setInterval(function () {
    var date = new Date();
    hr.innerHTML = '<strong>' + date.toLocaleTimeString() + '</strong>';
}, 1000);