function calcular() {
    let nome = prompt('Qual produto você está comprando?');
    let preco = Number(prompt(`Qunato custa ${nome} que você está comprando?`));
    let pago = Number(prompt(`Qual o valor que você deu para pagar ${nome}?`));
    let troco = pago - preco;
    alert(`Você comprou ${nome} que custou ${preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.
Você pagou com ${pago.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} em dinehiro e vai receber ${troco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} de troco.
Volte Sempre!`);
}