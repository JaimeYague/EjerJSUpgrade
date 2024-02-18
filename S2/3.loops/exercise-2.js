//* Usa un for in para imprimir por consola los datos del alienigena. *//

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (i in alien){
    console.log(i + ': ' +alien[i]);
}