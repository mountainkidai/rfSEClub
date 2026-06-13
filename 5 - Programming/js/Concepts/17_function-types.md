# JavaScript Function Types

A **function** is a reusable block of code that performs a specific task. Instead of repeating code, you can wrap it inside a function and call it whenever needed.

Real-world analogy: Think of a function as a mixer grinder. You give it input (ingredients), it performs an action (grinding), and returns output (paste or juice).

## Parts of a Function

When you look at a function, you often see `()` and `{}`. Here's what they mean:

- `()` — Parentheses: These are used to list **parameters** (placeholders for input values). If there are no inputs, you still write `()`.

  - Example: `function greet()` — this means the function takes no input.
  - Example: `function greet(name)` — this means the function takes one input called `name`.

- `{}` — Curly Braces: These hold the **function body**, which is the code that runs when the function is called.

  - Everything between the braces is part of the function.

Example:

```js
function greet(name) {        // 'name' is the input
  console.log("Hello, " + name);  // this is the body of the function
}
```

Now let’s explore different ways to write functions.

## Key Concepts and Syntax

### 1. Regular (Named) Functions

This is the most common and traditional way to define a function. It has a name and can be called anywhere in the code (if declared using `function`).

```js
function greet() {
  console.log("Hello!");
}

greet(); // Output: Hello!
```

You can also pass values to functions:

```js
function greetUser(name) {
  console.log("Hello, " + name);
}

greetUser("Priya"); // Output: Hello, Priya
```

### 2. Function Expressions

Here, the function is stored in a variable. The function can be **named** or **anonymous** (without a name).

```js
const sayHi = function() {
  console.log("Hi!");
};

sayHi(); // Output: Hi!
```

Even though it's stored in a variable, you can call it just like a regular function.

### 3. Anonymous Functions

**Anonymous functions** are functions without a name. They are usually used when you don't need to refer to the function again or when passing functions as arguments to other functions.

**Key characteristics:**

- No function name
- Often used as callback functions
- Cannot be called directly by name
- Must be assigned to a variable or passed as an argument

**Common use cases:**

**Example 1: With setTimeout**:

```js
setTimeout(function() {
  console.log("Time's up!");
}, 2000);
```

**Example 2: With array methods**:

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

**Example 3: Event handlers**:

```js
button.addEventListener('click', function() {
  console.log('Button clicked!');
});
```

**Real-world analogy:** Think of anonymous functions like disposable cups - you use them once for a specific purpose and don't need to label or reuse them.

### 4. Arrow Functions

**Arrow functions** are a shorter, more modern way to write functions, introduced in ES6 (2015). They use the `=>` syntax (which looks like an arrow).

**Basic syntax:**

```js
const functionName = (parameters) => {
  // function body
  return value;
};
```

**Example 1: Basic arrow function**:

```js
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3)); // Output: 5
```

**Example 2: Single parameter (parentheses optional)**:

```js
const square = x => {
  return x * x;
};
console.log(square(4)); // Output: 16
```

**Example 3: Implicit return (one-liner)** If the function has only one line and returns something, you can make it even shorter:

```js
const square = x => x * x;
console.log(square(4)); // Output: 16
```

**Example 4: No parameters** :

```js
const sayHello = () => console.log("Hello World!");
sayHello(); // Output: Hello World!
```

**Arrow functions with array methods:**

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

**Key differences from regular functions:**

- More concise syntax
- No `this` binding (they inherit `this` from parent scope)
- Cannot be used as constructors
- No `arguments` object

### 5. IIFE (Immediately Invoked Function Expression)

**IIFE** (pronounced "iffy") is a function that runs immediately after it's defined. It's a design pattern used to create a private scope and avoid polluting the global namespace.

**Basic syntax:**

```js
(function() {
  // code here runs immediately
})();
```

**How it works:**

1. The function is wrapped in parentheses `(function() { ... })`
2. Another set of parentheses `()` at the end immediately calls the function

**Example 1: Basic IIFE**:

```js
(function() {
  console.log("I run immediately!");
})();
// Output: I run immediately!
```

**Example 2: IIFE with parameters**:

```js
(function(name, age) {
  console.log(`My name is ${name} and I'm ${age} years old`);
})("John", 25);
// Output: My name is John and I'm 25 years old
```

**Example 3: IIFE with return value**:

```js
const result = (function(a, b) {
  return a + b;
})(5, 3);
console.log(result); // Output: 8
```

**Example 4: Arrow function IIFE**:

```js
((name) => {
  console.log(`Hello, ${name}!`);
})("Alice");
// Output: Hello, Alice!
```

**Why use IIFE?**

- **Avoid global pollution:** Variables inside IIFE don't affect the global scope
- **Create private scope:** Variables are contained within the function
- **Module pattern:** Used to create modules with private and public methods

**Example: Creating a private scope**:

```js
(function() {
  const secretVariable = "This is private";
  
  // This variable is not accessible from outside
  function privateFunction() {
    console.log("This is also private");
  }
  
  console.log(secretVariable); // Works inside IIFE
})();

// console.log(secretVariable); // Error! Not accessible here
```

## Summary Comparison

|Function Type|Syntax|Use Case|Key Feature|
|---|---|---|---|
|**Regular Function**|`function name() {}`|General purpose, can be hoisted|Named, callable anywhere|
|**Function Expression**|`const name = function() {}`|When you need to store function in variable|Not hoisted|
|**Anonymous Function**|`function() {}`|Callbacks, one-time use|No name, used as argument|
|**Arrow Function**|`const name = () => {}`|Modern, concise syntax|Shorter syntax, no `this` binding|
|**IIFE**|`(function() {})()`|Immediate execution, private scope|Runs once, creates isolation|

## Problems

1. Write a function to add two numbers
2. Write a function to find the maximum of two numbers
3. Write a function to check if a number is even or odd
4. Write a function to calculate the factorial of a number
5. Write a function to find the sum of digits of a number
6. Write a function to check if a number is prime
7. Write a function to find the GCD of two numbers
8. Write a function to find the LCM of two numbers
9. Write a function to reverse a number
10. Write a function to check if a number is palindrome
11. Write a function to find the Fibonacci series up to N numbers
12. Write a function to find the N-th Fibonacci number
13. Write a function to find the prime factorization of a number
14. Write a function to find the product of digits of a number
15. Write a function to calculate the nth triangular number
16. Write a function to find the number of digits in a number
17. Write a function to find the average of N numbers
18. Write a function to check if a string is palindrome
19. Write a function to count vowels in a string
20. Write a function to count consonants in a string
21. Write a function to find the longest word in a string
22. Write a function to count frequency of each digit in a number
23. Write a function to check if a string contains only digits
24. Write a function to check if a string contains only letters
25. Write a function to check if a string is a valid email address
26. Write a function to find all factors of a number
27. Write a function to check if a number is a perfect cube
28. Write a function to check if a given year is a leap year
29. Write a function to convert binary to decimal
30. Write a function to convert decimal to binary
31. Write a function to count prime numbers between two numbers
32. Write a function to find the largest prime factor of a number
33. Write a function to find the second largest number in an array
34. Write a function to calculate the sum of all divisors of a number
