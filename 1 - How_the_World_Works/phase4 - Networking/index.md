# PHASE 4 — NETWORKING FUNDAMENTALS

## How Computers Communicate Across the World

---

# Goal

At the end of this phase, you should understand:

```text
Application
↓
HTTP
↓
TLS
↓
TCP
↓
IP
↓
Ethernet
↓
Physical Network
```

And be able to answer:

> What happens when I open https://phunsuk.ai in my browser?

---

# PART 1 — WHY NETWORKING EXISTS

---

## 4.1 The Problem of Isolated Computers

- Standalone computers
- Local information only
- Resource duplication

---

## 4.2 Why Computers Need Networks

- Communication
- Resource sharing
- Remote access
- Distributed systems

---

## 4.3 What Is A Network?

- Definition
- Nodes
- Connections
- Communication channels

---

## 4.4 Types of Networks

- PAN
- LAN
- MAN
- WAN
- Internet

---

## 4.5 Network Topologies

- Bus
- Ring
- Star
- Mesh

---

## 4.6 Physical Networking Hardware

- Network Interface Cards
- Switches
- Routers
- Modems
- Access Points

---

# PART 2 — HOW INFORMATION TRAVELS

---

## 4.7 Information as Data

- Digital information
- Binary transmission

---

## 4.8 Physical Signals

- Electrical signals
- Optical signals
- Radio signals

---

## 4.9 Transmission Media

- Copper cables
- Fiber optics
- Wireless communication

---

## 4.10 The Problem with Large Messages

Problem:

```text
Huge Message
↓
Difficult To Send
```

---

## 4.11 Packet Switching

Solution:

```text
Message
↓
Packets
↓
Network
↓
Reassembled Message
```

---

## 4.12 Packets

- Headers
- Payloads
- Metadata

---

## 4.13 Frames

- Local delivery units
- Data-link communication

---

## 4.14 Bandwidth

- Capacity
- Throughput

---

## 4.15 Latency

- Propagation delay
- Transmission delay
- Processing delay

---

## 4.16 Packet Loss

- Causes
- Recovery

---

## 4.17 Jitter

- Variable latency
- Real-time communication

---

# PART 3 — WHY NETWORKING LAYERS EXIST

---

## 4.18 The Complexity Problem

Without layers:

```text
Everything Handles Everything
```

With layers:

```text
Each Layer Solves One Problem
```

---

## 4.19 Encapsulation

```text
Application Data
↓
TCP Segment
↓
IP Packet
↓
Ethernet Frame
```

---

## 4.20 Decapsulation

Reverse process on the receiving side.

---

## 4.21 OSI Model

```text
Application
Presentation
Session
Transport
Network
Data Link
Physical
```

---

## 4.22 TCP/IP Model

```text
Application
Transport
Internet
Link
```

---

## 4.23 Why TCP/IP Won

- Simplicity
- Practicality
- Internet adoption

---

# PART 4 — LOCAL NETWORK COMMUNICATION

---

## 4.24 MAC Addresses

- Physical device identities

---

## 4.25 Ethernet

- Local wired communication

---

## 4.26 Switches

- Forwarding frames
- MAC tables

---

## 4.27 ARP

Problem:

```text
Know IP
Don't Know MAC
```

Solution:

```text
ARP Request
↓
ARP Reply
```

---

## 4.28 WiFi

- Wireless communication
- Access points
- Wireless frames

---

## 4.29 Sending Data on a Local Network

Complete packet journey.

---

# PART 5 — INTERNET ADDRESSING

---

## 4.30 Why Addresses Exist

Every device needs an identity.

---

## 4.31 IP Addresses

- Logical addresses
- Internet identity

---

## 4.32 IPv4

- Structure
- Address exhaustion

---

## 4.33 IPv6

- Larger address space
- Future internet

---

## 4.34 Public IP Addresses

- Internet-facing devices

---

## 4.35 Private IP Addresses

- Internal networks

---

## 4.36 Subnets

- Network segmentation

---

## 4.37 CIDR Notation

- Address ranges

---

## 4.38 NAT

- Network Address Translation

---

## 4.39 Ports

- Process identification

Examples:

```text
80   HTTP
443  HTTPS
22   SSH
5432 PostgreSQL
6379 Redis
```

---

# PART 6 — ROUTING ACROSS THE INTERNET

---

## 4.40 Why Routers Exist

Networks need connectors.

---

## 4.41 Routers

- Packet forwarding
- Path selection

---

## 4.42 Routing Tables

- Next hop selection

---

