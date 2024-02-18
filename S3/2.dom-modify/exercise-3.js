/*
Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
*/

const nuevoDiv = document.createElement('div');
for (let i = 1; i <= 6; i++) {
    const nuevoP = document.createElement('p');

    nuevoP.textContent = `probando texto ${i}`;

    nuevoDiv.appendChild(nuevoP);

    document.body.appendChild(nuevoDiv);

}