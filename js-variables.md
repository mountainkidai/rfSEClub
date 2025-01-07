z# Introduction to JavaScript

## What is a Variable?

A variable is like a box where you can store different types of data. Imagine you have a box labeled "no_of_apples" and you put 3 apples in it.

```javascript
let no_of_apples = 3;
```

## Different Types of Data

### 1. String

A string is a sequence of characters used to represent text. It's like writing words or sentences.

```javascript
let greeting = "hello";
let name = "world";
```

### 2. Number

A number can be an integer (whole number), a floating-point number (decimal), or special numeric values like Infinity.

```javascript
let integer = 10;
let floatingPoint = 3.14;
let positiveInfinity = Infinity; // Larger than any other number
let negativeInfinity = -Infinity; // Smaller than any other number
let notANumber = NaN; // Result of an invalid or an undefined mathematical operation
```

### 3. BigInt

A BigInt is a special type of number that can be really, really big!

```javascript
let bigIntValue = 9007199254740991n; // The 'n' at the end denotes a BigInt
```

### 4. Boolean

A boolean is like a light switch. It can only be true (on) or false (off).

```javascript
let isLearningFun = true;
let isSkyGreen = false;
```

### 5. Undefined

Undefined means a variable has been declared but not given a value yet.

```javascript
let box;
console.log(box); // Outputs: undefined
```

### 6. Null

Null is used to indicate "no value" or "empty".

```javascript
let emptySpace = null;
```

### 7. Symbol

A symbol is a unique and special type of data. It's often used as a key for object properties.

```javascript
let symbolKey = Symbol("uniqueKey");
let obj = {};

obj[symbolKey] = "value";

console.log(obj[symbolKey]); // Outputs: 'value'

// The symbolKey property is not visible through normal object property enumeration
for (let key in obj) {
  console.log(key); // This will not log anything
}

console.log(Object.keys(obj)); // Also will not show the symbol key
console.log(Object.getOwnPropertySymbols(obj)); // This will show the symbol key
```

## Static Type vs Dynamic Type

In programming, some languages require you to specify the type of data a variable will hold (static type), while others do not (dynamic type).

## Compiler vs Interpreter vs Just-In-Time Compilation

### Compiler

A compiler translates the entire code into machine code before running it.

### Interpreter

An interpreter translates and runs the code line by line.

### Just-In-Time (JIT) Compilation

JIT compilation is a mix of both. It translates code into machine code while the program is running, making it faster.

Here's a simple flow of how JIT works:

1. **Source Code**: The code you write.
2. **Parser**: Checks the code and converts it into a structure called Abstract Syntax Tree (AST).
3. **Monitor**: Watches the code to see which parts are used often.
4. **Interpreter**: Runs the code directly if it's not used often.
5. **Compiler**: Converts frequently used code into machine code.
6. **Store**: Saves the machine code for future use.
7. **Hot Swapping**: Replaces the old code with the new optimized code.
8. **Optimization**: Makes the machine code even faster.
9. **Output**: Produces the result of the program.

This process helps make JavaScript run faster, especially for tasks that are repeated many times.
