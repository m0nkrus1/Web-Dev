function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
// The function can be simplified to:
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}
