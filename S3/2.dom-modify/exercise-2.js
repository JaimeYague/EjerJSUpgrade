/*
 Inserta dinamicamente en un html un div que contenga una p con javascript.
*/

const div = document.createElement('div');
const p = document.createElement('p');

p.textContent = 'Texto para p';

div.appendChild(p);

div.id = 'newDiv';

document.body.appendChild(div);


