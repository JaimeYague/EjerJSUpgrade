// Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (country of countries) {
    const div = document.createElement("div");
   
    const h4 = document.createElement("h4");
    h4.textContent = country.title;
   
    const img = document.createElement("img");
    img.src = country.imgUrl;
   
    div.appendChild(h4);
    div.appendChild(img);
   
    document.body.appendChild(div);
  }

  function deleteLastCountry() {
    const children = document.body.children;
    if (children.length > 1) {
        document.body.removeChild(children[children.length - 1]);
    }
}


document.getElementById('deleteButton').addEventListener('click', deleteLastCountry);

