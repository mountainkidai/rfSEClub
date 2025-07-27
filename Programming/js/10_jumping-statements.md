# JavaScript Jumping Statements

Jumping statements let you change the flow of loops or switch statements. Think of them as traffic controllers for your code - they decide when to stop, skip, or redirect the flow of execution.

## Real-World Analogy

Imagine you're walking through a museum:

- **`break`** is like finding the exit door and leaving the museum entirely
- **`continue`** is like skipping a boring exhibit and moving to the next one
- **`return`** is like getting a phone call and having to leave immediately to go home

## 1. `break` Statement

The `break` statement stops the current loop or `switch` case completely and moves on to the code after the loop/switch.

### Basic Concept

```js
// When break is encountered:
// 1. The loop stops immediately
// 2. No more iterations happen
// 3. Code continues after the loop
```

### Example 1: Basic Loop Break

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Stop the loop when i equals 3
  }
  console.log(i);
}
console.log("Loop finished!");
```

**Output:**

```txt
0
1
2
Loop finished!
```

**Explanation:** When `i` becomes 3, the `break` statement executes, immediately stopping the loop. The numbers 3 and 4 are never printed.

### Example 2: Switch Statement with Break

```js
let color = 'green';
switch (color) {
  case 'red':
    console.log('Stop');
    break; // Without this, it would fall through to the next case
  case 'yellow':
    console.log('Caution');
    break;
  case 'green':
    console.log('Go');
    break; // Prevents fall-through to default
  default:
    console.log('Unknown color');
}
```

**Output:**

```txt
Go
```

### Example 3: What Happens Without Break in Switch

```js
let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of work week');
    // No break here!
  case 'Tuesday':
    console.log('Tuesday tasks');
    // No break here!
  case 'Wednesday':
    console.log('Midweek');
    break; // Finally a break
  case 'Thursday':
    console.log('Almost Friday');
    break;
  default:
    console.log('Some other day');
}
```

**Output:**

```txt
Start of work week
Tuesday tasks
Midweek
```

**This demonstrates "fall-through" behavior - without `break`, execution continues to the next case!**

## 2. `continue` Statement

The `continue` statement skips the rest of the current loop iteration and moves to the next iteration. It's like saying "skip this one, but keep going with the rest."

### Basic Concept

```js
// When continue is encountered:
// 1. Skip the rest of the current iteration
// 2. Jump to the next iteration
// 3. The loop condition is checked again
```

### Example 1: Basic Continue Usage

```js
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i); // Only odd numbers reach here
}
console.log("Loop completed!");
```

**Output:**

```txt
1
3
Loop completed!
```

### Example 2: Continue in While Loop

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;

while (i < numbers.length) {
  let current = numbers[i];
  i++; // Important: increment before continue!
  
  if (current % 3 === 0) {
    continue; // Skip numbers divisible by 3
  }
  
  console.log(`Processing: ${current}`);
}
```

**Output:**

```txt
Processing: 1
Processing: 2
Processing: 4
Processing: 5
Processing: 7
Processing: 8
Processing: 10
```

**Important:** Notice how we increment `i` BEFORE the `continue` statement. If we put it after, we'd get an infinite loop!

## 3. `return` Statement

The `return` statement immediately exits a function and optionally returns a value. It's the most powerful jumping statement because it can exit not just loops, but entire functions.

### Example : Basic Return

```js
function findFirstEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      return numbers[i]; // Exit function and return the even number
    }
  }
  return null; // No even number found
}

let result1 = findFirstEven([1, 3, 7, 4, 9]);
console.log(result1); // 4

let result2 = findFirstEven([1, 3, 7, 9]);
console.log(result2); // null
```

## Summary

|Statement|Purpose|Usage|
|---|---|---|
|**`break`**|Exit loop/switch completely|When you want to stop all further iterations|
|**`continue`**|Skip current iteration, continue with next|When you want to skip certain cases but keep looping|
|**`return`**|Exit function immediately|When you want to exit a function (and optionally return a value)|

**Key Points:**

- `break` stops the loop entirely
- `continue` skips to the next iteration
- `return` exits the entire function
- Always be careful with loop counters and `continue` in while loops
