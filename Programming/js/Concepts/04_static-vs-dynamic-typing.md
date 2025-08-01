# Static vs. Dynamic Typing

## What is Typing?

Typing means how a programming language handles the type of data like numbers, text, or booleans.

## Static Typing

* Type is fixed at the time of writing code.
* You must say what type each variable is.
* Errors are found before running the program (at compile time).
* Example languages: Java, C++

### Example (c++)

```java
int age = 25;
String name = "Aman";
```

You can’t change the type of `age` to a string later.

## Dynamic Typing

* Type is decided while the program runs.
* You don’t have to say the type of a variable.
* Variables can change type anytime.
* Example language: JavaScript

### Example (in JavaScript)

```js
let value = 10;       // value is a number
value = "Hello";      // now value is a string
```

## Problems

1. Create a variable and assign a number to it, then change it to a string
2. Create a variable and assign a string to it, then change it to a boolean
3. Create a variable and assign a boolean to it, then change it to a number
4. Create a variable and assign an array to it, then change it to an object
5. Create a variable and assign null to it, then change it to a string
6. Check the type of a variable before and after changing its value
7. Create a variable and assign different types in a loop
8. Create a variable and assign it different types based on a condition
9. Create a variable and assign it the result of different operations
10. Demonstrate how JavaScript allows type changes that static languages don't
