/*
Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>
*/


const baseUrl = 'https://api.nationalize.io?name=';

        document.getElementById('consultarBtn').addEventListener('click', () => {
            const nombreInput = document.getElementById('nombreInput').value.trim();

            if (nombreInput) {
                // Realizar la consulta a la API usando fetch
                fetch(baseUrl + nombreInput)
                    .then(response => response.json())
                    .then(data => {
                        mostrarResultados(data);
                    })
                    .catch(error => {
                        console.error('Error al realizar la consulta:', error);
                    });
            } else {
                alert('Por favor, ingresa un nombre antes de consultar.');
            }
        });

        function mostrarResultados(data) {
            const resultadosContainer = document.getElementById('resultados');
            resultadosContainer.innerHTML = ''; // Limpiar resultados anteriores

            if (data.country && data.probability) {
                const resultadoP = document.createElement('p');
                resultadoP.textContent = `El nombre ingresado tiene una probabilidad del ${data.probability * 100}% de ser de ${data.country[0].country_id}.`;
                resultadosContainer.appendChild(resultadoP);
            } else {
                const sinResultadosP = document.createElement('p');
                sinResultadosP.textContent = 'No se encontraron resultados para el nombre ingresado.';
                resultadosContainer.appendChild(sinResultadosP);
            }
        }

