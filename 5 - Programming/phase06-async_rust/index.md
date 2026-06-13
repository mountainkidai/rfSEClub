# Phase 6 — Async Rust

## Introduction

Concurrency allows multiple tasks to make progress.

In Phase 5 we studied concurrency using threads.

Threads work well for CPU-bound workloads.

However modern internet systems face a different challenge:

Most programs spend their time waiting.

Waiting for:

- Network responses
- Databases
- Files
- APIs
- User input

During this waiting period:

```text
CPU = Idle
```

Yet a thread remains occupied.

This becomes extremely expensive at scale.

Async programming solves this problem.

Instead of dedicating one thread to every task:

```text
Many Tasks
↓
Few Threads
↓
Event Driven Execution
```

This phase explains how modern internet infrastructure achieves massive concurrency.

---

# 6.1 The Problem With Threads

## Why This Matters

Before learning async students must understand why it exists.

## Topics

### 6.1.1 Thread Costs

### 6.1.2 Memory Consumption

### 6.1.3 Context Switching

### 6.1.4 Blocking Operations

### 6.1.5 Idle CPUs

### 6.1.6 Scalability Limits

### 6.1.7 The C10K Problem

### 6.1.8 Modern Server Requirements

---

# 6.2 Understanding I/O

## Why This Matters

Async exists because of I/O.

Students must understand what I/O actually is.

## Topics

### 6.2.1 What Is Input/Output?

### 6.2.2 CPU Work vs I/O Work

### 6.2.3 Disk I/O

### 6.2.4 Network I/O

### 6.2.5 Database I/O

### 6.2.6 Latency Sources

### 6.2.7 Waiting As The Real Bottleneck

---

# 6.3 Blocking Systems

## Why This Matters

Most systems start as blocking systems.

Understanding blocking behavior explains async motivation.

## Topics

### 6.3.1 Blocking Functions

### 6.3.2 Sequential Waiting

### 6.3.3 Resource Waste

### 6.3.4 Throughput Limitations

### 6.3.5 Thread Per Request Architecture

### 6.3.6 Scalability Analysis

---

# 6.4 Event Driven Systems

## Why This Matters

Before async syntax students must understand event-driven architecture.

## Topics

### 6.4.1 Events

### 6.4.2 Event Loops

### 6.4.3 Event Queues

### 6.4.4 Event Dispatching

### 6.4.5 Reactive Systems

### 6.4.6 Non-Blocking Design

### 6.4.7 Event Driven Architectures

---

# 6.5 OS Support For Async I/O

## Why This Matters

Async begins in the operating system.

Not in Rust.

## Topics

### 6.5.1 File Descriptors

### 6.5.2 Readiness Notification

### 6.5.3 select()

### 6.5.4 poll()

### 6.5.5 epoll

### 6.5.6 kqueue

### 6.5.7 IOCP

### 6.5.8 io_uring

### 6.5.9 Kernel Event Systems

---

# 6.6 Futures

## Why This Matters

The Future is the foundation of async Rust.

Everything else builds on it.

## Topics

### 6.6.1 What Is A Future?

### 6.6.2 Deferred Computation

### 6.6.3 State Machines

### 6.6.4 Completion Semantics

### 6.6.5 Polling Model

### 6.6.6 Future Lifecycle

### 6.6.7 Lazy Execution

---

# 6.7 Polling

## Why This Matters

Most engineers use async without understanding polling.

Polling is the heart of Rust async.

## Topics

### 6.7.1 What Is Polling?

### 6.7.2 Poll States

### 6.7.3 Ready

### 6.7.4 Pending

### 6.7.5 Progress Guarantees

### 6.7.6 Cooperative Execution

### 6.7.7 Poll Driven Systems

---

# 6.8 Wakers

## Why This Matters

A future must know how to resume execution.

This is the role of wakers.

## Topics

### 6.8.1 Why Wakers Exist

### 6.8.2 Task Wakeup

### 6.8.3 Event Notification

### 6.8.4 Scheduling

### 6.8.5 Waker Lifecycle

### 6.8.6 Runtime Coordination

---

# 6.9 Pinning

## Why This Matters

Async state machines create self-referential structures.

Pinning solves this problem.

## Topics

### 6.9.1 Memory Movement

### 6.9.2 Self References

### 6.9.3 Why Pin Exists

### 6.9.4 Pin

### 6.9.5 Unpin

