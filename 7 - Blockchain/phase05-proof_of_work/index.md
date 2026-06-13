# Phase 5 — Proof of Work & Nakamoto Consensus

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

Now we study the breakthrough that made Bitcoin possible.

Not blockchain.

Not transactions.

Not cryptography.

The actual invention.

---

Before Bitcoin, consensus systems typically required:

```text
Known Participants
↓
Voting
↓
Permission
```

Bitcoin introduced something radically different:

```text
Open Participation
↓
Anonymous Nodes
↓
Economic Competition
↓
Consensus
```

This invention is called:

# Nakamoto Consensus

The core idea is deceptively simple:

```text
Hashing
+
Economic Cost
+
Competition
+
Longest Chain Rule
=
Distributed Consensus
```

For the first time in history:

```text
Anyone
Can Join

Anyone
Can Leave

Nobody
Needs Permission

Yet Everyone
Can Agree
```

This phase studies:

```text
Proof Of Work
↓
Mining
↓
Difficulty
↓
Economic Security
↓
Nakamoto Consensus
↓
Attack Resistance
```

Most importantly:

You will learn why Bitcoin remains secure despite being open to everyone.

---

# 5.1 The Consensus Problem Revisited

## Why This Matters

Consensus is easy when participants are known.

Bitcoin must work when participants are strangers.

Topics

### 5.1.1 Agreement

### 5.1.2 Distributed Truth

### 5.1.3 Open Networks

### 5.1.4 Adversarial Environments

### 5.1.5 Sybil Resistance

### 5.1.6 Trustless Coordination

### 5.1.7 Nakamoto's Insight

---

# 5.2 Why Voting Fails

## Why This Matters

Traditional voting systems break in open networks.

Example:

```text
1 Human
↓
Creates
↓
1,000,000 Fake Identities
```

Suddenly:

```text
Majority
=
Meaningless
```

Topics

### 5.2.1 Identity Problems

### 5.2.2 Fake Participants

### 5.2.3 Sybil Attacks

### 5.2.4 Permissionless Networks

### 5.2.5 Voting Weaknesses

### 5.2.6 Costless Attacks

### 5.2.7 Consensus Requirements

---

# 5.3 The Sybil Problem

## Why This Matters

Every decentralized system must answer:

> How do we prevent one actor from pretending to be thousands?

Topics

### 5.3.1 Identities

### 5.3.2 Pseudonyms

### 5.3.3 Reputation

### 5.3.4 Fake Nodes

### 5.3.5 Identity Costs

### 5.3.6 Sybil Resistance

### 5.3.7 Open Participation

---

# 5.4 Proof Of Work

## Why This Matters

Proof of Work converts:

```text
Computation
↓
Into
↓
Voting Power
```

Instead of:

```text
One Person
=
One Vote
```

Bitcoin uses:

```text
One Unit Of Work
=
One Vote
```

Topics

### 5.4.1 Work

### 5.4.2 Computational Cost

### 5.4.3 Energy Expenditure

### 5.4.4 Verifiable Effort

### 5.4.5 Cost As Security

### 5.4.6 Economic Barriers

### 5.4.7 Proof Of Work Foundations

---

# 5.5 Hashcash

## Why This Matters

Bitcoin's Proof of Work originated from Hashcash.

Hashcash was originally designed to fight spam.

Topics

### 5.5.1 Adam Back

### 5.5.2 Anti-Spam Systems

### 5.5.3 Computational Puzzles

### 5.5.4 Work Verification

### 5.5.5 Cost Imposition

### 5.5.6 Scarcity Through Computation

### 5.5.7 Hashcash Architecture

---

# 5.6 SHA-256 As A Lottery

## Why This Matters

Mining is often misunderstood.

Miners are not solving useful math problems.

They are participating in a lottery.

Topics

### 5.6.1 Randomness

### 5.6.2 Hash Outputs

### 5.6.3 Probability

### 5.6.4 Trial And Error

### 5.6.5 Winning Conditions

### 5.6.6 Expected Attempts

### 5.6.7 Cryptographic Lotteries

---

# 5.7 The Nonce

## Why This Matters

Miners need a changing input.

