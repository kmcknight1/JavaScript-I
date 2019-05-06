// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () => {
  return "Function was invoked!";
};

console.log(myFunction());

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunction = param => {
  return param;
};

console.log(anotherFunction("Exapmle"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const add = (x, y) => {
  return x + y;
};

console.log(add(1, 2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subtract = (x, y) => {
  return x - y;
};

console.log(subtract(1, 2));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

exampleArray = [1, 2, 3, 4];

const triple = exampleArray.map(num => num * 3);

console.log(triple);
