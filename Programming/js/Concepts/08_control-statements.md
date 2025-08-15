# JavaScript Control Statements

Control statements help you control how your program runs. They allow your code to make decisions and take different paths based on conditions.

## 1. if Statement

Runs a block of code **only if** the condition is true.

```js
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
}
```

**Output:**

```txt
You are an adult
```

## 2. if-else Statement

Runs one block if the condition is true, and another if it is false.

```js
let score = 45;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

**Output:**

```txt
Fail
```

## 3. if-else if-else Statement

Checks multiple conditions in order. Runs the first block that is true.

```js
let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

**Output:**

```txt
Grade B
```

## 4. switch Statement

Used when you want to check a value against multiple exact cases.

```js
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  default:
    console.log("Just another day");
}
```

**Output:**

```txt
Start of the week
```

## Problems

1. Find the largest of three numbers (a, b, c)
2. Find out whether a number is even or odd
3. Find the smallest of three numbers (a, b, c)
4. Check if a number is divisible by 2
5. Check if a number is divisible by 3
6. Check if a number is divisible by 5
7. Find the greatest of four numbers
8. Find the smallest of four numbers
9. Check if a number is a power of 2
10. Check if a number is a perfect square
