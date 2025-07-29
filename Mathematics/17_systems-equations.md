# Systems of Equations Made Simple

A **system of equations** is a set of two or more equations that share the same variables. To find the values of these variables, you solve all the equations at the same time.

---

## Why Systems of Equations Matter

Systems of equations are used to solve real-life problems that involve multiple constraints. Examples include:

* Calculating the cost of items when buying in different combinations
* Solving geometry problems involving more than one condition
* Figuring out quantities in everyday word problems

---

## Basic Example

Suppose you want to buy 2 pencils and 1 pen for ₹12, and 1 pencil and 2 pens for ₹13. You want to determine the cost of one pencil and one pen.

Let:

* `x` = cost of a pencil (in ₹)
* `y` = cost of a pen (in ₹)

We get the system of equations:

```txt
Equation 1: 2x + y = 12
Equation 2: x + 2y = 13
```

We can solve this system using one of the following methods.

---

## Methods to Solve

### 1. Substitution Method

Use one equation to express one variable in terms of the other, then substitute into the second equation.

#### Example

```txt
From Equation 2: x = 13 - 2y
Substitute into Equation 1:
2(13 - 2y) + y = 12
26 - 4y + y = 12
-3y = -14 → y = 14/3
```

Then substitute `y` back into Equation 2:

```txt
x = 13 - 2(14/3) = 13 - 28/3 = (39 - 28)/3 = 11/3
```

**Result**: Cost of one pencil = ₹11/3, Cost of one pen = ₹14/3

---

### 2. Elimination Method

Multiply or add/subtract the equations to eliminate one variable.

#### Example

Multiply Equation 2 by 2 to match coefficients:

```txt
Equation 1: 2x + y = 12
Equation 2 (×2): 2x + 4y = 26
```

Now subtract Equation 1 from the modified Equation 2:

```txt
(2x + 4y) - (2x + y) = 26 - 12
3y = 14 → y = 14/3
```

Now substitute `y` into Equation 1:

```txt
2x + (14/3) = 12 → 2x = 12 - 14/3 = (36 - 14)/3 = 22/3 → x = 11/3
```

**Result**: Cost of one pencil = ₹11/3, Cost of one pen = ₹14/3

---

## Types of Solutions

| Type               | What it Means                  | Visual (Graph)                       |
| ------------------ | ------------------------------ | ------------------------------------ |
| One Solution       | Lines intersect at one point   | ✅ (different slopes)                 |
| No Solution        | Lines are parallel             | ❌ (same slope, different intercepts) |
| Infinite Solutions | Lines lie on top of each other | ♾️ (same slope and intercept)        |

Algebraically:

* **One Solution**: Unique solution, consistent system
* **No Solution**: Inconsistent system
* **Infinite Solutions**: Dependent system

---

## Real-Life Example

You bought 3 apples and 2 bananas for ₹50. Your friend bought 2 apples and 3 bananas for ₹45.

Let:

* `x` = cost of an apple
* `y` = cost of a banana

We get:

```txt
3x + 2y = 50
2x + 3y = 45
```

Multiply the first equation by 3 and the second by 2:

```txt
9x + 6y = 150
4x + 6y = 90
```

Now subtract:

```txt
(9x + 6y) - (4x + 6y) = 150 - 90 → 5x = 60 → x = 12
```

Substitute back:

```txt
3(12) + 2y = 50 → 36 + 2y = 50 → 2y = 14 → y = 7
```

**Result**: Cost of an apple = ₹12, Cost of a banana = ₹7

---
