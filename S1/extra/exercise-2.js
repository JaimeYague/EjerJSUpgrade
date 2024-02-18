//* Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. *//

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];

const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false}, 
    {name: "Tofu", isVegan: true}, 
    {name: "Burger", isVegan: false}, 
    {name: "Rice", isVegan: true}, 
    {name: "Pasta", isVegan: true}
];

let fruitChoice = 0;

for (let i = 0; i < foodSchedule.length; i++) {

    const food = foodSchedule[i];
    const foodVegan = food.isVegan;


    console.log(food, foodVegan);


    if (!foodVegan) {
        console.log(`${food.name} no es vegano`);
        food.name = fruits[fruitChoice];
        food.isVegan = true;
        fruitChoice++;
    }
}
console.log(foodSchedule);