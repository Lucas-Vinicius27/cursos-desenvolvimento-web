function calcular() {
    let res = document.getElementById('res');
    let a = Number(prompt('Qual é o valor de a?'));
    let b = Number(prompt('Qual é o valor de b?'));
    let c = Number(prompt('Qual é o valor de c?'));
    let delta = Math.pow(b, 2) - (4 * a * c);
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    res.innerHTML = '<h2>Bhaskara Resolvido</h2>'
        + `<p>A equação é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
        + `<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`
        + `<p>O valor calculado foi <strong><mark>&Delta; = ${delta}</mark></strong></p>`
        + '<p>Agora vamos calcular os dois resultados possíveis da equação:</p>'
        + `<p><strong>x<sub>1</sub> = - ${b} + &radic;${delta} / 2 . ${a}</strong></p>`
        + `<p>O valor calculado foi <strong><mark>x<sub>1</sub> = ${x1.toFixed(2)}</mark></strong></p>`
        + `<p><strong>x<sub>2</sub> = - ${b} - &radic;${delta} / 2 . ${a}</strong></p>`
        + `<p>O valor calculado foi <strong><mark>x<sub>2</sub> = ${x2.toFixed(2)}</mark></strong></p>`;
}