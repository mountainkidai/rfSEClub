Phase 18 is where everything finally comes together.

Up until now you've learned:

```text
How computers work
How software works
How memory works
How operating systems work
How databases work
How networking works
How distributed systems work
How infrastructure works
```

But knowing technologies is not enough.

The hardest engineering problem is:

> Given a business problem, how should the entire system be designed?

This is System Design.

Not drawing boxes.

Not memorizing:

```text
Load Balancer
↓
API
↓
Database
```

System design is the art of making tradeoffs under constraints.

Every architecture decision is a tradeoff.

Always.

---

# Phase 18 — System Design

## Introduction

Building software and designing systems are different skills.

A software engineer asks:

```text id="b4n9m7"
How do I build this feature?
```

A systems engineer asks:

```text id="nq56xv"
How should this entire system work?
```

System design is the discipline of transforming requirements into architecture.

Every system must balance:

- Performance
- Reliability
- Security
- Scalability
- Complexity
- Cost

You cannot maximize all of them.

Every design is a compromise.

This phase teaches how world-class systems are designed.

The goal is not memorizing architectures.

The goal is learning how to think.

---

# 18.1 What Is System Design?

## Why This Matters

Before architecture, understand the purpose.

## Topics

### 18.1.1 Systems Thinking

### 18.1.2 Requirements

### 18.1.3 Constraints

### 18.1.4 Tradeoffs

### 18.1.5 Architecture

### 18.1.6 Scalability

### 18.1.7 Design Methodology

---

# 18.2 Requirement Analysis

## Why This Matters

Most bad systems begin with misunderstood requirements.

## Topics

### 18.2.1 Functional Requirements

### 18.2.2 Non-Functional Requirements

### 18.2.3 User Requirements

### 18.2.4 Business Requirements

### 18.2.5 Capacity Planning

### 18.2.6 Growth Assumptions

### 18.2.7 Requirement Prioritization

---

# 18.3 Capacity Estimation

## Why This Matters

Systems must be designed around reality.

## Topics

### 18.3.1 Traffic Estimation

### 18.3.2 Storage Estimation

### 18.3.3 Memory Estimation

### 18.3.4 Bandwidth Estimation

### 18.3.5 Compute Estimation

### 18.3.6 Growth Forecasting

### 18.3.7 Cost Modeling

---

# 18.4 Architectural Building Blocks

## Why This Matters

Most systems are combinations of common components.

## Topics

### 18.4.1 Clients

### 18.4.2 APIs

### 18.4.3 Databases

### 18.4.4 Caches

### 18.4.5 Message Brokers

### 18.4.6 Object Storage

### 18.4.7 Search Engines

### 18.4.8 Distributed Systems

---

# 18.5 Scalability

## Why This Matters

Growth breaks systems.

## Topics

### 18.5.1 Vertical Scaling

### 18.5.2 Horizontal Scaling

### 18.5.3 Bottleneck Analysis

### 18.5.4 Elastic Scaling

### 18.5.5 Throughput Growth

### 18.5.6 Cost Growth

### 18.5.7 Scalability Patterns

---

# 18.6 Reliability

## Why This Matters

Failures are guaranteed.

Reliability is engineered.

## Topics

### 18.6.1 Redundancy

### 18.6.2 Replication

### 18.6.3 Failover

### 18.6.4 Recovery

### 18.6.5 High Availability

### 18.6.6 Disaster Recovery

### 18.6.7 Reliability Tradeoffs

---

# 18.7 Performance Design

## Why This Matters

Systems exist under latency constraints.

## Topics

### 18.7.1 Latency Budgets

### 18.7.2 Throughput Targets

### 18.7.3 Caching Strategies

### 18.7.4 Query Optimization

### 18.7.5 Data Locality

### 18.7.6 Performance Bottlenecks

### 18.7.7 Optimization Strategies

---

# 18.8 Data Architecture

## Why This Matters

Data usually becomes the most valuable asset.

## Topics

### 18.8.1 Data Modeling

### 18.8.2 Storage Systems

### 18.8.3 Database Selection

### 18.8.4 Sharding

### 18.8.5 Replication

### 18.8.6 Consistency Models

### 18.8.7 Data Lifecycle Design

---

# 18.9 Communication Architecture

## Why This Matters

Systems are networks of components.

## Topics

### 18.9.1 Synchronous Communication

### 18.9.2 Asynchronous Communication

### 18.9.3 Event Driven Systems

### 18.9.4 Messaging Systems

### 18.9.5 Service Communication

### 18.9.6 Communication Tradeoffs

### 18.9.7 Distributed Coordination

---

# 18.10 Security Architecture

## Why This Matters

Security must be designed.

Not added later.

## Topics

### 18.10.1 Threat Modeling

### 18.10.2 Trust Boundaries

### 18.10.3 Identity Systems

### 18.10.4 Authorization Models

### 18.10.5 Encryption Strategies

### 18.10.6 Security Layers

### 18.10.7 Defense In Depth

---

# 18.11 Observability Architecture

## Why This Matters

Large systems require visibility.

## Topics

### 18.11.1 Logging

### 18.11.2 Metrics

### 18.11.3 Tracing

### 18.11.4 Alerting

### 18.11.5 Monitoring Design

### 18.11.6 Incident Detection

### 18.11.7 Operational Awareness

---

# 18.12 Design Methodology

