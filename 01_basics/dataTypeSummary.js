// Type of dataTypes

// 1. Primitive DataTypes

// 7 Types :
// String, Number, Boolean, null, undefined, Symbol, BigInt

let score = 100;
const consScore = 100.9;

const isLoggedIn = true;
const outsideTemp = null;

let userEmail;

const id1 = Symbol("123");
const id2 = Symbol("123");

// console.log(id1 === id2);

const bigNumber = 12345977886787n;

// console.log(typeof bigNumber);

// 2. Non - Primitive DataTypes / Reference DataType

// Array, Objects, Functions --- > typeOf will be object

const heros = ["shaktiman", "nagraj", "doga"];

let obj = {
  name: "Rohit",
  age: 26,
};

let myFunction = function () {
  console.log("Hello World");
};

// myFunction();

console.log(typeof myFunction);

// ECMA Script Standard
// https://262.ecma-international.org/5.1/#sec-11.4.3
