let nome = '';
let storageNome = '';
let desconhecido = 'Pessoa que não sei o nome';
let newRanking = [];
let saveRanking = localStorage.getItem('ranking');

if (localStorage.getItem('nome') == null) {
    nome = prompt('Qual é o seu nome?');
    if (nome != null) {
        localStorage.setItem('nome', nome.trim());
        storageNome = localStorage.getItem('nome');
    } else {
        alert(`Erro! Eu não sei o seu nome \u{1F612} \u{2639}`);
    }
} else {
    storageNome = localStorage.getItem('nome');
    nome = prompt(`O seu nome é ${storageNome}?(Digite s ou n)`);
    if (nome == 's' || nome == 'S') {
        nome = storageNome;
    } else if (nome == 'n' || nome == 'N') {
        nome = prompt('Qual é o seu nome?');
        if (nome != null) {
            localStorage.setItem('nome', nome.trim());
            storageNome = localStorage.getItem('nome');
        }
    } else {
        alert(`Erro! Eu não sei o seu nome \u{1F612} \u{2639}`);
        nome = null;
    }
}

let divWelcome = document.getElementById('welcome');
let divImages = document.getElementById('images');
let divModal = document.getElementById('modal');
let divContent = document.getElementById('content');
let imgFace = document.getElementById('face');
let pQuestion = document.getElementById('question');
let input0 = document.getElementById('input0'); // .checked para bool e .value
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let label = document.getElementsByTagName('label');
let tableUser = document.getElementsByClassName('user');
let tableScore = document.getElementsByClassName('score');
let tableDate = document.getElementsByClassName('data-Date');
let buttonR = document.getElementById('buttonR');
let recordAtual = 0;
let cards = [
    {
        image: "images/shingeki-no-kyojin.jpg",
        pergunta: "Qual o nome da garota que me ensinou a lutar melhor?",
        alternativas: ["Mikasa Ackerman", "Sasha Braus", "Annie Leonhart"],
        resposta: 2,
        pontuacao: 1,
        respondida: false
    },
    {
        image: "images/black-clover.jpeg",
        pergunta: "Qual o nome do demônio que habita no grimório de 5 trevos?",
        alternativas: ["Liebe", "Zagred", "Gimodelo"],
        resposta: 0,
        pontuacao: 1,
        respondida: false
    },
    {
        image: "images/naruto.jpg",
        pergunta: "Qual o nome da minha filha?",
        alternativas: ["Rimawari Uzumaki", "Himawari Uzumaki", "Himari Uzumaki"],
        resposta: 1,
        pontuacao: 1,
        respondida: false
    },
    {
        image: "images/boruto.jpg",
        pergunta: "Qual o nome dado ao olho direito?",
        alternativas: ["Jōgan", "Tenseigan", "Ketsuryugan"],
        resposta: 0,
        pontuacao: 1,
        respondida: false
    },
    {
        image: "images/dr-stone.jpg",
        pergunta: "Qual o nome do meu melhor amigo?",
        alternativas: ["Chrome", "Kohaku", "Taiju Oki"],
        resposta: 2,
        pontuacao: 1,
        respondida: false
    },
    {
        image: "images/goblin.jpg",
        pergunta: "Qual o nome da amiga de infancia do Goblin Slayer?",
        alternativas: ["Onna Shinkan", "Ushikai Musume", "Yousei Yunde"],
        resposta: 1,
        pontuacao: 1,
        respondida: false
    },
    {
        image: "images/sesshomaru.png",
        pergunta: "Qual o nome da garota que eu salvei a vida?",
        alternativas: ["Rin", "Kagome", "Sango"],
        resposta: 0,
        pontuacao: 1,
        respondida: false
    },
    {
        image: "images/yu-yu-hakusho.jpg",
        pergunta: "Qual estilo de luta do protagonista?",
        alternativas: ["Reiko-Hadoken", "Shin Batto", "Reigan"],
        resposta: 0,
        pontuacao: 1,
        respondida: false
    },
    {
        image: "images/katekyo-hitman-reborn.jpg",
        pergunta: "Quem treina essa equipe?",
        alternativas: ["Lambo", "Reborn", "Giotto"],
        resposta: 1,
        pontuacao: 1,
        respondida: false
    },
    {
        image: "images/hunter.png",
        pergunta: "Qual o nome do anime da imagem?",
        alternativas: ["Hunter", "Hunter vs Hunter", "Hunter x Hunter"],
        resposta: 2,
        pontuacao: 1,
        respondida: false
    }
];

