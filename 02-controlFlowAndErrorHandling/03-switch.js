// Switch Case

let friend = 'Matt';

switch (friend) {
    case 'Zach':
      console.log('Lets go play ultimate!')
      break;
    case 'Ing':
      console.log('So are you taking me to Belgium?')
      break;
    case 'Adam':
      console.log('I probably have baby stuff for you to borrow.')
      break;
    default:
        console.log(`You, ${friend}, are not my friend.`)
      
}

let dessert = 'cheesecake'

switch (dessert.toLowerCase()) {
    case 'pie':
    console.log('Pie, pie, me oh my!')
    break;
    case 'cake':
    console.log('Cake is great!')
    break;
    case 'ice cream':
    console.log('I scream for ice cream!')
    break;
    default:
        console.log('Not on the menu.')
}

let range = -8

switch (true) {
    case (range < 0 && range > -10)
        console.log('worked')
        break;
    case range >= 0 || range <= -10:
    console.log('also worked')
    default:
        break;
}