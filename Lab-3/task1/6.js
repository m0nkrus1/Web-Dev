//task1 filter unique array members
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }   
    return result;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
alert( unique(strings) ); // Hare, Krishna, :-O
//task2 create anagrams
function aclean(arr) {
    let map = new Map();   
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }  
    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "PAN", "hectares", "era" (or in other order)
//task3 iterable keys
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
alert( keys ); // name, more   
