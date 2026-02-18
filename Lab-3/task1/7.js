//task1 store "unread" flags
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
messages[0].read = true;
alert(messages[0].read); // true
//task2 store read dates
let messages2 = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
messages2[0].read = new WeakMap();
readMap.set(messages2[0], new Date(2017, 1, 1));
