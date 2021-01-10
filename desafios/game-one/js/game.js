var nome = prompt('Qual o seu nome?').trim();
var divWelcome = document.getElementById('welcome');
var divQuestion = document.getElementById('question');
var divModal = document.getElementById('modal');
var divContent = document.getElementById('content');

divWelcome.innerHTML = `<h2>Seja Bem-Vindo ${nome}!</h2>`
    + '<p>Aqui estão as perguntas sobre animes:</p>';

for (let i = 0; i <= 9; i++) {
    var imgDown = document.createElement('img');
    imgDown.setAttribute('class', 'card');
    imgDown.setAttribute('src', 'images/face-down.png');
    imgDown.setAttribute('alt', 'Fundo da Carta');
    imgDown.setAttribute('onclick', `openModal(${i})`);
    divQuestion.appendChild(imgDown);
}

function openModal(n) {
    divModal.style.display = 'block';
}

function closeModal() {
    divModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}