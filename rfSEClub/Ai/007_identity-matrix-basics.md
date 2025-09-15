# 007 - Identity Matrix Basics

## What is an Identity Matrix?

An **identity matrix** is a special type of square matrix that doesn’t change other matrices when multiplied by them—just like multiplying a number by 1.

> It’s the matrix equivalent of the number **1**.

### Example: 2×2 Identity Matrix

```txt
I = [1  0]
    [0  1]
```

### Example: 3×3 Identity Matrix

```txt
I = [1  0  0]
    [0  1  0]
    [0  0  1]
```

## Key Property

For any matrix **A**:

* A × I = A
* I × A = A

But this only works when the sizes match for valid multiplication.

## Why is the Identity Matrix Important in AI?

* Used in **initialization** and **transformation**
* Helps define **inverse matrices**
* Acts as a **neutral operation** in matrix algebra
* Used in **regularization** (e.g., adding λI in optimization)

### AI Example

Imagine a neural layer’s weights set as an identity matrix:

* The inputs pass through unchanged.
* Used during **residual connections** or **testing**.

## Properties of the Identity Matrix

* **Square matrix** (same rows and columns)
* Diagonal = all 1's
* All other values = 0
* Acts like **1** in multiplication

## Summary

* The **identity matrix** acts like the number 1 in matrix math.
* It leaves matrices unchanged when multiplied.
* It’s used in AI for initialization, transformation, and regularization.
* Diagonal = 1, rest = 0. Must be square to be valid.
