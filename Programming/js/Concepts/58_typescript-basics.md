# TypeScript Basics

**TypeScript** is a superset of JavaScript that adds **static types**. It helps catch errors during development, improves code readability, and makes your code more maintainable — especially in large projects.

---

## 1. Why Use TypeScript?

* Detects type-related bugs *before* code runs
* Makes code **self-documenting** with type annotations
* Provides better **auto-completion** and **editor support**
* Supports modern JavaScript features and compiles to plain JS

---

## 2. Type Annotations

You can specify what type of data a variable, function parameter, or return value should have.

```ts
let username: string = "Nivesh";
let age: number = 21;
let isLoggedIn: boolean = true;
```

### Explanation

* `string`, `number`, `boolean` are **basic types**
* If you try to assign `age = "twenty"` → TypeScript will throw an error

---

## 3. Functions with Types

You can annotate parameter types and return types in functions.

```ts
function add(x: number, y: number): number {
  return x + y;
}
```

* `x: number, y: number` → input parameters are numbers
* `: number` → return type is also number

If you return a string instead, TypeScript will show an error.

---

## 4. Interfaces

**Interfaces** define the **structure of an object**. This is useful to enforce that an object has specific properties.

```ts
interface User {
  name: string;
  age: number;
}

function greet(user: User) {
  console.log(`Hello, ${user.name}`);
}
```

```ts
const person = { name: "Alice", age: 25 };
greet(person); // ✅ OK
```

If you try to pass an object with a missing property, TypeScript will warn you.

---

## 5. Type Inference

TypeScript can often guess the type even if you don’t explicitly declare it.

```ts
let message = "Hello World"; // inferred as string
```

Still, using annotations makes the code more predictable and readable.

---

## 6. Optional Properties & Default Values

You can mark properties as optional using `?`.

```ts
interface Product {
  name: string;
  price: number;
  description?: string; // optional
}
```

And provide default values in functions:

```ts
function log(message: string = "Default message") {
  console.log(message);
}
```

---

## 7. Integration with JavaScript

You can gradually adopt TypeScript:

* Rename `.js` files to `.ts`
* Add `tsconfig.json` file
* Use JSDoc comments to annotate types inside `.js` files
* Run `tsc` (TypeScript Compiler) to compile `.ts` → `.js`

---

## Summary

| Feature          | Benefit                         |
| ---------------- | ------------------------------- |
| Type Annotations | Catches errors early            |
| Interfaces       | Enforce object structure        |
| Function Types   | Define input/output clearly     |
| Inference        | Reduces repetitive typing       |
| Gradual Adoption | Start using in existing JS code |
