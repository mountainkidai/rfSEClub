Phase 17 is where most engineers discover they've been thinking too small.

Up until now you've built:

```text
Programs
↓
Services
↓
Databases
↓
Distributed Systems
```

But eventually another question appears:

> How do hundreds of services get deployed, operated, monitored, upgraded, secured, and scaled?

This is where infrastructure begins.

Infrastructure is not Docker.

Infrastructure is not Kubernetes.

Those are tools.

Infrastructure is the system that allows engineers to build systems.

A useful mental model:

```text
Phase 12
Build Applications

Phase 13
Make Applications Fast

Phase 14
Make Applications Distributed

Phase 15
Make Applications Secure

Phase 16
Build Languages

Phase 17
Build Platforms
```

This is where you start thinking like the engineers who built cloud platforms.

---

# Phase 17 — Infrastructure & Platforms

## Introduction

As systems grow, managing software becomes harder than writing software.

Consider a company with:

```text
100 Services
500 Databases
Thousands of Servers
Millions of Requests
```

The challenge is no longer:

```text
How do we build software?
```

The challenge becomes:

```text
How do we operate software?
```

Infrastructure engineering is the discipline of building systems that allow software to run reliably at scale.

Modern infrastructure manages:

- Compute
- Storage
- Networking
- Deployment
- Monitoring
- Security
- Scaling
- Reliability

Infrastructure transforms:

```text
Source Code
↓
Production System
```

This phase teaches how modern platforms work.

The goal is not learning Kubernetes.

The goal is understanding how cloud platforms are built.

---

# 17.1 Why Infrastructure Exists

## Why This Matters

Before tools, understand the problem.

Applications need environments.

Environments need management.

## Topics

### 17.1.1 Software Lifecycle

### 17.1.2 Deployment Challenges

### 17.1.3 Operational Complexity

### 17.1.4 Scalability Requirements

### 17.1.5 Reliability Requirements

### 17.1.6 Infrastructure Evolution

### 17.1.7 Platform Thinking

---

# 17.2 Compute Fundamentals

## Why This Matters

Everything begins with compute resources.

## Topics

### 17.2.1 Physical Servers

### 17.2.2 CPU Resources

### 17.2.3 Memory Resources

### 17.2.4 Storage Resources

### 17.2.5 Networking Resources

### 17.2.6 Resource Allocation

### 17.2.7 Infrastructure Economics

---

# 17.3 Virtualization

## Why This Matters

Cloud computing starts here.

## Topics

### 17.3.1 Virtual Machines

### 17.3.2 Hypervisors

### 17.3.3 Hardware Virtualization

### 17.3.4 Resource Isolation

### 17.3.5 VM Lifecycle

### 17.3.6 Performance Tradeoffs

### 17.3.7 Cloud Foundations

---

# 17.4 Containers

## Why This Matters

Containers changed software deployment.

But containers are Linux primitives packaged together.

## Topics

### 17.4.1 Why Containers Exist

### 17.4.2 Namespaces Review

### 17.4.3 cgroups Review

### 17.4.4 Container Isolation

### 17.4.5 Images

### 17.4.6 Layers

### 17.4.7 Container Runtime Architecture

---

# 17.5 Container Internals

## Why This Matters

Most engineers use containers.

Few understand them.

## Topics

### 17.5.1 OCI Standards

### 17.5.2 Container Runtime

### 17.5.3 Image Registries

### 17.5.4 Image Distribution

### 17.5.5 Filesystem Layers

### 17.5.6 Overlay Filesystems

### 17.5.7 Container Lifecycle

---

# 17.6 Orchestration

## Why This Matters

One container is easy.

Ten thousand containers are not.

## Topics

### 17.6.1 Scheduling

### 17.6.2 Resource Allocation

### 17.6.3 Cluster Management

### 17.6.4 Service Discovery

### 17.6.5 Health Management

### 17.6.6 Failure Recovery

### 17.6.7 Orchestration Principles

---

# 17.7 Kubernetes Architecture

## Why This Matters

Kubernetes dominates modern infrastructure.

Understanding it teaches platform design.

## Topics

### 17.7.1 Cluster Architecture

### 17.7.2 Control Plane

### 17.7.3 Worker Nodes

### 17.7.4 API Server

### 17.7.5 Scheduler

### 17.7.6 Controllers

### 17.7.7 Reconciliation Loops

---

# 17.8 Workload Management

## Why This Matters

Applications need deployment strategies.

## Topics

### 17.8.1 Pods

### 17.8.2 Deployments

### 17.8.3 Stateful Systems

### 17.8.4 Replica Management

### 17.8.5 Rolling Updates

### 17.8.6 Rollbacks

### 17.8.7 Deployment Strategies

---

# 17.9 Infrastructure Networking

## Why This Matters

Infrastructure is ultimately connected systems.

## Topics

### 17.9.1 Cluster Networking

### 17.9.2 Service Networking

### 17.9.3 Overlay Networks

### 17.9.4 Load Balancers

### 17.9.5 Ingress

### 17.9.6 Service Meshes

### 17.9.7 Traffic Management

---

# 17.10 Infrastructure Storage

## Why This Matters

Applications require persistent data.

## Topics

### 17.10.1 Volumes

### 17.10.2 Persistent Storage

### 17.10.3 Distributed Storage

### 17.10.4 Storage Classes

### 17.10.5 Snapshots

### 17.10.6 Backup Systems

### 17.10.7 Data Durability

---

