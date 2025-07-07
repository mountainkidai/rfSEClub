# JavaScript Type Coercion

Type coercion means JavaScript automatically converts one type of value to another when needed. This usually happens when combining different types, like a number with a string.

## 1. Implicit Coercion

JavaScript changes the type automatically.

```js
let result = "5" + 2;
console.log(result); // "52" (number 2 becomes a string)
```

```js
let sum = "10" - 3;
console.log(sum); // 7 ("10" becomes number)
```

```js
console.log("5" * 2);  // 10
console.log("6" / 2);  // 3
console.log("4" - "2"); // 2
```

## 2. Explicit Coercion

You change the type manually using functions like `Number()`, `String()`, or `Boolean()`.

```js
let str = "123";
let num = Number(str);
console.log(num); // 123
```

```js
let n = 456;
let s = String(n);
console.log(s); // "456"
```
