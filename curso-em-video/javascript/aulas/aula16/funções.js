function parimp(n) {
    if (n % 2 == 0) {
        return 'Par.'
    } else {
        return 'Impar.'
    }
}
// parametro opcional caso não entre valor no parametro aceita zero no lugar
function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

let v = function (x) {
    return x * 2
}

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
// funcção recursiva
function fatorial1(n) {
    if (n == 1) {
        return n
    } else {
        return n * fatorial1(n-1)
    }
}

let res = parimp(50)

console.log(res)
console.log(soma(2, 5))
console.log(v(2))
console.log(fatorial(5))
console.log(fatorial1(5))