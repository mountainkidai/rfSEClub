# JavaScript Variables

Variables are like containers that store data in your program. You can use them to keep track of numbers, text, or anything else.

## Declaring Variables

You can create variables using `let`, `const`, or `var`.

### Example

```js
let age = 25;
const name = "Alice";
var city = "Delhi";
```

## `let`

* You can change its value later.
* It has block scope (works only inside the block where it's declared).
* You cannot declare the same `let` variable twice in the same scope.

```js
let score = 50;
score = 75; // This works
```

## `const`

* Used when the value should not change.
* It also has block scope.
* You must assign a value when you declare it.

```js
const pi = 3.14;
// pi = 3.14159; ❌ This will cause an error
```

## `var`

* You can change its value.
* It has function scope (not block scope).
* You can declare the same `var` variable more than once.

```js
var greeting = "Hello";
greeting = "Hi"; // This works
var greeting = "Hey"; // This also works
```

## Scope Explained

### Block Scope

A variable with block scope only works inside the pair of curly braces `{}` where it is declared.

```js
{
  let message = "Hello";
  console.log(message); // ✅ This works
}
console.log(message); // ❌ Error: message is not defined
```

### Function Scope

A variable with function scope is only available inside the function where it is declared.

```js
function sayHi() {
  var name = "Bob";
  console.log(name); // ✅ This works
}
console.log(name); // ❌ Error: name is not defined
```

## Naming Rules

* Names must start with a letter, `_`, or `$`
* Cannot start with a number
* No spaces allowed
* Use camelCase for better practice (e.g., `userName`, `totalPrice`)

## Output Example

```js
let firstName = "Sara";
let age = 22;
console.log(firstName + " is " + age + " years old.");
```

**Output:**

```txt
Sara is 22 years old.
```
