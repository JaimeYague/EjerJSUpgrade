//* Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada `removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

//* De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

const ejemploArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

//* console.log(findArrayIndex(ejemploArray, 'Mosquito')); 
//* console.log(findArrayIndex(ejemploArray, 'Ajolote'));
//* console.log(findArrayIndex(ejemploArray, 'Gato'));
//* console.log(findArrayIndex(ejemploArray, 'Salamandra'));
//* console.log(findArrayIndex(ejemploArray, 'Cuervo'));
//* console.log(findArrayIndex(ejemploArray, 'Caracol'));


function findArrayIndex(array, text) {
    for (let i in array) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}

function removeItem(array, text) {
    const indexToRemove = findArrayIndex(array, text);

    if (indexToRemove !== -1) {
        array.splice(indexToRemove, 1);
        console.log(`Elemento "${text}" eliminado del array.`);
    } else {
        console.log(`Elemento "${text}" no encontrado en el array.`);
    }

    return array;
}

console.log(removeItem(ejemploArray, 'Mosquito')); 
console.log(removeItem(ejemploArray, 'Ajolote'));
console.log(removeItem(ejemploArray, 'Gato'));
console.log(removeItem(ejemploArray, 'Salamandra'));
console.log(removeItem(ejemploArray, 'Cuervo'));
console.log(removeItem(ejemploArray, 'Caracol'));