let i = 0;
while (i < 3) {
    alert( `number ${i++}` ); // shows 0, then 1, then 2
    i++; // this line is not executed, because the loop stops after the first alert, so the value of i is still 0 when the alert is executed.
}