The nonce provides that input.

Topics

### 5.7.1 Nonce Definition

### 5.7.2 Search Space

### 5.7.3 Block Headers

### 5.7.4 Iteration

### 5.7.5 Entropy Sources

### 5.7.6 Mining Attempts

### 5.7.7 Nonce Strategies

---

# 5.8 Mining Mechanics

## Why This Matters

Mining is simply repeated hashing.

Topics

### 5.8.1 Candidate Blocks

### 5.8.2 Header Construction

### 5.8.3 Hash Computation

### 5.8.4 Difficulty Targets

### 5.8.5 Winning Hashes

### 5.8.6 Block Publication

### 5.8.7 Mining Workflow

---

# 5.9 Difficulty Targets

## Why This Matters

Without difficulty adjustment:

```text
More Miners
↓
Blocks Become Faster
```

Bitcoin must maintain predictable issuance.

Topics

### 5.9.1 Difficulty

### 5.9.2 Target Values

### 5.9.3 Leading Zeros

### 5.9.4 Network Hashrate

### 5.9.5 Mining Competition

### 5.9.6 Security Scaling

### 5.9.7 Difficulty Control

---

# 5.10 Difficulty Adjustment Algorithm

## Why This Matters

Bitcoin automatically adjusts difficulty.

No administrator required.

Topics

### 5.10.1 Retargeting

### 5.10.2 2016 Block Windows

### 5.10.3 Expected Block Times

### 5.10.4 Hashrate Changes

### 5.10.5 Self-Regulation

### 5.10.6 Monetary Stability

### 5.10.7 Adaptive Security

---

# 5.11 Block Rewards

## Why This Matters

Why would anyone spend electricity securing the network?

Because Bitcoin pays them.

Topics

### 5.11.1 Incentives

### 5.11.2 Coin Issuance

### 5.11.3 Subsidies

### 5.11.4 Security Budget

### 5.11.5 Economic Participation

### 5.11.6 Reward Distribution

### 5.11.7 Network Security

---

# 5.12 Coinbase Transactions

## Why This Matters

New bitcoins enter circulation through special transactions.

Topics

### 5.12.1 Coinbase Outputs

### 5.12.2 Block Rewards

### 5.12.3 Minting

### 5.12.4 Miner Compensation

### 5.12.5 Transaction Construction

### 5.12.6 Reward Accounting

### 5.12.7 Issuance Mechanism

---

# 5.13 Bitcoin Halvings

## Why This Matters

Bitcoin has a fixed monetary policy.

No central bank.

No committee.

No CEO.

Topics

### 5.13.1 Issuance Schedule

### 5.13.2 Halving Events

### 5.13.3 Scarcity

### 5.13.4 Monetary Predictability

### 5.13.5 Supply Curves

### 5.13.6 Long-Term Incentives

### 5.13.7 Economic Design

---

# 5.14 Hashrate

## Why This Matters

Hashrate measures the total computational power securing Bitcoin.

Topics

### 5.14.1 Network Hashrate

### 5.14.2 Security Metrics

### 5.14.3 Computational Competition

### 5.14.4 Mining Capacity

### 5.14.5 Global Mining

### 5.14.6 Economic Security

### 5.14.7 Security Measurement

---

# 5.15 Mining Hardware Evolution

## Why This Matters

Bitcoin mining became an arms race.

Topics

### 5.15.1 CPUs

### 5.15.2 GPUs

### 5.15.3 FPGAs

### 5.15.4 ASICs

### 5.15.5 Efficiency Improvements

### 5.15.6 Hardware Economics

### 5.15.7 Industrial Mining

---

# 5.16 Mining Pools

## Why This Matters

Mining rewards are probabilistic.

Pools reduce variance.

Topics

### 5.16.1 Pool Formation

### 5.16.2 Shared Rewards

### 5.16.3 Variance Reduction

### 5.16.4 Pool Protocols

### 5.16.5 Pool Centralization

### 5.16.6 Pool Economics

### 5.16.7 Mining Coordination

---

# 5.17 Nakamoto Consensus

## Why This Matters

This is the most important chapter of the phase.

The deepest mental model is:

