//task1 turn the object into JSON and back
let user = {
    name: "John",
    age: 30
};
let json = JSON.stringify(user);
alert(json);
let user2 = JSON.parse(json);
alert(user2.name);
alert(user2.age);
//task2 exclude backreferences
let room = {
    number: 23
};
let meetup = {
    title: "Conference",   
    participants: ["John", "Alice"],
    place: room
};
room.occupiedBy = meetup;
alert( JSON.stringify(meetup) );   
