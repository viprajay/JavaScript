// There is a two type of datatypes

// 1. Primitive DataTypes : 7 types -> String, Number, Boolean, null, undefined, symbol, BigInt

// 2. Reference (Non-primitive) : Array, Objects, Functions

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

const arr = ["kfjslfjs", "sdfsdfs", "sfsfs"];

let myObj = {
  name: "Viprajay",
  age: 24,
};

const myFunction1 = function () {
  console.log("hello World");
};

const myFunction2 = function () {
  console.log(Math.pow(7, 3));
};

myFunction();
