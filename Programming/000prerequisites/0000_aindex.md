# How Computers Work: A Complete First Principles Roadmap

## From Electricity to Planet-Scale Systems

---

# Goal

This roadmap is designed to take you from:

> "I can write code"

to

> "I understand every layer from silicon to distributed systems and can build world-class software in Rust."

The philosophy:

- Learn from first principles.
- Never memorize abstractions before understanding the layer below.
- Every topic builds on previous topics.
- Build projects after every major phase.

---

# PHASE 0 — DIGITAL LOGIC & COMPUTER ARCHITECTURE

Everything begins here.

---

## 0.1 What Is Information?

- What is information?
- Why computers only understand states
- Physical representation of information
- Analog vs Digital systems

---

## 0.2 Binary Number System

- Decimal numbers
- Binary numbers
- Converting decimal ↔ binary
- Binary arithmetic
- Signed vs unsigned integers

---

## 0.3 Hexadecimal

- Why hexadecimal exists
- Binary ↔ Hex conversion
- Memory addresses

---

## 0.4 Boolean Logic

- True and False
- Boolean algebra
- Truth tables

---

## 0.5 Logic Gates

- AND
- OR
- NOT
- XOR
- NAND
- NOR

---

## 0.6 Building Computation from Gates

- Half adder
- Full adder
- Multiplexer
- Decoder
- Comparators

---

## 0.7 Registers

- What is a register
- Temporary storage
- Register operations

---

## 0.8 Arithmetic Logic Unit (ALU)

- Arithmetic operations
- Logical operations
- Comparisons

---

## 0.9 CPU Control Unit

- Fetch instruction
- Decode instruction
- Execute instruction

---

## 0.10 Building a Simple CPU

- Program counter
- Instruction register
- Control flow
- Branching

---

## 0.11 Computer Memory Hardware

- SRAM
- DRAM
- Flash Memory

---

## 0.12 CPU Cache

- Why cache exists
- L1 cache
- L2 cache
- L3 cache
- Cache locality
- Cache misses

---

## 0.13 Memory Hierarchy

CPU Registers

↓

L1 Cache

↓

L2 Cache

↓

L3 Cache

↓

RAM

↓

SSD

↓

HDD

---

## 0.14 Introduction to Assembly

- What assembly is
- Registers
- Instructions
- Jumps
- Function calls

---

# PHASE 1 — OPERATING SYSTEM FUNDAMENTALS

How software controls hardware.

---

## 1.1 What Happens When You Press the Power Button?

- Electricity flow
- Firmware
- Boot process

---

## 1.2 BIOS and UEFI

- Hardware initialization
- Boot sequence

---

## 1.3 Bootloaders

- GRUB
- Loading kernels

---

## 1.4 What Is an Operating System?

- Purpose of an OS
- Resource management

---

## 1.5 The Kernel

- What is a kernel
- Responsibilities
- Architecture

---

## 1.6 User Space vs Kernel Space

- Separation
- Privileges
- Protection

---

## 1.7 System Calls

- Why system calls exist
- Crossing boundaries

---

## 1.8 Interrupts

- Hardware interrupts
- Software interrupts

---

## 1.9 Device Drivers

- Communication with hardware

---

## 1.10 Virtual Memory

- Address translation
- Memory abstraction

---

## 1.11 Page Tables

- Virtual addresses
- Physical addresses

---

## 1.12 Memory Mapping

- mmap
- Shared memory

---

## 1.13 Processes

- Process creation
- Process lifecycle
- Process isolation

---

## 1.14 Threads

- Thread model
- Shared memory

---

## 1.15 Context Switching

- Saving execution state
- Scheduling

---

## 1.16 CPU Scheduling

- Round Robin
- Priority scheduling

---

## 1.17 Signals

- Process communication

---

## 1.18 File Systems

- Why file systems exist
- Data organization

---

## 1.19 Linux Directory Structure

- /
- /home
- /usr
- /etc
- /var

---

## 1.20 File Descriptors

- stdin
- stdout
- stderr

---

## 1.21 Reading and Writing Files

- Disk operations
- Buffers

---

# PHASE 2 — NETWORKING FUNDAMENTALS

How computers talk.

---

## 2.1 What Is a Network?

- Connected machines

---

