# Phase 9 — Linux Systems Programming

## Introduction

Your Rust program does not run directly on hardware.

Between your program and the machine exists:

```text
Hardware
↓
Linux Kernel
↓
System Calls
↓
Your Program
```

The operating system is responsible for:

- Memory Management
- Process Scheduling
- Files
- Networking
- Security
- Resource Isolation
- Device Management

Every modern backend system ultimately depends on Linux.

Databases.

Web Servers.

Containers.

Kubernetes.

Cloud Infrastructure.

All of them are built on top of Linux primitives.

This phase teaches how software interacts with the operating system.

The goal is not becoming a Linux administrator.

The goal is understanding how modern software actually runs.

---

# 9.1 Why Operating Systems Exist

## Why This Matters

Before Linux, understand the problem Linux solves.

Without an operating system:

```text
Application
↓
Hardware
```

Every application would need to manage:

- Memory
- CPU
- Storage
- Devices

Directly.

Operating systems abstract hardware complexity.

## Topics

### 9.1.1 Hardware Complexity

### 9.1.2 Resource Management

### 9.1.3 Hardware Abstraction

### 9.1.4 Multi-Program Systems

### 9.1.5 Operating System Responsibilities

### 9.1.6 User Space vs Kernel Space

### 9.1.7 Modern Operating Systems

---

# 9.2 Linux Architecture

## Why This Matters

Everything else depends on understanding Linux architecture.

## Topics

### 9.2.1 What Is Linux?

### 9.2.2 The Linux Kernel

### 9.2.3 User Space

### 9.2.4 Kernel Space

### 9.2.5 System Libraries

### 9.2.6 Device Drivers

### 9.2.7 Boot Process

### 9.2.8 Linux System Architecture

---

# 9.3 Processes

## Why This Matters

Every program executes as a process.

## Topics

### 9.3.1 What Is A Process?

### 9.3.2 Process Memory Layout

### 9.3.3 Process Creation

### 9.3.4 Process Termination

### 9.3.5 Parent And Child Processes

### 9.3.6 Process States

### 9.3.7 Process Isolation

### 9.3.8 Process Lifecycle

---

# 9.4 Process Scheduling

## Why This Matters

CPU time is limited.

The operating system decides who runs next.

## Topics

### 9.4.1 CPU Scheduling

### 9.4.2 Scheduler Design

### 9.4.3 Context Switching

### 9.4.4 Fairness

### 9.4.5 Priority Scheduling

### 9.4.6 Linux CFS

### 9.4.7 Real-Time Scheduling

### 9.4.8 Performance Implications

---

# 9.5 Threads In Linux

## Why This Matters

Modern systems rely heavily on threads.

## Topics

### 9.5.1 Linux Threads

### 9.5.2 Thread Creation

### 9.5.3 Shared Memory

### 9.5.4 Scheduling

### 9.5.5 Synchronization

### 9.5.6 Thread Lifecycle

### 9.5.7 Kernel Threads

### 9.5.8 User Threads

---

# 9.6 System Calls

## Why This Matters

System calls are the gateway to the operating system.

Without system calls:

```text
Program
✕
Cannot access hardware
```

## Topics

### 9.6.1 What Is A System Call?

### 9.6.2 User Mode

### 9.6.3 Kernel Mode

### 9.6.4 Context Switching

### 9.6.5 Syscall Interface

### 9.6.6 Linux Syscalls

### 9.6.7 Syscall Costs

### 9.6.8 Tracing System Calls

---

# 9.7 Files And File Systems

## Why This Matters

Everything in Linux is treated like a file.

## Topics

### 9.7.1 File Abstraction

### 9.7.2 File Descriptors

### 9.7.3 Reading Files

### 9.7.4 Writing Files

### 9.7.5 File Metadata

### 9.7.6 Directories

### 9.7.7 Permissions

### 9.7.8 File System Design

---

# 9.8 Virtual File Systems

## Why This Matters

Linux supports many file systems.

Applications should not care which one.

## Topics

### 9.8.1 VFS Architecture

### 9.8.2 File System Drivers

### 9.8.3 ext4

### 9.8.4 XFS

### 9.8.5 Btrfs

### 9.8.6 Mounting

### 9.8.7 Path Resolution

---

# 9.9 Memory Management

## Why This Matters

Memory is one of the operating system's primary responsibilities.

## Topics

### 9.9.1 Virtual Memory

### 9.9.2 Physical Memory

### 9.9.3 Address Translation

### 9.9.4 Page Tables

### 9.9.5 Memory Mapping

