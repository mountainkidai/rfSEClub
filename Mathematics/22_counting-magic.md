## Counting Magic

Combinatorics is a fundamental branch of discrete mathematics concerned with counting, arrangement, and selection. Mastery of permutations, combinations, and the binomial theorem is crucial in fields such as probability theory, computer science, and statistical modeling.

### Permutations

A **permutation** refers to an ordered arrangement of distinct elements. In scenarios where the order of selection is significant, permutations provide the total number of possible arrangements.

**Formula:**
$P(n, r) = \frac{n!}{(n - r)!}$
where $n$ is the total number of items and $r$ is the number of items being selected.

**Example 1:**
Determine the number of ways to arrange 3 individuals selected from a group of 5:
$P(5, 3) = \frac{5!}{(5 - 3)!} = \frac{120}{2} = 60$

**Example 2:**
Assigning gold, silver, and bronze medals (i.e., 1st, 2nd, and 3rd places) to 10 contestants:
$P(10, 3) = \frac{10!}{7!} = 720$

**Applications:** Task sequencing, rank assignment, cryptographic key arrangements.

---

### Combinations

A **combination** refers to a selection of items where the order of selection is irrelevant. This is critical in probability and statistical sampling.

**Formula:**
$C(n, r) = \frac{n!}{r!(n - r)!}$

**Example 1:**
Selecting 3 members from a 5-person committee:
$C(5, 3) = \frac{5!}{3!2!} = \frac{120}{12} = 10$

**Example 2:**
Selecting 4 candidates from 7 applicants:
$C(7, 4) = \frac{7!}{4!3!} = \frac{5040}{144} = 35$

**Applications:** Statistical sampling, probability distributions, formation of committees and subgroups.

---

### Binomial Expansion

The **binomial theorem** allows us to expand powers of binomial expressions $(a + b)^n$, where $n$ is a non-negative integer. It provides a systematic method of deriving the coefficients and terms in the expansion.

**Formula:**
$(a + b)^n = \sum_{r=0}^{n} C(n, r) \cdot a^{n-r} \cdot b^r$

**Example 1:** Expand $(x + 2)^2$:

$$
= C(2, 0)x^2 + C(2, 1)x \cdot 2 + C(2, 2) \cdot 4 \\
= 1 \cdot x^2 + 2 \cdot 2x + 1 \cdot 4 = x^2 + 4x + 4
$$

**Example 2:** Expand $(x - 3)^3$:

$$
= C(3, 0)x^3 + C(3, 1)x^2(-3) + C(3, 2)x(9) + C(3, 3)(-27) \\
= x^3 - 9x^2 + 27x - 27
$$

**Applications:** Algebraic simplification, probability models (e.g., binomial distribution), polynomial approximation in calculus.

---

### Puzzles and Strategy Applications

Counting principles frequently appear in logic puzzles, probability games, and algorithm design.

**Example 1:**
How many 3-digit numbers can be formed using digits 1 through 5, without repetition?
$P(5, 3) = 60$

**Example 2:**
Determine the number of possible 5-card hands in poker from a standard 52-card deck:
$C(52, 5) = 2,598,960$

**Applications:** Game theory, card shuffling algorithms, puzzle design, optimization problems.
