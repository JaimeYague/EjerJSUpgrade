//* Usa un bucle para recorrer el array de peliculas (`movies`) y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) y al array `badProducts` los que tengan menos. *//



const goodProducts = [];
const badProducts = [];
const products = [
    {name: 'Gorra de rodilla', sellCount: 10}, 
    {name: 'Pantalón de pana', sellCount: 302}, 
    {name: 'Reloj de papel albal', sellCount: 23}, 
    {name: 'Inpar de zapatos', sellCount: 6} 
];


for (const movies of products) {
    if ( movies.sellCount > 20) {
        goodProducts.push(movies);
    }
}

for (const movies of products) {
    if ( movies.sellCount < 20) {
        badProducts.push(movies);
    }
}

console.log('Estas peliculas tienen mas de 20 ventas:', goodProducts);
console.log('Estas peliculas tienen menos de 20 ventas:', badProducts);

