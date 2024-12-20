const filas = parseInt(prompt('Escriba el numero de filas que desea para el triangulo'))

for (let i = filas; i > 0; i--) {
    document.write('<br>')
    for (let j = 0; j < i; j++) {
        document.write('*')
    }
}