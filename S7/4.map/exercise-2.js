/*
Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
*/

const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const nombres = users.map(user => {
    if (user.name.startsWith('A')) {
        return { ...user, name: 'Anacleto '};
    }
    else {
        return {...user };
    }
});

console.log(nombres);


/* 
const nombres = users.map(user => {
    if (/^A/i.test(user.name)) {
        return { ...user, name: 'Anacleto' };
    } else {
        return { ...user };
    }
});

// Imprimir el nuevo array por consola
console.log(nombres);
*/

