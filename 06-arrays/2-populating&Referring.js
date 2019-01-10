let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for (f in food){
    console.log(food[f])
}

food.push('Pizza');//pushes item to the end of the array

food.splice(1, 0, 'Bananas');//splices an array, and can insert new items
//console.log(food);

food.splice(4,1);//removes item from array
//console.log(food);
food.pop();//removes item from the end
console.log(food);
