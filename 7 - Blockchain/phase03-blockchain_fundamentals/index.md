# Phase 3 — Blockchain Fundamentals

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

Now we combine everything.

For the first time:

```text
Trust
+
Cryptography
+
Consensus
+
Economics
=
Blockchain
```

Most people think a blockchain is:

```text
Blocks
+
Chains
```

This is wrong.

A blockchain is actually:

```text
Shared State Machine
↓
Replicated Across Thousands Of Nodes
↓
Protected By Cryptography
↓
Maintained Through Consensus
↓
Secured Through Incentives
```

The chain itself is merely a data structure.

The real innovation is decentralized agreement.

This phase teaches what a blockchain actually is.

---

# 3.1 What Is A Blockchain?

## Why This Matters

Before Bitcoin or Ethereum, understand the abstraction.

A blockchain is not:

```text
A Coin

A Token

A Wallet

An NFT
```

A blockchain is:

```text
A Distributed Ledger
```

## Topics

### 3.1.1 Distributed Ledgers

### 3.1.2 Shared State

### 3.1.3 Immutable Records

### 3.1.4 Verification

### 3.1.5 Replication

### 3.1.6 Consensus

### 3.1.7 Decentralized Trust

---

# 3.2 The Ledger

## Why This Matters

Everything begins with a ledger.

Civilizations have always relied on ledgers.

## Topics

### 3.2.1 Accounting

### 3.2.2 Ownership Records

### 3.2.3 Transactions

### 3.2.4 Historical Records

### 3.2.5 State Tracking

### 3.2.6 Shared Records

### 3.2.7 Digital Ledgers

---

# 3.3 State And State Transitions

## Why This Matters

Every blockchain is a state machine.

Not a database.

A state machine.

## Topics

### 3.3.1 State

### 3.3.2 State Representation

### 3.3.3 Transitions

### 3.3.4 Inputs

### 3.3.5 Outputs

### 3.3.6 Determinism

### 3.3.7 State Machines

---

# 3.4 Transactions

## Why This Matters

Transactions are the fundamental unit of change.

Everything starts with a transaction.

## Topics

### 3.4.1 Transaction Structure

### 3.4.2 Senders

### 3.4.3 Receivers

### 3.4.4 Amounts

### 3.4.5 Signatures

### 3.4.6 Validation

### 3.4.7 State Updates

---

# 3.5 Transaction Lifecycle

## Why This Matters

A transaction travels through the entire network.

## Topics

### 3.5.1 Creation

### 3.5.2 Signing

### 3.5.3 Broadcasting

### 3.5.4 Verification

### 3.5.5 Consensus

### 3.5.6 Finalization

### 3.5.7 State Commitment

---

# 3.6 Nodes

## Why This Matters

Blockchains are maintained by nodes.

Without nodes:

```text
No Blockchain
```

## Topics

### 3.6.1 Full Nodes

### 3.6.2 Light Nodes

### 3.6.3 Archive Nodes

### 3.6.4 Validators

### 3.6.5 Miners

### 3.6.6 Clients

### 3.6.7 Network Participants

---

# 3.7 Peer-To-Peer Networks

## Why This Matters

Blockchain removes central servers.

## Topics

### 3.7.1 Peer Discovery

### 3.7.2 Connections

### 3.7.3 Message Propagation

### 3.7.4 Gossip Protocols

### 3.7.5 Network Topology

### 3.7.6 Decentralized Communication

### 3.7.7 P2P Infrastructure

---

# 3.8 Blocks

## Why This Matters

Transactions are grouped into blocks.

Blocks improve efficiency.

## Topics

### 3.8.1 Block Structure

### 3.8.2 Headers

### 3.8.3 Payloads

### 3.8.4 Transaction Lists

### 3.8.5 Merkle Roots

### 3.8.6 Metadata

### 3.8.7 Block Design

---

# 3.9 Chains

## Why This Matters

Blocks become powerful when linked together.

## Topics

### 3.9.1 Parent Blocks

### 3.9.2 Hash Linking

### 3.9.3 Chain Growth

### 3.9.4 Historical Ordering

### 3.9.5 Immutability

### 3.9.6 Verification

### 3.9.7 Blockchain History

---

# 3.10 Why Hash Chains Work

## Why This Matters

Hash linking creates tamper resistance.

## Topics

### 3.10.1 Block Hashes

### 3.10.2 Parent References

### 3.10.3 Historical Integrity

### 3.10.4 Tampering

### 3.10.5 Rewriting History

### 3.10.6 Computational Costs

### 3.10.7 Immutable Records

---

# 3.11 Mempools

## Why This Matters

Transactions do not enter blocks immediately.

## Topics

### 3.11.1 Pending Transactions

### 3.11.2 Transaction Queues

