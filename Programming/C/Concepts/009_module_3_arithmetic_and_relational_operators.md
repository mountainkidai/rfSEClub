# Arithmetic and Relational Operators in C

Operators in C are special symbols that perform operations on variables and values. Among the most commonly used are **arithmetic operators** and **relational operators**. These form the foundation for performing mathematical calculations and making decisions in programs.

---

## Arithmetic Operators

Arithmetic operators are used to perform basic mathematical operations:

- `+` (Addition): Adds two operands.
- `-` (Subtraction): Subtracts right operand from left.
- `*` (Multiplication): Multiplies two operands.
- `/` (Division): Divides left operand by right (integer division if both are integers).
- `%` (Modulus): Returns the remainder after integer division.

**Example:**

```c
#include <stdio.h>
int main() {
int a = 15, b = 4;
printf("a + b = %d\n", a + b);   // Addition
printf("a - b = %d\n", a - b);   // Subtraction
printf("a * b = %d\n", a * b);   // Multiplication
printf("a / b = %d\n", a / b);   // Division (integer result)
printf("a %% b = %d\n", a % b);  // Modulus (remainder)

return 0;
}
```

```text
Output:

a + b = 19
a - b = 11
a * b = 60
a / b = 3
a % b = 3
```

---

### Relational Operators

Relational operators are used to compare two values. They return either **true (1)** or **false (0)**.

- `>` (Greater than)
- `<` (Less than)
- `==` (Equal to)

**Example:**

```c
#include <stdio.h>

int main() {
int x = 10, y = 20;
printf("x > y = %d\n", x > y);   // false -> 0
printf("x < y = %d\n", x < y);   // true  -> 1
printf("x == y = %d\n", x == y); // false -> 0

return 0;
}
```

```text
Output:


x > y = 0
x < y = 1
x == y = 0
```

---

### Operator Precedence

C follows specific rules to determine the order of evaluation when multiple operators are used in an expression. Multiplication, division, and modulus have higher precedence than addition and subtraction. Relational operators are evaluated after arithmetic operators.

**Example:**

```c
#include <stdio.h>

int main() {
int result = 10 + 4 * 3 > 20; // Multiplication first, then addition, then comparison

printf("Result = %d\n", result);

return 0;
}
```

```text
Result = 1
```
