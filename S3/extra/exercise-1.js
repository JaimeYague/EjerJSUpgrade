/*
Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];


const ulElement = document.createElement('ul');


countries.forEach(country => {
    
    const liElement = document.createElement('li');

    
    liElement.textContent = country;

    
    ulElement.appendChild(liElement);
});


document.body.appendChild(ulElement);
