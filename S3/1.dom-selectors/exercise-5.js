//* # Español
//* Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const testeo = document.querySelectorAll('[data-function = "testMe"]');


//for (elem of testeo){
//console.log(elem.textContent);
//}


testeo.forEach(elem => {
    console.log(elem);
});



    


