# Phase 11 — Layer 2 & Scaling

# Introduction

In Phase 0 you learned:

```text
Trust
↓
Coordination
↓
Money
↓
Incentives
```

In Phase 1 you learned:

```text
Cryptography
↓
Hashing
↓
Keys
↓
Signatures
```

In Phase 2 you learned:

```text
Distributed Systems
↓
Consensus
↓
Byzantine Fault Tolerance
```

In Phase 3 you learned:

```text
Blockchain
↓
Transactions
↓
Blocks
↓
State Machines
```

In Phase 4 you learned:

```text
Bitcoin
↓
Digital Scarcity
```

In Phase 5 you learned:

```text
Proof Of Work
↓
Economic Security
```

In Phase 6 you learned:

```text
Proof Of Stake
↓
Economic Consensus
```

In Phase 7 you learned:

```text
Ethereum
↓
EVM
↓
Programmable Computation
```

In Phase 8 you learned:

```text
Smart Contracts
↓
Programmable Institutions
```

In Phase 9 you learned:

```text
Cryptoeconomics
↓
Token Incentives
↓
Coordination Systems
```

In Phase 10 you learned:

```text
DeFi
↓
Programmable Finance
```

Now we encounter the problem that threatens every blockchain.

Not security.

Not consensus.

Not cryptography.

Scale.

---

Bitcoin can process:

```text
~7 TPS
```

Ethereum can process:

```text
~10–30 TPS
```

Visa can process:

```text
Thousands Of TPS
```

Human civilization requires:

```text
Millions Of TPS
```

The question becomes:

> How do we scale blockchains without sacrificing decentralization?

---

This is where most beginners make a mistake.

They think scaling means:

```text
Bigger Blocks
```

Scaling is actually:

```text
State
↓
Bandwidth
↓
Computation
↓
Storage
↓
Coordination
```

problem.

---

This phase studies:

```text
Scalability
↓
Rollups
↓
Data Availability
↓
State Compression
↓
Modular Architectures
↓
Layer 2 Networks
```

Most importantly:

You will learn why scaling is fundamentally a distributed systems problem.

---

# 11.1 The Blockchain Trilemma

## Why This Matters

This is the starting point for modern blockchain architecture.

Topics

### 11.1.1 Security

### 11.1.2 Decentralization

### 11.1.3 Scalability

### 11.1.4 Tradeoffs

### 11.1.5 Resource Constraints

### 11.1.6 Network Limits

### 11.1.7 Blockchain Trilemma

---

# 11.2 Why Scaling Is Hard

## Why This Matters

Every node must verify everything.

This creates bottlenecks.

Topics

### 11.2.1 Computation

### 11.2.2 Storage

### 11.2.3 Bandwidth

### 11.2.4 State Growth

### 11.2.5 Synchronization

### 11.2.6 Verification Costs

### 11.2.7 Scaling Constraints

---

# 11.3 Monolithic Blockchains

## Why This Matters

Originally blockchains performed everything themselves.

Topics

### 11.3.1 Execution

### 11.3.2 Consensus

### 11.3.3 Settlement

### 11.3.4 Data Availability

### 11.3.5 Single Layer Systems

### 11.3.6 Resource Bottlenecks

### 11.3.7 Monolithic Architecture

---

# 11.4 Modular Blockchains

## Why This Matters

Modern scaling separates responsibilities.

Topics

### 11.4.1 Execution Layers

### 11.4.2 Settlement Layers

### 11.4.3 Consensus Layers

### 11.4.4 Data Availability Layers

### 11.4.5 Specialization

### 11.4.6 Modular Design

### 11.4.7 Layer Separation

---

# 11.5 Layer 1 vs Layer 2

## Why This Matters

This distinction defines modern blockchain architecture.

Topics

### 11.5.1 Base Layers

### 11.5.2 Scaling Layers

### 11.5.3 Settlement

### 11.5.4 Security Inheritance

### 11.5.5 Trust Assumptions

### 11.5.6 Layer Composition

### 11.5.7 Blockchain Stacks

---

# 11.6 What Is A Rollup?

## Why This Matters

Rollups are the dominant scaling solution.

Topics

### 11.6.1 Transaction Batching

### 11.6.2 Offchain Execution

### 11.6.3 Onchain Settlement

### 11.6.4 State Commitments

### 11.6.5 Security Inheritance

### 11.6.6 Rollup Architecture

### 11.6.7 Scaling Through Compression

---

# 11.7 Rollup Mental Model

## Why This Matters

This is the most important chapter of the phase.

Ethereum becomes:

```text
Court System
```

Rollups become:

```text
Businesses
```

Topics

