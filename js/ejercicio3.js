const numero = parseInt(prompt('Escriba un numero del 1 al 100'))

for (let i = 1; i <= 10; i++) {
    if (numero * i > 1000) {
        break
    }
    console.log(numero * i)
}