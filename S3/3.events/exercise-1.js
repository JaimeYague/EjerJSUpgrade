/*
Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="exercise-1.js" defer></script>
    <title>Document</title>
</head>
<body>
</body>
</html>
*/


const btnToClick = document.getElementById('btnToClick');


btnToClick.addEventListener('click', (event) => console.log('Evento de clic:', event));
