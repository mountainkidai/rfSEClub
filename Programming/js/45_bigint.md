# BigInt in JavaScript

JavaScript numbers are usually stored using the **Number** type, which can safely represent integers up to **2^53 - 1**. But what if you need to store bigger numbers — like Aadhaar numbers, mobile numbers, or work with financial data?

That’s where **BigInt** comes in.

---

## 1. What is BigInt?

**BigInt** is a special numeric type that can represent integers **larger than `Number.MAX_SAFE_INTEGER`** (which is `9007199254740991`).

It was introduced in **ES2020**.

---

## 2. Syntax

There are two ways to create a BigInt:

### Using the `n` suffix

```js
const bigNumber = 123456789012345678901234567890n;
```

### Using the constructor

```js
const bigFromString = BigInt("123456789012345678901234567890");
```

Both ways create a value of type **BigInt**.

---

## 3. Operations with BigInt

You can do all arithmetic operations, but **only with other BigInts** — you can't mix BigInt and Number directly.

```js
const a = 10000000000000000000n;
const b = 20000000000000000000n;

console.log(a + b); // 30000000000000000000n
console.log(b - a); // 10000000000000000000n
```

---

## 4. Comparison

You can compare BigInts and Numbers:

```js
console.log(10n === 10);     // false (different types)
console.log(10n == 10);      // true (coerced comparison)
console.log(20n > 15);       // true
```

---

## 5. Limitations and Warnings

* You **cannot mix** `BigInt` and `Number` in math operations:

```js
const a = 10n;
const b = 5;
// console.log(a + b); // TypeError ❌
```

You must convert one to match the other using `Number()` or `BigInt()`.

* BigInt does **not support decimals**:

```js
const x = 10.5n; // ❌ SyntaxError
```

---

## 6. Real-World Use Case Example

### Storing a large Aadhaar-like ID

```js
const aadhaarNumber = 123456789012345678901234567890n;
console.log(typeof aadhaarNumber); // "bigint"
```

---

## Summary

| Feature           | Number      | BigInt                          |
| ----------------- | ----------- | ------------------------------- |
| Max Safe Value    | 2^53 - 1    | Virtually unlimited             |
| Supports Decimals | Yes         | No                              |
| Type              | "number"    | "bigint"                        |
| Use Case          | Normal math | Very large integers (IDs, etc.) |
