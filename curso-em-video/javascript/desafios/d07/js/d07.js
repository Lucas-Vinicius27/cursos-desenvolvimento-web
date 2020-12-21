var cota = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'));

function converter() {
    let res = document.getElementById('res');
    let real = Number(prompt('Quantos R$ você tem na carteira?'));
    let dolar = real / cota;
    res.innerHTML = `<p>Você tem ${real.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} que equivalem a ${dolar.toLocaleString('pt-br', { style: 'currency', currency: 'USD' })}.</p>`;
}