/*
Dado el siguiente objeto, crea una copia usando spread operators.
*/


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copiaToy = {...toy};

console.log('original', toy);
console.log('Copia', copiaToy);
