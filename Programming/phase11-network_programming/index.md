# Phase 11 — Network Programming

## Introduction

Computers are powerful.

But isolated computers are limited.

The real revolution occurred when computers became connected.

Modern civilization depends on networked systems:

- Search Engines
- Messaging Platforms
- Social Networks
- Payment Systems
- Cloud Infrastructure
- AI Systems

Every networked application follows a simple pattern:

```text
Computer A
↓
Network
↓
Computer B
```

Yet enormous complexity hides behind this seemingly simple interaction.

Questions immediately arise:

```text
How does data travel?

How does a computer find another computer?

How do we detect failures?

How do we ensure reliability?

How do we prevent eavesdropping?

How do millions of machines communicate simultaneously?
```

This phase teaches networking from first principles.

The goal is not learning HTTP.

The goal is understanding how information moves across the world.

---

# 11.1 Why Networks Exist

## Why This Matters

Before protocols, understand the problem.

One computer is useful.

Many connected computers change civilization.

## Topics

### 11.1.1 Information Sharing

### 11.1.2 Resource Sharing

### 11.1.3 Distributed Communication

### 11.1.4 Network Effects

### 11.1.5 Client Server Systems

### 11.1.6 Global Connectivity

### 11.1.7 The Birth Of The Internet

---

# 11.2 Physical Networks

## Why This Matters

Networking begins with physics.

Data must travel through a medium.

## Topics

### 11.2.1 Electrical Signals

### 11.2.2 Optical Signals

### 11.2.3 Radio Signals

### 11.2.4 Copper Networks

### 11.2.5 Fiber Networks

### 11.2.6 Wireless Networks

### 11.2.7 Data Transmission Fundamentals

---

# 11.3 Network Architecture

## Why This Matters

Networks are built in layers.

Understanding layers explains everything that follows.

## Topics

### 11.3.1 Abstraction Layers

### 11.3.2 Protocol Stacks

### 11.3.3 OSI Model

### 11.3.4 TCP/IP Model

### 11.3.5 Layer Responsibilities

### 11.3.6 Encapsulation

### 11.3.7 Network Design Principles

---

# 11.4 IP — Addressing The Internet

## Why This Matters

Communication requires identity.

Machines need addresses.

## Topics

### 11.4.1 What Is An IP Address?

### 11.4.2 IPv4

### 11.4.3 IPv6

### 11.4.4 Subnets

### 11.4.5 CIDR

### 11.4.6 Public Addresses

### 11.4.7 Private Addresses

### 11.4.8 Routing Fundamentals

---

# 11.5 Routing

## Why This Matters

Knowing an address is not enough.

Data must find a path.

## Topics

### 11.5.1 Routers

### 11.5.2 Routing Tables

### 11.5.3 Packet Forwarding

### 11.5.4 Network Paths

### 11.5.5 Autonomous Systems

### 11.5.6 BGP

### 11.5.7 How The Internet Routes Traffic

---

# 11.6 Packets

## Why This Matters

Networks do not move applications.

Networks move packets.

## Topics

### 11.6.1 Packet Structure

### 11.6.2 Headers

### 11.6.3 Payloads

### 11.6.4 Fragmentation

### 11.6.5 Packet Loss

### 11.6.6 Reassembly

### 11.6.7 Packet Lifecycles

---

# 11.7 Sockets

## Why This Matters

Sockets are the operating system's networking abstraction.

Every network application uses them.

## Topics

### 11.7.1 What Is A Socket?

### 11.7.2 Socket Lifecycle

### 11.7.3 Binding

### 11.7.4 Listening

### 11.7.5 Connecting

### 11.7.6 Reading

### 11.7.7 Writing

### 11.7.8 Closing Connections

---

# 11.8 UDP

## Why This Matters

Sometimes speed matters more than reliability.

UDP provides minimal overhead.

## Topics

### 11.8.1 Datagram Communication

### 11.8.2 Connectionless Networking

### 11.8.3 Reliability Tradeoffs

### 11.8.4 Packet Loss

### 11.8.5 Ordering Problems

### 11.8.6 Streaming Applications

### 11.8.7 Gaming And Real-Time Systems

---

# 11.9 TCP

## Why This Matters

Most internet applications require reliable communication.

TCP solves this problem.

## Topics

### 11.9.1 Reliable Communication

### 11.9.2 Three-Way Handshake

### 11.9.3 Sequence Numbers

### 11.9.4 Acknowledgements

### 11.9.5 Retransmission

### 11.9.6 Flow Control

### 11.9.7 Congestion Control

### 11.9.8 TCP Lifecycle

---

# 11.10 DNS

## Why This Matters

Humans remember names.

Networks use addresses.

