var nome = '';
var storageNome = '';

if (localStorage.getItem('nome') == null) {
    nome = prompt('Qual é o seu nome?').trim();
    localStorage.setItem('nome', nome);
    storageNome = localStorage.getItem('nome');
} else {
    storageNome = localStorage.getItem('nome');
    nome = prompt(`O seu nome é ${storageNome}?(Digite s ou n)`);
    if (nome == 's' || nome == 'S') {
        nome = storageNome;
    } else if (nome == 'n' || nome == 'N') {
        nome = prompt('Qual é o seu nome?').trim();
        localStorage.setItem('nome', nome);
        storageNome = localStorage.getItem('nome');
    } else {
        alert(`Erro! Eu não sei o seu nome \u{1F612} \u{2639}`);
        nome = '';
    }
}

var divWelcome = document.getElementById('welcome');
var divImages = document.getElementById('images');
var divModal = document.getElementById('modal');
var divContent = document.getElementById('content');
var imgFace = document.createElement('img');
var pQuestion = document.createElement('p');
var buttonAnswer = document.createElement('button');
var record = 0;
var cards = [
    {
        image: "images/shingeki-no-kyojin.jpg",
        pergunta: "Qual o nome da garota que me ensinou a lutar melhor?",
        alternativas: ["Mikasa Ackerman", "Sasha Braus", "Annie Leonhart"],
        resposta: 2,
        pontuacao: 1
    },
    {
        image: "images/black-clover.jpeg",
        pergunta: "Olá",
        alternativas: ["", "", ""],
        resposta: new Number(),
        pontuacao: 1
    },
    {
        image: "images/naruto.jpg",
        pergunta: "Tudo bem?",
        alternativas: ["", "", ""],
        resposta: new Number(),
        pontuacao: 1
    },
    {
        image: "images/boruto.jpg",
        pergunta: "Boruto",
        alternativas: ["", "", ""],
        resposta: new Number(),
        pontuacao: 1
    },
    {
        image: "images/dr-stone.jpg",
        pergunta: "",
        alternativas: ["", "", ""],
        resposta: new Number(),
        pontuacao: 1
    },
    {
        image: "images/goblin.jpg",
        pergunta: "",
        alternativas: ["", "", ""],
        resposta: new Number(),
        pontuacao: 1
    },
    {
        image: "images/sesshomaru.png",
        pergunta: "",
        alternativas: ["", "", ""],
        resposta: new Number(),
        pontuacao: 1
    },
    {
        image: "images/yu-yu-hakusho.jpg",
        pergunta: "",
        alternativas: ["", "", ""],
        resposta: new Number(),
        pontuacao: 1
    },
    {
        image: "images/katekyo-hitman-reborn.jpg",
        pergunta: "",
        alternativas: ["", "", ""],
        resposta: new Number(),
        pontuacao: 1
    },
    {
        image: "images/hunter.png",
        pergunta: "",
        alternativas: ["", "", ""],
        resposta: new Number(),
        pontuacao: 1
    }
];

if (nome == storageNome) {
    divWelcome.innerHTML = `<h2>Seja Bem-Vindo ${nome}!</h2>`
        + '<p>Aqui estão as perguntas sobre animes:</p>';
} else {
    divWelcome.innerHTML = `<h2>Seja Bem-Vindo pessoa que não sei o nome \u{1F612} \u{2639}\u{FE0F}!</h2>`
        + '<p>Aqui estão as perguntas sobre animes:</p>';
}

for (let i = 0; i <= 9; i++) {
    var imgDown = document.createElement('img');
    imgDown.setAttribute('src', 'images/face-down.png');
    imgDown.setAttribute('alt', 'Fundo da Carta');
    imgDown.setAttribute('onclick', `openModal(${i})`);
    divImages.appendChild(imgDown);
}

function openModal(n) {
    imgFace.setAttribute('src', cards[n].image);
    imgFace.setAttribute('alt', 'Imagem da Pergunta');
    pQuestion.innerText = cards[n].pergunta;
    divContent.appendChild(imgFace);
    divContent.appendChild(pQuestion);
    for (let i = 0; i <= 2; i++) {
        if (document.getElementById(cards[n].alternativas[i]) == null) {
            var inputRadio = document.createElement('input');
            var labelAlternative = document.createElement('label');
            inputRadio.setAttribute('type', 'radio');
            inputRadio.setAttribute('id', cards[n].alternativas[i]);
            inputRadio.setAttribute('name', 'alternativa');
            inputRadio.setAttribute('value', i);
            labelAlternative.setAttribute('for', cards[n].alternativas[i]);
            labelAlternative.innerText = cards[n].alternativas[i];
            divContent.appendChild(inputRadio);
            divContent.appendChild(labelAlternative);
        }
    }
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