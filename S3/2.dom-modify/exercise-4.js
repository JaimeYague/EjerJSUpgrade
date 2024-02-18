/*
Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
*/

const nuevoDiv = document.createElement('Div');
const nuevoP = document.createElement('p');
nuevoP.textContent = 'Soy dinámico!'

nuevoDiv.appendChild(nuevoP);

document.body.appendChild(nuevoDiv);
