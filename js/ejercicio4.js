const palabra = prompt('Escriba una palabra').toLocaleLowerCase()

const vocales = ['a', 'e', 'i', 'o', 'u']
let numeroVocales = 0

for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) numeroVocales++
}

console.log(`La palabra "${palabra}" tiene ${numeroVocales} vocales`)