var stringConta = '';
var stringUI = '';
var inputConta = document.getElementById('conta');
var inputResultado = document.getElementById('resultado');

function setConta(str) {
    if (stringConta == '' || stringConta == '0') {
        stringConta = str;
        stringUI = str;
        inputConta.setAttribute('value', stringUI);
    } else if (str == '.') {
        stringConta += str;
        stringUI = stringConta.replace('.', ',');;
        inputConta.setAttribute('value', stringUI);
    } else if (str == '*') {
        stringConta += str;
        stringUI = stringConta.replace('*', 'x');
        inputConta.setAttribute('value', stringUI);
    } else {
        stringConta += str;
        stringUI += str;
        inputConta.setAttribute('value', stringUI);
    }
}

function resultado() {
    if (stringConta == '' || stringUI == '') {
        alert('Não há conta para exibir o resultado!');
    } else {
        inputResultado.setAttribute('value', eval(stringConta));
    }
}

function backspace() {
    let ui = stringUI.slice(0, stringUI.length - 1);
    stringUI = ui;
    let conta = stringConta.slice(0, stringConta.length - 1);
    stringConta = conta;
    inputConta.setAttribute('value', stringUI);
}

function limpar() {
    inputResultado.setAttribute('value', '');
}