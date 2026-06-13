# JavaScript Operators

Operators are special symbols or words that let you do things with values, like math operations, assigning values, or checking conditions. They are a basic part of writing any JavaScript program.

## 1. Assignment Operators

These are used to assign or update values in variables.

```js
let x = 5;     // = assigns value 5 to x
x += 3;        // adds 3 to x, now x = 8
x -= 2;        // subtracts 2 from x, now x = 6
x *= 4;        // multiplies x by 4, now x = 24
x /= 2;        // divides x by 2, now x = 12
```

## 2. Arithmetic Operators

These are used to perform basic math calculations.

```js
let a = 10;
let b = 3;
console.log(a + b);  // 13 (add)
console.log(a - b);  // 7 (subtract)
console.log(a * b);  // 30 (multiply)
console.log(a / b);  // 3.33... (divide)
console.log(a % b);  // 1 (remainder)
console.log(a ** b); // 1000 (a to the power of b)
```

## 3. Logical Operators

Used to check if something is true or false. Helpful in `if` statements.

```js
console.log(true && false); // false (AND - both must be true)
console.log(true || false); // true  (OR - at least one must be true)
console.log(!true);         // false (NOT - reverses the value)
```

## 4. Increment and Decrement Operators

Used to quickly increase or decrease a number by 1. These operators are extremely common in programming, especially in loops and counters.

### Basic Concept

```js
let count = 5;
count++; // becomes 6
count--; // becomes 5 again
```

- `count++` is the same as `count = count + 1`
- `count--` is the same as `count = count - 1`

### Pre-increment vs Post-increment

This is where it gets interesting! There are **two ways** to write increment/decrement operators, and they behave differently:

#### Post-increment (`variable++`)

**The value is used FIRST, then incremented:**

```js
let x = 5;
let result = x++; // x is used (5), then incremented
console.log(result); // 5 (the original value was used)
console.log(x);      // 6 (x was incremented after being used)
```

**Step-by-step breakdown:**

1. `result = x++` means "give me the current value of x (5), then add 1 to x"
2. `result` gets the old value: 5
3. `x` becomes 6

#### Pre-increment (`++variable`)

**The value is incremented FIRST, then used:**

```js
let x = 5;
let result = ++x; // x is incremented first, then used
console.log(result); // 6 (the new value is used)
console.log(x);      // 6 (x was incremented before being used)
```

**Step-by-step breakdown:**

1. `result = ++x` means "add 1 to x first, then give me the new value"
2. `x` becomes 6
3. `result` gets the new value: 6

### Side-by-Side Comparison

```js
// Post-increment example
let a = 10;
console.log("Before:", a);        // Before: 10
console.log("During:", a++);      // During: 10 (returns old value)
console.log("After:", a);         // After: 11 (variable was incremented)

console.log("---");

// Pre-increment example  
let b = 10;
console.log("Before:", b);        // Before: 10
console.log("During:", ++b);      // During: 11 (returns new value)
console.log("After:", b);         // After: 11 (variable was incremented)
```

### The Same Logic Applies to Decrement

#### Post-decrement (`variable--`)

```js
let x = 8;
let result = x--; // Use current value (8), then subtract 1
console.log(result); // 8 (original value)
console.log(x);      // 7 (decremented after use)
```

#### Pre-decrement (`--variable`)

```js
let x = 8;
let result = --x; // Subtract 1 first, then use new value
console.log(result); // 7 (new value)
console.log(x);      // 7 (decremented before use)
```

## Problems

1. Write a calculator app that does operations (+, -, ×, /, %)
2. Calculate the sum of n natural numbers using formulae
3. Calculate the sum of n natural numbers without formulae
4. Find the sum of the first N - 5 odd numbers
5. Find the sum of the first N even numbers
6. Find the sum of squares of first N natural numbers
7. Find the sum of cubes of first N natural numbers
8. Calculate the nth triangular number
9. Calculate the sum of all divisors of a number
10. Calculate the area of a triangle
11. Calculate the area of a circle
