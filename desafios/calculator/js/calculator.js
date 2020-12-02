var n = '';
var inputConta = document.getElementById('conta');
var divPreResultado = document.getElementById('resultado');

function setN() {
    inputConta.setAttribute('value', '0');
}

function backspace() {
    inputConta.setAttribute('value', '');
}