# Short-Circuiting in JavaScript using `&&` and `||`

In JavaScript, logical operators like `&&` (AND) and `||` (OR) can return values, not just `true` or `false`. This is called **short-circuiting**, and it's useful for writing cleaner and shorter code.

* `||` is like: "If I don’t have tea, I’ll take coffee."
* `&&` is like: "If I have tea, then I’ll drink it."

## Key Concepts and Syntax

### 1. `||` (OR) – Returns the first truthy value

```js
const name = "";
const displayName = name || "Guest";
console.log(displayName); // Guest
```

* `name` is an empty string (falsy), so `"Guest"` is used.
* Useful for setting default values.

```js
console.log("Riya" || "Guest"); // Riya
console.log(0 || 100);          // 100
```

### 2. `&&` (AND) – Returns the first falsy value, or the last if all are truthy

```js
const isLoggedIn = true;
const userName = "Kabir";

isLoggedIn && console.log("Welcome, " + userName); // Welcome, Kabir
```

* If the first part is true, the second part runs.
* If the first part is false, nothing happens.

```js
console.log(true && "Go ahead");   // Go ahead
console.log(false && "Not shown"); // false
```

## Use Cases

### 1. Providing Default Values

```js
const age = 0;
const safeAge = age || 18;
console.log(safeAge); // 18 (because 0 is falsy)
```

### 2. Conditional Function Execution

```js
const isOnline = true;
isOnline && alert("You are online!");
```

## Note

* Falsy values in JavaScript: `false`, `0`, `""`, `null`, `undefined`, `NaN`
* Truthy: Anything that is not falsy
