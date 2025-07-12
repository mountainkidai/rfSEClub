# Equality vs. Identity in JavaScript

In JavaScript, you can compare values using two main operators: `==` and `===`. They behave differently.

## `==` (Equality)

This checks if two values are equal **after** converting them to the same type (type coercion).

```js
console.log(5 == "5"); // true (string is converted to number)
console.log(null == undefined); // true
```

## `===` (Identity or Strict Equality)

This checks if two values are equal **and** of the same type. No conversion is done.

```js
console.log(5 === "5"); // false (different types)
console.log(5 === 5);    // true (same value and type)
```
