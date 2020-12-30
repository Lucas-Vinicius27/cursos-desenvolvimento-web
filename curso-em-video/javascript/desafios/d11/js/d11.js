function verificar() {
    let res = document.getElementById('res');
    let ano = prompt('Qual é o ano que você quer verificar?');
    let dia = new Date(ano, 1, 29).getDate();

    if (dia == 29) {
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
            + `<p>O ano de ${ano} <mark style="background: #7CFC00; color: #008B00"><strong>É BISSEXTO</strong></mark> \u{2714}\u{FE0F}</p>`;
    } else {
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
            + `<p>O ano de ${ano} <mark style="background: #FF4040; color: #8B0000"><strong>NÃO É BISSEXTO</strong></mark> \u{274C}</p>`;
    }
}