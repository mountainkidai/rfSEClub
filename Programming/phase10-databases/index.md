# Phase 10 — Databases

## Introduction

Programs manipulate data.

Memory stores data.

But memory disappears when a program stops.

This creates a problem:

```text
Program Stops
↓
Data Lost
```

Databases solve this problem.

A database is a system designed to:

- Store information
- Retrieve information
- Update information
- Protect information
- Scale information

Every modern software system depends on databases.

Examples:

Banking Systems

```text
Accounts
Transactions
Balances
```

Messaging Systems

```text
Users
Messages
Conversations
```

E-Commerce Systems

```text
Products
Orders
Payments
```

Search Engines

```text
Documents
Indexes
Rankings
```

This phase teaches how databases work from first principles.

The goal is not learning SQL.

The goal is understanding how information becomes durable.

---

# 10.1 Why Databases Exist

## Why This Matters

Before databases, understand the problem.

Programs need memory.

Memory is temporary.

Information needs permanence.

## Topics

### 10.1.1 Volatile Memory

### 10.1.2 Persistent Storage

### 10.1.3 Information Durability

### 10.1.4 Data Lifecycles

### 10.1.5 Persistence Requirements

### 10.1.6 Historical Evolution

### 10.1.7 Modern Database Systems

---

# 10.2 Storage Fundamentals

## Why This Matters

Databases ultimately store bytes on disks.

Everything else is abstraction.

## Topics

### 10.2.1 HDDs

### 10.2.2 SSDs

### 10.2.3 Blocks

### 10.2.4 Pages

### 10.2.5 Sequential Access

### 10.2.6 Random Access

### 10.2.7 Storage Latency

### 10.2.8 Storage Tradeoffs

---

# 10.3 Database Architecture

## Why This Matters

Students often treat databases as black boxes.

They are not.

## Topics

### 10.3.1 Storage Engine

### 10.3.2 Query Engine

### 10.3.3 Transaction Manager

### 10.3.4 Buffer Manager

### 10.3.5 Index Manager

### 10.3.6 Execution Engine

### 10.3.7 Database Internals Overview

---

# 10.4 Data Modeling

## Why This Matters

Bad models create bad databases.

Everything begins with modeling.

## Topics

### 10.4.1 Entities

### 10.4.2 Attributes

### 10.4.3 Relationships

### 10.4.4 Cardinality

### 10.4.5 Constraints

### 10.4.6 Domain Modeling Review

### 10.4.7 Database Design Principles

---

# 10.5 Relational Databases

## Why This Matters

The relational model changed computing.

Most business systems still rely on it.

## Topics

### 10.5.1 Relations

### 10.5.2 Tables

### 10.5.3 Rows

### 10.5.4 Columns

### 10.5.5 Keys

### 10.5.6 Relational Thinking

### 10.5.7 Why Relational Databases Won

---

# 10.6 SQL

## Why This Matters

SQL is the language used to communicate with relational databases.

## Topics

### 10.6.1 Querying Data

### 10.6.2 Filtering

### 10.6.3 Sorting

### 10.6.4 Aggregation

### 10.6.5 Joins

### 10.6.6 Grouping

### 10.6.7 Query Composition

### 10.6.8 Advanced SQL

---

# 10.7 Normalization

## Why This Matters

Poor structure creates duplication.

Duplication creates inconsistency.

## Topics

### 10.7.1 Redundancy

### 10.7.2 Data Integrity

### 10.7.3 First Normal Form

### 10.7.4 Second Normal Form

### 10.7.5 Third Normal Form

### 10.7.6 Tradeoffs

### 10.7.7 Denormalization

---

# 10.8 Indexes

## Why This Matters

Without indexes:

```text
Find One Record
↓
Scan Entire Database
```

Indexes exist to make retrieval efficient.

## Topics

### 10.8.1 Why Indexes Exist

### 10.8.2 B-Trees

### 10.8.3 Index Structures

### 10.8.4 Composite Indexes

### 10.8.5 Covering Indexes

### 10.8.6 Index Tradeoffs

### 10.8.7 Query Performance

---

# 10.9 Query Execution

## Why This Matters

SQL is not magic.

Queries become algorithms.

## Topics

### 10.9.1 Parsing

### 10.9.2 Query Planning

### 10.9.3 Optimization

### 10.9.4 Execution Plans

### 10.9.5 Cost Estimation

### 10.9.6 Join Algorithms

### 10.9.7 Query Execution Pipeline

---

# 10.10 Transactions

