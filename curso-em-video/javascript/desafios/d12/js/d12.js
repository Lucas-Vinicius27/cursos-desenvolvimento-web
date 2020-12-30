function verificar() {
    let res = document.getElementById('res');
    let ant = Number(prompt('Qual era o preço anterior do produto?'));
    let dep = Number(prompt('Qual é o preço atual do produto?'));
    let dif = 0;

    res.innerHTML = '<h2>Analisando os valores informados</h2>'
        + `<p>O produto custava ${moeda(ant)} e agora custa ${moeda(dep)}.</p>`;
    if (ant < dep) {
        res.innerHTML += '<p>Hoje o produto está mais caro.</p>';
        dif = dep - ant;
        res.innerHTML += `<p>O preço subiu ${moeda(dif)} em relação ao preço anterior.</p>`
            + `<p>Uma variação de ${porcentagem(dep, dif)}% para cima.</p>`;
    } else {
        res.innerHTML += '<p>Hoje o produto está mais barato.</p>';
        dif = ant - dep;
        res.innerHTML += `<p>O preço caiu ${moeda(dif)} em relação ao preço anterior.</p>`
            + `<p>Uma variação de ${porcentagem(dep, dif)}% para baixo.</p>`;
    }
}

function moeda(n) {
    return n.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function porcentagem(total, dif) {
    let porcen = ((1 * dif) / total) * 100;
    return porcen.toFixed(2);
}