## 2.2 Packets

- Breaking data into packets

---

## 2.3 OSI Model

- Physical
- Data Link
- Network
- Transport
- Session
- Presentation
- Application

---

## 2.4 TCP/IP Model

- Practical networking

---

## 2.5 IP Addresses

- IPv4
- IPv6

---

## 2.6 Ports

- Service identification

---

## 2.7 DNS

- Domain resolution

---

## 2.8 TCP

- Handshake
- Reliability
- Flow control

---

## 2.9 UDP

- Connectionless communication

---

## 2.10 TLS

- Encryption
- Certificates

---

## 2.11 HTTP

- Requests
- Responses

---

## 2.12 HTTP/1.1

---

## 2.13 HTTP/2

---

## 2.14 HTTP/3

---

## 2.15 QUIC

---

## 2.16 WebSockets

---

## 2.17 gRPC

---

# PHASE 3 — PROGRAM EXECUTION

How software actually runs.

---

## 3.1 What Is a Program?

---

## 3.2 Source Code

---

## 3.3 Compilation

---

## 3.4 Linking

---

## 3.5 Executables

---

## 3.6 Machine Code

---

## 3.7 Runtime Memory Layout

- Code segment
- Data segment
- Heap
- Stack

---

## 3.8 Function Calls

---

## 3.9 Stack Frames

---

## 3.10 Program Counter

---

## 3.11 Registers

---

## 3.12 Heap Allocation

---

## 3.13 Memory Leaks

---

## 3.14 Garbage Collection

---

## 3.15 Manual Memory Management

---

# PHASE 4 — RUST FOUNDATIONS

Learning Rust from first principles.

---

## 4.1 Why Rust Exists

---

## 4.2 Ownership

---

## 4.3 Move Semantics

---

## 4.4 Borrowing

- Immutable borrow
- Mutable borrow

---

## 4.5 Lifetimes

---

## 4.6 Structs

---

## 4.7 Enums

---

## 4.8 Pattern Matching

---

## 4.9 Traits

---

## 4.10 Generics

---

## 4.11 Option

---

## 4.12 Result

---

## 4.13 Error Handling

---

## 4.14 Modules

---

## 4.15 Crates

---

## 4.16 Smart Pointers

- Box
- Rc
- Arc

---

## 4.17 Interior Mutability

- RefCell
- Mutex
- RwLock

---

## 4.18 Unsafe Rust

---

## 4.19 FFI

---

# PHASE 5 — CONCURRENCY

How multiple tasks work together.

---

## 5.1 What Is Concurrency?

---

## 5.2 Concurrency vs Parallelism

---

## 5.3 Race Conditions

---

## 5.4 Mutexes

---

## 5.5 RwLocks

---

## 5.6 Semaphores

---

## 5.7 Atomics

---

## 5.8 Lock-Free Programming

---

## 5.9 Thread Creation

---

## 5.10 Thread Pools

---

## 5.11 Work Queues

---

## 5.12 Producer Consumer

---

## 5.13 Channels

---

## 5.14 Message Passing

---

# PHASE 6 — ASYNC RUST

How Rust handles millions of tasks.

---

## 6.1 Blocking I/O

---

## 6.2 Non-Blocking I/O

---

## 6.3 Futures

---

## 6.4 async/await

---

## 6.5 Poll Trait

---

## 6.6 Wakers

---

## 6.7 Executors

---

## 6.8 Event Loops

---

## 6.9 Tokio Runtime

---

## 6.10 Work Stealing

---

## 6.11 Cooperative Scheduling

---

## 6.12 Async Streams

---

## 6.13 Cancellation

---

# PHASE 7 — LINUX SYSTEMS PROGRAMMING

The foundation of modern backend engineering.

---

## 7.1 Processes Internals

---

## 7.2 Threads Internals

---

## 7.3 epoll

---

## 7.4 io_uring

---

## 7.5 Shared Memory

---

## 7.6 Pipes

---

## 7.7 Unix Sockets

---

## 7.8 Namespaces

---

## 7.9 cgroups

---

## 7.10 Containers

---

## 7.11 Docker Internals

---

# PHASE 8 — DATABASES

How data survives.

---

## 8.1 Why Databases Exist

---

## 8.2 Relational Databases

---

