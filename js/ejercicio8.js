let suma = 0

do {
    let numero = parseInt(prompt('Escriba un numero entero'))
    suma = suma + numero
    console.log(suma)
} while (suma < 100)

console.log(`Suma final ${suma}`)