### 11.7.1 Local Execution

### 11.7.2 Global Settlement

### 11.7.3 Dispute Resolution

### 11.7.4 Shared Security

### 11.7.5 State Publishing

### 11.7.6 Verification

### 11.7.7 Rollup Economics

---

# 11.8 Optimistic Rollups

## Why This Matters

One major family of rollups.

Topics

### 11.8.1 Optimistic Assumptions

### 11.8.2 State Commitments

### 11.8.3 Fraud Proofs

### 11.8.4 Challenge Windows

### 11.8.5 Interactive Verification

### 11.8.6 Economic Security

### 11.8.7 Optimistic Architecture

---

# 11.9 Fraud Proofs

## Why This Matters

Optimistic Rollups assume honesty.

Proofs detect dishonesty.

Topics

### 11.9.1 State Verification

### 11.9.2 Dispute Games

### 11.9.3 Interactive Proofs

### 11.9.4 Fault Detection

### 11.9.5 Verification Systems

### 11.9.6 Challenge Mechanisms

### 11.9.7 Security Guarantees

---

# 11.10 ZK Rollups

## Why This Matters

The second major family of rollups.

Topics

### 11.10.1 Validity Proofs

### 11.10.2 Succinct Proofs

### 11.10.3 Cryptographic Verification

### 11.10.4 State Transitions

### 11.10.5 Fast Finality

### 11.10.6 Verification Efficiency

### 11.10.7 ZK Architecture

---

# 11.11 Optimistic vs ZK Rollups

## Why This Matters

Every blockchain engineer must understand this tradeoff.

Topics

### 11.11.1 Security Models

### 11.11.2 Finality

### 11.11.3 Cost Structures

### 11.11.4 Complexity

### 11.11.5 Developer Experience

### 11.11.6 Performance

### 11.11.7 Architectural Tradeoffs

---

# 11.12 Data Availability

## Why This Matters

Data availability is one of the hardest problems in blockchain.

Topics

### 11.12.1 State Data

### 11.12.2 Transaction Data

### 11.12.3 Data Publication

### 11.12.4 Data Retrieval

### 11.12.5 Availability Guarantees

### 11.12.6 Security Implications

### 11.12.7 Data Availability Problem

---

# 11.13 Data Availability Sampling

## Why This Matters

This enables massive scalability.

Topics

### 11.13.1 Sampling Theory

### 11.13.2 Probabilistic Verification

### 11.13.3 Erasure Coding

### 11.13.4 Light Clients

### 11.13.5 Scalability

### 11.13.6 Verification Efficiency

### 11.13.7 DAS Systems

---

# 11.14 Blob Data

## Why This Matters

Modern Ethereum scaling depends on blobs.

Topics

### 11.14.1 Blob Transactions

### 11.14.2 Temporary Data

### 11.14.3 Rollup Costs

### 11.14.4 Data Markets

### 11.14.5 EIP-4844

### 11.14.6 Proto-Danksharding

### 11.14.7 Blob Architecture

---

# 11.15 State Growth

## Why This Matters

Blockchains grow forever.

Topics

### 11.15.1 State Bloat

### 11.15.2 Storage Expansion

### 11.15.3 Historical Data

### 11.15.4 Pruning

### 11.15.5 Stateless Clients

### 11.15.6 Sustainability

### 11.15.7 State Management

---

# 11.16 Stateless Blockchains

## Why This Matters

Future scaling may require new architectures.

Topics

### 11.16.1 Witnesses

### 11.16.2 State Access

### 11.16.3 Verification

### 11.16.4 Lightweight Nodes

### 11.16.5 Storage Reduction

### 11.16.6 State Separation

### 11.16.7 Stateless Architectures

---

# 11.17 Shared Sequencers

## Why This Matters

Rollups introduce new coordination problems.

Topics

### 11.17.1 Sequencers

### 11.17.2 Ordering

### 11.17.3 Decentralization

### 11.17.4 Shared Infrastructure

### 11.17.5 Cross Rollup Coordination

### 11.17.6 Fair Ordering

### 11.17.7 Sequencer Markets

---

# 11.18 Interoperable Rollups

## Why This Matters

The future is many rollups.

Topics

### 11.18.1 Cross Rollup Messaging

### 11.18.2 Shared Liquidity

### 11.18.3 State Synchronization

### 11.18.4 Settlement Networks

### 11.18.5 Rollup Ecosystems

### 11.18.6 Communication Layers

### 11.18.7 Modular Economies

---

# 11.19 Major Layer 2 Architectures

## Why This Matters

Theory becomes reality.

Topics

### 11.19.1 Optimism

### 11.19.2 Arbitrum

