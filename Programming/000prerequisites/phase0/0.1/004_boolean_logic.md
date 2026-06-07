# Phase 0.4 — Boolean Logic

## Introduction

In the previous chapters, we learned:

- Information is represented using bits.
- Bits can only be `0` or `1`.
- Computers use binary numbers.
- Hexadecimal is a human-friendly representation of binary.

But a major question remains:

> How can a computer make decisions using only `0` and `1`?

For example:

- Is a user logged in?
- Is a password correct?
- Is a file present?
- Is one number greater than another?
- Should a CPU execute an instruction?

The answer is Boolean Logic.

Boolean Logic is the mathematical system that allows computers to reason, compare, and make decisions.

Every CPU, operating system, database, web server, compiler, and AI system ultimately depends on Boolean Logic.

---

## The Problem

Imagine a light bulb.

It can be:

`ON`

or

`OFF`

Nothing in between.

This sounds very similar to binary:

`1`

or

`0`

Now imagine you want to answer questions such as:

- Is the bulb ON?
- Are two bulbs ON?
- Is either bulb ON?
- Is the bulb OFF?

We need a system that can work with these two states.

That system is Boolean Logic.

---

## George Boole

Boolean Logic is named after:

**George Boole (1815–1864)**

He developed a mathematical system where values could only be:

`TRUE`

or

`FALSE`

More than a century later, engineers discovered that:

`TRUE = 1`, `FALSE = 0`

This became the foundation of digital computing.

---

## Boolean Values

A Boolean value can only be one of two possibilities:

| Boolean | Binary |
| ------- | ------ |
| FALSE   | 0      |
| TRUE    | 1      |

There are no other possibilities.

Not:

`0.5`

Not:

`7`

Not:

`-3`

Only:

`TRUE`

or

`FALSE`

---

## Why Boolean Logic Matters

Suppose you log into a website.

The system checks:

```rust
password_is_correct
```

Possible results:

`TRUE`

or

`FALSE`

Nothing else.

The server then makes decisions based on that Boolean value.

Almost every decision in software works this way.

---

## Boolean Variables

Examples:

```rust
let is_logged_in = true;
let has_permission = false;
let is_admin = true;
```

Each variable stores a Boolean value.

---

## Truth Tables

Boolean Logic is usually described using truth tables.

A truth table shows every possible input and output.

Think of it as a complete specification of behavior.

---

## The NOT Operator

The simplest Boolean operation is:

> NOT

NOT flips a value.

If something is true:

`TRUE`

NOT makes it:

`FALSE`

If something is false:

`FALSE`

NOT makes it:

`TRUE`

Truth table:

| A   | NOT A |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

Examples:

- `NOT TRUE = FALSE`
- `NOT FALSE = TRUE`

---

## Real Example

Suppose:

```rust
let is_logged_in = true;
```

Then:

```rust
!is_logged_in
```

becomes:

`FALSE`

Because NOT flips the value.

---

## The AND Operator

AND answers:

> Are BOTH conditions true?

Truth table:

| A   | B   | A AND B |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

The result is TRUE only when both inputs are TRUE.

---

## Real Example

Suppose a website requires:

- Correct password.
- Active account.

Both must be true.

```rust
password_correct && account_active
```

Cases:

| Password | Active | Result |
| -------- | ------ | ------ |
| False    | False  | False  |
| False    | True   | False  |
| True     | False  | False  |
| True     | True   | True   |

Both conditions must succeed.

---

## The OR Operator

OR answers:

> Is at least one condition true?

Truth table:

| A   | B   | A OR B |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

Only one condition needs to be true.

---

## Real Example

Suppose access is granted if the user is:

- An admin.
- A moderator.

```rust
is_admin || is_moderator
```

Cases:

| Admin | Moderator | Result |
| ----- | --------- | ------ |
| False | False     | False  |
| False | True      | True   |
| True  | False     | True   |
| True  | True      | True   |

Only one condition must be true.

---

## Combining Operators

Boolean expressions can become larger.

Example:

```rust
(is_admin || is_manager) && is_logged_in
```

Meaning:

1. User must be logged in.
2. User must be admin or manager.

This pattern appears everywhere in software.

---

## Comparing Values

Boolean values often come from comparisons.

Example:

```rust
5 > 3
```

Result:

`TRUE`

Example:

```rust
2 > 10
```

Result:

`FALSE`

The comparison itself produces a Boolean value.

---

## Equality

Example:

```rust
10 == 10
```

Result:

`TRUE`

Example:

```rust
10 == 5
```

