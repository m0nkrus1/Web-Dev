//task1 Is array copied?
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
alert( fruits.length ); // 4
//task2 Array operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
alert( styles[Math.floor((styles.length - 1) / 2)] ) = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Reggae");
//task3 Sum input numbers
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("A number please?", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert( sumInput() );
//task4 maximal subarray

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([2, -1, 2, 3, -9]) ); // 6
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3 
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
