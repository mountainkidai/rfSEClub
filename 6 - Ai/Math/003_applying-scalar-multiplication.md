# Applying Scalar Multiplication

## What is Scalar Multiplication?

**Scalar multiplication** means taking a vector and stretching or shrinking it by multiplying it with a single number (a scalar).

![1753267996140](image/003_applying-scalar-multiplication/1753267996140.png)

> Think of zooming in or out on a vector without changing its direction.

### Example

Let vector **V** = (2, 3)

* Multiply by scalar **4**:

  * 4 × V = 4 × (2, 3) = (8, 12)

The vector gets 4 times longer in the same direction.

## Shrinking a Vector

Multiplying by a number **between 0 and 1** makes the vector smaller:

* 0.5 × (2, 4) = (1, 2)

## Flipping Direction

Multiplying by a **negative scalar** flips the direction:

* –1 × (2, 3) = (–2, –3)

## Why is Scalar Multiplication Important in AI?

* Adjusts the **strength** of feature vectors
* Scales **learning rates** during optimization
* Changes weight magnitudes in neural networks
* Controls **data normalization** and preprocessing

### Example in AI

If a feature vector is (0.4, 0.8) and we scale it by 0.5:

* New vector = (0.2, 0.4)
* This may help reduce the impact of the feature

## Real-World Analogy

Think of scalar multiplication like zooming on a map:

* 1× means normal scale
* 2× zooms in (larger steps)
* 0.5× zooms out (smaller steps)
* –1× flips you to walk in the opposite direction

## Properties of Scalar Multiplication

* **Distributive** over vector addition:

  * a × (V + W) = a×V + a×W
* **Associative** with scalars:

  * (ab) × V = a × (b × V)
* **Multiplicative identity**:

  * 1 × V = V

## Summary

* **Scalar multiplication** stretches or shrinks a vector.
* Keeps direction (unless scalar is negative).
* Used in AI to scale inputs, weights, and features.
* Behaves predictably with properties like distributivity and associativity.
