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

## Problems

1. Printing 1 to 10 numbers using for loop
2. Printing 1 to 10 numbers using while loop
3. Printing 10 to 1 numbers using for loop
4. Printing 10 to 1 numbers using while loop
5. Print 1 to 10, using for loop but if your number is 5, stop the loop and print "TICKETS ARE OVER"
6. Print 1 to 10 numbers using for loop but if number is 5 print "SKIPPING NUMBER 5"
7. Printing 2 table up to 2 X 10 = 20 with for loop
8. Printing 2 table up to 2 X 10 = 20 with while loop
9. Printing n table with for loop
10. Print all numbers divisible by 4 between 1 and 100
11. Print all numbers that are multiples of 6 up to N using a loop
12. Print up to n prime numbers (Note: 2<=n<=100)
13. Print a pattern of stars (e.g., triangle or pyramid pattern)
14. Print a pyramid pattern of numbers (e.g., 1, 1 2, 1 2 3)
15. Print a reverse pyramid pattern of stars
16. Write a program to print a right-angled triangle pattern using numbers
17. Print the multiplication table of a given number
18. Printing n table up to m factor
19. Printing tables between m and n (e.g., print 2 to 5 tables)
20. Left Increasing star pattern
21. Left decreasing star pattern
22. Right increasing star pattern
23. Right decreasing star pattern
24. Print all prime numbers between 1 and N using a for loop
25. Implement a program to print the Fibonacci series using a while loop
26. Print the sum of all even numbers up to N
27. Print the sum of all odd numbers up to N
28. Print the factorial of a number using a while loop
29. Find the largest prime factor of a number using a for loop
30. Write a program that prints all divisors of a number using a for loop
31. Calculate the nth Fibonacci number using iteration
32. Write a program to reverse a string using a loop
33. Implement a program to count the number of digits in a number using a loop
34. Write a program to find the sum of the digits of a number using a while loop
35. Implement a program to check whether a number is an Armstrong number using a while loop
36. Implement a program that calculates the sum of first N even numbers using a for loop
37. Write a program that calculates the sum of the first N odd numbers using a for loop
38. Create a program to generate a number triangle (like Pascal's triangle) using loops
39. Implement a program that calculates the sum of cubes of numbers from 1 to N
40. Write a program to print a table for factorial calculation
41. Calculate the nth triangular number using a while loop
42. Print the Fibonacci series using a for loop
43. Implement a program to find whether a number is even or odd using a ternary operator
44. Write a program that outputs the sum of even and odd numbers separately for the first N numbers
45. Implement a program to check if a number is a prime using a loop
