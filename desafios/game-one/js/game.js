var nome = prompt('Qual o seu nome?').trim();
var divWelcome = document.getElementById('welcome');
var divQuestion = document.getElementById('question');
var imgDown = document.createElement('img');

divWelcome.innerHTML = `<h2>Seja Bem-Vindo ${nome}!</h2>`
    + '<p>Aqui estão as perguntas sobre animes:</p>';

imgDown.setAttribute('class', 'card');
imgDown.setAttribute('src', 'images/face-down.png');
imgDown.setAttribute('alt', 'Fundo da Carta');
imgDown.setAttribute('onclick', "teste()");

for (let i = 0; i <= 10; i++) {
    divQuestion.appendChild(imgDown);
}

function teste() {
    alert('olá')
}