var a = 1;

var     b      =      1; 
/*(1)    (2)    (3)    (4)     
1- Keyword
2- Variable name 
3- Assignment Operator
4- Variable value
*/
console.log(a + b);

/*notes on variables:
//1)  A variable name must begin with a letter, underscore, or dollar sign
//2)  Numbers may follow the above characters, but cannot come first
//3)  JavaScript is case sensitive-- 'hello' and 'HeLlo' are different variables
//4)  No spaces are allowed in variable names
//5)  camelCase is the best practice for naming variables. 
This is good practice because it helps keep variables readable--  var myName = 'Autumn'; 
*/

/***********
DECLARATIONS
***********/

/*
Declarations are the LEFT SIDE of a variable
  It is simply the var x
  It is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
  It sets the value of the variable
  It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/
//undefined below - no value set for var
var x;
console.log(x)

var x;
console.log('Declaration:', x); //Declaration: undefined

x = 10;
console.log('Initialization 1:', x); // Initialization 1: 10

x = 33;
console.log('Initialization 2:', x); // Initialization 2: 33

var y = 'Hello';
console.log('Both:',x, y); // Both: 33 hello

/*
var can also be used as: let and const
const keeps the var the same
*/
let today = 'Great!';
const elevenFifty = 'Wonderful';
console.log(today, elevenFifty)

today = 'Lovely!';
console.log(today, elevenFifty)
