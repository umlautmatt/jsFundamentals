var student = { name: "Harry", awesome: true, degree: "JavaScript", week: 1 }

for (item in student) {
    //console.log(item);
    console.log(student[item])
}

var pieArray = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot pie'];
for (pie in pieArray) {
    console.log(pie); //will show position (index) of every pie
}

//Challenge - write a for in loop that capitalizes the first leter of a student's name

let studentName = 'Harry';
var capName;
for (let n in studentName) { //n could be any letter or word that will be used to designate the first letter (0) in studentName
    if (n == 0) {
        capName = studentName[n].toUpperCase();
    } else {
        capName += studentName[n].toLowerCase();
    }
}
console.log(capName);
