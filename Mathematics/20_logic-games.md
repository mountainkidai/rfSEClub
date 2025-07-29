## Logic Games

Logic is a branch of mathematics and philosophy that focuses on reasoning and drawing conclusions from given conditions or facts. It helps us make sense of statements, analyze situations, and solve puzzles using structured rules. Logic games are a fun way to apply these principles through true or false statements.

### Propositions

A **proposition** is a declarative statement that can be clearly classified as either **true** or **false**, but not both.

**Examples:**

* "The sky is blue." → True
* "2 + 2 = 5." → False

Statements that are questions or commands (like "Close the door." or "Is it raining?") are **not** propositions because they don't have a truth value.

Propositions form the basic units of logical analysis. In real-world applications, identifying propositions helps structure complex problems into manageable logical components.

### AND / OR / NOT

Logical operators are tools that allow us to combine or alter propositions.

* **AND ( ∧ )**: The combined statement is true only if **both** individual statements are true.

  * Example: "It is sunny AND warm." → This is true only if it is both sunny and warm.

* **OR ( ∨ )**: The combined statement is true if **at least one** of the individual statements is true.

  * Example: "It is sunny OR raining." → This is true if either condition is true (or both).

* **NOT ( ¬ )**: This operator reverses the truth value of a statement.

  * Example: "It is NOT cold." → This is true if it’s not cold.

**Truth Table for AND, OR, NOT:**

```txt
P     Q     P ∧ Q   P ∨ Q   ¬P
T     T      T       T      F
T     F      F       T      F
F     T      F       T      T
F     F      F       F      T
```

These tables show all the possible combinations of truth values for propositions P and Q, helping us visualize how logical operators behave.

### If-Then (Implication)

A conditional statement uses the structure **if-then** to express dependency between two propositions.

**Format:** If P, then Q (written as P → Q)

**Example:**

* "If it rains, then the ground gets wet."
* This statement is only false if it rains but the ground doesn't get wet. Otherwise, it's considered true.

**Truth Table for Implication:**

```txt
P     Q     P → Q
T     T      T
T     F      F
F     T      T
F     F      T
```

Conditional logic is useful in programming, science, and planning—where one event depends on another.

### Truth Tables

A **truth table** displays all possible truth values for a logical expression based on its component statements.

**Example:** Construct a truth table for the statement: (P ∨ Q) ∧ ¬Q

```txt
P     Q     ¬Q    P ∨ Q   (P ∨ Q) ∧ ¬Q
T     T      F       T         F
T     F      T       T         T
F     T      F       T         F
F     F      T       F         F
```

This helps break down complex statements and verify when they are true or false. It’s a powerful method for analyzing logic problems and validating reasoning.

Logic forms the backbone of fields like computer science, mathematics, artificial intelligence, and everyday decision-making. Whether solving puzzles or building algorithms, understanding logic enables clearer thinking and better problem-solving skills.
