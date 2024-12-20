const numeros = [23, 45, 12, 67, 34, 89, 21]

let numeroMayor = 0 

for (let numero of numeros) {
    if (numero > numeroMayor) numeroMayor = numero
}

console.log(`El numero mayor es ${numeroMayor}`)