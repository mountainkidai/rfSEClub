# Phase 3 — Modeling & Abstractions

## Introduction

Computers do not understand reality.

They understand data.

Therefore every software system begins with a translation process:

Reality
↓
Abstraction
↓
Model
↓
Code

A hospital becomes:

- Patient
- Doctor
- Appointment
- Prescription

An e-commerce system becomes:

- User
- Product
- Cart
- Order
- Payment

A social network becomes:

- User
- Post
- Comment
- Like
- Follow

Programming is not writing code.

Programming is building accurate models of reality.

The purpose of this phase is to teach students how engineers transform messy real-world systems into clean software systems.

---

# 3.1 What Is A Model?

## Why This Matters

Every piece of software is a model.

The software is never the real thing.

It is merely a representation.

Example:

Real World:

Person

Software:

struct User

The model is not reality.

It is a simplified version of reality.

## Topics

### 3.1.1 What Is Reality?

### 3.1.2 What Is A Model?

### 3.1.3 Why Models Exist

### 3.1.4 Simplification

### 3.1.5 Accuracy vs Complexity

### 3.1.6 All Software Is Modeling

### 3.1.7 Examples

- Maps
- Databases
- Social Networks
- Games

---

# 3.2 Abstraction

## Why This Matters

Reality is infinitely detailed.

Software cannot represent everything.

Abstraction allows us to ignore irrelevant details.

Example:

Car

Real car contains:

- Thousands of parts
- Wires
- Sensors
- Bolts
- Pistons

Software model:

Car

- id
- manufacturer
- model
- speed

Everything else is ignored.

## Topics

### 3.2.1 What Is Abstraction?

### 3.2.2 Necessary Details

### 3.2.3 Irrelevant Details

### 3.2.4 Layers Of Abstraction

### 3.2.5 Abstraction Boundaries

### 3.2.6 Leaky Abstractions

### 3.2.7 Designing Good Abstractions

---

# 3.3 Entities

## Why This Matters

Most systems contain things.

These things become entities.

Examples:

- User
- Product
- Order
- Invoice
- Message

Entities are the building blocks of software.

## Topics

### 3.3.1 What Is An Entity?

### 3.3.2 Identity

### 3.3.3 Attributes

### 3.3.4 Entity Lifecycles

### 3.3.5 Real World Examples

### 3.3.6 Structs As Entities

### 3.3.7 Modeling Entities

---

# 3.4 Relationships

## Why This Matters

Entities rarely exist alone.

They interact.

Software must model relationships.

Example:

User
↓
places
↓
Order

Order
↓
contains
↓
Product

## Topics

### 3.4.1 What Is A Relationship?

### 3.4.2 One To One

### 3.4.3 One To Many

### 3.4.4 Many To Many

### 3.4.5 Ownership Relationships

### 3.4.6 Dependency Relationships

### 3.4.7 Relationship Modeling

---

# 3.5 Behavior

## Why This Matters

Entities are not only data.

They perform actions.

Example:

User

Data:

- Name
- Email

Behavior:

- Login
- Logout
- Update Profile

This is where methods originate.

## Topics

### 3.5.1 Data vs Behavior

### 3.5.2 Methods

### 3.5.3 Responsibilities

### 3.5.4 Encapsulation

### 3.5.5 Domain Logic

### 3.5.6 Object Responsibilities

---

# 3.6 State Machines

## Why This Matters

Many systems are collections of states.

Example:

Order

Pending
↓
Paid
↓
Processing
↓
Shipped
↓
Delivered

Understanding state transitions is fundamental.

## Topics

### 3.6.1 What Is State?

### 3.6.2 What Is A State Machine?

### 3.6.3 State Transitions

### 3.6.4 Valid States

### 3.6.5 Invalid States

### 3.6.6 Finite State Machines

### 3.6.7 Modeling Workflows

---

# 3.7 Domain Modeling

## Why This Matters

Software should reflect the language of the domain.

This is where real architecture begins.

Example:

Banking Domain

- Account
- Transaction
- Withdrawal
- Deposit

Travel Domain

- Traveler
- Booking
- Hotel
- Itinerary

