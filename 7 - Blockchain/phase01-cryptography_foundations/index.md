# Phase 1 — Cryptography Foundations

## Introduction

In Phase 0 you learned:

```text
Humans
↓
Trust
↓
Coordination
↓
Records
↓
Ownership
↓
Money
↓
Institutions
↓
Consensus
↓
Blockchain
```

But a critical question remains:

```text
How can a computer verify
something is true?
```

For example:

```text
How do you prove ownership?

How do you prove identity?

How do you verify a transaction?

How do you know data wasn't modified?

How do strangers trust a message?
```

Without cryptography:

```text
No Internet Banking

No HTTPS

No Digital Payments

No Bitcoin

No Ethereum

No Blockchain
```

Cryptography is the mathematics of trust.

The purpose of this phase is understanding how trust can be created through mathematics instead of institutions.

---

# 1.1 What Is Cryptography?

## Why This Matters

Before studying blockchain you must understand the foundation.

Blockchain is ultimately built on cryptography.

## Topics

### 1.1.1 Information

### 1.1.2 Secrets

### 1.1.3 Communication

### 1.1.4 Trust

### 1.1.5 Verification

### 1.1.6 Security

### 1.1.7 Cryptography As Trust Engineering

---

# 1.2 The History Of Cryptography

## Why This Matters

Cryptography is much older than computers.

The problems remained the same:

```text
Hide Information

Verify Information

Authenticate Information
```

## Topics

### 1.2.1 Ancient Ciphers

### 1.2.2 Caesar Cipher

### 1.2.3 Military Cryptography

### 1.2.4 Enigma Machine

### 1.2.5 Modern Cryptography

### 1.2.6 Internet Security

### 1.2.7 Blockchain Cryptography

---

# 1.3 Information Theory Foundations

## Why This Matters

Cryptography protects information.

To understand cryptography, you must understand information.

## Topics

### 1.3.1 Information

### 1.3.2 Entropy

### 1.3.3 Randomness

### 1.3.4 Predictability

### 1.3.5 Compression

### 1.3.6 Information Content

### 1.3.7 Information Security

---

# 1.4 Randomness

## Why This Matters

Security depends on randomness.

Weak randomness destroys cryptography.

## Topics

### 1.4.1 Random Numbers

### 1.4.2 Pseudorandomness

### 1.4.3 Entropy Sources

### 1.4.4 Random Generators

### 1.4.5 Cryptographic Randomness

### 1.4.6 Predictability

### 1.4.7 Security Through Unpredictability

---

# 1.5 Hash Functions

## Why This Matters

Hashing is the foundation of Bitcoin.

Everything depends on hashes.

## Topics

### 1.5.1 What Is A Hash?

### 1.5.2 Input And Output

### 1.5.3 Determinism

### 1.5.4 Avalanche Effect

### 1.5.5 One-Way Functions

### 1.5.6 Collision Resistance

### 1.5.7 Hashing As Digital Fingerprints

---

# 1.6 Cryptographic Hash Functions

## Why This Matters

Not all hashes are secure.

## Topics

### 1.6.1 SHA Family

### 1.6.2 SHA-256

### 1.6.3 SHA-3

### 1.6.4 Blake3

### 1.6.5 Collision Attacks

### 1.6.6 Security Properties

### 1.6.7 Modern Hash Design

---

# 1.7 Merkle Trees

## Why This Matters

Bitcoin uses Merkle Trees.

Almost every blockchain uses Merkle structures.

## Topics

### 1.7.1 Tree Structures

### 1.7.2 Hash Trees

### 1.7.3 Merkle Root

### 1.7.4 Verification

### 1.7.5 Inclusion Proofs

### 1.7.6 Efficient Validation

### 1.7.7 Blockchain Applications

---

# 1.8 Symmetric Cryptography

## Why This Matters

Sometimes two parties share a secret.

## Topics

### 1.8.1 Shared Keys

### 1.8.2 Encryption

### 1.8.3 Decryption

### 1.8.4 AES

### 1.8.5 Stream Ciphers

### 1.8.6 Key Management

### 1.8.7 Secure Communication

---

# 1.9 Public Key Cryptography

## Why This Matters

This is one of the most important inventions in computing.

It made the Internet possible.

It made Bitcoin possible.

## Topics

### 1.9.1 Key Pairs

### 1.9.2 Public Keys

### 1.9.3 Private Keys

### 1.9.4 Encryption

### 1.9.5 Authentication

### 1.9.6 Ownership

### 1.9.7 Trust Without Shared Secrets

---

# 1.10 Mathematical Foundations

## Why This Matters

Public key cryptography is mathematics.

Not magic.

## Topics

### 1.10.1 Modular Arithmetic

### 1.10.2 Prime Numbers

### 1.10.3 Finite Fields

### 1.10.4 Discrete Logarithms

### 1.10.5 Computational Hardness

### 1.10.6 Number Theory

### 1.10.7 Cryptographic Mathematics

---

# 1.11 Digital Signatures

## Why This Matters

Bitcoin ownership is digital signatures.

