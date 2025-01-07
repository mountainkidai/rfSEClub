// build a calculator using function declarations and control statements - if else -->
// 2. build a calculator using function expression and control statements - if else
// 3. build a calculator using function declarations and callback function
// 4. build a calculator using function expression and callback function
// 5. build a calculator using function expression and callback function with anonymous function as parameter
// 6. build a calculator using arrow function and callback function with anonymous function as parameter

//1 build a calculator using function declarations and control statements - if else

const add = function (a, b) {
  return a + b;
};

const cal = function (a, b, callback_function) {
  return callback_function(a, b);
};

let result = cal(10, 20, add);
console.log("result is", result);
