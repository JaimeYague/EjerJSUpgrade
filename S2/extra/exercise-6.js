//* Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante. Sugerencia de array:

//* ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'] *//


function swap(array, index1, index2) {
    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    return array;
}

const ejemploArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
console.log(swap(ejemploArray, 2, 1));
console.log(swap(ejemploArray, 1, 2));
console.log(swap(ejemploArray, 3, 2));
console.log(swap(ejemploArray, 0, 3));