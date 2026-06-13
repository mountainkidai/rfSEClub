# Phase 2 — Memory & Program Execution

## Introduction

In Phase 1 we learned how to write Rust programs.

Now we ask a deeper question:

What happens after we type:

```rust
cargo run
```

How does source code become a running program?

How does memory work?

Where do variables live?

What is a pointer?

What is ownership actually solving?

Why does Rust need borrowing and lifetimes?

This phase answers those questions from first principles.

By the end of this phase, students should understand exactly how software executes inside a computer.

---

# 2.1 What Is A Program?

## Why This Matters

Before understanding execution we must understand what a program actually is.

A program is not source code.

A program is a set of instructions executed by a CPU.

## Topics

### 2.1.1 What Is Software?

### 2.1.2 Source Code vs Program

### 2.1.3 Instructions

### 2.1.4 Machine Code

### 2.1.5 Executables

### 2.1.6 Programs As State Transformations

### 2.1.7 The Program Lifecycle

Source Code
↓
Compiler
↓
Machine Code
↓
Executable
↓
Running Process

---

# 2.2 From Source Code To Executable

## Why This Matters

Students often write code without understanding what the compiler does.

This chapter builds the complete pipeline.

## Topics

### 2.2.1 Source Files

### 2.2.2 Parsing

### 2.2.3 Compilation

### 2.2.4 Optimization

### 2.2.5 Linking

### 2.2.6 Executable Generation

### 2.2.7 What Cargo Actually Does

### 2.2.8 Debug vs Release Builds

---

# 2.3 Binary Representation

## Why This Matters

Computers understand bits.

Everything becomes binary.

Understanding this explains memory, CPU execution, and data representation.

## Topics

### 2.3.1 Bits

### 2.3.2 Bytes

### 2.3.3 Binary Numbers

### 2.3.4 Hexadecimal

### 2.3.5 Signed Integers

### 2.3.6 Unsigned Integers

### 2.3.7 Floating Point Numbers

### 2.3.8 Character Encoding

### 2.3.9 UTF-8

### 2.3.10 How Data Exists In Memory

---

# 2.4 Computer Memory

## Why This Matters

Programs manipulate memory.

Without understanding memory nothing else makes sense.

## Topics

### 2.4.1 What Is Memory?

### 2.4.2 Memory Cells

### 2.4.3 Addresses

### 2.4.4 Reading Memory

### 2.4.5 Writing Memory

### 2.4.6 RAM

### 2.4.7 Volatile Memory

### 2.4.8 Persistence vs Memory

### 2.4.9 Memory As A Giant Array

---

# 2.5 Memory Hierarchy

## Why This Matters

Not all memory is equally fast.

Modern computers are built around memory tradeoffs.

## Topics

### 2.5.1 Registers

### 2.5.2 L1 Cache

### 2.5.3 L2 Cache

### 2.5.4 L3 Cache

### 2.5.5 RAM

### 2.5.6 SSD

### 2.5.7 Latency

### 2.5.8 Throughput

### 2.5.9 Why Memory Has Layers

### 2.5.10 Locality Of Reference

---

# 2.6 Process Memory Layout

## Why This Matters

Programs do not use memory randomly.

Every process has structure.

## Topics

### 2.6.1 What Is A Process?

### 2.6.2 Virtual Address Space

### 2.6.3 Text Segment

### 2.6.4 Data Segment

### 2.6.5 BSS Segment

### 2.6.6 Heap

### 2.6.7 Stack

### 2.6.8 Memory Layout Visualization

### 2.6.9 Process Isolation

---

# 2.7 The Stack

## Why This Matters

Most program execution happens on the stack.

Understanding stack explains function calls.

## Topics

### 2.7.1 What Is The Stack?

### 2.7.2 Stack Frames

### 2.7.3 Function Calls

### 2.7.4 Function Returns

### 2.7.5 Local Variables

### 2.7.6 Recursion

### 2.7.7 Stack Overflow

### 2.7.8 Why The Stack Is Fast

---

# 2.8 The Heap

## Why This Matters

Some data cannot live on the stack.

The heap solves this problem.

## Topics

### 2.8.1 What Is The Heap?

### 2.8.2 Dynamic Allocation

### 2.8.3 Allocators

### 2.8.4 Heap Objects

### 2.8.5 Allocation Costs

### 2.8.6 Fragmentation

### 2.8.7 Stack vs Heap

### 2.8.8 Choosing Storage Locations

---

# 2.9 References And Pointers

## Why This Matters

Software constantly refers to memory locations.

Pointers are the foundation of modern programming.

## Topics

### 2.9.1 What Is An Address?

### 2.9.2 What Is A Pointer?

### 2.9.3 Dereferencing

### 2.9.4 References

### 2.9.5 Mutable References

### 2.9.6 Shared References

### 2.9.7 Pointer Arithmetic (Conceptual)

