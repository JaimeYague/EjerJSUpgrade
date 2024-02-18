//* Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo. *//

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato empanao'},
    {id: 28, name: 'El Sr. Boom'},
    {id: 40, name: 'El gato felix'}
]

//*for (let i of toys){
    //*if (i.name.includes('gato')) {

    //* }
    
//*}

 //*console.log(i);
 

//*/ v.1 profe
const elemEliminar = [];

for (let toy of toys) {
   if (toy.name.includes('gato')) {
      elemEliminar.push(toys.indexOf(toy));
   }
}
elemEliminar.reverse();

for (let index of elemEliminar) {
    toys.splice(index, 1);
}
console.log(toys);

 