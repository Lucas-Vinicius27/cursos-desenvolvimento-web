var nome = prompt('Qual o seu nome?').trim();
var divWelcome = document.getElementById('welcome');
var divQuestion = document.getElementById('question');

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
    // let divModal = document.createElement('div').setAttribute('id', `card${n}`);
    // divModal.style.display = 'block';
    // divModal.innerHTML = `<span onclick="divModal.style.display = 'none'">&times;</span>`
    //     + `<p>${nome} você conseguiu fazer um modal com a carta ${n}</p>`;
    // document.innerHTML = divModal;
}