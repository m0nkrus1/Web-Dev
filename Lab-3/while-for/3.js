for (let i = 0; i < 5; i++) alert( i );
// shows from 0 to 4
for (let i = 0; i < 5; ++i) alert( i );
// shows from 0 to 4, because the increment happens after the alert, so the value of i is still 0 when the alert is executed.