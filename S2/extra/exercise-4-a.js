//* Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//* Haz varios ejemplos y compruebalos.

//*Sugerencia de función:




const ejemploArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(findArrayIndex(ejemploArray, 'Mosquito')); 
console.log(findArrayIndex(ejemploArray, 'Ajolote'));
console.log(findArrayIndex(ejemploArray, 'Gato'));
console.log(findArrayIndex(ejemploArray, 'Salamandra'));
console.log(findArrayIndex(ejemploArray, 'Cuervo'));
console.log(findArrayIndex(ejemploArray, 'Caracol'));


function findArrayIndex(array, text) {
    for (let i in array) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}