## 4.43 Default Gateway

- Leaving your local network

---

## 4.44 Autonomous Systems

- ISP networks
- Internet organization

---

## 4.45 BGP

- Border Gateway Protocol
- Routing between networks

---

## 4.46 How a Packet Crosses the World

```text
Phone
↓
WiFi
↓
Router
↓
ISP
↓
Autonomous Systems
↓
Destination Network
↓
Server
```

---

# PART 7 — FINDING COMPUTERS

---

## 4.47 The Problem with IP Addresses

Humans remember names.

Computers use numbers.

---

## 4.48 Domain Names

Examples:

```text
google.com
phunsuk.ai
mountainkid.ai
```

---

## 4.49 DNS

- Distributed phonebook

---

## 4.50 DNS Hierarchy

```text
Root
↓
TLD
↓
Authoritative Server
```

---

## 4.51 Root Name Servers

- Internet root

---

## 4.52 Top Level Domains

- .com
- .org
- .net
- .ai
- .in

---

## 4.53 Authoritative Name Servers

- Source of truth

---

## 4.54 Recursive Resolvers

- DNS lookup services

---

## 4.55 DNS Resolution

```text
phunsuk.ai
↓
DNS Query
↓
IP Address
```

---

# PART 8 — RELIABLE COMMUNICATION

---

## 4.56 Why Reliability Is Hard

Problems:

- Packet loss
- Duplication
- Reordering

---

## 4.57 Transport Layer

- End-to-end communication

---

## 4.58 TCP

- Reliable protocol

---

## 4.59 Three-Way Handshake

```text
SYN
↓
SYN-ACK
↓
ACK
```

---

## 4.60 Sequence Numbers

- Ordering packets

---

## 4.61 Acknowledgments

- Confirming delivery

---

## 4.62 Retransmissions

- Recovering lost packets

---

## 4.63 Flow Control

- Receiver protection

---

## 4.64 Congestion Control

- Network protection

---

## 4.65 UDP

- Fast communication

---

## 4.66 TCP vs UDP

Tradeoffs and use cases.

---

# PART 9 — SECURE COMMUNICATION

---

## 4.67 Why Security Exists

- Privacy
- Authentication
- Integrity

---

## 4.68 Symmetric Encryption

- Shared secret keys

---

## 4.69 Asymmetric Encryption

- Public/private keys

---

## 4.70 Hash Functions

- Data fingerprints

---

## 4.71 Digital Signatures

- Identity verification

---

## 4.72 Digital Certificates

- Trusted identities

---

## 4.73 Certificate Authorities

- Internet trust model

---

## 4.74 TLS Handshake

- Secure connection setup

---

## 4.75 HTTPS

```text
HTTP
+
TLS
=
HTTPS
```

---

# PART 10 — APPLICATION PROTOCOLS

---

## 4.76 What Is HTTP?

- Request-response communication

---

## 4.77 HTTP Requests

- Methods
- Headers
- Body

---

## 4.78 HTTP Responses

- Status codes
- Headers
- Content

---

## 4.79 Cookies

- State management

---

## 4.80 Sessions

- User identity

---

## 4.81 HTTP/1.1

- Persistent connections

---

## 4.82 HTTP/2

- Multiplexing

---

## 4.83 HTTP/3

- QUIC transport

---

## 4.84 QUIC

- Modern internet transport

---

## 4.85 WebSockets

- Persistent bidirectional communication

---

## 4.86 gRPC

- Service-to-service communication

---

# PART 11 — THE COMPLETE JOURNEY

---

## 4.87 What Happens When You Open

```text
https://phunsuk.ai
```

---

## 4.88 Browser Processing

- URL parsing

---

## 4.89 DNS Resolution

- Finding the server

---

## 4.90 TCP Connection

- Reliable channel creation

---

## 4.91 TLS Handshake

- Secure channel creation

---

## 4.92 HTTP Request

- Sending the request

---

## 4.93 Packet Routing

- Traversing the internet

---

## 4.94 Server Processing

- Request handling

---

## 4.95 Response Journey

- Returning data

---

## 4.96 Page Rendering

- Browser display

---

# PHASE PROJECT

Build a Mini Internet Simulator

Features:

- DNS simulation
- Router simulation
- TCP handshake simulation
- TLS handshake visualization
- HTTP request/response flow
- Packet routing visualization

---

# END GOAL

You should be able to explain:

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
Router
↓
ISP
↓
Internet
↓
Server
↓
Response
```

from first principles and understand every layer involved in moving information across the planet.
