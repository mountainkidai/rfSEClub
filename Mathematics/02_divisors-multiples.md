# Divisors and Multiples

In elementary number theory, the concepts of divisors and multiples form a fundamental basis for understanding the structure of integers and their relationships. These notions underpin several applications, including simplification of expressions and optimizing computational algorithms. These concepts also find applications in fields such as cryptography, algebraic structures, and computational number theory.

## Factors (Divisors)

A divisor (or factor) of an integer $n$ is an integer $d$ such that $n \mod d = 0$. That is, $d$ divides $n$ evenly without leaving a remainder.

**Examples:**

* Factors of 12: $1, 2, 3, 4, 6, 12$
* Factors of 36: $1, 2, 3, 4, 6, 9, 12, 18, 36$

**Applications:**

* Partitioning resources in discrete optimization problems
* Establishing divisibility properties in proofs and algorithms
* Simplifying rational expressions

## Prime Numbers

A prime number is a natural number greater than 1 that has exactly two distinct positive divisors: 1 and itself.

**Examples:**

* Primes: $2, 3, 5, 7, 11$

**Non-example:**

* 4 is composite because it has more than two divisors: $1, 2, 4$.

Prime numbers serve as the basic building blocks of the integers due to the Fundamental Theorem of Arithmetic, which states that every positive integer greater than 1 is either a prime or can be uniquely factored as a product of primes. They are also fundamental in applications such as public-key cryptography and primality testing algorithms.

## Multiples

A multiple of an integer $a$ is any integer of the form $a \times k$, where $k \in \mathbb{Z}$.

**Examples:**

* Multiples of 3: $3, 6, 9, 12, 15, 18, \ldots$
* First five multiples of 4: $4, 8, 12, 16, 20$

**Applications:**

* Scheduling and periodic processes, such as bus timetables or machine cycles
* Modular arithmetic and congruences

## Least Common Multiple (LCM)

The LCM of two integers $a$ and $b$ is the smallest positive integer that is divisible by both $a$ and $b$. It is closely linked with the GCD via the identity:
$\text{LCM}(a, b) = \frac{|a \cdot b|}{\text{GCD}(a, b)}$

**Example:**

* $\text{LCM}(4, 6) = 12$

## Greatest Common Divisor (GCD)

The GCD of two integers $a$ and $b$, denoted $\text{GCD}(a, b)$, is the largest positive integer that divides both $a$ and $b$.

**Example:**

* $\text{GCD}(16, 24) = 8$

**Applications:**

* Reducing fractions to their lowest terms
* Solving linear Diophantine equations $ax + by = c$

## Prime Factorization

Prime factorization involves expressing a composite number as a product of prime numbers. This process is foundational in number theory, encryption, and computational complexity.

**Example:**

* Prime factorization of 60: $60 = 2^2 \times 3 \times 5$
