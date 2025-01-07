// function in details - javascript
// types of functions in javascript
// 1. Function Declaration
// 2. Function Expression
// 3. anonymous function
// 4. arrow function
// 5. IIFE (Immediately Invoked Function Expression)

// Function Declaration
// function add(a, b) {
//   // a and b are formal parameters or arguments
//   return a + b;
// }
// console.log(add(2, 3)); // Output: 5 // 2 and 3 are actual parameters or arguments

// Function Expression
// we assign a function to a variable
console.log(add(2, 3)); // Output: 5

const add = function (a, b) {
  return a + b;
};

// hoisting
// hoisting means that you can call a function before it is declared

// Anonymous Function
// An anonymous function is a function without a name.
// It is usually defined using a function expression.
// Example:
// function (a, b) {
//   return a - b;
// };
