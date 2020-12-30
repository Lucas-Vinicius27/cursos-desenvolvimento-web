function converter() {
    let res = document.getElementById('res');
    let m = Number(prompt('Digite uma distãncia em metros (m)'));
    let km = m / 1000;
    let hm = m / 100;
    let dam = m / 10;
    let dm = m * 10;
    let cm = m * 100;
    let mm = m * 1000;

    res.innerHTML = `<h2>A distância de ${m} metros, corresponde a...</h2>`
        + `<p>${km.toFixed(3)} quilômetros (Km)</p>`
        + `<p>${hm.toFixed(3)} hectômetros (Hm)</p>`
        + `<p>${dam.toFixed(3)} decâmetros (Dam)</p>`
        + `<p>${dm} decímetros (dm)</p>`
        + `<p>${cm} centímetros (cm)</p>`
        + `<p>${mm} milímetros (mm)</p>`;
}