### 11.19.3 Base

### 11.19.4 zkSync

### 11.19.5 Starknet

### 11.19.6 Scroll

### 11.19.7 Layer 2 Ecosystems

---

# 11.20 Data Availability Layers

## Why This Matters

Execution is becoming a commodity.

Data availability becomes the bottleneck.

Topics

### 11.20.1 Celestia

### 11.20.2 EigenDA

### 11.20.3 Avail

### 11.20.4 Data Markets

### 11.20.5 Modular Security

### 11.20.6 Availability Layers

### 11.20.7 Data Infrastructure

---

# 11.21 Ethereum's Scaling Roadmap

## Why This Matters

Modern Ethereum is a rollup-centric roadmap.

Topics

### 11.21.1 Rollup Centric Vision

### 11.21.2 Danksharding

### 11.21.3 Proto Danksharding

### 11.21.4 Data Scaling

### 11.21.5 Blob Markets

### 11.21.6 Future Throughput

### 11.21.7 Ethereum Scaling

---

# 11.22 Layer 2 Economics

## Why This Matters

Scaling changes incentives.

Topics

### 11.22.1 Fee Markets

### 11.22.2 Sequencer Revenue

### 11.22.3 Data Costs

### 11.22.4 Security Costs

### 11.22.5 Settlement Economics

### 11.22.6 Network Effects

### 11.22.7 Scaling Incentives

---

# 11.23 Modular Blockchain Thesis

## Why This Matters

This chapter unifies the phase.

Topics

### 11.23.1 Specialization

### 11.23.2 Layer Separation

### 11.23.3 Execution Markets

### 11.23.4 Settlement Markets

### 11.23.5 Consensus Markets

### 11.23.6 Data Markets

### 11.23.7 Modular Architecture

---

# 11.24 Reading The Foundations

## Why This Matters

Every blockchain engineer should understand scaling deeply.

Topics

### Vitalik Buterin

### Eli Ben-Sasson

### Rollup Research Papers

### Optimistic Rollup Research

### zk Rollup Research

### Danksharding Research

### Celestia Whitepaper

### Ethereum Scaling Roadmaps

---

# 11.25 Final Project — Build A Rollup

Build in Rust:

### Execution Layer

- Transactions
- State Transitions
- Account Model

### Rollup Layer

- Batch Construction
- State Commitments
- Merkle Proofs

### Settlement Layer

- Ethereum Settlement Simulation
- Fraud Proof Verification

### Data Layer

- Blob Publishing
- Data Availability

### Security Layer

- Challenge System
- Fraud Proofs
- Validity Proofs

### Economics Layer

- Sequencer Fees
- Settlement Costs

### Analytics Layer

- TPS
- Cost Per Transaction
- Throughput Metrics

---

# Architecture

```text
Users
↓
Transactions
↓
Rollups
↓
Batches
↓
State Commitments
↓
Settlement
↓
Ethereum
↓
Security
```

---

# Outcome

By the end of Phase 11 you should understand:

```text
Scalability
↓
Rollups
↓
Fraud Proofs
↓
Validity Proofs
↓
Data Availability
↓
Blobs
↓
Modular Architectures
↓
Layer 2 Systems
```

and be able to answer:

- Why can't Ethereum simply increase block size?
- What is the Blockchain Trilemma?
- What is a Rollup?
- How do Optimistic Rollups work?
- How do ZK Rollups work?
- What is Data Availability?
- Why are blobs important?
- What are shared sequencers?
- What is modular blockchain architecture?
- Why is Ethereum becoming a settlement layer?

Most importantly, you should realize:

```text
Bitcoin
Solved Trust

Ethereum
Solved Computation

DeFi
Solved Finance

Layer 2s
Solve Scale
```

And the deepest mental model:

```text
The Future Blockchain
Will Not Be

One Chain

The Future Blockchain
Will Be

Many Execution Layers
↓
Sharing
↓
One Security Layer
```

The original blockchain dream was:

```text
One Chain
For Everything
```

The modern blockchain thesis is:

```text
Many Specialized Chains
↓
Shared Security
↓
Shared Settlement
↓
Shared Truth
```

---

# Phase 12 — Blockchain Security

So far we have assumed:

```text
Protocols Behave Correctly
```

Now we study reality.

Because every valuable system eventually becomes a target.

Phase 12 studies:

```text
Threat Models
↓
Smart Contract Exploits
↓
Protocol Attacks
↓
Cryptographic Failures
↓
Economic Attacks
↓
Security Engineering
```

where we learn the most important lesson in protocol engineering:

```text
A System
Is Only As Strong
As Its Weakest Assumption
```
