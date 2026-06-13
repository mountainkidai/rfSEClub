# Phase 1 — Rust Fundamentals

## Introduction

In Phase 0 we learned how engineers think.

We learned:

- Problems
- Algorithms
- Data
- State
- Models
- Systems

Now we need a language that allows us to describe those ideas to a computer.

That language is Rust.

The goal of this phase is not to learn Rust syntax.

The goal is to learn how computational ideas are represented in code.

By the end of this phase you should be able to read, write, and organize medium-sized Rust programs while understanding why each language feature exists.

---

# 1.1 What Is A Programming Language?

## Why This Matters

Computers do not understand English.

Computers understand machine instructions.

Programming languages exist so humans can describe computations in a readable form.

Rust is one such language.

## Topics

### 1.1.1 What Is Software?

### 1.1.2 Human Language vs Machine Language

### 1.1.3 Why Programming Languages Exist

### 1.1.4 Evolution Of Programming Languages

- Machine Code
- Assembly
- C
- C++
- Java
- JavaScript
- Go
- Rust

### 1.1.5 Why Rust Exists

Memory Safety

Performance

Concurrency

Reliability

### 1.1.6 Where Rust Is Used

- Operating Systems
- Browsers
- Databases
- Distributed Systems
- Infrastructure

---

# 1.2 Setting Up A Rust Environment

## Why This Matters

Engineers need tools.

Before building software we must understand the development environment.

## Topics

### 1.2.1 Installing Rust

### 1.2.2 rustup

### 1.2.3 cargo

### 1.2.4 rustc

### 1.2.5 VS Code Setup

### 1.2.6 rust-analyzer

### 1.2.7 Project Structure

### 1.2.8 Building And Running Programs

---

# 1.3 Your First Program

## Why This Matters

Every program starts with an entry point.

Understanding execution flow is more important than memorizing syntax.

## Topics

### 1.3.1 What Is A Program?

### 1.3.2 Source Code

### 1.3.3 Compilation

### 1.3.4 Executable Files

### 1.3.5 Program Entry Point

### 1.3.6 The main Function

### 1.3.7 Printing Output

### 1.3.8 Program Lifecycle

---

# 1.4 Values And Data

## Why This Matters

Computers manipulate data.

Everything in software eventually becomes data.

## Topics

### 1.4.1 What Is A Value?

### 1.4.2 Literals

### 1.4.3 Integers

### 1.4.4 Floating Point Numbers

### 1.4.5 Booleans

### 1.4.6 Characters

### 1.4.7 Strings

### 1.4.8 Type Systems

### 1.4.9 Static Typing

### 1.4.10 Why Types Exist

---

# 1.5 Variables And State

## Why This Matters

Programs need memory.

Variables allow programs to remember information.

## Topics

### 1.5.1 What Is State?

### 1.5.2 Variables

### 1.5.3 let

### 1.5.4 Mutability

### 1.5.5 Constants

### 1.5.6 Shadowing

### 1.5.7 Scope

### 1.5.8 Lifetime Of Variables (Conceptual)

---

# 1.6 Expressions And Computation

## Why This Matters

Programs perform transformations.

Expressions are the building blocks of computation.

## Topics

### 1.6.1 What Is An Expression?

### 1.6.2 Statements vs Expressions

### 1.6.3 Arithmetic Operators

### 1.6.4 Comparison Operators

### 1.6.5 Boolean Logic

### 1.6.6 Evaluation

### 1.6.7 Building Computations

---

# 1.7 Decision Making

## Why This Matters

Software reacts to conditions.

Without decisions there is no intelligence.

## Topics

### 1.7.1 Conditional Logic

### 1.7.2 if

### 1.7.3 else

### 1.7.4 else if

### 1.7.5 Match Expressions

### 1.7.6 Pattern Matching Basics

### 1.7.7 Exhaustiveness

### 1.7.8 Modeling Decisions

---

# 1.8 Repetition And Iteration

## Why This Matters

Computers excel at repeating work.

Loops automate repetition.

## Topics

### 1.8.1 Why Loops Exist

