//task1 sum the properties
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}
//task2 count the properties
function count(obj) {
    return Object.keys(obj).length;
}

