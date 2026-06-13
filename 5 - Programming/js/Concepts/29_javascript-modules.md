# JavaScript Modules

As JavaScript projects grow larger, it's helpful to break code into smaller, reusable pieces. This is done using **modules**. A module is just a separate file that can share code with other files.

Think of modules like different subjects in your school books. Each subject (module) has its own book (file), but together they help complete your education (application).

## Key Concepts and Syntax

### 1. Named Exports – Share multiple values

```js
// mathUtils.js
export const add = (a, b) => a + b;        // This function adds two numbers and exports it
export const multiply = (a, b) => a * b;   // This function multiplies two numbers and exports it
```

* `export` makes a function or variable available to be used in another file.
* You can export multiple things from one file.

```js
// main.js
import { add, multiply } from "./mathUtils.js"; // Importing the named exports from the file

console.log(add(2, 3));      // 5
console.log(multiply(2, 3)); // 6
```

* `import { name }` brings in specific exported values.
* The names inside the curly braces must exactly match what was exported.

### 2. Default Export – Share one main value

```js
// greet.js
export default function(name) {
  return `Hello, ${name}`;  // Returns a greeting string
}
```

* `export default` is used when you're exporting only one thing from a file.
* You don’t need curly braces when importing a default export.

```js
// app.js
import greet from "./greet.js"; // Can name it anything when importing a default export

console.log(greet("Aarav")); // Hello, Aarav
```

### 3. Importing Everything

```js
// math.js
export const square = x => x * x;           // Square of a number
export const cube = x => x * x * x;         // Cube of a number
```

* Multiple named exports defined.

```js
// calc.js
import * as math from "./math.js"; // Imports all exported items as properties of the 'math' object

console.log(math.square(3)); // 9
console.log(math.cube(2));   // 8
```

* `* as math` imports everything and groups them under one object called `math`.
* Access the functions using `math.functionName()`.

## Problems
