Phase 13 is where you learn why some software serves:

```text
100 requests/second
```

while other software serves:

```text
1,000,000 requests/second
```

using the same hardware.

Most engineers can build working systems.

Very few can build efficient systems.

This phase is about understanding where time actually goes.

---

# Phase 13 — Performance Engineering

## Introduction

A correct program is not necessarily a good program.

Software exists under constraints:

- CPU
- Memory
- Disk
- Network
- Latency
- Throughput
- Cost

Performance engineering is the discipline of understanding and optimizing these constraints.

The goal is not premature optimization.

The goal is understanding reality.

Every performance problem ultimately becomes:

```text
Work
↓
Resources
↓
Time
```

This phase teaches how software actually consumes resources and how elite engineers make systems dramatically faster.

---

# 13.1 What Is Performance?

## Why This Matters

Before optimization, understand what performance means.

Performance is not one thing.

## Topics

### 13.1.1 Latency

### 13.1.2 Throughput

### 13.1.3 Resource Utilization

### 13.1.4 Scalability

### 13.1.5 Efficiency

### 13.1.6 Cost Efficiency

### 13.1.7 Performance Metrics

---

# 13.2 The Cost Model Of Computing

## Why This Matters

Computers are not magical.

Everything has a cost.

## Topics

### 13.2.1 CPU Cycles

### 13.2.2 Memory Access

### 13.2.3 Cache Access

### 13.2.4 Disk Access

### 13.2.5 Network Access

### 13.2.6 Relative Costs

### 13.2.7 Latency Numbers Every Engineer Should Know

---

# 13.3 Performance Measurement

## Why This Matters

You cannot optimize what you cannot measure.

## Topics

### 13.3.1 Benchmarking

### 13.3.2 Profiling

### 13.3.3 Metrics

### 13.3.4 Performance Baselines

### 13.3.5 Synthetic Tests

### 13.3.6 Production Measurements

### 13.3.7 Measurement Pitfalls

---

# 13.4 CPU Architecture For Engineers

## Why This Matters

Software executes on CPUs.

Understanding CPUs explains performance.

## Topics

### 13.4.1 Instruction Pipelines

### 13.4.2 Superscalar Execution

### 13.4.3 Out Of Order Execution

### 13.4.4 Branch Prediction

### 13.4.5 Instruction Level Parallelism

### 13.4.6 CPU Bottlenecks

### 13.4.7 Modern CPU Design

---

# 13.5 Cache Hierarchies

## Why This Matters

Most performance problems are memory problems.

Not CPU problems.

## Topics

### 13.5.1 L1 Cache

### 13.5.2 L2 Cache

### 13.5.3 L3 Cache

### 13.5.4 Cache Lines

### 13.5.5 Cache Misses

### 13.5.6 Memory Latency

### 13.5.7 Cache Efficiency

---

# 13.6 Data Locality

## Why This Matters

Memory layout determines performance.

## Topics

### 13.6.1 Spatial Locality

### 13.6.2 Temporal Locality

### 13.6.3 Cache Friendly Structures

### 13.6.4 Memory Access Patterns

### 13.6.5 Sequential Access

### 13.6.6 Random Access

### 13.6.7 Data-Oriented Design

---

# 13.7 Memory Allocation

## Why This Matters

Allocations are expensive.

Most software allocates far too much.

## Topics

### 13.7.1 Heap Allocation Costs

### 13.7.2 Fragmentation

### 13.7.3 Allocation Strategies

### 13.7.4 Arena Allocators

### 13.7.5 Object Pools

### 13.7.6 Memory Reuse

### 13.7.7 Allocation Profiling

---

# 13.8 Algorithmic Performance

## Why This Matters

The fastest optimization is choosing the correct algorithm.

## Topics

### 13.8.1 Complexity Review

### 13.8.2 Bottleneck Identification

### 13.8.3 Algorithm Selection

### 13.8.4 Data Structure Selection

### 13.8.5 Asymptotic Thinking

### 13.8.6 Practical Complexity

### 13.8.7 Optimization Priorities

---

# 13.9 Concurrent Performance

## Why This Matters

Concurrency introduces new bottlenecks.

## Topics

### 13.9.1 Lock Contention

### 13.9.2 Synchronization Costs

### 13.9.3 False Sharing

### 13.9.4 Context Switching

### 13.9.5 Atomic Costs

### 13.9.6 Scalability Analysis

### 13.9.7 Throughput Optimization

---

# 13.10 Async Performance

## Why This Matters

Async systems have unique performance characteristics.

## Topics

### 13.10.1 Task Scheduling Costs

### 13.10.2 Executor Overhead

### 13.10.3 Wakeups

### 13.10.4 Task Allocation

### 13.10.5 Runtime Tuning

### 13.10.6 Async Bottlenecks

### 13.10.7 Large Scale Concurrency

---

# 13.11 Database Performance

## Why This Matters

Most backend bottlenecks eventually become database bottlenecks.

## Topics

### 13.11.1 Query Analysis

### 13.11.2 Execution Plans