# 17.11 Infrastructure As Code

## Why This Matters

Manual infrastructure does not scale.

## Topics

### 17.11.1 Declarative Systems

### 17.11.2 Desired State

### 17.11.3 Reproducibility

### 17.11.4 Configuration Management

### 17.11.5 Infrastructure Versioning

### 17.11.6 Automation

### 17.11.7 Platform Consistency

---

# 17.12 CI/CD

## Why This Matters

Software delivery should be automated.

## Topics

### 17.12.1 Build Pipelines

### 17.12.2 Automated Testing

### 17.12.3 Artifact Creation

### 17.12.4 Deployment Pipelines

### 17.12.5 Release Automation

### 17.12.6 Progressive Delivery

### 17.12.7 Continuous Improvement

---

# 17.13 Observability

## Why This Matters

Operating systems without visibility is impossible.

## Topics

### 17.13.1 Logs

### 17.13.2 Metrics

### 17.13.3 Traces

### 17.13.4 Telemetry

### 17.13.5 Distributed Observability

### 17.13.6 Incident Analysis

### 17.13.7 System Visibility

---

# 17.14 Monitoring Systems

## Why This Matters

Infrastructure fails continuously.

Detection is critical.

## Topics

### 17.14.1 Health Monitoring

### 17.14.2 Resource Monitoring

### 17.14.3 Alerting

### 17.14.4 Capacity Monitoring

### 17.14.5 SLA Monitoring

### 17.14.6 Failure Detection

### 17.14.7 Operational Awareness

---

# 17.15 Reliability Engineering

## Why This Matters

Reliable systems are engineered.

Not hoped for.

## Topics

### 17.15.1 Reliability Principles

### 17.15.2 Availability

### 17.15.3 Fault Tolerance

### 17.15.4 Redundancy

### 17.15.5 Failure Recovery

### 17.15.6 Resilience Patterns

### 17.15.7 Reliability Tradeoffs

---

# 17.16 Site Reliability Engineering

## Why This Matters

Modern platforms require operational discipline.

## Topics

### 17.16.1 SRE Philosophy

### 17.16.2 Service Level Objectives

### 17.16.3 Error Budgets

### 17.16.4 Incident Response

### 17.16.5 Postmortems

### 17.16.6 Capacity Planning

### 17.16.7 Reliability Culture

---

# 17.17 Cloud Architecture

## Why This Matters

Cloud platforms dominate modern computing.

## Topics

### 17.17.1 Cloud Computing

### 17.17.2 Compute Services

### 17.17.3 Storage Services

### 17.17.4 Managed Databases

### 17.17.5 Networking Services

### 17.17.6 Multi-Tenant Systems

### 17.17.7 Cloud Economics

---

# 17.18 Platform Engineering

## Why This Matters

Infrastructure eventually becomes a product.

## Topics

### 17.18.1 Internal Platforms

### 17.18.2 Developer Experience

### 17.18.3 Self-Service Systems

### 17.18.4 Platform APIs

### 17.18.5 Golden Paths

### 17.18.6 Engineering Productivity

### 17.18.7 Platform Design

---

# 17.19 Multi-Region Infrastructure

## Why This Matters

Global systems require global infrastructure.

## Topics

### 17.19.1 Geographic Distribution

### 17.19.2 Global Routing

### 17.19.3 Data Replication

### 17.19.4 Regional Failover

### 17.19.5 Disaster Recovery

### 17.19.6 Global Availability

### 17.19.7 Planet-Scale Systems

---

# 17.20 Reading Production Platforms

## Why This Matters

Study the systems that power the internet.

## Topics

### 17.20.1 Kubernetes Architecture

### 17.20.2 Cloud Platform Architecture

### 17.20.3 Service Mesh Architecture

### 17.20.4 Modern CI/CD Systems

### 17.20.5 Observability Platforms

### 17.20.6 Reliability Platforms

### 17.20.7 Lessons From Production Systems

---

# 17.21 Build A Mini Cloud Platform

## Why This Matters

This is where everything converges.

Build:

### Compute Layer

- Container Runtime
- Scheduling

### Deployment Layer

- Service Deployment
- Rolling Updates

### Networking Layer

- Service Discovery
- Load Balancing

### Operations Layer

- Monitoring
- Logging
- Metrics

### Reliability Layer

- Health Checks
- Auto Recovery

Architecture

```text
Source Code
↓
CI/CD
↓
Container
↓
Scheduler
↓
Cluster
↓
Service Discovery
↓
Load Balancer
↓
Users
```

---

# 17.22 Final Project — Build A Platform As A Service

Build a complete platform where a developer can:

```text
git push
↓
Build
↓
Deploy
↓
Scale
↓
Monitor
```

without manually managing infrastructure.

Features:

- Container Deployments
- Service Discovery
- Load Balancing
- Auto Scaling
- Monitoring
- Logging
- Metrics
- Health Checks
- Deployment Pipelines

By the end of this phase you should be able to explain:

- How containers work
- How Kubernetes works
- How cloud platforms work
- How CI/CD works
- How observability works
- How SRE works
- How platform engineering works

Most importantly:

You should understand that infrastructure is not about servers.

Infrastructure is about turning software deployment into a reliable, repeatable system.

This phase is where you transition from:

```text
Software Engineer
↓
Systems Engineer
↓
Platform Engineer
```

Because the engineers who build the most valuable technology companies are rarely just application developers.

They build the platforms that make thousands of applications possible.
