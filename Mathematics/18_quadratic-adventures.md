# Quadratic Adventures

Quadratic equations are polynomial expressions of the second degree and are generally written as:

```txt
ax² + bx + c = 0
```

Where:

* `a`, `b`, and `c` are real numbers
* `a ≠ 0`
* `x` is the variable

---

## Structure of a Quadratic Equation

The equation `ax² + bx + c = 0` contains three components:

* **`a` (Quadratic coefficient)**: Determines how steep or wide the parabola is.
* **`b` (Linear coefficient)**: Influences the symmetry and position.
* **`c` (Constant term)**: Represents the y-intercept.

---

## Factoring

Factoring expresses the quadratic as a product of two binomials.

**Example**:

```txt
x² - 5x + 6 = 0
```

Becomes:

```txt
(x - 2)(x - 3) = 0
```

So the solutions are:

```txt
x = 2 or x = 3
```

---

## Quadratic Formula

When factoring isn’t easy, use the quadratic formula:

```txt
x = [-b ± √(b² - 4ac)] / (2a)
```

**Example**:

```txt
2x² + 3x - 2 = 0
```

Apply the formula:

```txt
a = 2, b = 3, c = -2
Discriminant: b² - 4ac = 9 + 16 = 25
x = [-3 ± √25] / 4 = [-3 ± 5] / 4
x = 0.5 or x = -2
```

---

## Graphing Quadratics

The graph of a quadratic is a **parabola**.

* If `a > 0`, it opens **upward**.
* If `a < 0`, it opens **downward**.

Important elements:

* **Vertex**: Point of max or min. Found at `x = -b/(2a)`
* **Axis of Symmetry**: Vertical line through the vertex.
* **X-Intercepts**: Roots or solutions.
* **Y-Intercept**: Value when `x = 0`, which is `c`.

**Example**:

```txt
f(x) = x² - 4x + 3
```

* Vertex: x = 2; f(2) = -1 → (2, -1)
* X-Intercepts: x = 1 and x = 3
* Y-Intercept: f(0) = 3

---

## Applications of Quadratic Equations

### Physics Example

A ball is thrown with height:

```txt
h(t) = -5t² + 20t + 2
```

To find when it hits the ground:

```txt
-5t² + 20t + 2 = 0
Use the quadratic formula:
a = -5, b = 20, c = 2
Discriminant = 400 - 4(-5)(2) = 440
x = [-20 ± √440]/(-10) ≈ [-20 ± 20.98]/(-10)
Valid time: t ≈ 4.1 seconds
```

### Example

To maximize profit:

```txt
P(x) = -2x² + 40x - 60
Vertex: x = -b/(2a) = -40/(-4) = 10
Max profit occurs at x = 10
```
