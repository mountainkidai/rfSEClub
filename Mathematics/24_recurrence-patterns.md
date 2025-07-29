## Recurrence Patterns

Recurrence relations are equations that define sequences recursively: each term is defined in relation to previous terms. These are useful in modeling repetitive processes such as population growth, interest accumulation, or the runtime of recursive algorithms.

---

### Simple Recurrence

A **simple recurrence relation** defines each term of a sequence using a rule involving previous terms.

**Example:** The Fibonacci Sequence

$$
F(n) = F(n-1) + F(n-2), \quad \text{with } F(0) = 0, F(1) = 1
$$

Let’s compute $F(5)$:

* $F(2) = F(1) + F(0) = 1 + 0 = 1$
* $F(3) = F(2) + F(1) = 1 + 1 = 2$
* $F(4) = F(3) + F(2) = 2 + 1 = 3$
* $F(5) = F(4) + F(3) = 3 + 2 = 5$

So, the first few terms are:

$$
F(0) = 0,\quad F(1) = 1,\quad F(2) = 1,\quad F(3) = 2,\quad F(4) = 3,\quad F(5) = 5
$$

**Application:** Predicting population growth where each generation depends on the previous two.

---

### Tree Method

The **tree method** helps visualize how recursive functions break down problems.

**Example:** Calculating $F(4)$

```txt
F(4)
├── F(3)
│   ├── F(2)
│   │   ├── F(1)
│   │   └── F(0)
│   └── F(1)
└── F(2)
    ├── F(1)
    └── F(0)
```

Let’s count the calls:

* F(4) calls F(3) and F(2)
* F(3) calls F(2) and F(1)
* F(2) calls F(1) and F(0)

This shows:

* F(2) is computed **twice**
* F(1) is computed **three times**
* F(0) is computed **two times**

We learn that recursion repeats work unnecessarily. To fix this, we use **memoization**: store results after calculating once.

**Application:** Improving efficiency of recursive programs in programming.

---

### Master Theorem

The **Master Theorem** helps solve recurrence relations for divide-and-conquer algorithms.

It solves recurrences of the form:

$$
T(n) = a \cdot T(n/b) + f(n)
$$

Where:

* $a$: number of subproblems
* $b$: factor by which problem size is divided
* $f(n)$: extra work done outside recursion

**Example:** Merge Sort

$$
T(n) = 2T(n/2) + n
$$

Let’s solve using the theorem:

* Here, $a = 2$, $b = 2$, $f(n) = n$
* Compute $\log_b a = \log_2 2 = 1$
* Since $f(n) = \Theta(n^{\log_b a}) = \Theta(n)$, we are in **Case 2** of the Master Theorem.

**Conclusion:**

$$
T(n) = \Theta(n \log n)
$$

**Step-by-Step Explanation:**

* The algorithm splits the array into two halves (2T(n/2))
* It takes linear time (n) to merge sorted halves
* This pattern continues until size becomes 1

**Application:** Analyzing performance of algorithms like merge sort, quicksort, binary search tree construction.
