// explanation of callback,callback hell, promises, async await, fetch api, axios, jquery ajax, axios vs fetch, jquery ajax vs axios, async await vs promises vs callback hell
//callback - function that is passed as an argument to another function

// callback hell - when we have multiple nested callbacks
// promises - object that represents the eventual completion or failure of an asynchronous operation
// async await - used to handle promises
// fetch api - used to make network requests
// axios - promise based http client
// jquery ajax - used to make network requests
// axios vs fetch - axios is promise based, fetch is not
// jquery ajax vs axios - jquery ajax is not promise based, axios is promise based and has more features
// async await vs promises vs callback hell - async await is used to handle promises, promises are used to handle async operations, callback hell is when we have multiple nested callbacks

//callback - function that is passed as an argument to another function
//example

const add = function (a, b) {
  return a + b
};

const calculator = function (a, b, callback_function)  {
  callback_function(a, b)
};

calculator(2, 3, add); // 5

//callback hell - when we have multiple nested callbacks
//example

const sub = function (a, b) {
  return a + b
}

const multiply = function (a, b) {
  return a * b
}

const cal = function (a, b, callback_function) {
  callback_function(a, b)
}

cal(2, 3, function (result1, result2) {
  cal(result1, result2, function (result1, result2) {
    console.log(result1, result2)
  })
}

//output: 5 6
