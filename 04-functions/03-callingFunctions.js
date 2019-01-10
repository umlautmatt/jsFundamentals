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

/*
Functions 
******************
A chunk of code that performs a set action when called, or 'invoked'.

function  hi()   {
  (1)      (2)  (3)
  console.log('HI')
}
1- Keyword 
2- Name of the function, and parenthesis for parameter
3- Curly Brace, where the opperations of our function happens


EXPRESSIONS
****************
var hey = function hi() {
  (1)
  console.log('HI')
}

1- The variable 'hey' is now representative of the function 'hi()'


CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function


PARAMETERS
***********************

function hi(name){
            (1)
  console.log(`Hi ${name}`)
                    (2)
}

hi('Autumn');
      (3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be


FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Consice
*********************
let hi = () => console.log('hi');


Block Body
*********************
let hi = () => {
  console.log('hi')
}


let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return