# Phase 4 — Traits, Generics & Polymorphism

## Introduction

Software systems grow.

As systems grow, duplication becomes expensive.

Engineers need a way to write code that works for many different types while remaining safe, efficient, and maintainable.

This is the purpose of abstraction.

In Rust, abstraction is primarily achieved through:

- Traits
- Generics
- Associated Types
- Trait Bounds
- Static Dispatch
- Dynamic Dispatch

These concepts form the foundation of Rust's ecosystem.

Without understanding this phase:

- Async Rust is confusing
- Iterators are confusing
- Serde is confusing
- Axum is confusing
- Tokio is confusing

This phase explains how reusable software is built.

---

# 4.1 The Problem Of Duplication

## Why This Matters

Every abstraction begins with a problem.

The problem is duplication.

Example:

Print User

Print Product

Print Order

Print Payment

The behavior is similar.

The types are different.

How do we express this without rewriting code?

## Topics

### 4.1.1 Code Duplication

### 4.1.2 Maintenance Cost

### 4.1.3 Reusability

### 4.1.4 Generalization

### 4.1.5 Abstraction As Compression

### 4.1.6 DRY Principle

---

# 4.2 What Is A Trait?

## Why This Matters

Traits describe behavior.

Structs describe data.

Traits describe capabilities.

Example:

Bird

Can Fly

Airplane

Can Fly

Superman

Can Fly

Different entities.

Same behavior.

## Topics

### 4.2.1 Behavior vs Data

### 4.2.2 Defining Traits

### 4.2.3 Trait Methods

### 4.2.4 Implementing Traits

### 4.2.5 Shared Behavior

### 4.2.6 Real World Analogies

### 4.2.7 Traits As Contracts

---

# 4.3 Traits As Interfaces

## Why This Matters

Large systems communicate through contracts.

Traits are Rust's contract mechanism.

Consumers depend on behavior.

Not implementation.

## Topics

### 4.3.1 Interface Thinking

### 4.3.2 Decoupling

### 4.3.3 Dependency Inversion

### 4.3.4 Stable Contracts

### 4.3.5 Extensibility

### 4.3.6 Designing Good Interfaces

---

# 4.4 Default Implementations

## Why This Matters

Many types share common behavior.

Traits can provide default behavior.

## Topics

### 4.4.1 Shared Implementations

### 4.4.2 Overriding Defaults

### 4.4.3 Reusable Behavior

### 4.4.4 Framework Design Patterns

### 4.4.5 API Evolution

---

# 4.5 Generic Thinking

## Why This Matters

Before learning syntax students must learn the idea.

A function should operate on concepts.

Not specific types.

Example:

Maximum of Integers

Maximum of Floats

Maximum of Custom Types

Same algorithm.

Different data.

## Topics

### 4.5.1 Generalization

### 4.5.2 Type Independence

### 4.5.3 Reusable Algorithms

### 4.5.4 Generic Mental Models

### 4.5.5 Abstraction Through Parameters

---

# 4.6 Generics

## Why This Matters

Generics allow code to work across multiple types.

Without sacrificing safety.

## Topics

### 4.6.1 Generic Functions

### 4.6.2 Generic Structs

### 4.6.3 Generic Enums

### 4.6.4 Generic Methods

### 4.6.5 Type Parameters

### 4.6.6 Reusability

### 4.6.7 Zero Cost Abstractions

---

# 4.7 Trait Bounds

## Why This Matters

Not all types support all operations.

Trait bounds define requirements.

Example:

This function works for any type

that can be compared.

## Topics

### 4.7.1 Why Constraints Exist

### 4.7.2 Trait Bounds

### 4.7.3 where Clauses

### 4.7.4 Multiple Bounds

### 4.7.5 Designing Generic APIs

### 4.7.6 Expressing Requirements

---

# 4.8 Associated Types

## Why This Matters

Some abstractions involve related types.

Associated types simplify relationships.

This concept powers:

- Iterator
- Future
- Stream

## Topics

### 4.8.1 The Problem

### 4.8.2 Type Relationships

### 4.8.3 Associated Types

### 4.8.4 Iterator Internals

### 4.8.5 Designing Trait Families

### 4.8.6 Expressiveness

---

# 4.9 Generic Associated Types (GATs)

## Why This Matters

Modern Rust abstractions increasingly depend on GATs.

Especially advanced async and systems programming.

## Topics

### 4.9.1 Motivation

### 4.9.2 Lifetimes And Generics

### 4.9.3 Generic Associated Types

### 4.9.4 Advanced Abstraction Patterns

### 4.9.5 Future Ecosystem Uses

---

# 4.10 Static Dispatch

## Why This Matters

Generics are compiled differently than many engineers expect.

Rust creates specialized code.

Understanding this explains Rust's performance.

## Topics

### 4.10.1 Compile Time Resolution

### 4.10.2 Monomorphization

### 4.10.3 Generated Code

### 4.10.4 Performance Benefits

