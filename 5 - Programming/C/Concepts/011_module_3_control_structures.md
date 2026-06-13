# Control Structures in C

Control structures allow you to control the flow of your program — deciding what code runs and how many times.

---

## 1. If Statement

Executes a block of code if a condition is true.

```text
if (condition) {
// code to run if condition is true
}
```

```c
#include <stdio.h>

int main() {
int num;
printf("Enter a number: ");
scanf("%d", &num);

text
if (num % 2 == 0) {
    printf("%d is even\n", num);
}
return 0;
}
```

---

## 2. If-Else Statement

Runs one block if condition is true, another if false.

```text
if (condition) {
// true block
} else {
// false block
}
```

```c
//Example: Even or Odd Checker

#include <stdio.h>

int main() {
int num;
printf("Enter a number: ");
scanf("%d", &num);

text
if (num % 2 == 0) {
    printf("%d is even\n", num);
} else {
    printf("%d is odd\n", num);
}
return 0;
}
```

---

## 3. Switch Statement

Selects one of many blocks to execute depending on a variable value.

```text
switch(expression) {
case value1:
// code
break;
case value2:
// code
break;
default:
// code
}
```

Example: Menu with switch

```c
#include <stdio.h>

int main() {
int choice;
printf("Menu:\n1. Print Hello\n2. Print Bye\n");
printf("Enter choice: ");
scanf("%d", &choice);
switch(choice) {
case 1:
printf("Hello\n");
break;
case 2:
printf("Bye\n");
break;
default:
printf("Invalid choice\n");
}
return 0;
}
```

---

## 4. While Loop

Repeats a block as long as condition is true.

```c
while(condition) {
// loop body
}
```

---

## 5. Do-While Loop

Executes loop body once, then repeats while condition is true.

```c
do {
// loop body
} while(condition);
```

---

## 6. For Loop

Repeats a block for a fixed number of times.

```c
for(initialization; condition; increment) {
// loop body
}
```

```c

//Example: Print multiplication table of a number

#include <stdio.h>

int main() {
int num;
printf("Enter number: ");
scanf("%d", &num);

printf("Multiplication table for %d:\n", num);
for(int i = 1; i <= 10; i++) {
    printf("%d * %d = %d\n", num, i, num * i);
}
return 0;
}
```

---

## Problems

### 1. Even/Odd Checker (using `if-else`)

Write a program that reads a number and prints if it is even or odd.

---

### 2. Menu Using `switch`

Write a program displays a simple menu with options and prints a different message depending on the selection.

---

### 3. Leap Year Validator

Write a program that asks for a year and tells if it is a leap year or not by checking:

- Divisible by 400 → Leap Year
- Else divisible by 100 → Not Leap Year
- Else divisible by 4 → Leap Year
- Otherwise Not Leap Year

---

### 4. Multiplication Table Generator

Program that takes a number as input and prints its multiplication table using a `for` loop (1 to 10).

---
