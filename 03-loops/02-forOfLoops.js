var student = { name: "Harry", awesome: true, degree: "JavaScript", week: 1 }
for (item of student) {
    console.log(item)
}
//difference between an array and an object - object has curly braces, array has square braces
//for of loops for arrays - arrays have square braces
//for in loops for objects - objects have curly braces
//for of loops grab value instead of index of variables

var pieArray = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot pie'];
for (pie in pieArray) {
    console.log(pie, 'pie is my favorite'); //will show position (index) of every pie
}

