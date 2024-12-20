let palabras = prompt('Escriba una lista de palabras y dividalas por coma')

const listaPalabras = palabras.split(',')

for (let i = 0; i < listaPalabras.length; i++) {
    let palabraInvertida = ''
    let palabra = listaPalabras[i].trim()
    for (let j = palabra.length; j > 0; j--) {
        palabraInvertida += palabra[j - 1]
    }

    if (palabra === palabraInvertida) console.log(`La palabra ${palabra} es palindroma: ${palabra} - ${palabraInvertida}`)
    else console.log(`La palabra ${palabra} no es palindroma: ${palabra} - ${palabraInvertida}`)
}

