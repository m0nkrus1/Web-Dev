let num;

do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num); // the loop continues until the user enters a number greater than 100 or cancels the prompt (which results in null, a falsy value).
