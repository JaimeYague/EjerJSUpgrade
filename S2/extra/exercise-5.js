//*Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript ``Math.random()`` *///



function rollDice(numFaces) {
    const result = Math.floor(Math.random() * numFaces) + 1;
    return result;
}

//* Dado de 6 caras:
//* const resultadoTirada = rollDice(6); 
//* console.log(`Resultado de la tirada: ${resultadoTirada}`);

//* Dado de 20 caras
const resultadoTirada = rollDice(20); 
console.log(`Resultado de la tirada: ${resultadoTirada}`);

//* Intento de dos dados de 10 caras (decenas y unidades): (pero no me sale :___( )
//* const resultadoDecen = rollDice(10);
//* const resultadoUnid = rollDice(10); 
//* console.log(`Resultado de la tirada: ${resultadoDecen, resultadoUnid}`);