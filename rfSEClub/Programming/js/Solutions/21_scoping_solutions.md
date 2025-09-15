## Create a function with a local variable and try to access it outside

```js
function showMessage(){
    let message = "Hello, this is a local variable!";
  console.log("Inside function:", message);
}
showMessage();
console.log("Outside function:", message);
```

## Create a block with let/const variables and try to access them outside

```js
{
  let a = 10;
  const b = 20;
  console.log("Inside block: a =", a); 
  console.log("Inside block: b =", b); 
}

console.log("Outside block: a =", a); 
console.log("Outside block: b =", b);
```

## Create nested functions and access variables from outer scope

```js
function outerFunction() {
  const outerVar = "I'm from outerFunction";

  function innerFunction() {
    const innerVar = "I'm from innerFunction";
    console.log(outerVar); 
    console.log(innerVar); 
  }

  innerFunction();
 console.log(innerVar);
}

outerFunction();
```

## Create a function that returns another function with access to outer variables

```js
function outerFunction(name) {
  const greeting = "Hello";

  return function innerFunction() {
    console.log(`${greeting}, ${name}!`);
  };
}
const greet = outerFunction("john doe");
greet();
```

## Demonstrate the difference between var and let/const scoping

```js
function testLetConst() {
  if (true) {
    let y = 20;
    const z = 30;
  }
  console.log(y); 
  console.log(z); 
}

testLetConst();
```

## Create a function with parameters and access them inside the function

```js
function greet(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
```

## Call the function

```js
greet("John Doe", 27);
```

## Create a global variable and access it from inside a function

```js
let global = "Hello John";
function globalFuncion(){
    console.log(global);
}
globalFuncion();
```

## Create a function that declares a variable with the same name as a global variable

```js
let message = "Hello from the global scope";

function showMessage() {
  let message = "Hello from inside the function";
  console.log(message); 
}

showMessage();
console.log(message);
```

## Create nested blocks and demonstrate block scoping

```js
{
  let outer = "I'm in the outer block";
  const outerConst = "Outer const value";

  console.log(outer);       
  console.log(outerConst);  

  {
    let inner = "I'm in the inner block";
    const innerConst = "Inner const value";

    console.log(outer);     
    console.log(inner);     
    console.log(innerConst); 
  }

  
}

try {
  console.log(outer);      
  console.log(outerConst);  
} catch (err) {
  console.error("Error:", err.message);
}
```