Result:

`FALSE`

---

## Inequality

Example:

```rust
10 != 5
```

Result:

`TRUE`

Example:

```rust
10 != 10
```

Result:

`FALSE`

---

## Boolean Logic Inside CPUs

CPUs use Boolean Logic constantly.

Examples:

- Compare numbers.
- Execute branches.
- Perform arithmetic.
- Read memory.
- Execute instructions.

Every CPU operation eventually reduces to Boolean decisions.

When the CPU executes:

```rust
if x > y
```

it is performing Boolean Logic.

---

## Boolean Logic Inside Databases

Consider:

```sql
SELECT * FROM users WHERE is_active = true
```

The database evaluates Boolean expressions for every row.

Rows producing:

`TRUE`

are returned.

Rows producing:

`FALSE`

are ignored.

---

## Boolean Logic Inside Networking

Suppose a firewall rule says:

`Allow if: Port = 443 AND Protocol = TCP`

This is Boolean Logic.

The firewall evaluates:

`TRUE` or `FALSE`

for every packet.

---

## Boolean Logic Everywhere

Examples:

| System           | Boolean Decision   |
| ---------------- | ------------------ |
| Login System     | Password correct?  |
| CPU              | Execute branch?    |
| Database         | Row matches query? |
| Firewall         | Allow packet?      |
| Operating System | Access granted?    |
| Compiler         | Type valid?        |

Computers make billions of Boolean decisions every second.

---

## From Boolean Logic to Logic Gates

Boolean Logic is mathematical.

Computers need physical hardware.

The next breakthrough was realizing that:

> Electrical circuits can implement Boolean Logic.

Example:

`AND`

can be built using transistors.

`OR`

can be built using transistors.

`NOT`

can be built using transistors.

These physical implementations are called:

> Logic Gates

Logic Gates are the building blocks of CPUs.

---

## First Principles Summary

Boolean Logic is a mathematical system with only two values:

`TRUE`, `FALSE`

which correspond to:

`1`, `0`

Computers use Boolean Logic to make decisions.

The three fundamental operations are:

- NOT
- AND
- OR

Every piece of software eventually relies on Boolean Logic.

Every CPU operation ultimately depends on Boolean Logic.

`Every transistor inside a processor exists to implement Boolean Logic.`

---

## Key Takeaways

- Boolean Logic uses only two values:
  - `TRUE`
  - `FALSE`
- `TRUE` maps to `1`.
- `FALSE` maps to `0`.
- NOT flips a value.
- AND requires all conditions to be true.
- OR requires at least one condition to be true.
- Comparisons produce Boolean values.
- CPUs use Boolean Logic constantly.
- Software is built on Boolean Logic.
- Hardware is built on Boolean Logic.

---

## Mental Model

When you write:

```rust
if user_is_admin
```

you are not writing a high-level programming statement.

You are ultimately triggering billions of transistors that evaluate Boolean expressions.

Everything from operating systems to AI eventually reduces to:

`TRUE`, `FALSE`

Boolean Logic is the bridge between binary information and computation.

---

## Check Your Understanding

1. What are the two possible Boolean values?
2. What does NOT do?
3. When does AND return TRUE?
4. When does OR return TRUE?
5. What is the result of:

`TRUE AND FALSE`

6. What is the result of:

`TRUE OR FALSE`

7. Why does every CPU depend on Boolean Logic?
8. How does Boolean Logic connect to transistors?

If you understand this chapter, you understand the mathematical foundation of every digital computer ever built.

---

## Solution

1. What are the two possible Boolean values?
- TRUE and FALSE (represented as 1 and 0).

2. What does NOT do?
- It flips the value: NOT TRUE = FALSE, NOT FALSE = TRUE.

3. When does AND return TRUE?
- Only when all inputs are TRUE.

4. When does OR return TRUE?
- When at least one input is TRUE.

5. What is the result of: TRUE AND FALSE
- FALSE.

6. What is the result of: TRUE OR FALSE
- TRUE.

7. Why does every CPU depend on Boolean Logic?
- CPUs make decisions and comparisons; Boolean logic is the simple, reliable system (1/0) used to express those decisions in hardware.

8. How does Boolean Logic connect to transistors?
- Transistors act as electronic switches that are arranged to implement logic gates (AND, OR, NOT), so transistor networks realize Boolean functions.

## Next Topic

# Phase 0.5 — Logic Gates

We will learn how Boolean Logic is physically implemented using electronic circuits and how simple gates eventually combine to create CPUs, memory, and entire computers.
