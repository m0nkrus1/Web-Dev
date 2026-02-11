//task1 translate border-left-width to borderLeftWidth
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}
alert( camelize("background-color") ); // backgroundColor
alert( camelize("list-style-image") ); // listStyleImage
alert( camelize("-webkit-transition") ); // WebkitTransition   
//task2 Filter range
function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)
//task3 Filter range "in place"
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr1 = [5, 3, 8, 1];
filterRangeInPlace(arr1, 1, 4);
alert( arr1 ); // 3,1
//task4 Sort in decreasing order
let arr2 = [5, 3, 8, 1];
arr2.sort((a, b) => b - a);
alert( arr2 );
//task5 sort in decreasing order
let arr3 = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10
//task6 copy and sort array
let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = arr.slice().sort();
alert( sorted ); // CSS, HTML, JavaScript
alert( arr );
//task7 Create an extendable calculator
function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };  
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
alert( powerCalc.calculate("2 * 3") ); // 6
alert( powerCalc.calculate("2 / 3") ); // 0.6666666666666666
alert( powerCalc.calculate("2 ** 3") ); // 8
//task8 Map to names
let vasya = { name: "John", age: 25 };
let petya = { name: "Pete", age: 30 };
let masha = { name: "Masha", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
alert( names ); // John, Pete, Masha
//task9 Map to objects
let vasya1 = { name: "John", surname: "Smith", id: 1 };
let petya1 = { name: "Pete", surname: "Ivanov", id: 2 };
let masha1 = { name: "Masha", surname: "Petrova", id: 3 };
let users1 = [ vasya1, petya1, masha1 ];
let usersMapped = users1.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith
//task10 Sort users by age
let vasya2 = { name: "John", age: 25 };
let petya2 = { name: "Pete", age: 30 };
let masha2 = { name: "Masha", age: 28 };
let arr5 = [ vasya2, petya2, masha2 ];
arr5.sort((a, b) => a.age - b.age);
alert( arr5[0].name ); // John
//task11 Shuffle an array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let arr6 = [1, 2, 3];
shuffle(arr6);
alert( arr6 );
//task12 Get average age
let vasya3 = { name: "John", age: 25 };
let petya3 = { name: "Pete", age: 30 };
let masha3 = { name: "Masha", age: 29 };
let arr7 = [ vasya3, petya3, masha3 ];
function getAverageAge(users) {
    'use strict';
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
alert( getAverageAge(arr7) ); // 28
//task13 Filter unique array members
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
alert( unique(strings) ); // Hare, Krishna, :-O

