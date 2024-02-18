//* Elimina el último elemento del array y muestra el primero y el último por consola. *//



const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

RickAndMortyCharacters.pop();
const ultimoElemento = RickAndMortyCharacters[RickAndMortyCharacters.length - 1];
console.log('El primer elemento es: ' + RickAndMortyCharacters[0]);
console.log('El ultimo elemento es: ' + ultimoElemento);


//* OTRO METODO *//

//* const ultimoElemento = RickAndMortyCharacters.pop();
//* console.log('El primer elemento es: ' + RickAndMortyCharacters[0]); *//
//* console.log('El ultimo elemento es: ' + RickAndMortyCharacters.pop()); *//
