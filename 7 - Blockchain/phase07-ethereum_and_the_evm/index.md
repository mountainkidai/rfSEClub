# Phase 7 — Ethereum & The EVM

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
UTXO
↓
Mining
↓
Network
↓
Economics
```

In Phase 5 you learned:

```text
Proof Of Work
↓
Hashrate
↓
Security
↓
Nakamoto Consensus
```

In Phase 6 you learned:

```text
Proof Of Stake
↓
Validators
↓
Attestations
↓
Finality
```

Now we study the second major breakthrough after Bitcoin.

Not cryptocurrency.

Not staking.

Not tokens.

Computation.

---

Bitcoin solved:

```text
Digital Scarcity
```

Ethereum attempted to solve:

```text
General Purpose Decentralized Computation
```

Bitcoin asks:

```text
Who Owns Money?
```

Ethereum asks:

```text
What Should The Entire World Compute?
```

This sounds small.

It is not.

It changes blockchain from:

```text
Ledger
```

into:

```text
Global Computer
```

---

Before Ethereum:

```text
Blockchain
↓
Stores Money
```

After Ethereum:

```text
Blockchain
↓
Executes Programs
```

For the first time:

```text
Code
↓
Becomes Law
```

This phase studies:

```text
Accounts
↓
Transactions
↓
EVM
↓
Gas
↓
Execution
↓
State Changes
↓
Smart Contract Foundations
```

Most importantly:

You will understand why Ethereum is not a cryptocurrency.

Ethereum is a distributed computer.

---

# 7.1 Why Bitcoin Was Not Enough

## Why This Matters

Bitcoin is programmable.

But only narrowly programmable.

Ethereum was created to generalize computation.

Topics

### 7.1.1 Bitcoin Script

### 7.1.2 Script Limitations

### 7.1.3 Specialized Systems

### 7.1.4 General Computation

### 7.1.5 Protocol Explosion

### 7.1.6 Programmability

### 7.1.7 Ethereum's Motivation

---

# 7.2 The Vision Of Ethereum

## Why This Matters

Understanding Ethereum starts with understanding the problem.

Topics

### 7.2.1 World Computer

### 7.2.2 Decentralized Applications

### 7.2.3 Programmable Trust

### 7.2.4 Global State

### 7.2.5 Shared Computation

### 7.2.6 Open Platforms

### 7.2.7 Ethereum Philosophy

---

# 7.3 Blockchain As A Computer

## Why This Matters

This is the first major mental model shift.

Bitcoin:

```text
Blockchain
=
Ledger
```

Ethereum:

```text
Blockchain
=
Computer
```

Topics

### 7.3.1 Computation

### 7.3.2 Programs

### 7.3.3 Inputs

### 7.3.4 Outputs

### 7.3.5 State

### 7.3.6 Determinism

### 7.3.7 Distributed Computation

---

# 7.4 State Machines Revisited

## Why This Matters

Ethereum is fundamentally a state machine.

Topics

### 7.4.1 Global State

### 7.4.2 State Transitions

### 7.4.3 State Roots

### 7.4.4 Deterministic Execution

### 7.4.5 Replicated Computation

### 7.4.6 State Evolution

### 7.4.7 Ethereum State Machine

---

# 7.5 Accounts

## Why This Matters

Ethereum abandoned Bitcoin's UTXO model.

Topics

### 7.5.1 Accounts

### 7.5.2 Balances

### 7.5.3 Nonces

### 7.5.4 State Storage

### 7.5.5 Ownership

### 7.5.6 Authorization

### 7.5.7 Account Architecture

---

# 7.6 Externally Owned Accounts

## Why This Matters

Humans interact with Ethereum through EOAs.

Topics

### 7.6.1 Private Keys

### 7.6.2 Public Keys

### 7.6.3 Addresses

### 7.6.4 Transaction Signing

### 7.6.5 Ownership

### 7.6.6 Wallets

### 7.6.7 Human Accounts

---

# 7.7 Contract Accounts

## Why This Matters

Programs become first-class citizens.

Topics

### 7.7.1 Smart Contracts

### 7.7.2 Contract Storage

### 7.7.3 Contract Code

### 7.7.4 Autonomous Logic

### 7.7.5 Program Accounts

### 7.7.6 Contract State

### 7.7.7 Computation Accounts

---

# 7.8 Ethereum Addresses

## Why This Matters

Addresses are the identity layer of Ethereum.

Topics

### 7.8.1 Address Generation

### 7.8.2 Keccak Hashing

### 7.8.3 Public Key Derivation

### 7.8.4 Checksums

### 7.8.5 Identity

### 7.8.6 Address Formats

### 7.8.7 Address Security

---

# 7.9 Transactions

## Why This Matters

Transactions drive state changes.

Topics

### 7.9.1 Transaction Structure

### 7.9.2 Nonces

### 7.9.3 Gas Limits

### 7.9.4 Recipients

### 7.9.5 Value Transfer

### 7.9.6 Data Payloads

### 7.9.7 State Transitions

---

# 7.10 Ethereum Transaction Lifecycle

## Why This Matters

Every interaction follows a lifecycle.

Topics

### 7.10.1 Creation

### 7.10.2 Signing

### 7.10.3 Broadcasting

### 7.10.4 Mempool

### 7.10.5 Validation

### 7.10.6 Execution

### 7.10.7 Finalization

---

# 7.11 The Ethereum Virtual Machine

## Why This Matters

The EVM is Ethereum's heart.

This is the most important chapter of the phase.

Topics

### 7.11.1 Virtual Machines

### 7.11.2 Bytecode

### 7.11.3 Execution Environments

### 7.11.4 Determinism

### 7.11.5 Sandboxing

### 7.11.6 Replicated Execution

### 7.11.7 EVM Architecture

---

# 7.12 Why Virtual Machines Exist

## Why This Matters

Why not execute raw machine code?

Topics

### 7.12.1 Portability

### 7.12.2 Security

### 7.12.3 Determinism

### 7.12.4 Isolation

### 7.12.5 Cross Platform Execution

### 7.12.6 Consensus Safety

### 7.12.7 Virtualized Computation

---

# 7.13 EVM Architecture

## Why This Matters

To build smart contracts you must understand execution.

Topics

### 7.13.1 Stack

### 7.13.2 Memory

### 7.13.3 Storage

### 7.13.4 Opcodes

### 7.13.5 Execution Context

### 7.13.6 Call Frames

### 7.13.7 Machine Architecture

---

# 7.14 Opcodes

## Why This Matters

Everything in Ethereum becomes opcodes.

Topics

### 7.14.1 PUSH

### 7.14.2 POP

### 7.14.3 ADD

### 7.14.4 SUB

### 7.14.5 MUL

### 7.14.6 JUMP

### 7.14.7 CALL

---

# 7.15 Bytecode

## Why This Matters

Contracts do not run Solidity.

Contracts run bytecode.

Topics

### 7.15.1 Compilation

### 7.15.2 Deployment Code

### 7.15.3 Runtime Code

### 7.15.4 Execution

### 7.15.5 Byte Representation

### 7.15.6 Optimization

### 7.15.7 EVM Programs

---

# 7.16 Gas

## Why This Matters

Without gas:

```text
Infinite Loops
=
Network Death
```

Gas is Ethereum's resource meter.

Topics

### 7.16.1 Computational Cost

### 7.16.2 Resource Pricing

### 7.16.3 Gas Units

### 7.16.4 Gas Limits

### 7.16.5 Gas Consumption

### 7.16.6 Economic Security

### 7.16.7 Metered Computation

---

# 7.17 Why Gas Exists

## Why This Matters

Gas is one of Ethereum's greatest innovations.

Topics

### 7.17.1 Halting Problems

### 7.17.2 Infinite Computation

### 7.17.3 Resource Accounting

### 7.17.4 Abuse Prevention

### 7.17.5 Spam Resistance

### 7.17.6 Economic Constraints

### 7.17.7 Execution Limits

---

# 7.18 Storage Economics

## Why This Matters

Storage is expensive forever.

Topics

### 7.18.1 Persistent State

### 7.18.2 Storage Costs

### 7.18.3 State Growth

### 7.18.4 Rent Debates

### 7.18.5 Global Storage

### 7.18.6 Economic Tradeoffs

### 7.18.7 State Sustainability

---

# 7.19 Message Calls

## Why This Matters

Contracts interact through messages.

Topics

### 7.19.1 CALL

### 7.19.2 DELEGATECALL

### 7.19.3 STATICCALL

### 7.19.4 Value Transfer

### 7.19.5 Context Switching

### 7.19.6 Execution Chains

### 7.19.7 Contract Communication

---

# 7.20 Contract Creation

## Why This Matters

Contracts are deployed through transactions.

Topics

### 7.20.1 Deployment Transactions

### 7.20.2 Constructor Logic

### 7.20.3 CREATE

### 7.20.4 CREATE2

### 7.20.5 Deterministic Addresses

### 7.20.6 Deployment Costs

### 7.20.7 Contract Lifecycle

---

# 7.21 Ethereum State

## Why This Matters

The blockchain ultimately stores state.

Topics

### 7.21.1 Global State

### 7.21.2 Account State

### 7.21.3 Storage State

### 7.21.4 State Roots

### 7.21.5 Merkle Patricia Tries

### 7.21.6 State Commitments

### 7.21.7 World State

---

# 7.22 Ethereum Consensus Integration

## Why This Matters

The EVM does not exist independently.

It exists inside consensus.

Topics

### 7.22.1 Execution Layer

### 7.22.2 Consensus Layer

### 7.22.3 Validators

### 7.22.4 Block Proposals

### 7.22.5 State Execution

### 7.22.6 Finalization

### 7.22.7 Ethereum Architecture

---

# 7.23 Reading The Foundations

## Why This Matters

Every protocol engineer should study Ethereum's foundations.

Topics

### Vitalik Buterin

### Gavin Wood

### Ethereum Whitepaper

### Ethereum Yellow Paper

### EVM Specification

### Ethereum Execution Specs

### Ethereum Consensus Specs

### Ethereum Improvement Proposals (EIPs)

---

# 7.24 Final Project — Build A Mini EVM

Build in Rust:

### Account Layer

- EOAs
- Contract Accounts
- Nonces
- Balances

### Transaction Layer

- Signing
- Verification
- State Updates

### Execution Layer

- Stack Machine
- Opcodes
- Memory
- Storage

### Gas Layer

- Gas Accounting
- Resource Metering
- Execution Limits

### State Layer

- World State
- Account Storage
- State Roots

### Consensus Layer

- Block Execution
- State Transitions
- Finalization

### Debugging Layer

- Opcode Tracing
- Gas Profiling
- State Inspection

---

# Architecture

```text
Transactions
↓
Accounts
↓
EVM
↓
Opcodes
↓
Gas
↓
Execution
↓
State Changes
↓
Consensus
↓
Ethereum
```

---

# Outcome

By the end of Phase 7 you should understand:

```text
Accounts
↓
Transactions
↓
EVM
↓
Opcodes
↓
Gas
↓
Execution
↓
State
↓
Ethereum
```

and be able to answer:

- Why was Ethereum created?
- Why is Bitcoin Script limited?
- What is an EOA?
- What is a Contract Account?
- What is the EVM?
- Why do virtual machines exist?
- What are opcodes?
- Why does gas exist?
- What is Ethereum state?
- How does Ethereum execute programs?

Most importantly, you should realize:

```text
Bitcoin
=
Distributed Ledger

Ethereum
=
Distributed Computer
```

And the deepest mental model of the phase:

```text
Ethereum
≠
Cryptocurrency

Ethereum
=
Global Deterministic Computer
```

Every validator executes:

```text
The Same Code
↓
With The Same Inputs
↓
Produces The Same Outputs
↓
Updates The Same State
```

That is the real invention.

The EVM is not a blockchain feature.

The EVM is a distributed CPU shared by the entire world.

---

# Phase 8 Preview

Phase 7 answers:

> How does Ethereum execute programs?

Phase 8 answers:

> How do we engineer those programs safely?

Next we move into:

```text
Solidity
↓
Smart Contracts
↓
ERC Standards
↓
Contract Architecture
↓
Upgradeable Systems
↓
Production Engineering
```

where we stop studying Ethereum as a system and start building applications on top of it.
