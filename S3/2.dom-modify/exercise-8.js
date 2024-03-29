/*
Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div></div>
   <div></div>
</body>
</html>```

*/


const newP = document.createElement('p');
newP.textContent = 'Voy en medio!';


const divs = document.querySelectorAll('div');


const primerDiv = divs[0];

// Insertar el nuevo párrafo antes del segundo div

primerDiv.parentNode.insertBefore(newP, divs[1]);