## Topics

### 3.7.1 What Is A Domain?

### 3.7.2 Ubiquitous Language

### 3.7.3 Domain Concepts

### 3.7.4 Domain Boundaries

### 3.7.5 Domain Rules

### 3.7.6 Domain Driven Thinking

---

# 3.8 Composition

## Why This Matters

Large systems are built from smaller systems.

Composition is one of the most important ideas in software.

Example:

Car

contains

- Engine
- Transmission
- Wheels

Software follows the same pattern.

## Topics

### 3.8.1 What Is Composition?

### 3.8.2 Building Larger Systems

### 3.8.3 Nested Models

### 3.8.4 Aggregates

### 3.8.5 Reuse Through Composition

### 3.8.6 Composition vs Inheritance

---

# 3.9 Modules

## Why This Matters

As systems grow, organization becomes critical.

Modules create boundaries.

Without boundaries:

Complexity explodes.

## Topics

### 3.9.1 Why Modules Exist

### 3.9.2 Encapsulation

### 3.9.3 Public Interfaces

### 3.9.4 Internal Implementation

### 3.9.5 Domain Separation

### 3.9.6 Large Scale Organization

---

# 3.10 APIs And Contracts

## Why This Matters

Software components communicate through contracts.

An API is a contract.

The user of the API should not need to understand implementation details.

## Topics

### 3.10.1 What Is An Interface?

### 3.10.2 Public APIs

### 3.10.3 Input Contracts

### 3.10.4 Output Contracts

### 3.10.5 Stability

### 3.10.6 Backward Compatibility

### 3.10.7 API Design Principles

---

# 3.11 Invariants

## Why This Matters

Every system contains truths that must always remain true.

Examples:

Age cannot be negative.

Account balance cannot be below allowed limits.

An order cannot be delivered before being shipped.

These truths are called invariants.

## Topics

### 3.11.1 What Is An Invariant?

### 3.11.2 Business Rules

### 3.11.3 Data Validation

### 3.11.4 Maintaining Correctness

### 3.11.5 Defensive Modeling

### 3.11.6 Preventing Invalid States

---

# 3.12 Boundaries And Contexts

## Why This Matters

Large systems cannot be understood as a single model.

They must be divided.

Example:

E-commerce

Inventory System

Order System

Payment System

Notification System

Each has different responsibilities.

## Topics

### 3.12.1 Context Boundaries

### 3.12.2 Responsibility Separation

### 3.12.3 Information Flow

### 3.12.4 Context Mapping

### 3.12.5 System Evolution

---

# 3.13 Refactoring Models

## Why This Matters

Models improve over time.

The first model is rarely correct.

Engineers continuously refine abstractions.

## Topics

### 3.13.1 Technical Debt

### 3.13.2 Model Evolution

### 3.13.3 Removing Duplication

### 3.13.4 Improving Clarity

### 3.13.5 Maintaining Simplicity

### 3.13.6 Refactoring Techniques

---

# 3.14 Architecture Foundations

## Why This Matters

Architecture is simply modeling at scale.

Every architecture emerges from:

Entities
↓
Relationships
↓
Boundaries
↓
Interactions

## Topics

### 3.14.1 What Is Architecture?

### 3.14.2 Components

### 3.14.3 Dependencies

### 3.14.4 Information Flow

### 3.14.5 Layered Systems

### 3.14.6 Architectural Tradeoffs

---

# 3.15 Final Project — Model A Real System

Students receive a real-world domain.

Examples:

- Library
- Hospital
- E-commerce
- Banking
- Ride Sharing
- Food Delivery
- Messaging Platform

Requirements:

1. Identify entities
2. Define relationships
3. Define states
4. Define workflows
5. Define invariants
6. Define modules
7. Define boundaries
8. Design APIs
9. Implement complete Rust model

No database.

No networking.

No UI.

Only pure domain modeling.

The goal is to build a software representation of reality.

A student who completes this phase should be able to look at any business, process, or system and answer:

"What are the entities?"

"What are the relationships?"

"What are the states?"

"What are the rules?"

That skill is the foundation of architecture, databases, distributed systems, and product engineering.
