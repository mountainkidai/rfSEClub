# Optional Chaining and Nullish Coalescing in JavaScript

Two helpful features for working with objects that may or may not exist:

* **Optional Chaining (`?.`)**
* **Nullish Coalescing (`??`)**

These make your code safer and cleaner when dealing with missing or undefined data.

---

## 1. Optional Chaining (`?.`)

Optional chaining lets you safely access deeply nested object properties without causing an error if something in the chain is `null` or `undefined`.

### Without Optional Chaining

```js
const user = {};

// This would cause an error:
// console.log(user.profile.name);
```

### With Optional Chaining

```js
const user = {};
console.log(user.profile?.name); // undefined, no error
```

### Explanation

* `user.profile?.name` means:

  * If `user.profile` exists, access `name`
  * If `user.profile` is `undefined` or `null`, return `undefined` safely

### Real-world Example

```js
const student = {
  name: "Ravi",
  scores: {
    math: 85
  }
};

console.log(student.scores?.science); // undefined (no error)
console.log(student.scores?.math);    // 85
```

---

## 2. Nullish Coalescing (`??`)

Nullish coalescing returns the **right-hand value only if the left-hand value is `null` or `undefined`**.

### Syntax

```js
const result = value ?? defaultValue;
```

### Example

```js
const name = null;
const displayName = name ?? "Guest";
console.log(displayName); // "Guest"
```

### How It’s Different from `||` (OR)

The OR operator treats `0`, `''` (empty string), and `false` as falsey:

```js
const count = 0;
console.log(count || 10); // 10 (wrong if 0 is a valid value)
console.log(count ?? 10); // 0 (correct — only uses 10 if null/undefined)
```

---

## Summary

| Feature            | Use Case                                       | Behavior                                                               |
| ------------------ | ---------------------------------------------- | ---------------------------------------------------------------------- |
| Optional Chaining  | Access deep properties safely                  | Returns `undefined` if something in the chain is `null` or `undefined` |
| Nullish Coalescing | Provide fallback values for `null`/`undefined` | Returns right side only if left is `null` or `undefined`               |
