// const tinderUser = new Object();  ==> Singleton Object

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Ronny";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@email.com",
  fullName: {
    firstName: "Rohit",
    lastName: "Kumar",
  },
};

// console.log(regularUser.fullName.firstName);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = { obj1, obj2 };

const obj3 = Object.assign({}, obj1, obj2);

// {} --> it will ensure the dtype of the assigned object

// {} -- > empty object ==> target object
// obj1, obj2 --> target objects for assigning

// console.log(obj3);

// Spread operator ==> ...

const obj4 = { ...obj1, ...obj2 };

// console.log(obj4);

// Array of objects

const users = [
  {
    id: 1,
    name: "Rohit",
  },
  {
    id: 2,
    name: "Ajay",
  },
];

// console.log(users[0].name);

// to get all the keys

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// 1st value -- key   2nd value -- value

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
