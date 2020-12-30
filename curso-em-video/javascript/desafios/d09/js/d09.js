function calcular() {
    let res = document.getElementById('res');
    let nome = prompt('Qual é o nome do funcionário?');
    let salario = Number(prompt(`Qual é o salário de ${nome}?`));
    let porcentagem = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`));
    let aumento = salario * porcentagem / 100;
    let salarioFim = salario + aumento;

    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`
        + `<p>O salário era ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.</p>`
        + `<p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${aumento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`
        + `<p>E a partir daí, ${nome} vai passar a ganhar ${salarioFim.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.</p>`;
}