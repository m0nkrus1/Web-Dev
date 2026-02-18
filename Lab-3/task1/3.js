//task1 Uppercase the first character
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
alert( ucFirst("john") ); // John
//task2 Check for spam
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
alert( checkSpam('buy ViAgRA now') ); // true
alert( checkSpam('free xxxxx') ); // true
alert( checkSpam("innocent rabbit") ); // false
//task3 Truncate the text
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
} 
//task4 Extract the money
function extractCurrencyValue(str) {
    return +str.slice(1);
}