## Why This Matters

System design is a process.

Not inspiration.

## Topics

### 18.12.1 Requirement Gathering

### 18.12.2 Constraint Identification

### 18.12.3 Capacity Planning

### 18.12.4 Architecture Selection

### 18.12.5 Tradeoff Analysis

### 18.12.6 Risk Analysis

### 18.12.7 Design Reviews

---

# 18.13 Designing A URL Shortener

## Why This Matters

Simple systems teach fundamentals.

## Topics

### 18.13.1 Identifier Generation

### 18.13.2 Storage Design

### 18.13.3 Caching

### 18.13.4 Redirect Architecture

### 18.13.5 Scaling Strategy

### 18.13.6 Reliability Design

---

# 18.14 Designing A Chat System

## Why This Matters

Messaging introduces real-time challenges.

## Topics

### 18.14.1 User Presence

### 18.14.2 Message Delivery

### 18.14.3 WebSockets

### 18.14.4 Message Persistence

### 18.14.5 Scalability

### 18.14.6 Global Delivery

### 18.14.7 Reliability

---

# 18.15 Designing A Social Network

## Why This Matters

Social platforms combine many system challenges.

## Topics

### 18.15.1 User Graphs

### 18.15.2 Feeds

### 18.15.3 Content Storage

### 18.15.4 Notifications

### 18.15.5 Ranking Systems

### 18.15.6 Growth Challenges

### 18.15.7 Scale Considerations

---

# 18.16 Designing A Video Platform

## Why This Matters

Media systems require specialized architectures.

## Topics

### 18.16.1 Upload Pipelines

### 18.16.2 Storage Systems

### 18.16.3 Transcoding

### 18.16.4 Content Delivery

### 18.16.5 Recommendation Systems

### 18.16.6 Global Scale

### 18.16.7 Cost Management

---

# 18.17 Designing A Search Engine

## Why This Matters

Search engines combine many disciplines.

## Topics

### 18.17.1 Crawling

### 18.17.2 Indexing

### 18.17.3 Ranking

### 18.17.4 Query Processing

### 18.17.5 Distributed Search

### 18.17.6 Relevance

### 18.17.7 Performance Design

---

# 18.18 Designing A Payment System

## Why This Matters

Financial systems require correctness.

## Topics

### 18.18.1 Ledgers

### 18.18.2 Transactions

### 18.18.3 Idempotency

### 18.18.4 Auditing

### 18.18.5 Fraud Prevention

### 18.18.6 Reliability

### 18.18.7 Regulatory Constraints

---

# 18.19 Designing A Cloud Platform

## Why This Matters

Cloud platforms combine everything.

## Topics

### 18.19.1 Compute

### 18.19.2 Storage

### 18.19.3 Networking

### 18.19.4 Scheduling

### 18.19.5 Isolation

### 18.19.6 Multi-Tenancy

### 18.19.7 Platform Economics

---

# 18.20 Designing An AI Platform

## Why This Matters

Modern infrastructure increasingly revolves around intelligence.

## Topics

### 18.20.1 Data Pipelines

### 18.20.2 Model Training

### 18.20.3 Inference Systems

### 18.20.4 Vector Databases

### 18.20.5 Agent Architectures

### 18.20.6 Evaluation Systems

### 18.20.7 AI Platform Design

---

# 18.21 Reading Great Architectures

## Why This Matters

Learn from systems that survived reality.

## Topics

### 18.21.1 Search Engine Architectures

### 18.21.2 Messaging Architectures

### 18.21.3 Cloud Architectures

### 18.21.4 Streaming Architectures

### 18.21.5 Financial Architectures

### 18.21.6 AI Architectures

### 18.21.7 Engineering Lessons

---

# 18.22 Design Reviews

## Why This Matters

Great systems emerge from criticism.

Not agreement.

## Topics

### 18.22.1 Design Documents

### 18.22.2 Architecture Reviews

### 18.22.3 Risk Reviews

### 18.22.4 Tradeoff Discussions

### 18.22.5 Failure Analysis

### 18.22.6 Decision Records

### 18.22.7 Engineering Communication

---

# 18.23 Final Project — Design Internet-Scale Systems

Design complete architectures for:

### System 1

Global Messaging Platform

### System 2

Search Engine

### System 3

Video Platform

### System 4

Cloud Platform

### System 5

AI Platform

For each system produce:

- Requirements
- Capacity Estimates
- Architecture
- Scalability Plan
- Reliability Plan
- Security Plan
- Cost Model
- Failure Analysis

Architecture Flow

```text
Problem
↓
Requirements
↓
Constraints
↓
Architecture
↓
Tradeoffs
↓
Implementation
↓
Operations
```

By the end of this phase you should be able to:

- Design large systems from scratch
- Analyze tradeoffs
- Estimate capacity
- Choose technologies rationally
- Review architectures critically
- Communicate engineering decisions

Most importantly:

You should stop thinking in terms of technologies and start thinking in terms of systems.

This phase is the culmination of almost everything before it.

```text
Programming
↓
Operating Systems
↓
Databases
↓
Networking
↓
Backend Engineering
↓
Performance
↓
Distributed Systems
↓
Security
↓
Infrastructure
↓
System Design
```

After Phase 18, the final phase should no longer be about learning concepts.

It should be about building world-class systems that force you to use everything you've learned. That's where Phase 19 begins.
