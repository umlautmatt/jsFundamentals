//If Else Statements

let money = false
if (money) {
    console.log('Starbucks')
} else {// catch-all, aka safety net....lets me know if the condition above is false
    console.log('Make coffee')
}



let weather = 75

if (weather < 70) {
    console.log('Wear a jacket')
} else {
    console.log('No jacket necessary')
}



let Matt = true 
if (Matt) {
    console.log('Hello, my name is Matt')
} else {
    console.log('What is your name?')
}

let myName = 'Matt'
if (myName) {
    console.log('Hello, my name is Matt')    
} else {
    console.log('Hello, what is your name?')
}

let str = 'SebAstian'
if (str[0] === str[0].toUpperCase()) {
  let firstLetter = str[0] + str.slice(1).toLowerCase()
  console.log(firstLetter)
} else {
  let otherLetters = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  console.log(otherLetters)
}
let newStr = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
console.log(newStr)

//Else If Statements

let weather = 40
if (weather > 70) {
    console.log('Wear a t-shirt')
} else if (weather <= 70 && weather > 50) {

}else {
    console.log('Stay inside')
}

let age = 30
let young = 'Sorry, you\'r too young to do anything'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! You can rent a car!'
if (age >= 25) {
    console.log(rent, drink, vote)
} else if (age >= 21) {
    console.log(drink, vote)
} else if (age >= 18) {
    console.log(vote)
} else {
    console.log(young)
}

let age = 30
let young = 'Sorry, you\'r too young to do anything'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! You can rent a car!'
if (age >= 0 && age <= 120)
if (age >= 25) {
    console.log(rent, drink, vote)
} else if (age >= 21) {
    console.log(drink, vote)
} else if (age >= 18) {
    console.log(vote)
} else {
    console.log(young)
}