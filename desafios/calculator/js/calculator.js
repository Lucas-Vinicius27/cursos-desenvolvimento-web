var n = '';
var inputConta = document.getElementById('conta');
var inputResultado = document.getElementById('resultado');

function setN() {
    if (n == '' || n == '0') {
        n = '0';
        console.log(n)
        inputConta.setAttribute('value', n);
    } else {
        n += '0';
        console.log(n)
        inputConta.setAttribute('value', n);
    }
}

function backspace() {
    inputConta.setAttribute('value', '');
}

function limpar() {
    inputResultado.setAttribute('value', '');
}