```text
Proof Of Work
≠
Mining
```

Instead:

```text
Proof Of Work
↓
Creates Cost

Cost
↓
Creates Security

Security
↓
Creates Consensus
```

Topics

### 5.17.1 Longest Chain Rule

### 5.17.2 Most Work Chain

### 5.17.3 Chain Selection

### 5.17.4 Consensus Through Competition

### 5.17.5 Probabilistic Agreement

### 5.17.6 Network Convergence

### 5.17.7 Nakamoto Consensus Architecture

---

# 5.18 Probabilistic Finality

## Why This Matters

Bitcoin never achieves absolute finality.

Instead:

```text
More Confirmations
↓
More Security
```

Topics

### 5.18.1 Confirmations

### 5.18.2 Reorganization Risk

### 5.18.3 Settlement Confidence

### 5.18.4 Probabilities

### 5.18.5 Deep Reorgs

### 5.18.6 Finality Economics

### 5.18.7 Trust Through Probability

---

# 5.19 Attacks On Proof Of Work

## Why This Matters

Security only exists relative to attackers.

Engineers study attacks first.

Topics

### 5.19.1 51% Attacks

### 5.19.2 Selfish Mining

### 5.19.3 Block Withholding

### 5.19.4 Timewarp Attacks

### 5.19.5 Difficulty Manipulation

### 5.19.6 Mining Centralization

### 5.19.7 Security Assumptions

---

# 5.20 Energy, Security & Criticism

## Why This Matters

Proof of Work is one of the most debated engineering systems ever created.

Topics

### 5.20.1 Energy Consumption

### 5.20.2 Security Tradeoffs

### 5.20.3 Economic Costs

### 5.20.4 Environmental Arguments

### 5.20.5 Alternative Designs

### 5.20.6 Security Comparisons

### 5.20.7 Future Of Proof Of Work

---

# 5.21 Reading The Foundations

## Why This Matters

Every protocol engineer should deeply understand Proof of Work.

Topics

### Satoshi Nakamoto

### Adam Back

### Bitcoin Whitepaper

### Hashcash Paper

### Proof Of Work Research

### Selfish Mining Paper

### Bitcoin Core Mining Code

### Mining Economics Research

---

# 5.22 Final Project — Build A Bitcoin Miner

Build in Rust:

### Hashing Layer

- SHA-256
- Double SHA-256
- Hash Verification

### Mining Layer

- Nonces
- Candidate Blocks
- Difficulty Targets

### Consensus Layer

- Longest Chain Rule
- Fork Resolution
- Chain Selection

### Economics Layer

- Block Rewards
- Halving Logic
- Coinbase Transactions

### Attack Simulation Layer

- Honest Miners
- Adversarial Miners
- 51% Attack Simulation

### Visualization Layer

- Hashrate
- Difficulty
- Block Production
- Consensus State

---

# Architecture

```text
Transactions
↓
Blocks
↓
Proof Of Work
↓
Mining
↓
Difficulty
↓
Consensus
↓
Security
↓
Bitcoin
```

---

# Outcome

By the end of Phase 5 you should understand:

```text
Hashing
↓
Proof Of Work
↓
Mining
↓
Difficulty
↓
Hashrate
↓
Consensus
↓
Security
↓
Bitcoin
```

and be able to answer:

- Why does Proof of Work exist?
- What problem does mining solve?
- Why is SHA-256 used?
- What is a nonce?
- How does difficulty adjustment work?
- Why do miners receive rewards?
- What is Nakamoto Consensus?
- Why does Bitcoin use probabilistic finality?
- What is a 51% attack?
- Why does Proof of Work create security?

Most importantly, you should realize:

```text
Mining
Is Not About Creating Coins

Mining
Is About Creating Consensus
```

Bitcoin's true invention was not digital money.

It was discovering that:

```text
Economic Cost
Can Be Converted Into
Distributed Trust
```

That idea changed distributed systems forever.

Phase 6 will move beyond Bitcoin into:

```text
Ethereum
↓
Accounts
↓
Smart Contracts
↓
Programmable State Machines
↓
World Computers
```

where blockchains stop being money systems and become computation platforms.
