function hi(){
    console.log('HI');
    return "Hey";
}

//hi();
console.log(hi);
console.log(hi());

//when a function does not have a return it will print undefined


//Create a function that, when invoked, lists out the numbers from 1 to 10

function list(){
    for (var x = 1; x <= 10; x++) {
        console.log(x);
    }
    return "Done!";
}

list();  //the parentheses invoke the function and everything inside
console.log(list());

//Challenge - Given the array, create a function that lists out the values individually

let arr = ["This", "is", "really", "cool?"]

function ind(){
    for(item of arr){
        console.log(item);
    }
}

ind();