### 2.9.8 Memory Safety Problems

---

# 2.10 Ownership

## Why This Matters

Ownership is Rust's most important idea.

Everything before this chapter exists to explain why ownership is needed.

## Topics

### 2.10.1 Memory Problems In Traditional Languages

### 2.10.2 Double Free

### 2.10.3 Dangling Pointers

### 2.10.4 Memory Leaks

### 2.10.5 Ownership Rules

### 2.10.6 Ownership Transfer

### 2.10.7 Move Semantics

### 2.10.8 Why Ownership Exists

---

# 2.11 Borrowing

## Why This Matters

Ownership alone is too restrictive.

Borrowing enables safe sharing.

## Topics

### 2.11.1 What Is Borrowing?

### 2.11.2 Immutable Borrowing

### 2.11.3 Mutable Borrowing

### 2.11.4 Borrow Rules

### 2.11.5 Aliasing

### 2.11.6 Mutation Safety

### 2.11.7 The Borrow Checker

### 2.11.8 Compile-Time Safety

---

# 2.12 Lifetimes

## Why This Matters

References must remain valid.

Lifetimes ensure safety.

## Topics

### 2.12.1 Why Lifetimes Exist

### 2.12.2 Reference Validity

### 2.12.3 Scope Relationships

### 2.12.4 Lifetime Annotations

### 2.12.5 Lifetime Elision

### 2.12.6 Common Lifetime Patterns

### 2.12.7 Designing Lifetime-Friendly APIs

---

# 2.13 Smart Pointers

## Why This Matters

Heap allocation alone is not enough.

Software often needs advanced ownership patterns.

## Topics

### 2.13.1 What Is A Smart Pointer?

### 2.13.2 Box

### 2.13.3 Rc

### 2.13.4 Arc

### 2.13.5 Weak

### 2.13.6 Ownership Graphs

### 2.13.7 Reference Counting

### 2.13.8 Shared Ownership

---

# 2.14 Interior Mutability

## Why This Matters

Sometimes mutation must occur through shared references.

Rust provides controlled mechanisms.

## Topics

### 2.14.1 Why Interior Mutability Exists

### 2.14.2 Cell

### 2.14.3 RefCell

### 2.14.4 Runtime Borrow Checking

### 2.14.5 Rc + RefCell

### 2.14.6 Tradeoffs

### 2.14.7 Safe Flexibility

---

# 2.15 Closures

## Why This Matters

Functions can capture state.

Closures are heavily used throughout Rust.

Especially in:

- Iterators
- Async
- Concurrency

## Topics

### 2.15.1 What Is A Closure?

### 2.15.2 Capturing Variables

### 2.15.3 Ownership And Closures

### 2.15.4 Borrowing And Closures

### 2.15.5 Fn

### 2.15.6 FnMut

### 2.15.7 FnOnce

---

# 2.16 Iterators

## Why This Matters

Iteration is one of Rust's core abstractions.

Understanding iterators prepares students for traits and async.

## Topics

### 2.16.1 What Is Iteration?

### 2.16.2 Iterator Pattern

### 2.16.3 Iterator Trait

### 2.16.4 Lazy Evaluation

### 2.16.5 map

### 2.16.6 filter

### 2.16.7 fold

### 2.16.8 Chaining Operations

---

# 2.17 Unsafe Rust

## Why This Matters

Safe Rust has limits.

Systems programming sometimes requires direct memory access.

Students must understand what Rust is protecting them from.

## Topics

### 2.17.1 What Is Unsafe?

### 2.17.2 Raw Pointers

### 2.17.3 Dereferencing Raw Pointers

### 2.17.4 Unsafe Functions

### 2.17.5 Unsafe Traits

### 2.17.6 FFI Introduction

### 2.17.7 When Unsafe Is Necessary

### 2.17.8 Building Safe Abstractions

---

# 2.18 Memory Performance

## Why This Matters

Memory often dominates performance.

Fast software usually means efficient memory usage.

## Topics

### 2.18.1 Cache Locality

### 2.18.2 Cache Misses

### 2.18.3 Data Layout

### 2.18.4 Allocation Costs

### 2.18.5 Memory Profiling

### 2.18.6 Performance Tradeoffs

---

# 2.19 Final Project — Build A Memory Visualizer

Students build tools demonstrating:

- Stack allocation
- Heap allocation
- Ownership transfer
- Borrowing
- Lifetimes
- Smart pointers
- Memory layout

The project should visualize:

Program
↓
Memory
↓
Ownership
↓
Execution

The goal is not building an application.

The goal is understanding how software exists inside a machine.

After completing this phase, students should be able to explain exactly:

- Where variables live
- Why ownership exists
- Why borrowing exists
- Why lifetimes exist
- How memory is organized
- How Rust achieves memory safety

At this point Rust stops feeling magical.

It starts feeling inevitable.
