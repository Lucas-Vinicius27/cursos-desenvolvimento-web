var hora = new Date()

console.log(`Agora são exatamente ${hora.getHours()} horas.`)

if (hora.getHours() < 12) {
    console.log('Bom Dia!')
} else if (hora.getHours() <= 18) {
    console.log('Boa Tarde!')
} else if(hora.getHours() < 5){
    console.log('Boa Madrugada!')
} else {
    console.log('Boa Noite!')
}