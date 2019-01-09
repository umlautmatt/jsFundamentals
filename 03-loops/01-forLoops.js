// FOR LOOPS

for (var i = 0; i < 10; i++) {          //statements or expressions inside parentheses
    console.log(i)
}
//Challenege - Count from 0 to 20 by 2's
for (var i = 0; i < 21; i += 2) {
    console.log(i)
}

//Challenge - using a for loop, count from 10 to 0, going down by 1's
for (var i = 10; i > -1; i--) {
    console.log(i)
}

//Challenge - using a for loop, count from 0, going down by 2's to -24
for (var i = 0; i >= -24; i -= 2) {
    console.log(i)
}

//Challenge - using a for loop, go through a name and display each letter individually
let word1 = "milk";
let word2 = word1.split('');
let wordL = word1.length

for (let x = 0; x < wordL; x += 1) {
    console.log(word2[x])
}

var str = "name";
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i)) //older way - less sleek
}

let str = "name";
for (var i = 0; i < str.length; i++) { //var i = 0....0 refers to first letter of word; str.length refers to length of string
    console.log(str[i])
}

//Challenge - Make a for loop where you add up all the numbers from 1 to 50 (Should equal 1275)
var sum = 0
for (var i = 1; i <= 50; i++) { //every time i is less than 50, the loop will run again
    sum += i
}
    console.log(sum);