## Why This Matters

Multiple operations often represent a single business action.

Partial completion is unacceptable.

## Topics

### 10.10.1 Atomicity

### 10.10.2 Consistency

### 10.10.3 Isolation

### 10.10.4 Durability

### 10.10.5 ACID

### 10.10.6 Transaction Lifecycles

### 10.10.7 Failure Recovery

---

# 10.11 Concurrency Control

## Why This Matters

Many users access data simultaneously.

Correctness must remain intact.

## Topics

### 10.11.1 Concurrent Access

### 10.11.2 Lost Updates

### 10.11.3 Dirty Reads

### 10.11.4 Non-Repeatable Reads

### 10.11.5 Phantom Reads

### 10.11.6 Isolation Levels

### 10.11.7 Database Correctness

---

# 10.12 MVCC

## Why This Matters

Modern databases rarely rely solely on locks.

They use versioning.

## Topics

### 10.12.1 Multi-Version Concurrency Control

### 10.12.2 Snapshots

### 10.12.3 Version Chains

### 10.12.4 Visibility Rules

### 10.12.5 PostgreSQL Internals

### 10.12.6 Scalability Benefits

---

# 10.13 Logging & Recovery

## Why This Matters

Systems fail.

Databases must survive crashes.

## Topics

### 10.13.1 Write Ahead Logging

### 10.13.2 WAL

### 10.13.3 Crash Recovery

### 10.13.4 Checkpoints

### 10.13.5 Durability Guarantees

### 10.13.6 Recovery Algorithms

---

# 10.14 NoSQL Databases

## Why This Matters

Not all problems fit relational models.

## Topics

### 10.14.1 Key Value Databases

### 10.14.2 Document Databases

### 10.14.3 Column Databases

### 10.14.4 Graph Databases

### 10.14.5 Tradeoffs

### 10.14.6 Real World Use Cases

---

# 10.15 Caching

## Why This Matters

Storage is slower than memory.

Caching bridges the gap.

## Topics

### 10.15.1 Cache Fundamentals

### 10.15.2 Cache Hit

### 10.15.3 Cache Miss

### 10.15.4 Cache Invalidation

### 10.15.5 Redis Concepts

### 10.15.6 Performance Optimization

---

# 10.16 Replication

## Why This Matters

Data should not exist in one place.

Hardware fails.

## Topics

### 10.16.1 Primary Replica Architecture

### 10.16.2 Replication Streams

### 10.16.3 Synchronous Replication

### 10.16.4 Asynchronous Replication

### 10.16.5 Failover

### 10.16.6 Durability At Scale

---

# 10.17 Partitioning

## Why This Matters

Some databases become too large for one machine.

## Topics

### 10.17.1 Horizontal Scaling

### 10.17.2 Sharding

### 10.17.3 Partition Keys

### 10.17.4 Data Distribution

### 10.17.5 Rebalancing

### 10.17.6 Scaling Challenges

---

# 10.18 PostgreSQL Internals

## Why This Matters

You should understand one production-grade database deeply.

PostgreSQL is an ideal choice.

## Topics

### 10.18.1 Architecture

### 10.18.2 Storage Engine

### 10.18.3 MVCC

### 10.18.4 WAL

### 10.18.5 Query Planner

### 10.18.6 Index Management

### 10.18.7 Performance Tuning

---

# 10.19 Database Design

## Why This Matters

Most database failures are design failures.

Not technology failures.

## Topics

### 10.19.1 Schema Design

### 10.19.2 Relationship Modeling

### 10.19.3 Query Driven Design

### 10.19.4 Scalability Planning

### 10.19.5 Data Lifecycle Management

### 10.19.6 Production Best Practices

---

# 10.20 Final Project — Build A Database Engine

Build from scratch:

### Storage Layer

- Pages
- Records
- Persistence

### Index Layer

- B+ Tree
- Lookup Engine

### Query Layer

- Basic SQL Parser
- Query Execution

### Transaction Layer

- WAL
- Recovery
- MVCC (simplified)

Architecture

```text
Data
↓
Storage Engine
↓
Indexes
↓
Query Engine
↓
Transactions
↓
Results
```

By the end of this phase you should be able to explain:

- Why databases exist
- How data becomes durable
- How indexes work
- How transactions work
- How MVCC works
- How PostgreSQL works
- How databases scale

At this point PostgreSQL should stop feeling like a product and start feeling like a collection of engineering decisions built on top of storage, algorithms, concurrency, and operating system primitives.