### 3.11.3 Propagation

### 3.11.4 Prioritization

### 3.11.5 Fees

### 3.11.6 Transaction Selection

### 3.11.7 Network Coordination

---

# 3.12 Validation

## Why This Matters

Every node independently verifies everything.

Trust is replaced by verification.

## Topics

### 3.12.1 Signature Verification

### 3.12.2 Transaction Rules

### 3.12.3 State Validation

### 3.12.4 Block Validation

### 3.12.5 Consensus Validation

### 3.12.6 Invalid States

### 3.12.7 Deterministic Verification

---

# 3.13 Consensus In Practice

## Why This Matters

Consensus is where theory becomes reality.

## Topics

### 3.13.1 Block Production

### 3.13.2 Block Acceptance

### 3.13.3 Fork Resolution

### 3.13.4 Chain Selection

### 3.13.5 Finality

### 3.13.6 Shared Agreement

### 3.13.7 Consensus Operations

---

# 3.14 Forks

## Why This Matters

Disagreement is inevitable.

Forks are how blockchains handle disagreement.

## Topics

### 3.14.1 Temporary Forks

### 3.14.2 Chain Splits

### 3.14.3 Competing Histories

### 3.14.4 Reorganizations

### 3.14.5 Soft Forks

### 3.14.6 Hard Forks

### 3.14.7 Governance Through Forking

---

# 3.15 Finality

## Why This Matters

When is a transaction truly finished?

This is harder than it sounds.

## Topics

### 3.15.1 Probabilistic Finality

### 3.15.2 Deterministic Finality

### 3.15.3 Confirmations

### 3.15.4 Security Thresholds

### 3.15.5 Reversibility

### 3.15.6 Settlement

### 3.15.7 Trust In Outcomes

---

# 3.16 Blockchain Data Structures

## Why This Matters

A blockchain is ultimately software.

Software relies on data structures.

## Topics

### 3.16.1 Linked Structures

### 3.16.2 Merkle Trees

### 3.16.3 State Trees

### 3.16.4 Transaction Graphs

### 3.16.5 Indexes

### 3.16.6 Storage Engines

### 3.16.7 Blockchain Architecture

---

# 3.17 Blockchain Design Tradeoffs

## Why This Matters

Every blockchain makes tradeoffs.

There is no perfect design.

## Topics

### 3.17.1 Security

### 3.17.2 Scalability

### 3.17.3 Decentralization

### 3.17.4 Throughput

### 3.17.5 Latency

### 3.17.6 Storage Costs

### 3.17.7 Protocol Tradeoffs

---

# 3.18 Blockchain As A State Machine

## Why This Matters

This is the most important chapter of the phase.

The deepest mental model is:

```text
Blockchain
≠
Chain Of Blocks

Blockchain
=
Replicated State Machine
```

## Topics

### 3.18.1 State Machines

### 3.18.2 Replication

### 3.18.3 Deterministic Execution

### 3.18.4 Consensus Driven Updates

### 3.18.5 Shared State

### 3.18.6 Network Synchronization

### 3.18.7 Blockchain Computation

---

# 3.19 Reading The Foundations

## Why This Matters

Every protocol engineer should understand the systems that inspired blockchain.

## Topics

### Leslie Lamport

### Ralph Merkle

### David Chaum

### Nick Szabo

### Satoshi Nakamoto

### Bitcoin Whitepaper

### Bit Gold

### Hashcash

### Distributed Systems Papers

---

# 3.20 Final Project — Build A Minimal Blockchain

Build in Rust:

### Transaction Layer

- Transactions
- Signatures
- Verification

### Block Layer

- Blocks
- Merkle Trees
- Hashing

### Chain Layer

- Chain Storage
- Validation
- History

### Network Layer

- Peer Nodes
- Transaction Propagation

### Consensus Layer

- Basic Consensus Simulation

Architecture

```text
Transactions
↓
Blocks
↓
Hash Linking
↓
Chain
↓
Consensus
↓
Shared State
```

---

# Outcome

By the end of Phase 3 you should understand:

```text
Transactions
↓
Blocks
↓
Chains
↓
Nodes
↓
Consensus
↓
State Machines
↓
Blockchain
```

and be able to answer:

```text
What is a blockchain?

Why do blocks exist?

Why are blocks chained together?

What is a transaction?

What is a node?

How does a transaction move through the network?

What is finality?

Why is a blockchain really a state machine?
```

Most importantly, you should realize:

```text
The chain is not the innovation.

The innovation is thousands of machines
maintaining a single shared reality
without trusting each other.
```

Everything from Bitcoin, Ethereum, Proof of Work, Proof of Stake, Proof of Reputation, DAOs, and future decentralized systems is built on this foundation.
