# Exploring Vectors

## What is a Vector?

A **vector** is a list of numbers arranged in a specific order. Each number in a vector is called a **component**. Vectors are more powerful than scalars because they carry **both magnitude and direction**.

![1753267174589](image/001_exploring-vectors/1753267174589.png)

## What is Magnitude?

The **magnitude** of a vector is its length or size. For a 2D vector (x, y), its magnitude is calculated as:

```txt
|v| = √(x² + y²)
```

For example: the vector (3, 4) has a magnitude of √(3² + 4²) = 5.

> Imagine a robot taking a step forward and to the right. That step can be represented as a vector!

### Examples of Vectors

- (3, 4) → 3 steps right, 4 steps up
- (0, -5) → Stay in place horizontally, move 5 steps down
- In AI: (0.2, 0.8, 0.5) → Feature values for an image or input

**Feature values**: Numerical representations of characteristics or attributes (e.g., brightness, color intensity).

## Types of Vectors

- **2D Vector**: (x, y)
- **3D Vector**: (x, y, z)
- **n-dimensional Vector**: (x₁, x₂, x₃, ..., xₙ)

In AI, you often work with **high-dimensional vectors** to represent data such as images, sounds, or text.

## Why Are Vectors Important in AI?

- Represent **data points** like pixel values in an image
- Represent **weights** in a neural network
  - **Weights**: Numbers inside a model that determine how much influence an input has on the output of a neuron or layer
- Represent **inputs and outputs** to models
  - **Inputs**: The features or data values fed into a model (e.g., pixel values of an image).
  - **Outputs**: The results or predictions produced by the model after processing the inputs.
- Enable **linear algebra operations** like transformations, projections, and similarity checks
  - **Transformations**: Altering data (e.g., scaling, rotation) using matrix operations.
  - **Projections**: Mapping data from a high-dimensional space to a lower-dimensional space.
  - **Similarity checks**: Measuring how close two vectors are.

## Real-World Analogy

Think of a vector as a GPS direction:

- Go 3 km north and 4 km east → That’s a 2D vector!
- Vectors guide your movement and describe where and how far to go.

## Operations You Can Do With Vectors

- **Access individual components**
- **Add or subtract vectors**
- **Multiply a vector by a scalar**
- **Measure its length (magnitude)**

> These operations will be explored in later lessons like vector addition and scalar multiplication.

## Summary

- A **vector** is an ordered list of numbers.
- Vectors have **both magnitude and direction**.
- In AI, vectors represent **inputs, features, and weights**.
- They are essential for representing and manipulating data in machine learning.
