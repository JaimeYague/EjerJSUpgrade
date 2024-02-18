/*
Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
*/


const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countries) {
    const countryDiv = document.createElement("div");
    const h4 = document.createElement("h4");
    h4.textContent = country.title;
    const img = document.createElement("img");
    img.src = country.imgUrl;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";

    
    deleteButton.addEventListener('click', function() {
    document.body.removeChild(countryDiv);
    });

    countryDiv.appendChild(h4);
    countryDiv.appendChild(img);
    countryDiv.appendChild(deleteButton);
    document.body.appendChild(countryDiv);
}


function deleteLastCountry() {
    const children = document.body.children;
    if (children.length > 1) {
    document.body.removeChild(children[children.length - 1]);
    }
}


document.getElementById('deleteButton').addEventListener('click', deleteLastCountry);