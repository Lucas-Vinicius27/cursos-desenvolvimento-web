function calcular() {
    let res = document.getElementById('res');
    let nome = prompt('Qual é o nome do aluno?').trim();
    let n = Number(prompt(`Primeira nota de ${nome}:`));
    let n1 = Number(prompt(`Segunda nota de ${nome}:`));
    let media = (n + n1) / 2;

    if (media <= 3) {
        res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
            + `<p>Com as notas ${n} e ${n1}, a <strong>média é ${media}</strong>.</p>`
            + `<p>Com média abaixo de 3, o aluno está <mark style="background: #FF4040; color: #8B0000"><strong>REPROVADO</strong></mark>.</p>`;
    } else if (media < 6) {
        res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
            + `<p>Com as notas ${n} e ${n1}, a <strong>média é ${media}</strong>.</p>`
            + `<p>Com média entre 3 e 6, o aluno está em <strong style="color: #DAA520">RECUPERAÇÃO</strong>.</p>`;
    } else {
        res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
            + `<p>Com as notas ${n} e ${n1}, a <strong>média é ${media}</strong>.</p>`
            + `<p>Com média acima de 6, o aluno está <mark style="background: #7CFC00; color: #008B00"><strong>APROVADO</strong></mark></p>`;
    }
}