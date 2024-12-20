let numero = prompt('Escriba un numero positivo')
let numeroInvertido = ''

for (let i = numero.length; i > 0; i--) {
    numeroInvertido += numero[i - 1]
}

console.log(numeroInvertido)