//nickname: FAT ARROW FUNCTIONS

function coffee() {
    console.log('coffee is life!');
}
    // => does not mean greater than
let coffee = () => {
    console.log('coffee is cool');
}

var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`);
}
cats(1, 35)


let fatArrows = (x) => {console.log(x);} //curly braces not required

fatArrows("This is a function, nothing to see");//function name in this line calls function in line above


let namingMachine = (fname, lname) => (fname, lname);

console.log(namingMachine('Tom', 'Hiddleston'));

//Challenge - create two functions, 
//first - take a string paramater, and capitalize it; return that string;
//second - string as a paramater, and then lowercase
//console.log result
//Take the return from the first, and then pass it into the second function.

let score = "Winner";
function upperCase(big){
    return big.toUpperCase();
}

function lowerCase(small) {
    return small.toLowerCase();
}

//console.log(upperCase(score));
//console.log(lowerCase(score));

console.log(lowerCase(upperCase(score)));