# Paradigms of Programming

Programming paradigms are **styles or approaches** to writing and organizing code. Each paradigm influences how we think about problems and design solutions. Understanding these paradigms helps programmers pick the right tool for the job.

---

## Procedural Programming

This paradigm structures code into procedures or routines (functions). It focuses on **step-by-step instructions** and changes in the program's state.

* **Languages**: C, Pascal, BASIC
* **Key Concepts**: Sequence, selection (if-else), loops (for, while)
* **Example**:

  ```c
  int add(int a, int b) {
    return a + b;
  }
  ```

### Use Case

* Operating system routines, numerical computations, embedded device logic.

---

## Object-Oriented Programming (OOP)

OOP organizes code into **objects**, which combine data (attributes) and behavior (methods).

* **Languages**: Java, Python, C++, Kotlin
* **Key Concepts**: Classes, objects, inheritance, polymorphism, encapsulation
* **Example**:

  ```python
  class Dog:
      def __init__(self, name):
          self.name = name
      def bark(self):
          print(self.name + " says woof!")
  ```

### Use Case

* Video games, GUI apps, large software systems, Android/iOS development.

---

## Functional Programming

Focuses on **pure functions** without side effects and uses **immutable data**.

* **Languages**: Haskell, Scala, Elixir, JavaScript (partial support), Python (partial support)
* **Key Concepts**: Higher-order functions, recursion, immutability
* **Example**:

  ```python
  def square(x):
      return x * x

  print(list(map(square, [1, 2, 3])))
  ```

### Use Case

* Data transformation pipelines, financial algorithms, AI/machine learning model pipelines.

---

## Logic Programming

Based on **formal logic and rules** rather than explicit control flow. You declare **what** should be true, and the system figures out **how** to make it true.

* **Languages**: Prolog, Datalog
* **Key Concepts**: Facts, rules, queries, unification
* **Example** (Prolog):

  ```prolog
  parent(john, mary).
  parent(mary, alice).
  grandparent(X, Y) :- parent(X, Z), parent(Z, Y).
  ```

### Use Case

* AI, expert systems, rule-based automation (e.g., recommendation engines).

---

## Multi-Paradigm Languages

Many modern languages support multiple paradigms. For example:

* **Python**: Procedural + OOP + some functional
* **JavaScript**: Functional + OOP
* **Rust**: Procedural + Functional + Systems programming

> This flexibility allows developers to use the best paradigm for each part of their system.

---

## Summary

* Programming paradigms shape how code is written and structured.
* Choosing the right paradigm improves clarity, maintainability, and performance.
* Understanding different paradigms empowers you to write better software.
