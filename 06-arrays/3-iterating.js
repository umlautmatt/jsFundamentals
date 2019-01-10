let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
food.forEach(f => {console.log(f); })

food.forEach((food, number) => {console.log(number)
console.log(food)
})

/*
Challenge (Go look at MDN docs to remind you):
Create a list (with an array) of movies
Use .forEach() to list your movies
Add another movie at the end 
And replace one of your existing movies with another one 
*/

let movies = ['Daredevil', 'Hulk', 'Tombstone', 'John Wick']

//movies.forEach(f => {console.log(f); })
movies.push('Backdraft');
movies.splice(3,1);
console.log(movies);
