/*
Con este codigo se eliminan los elementos del json

*/

/*
// Configurar la URL del servidor JSON simulado
const apiUrl = 'http://localhost:3000/diary';

// Realizar la petición a la API usando fetch
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Ordenar las notas por fecha de menor a mayor
    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Obtener el contenedor donde se mostrarán las notas
    const diarioContainer = document.getElementById('diario-container');

    // Iterar sobre las notas y crear elementos HTML dinámicamente
    data.forEach(nota => {
      const notaDiv = document.createElement('div');

      const tituloH3 = document.createElement('h3');
      tituloH3.textContent = nota.title;

      const fechaH5 = document.createElement('h5');
      fechaH5.textContent = nota.date;

      const descripcionP = document.createElement('p');
      descripcionP.textContent = nota.description;

      const eliminarBtn = document.createElement('button');
      eliminarBtn.textContent = 'Eliminar';
      eliminarBtn.addEventListener('click', () => eliminarNota(nota.id));

      // Agregar los elementos al contenedor
      notaDiv.appendChild(tituloH3);
      notaDiv.appendChild(fechaH5);
      notaDiv.appendChild(descripcionP);
      notaDiv.appendChild(eliminarBtn);

      diarioContainer.appendChild(notaDiv);
    });
  })
  .catch(error => console.error('Error al obtener datos del diario:', error));

// Función para eliminar una nota
function eliminarNota(notaId) {
  // Realizar la petición para eliminar la nota con el ID proporcionado
  fetch(`${apiUrl}/${notaId}`, {
    method: 'DELETE',
  })
  .then(response => {
    if (response.ok) {
      console.log('Nota eliminada correctamente.');
      
      // Puedes recargar la página o realizar otras acciones después de eliminar la nota.
    } else {
      console.error('Error al eliminar la nota.');
    }
  })
  .catch(error => console.error('Error al enviar la solicitud de eliminación:', error));
}

*/

// Configurar la URL del servidor JSON simulado
const apiUrl = 'http://localhost:3000/diary';

// Realizar la petición a la API usando fetch
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Ordenar las notas por fecha de menor a mayor
    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Obtener el contenedor donde se mostrarán las notas
    const diarioContainer = document.getElementById('diario-container');

    // Iterar sobre las notas y crear elementos HTML dinámicamente
    data.forEach(nota => {
      const notaDiv = document.createElement('div');

      const tituloH3 = document.createElement('h3');
      tituloH3.textContent = nota.title;

      const fechaH5 = document.createElement('h5');
      fechaH5.textContent = nota.date;

      const descripcionP = document.createElement('p');
      descripcionP.textContent = nota.description;

      const eliminarBtn = document.createElement('button');
      eliminarBtn.textContent = 'Eliminar';
      eliminarBtn.addEventListener('click', () => eliminarNota(notaDiv));

      // Agregar los elementos al contenedor
      notaDiv.appendChild(tituloH3);
      notaDiv.appendChild(fechaH5);
      notaDiv.appendChild(descripcionP);
      notaDiv.appendChild(eliminarBtn);

      diarioContainer.appendChild(notaDiv);
    });
  })
  .catch(error => console.error('Error al obtener datos del diario:', error));

// Función para eliminar una nota
function eliminarNota(notaDiv) {
  // Eliminar la nota visualmente
  notaDiv.remove();
}