### 4.10.5 Code Size Tradeoffs

### 4.10.6 Zero Cost Abstractions

---

# 4.11 Dynamic Dispatch

## Why This Matters

Sometimes exact types are unknown.

Behavior matters more than concrete implementation.

Dynamic dispatch solves this problem.

## Topics

### 4.11.1 Runtime Polymorphism

### 4.11.2 Trait Objects

### 4.11.3 Fat Pointers

### 4.11.4 VTables

### 4.11.5 Runtime Resolution

### 4.11.6 Flexibility Tradeoffs

---

# 4.12 Trait Objects

## Why This Matters

Trait objects allow multiple implementations to be treated uniformly.

Example:

Payment Processor

Stripe

PayPal

Bank Transfer

Different implementations.

Same interface.

## Topics

### 4.12.1 dyn Trait

### 4.12.2 Trait Object Creation

### 4.12.3 Heap Allocation Patterns

### 4.12.4 Runtime Polymorphism

### 4.12.5 Plugin Architectures

### 4.12.6 Extensible Systems

---

# 4.13 Object Safety

## Why This Matters

Not all traits can become trait objects.

Students must understand why.

## Topics

### 4.13.1 What Is Object Safety?

### 4.13.2 Object Safety Rules

### 4.13.3 Self Requirements

### 4.13.4 Generic Methods

### 4.13.5 Trait Object Limitations

### 4.13.6 Design Tradeoffs

---

# 4.14 Polymorphism

## Why This Matters

Polymorphism is one of the most important ideas in software.

One interface.

Many implementations.

## Topics

### 4.14.1 What Is Polymorphism?

### 4.14.2 Compile Time Polymorphism

### 4.14.3 Runtime Polymorphism

### 4.14.4 Behavioral Abstraction

### 4.14.5 Extensible Architectures

---

# 4.15 Operator Overloading

## Why This Matters

Traits power Rust operators.

Students finally see traits everywhere.

## Topics

### 4.15.1 Add

### 4.15.2 Sub

### 4.15.3 Mul

### 4.15.4 Index

### 4.15.5 Custom Operators

### 4.15.6 API Ergonomics

---

# 4.16 Conversion Traits

## Why This Matters

Software constantly transforms data.

Rust uses traits to express conversions.

## Topics

### 4.16.1 From

### 4.16.2 Into

### 4.16.3 TryFrom

### 4.16.4 TryInto

### 4.16.5 Safe Conversions

### 4.16.6 Error Handling

---

# 4.17 Iterator Architecture

## Why This Matters

Students previously used iterators.

Now they learn how iterators are built.

## Topics

### 4.17.1 Iterator Trait

### 4.17.2 next()

### 4.17.3 Associated Types

### 4.17.4 Lazy Evaluation

### 4.17.5 Iterator Adapters

### 4.17.6 Building Custom Iterators

---

# 4.18 Async Foundations Through Traits

## Why This Matters

Async Rust is fundamentally trait-driven.

This chapter prepares students for Phase 6.

## Topics

### 4.18.1 Future Trait

### 4.18.2 Poll

### 4.18.3 State Machines

### 4.18.4 Trait Based Async Design

### 4.18.5 Why Async Works

---

# 4.19 Framework Architecture

## Why This Matters

Students should begin reading real frameworks.

Not using them.

Reading them.

## Topics

### 4.19.1 Serde Architecture

### 4.19.2 Tower Architecture

### 4.19.3 Hyper Architecture

### 4.19.4 SQLx Architecture

### 4.19.5 Tokio Architecture

### 4.19.6 Axum Architecture

### 4.19.7 Patterns Used By All

---

# 4.20 Design Patterns In Rust

## Why This Matters

Patterns emerge from abstraction.

Traits make most patterns possible.

## Topics

### 4.20.1 Strategy Pattern

### 4.20.2 Adapter Pattern

### 4.20.3 Builder Pattern

### 4.20.4 Factory Pattern

### 4.20.5 Decorator Pattern

### 4.20.6 Dependency Injection

### 4.20.7 Plugin Systems

---

# 4.21 Library Design

## Why This Matters

Students transition from application developers to library authors.

## Topics

### 4.21.1 Public APIs

### 4.21.2 Extensibility

### 4.21.3 SemVer Thinking

### 4.21.4 Backward Compatibility

### 4.21.5 Designing For Reuse

### 4.21.6 Long-Term Maintenance

---

# 4.22 Final Project — Build A Framework

Students build a mini framework.

Requirements:

- Traits
- Generics
- Associated Types
- Static Dispatch
- Dynamic Dispatch
- Trait Objects
- Plugin System

Examples:

- HTTP Router
- Event System
- Command Framework
- Job Queue
- Middleware Framework

The goal is not using a framework.

The goal is understanding how frameworks are built.

By the end of this phase students should be able to open the source code of:

- Tokio
- Axum
- Serde
- Tower

and understand the architectural decisions behind them.

This is the phase where software engineering becomes abstraction engineering.
