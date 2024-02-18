/*
Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.
*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const lista = document.createElement('ul');
apps.forEach(app => {
    const elemLista = document.createElement('li');
    elemLista.textContent = app;
    lista.appendChild(elemLista);

    document.body.appendChild(elemLista);
});


