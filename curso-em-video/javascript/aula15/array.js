let num = [1, 2, 5, 6, 56, 94, 8, 54, 545, 46, 87, 4, 96, 5448, 94765]
let a = ['Carro', 'Moto', 'Caminhão']

/*
console.log(num.length)

console.log(num)

console.log(num.sort())

num.push(3)

console.log(num)

console.log(num.sort())

console.log(a)

// .push() add um valor no último elemento da array, .sort() ordena o array

for (let i = 0; i < a.length; i++){
    console.log(`Na possição ${i} temos o valor ${a[i]}`)
}

for (let i = 0; i < num.length; i++){
    console.log(`Na possição ${i} temos o valor ${num[i]}`)
}

// .indexOf() pega o indice do valor escolhido dentro do array
// se o retorno for -1 então o valor pesquisado não existe

*/

// esse for é especialmente para arrays ou objects
for (let i in num) {
    console.log(num[i])
}
console.log(num.indexOf(54))