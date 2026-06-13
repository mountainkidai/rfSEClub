# Phase 5 — Concurrency

## Introduction

For decades software became faster because CPUs became faster.

Engineers could write inefficient code and future hardware would compensate.

That era ended.

Modern CPUs no longer achieve major performance improvements through clock speed increases.

Instead:

```text
More Cores
More Hardware Threads
More Parallel Execution
```

This created a new challenge:

How can software utilize multiple execution units safely and efficiently?

Concurrency is the study of coordinating multiple tasks that execute during overlapping periods of time.

Every modern system depends on concurrency:

- Operating Systems
- Browsers
- Databases
- Search Engines
- Web Servers
- Trading Systems
- AI Infrastructure

This phase teaches how concurrent systems work from first principles.

---

# 5.1 The Need For Concurrency

## Why This Exists

Imagine a restaurant.

One chef:

```text
Take Order
↓
Cook
↓
Serve
↓
Take Next Order
```

Ten customers become a problem.

Now imagine:

```text
Multiple Chefs
Multiple Waiters
Multiple Orders
```

The restaurant handles more work simultaneously.

Computers face the same challenge.

## Topics

### 5.1.1 Limits Of Sequential Execution

### 5.1.2 Throughput

### 5.1.3 Latency

### 5.1.4 Resource Utilization

### 5.1.5 Multi-Core CPUs

### 5.1.6 Why Modern Software Requires Concurrency

### 5.1.7 Real World Examples

---

# 5.2 The Evolution Of CPU Architecture

## Why This Matters

Concurrency only makes sense if students understand modern hardware.

## Topics

### 5.2.1 Single Core CPUs

### 5.2.2 Clock Speed Growth

### 5.2.3 Power Limits

### 5.2.4 Multi-Core Architecture

### 5.2.5 Hyper-Threading

### 5.2.6 Hardware Threads

### 5.2.7 Modern Server CPUs

### 5.2.8 Implications For Software Design

---

# 5.3 Concurrency vs Parallelism

## Why This Matters

These concepts are related but different.

Concurrency:

```text
Dealing with many tasks.
```

Parallelism:

```text
Executing many tasks simultaneously.
```

## Topics

### 5.3.1 Concurrent Systems

### 5.3.2 Parallel Systems

### 5.3.3 Scheduling

### 5.3.4 Time Slicing

### 5.3.5 Multi-Core Execution

### 5.3.6 Common Misconceptions

### 5.3.7 Real System Examples

---

# 5.4 Processes

## Why This Matters

The operating system executes processes.

Everything begins here.

## Topics

### 5.4.1 What Is A Process?

### 5.4.2 Process Memory

### 5.4.3 Process Isolation

### 5.4.4 Process Lifecycle

### 5.4.5 Process Creation

### 5.4.6 Process Termination

### 5.4.7 Context Switching

### 5.4.8 Process Costs

---

# 5.5 Threads

## Why This Matters

Threads are execution units within a process.

Most concurrent software uses threads.

## Topics

### 5.5.1 What Is A Thread?

### 5.5.2 Thread Memory Model

### 5.5.3 Shared Address Space

### 5.5.4 Thread Creation

### 5.5.5 Thread Scheduling

### 5.5.6 Thread Lifecycle

### 5.5.7 Context Switching

### 5.5.8 Thread Costs

---

# 5.6 Shared Memory

## Why This Matters

The moment multiple threads access the same memory, concurrency becomes difficult.

## Topics

### 5.6.1 Shared State

### 5.6.2 Simultaneous Access

### 5.6.3 Read Operations

### 5.6.4 Write Operations

### 5.6.5 Memory Visibility

### 5.6.6 Consistency

### 5.6.7 Shared Memory Architecture

---

# 5.7 Race Conditions

## Why This Matters

This is the first major concurrency failure mode.

## Topics

### 5.7.1 What Is A Race Condition?

### 5.7.2 Lost Updates

### 5.7.3 Timing Dependencies

### 5.7.4 Non-Determinism

### 5.7.5 Data Corruption

### 5.7.6 Detection Strategies

### 5.7.7 Prevention Techniques

### 5.7.8 Real Production Incidents

---

# 5.8 Critical Sections

## Why This Matters

Not all code can execute simultaneously.

Some operations must be protected.

## Topics

### 5.8.1 What Is A Critical Section?

### 5.8.2 Shared Resource Protection

### 5.8.3 Synchronization

### 5.8.4 Correctness Guarantees

### 5.8.5 Serialization Of Access

### 5.8.6 Performance Tradeoffs

---

# 5.9 Mutual Exclusion

## Why This Matters

The simplest synchronization mechanism.

Only one thread may enter at a time.

## Topics

### 5.9.1 Mutex Theory

### 5.9.2 Lock Acquisition

### 5.9.3 Lock Release

### 5.9.4 Contention

### 5.9.5 Lock Granularity

### 5.9.6 Lock Duration