## 8.3 PostgreSQL Architecture

---

## 8.4 SQL Fundamentals

---

## 8.5 Indexes

---

## 8.6 B-Trees

---

## 8.7 Transactions

---

## 8.8 ACID

---

## 8.9 MVCC

---

## 8.10 WAL

---

## 8.11 Query Planner

---

## 8.12 Locks

---

## 8.13 Isolation Levels

---

## 8.14 Replication

---

## 8.15 Partitioning

---

## 8.16 Sharding

---

## 8.17 Connection Pools

---

## 8.18 SQLx

---

# PHASE 9 — WEB SERVERS & AXUM

Building real systems.

---

## 9.1 Sockets

---

## 9.2 TCP Servers

---

## 9.3 HTTP Servers

---

## 9.4 Hyper

---

## 9.5 Tower

---

## 9.6 Axum Basics

---

## 9.7 Routing

---

## 9.8 Extractors

---

## 9.9 Middleware

---

## 9.10 Authentication

---

## 9.11 Authorization

---

## 9.12 State Management

---

## 9.13 Error Handling

---

## 9.14 Background Jobs

---

## 9.15 WebSockets

---

# PHASE 10 — PERFORMANCE ENGINEERING

Where elite engineers separate themselves.

---

## 10.1 Measuring Performance

---

## 10.2 Profiling

---

## 10.3 Flamegraphs

---

## 10.4 CPU Bottlenecks

---

## 10.5 Memory Bottlenecks

---

## 10.6 Cache Misses

---

## 10.7 Branch Prediction

---

## 10.8 Memory Allocation

---

## 10.9 Zero Copy

---

## 10.10 SIMD

---

## 10.11 NUMA

---

## 10.12 Benchmarking

---

# PHASE 11 — DISTRIBUTED SYSTEMS

Building internet-scale systems.

---

## 11.1 Why Distributed Systems Exist

---

## 11.2 CAP Theorem

---

## 11.3 Consistency Models

---

## 11.4 Replication

---

## 11.5 Consensus

### Raft

### Paxos

---

## 11.6 Leader Election

---

## 11.7 Distributed Locks

---

## 11.8 Message Queues

---

## 11.9 Kafka

---

## 11.10 NATS

---

## 11.11 RabbitMQ

---

## 11.12 Event Sourcing

---

## 11.13 CQRS

---

## 11.14 Service Discovery

---

## 11.15 Distributed Tracing

---

# PHASE 12 — SECURITY

Mandatory for production systems.

---

## 12.1 Cryptography Basics

---

## 12.2 Hashing

---

## 12.3 Symmetric Encryption

---

## 12.4 Asymmetric Encryption

---

## 12.5 TLS

---

## 12.6 JWT

---

## 12.7 OAuth

---

## 12.8 OpenID Connect

---

## 12.9 Rate Limiting

---

## 12.10 SQL Injection

---

## 12.11 XSS

---

## 12.12 CSRF

---

## 12.13 SSRF

---

## 12.14 Secrets Management

---

# PHASE 13 — COMPILER ENGINEERING

Understanding how Rust becomes machine code.

---

## 13.1 Lexing

---

## 13.2 Parsing

---

## 13.3 AST

---

## 13.4 Type Checking

---

## 13.5 MIR

---

## 13.6 LLVM

---

## 13.7 Optimization Passes

---

## 13.8 Code Generation

---

## 13.9 Assembly Output

---

# PHASE 14 — BUILDING WORLD-CLASS SYSTEMS

Mastery.

---

## Build a KV Database

---

## Build Redis Clone

---

## Build HTTP Server

---

## Build Reverse Proxy

---

## Build Async Runtime

---

## Build Distributed Cache

---

## Build Message Queue

---

## Build Search Engine

---

## Build Raft Consensus System

---

## Build PostgreSQL Clone

---

## Build Distributed Database

---

# End Goal

At this point you should understand:

Electricity
→ Logic Gates
→ CPU
→ Memory
→ Operating System
→ Networking
→ Program Execution
→ Rust
→ Concurrency
→ Async
→ Linux
→ Databases
→ Web Servers
→ Performance
→ Distributed Systems
→ Security
→ Compilers
→ Planet Scale Systems

This is the path from junior developer to world-class systems engineer.
