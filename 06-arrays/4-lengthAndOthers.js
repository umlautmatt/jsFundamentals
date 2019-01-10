let long = [1,2,3,4,5,6,7,8,9,10];

console.log(long.length)//"length" starts at 1

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']

console.log(colors.length)
// console.log(colors.toString())//prints colors to a string
// colors.forEach( f => {console.log(f)})//prints colors to list



//console.log( colors instanceof Array)
if (colors instanceof Array === true) {
    let revArr = colors.reverse()
    revArr.forEach(a => console.log(a))
  }

