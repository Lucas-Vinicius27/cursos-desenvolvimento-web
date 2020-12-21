function calcular() {
    let res = document.getElementById('res');
    let produto = prompt('Qual é o produto que você está comprando?');
    let preco = Number(prompt(`Qual é o preço de ${produto}?`));
    let desconto = preco * 0.1;
    let r = preco - desconto;

    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`
        + `<p>O preço original era ${preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.</p>`
        + `<p>Você acaba de ganhar ${desconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de desconto (-10%).</p>`
        + `<p>No fim, você vai pagar ${r.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no produto ${produto}.</p>`;
}