### 1.8.2 loop

### 1.8.3 while

### 1.8.4 for

### 1.8.5 Iteration

### 1.8.6 break

### 1.8.7 continue

### 1.8.8 Loop Design

---

# 1.9 Functions

## Why This Matters

Functions allow decomposition.

Large systems are built from smaller functions.

## Topics

### 1.9.1 What Is A Function?

### 1.9.2 Inputs

### 1.9.3 Outputs

### 1.9.4 Parameters

### 1.9.5 Return Values

### 1.9.6 Function Composition

### 1.9.7 Pure Functions

### 1.9.8 Side Effects

### 1.9.9 Designing Good Functions

---

# 1.10 Collections

## Why This Matters

Real systems manage groups of data.

Collections organize multiple values.

## Topics

### 1.10.1 Arrays

### 1.10.2 Slices

### 1.10.3 Tuples

### 1.10.4 Vectors

### 1.10.5 Iteration Over Collections

### 1.10.6 Collection Operations

### 1.10.7 Choosing The Right Collection

---

# 1.11 Structs — Modeling Reality

## Why This Matters

Software models real-world entities.

Structs are the first major abstraction tool.

## Topics

### 1.11.1 What Is A Model?

### 1.11.2 What Is A Struct?

### 1.11.3 Fields

### 1.11.4 Instances

### 1.11.5 Methods

### 1.11.6 Associated Functions

### 1.11.7 Data Encapsulation

### 1.11.8 Modeling Real Systems

Examples:

- User
- Product
- Order
- Payment

---

# 1.12 Enums — Modeling Possibilities

## Why This Matters

Reality often has states.

Enums allow software to represent valid possibilities.

## Topics

### 1.12.1 What Is An Enum?

### 1.12.2 Variants

### 1.12.3 Data-Carrying Variants

### 1.12.4 Pattern Matching

### 1.12.5 State Modeling

### 1.12.6 Finite State Systems

Examples:

Order

- Pending
- Processing
- Shipped
- Delivered
- Cancelled

---

# 1.13 Error Handling

## Why This Matters

Real systems fail.

Great engineers plan for failure.

## Topics

### 1.13.1 What Is Failure?

### 1.13.2 Panic

### 1.13.3 Recoverable Errors

### 1.13.4 Result

### 1.13.5 Option

### 1.13.6 Error Propagation

### 1.13.7 Defensive Programming

### 1.13.8 Designing Reliable Software

---

# 1.14 Modules And Organization

## Why This Matters

Large systems require structure.

Without organization software becomes chaos.

## Topics

### 1.14.1 What Is A Module?

### 1.14.2 Visibility

### 1.14.3 pub

### 1.14.4 Crates

### 1.14.5 Packages

### 1.14.6 Cargo Workspaces

### 1.14.7 Software Architecture Basics

### 1.14.8 Organizing Large Projects

---

# 1.15 Testing

## Why This Matters

Software must prove correctness.

Testing is engineering, not debugging.

## Topics

### 1.15.1 Why Testing Exists

### 1.15.2 Unit Tests

### 1.15.3 Integration Tests

### 1.15.4 Assertions

### 1.15.5 Test Driven Thinking

### 1.15.6 Reliability Engineering

### 1.15.7 Continuous Verification

---

# 1.16 Documentation And Communication

## Why This Matters

Software is written for humans first.

Code is communication.

## Topics

### 1.16.1 Code Readability

### 1.16.2 Naming

### 1.16.3 Comments

### 1.16.4 Rust Documentation

### 1.16.5 API Design Basics

### 1.16.6 Communicating Intent

---

# 1.17 Final Project

Build a complete command-line application.

Requirements:

- Multiple modules
- Structs
- Enums
- Functions
- Collections
- Error handling
- Testing

Suggested Projects:

- Expense Tracker
- Inventory System
- Task Manager
- Library Management System
- Student Management System

you should finish this phase comfortable writing 1,000–2,000 lines of Rust code without AI assistance.

They should understand not only how Rust works, but why programming languages are structured the way they are.

Only then should they proceed to Memory & Program Execution.
