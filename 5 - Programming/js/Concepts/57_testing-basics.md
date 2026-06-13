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

### Example 1: Simple addition test

```js
// This function adds two numbers and returns the result.
function add(a, b) {
  return a + b;
}

// We test that the result of add(2, 3) equals 5
console.assert(add(2, 3) === 5, "add() should return 5 for 2 + 3");

// We test that the result of add(-1, 1) equals 0
console.assert(add(-1, 1) === 0, "add() should return 0 for -1 + 1");
```

### Example 2: Checking array length

```js
// This function returns an array of fruits
function getFruits() {
  return ["apple", "banana", "mango"];
}

// We test if the array length is exactly 3
console.assert(getFruits().length === 3, "Should return 3 fruits");
```

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
// A simple function that returns the sum of two numbers
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

```js
// sum.test.js
// Jest test file to test the sum function
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); // Checks if the sum function returns 3
});
```

Run the tests with:

```bash
npx jest
```

### Syntax

* `test(name, fn)`: Defines a test case.
* `expect(value).toBe(expected)`: Asserts that value matches expected.

### Example with Mocha + Chai

```js
// Using Chai's expect syntax, we test if the sum of 1 and 2 equals 3
const { expect } = require("chai");
const sum = require("./sum");

describe("sum()", () => {
  it("should return 3 for 1 + 2", () => {
    expect(sum(1, 2)).to.equal(3);
  });
});
```

Run with:

```bash
npx mocha
```

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
  const mockCallback = jest.fn(); // Create a mock callback function
  fetchData(mockCallback);

  jest.runAllTimers(); // Fast-forward all pending timers

  // Check if mockCallback was called with "data received"
  expect(mockCallback).toHaveBeenCalledWith("data received");
});
```

### Explanation

* `jest.fn()`: Creates a mock function.
* `jest.useFakeTimers()`: Replaces real timers with mock ones.
* `jest.runAllTimers()`: Fast-forwards all pending timers.

### Another Example: Mocking API fetch

```js
// We mock the global fetch function so it returns a fake resolved Promise
// This allows us to test how our code handles the API response without actually calling the network

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ name: "Alice" }) })
);

test("fetch user data", async () => {
  const response = await fetch("/user");
  const data = await response.json();

  // We expect the data returned to have name "Alice"
  expect(data.name).toBe("Alice");
});
```

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

### Example TDD Flow

1. **Write Test**

```js
// Start by writing a failing test that expects double(4) to return 8

test("double of 4 should be 8", () => {
  expect(double(4)).toBe(8);
});
```

2.**Write Function**

```js
// Now we implement the double function to make the test pass
function double(n) {
  return n * 2;
}
```

3.**Refactor (if needed)**

```js
// If your function gets more complex later, improve its design here while keeping tests green
```

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

## Problems
