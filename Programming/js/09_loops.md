# JavaScript Loops

Loops let you run the same code multiple times without rewriting it. They are useful for tasks like processing lists, counting, or repeating actions.

## 1. `for` Loop

The `for` loop runs a block of code a fixed number of times.

* **Syntax parts**:

  * `initialization`: runs once before the loop starts (e.g., `let i = 0`).
  * `condition`: checked before each iteration; if true, the loop runs (e.g., `i < 5`).
  * `final-expression`: runs after each iteration (e.g., `i++`).

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**Output:**

```txt
0
1
2
3
4
```

## 2. `while` Loop

The `while` loop runs as long as a condition stays true.

* Good for when you do not know how many times you need to loop in advance.

```js
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}
```

**Output:**

```txt
0
1
2
```

## 3. `do...while` Loop

The `do...while` loop runs the code block once first, then checks the condition for further iterations.

* Ensures the loop runs at least once.

```js
let n = 0;
do {
  console.log(n);
  n++;
} while (n < 2);
```

**Output:**

```txt
0
1
```
