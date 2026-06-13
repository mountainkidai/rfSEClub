# JavaScript Hoisting

**Hoisting** is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase, before the code runs. This means you can use some variables and functions before actually declaring them — but with some important rules.

## Key Concepts and Syntax

### 1. Variable Hoisting with `var`

Variables declared using `var` are hoisted and initialized with `undefined`.

```js
console.log(x); // undefined
var x = 5;
```

Even though `x` is used before the line `var x = 5;`, JavaScript hoists the declaration (but not the value):

```js
// Behind the scenes:
var x;
console.log(x); // undefined
x = 5;
```

### 2. `let` and `const` Are Hoisted Too (but not accessible before declaration)

Variables declared with `let` and `const` are hoisted but **not initialized**. Accessing them before their declaration causes a **ReferenceError**.

```js
console.log(a); // ReferenceError
let a = 10;
```

#### What is a ReferenceError?

A **ReferenceError** occurs when you try to use a variable that hasn’t been declared *or* is in a state where it can't be accessed yet. It means JavaScript doesn’t know what value you're referring to.

### 3. Function Declarations Are Hoisted

Entire function declarations are hoisted, so you can call them before they are defined in the code.

```js
sayHello(); // Output: Hello

function sayHello() {
  console.log("Hello");
}
```

### 4. Function Expressions Are Not Hoisted the Same Way

If you assign a function to a variable (function expression), only the variable is hoisted, not the function value.

```js
greet(); // TypeError: greet is not a function

var greet = function() {
  console.log("Hi");
};
```

This is because `greet` is hoisted and set to `undefined`, so calling it before assignment results in an error.

## Problems

1. Demonstrate variable hoisting with var
2. Demonstrate that let and const are hoisted but not accessible before declaration
3. Demonstrate function declaration hoisting
4. Demonstrate that function expressions are not hoisted the same way
5. Create a variable with var and try to access it before declaration
6. Create a variable with let and try to access it before declaration
7. Create a function declaration and call it before its definition
8. Create a function expression and try to call it before assignment
9. Demonstrate the difference between var and let hoisting
10. Create nested functions and demonstrate hoisting behavior
