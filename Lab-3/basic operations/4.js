// Here’s a code that asks the user for two numbers and shows their sum.

// It works incorrectly. The output in the example below is 12 (for default prompt values).

// Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

// The problem is that the prompt function returns a string, so the + operator concatenates the two strings instead of adding them as numbers. To fix this, we can convert the input values to numbers using the unary plus operator:

let ab = +prompt("First number?", 1);
let ba = +prompt("Second number?", 2);

alert(ab + ba); // 3

let ac= prompt("First number?", 1);
let bc = prompt("Second number?", 2);

alert(Number(ac) + Number(bc));  // 3

