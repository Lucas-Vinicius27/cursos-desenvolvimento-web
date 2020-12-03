var stringConta = '';
var inputConta = document.getElementById('conta');
var inputResultado = document.getElementById('resultado');

function setN(num) {
    if (stringConta == '' || stringConta == '0') {
        stringConta = num;
        inputConta.setAttribute('value', stringConta);
    } else {
        stringConta += num;
        inputConta.setAttribute('value', stringConta);
    }
}

function resultado() {
    if (stringConta == '') {
        alert('Não há conta para exibir o resultado!');
    } else {
        inputResultado.setAttribute('value', eval(stringConta));
    }
}

function backspace() {
    inputConta.setAttribute('value', '');
}

function limpar() {
    inputResultado.setAttribute('value', '');
}