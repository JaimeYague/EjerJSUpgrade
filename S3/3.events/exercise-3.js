/*
Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <input type="text"/>
</body>
</html>
```
*/

// Obtén el elemento input por su ID
const input1 = document.getElementById('input1');

// Añade un evento 'input' con una función de flecha
input1.addEventListener('input', () => console.log('Valor:', input1.value));