if (nome == storageNome) {
    divWelcome.innerHTML = `<h2>Seja Bem-Vindo ${nome}!</h2>`
        + '<p>Aqui estão as perguntas sobre animes:</p>';
} else {
    divWelcome.innerHTML = `<h2>Seja Bem-Vindo ${desconhecido} \u{1F612} \u{2639}\u{FE0F}!</h2>`
        + '<p>Aqui estão as perguntas sobre animes:</p>';
}

for (let i = 0; i <= 9; i++) {
    let imgDown = document.createElement('img');
    imgDown.setAttribute('src', 'images/face-down.png');
    imgDown.setAttribute('alt', 'Fundo da Carta');
    imgDown.setAttribute('onclick', `openModal(${i})`);
    divImages.appendChild(imgDown);
}

loadRanking();

function openModal(n) {
    imgFace.setAttribute('src', cards[n].image);
    pQuestion.innerText = cards[n].pergunta;
    label[0].innerText = cards[n].alternativas[0];
    label[1].innerText = cards[n].alternativas[1];
    label[2].innerText = cards[n].alternativas[2];
    buttonR.setAttribute('onclick', `responder(${n})`);
    if (screen.width < 640 || screen.height < 480) {
        imgFace.style.width = '75%';
    } else {
        imgFace.removeAttribute('style');
    }
    divModal.style.display = 'block';
}

function closeModal() {
    divModal.style.display = 'none';
}

function responder(n) {
    if (cards[n].respondida === false) {
        alert('Você respondeu!');
        if (input0.checked) {
            recordAtual = input0.value == cards[n].resposta ? recordAtual + 1 : recordAtual + 0;
        } else if (input1.checked) {
            recordAtual = input1.value == cards[n].resposta ? recordAtual + 1 : recordAtual + 0;
        } else if (input2.checked) {
            recordAtual = input2.value == cards[n].resposta ? recordAtual + 1 : recordAtual + 0;
        }
        cards[n].respondida = true;
    } else {
        alert('Você já respondeu essa pergunta!');
    }
    closeModal();
}

function salvar() {
    if (nome == storageNome) {
        alert(`${nome} parabéns! Sua pontuação é ${recordAtual}!`);
        let pontuacao = {
            nomeJogador: nome,
            record: recordAtual,
            date: new Date().toDateString()
        };
        if (saveRanking == null) {
            newRanking.push(pontuacao);
            localStorage.setItem('ranking', JSON.stringify(newRanking));
        } else {
            newRanking = JSON.parse(saveRanking);
            newRanking.push(pontuacao);
            localStorage.setItem('ranking', JSON.stringify(newRanking));
        }
    } else {
        alert(`${desconhecido} parabéns! Sua pontuação é ${recordAtual}!`);
        let pontuacao = {
            nomeJogador: desconhecido,
            record: recordAtual,
            date: new Date().toDateString()
        };
        if (saveRanking == null) {
            newRanking.push(pontuacao);
            localStorage.setItem('ranking', JSON.stringify(newRanking));
        } else {
            newRanking = JSON.parse(saveRanking);
            newRanking.push(pontuacao);
            localStorage.setItem('ranking', JSON.stringify(newRanking));
        }
    }
    saveRanking = localStorage.getItem('ranking');
    loadRanking();
}

function loadRanking() {
    if (saveRanking != null) {
        newRanking = JSON.parse(saveRanking);
        for (let c in newRanking) {
            if (newRanking[c].record >= 7) {
                tableUser[0].textContent = newRanking[c].nomeJogador;
                tableScore[0].textContent = newRanking[c].record;
                tableDate[0].textContent = newRanking[c].date;
            } else if (newRanking[c].record <= 6 && newRanking[c].record >= 4) {
                tableUser[1].textContent = newRanking[c].nomeJogador;
                tableScore[1].textContent = newRanking[c].record;
                tableDate[1].textContent = newRanking[c].date;
            } else {
                tableUser[2].textContent = newRanking[c].nomeJogador;
                tableScore[2].textContent = newRanking[c].record;
                tableDate[2].textContent = newRanking[c].date;
            }
        }
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}