function converter() {
    let res = document.getElementById('res');
    let cel = Number(prompt('Digite uma temperatura em °C (Celsius)'));
    let kel = cel + 273.15;
    let fah = (cel * 9 / 5) + 32;

    res.innerHTML = `<h2>A temperatura de ${cel}°C, corresponde a...</h2>`
        + `<p>${kel.toFixed(2)}°K (Kelvin)</p>`
        + `<p>${fah}°F (Fahrenheit)</p>`;
}