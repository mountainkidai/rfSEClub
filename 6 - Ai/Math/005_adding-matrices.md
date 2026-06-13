# Adding Matrices

## What is Matrix Addition?

**Matrix addition** is the process of adding two matrices **element by element**. It’s only possible when both matrices have the **same dimensions**.

### Example

Let’s add:

```txt
A = [1  2]     B = [5  6]
    [3  4]         [7  8]
```

Add each element:

```txt
A + B = [1+5  2+6] = [6   8]
        [3+7  4+8]   [10 12]
```

## Requirements

* Both matrices must have the **same number of rows and columns**.
* If A is m×n, then B must also be m×n.

## Why is Matrix Addition Important in AI?

* Combine **weights** or **features**
* Aggregate outputs from different **neurons or layers**
* Blend multiple sources of input or transformation

### AI Example

* Matrix A = image features from camera 1
* Matrix B = image features from camera 2
* Combined image features = A + B

## Properties of Matrix Addition

* **Commutative**: A + B = B + A
* **Associative**: (A + B) + C = A + (B + C)
* **Identity Matrix for Addition**: A + 0 = A (0 means matrix of all zeros)

## Summary

* **Matrix addition** is element-by-element addition.
* Only works for matrices of the **same size**.
* Common in AI when merging data or layer outputs.
* Commutative, associative, and has a zero identity matrix.
