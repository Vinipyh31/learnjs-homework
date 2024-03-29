'use strict'

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

const byField = (fieldName) => (a, b) => a[fieldName] > b[fieldName] ? 1 : -1


console.log(users);
users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));
console.log(users);