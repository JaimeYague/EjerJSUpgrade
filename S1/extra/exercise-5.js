//* Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas. *//




const products = [
    {name: 'Gorra de rodilla', sellCount: 10}, 
    {name: 'Pantalón de pana', sellCount: 302}, 
    {name: 'Reloj de papel albal', sellCount: 23}, 
    {name: 'Inpar de zapatos', sellCount: 6}
];

let totalSell = 0;

let totalMedia = 0;

const product = 0;

for (const product of products) {
    totalSell += product.sellCount;
    totalMedia = totalSell / products.length;

}




console.log(totalSell);
console.log(totalMedia);