DNS bridges the gap.

## Topics

### 11.10.1 Domain Names

### 11.10.2 Name Resolution

### 11.10.3 DNS Records

### 11.10.4 Recursive Resolution

### 11.10.5 Root Servers

### 11.10.6 Caching

### 11.10.7 Global DNS Infrastructure

---

# 11.11 TLS

## Why This Matters

The internet is hostile.

Communication must be protected.

## Topics

### 11.11.1 Encryption Fundamentals

### 11.11.2 Certificates

### 11.11.3 Public Key Cryptography

### 11.11.4 TLS Handshake

### 11.11.5 Session Keys

### 11.11.6 Trust Chains

### 11.11.7 Secure Communication

---

# 11.12 HTTP

## Why This Matters

The web runs on HTTP.

Most backend systems communicate using HTTP.

## Topics

### 11.12.1 Request Response Model

### 11.12.2 Methods

### 11.12.3 Headers

### 11.12.4 Status Codes

### 11.12.5 Stateless Communication

### 11.12.6 HTTP Lifecycle

### 11.12.7 Web Architecture

---

# 11.13 HTTP Evolution

## Why This Matters

The internet evolved.

Protocols evolved with it.

## Topics

### 11.13.1 HTTP 1.0

### 11.13.2 HTTP 1.1

### 11.13.3 Persistent Connections

### 11.13.4 HTTP/2

### 11.13.5 Multiplexing

### 11.13.6 HTTP/3

### 11.13.7 QUIC Foundations

---

# 11.14 WebSockets

## Why This Matters

Some applications need real-time communication.

Request-response is insufficient.

## Topics

### 11.14.1 Persistent Connections

### 11.14.2 Bidirectional Communication

### 11.14.3 Connection Upgrades

### 11.14.4 Message Streaming

### 11.14.5 Real-Time Systems

### 11.14.6 Chat Architectures

### 11.14.7 Live Applications

---

# 11.15 QUIC

## Why This Matters

The future of internet communication.

Modern protocols increasingly build on QUIC.

## Topics

### 11.15.1 Why QUIC Exists

### 11.15.2 UDP Foundation

### 11.15.3 Built-In Encryption

### 11.15.4 Stream Multiplexing

### 11.15.5 Connection Migration

### 11.15.6 Performance Improvements

### 11.15.7 Modern Internet Architecture

---

# 11.16 Network Programming In Rust

## Why This Matters

Now theory becomes implementation.

## Topics

### 11.16.1 TcpListener

### 11.16.2 TcpStream

### 11.16.3 UdpSocket

### 11.16.4 Async Networking

### 11.16.5 Connection Handling

### 11.16.6 Error Management

### 11.16.7 Protocol Implementation

---

# 11.17 Building Protocols

## Why This Matters

Protocols are simply agreements.

You should understand how to create them.

## Topics

### 11.17.1 Message Formats

### 11.17.2 Framing

### 11.17.3 Serialization

### 11.17.4 Versioning

### 11.17.5 Compatibility

### 11.17.6 Protocol Design

---

# 11.18 High Performance Networking

## Why This Matters

Large systems optimize networking aggressively.

## Topics

### 11.18.1 Connection Pools

### 11.18.2 Keep Alive

### 11.18.3 Zero Copy Concepts

### 11.18.4 Kernel Bypass

### 11.18.5 Load Balancing

### 11.18.6 Network Optimization

---

# 11.19 Network Observability

## Why This Matters

Networks fail constantly.

You need visibility.

## Topics

### 11.19.1 Packet Capture

### 11.19.2 Wireshark

### 11.19.3 tcpdump

### 11.19.4 Connection Analysis

### 11.19.5 Latency Measurement

### 11.19.6 Network Debugging

---

# 11.20 Final Project — Build A Network Service

Build from scratch:

### Layer 1

Custom Protocol

### Layer 2

TCP Server

### Layer 3

Client Library

### Layer 4

TLS Support

### Layer 5

Connection Pooling

Architecture

```text
Client
↓
DNS
↓
TCP/TLS
↓
Protocol
↓
Server
↓
Response
```

Possible Projects:

- Chat Server
- Key Value Server
- Message Broker
- Multiplayer Game Backend
- RPC Framework

By the end of this phase you should be able to explain:

- How the internet works
- How packets travel
- How routing works
- How TCP works
- How TLS works
- How HTTP works
- How QUIC works
- How network services are built

At this point a web request should no longer feel magical.

You should be able to mentally trace:

```text
Browser
↓
DNS
↓
TCP
↓
TLS
↓
HTTP
↓
Server
↓
Database
↓
Response
↓
Browser
```

and explain every step in the journey.