### 5.9.7 Performance Implications

---

# 5.10 Read-Write Synchronization

## Why This Matters

Many systems read much more than they write.

This creates optimization opportunities.

## Topics

### 5.10.1 Reader-Writer Problem

### 5.10.2 Concurrent Readers

### 5.10.3 Exclusive Writers

### 5.10.4 Reader Preference

### 5.10.5 Writer Preference

### 5.10.6 Starvation

### 5.10.7 Scalability

---

# 5.11 Message Passing

## Why This Matters

Instead of sharing memory:

```text
Share Messages
```

This becomes one of the most important ideas in modern distributed systems.

## Topics

### 5.11.1 Communication Models

### 5.11.2 Producers

### 5.11.3 Consumers

### 5.11.4 Queues

### 5.11.5 Channels

### 5.11.6 Ownership Transfer

### 5.11.7 System Decoupling

---

# 5.12 Concurrent Architecture Patterns

## Why This Matters

Concurrency is not about locks.

It is about system design.

## Topics

### 5.12.1 Worker Pools

### 5.12.2 Producer Consumer

### 5.12.3 Pipelines

### 5.12.4 Fan-Out

### 5.12.5 Fan-In

### 5.12.6 Event Driven Systems

### 5.12.7 Backpressure

---

# 5.13 Atomic Operations

## Why This Matters

Locks are not the lowest level synchronization primitive.

CPUs provide atomic instructions.

## Topics

### 5.13.1 Hardware Atomics

### 5.13.2 Compare-And-Swap

### 5.13.3 Atomic Counters

### 5.13.4 Lock-Free Updates

### 5.13.5 CPU Support

### 5.13.6 Scalability Benefits

### 5.13.7 Practical Applications

---

# 5.14 Memory Ordering

## Why This Matters

The hardest chapter in the phase.

Modern CPUs do not execute instructions exactly as written.

## Topics

### 5.14.1 CPU Reordering

### 5.14.2 Compiler Reordering

### 5.14.3 Visibility Guarantees

### 5.14.4 Happens-Before Relationships

### 5.14.5 Relaxed Ordering

### 5.14.6 Acquire Semantics

### 5.14.7 Release Semantics

### 5.14.8 Sequential Consistency

---

# 5.15 Deadlocks

## Why This Matters

Software can become permanently stuck.

## Topics

### 5.15.1 What Is A Deadlock?

### 5.15.2 Circular Wait

### 5.15.3 Resource Ownership

### 5.15.4 Detection

### 5.15.5 Prevention

### 5.15.6 Lock Ordering

### 5.15.7 Practical Debugging

---

# 5.16 Lock-Free Systems

## Why This Matters

At scale locks become bottlenecks.

Modern infrastructure often relies on lock-free techniques.

## Topics

### 5.16.1 Motivation

### 5.16.2 Compare-And-Swap Loops

### 5.16.3 Lock-Free Queues

### 5.16.4 Progress Guarantees

### 5.16.5 Wait-Free Algorithms

### 5.16.6 Performance Characteristics

### 5.16.7 Tradeoffs

---

# 5.17 Actor Systems

## Why This Matters

Actors eliminate many shared-memory problems.

This idea heavily influences distributed systems.

## Topics

### 5.17.1 Actor Model

### 5.17.2 Mailboxes

### 5.17.3 Message Passing

### 5.17.4 Isolation

### 5.17.5 Supervision Trees

### 5.17.6 Fault Tolerance

### 5.17.7 System Resilience

---

# 5.18 Rust Concurrency

## Why This Matters

Now students finally apply everything using Rust.

Only after understanding the theory.

## Topics

### 5.18.1 std::thread

### 5.18.2 JoinHandle

### 5.18.3 Send

### 5.18.4 Sync

### 5.18.5 Arc

### 5.18.6 Mutex

### 5.18.7 RwLock

### 5.18.8 Channels

### 5.18.9 Atomic Types

---

# 5.19 Building Concurrent Systems

## Why This Matters

Students combine concepts into real architectures.

## Topics

### 5.19.1 Concurrent File Processor

### 5.19.2 Concurrent Web Crawler

### 5.19.3 Search Index Builder

### 5.19.4 Task Scheduler

### 5.19.5 Job Processing Engine

### 5.19.6 Monitoring And Metrics

---

# 5.20 Final Project — Build A Multi-Threaded Job Runtime

Requirements:

- Worker Threads
- Shared Work Queue
- Message Passing
- Atomic Metrics
- Synchronization
- Failure Recovery
- Monitoring

Architecture:

Jobs
↓
Queue
↓
Workers
↓
Execution
↓
Results

Students should be able to explain:

- Why concurrency exists
- Why race conditions occur
- How synchronization works
- How CPUs coordinate memory
- Why atomics exist
- Why deadlocks happen
- How large-scale systems process millions of tasks

This phase prepares students for Async Rust, where concurrency expands from CPU-bound execution to massive I/O-bound systems.
