## Number Puzzles

Number puzzles involve using numerical rules and logic to solve fun and challenging problems. These puzzles build mathematical thinking and are rooted in concepts like prime numbers, divisibility, remainders, and factors.

---

### Prime Numbers

A **prime number** is a natural number greater than 1 that has no divisors other than 1 and itself. In other words, it can’t be formed by multiplying two smaller natural numbers.

**Examples of prime numbers:** 2, 3, 5, 7, 11, 13, 17

**Example Problem:** Is 29 a prime number?

* Check divisibility by all primes ≤ √29 (√29 ≈ 5.38): check 2, 3, and 5
* 29 ÷ 2 = 14.5 (not whole)
* 29 ÷ 3 ≈ 9.67 (not whole)
* 29 ÷ 5 = 5.8 (not whole)
* ✅ So, **29 is a prime number.**

**Application:** Prime numbers are essential in encryption systems like RSA, which protect digital communications.

---

### Factorization

**Factorization** is breaking a number into smaller numbers (factors), especially prime numbers that multiply to give the original number.

**Example:** Factorize 60

* 60 ÷ 2 = 30 → prime factor 2
* 30 ÷ 2 = 15 → another 2
* 15 ÷ 3 = 5 → prime factor 3
* 5 is a prime number

So, $60 = 2^2 \times 3 \times 5$

**Application:** Prime factorization is useful in simplifying fractions, computing GCD/LCM, and solving Diophantine equations.

---

### Modulo (Mod)

**Modulo** is an operation that gives the **remainder** when one number is divided by another.

**Notation:** $a \bmod b$ means the remainder when $a$ is divided by $b$.

**Example:** What is $17 \bmod 5$?

* 17 ÷ 5 = 3 remainder **2**
* ✅ So, $17 \bmod 5 = 2$

**Real-World Example:** If it's 9 AM now, what time will it be 7 hours later?

* $(9 + 7) \bmod 12 = 16 \bmod 12 = 4$
* ✅ So, it will be **4 PM**

**Application:** Modular arithmetic is used in cryptography, calendars, and computer programs (e.g., looping counters).

---

### GCD (Greatest Common Divisor)

The **GCD** of two numbers is the largest number that divides both numbers without leaving a remainder.

**Example:** Find GCD of 36 and 60

* Prime factorizations:

  * 36 = $2^2 \times 3^2$
  * 60 = $2^2 \times 3 \times 5$
* Common prime factors: $2^2 \times 3 = 12$
* ✅ So, GCD(36, 60) = 12

**Application:** GCD helps in simplifying fractions and finding schedules for repeated events.

---

### Extended GCD

The **Extended Euclidean Algorithm** finds integers $x$ and $y$ such that:

$$
\text{gcd}(a, b) = ax + by
$$

This is also known as finding a **linear combination**.

**Example:** Find GCD(30, 12) and express it as $30x + 12y$

#### **Step 1: Apply Euclidean Algorithm**

* 30 ÷ 12 = 2 remainder 6 → $30 = 2(12) + 6$
* 12 ÷ 6 = 2 remainder 0 → $12 = 2(6) + 0$
* ✅ GCD is 6

#### **Step 2: Backtrack**

* From $6 = 30 - 2(12)$
* So, $6 = 1(30) - 2(12)$

✅ This is a linear combination: $6 = 1 \cdot 30 + (-2) \cdot 12$

**Application:** Extended GCD is used in cryptography to compute **modular inverses**, essential in public key algorithms.

---

### Summary Table

| Concept       | Description                            | Example                      | Application                        |
| ------------- | -------------------------------------- | ---------------------------- | ---------------------------------- |
| Prime Numbers | Numbers divisible only by 1 and itself | 29 → prime                   | Encryption (RSA)                   |
| Factorization | Breaking into prime factors            | 60 → $2^2 \times 3 \times 5$ | Simplifying fractions, GCD/LCM     |
| Modulo        | Finds remainder of division            | $17 \bmod 5 = 2$             | Clocks, encryption, looping logic  |
| GCD           | Largest common divisor of two numbers  | GCD(36,60) = 12              | Reducing fractions, syncing events |
| Extended GCD  | Solves $ax + by = gcd(a,b)$            | $6 = 1(30) - 2(12)$          | Modular inverses in cryptography   |
