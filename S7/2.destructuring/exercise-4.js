/*
En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.
*/


const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };

const { name, itv } = car;
const [ año1, año2, año3 ] = itv;

console.log(car);
console.log(itv);
console.log(año1);
console.log(año2);
console.log(año3);