function User(name) {
  this.name = name;
}

let user = new User('Pavel');
let user2 = new user.constructor('Ivan');

alert( user2.name );