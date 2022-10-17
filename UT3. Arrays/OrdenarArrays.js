function ordenarNumeros() {
    elementos = [4, 21, 1, 30, 100000] // Array de elementos a ordenar
    elementosOrdenados = [] // Array donde se almacenarán los elementos ordenados
    for (i = 0; i < elementos.length; i++) { // Recorremos el array de elementos
        if (elementosOrdenados.length == 0) { // Si el array de elementos ordenados está vacío
            elementosOrdenados.push(elementos[i]) // Añadimos el primer elemento
        } else { // Si el array de elementos ordenados no está vacío
            for (j = 0; j < elementosOrdenados.length; j++) { // Recorremos el array de elementos ordenados
                if (elementos[i] < elementosOrdenados[j]) { // Si el elemento es menor que el elemento del array de elementos ordenados
                    elementosOrdenados.splice(j, 0, elementos[i]) // Insertamos el elemento en la posición j
                    break // Salimos del bucle
                } else if (j == elementosOrdenados.length - 1) { // Si el elemento es mayor que todos los elementos del array de elementos ordenados
                    elementosOrdenados.push(elementos[i]) // Añadimos el elemento al final del array de elementos ordenados
                    break // Salimos del bucle
                }
            }
        }
    }
    console.log(elementosOrdenados); // Mostramos el array de elementos ordenados

}
function ordenarPalabras() {
    palabras = ['botella', 'zeta', 'androide', 'minuto'] // Array de palabras a ordenar
    console.log(palabras.sort()); // Ordenamos el array de palabras y lo mostramos

}
ordenarPalabras()
ordenarNumeros()