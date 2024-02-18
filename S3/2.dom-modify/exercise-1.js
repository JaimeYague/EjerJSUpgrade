/*
Inserta dinamicamente en un html un div vacio con javascript.
*/

  // Crear un nuevo elemento div
  const nuevoDiv = document.createElement("div");

  // Asignar un ID al nuevo div (opcional)
  nuevoDiv.id = "miNuevoDiv";

  // Añadir texto al div (opcional)
  nuevoDiv.textContent = "¡Hola, soy un div creado dinámicamente con JavaScript!";


  // Añadir el nuevo div al cuerpo del documento (o a cualquier otro elemento deseado)
  document.body.appendChild(nuevoDiv);