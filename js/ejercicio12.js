let numeroRandom = Math.floor(Math.random() * 10 + 1)

console.log(numeroRandom)

let numero;

do {

    numero = parseInt(prompt('Escriba un numero del 1 al 10 y adivine el numero'))
    if (numero === numeroRandom) alert(`Felicidades! el numero random era ${numeroRandom}`)
    else if (numero > numeroRandom) alert('El numero que ingresaste es mayor al numero generado')
    else if (numero < numeroRandom) alert('El numero que ingresaste es menor al numero generado')

} while(numero !== numeroRandom)