### 13.11.3 Index Optimization

### 13.11.4 Connection Pools

### 13.11.5 Transaction Costs

### 13.11.6 N+1 Problems

### 13.11.7 Database Scaling Fundamentals

---

# 13.12 Network Performance

## Why This Matters

Network communication is expensive.

## Topics

### 13.12.1 Network Latency

### 13.12.2 Packet Overhead

### 13.12.3 Connection Costs

### 13.12.4 Serialization Costs

### 13.12.5 Compression Tradeoffs

### 13.12.6 Request Optimization

### 13.12.7 High Throughput Networking

---

# 13.13 Serialization & Encoding

## Why This Matters

Moving data has costs.

## Topics

### 13.13.1 JSON

### 13.13.2 MessagePack

### 13.13.3 Protobuf

### 13.13.4 Binary Formats

### 13.13.5 Serialization Costs

### 13.13.6 Memory Efficiency

### 13.13.7 Wire Efficiency

---

# 13.14 SIMD

## Why This Matters

Modern CPUs can process multiple values per instruction.

Most engineers never utilize this.

## Topics

### 13.14.1 Vector Instructions

### 13.14.2 Data Parallelism

### 13.14.3 SIMD Architectures

### 13.14.4 Rust SIMD

### 13.14.5 Performance Applications

### 13.14.6 Practical Examples

---

# 13.15 Zero-Copy Systems

## Why This Matters

Copying data is expensive.

Elite systems minimize copying.

## Topics

### 13.15.1 Memory Copies

### 13.15.2 Borrowed Data

### 13.15.3 Memory Mapping

### 13.15.4 sendfile

### 13.15.5 Zero-Copy Networking

### 13.15.6 Performance Benefits

---

# 13.16 NUMA Architecture

## Why This Matters

Large servers are not uniform.

Memory location matters.

## Topics

### 13.16.1 NUMA Fundamentals

### 13.16.2 Memory Regions

### 13.16.3 Cross-Socket Costs

### 13.16.4 Thread Placement

### 13.16.5 Memory Placement

### 13.16.6 Large Server Optimization

---

# 13.17 Performance Profiling

## Why This Matters

Optimization starts with evidence.

## Topics

### 13.17.1 Flamegraphs

### 13.17.2 perf

### 13.17.3 Heap Profiling

### 13.17.4 CPU Profiling

### 13.17.5 Memory Profiling

### 13.17.6 Production Profiling

### 13.17.7 Bottleneck Discovery

---

# 13.18 Capacity Planning

## Why This Matters

Performance is not only about speed.

It is about scale.

## Topics

### 13.18.1 Workload Modeling

### 13.18.2 Throughput Planning

### 13.18.3 Growth Forecasting

### 13.18.4 Resource Estimation

### 13.18.5 Bottleneck Forecasting

### 13.18.6 Cost Analysis

---

# 13.19 Performance Engineering Methodology

## Why This Matters

Most optimization efforts fail because they are random.

## Topics

### 13.19.1 Measure

### 13.19.2 Identify Bottlenecks

### 13.19.3 Form Hypotheses

### 13.19.4 Implement Changes

### 13.19.5 Validate Results

### 13.19.6 Iterate

### 13.19.7 Engineering Discipline

---

# 13.20 Reading High Performance Systems

## Why This Matters

You should study world-class systems.

## Topics

### 13.20.1 Redis

### 13.20.2 NGINX

### 13.20.3 PostgreSQL

### 13.20.4 ClickHouse

### 13.20.5 RocksDB

### 13.20.6 Modern Search Engines

### 13.20.7 Lessons From Production Systems

---

# 13.21 Final Project — Build A High Performance API Platform

Starting Point

```text
Axum API
↓
PostgreSQL
↓
Redis
```

Your task:

Measure.

Profile.

Optimize.

Requirements

### CPU Optimization

- Profiling
- Hot Path Analysis

### Memory Optimization

- Allocation Reduction
- Cache Efficiency

### Database Optimization

- Query Tuning
- Index Design

### Network Optimization

- Compression
- Connection Reuse

### System Optimization

- Benchmarking
- Load Testing

Target

```text
10x improvement
```

using measurement-driven engineering.

Architecture

```text
Requests
↓
Profiling
↓
Bottleneck Discovery
↓
Optimization
↓
Verification
↓
Performance Gains
```

By the end of this phase you should be able to:

- Explain where time goes inside software
- Identify bottlenecks systematically
- Read flamegraphs
- Optimize memory usage
- Optimize CPU usage
- Optimize databases
- Optimize network traffic
- Scale services efficiently

Most importantly, you should understand that performance is not magic.

Performance is the consequence of understanding the machine.

This phase is where you begin thinking like the engineers behind:

- Redis
- NGINX
- ClickHouse
- PostgreSQL

They didn't make software faster by guessing.

They understood:

```text
Hardware
↓
Operating System
↓
Memory
↓
Algorithms
↓
Data Layout
↓
Performance
```

Phase 13 is where all those layers finally come together.
