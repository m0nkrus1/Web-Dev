let a = +prompt("Enter a first number", 0);
let b = +prompt("Enter a second number", 0);
alert(a + b);

//task2 Why is 6.35 rounded to 6.3, not 6.4?
alert( 6.35.toFixed(1) ); // 6.3
alert( 6.35.toFixed(20) ); // 6.35000000000000008882
alert( (6.35 * 10).toFixed(20) ); 
//task3 Repeat until the input is a number
function readNumber() {
    let num;
    do {
        num = prompt("Enter a number", 0);
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
    return +num;
    }
alert(`Read: ${readNumber()}`);

//task4.An occasional infinite loop. 
let i = 0;
while (i != 10) {
    i += 0.2;
}
// That’s because i would never equal 10.
//task5. A random number from min to max
function random(min, max) {
    return min + Math.random() * (max - min);
}
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
//task6. A random integer from min to max
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );  
//task1 Uppercase the first character
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
alert( ucFirst("john") ); // John

