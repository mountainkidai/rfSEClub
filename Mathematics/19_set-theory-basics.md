## Set Theory Basics

Set theory is a fundamental concept in mathematics that focuses on collections of objects called **sets**. These collections are used to group related items and study relationships between them. A set must be **well-defined**, meaning that it must be clear whether any given object is a member of the set or not.

### Sets

A **set** is a well-defined collection of distinct objects. These objects are called **elements** or **members** of the set. Sets are typically denoted using curly braces `{}`.

**Example:**

```txt
A = {1, 2, 3, 4}
```

Here, set A contains the numbers 1, 2, 3, and 4.

You can also use **set-builder notation** to define sets:

```txt
B = {x | x is an even number less than 10} = {2, 4, 6, 8}
```

Note: Sets do not include repeated elements, and their order does not matter.

### Subsets

A **subset** is a set whose elements all belong to another set. If every element of set A is also in set B, then A is a subset of B, written as:

```txt
A ⊆ B
```

If A is a subset of B but not equal to B, it's called a **proper subset**:

```txt
A ⊂ B
```

**Example:**

```txt
If B = {1, 2, 3, 4}, then A = {2, 4} is a subset of B.
```

### Union

The **union** of two sets A and B is the set that contains all elements that are in A, or B, or both. It is denoted by:

```txt
A ∪ B
```

**Example:**

```txt
A = {1, 2, 3}, B = {3, 4, 5}
A ∪ B = {1, 2, 3, 4, 5}
```

### Intersection

The **intersection** of two sets A and B is the set of elements that are in both A and B. It is denoted by:

```txt
A ∩ B
```

**Example:**

```txt
A = {1, 2, 3}, B = {3, 4, 5}
A ∩ B = {3}
```

### Cardinality

The **cardinality** of a set is the number of elements it contains. It is denoted by vertical bars:

```txt
|A|
```

**Example:**

```txt
If A = {1, 2, 3, 4}, then |A| = 4
```

**Additional Note:** Sets can contain elements other than numbers, such as:

```txt
C = {"apple", "banana", "orange"}, |C| = 3
```

Duplicates are ignored, so:

```txt
D = {"apple", "banana", "apple"} => |D| = 2
```
