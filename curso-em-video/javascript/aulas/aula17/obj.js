let amigo = {
    nome: 'Lucas',
    sexo: 'M',
    peso: 80,
    engordar(p = 0) {
        console.log('Engordou!')
        this.peso += p
    }
}
amigo.engordar(1)
console.log(amigo)
console.log(amigo.nome)