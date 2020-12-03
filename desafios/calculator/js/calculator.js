var stringConta = '';
var inputConta = document.getElementById('conta');
var inputResultado = document.getElementById('resultado');

function setConta(str) {
    if (stringConta == '' || stringConta == '0') {
        stringConta = str;
        inputConta.setAttribute('value', stringConta);
    } else if (str == '.') {
        stringConta += str;
        inputConta.setAttribute('value', ',');
    } else {
        stringConta += str;
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