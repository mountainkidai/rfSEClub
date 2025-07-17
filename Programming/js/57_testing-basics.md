# JavaScript Testing Basics

Testing is a crucial part of software development. It helps ensure that your code behaves as expected and reduces bugs in production. In JavaScript, testing usually involves writing small code snippets that verify individual parts (units) of your program.

---

## 1. What is Unit Testing?

**Unit testing** means testing individual units (functions or methods) of your code in isolation to ensure they produce the expected output. This helps catch bugs early and makes it easier to maintain your code.

```js
console.assert(condition, message);
```

* `condition`: The expression to test. If it's `false`, the assertion fails.
* `message`: Shown in the console if the assertion fails.

### Example

```js
function add(a, b) {
  return a + b;
}

// A simple test case:
console.assert(add(2, 3) === 5, "add() should return 5 for 2 + 3");
```

* If the condition is `true`, nothing happens.
* If it fails, the message appears in the console.

---

## 2. Testing Frameworks

Modern JavaScript projects use frameworks to automate and manage tests. Two popular ones are:

* **Jest** (by Meta): Easy setup and good integration with React
* **Mocha** + **Chai**: Flexible combo, good for Node.js and browser testing

### Example with Jest

**File Structure:**

```txt
project/
├── sum.js
└── sum.test.js
```

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

```js
// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Run the tests with:

```bash
npx jest
```

### Syntax

* `test(name, fn)`: Defines a test case.
* `expect(value).toBe(expected)`: Asserts that value matches expected.

---

## 3. What is Mocking?

**Mocking** means replacing real implementations (like network or database calls) with fake ones so you can test your logic in isolation without depending on external systems.

```js
const fetchData = (cb) => {
  setTimeout(() => {
    cb("data received");
  }, 1000);
};

// Jest Mock Test
jest.useFakeTimers();

test("calls callback with data", () => {
  const mockCallback = jest.fn();
  fetchData(mockCallback);

  jest.runAllTimers();

  expect(mockCallback).toHaveBeenCalledWith("data received");
});
```

### Explanation

* `jest.fn()`: Creates a mock function.
* `jest.useFakeTimers()`: Replaces real timers with mock ones.
* `jest.runAllTimers()`: Fast-forwards all pending timers.

---

## 4. TDD: Test-Driven Development

**TDD (Test-Driven Development)** is a workflow where you:

1. Write a failing test (Red)
2. Write just enough code to pass it (Green)
3. Refactor the code to improve design (Refactor)

This helps you think clearly about the problem and ensures high coverage.

### Benefits

* Forces you to write modular and testable code
* Catches bugs early
* Encourages clean, maintainable structure

---

## 5. Code Coverage

**Code coverage** tells you how much of your codebase is tested. Jest has built-in coverage reporting.

Run with:

```bash
npx jest --coverage
```

### Metrics

* **Statements**: Were all lines executed?
* **Branches**: Were all `if`/`else`/ternary paths tested?
* **Functions**: Did every function run?

---

## Summary

* **Unit tests** validate small parts of your program in isolation.
* **Jest/Mocha** make testing easier with clear syntax and reporting.
* **Mocking** allows you to fake external parts and focus on the logic.
* **TDD** helps build robust and well-designed code.
* **Code coverage** tells you how thoroughly your code is tested.
