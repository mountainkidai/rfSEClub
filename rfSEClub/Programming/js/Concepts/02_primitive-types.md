# JavaScript Primitive Types

Primitive types are the basic types of data in JavaScript. They are simple and can hold only one value at a time, like a number or some text. They are not objects, and they are very fast and easy to use.

## 1. Number

Used to store any kind of number, like whole numbers or decimal values.

```js
let age = 30;
let price = 99.99;
```

## 2. String

Used to store text. You can use single (`'`), double (`"`), or backticks (`` ` ``) to write strings.

```js
let name = "Alice";
let greeting = 'Hello';
let message = `Welcome, ${name}`;
```

## 3. Boolean

Used to store either `true` or `false`. Good for checking yes/no or on/off.

```js
let isOnline = true;
let isAdmin = false;
```

## 4. Undefined

Means a variable has been declared, but no value is given yet.

```js
let score;
console.log(score); // undefined
```

## 5. Null

Used to show that something is empty or unknown on purpose.

```js
let selectedItem = null;
```

## 6. Symbol (intro)

Represents a unique identifier. Symbols are primarily used to create unique property keys in objects to avoid name collisions..

```js
let id1 = Symbol("userID");
let id2 = Symbol("userID");
console.log(id1 === id2); // false
```

## 7. Empty String

A string with no characters. It is still a string, just without content.

```js
let message = "";
```

## Example

```js
let username = "Nina";
let age = 20;
let isStudent = true;
let city;
let note = null;
let id1 = Symbol("userID");
let id2 = Symbol("userID");
let empty = "";

console.log(username, age, isStudent, city, note, id1 === id2, empty);
```

**Output:**

```txt
Nina 20 true undefined null false  
```

## Problems

1. Create variables of each primitive type (number, string, boolean, undefined, null)
2. Check the type of a variable using typeof operator
3. Convert a string to a number using Number()
4. Convert a number to a string using String()
5. Convert a string to a boolean using Boolean()
6. Check if a variable is undefined
7. Check if a variable is null
8. Create a string with different quote types (single, double, backticks)
9. Create a number with decimal places
10. Create a boolean variable and use it in a condition
