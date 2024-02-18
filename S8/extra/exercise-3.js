/*
De nuevo vamos a usar JSON SERVER para simular nuestra api en local. Ejecuta ``json-server --watch exercise-3.json`` y obtendremos de la url `http://localhost:3000` los datos del ejercicio.

En este caso tenemos 2 endpoints, o lo que es lo mismo, dos urls a las que llamar para recibir los datos.

El endpoint `http://localhost:3000/orders` nos devolverá una lista de pedidos de la tienda Mari & Juan y el endpoint `http://localhost:3000/products` que nos devuelve una lista de productos.

La intención es pintar todos los pedidos ordenados por fecha (ultimos pedidos al principio) y en los que pongamos tanto los productos que contiene el pedido como la cantidad pedida de cada uno de los productos.

Si os fijáis, en el endpoint de los pedidos no tenemos la información del producto, si no su id y cantidad pedida. Para obtener el nombre de los productos tendremos que hacer peticiones al endpoint de productos pasando el id del producto, por ejemplo ``http://localhost:3000/products/2``. De esta forma podremos obtener ya toda la información y pintarla en el html.
*/


/*

const ordersUrl = 'http://localhost:3000/orders';
const productsUrl = 'http://localhost:3000/products';

// Realizar peticion de orders
fetch(ordersUrl)
    .then(response => response.json())
    .then(orders => {
        // Ordenamos por fecha de mayor a menor
        orders.sort ((a, b) => new Date(b.date) - new Date(a.date));

        // Se agarra el contenedor de los pedidos
        const pedidosContainer = document.getElementById('pedidos-container');

        // Iterar sobre los pedidos y crear elementos HTML dinámicamente
        orders.forEach(async pedido => {
        const pedidoDiv = document.createElement('div');
  
        const fechaH3 = document.createElement('h3');
        fechaH3.textContent = `Fecha del pedido: ${pedido.date}`;
  
        // Obtener información sobre los productos asociados al pedido
        const productos = await Promise.all(pedido.products.map(producto => getProductInfo(producto.productId, producto.quantity)));
  
        // Crear elementos HTML para cada producto
        productos.forEach(producto => {
          const productoP = document.createElement('p');
          productoP.textContent = `Producto: ${producto.name}, Cantidad: ${producto.quantity}`;
          pedidoDiv.appendChild(productoP);
        });
  
        // Agregar los elementos al contenedor
        pedidoDiv.appendChild(fechaH3);
        pedidosContainer.appendChild(pedidoDiv);
      });
    })
    .catch(error => console.error('Error al obtener datos de pedidos:', error));
  
  // Función para obtener información sobre un producto dado su id
  async function getProductInfo(productId, quantity) {
    const response = await fetch(`${productsUrl}/${productId}`);
    const producto = await response.json();
    return { name: producto.name, quantity };
  }
*/

const ordersUrl = 'http://localhost:3000/orders';
const productsUrl = 'http://localhost:3000/products';

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

async function renderPedidos() {
  const pedidosContainer = document.getElementById('pedidos-container');
  pedidosContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar

  try {
    // Obtener la lista de pedidos
    const orders = await fetchData(ordersUrl);

    // Ordenar los pedidos por fecha de mayor a menor
    orders.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Iterar sobre los pedidos y renderizar en el contenedor
    orders.forEach(async pedido => {
      const pedidoDiv = document.createElement('div');
      pedidoDiv.classList.add('pedido');

      const fechaH3 = document.createElement('h3');
      fechaH3.textContent = `Fecha del pedido: ${pedido.date}`;

      const productosContainer = document.createElement('div');

      // Obtener información sobre los productos asociados al pedido
      await Promise.all(pedido.products.map(async producto => {
        const productInfo = await fetchData(`${productsUrl}/${producto.productId}`);

        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        const nombreP = document.createElement('p');
        nombreP.textContent = `Producto: ${productInfo.name}, Cantidad: ${producto.quantity}`;

        productoDiv.appendChild(nombreP);
        productosContainer.appendChild(productoDiv);
      }));

      // Agregar los elementos al contenedor del pedido
      pedidoDiv.appendChild(fechaH3);
      pedidoDiv.appendChild(productosContainer);
      pedidosContainer.appendChild(pedidoDiv);
    });
  } catch (error) {
    console.error('Error al obtener datos de pedidos:', error);
  }
}

// Renderizar los pedidos al cargar la página
document.addEventListener('DOMContentLoaded', renderPedidos);


  