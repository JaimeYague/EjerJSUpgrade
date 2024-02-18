/*
Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
*/

const pokem = document.querySelectorAll('.pokemon');



for (const poke of pokem) {
    console.log(poke);
}

// con forEach: 

//* pokem.forEach(elemento => {
    //* console.log(elemento);
//* });
