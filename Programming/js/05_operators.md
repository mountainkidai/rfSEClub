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

## 4. Increment and Decrement

Used to quickly increase or decrease a number by 1.

```js
let count = 5;
count++; // becomes 6
count--; // becomes 5 again
```

* `count++` is the same as `count = count + 1`
* `count--` is the same as `count = count - 1`