### 9.9.6 Shared Memory

### 9.9.7 Copy On Write

### 9.9.8 Memory Allocation

---

# 9.10 Paging

## Why This Matters

Modern systems use virtual memory.

Paging makes this possible.

## Topics

### 9.10.1 Memory Pages

### 9.10.2 Address Translation

### 9.10.3 TLB

### 9.10.4 Page Faults

### 9.10.5 Demand Paging

### 9.10.6 Swapping

### 9.10.7 Performance Implications

---

# 9.11 Signals

## Why This Matters

Processes need communication mechanisms.

Signals provide one such mechanism.

## Topics

### 9.11.1 Signal Basics

### 9.11.2 Signal Delivery

### 9.11.3 Signal Handlers

### 9.11.4 SIGINT

### 9.11.5 SIGTERM

### 9.11.6 SIGKILL

### 9.11.7 Graceful Shutdown

---

# 9.12 Interprocess Communication (IPC)

## Why This Matters

Processes must communicate.

Linux provides several mechanisms.

## Topics

### 9.12.1 Pipes

### 9.12.2 Named Pipes

### 9.12.3 Message Queues

### 9.12.4 Shared Memory

### 9.12.5 Unix Domain Sockets

### 9.12.6 IPC Tradeoffs

### 9.12.7 Process Coordination

---

# 9.13 Event Driven I/O

## Why This Matters

Modern servers handle massive numbers of connections.

Traditional blocking I/O does not scale.

## Topics

### 9.13.1 Blocking I/O

### 9.13.2 Non-Blocking I/O

### 9.13.3 Event Loops

### 9.13.4 select()

### 9.13.5 poll()

### 9.13.6 epoll

### 9.13.7 High Concurrency Servers

---

# 9.14 io_uring

## Why This Matters

This is the future of Linux I/O.

Many modern systems are moving toward io_uring.

## Topics

### 9.14.1 Why io_uring Exists

### 9.14.2 Submission Queues

### 9.14.3 Completion Queues

### 9.14.4 Zero-Copy Concepts

### 9.14.5 High Performance I/O

### 9.14.6 Modern Linux Networking

---

# 9.15 Linux Networking Primitives

## Why This Matters

Before TCP and HTTP you must understand Linux networking.

## Topics

### 9.15.1 Network Interfaces

### 9.15.2 Sockets

### 9.15.3 Socket Lifecycle

### 9.15.4 Connection Management

### 9.15.5 Buffers

### 9.15.6 Kernel Networking Stack

### 9.15.7 Data Flow

---

# 9.16 Security Fundamentals

## Why This Matters

Operating systems enforce security.

## Topics

### 9.16.1 Users

### 9.16.2 Groups

### 9.16.3 Permissions

### 9.16.4 Access Control

### 9.16.5 Process Isolation

### 9.16.6 Privilege Escalation

### 9.16.7 Secure System Design

---

# 9.17 Namespaces

## Why This Matters

Containers begin here.

Not Docker.

Linux.

## Topics

### 9.17.1 Process Namespaces

### 9.17.2 Network Namespaces

### 9.17.3 Mount Namespaces

### 9.17.4 User Namespaces

### 9.17.5 Isolation

### 9.17.6 Container Foundations

---

# 9.18 Control Groups (cgroups)

## Why This Matters

Containers need resource limits.

Linux provides them.

## Topics

### 9.18.1 CPU Limits

### 9.18.2 Memory Limits

### 9.18.3 I/O Limits

### 9.18.4 Resource Accounting

### 9.18.5 Resource Isolation

### 9.18.6 Container Infrastructure

---

# 9.19 Observability & Debugging

## Why This Matters

Production systems fail.

You need visibility.

## Topics

### 9.19.1 Logs

### 9.19.2 Metrics

### 9.19.3 Tracing

### 9.19.4 strace

### 9.19.5 lsof

### 9.19.6 top

### 9.19.7 perf

### 9.19.8 Debugging Linux Systems

---

# 9.20 Final Project — Build A Mini Container Runtime

Requirements

Build from Linux primitives:

- Process Creation
- Namespaces
- cgroups
- File System Isolation
- Resource Limits
- Process Monitoring

Architecture

```text
Linux Kernel
↓
Namespaces
↓
cgroups
↓
Isolation
↓
Container
```

You should understand:

- How Linux runs software
- How processes work
- How memory is managed
- How files work
- How system calls work
- How high-performance I/O works
- How containers actually work

After completing this phase, Docker should feel like:

```text
A convenient wrapper around Linux primitives
```

instead of magic.