### 6.9.6 Safe Memory Guarantees

### 6.9.7 Runtime Safety

---

# 6.10 Async/Await

## Why This Matters

Students finally learn syntax after understanding the machinery.

## Topics

### 6.10.1 async

### 6.10.2 await

### 6.10.3 Async Functions

### 6.10.4 Async Blocks

### 6.10.5 Generated State Machines

### 6.10.6 Suspension Points

### 6.10.7 Execution Flow

---

# 6.11 Executors

## Why This Matters

Futures do nothing on their own.

Executors run them.

## Topics

### 6.11.1 What Is An Executor?

### 6.11.2 Task Scheduling

### 6.11.3 Poll Loops

### 6.11.4 Runtime Architecture

### 6.11.5 Cooperative Scheduling

### 6.11.6 Task Management

### 6.11.7 Executor Design

---

# 6.12 Tokio Architecture

## Why This Matters

Tokio is the dominant async runtime.

Students should understand how it works internally.

## Topics

### 6.12.1 Runtime Structure

### 6.12.2 Reactor

### 6.12.3 Scheduler

### 6.12.4 Worker Threads

### 6.12.5 Task Queues

### 6.12.6 Runtime Services

### 6.12.7 Tokio Design Decisions

---

# 6.13 Task Scheduling

## Why This Matters

Modern runtimes manage thousands of tasks.

Scheduling determines performance.

## Topics

### 6.13.1 Cooperative Scheduling

### 6.13.2 Fairness

### 6.13.3 Starvation

### 6.13.4 Yielding

### 6.13.5 Task Prioritization

### 6.13.6 Runtime Efficiency

---

# 6.14 Async Synchronization

## Why This Matters

Traditional synchronization behaves differently under async.

## Topics

### 6.14.1 Async Mutexes

### 6.14.2 Async Channels

### 6.14.3 Async Notifications

### 6.14.4 Shared State

### 6.14.5 Coordination Patterns

### 6.14.6 Performance Considerations

---

# 6.15 Streams

## Why This Matters

Many systems produce data continuously.

Streams model ongoing sequences.

## Topics

### 6.15.1 What Is A Stream?

### 6.15.2 Stream Architecture

### 6.15.3 Stream Processing

### 6.15.4 Backpressure

### 6.15.5 Stream Composition

### 6.15.6 Async Data Pipelines

---

# 6.16 Cancellation

## Why This Matters

Tasks often stop before completion.

Async systems must handle this safely.

## Topics

### 6.16.1 Task Cancellation

### 6.16.2 Cleanup

### 6.16.3 Resource Management

### 6.16.4 Graceful Shutdown

### 6.16.5 Failure Recovery

### 6.16.6 Cancellation Safety

---

# 6.17 Backpressure

## Why This Matters

Systems can receive work faster than they can process it.

Without control:

```text
Memory
↓
CPU
↓
System Failure
```

## Topics

### 6.17.1 Queue Growth

### 6.17.2 Flow Control

### 6.17.3 Demand Driven Systems

### 6.17.4 Capacity Limits

### 6.17.5 Overload Protection

### 6.17.6 Real World Examples

---

# 6.18 Building Async Systems

## Why This Matters

Students combine all concepts.

## Topics

### 6.18.1 Async TCP Servers

### 6.18.2 Async Clients

### 6.18.3 Async File Processing

### 6.18.4 Concurrent Crawlers

### 6.18.5 Job Processing Systems

### 6.18.6 High Throughput Services

---

# 6.19 Runtime Internals

## Why This Matters

Students should understand what frameworks hide.

## Topics

### 6.19.1 Building A Mini Executor

### 6.19.2 Implementing Futures

### 6.19.3 Implementing Wakers

### 6.19.4 Task Queues

### 6.19.5 Event Loops

### 6.19.6 Runtime Construction

---

# 6.20 Final Project — Build An Async Web Crawler

Requirements

- Async Networking
- Task Scheduling
- Concurrency Limits
- Backpressure
- Cancellation
- Metrics
- Failure Handling

Architecture

URLs
↓
Task Queue
↓
Executor
↓
Network Requests
↓
Results

Students should understand:

- Why async exists
- Why futures exist
- Why polling exists
- Why wakers exist
- Why pinning exists
- How executors work
- How Tokio works
- How internet-scale services handle millions of connections

After completing this phase students should be able to open Tokio's source code and understand the major architectural components instead of treating async as magic.
