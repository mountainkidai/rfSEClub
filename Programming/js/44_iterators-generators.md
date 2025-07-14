# Iterators and Generators in JavaScript

JavaScript provides powerful tools called **iterators** and **generators** to help you work with sequences of data (like arrays, strings, or even custom data structures) in a memory-efficient and flexible way.

---

## 1. Iterators

An **iterator** is an object that defines a sequence and returns a value one at a time, using a method called `next()`.

Any object that has a `[Symbol.iterator]` method is **iterable** — meaning it can be looped through using `for...of`.

### Built-in Iterables

* Arrays
* Strings
* Maps
* Sets

```js
const array = [10, 20, 30];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

* `iterator.next()` returns an object with two properties:

  * `value`: the next value in the sequence
  * `done`: `false` if there are more items, `true` if finished

---

## 2. for...of Loop with Iterables

```js
const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

* Works with any iterable
* Internally uses the iterator protocol

---

## 3. Generators

A **generator** is a special type of function that can pause and resume its execution. It is defined using the `function*` syntax and uses the `yield` keyword.

```js
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

* Each call to `next()` continues the function from where it left off
* `yield` produces a value and pauses the function
* Generators are great for lazy-loading data or infinite sequences

---

## 4. Example: Custom Range Generator

```js
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const numbers = range(5, 10);
for (const num of numbers) {
  console.log(num); // 5 6 7 8 9 10
}
```

* Only generates values when needed — memory-efficient

---

## Summary

| Concept   | Use For                  | Key Methods/Syntax             |
| --------- | ------------------------ | ------------------------------ |
| Iterator  | Step-by-step data access | `.next()`, `[Symbol.iterator]` |
| Generator | Pausable function        | `function*`, `yield`           |