Not wallets.

Not coins.

Signatures.

## Topics

### 1.11.1 Signing

### 1.11.2 Verification

### 1.11.3 Authenticity

### 1.11.4 Non-Repudiation

### 1.11.5 Ownership Proof

### 1.11.6 Message Integrity

### 1.11.7 Digital Identity

---

# 1.12 Elliptic Curve Cryptography

## Why This Matters

Bitcoin and Ethereum rely heavily on ECC.

## Topics

### 1.12.1 Elliptic Curves

### 1.12.2 Finite Fields

### 1.12.3 Curve Arithmetic

### 1.12.4 secp256k1

### 1.12.5 ECDSA

### 1.12.6 Schnorr Signatures

### 1.12.7 Blockchain Applications

---

# 1.13 Wallets

## Why This Matters

Most people misunderstand wallets.

Wallets do not store coins.

They store keys.

## Topics

### 1.13.1 Private Keys

### 1.13.2 Public Keys

### 1.13.3 Addresses

### 1.13.4 Seed Phrases

### 1.13.5 Key Derivation

### 1.13.6 HD Wallets

### 1.13.7 Ownership Systems

---

# 1.14 Commitments

## Why This Matters

Many advanced blockchain protocols depend on commitments.

## Topics

### 1.14.1 Commitment Schemes

### 1.14.2 Hiding

### 1.14.3 Binding

### 1.14.4 Cryptographic Commitments

### 1.14.5 Time-Locked Information

### 1.14.6 Verifiable Claims

### 1.14.7 Trustless Commitments

---

# 1.15 Zero Knowledge Foundations

## Why This Matters

Modern blockchains increasingly depend on ZK systems.

## Topics

### 1.15.1 Proofs

### 1.15.2 Verification

### 1.15.3 Privacy

### 1.15.4 Knowledge

### 1.15.5 Soundness

### 1.15.6 Completeness

### 1.15.7 Zero Knowledge Principles

---

# 1.16 Cryptographic Identity

## Why This Matters

Identity is one of blockchain's hardest problems.

Especially important for reputation-based systems.

## Topics

### 1.16.1 Identity

### 1.16.2 Authentication

### 1.16.3 Sybil Resistance

### 1.16.4 Human Verification

### 1.16.5 Digital Reputation

### 1.16.6 Verifiable Credentials

### 1.16.7 Cryptographic Identity Systems

---

# 1.17 Attacks Against Cryptography

## Why This Matters

Engineers must understand failure modes.

## Topics

### 1.17.1 Brute Force Attacks

### 1.17.2 Collision Attacks

### 1.17.3 Replay Attacks

### 1.17.4 Key Theft

### 1.17.5 Side Channel Attacks

### 1.17.6 Quantum Threats

### 1.17.7 Cryptographic Failure Analysis

---

# 1.18 Cryptography In Blockchain Systems

## Why This Matters

This chapter connects everything together.

## Topics

### 1.18.1 Bitcoin Cryptography

### 1.18.2 Ethereum Cryptography

### 1.18.3 Signature Verification

### 1.18.4 Transaction Validation

### 1.18.5 State Verification

### 1.18.6 Consensus Security

### 1.18.7 Cryptographic Trust Systems

---

# 1.19 Reading The Foundations

## Why This Matters

Every protocol engineer should read foundational work.

## Topics

### Claude Shannon

Information Theory

### Whitfield Diffie

Public Key Cryptography

### Martin Hellman

Key Exchange

### Ron Rivest

RSA

### Adi Shamir

Cryptographic Systems

### Leonard Adleman

RSA

### Satoshi Nakamoto

Bitcoin Cryptography

### Original Cryptography Papers

### Bitcoin Whitepaper

---

# 1.20 Final Project — Build A Cryptographic Toolkit

Build in Rust:

### Hashing Layer

- SHA-256
- Blake3
- Merkle Trees

### Identity Layer

- Public Keys
- Private Keys
- Wallet Generation

### Signature Layer

- Message Signing
- Verification

### Commitment Layer

- Commitments
- Proof Systems

### Verification Layer

- Transaction Verification
- Ownership Verification

Architecture

```text
Information
↓
Hashing
↓
Keys
↓
Signatures
↓
Verification
↓
Trust
```

---

# Outcome

By the end of Phase 1 you should understand:

```text
Information
↓
Randomness
↓
Hashing
↓
Keys
↓
Signatures
↓
Identity
↓
Verification
↓
Trust
```

and be able to answer:

```text
Why are hash functions one-way?

Why are collisions dangerous?

Why do public/private keys work?

How do digital signatures prove ownership?

How do wallets work?

Why are Merkle Trees useful?

How does Bitcoin verify transactions?

How can trust emerge from mathematics?
```

Most importantly, you should realize:

```text
Cryptography
is not about hiding information.

Cryptography
is about making information trustworthy.
```

Everything that follows in Bitcoin, Ethereum, Proof of Stake, Proof of Reputation, Zero Knowledge, and future protocols is built on the foundations established in this phase.
