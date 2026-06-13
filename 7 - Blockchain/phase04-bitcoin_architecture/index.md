# Phase 4 — Bitcoin Architecture

## Introduction

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
Transactions
↓
Blocks
↓
Chains
↓
State Machines
↓
Blockchain
```

Now we study the system that changed everything.

Not cryptocurrency.

Not speculation.

Not price.

Engineering.

Bitcoin was the first system in human history that solved:

```text
Digital Scarcity
```

without:

```text
Governments
Banks
Corporations
Trusted Third Parties
```

Bitcoin is important because it combines:

```text
Cryptography
+
Distributed Systems
+
Economics
+
Game Theory
```

into a single protocol.

The purpose of this phase is understanding Bitcoin from first principles and being able to build a simplified version yourself.

---

# 4.1 The Double Spending Problem

## Why This Matters

This is the problem Bitcoin solved.

Physical objects cannot be copied.

Digital information can.

For example:

```text
Photo
↓
Copy
↓
Infinite Copies
```

The question becomes:

```text
How do we create
digital scarcity?
```

## Topics

### 4.1.1 Physical Ownership

### 4.1.2 Digital Information

### 4.1.3 Copying

### 4.1.4 Scarcity

### 4.1.5 Double Spending

### 4.1.6 Trusted Third Parties

### 4.1.7 Digital Ownership

---

# 4.2 Before Bitcoin

## Why This Matters

Bitcoin did not appear from nowhere.

It stands on decades of research.

## Topics

### 4.2.1 David Chaum

### 4.2.2 DigiCash

### 4.2.3 Hashcash

### 4.2.4 b-money

### 4.2.5 Bit Gold

### 4.2.6 Electronic Cash Research

### 4.2.7 The Missing Piece

---

# 4.3 Reading The Whitepaper

## Why This Matters

Every blockchain engineer should read the original source.

Not summaries.

The actual paper.

## Topics

### 4.3.1 Abstract

### 4.3.2 Transactions

### 4.3.3 Timestamp Server

### 4.3.4 Proof Of Work

### 4.3.5 Network

### 4.3.6 Incentives

### 4.3.7 SPV

---

# 4.4 Bitcoin As A System

## Why This Matters

Most people learn Bitcoin as isolated pieces.

Engineers learn systems.

Bitcoin is:

```text
Transactions
↓
Mempool
↓
Mining
↓
Blocks
↓
Consensus
↓
Ledger
```

## Topics

### 4.4.1 Components

### 4.4.2 Data Flow

### 4.4.3 State Changes

### 4.4.4 Network Participants

### 4.4.5 Economic Actors

### 4.4.6 Incentives

### 4.4.7 System Architecture

---

# 4.5 Bitcoin Transactions

## Why This Matters

Transactions are the heart of Bitcoin.

Everything begins here.

## Topics

### 4.5.1 Inputs

### 4.5.2 Outputs

### 4.5.3 Ownership Transfer

### 4.5.4 Signatures

### 4.5.5 Validation

### 4.5.6 Transaction Structure

### 4.5.7 State Updates

---

# 4.6 The UTXO Model

## Why This Matters

This is Bitcoin's most important design decision.

Bitcoin does not use accounts.

Bitcoin uses:

```text
Unspent Transaction Outputs
```

## Topics

### 4.6.1 What Is UTXO?

### 4.6.2 Transaction Inputs

### 4.6.3 Transaction Outputs

### 4.6.4 Spending Outputs

### 4.6.5 Change Outputs

### 4.6.6 Ownership Tracking

### 4.6.7 UTXO State Machine

---

# 4.7 Digital Signatures In Bitcoin

## Why This Matters

Bitcoin ownership is signature ownership.

Not account ownership.

## Topics

### 4.7.1 Key Pairs

### 4.7.2 Ownership Proof

### 4.7.3 Transaction Signing

### 4.7.4 Verification

### 4.7.5 Authorization

### 4.7.6 Security

### 4.7.7 Signature Systems

---

# 4.8 Bitcoin Addresses

## Why This Matters

Addresses are abstractions over keys.

Most people confuse the two.

## Topics

### 4.8.1 Public Keys

### 4.8.2 Address Generation

### 4.8.3 Base58 Encoding

### 4.8.4 Checksums

### 4.8.5 Wallet Addresses

### 4.8.6 Ownership

### 4.8.7 Identity In Bitcoin

---

# 4.9 Bitcoin Scripts

## Why This Matters

Bitcoin is programmable.

Just not in the way Ethereum is.

## Topics

### 4.9.1 Script Language

### 4.9.2 Opcodes

### 4.9.3 Script Execution

### 4.9.4 Locking Scripts

### 4.9.5 Unlocking Scripts

### 4.9.6 Verification Rules

### 4.9.7 Programmable Money

---

# 4.10 Mempool Architecture

## Why This Matters

Transactions enter the mempool before blocks.

## Topics

### 4.10.1 Transaction Broadcasting

### 4.10.2 Validation

### 4.10.3 Pending State

### 4.10.4 Transaction Fees

### 4.10.5 Prioritization

### 4.10.6 Propagation

### 4.10.7 Network Coordination

---

# 4.11 Block Structure

## Why This Matters

Blocks package transactions.

## Topics

### 4.11.1 Block Header

### 4.11.2 Previous Block Hash

### 4.11.3 Merkle Root

### 4.11.4 Timestamp

### 4.11.5 Difficulty Target

### 4.11.6 Nonce

### 4.11.7 Block Design

---

# 4.12 Merkle Trees In Bitcoin

## Why This Matters

Merkle Trees allow efficient verification.

## Topics

### 4.12.1 Transaction Hashes

### 4.12.2 Tree Construction

### 4.12.3 Merkle Root

### 4.12.4 Inclusion Proofs

### 4.12.5 Efficient Verification

### 4.12.6 SPV

### 4.12.7 Scalability Benefits

---

# 4.13 Mining Overview

## Why This Matters

Mining secures Bitcoin.

Phase 5 studies it in depth.

This chapter introduces the architecture.

## Topics

### 4.13.1 Miners

### 4.13.2 Candidate Blocks

### 4.13.3 Proof Of Work

### 4.13.4 Block Discovery

### 4.13.5 Rewards

### 4.13.6 Competition

### 4.13.7 Security Model

---

# 4.14 Bitcoin Network

## Why This Matters

Bitcoin is a peer-to-peer system.

## Topics

### 4.14.1 Nodes

### 4.14.2 Peers

### 4.14.3 Gossip Protocols

### 4.14.4 Block Propagation

### 4.14.5 Transaction Propagation

### 4.14.6 Network Topology

### 4.14.7 Decentralized Communication

---

# 4.15 Chain Selection

## Why This Matters

Different nodes may temporarily disagree.

Bitcoin requires a resolution mechanism.

## Topics

### 4.15.1 Competing Chains

### 4.15.2 Longest Chain Rule

### 4.15.3 Fork Resolution

### 4.15.4 Consensus

### 4.15.5 Reorganizations

### 4.15.6 Network Convergence

### 4.15.7 Shared History

---

# 4.16 Bitcoin Economics

## Why This Matters

Bitcoin is secured by incentives.

Not trust.

Not laws.

Incentives.

## Topics

### 4.16.1 Block Rewards

### 4.16.2 Transaction Fees

### 4.16.3 Economic Security

### 4.16.4 Incentive Alignment

### 4.16.5 Honest Participation

### 4.16.6 Network Security

### 4.16.7 Bitcoin Economics

---

# 4.17 Lightweight Clients

## Why This Matters

Not every participant runs a full node.

## Topics

### 4.17.1 SPV

### 4.17.2 Merkle Proofs

### 4.17.3 Header Verification

### 4.17.4 Lightweight Validation

### 4.17.5 Mobile Clients

### 4.17.6 Trust Assumptions

### 4.17.7 Efficient Participation

---

# 4.18 Bitcoin Limitations

## Why This Matters

Engineers study tradeoffs.

Not ideology.

## Topics

### 4.18.1 Throughput Limits

### 4.18.2 Latency

### 4.18.3 Energy Usage

### 4.18.4 Storage Growth

### 4.18.5 Script Limitations

### 4.18.6 Scaling Challenges

### 4.18.7 Future Evolution

---

# 4.19 Reading The Foundations

## Why This Matters

Every protocol engineer should deeply understand Bitcoin.

## Topics

### Satoshi Nakamoto

### Bitcoin Whitepaper

### Bitcoin Source Code

### UTXO Research

### Hashcash

### Bit Gold

### Bitcoin Improvement Proposals (BIPs)

### Bitcoin Core Architecture

---

# 4.20 Final Project — Build A Bitcoin-Like Blockchain

Build in Rust:

### Cryptography Layer

- Keys
- Addresses
- Signatures

### Transaction Layer

- Inputs
- Outputs
- UTXO Tracking

### Block Layer

- Block Headers
- Merkle Trees
- Validation

### Network Layer

- Peer Discovery
- Transaction Propagation
- Block Propagation

### Consensus Layer

- Chain Selection
- Basic Proof Of Work

Architecture

```text
Keys
↓
Transactions
↓
UTXOs
↓
Mempool
↓
Blocks
↓
Mining
↓
Consensus
↓
Ledger
```

---

# Outcome

By the end of Phase 4 you should understand:

```text
Keys
↓
Signatures
↓
Transactions
↓
UTXOs
↓
Blocks
↓
Mining
↓
Consensus
↓
Bitcoin
```

and be able to answer:

```text
What problem does Bitcoin solve?

What is the UTXO model?

How do Bitcoin transactions work?

How does ownership work?

Why are digital signatures important?

How are blocks constructed?

How does Bitcoin reach consensus?

Why does Bitcoin remain secure?
```

Most importantly, you should realize:

```text
Bitcoin is not digital money.

Bitcoin is a distributed system
for achieving digital scarcity
without trusted intermediaries.
```

Everything that follows—Proof of Work, Proof of Stake, Ethereum, Smart Contracts, DeFi, Proof of Reputation, and future protocols—is built on the foundation first established by Bitcoin.
