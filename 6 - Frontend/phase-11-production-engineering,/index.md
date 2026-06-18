# PHASE 11 — PRODUCTION ENGINEERING & OPERATIONS

> Building software is easy.
>
> Keeping software alive is hard.

---

# Why This Phase Exists

Most engineering education stops at:

```text id="m4w2kq"
Build
Deploy
Done
```

Reality starts after deployment.

The real questions become:

```text id="g3shyn"
What happens when a server crashes?

What happens when the database fills up?

What happens when an API becomes slow?

What happens when users cannot log in?

What happens at 3 AM?
```

Most engineers learn:

```text id="llz8l9"
How to write code
```

Very few learn:

```text id="l8m2i3"
How to operate software
```

Production Engineering exists because software is a living system.

---

# The Fundamental Question

Imagine:

```text id="e26skz"
Phunsuk
100,000 Users
```

Suddenly:

```text id="6g3v4q"
Payment System Fails
```

Questions:

- How do we know?
- How fast can we detect it?
- How fast can we fix it?
- How do we prevent it again?

Production Engineering answers those questions.

---

# Learning Objectives

By the end of this phase you should understand:

- Production environments
- Deployment systems
- Monitoring
- Observability
- Incident response
- Reliability engineering
- CI/CD
- Infrastructure operations
- Production debugging

---

# Mental Model

Most developers think:

```text id="b67eyj"
Software
=
Code
```

Wrong.

Production software is:

```text id="gs5q4i"
Code
+
Infrastructure
+
Monitoring
+
Processes
+
Operations
```

Without operations:

```text id="pjw6n2"
Software Eventually Dies
```

---

# PHASE ROADMAP

---

# 11.1 What Is Production?

Topics:

- Development
- Staging
- Production

Questions:

Why do environments exist?

---

# 11.2 Production Architecture

Topics:

```text id="pwfqwi"
Browser
↓
CDN
↓
Load Balancer
↓
Application
↓
Database
```

Questions:

What actually runs in production?

---

# 11.3 Infrastructure Fundamentals

Topics:

- Servers
- Networks
- Storage

Questions:

Where does software live?

---

# 11.4 Linux For Production

Topics:

```bash id="93axw4"
ps
top
htop
systemctl
journalctl
```

Questions:

How do engineers inspect systems?

---

# 11.5 Environment Variables

Topics:

```bash id="7bq6mx"
DATABASE_URL
API_KEY
SECRET_KEY
```

Questions:

Why separate configuration from code?

---

# 11.6 Secrets Management

Topics:

- Credentials
- Tokens
- Encryption

Questions:

How should secrets be stored?

---

# 11.7 Build Systems

Topics:

```text id="8yxzfj"
Source
↓
Build
↓
Artifact
```

Questions:

What is a build artifact?

---

# 11.8 CI/CD Fundamentals

Topics:

Continuous Integration

Continuous Delivery

Questions:

Why automate deployment?

---

# 11.9 GitHub Actions

Topics:

Automation Pipelines

Questions:

How should deployments be triggered?

---

# 11.10 Docker Fundamentals

Critical topic.

Topics:

```text id="cc0xol"
Image
Container
Registry
```

Questions:

Why package applications?

---

# 11.11 Container Architecture

Topics:

Isolation

Questions:

Why are containers valuable?

---

# 11.12 Docker Networking

Topics:

Service communication

Questions:

How do containers communicate?

---

# 11.13 Docker Volumes

Topics:

Persistence

Questions:

How does data survive restarts?

---

# 11.14 Reverse Proxies

Topics:

```text id="ycdv6h"
Nginx
Traefik
Caddy
```

Questions:

Why place software in front of applications?

---

# 11.15 Load Balancing

Topics:

Traffic distribution

Questions:

How do applications scale?

---

# 11.16 Deployment Strategies

Topics:

```text id="grk5h4"
Rolling
Blue-Green
Canary
```

Questions:

How can deployments be safe?

---

# 11.17 Monitoring Fundamentals

Most important production skill.

Topics:

```text id="snh3v0"
Metrics
Logs
Traces
```

Questions:

How do engineers observe systems?

---

# 11.18 Logging

Topics:

Structured Logs

Questions:

How do we understand failures?

---

# 11.19 Metrics

Topics:

```text id="91d2ii"
CPU
Memory
Latency
Requests
```

Questions:

What should be measured?

---

# 11.20 Distributed Tracing

Topics:

Request journeys

Questions:

Where did the request spend time?

---

# 11.21 Observability

Critical topic.

Topics:

```text id="4cb8wg"
Metrics
Logs
Traces
```

Questions:

Why is monitoring not enough?

---

# 11.22 Health Checks

Topics:

Application health

Questions:

How do systems report their condition?

---

# 11.23 Alerting

Topics:

Notifications

Questions:

When should engineers be alerted?

---

# 11.24 On-Call Engineering

Topics:

Incident response

Questions:

How do teams respond to outages?

---

# 11.25 Incident Management

Topics:

Production failures

Questions:

What happens during an outage?

---

# 11.26 Root Cause Analysis

Topics:

Investigation

Questions:

Why did the failure happen?

---

# 11.27 Postmortems

Topics:

Learning from failures

Questions:

How do organizations improve?

---

# 11.28 Reliability Engineering

Topics:

System reliability

Questions:

How reliable should software be?

---

# 11.29 SLAs

Topics:

Service guarantees

Questions:

What is promised?

---

# 11.30 SLOs

Topics:

Reliability targets

Questions:

What should reliability be?

---

# 11.31 Error Budgets

Topics:

Risk management

Questions:

How much failure is acceptable?

---

# 11.32 Capacity Planning

Topics:

Growth forecasting

Questions:

How much infrastructure is needed?

---

# 11.33 Database Operations

Topics:

Backups
Maintenance

Questions:

How do databases survive?

---

# 11.34 Backup Strategies

Critical topic.

Topics:

Recovery planning

Questions:

What if the database disappears?

---

# 11.35 Disaster Recovery

Topics:

Catastrophic failures

Questions:

Can the company survive a total outage?

---

# 11.36 Security Operations

Topics:

Operational security

Questions:

How are attacks detected?

---

# 11.37 Authentication Operations

Topics:

Identity systems

Questions:

What happens when authentication fails?

---

# 11.38 Performance Monitoring

Topics:

Production metrics

Questions:

How do systems degrade?

---

# 11.39 Cost Engineering

Extremely important for MountainKid.

Topics:

```text id="2q4m0k"
Infrastructure Costs
Bandwidth Costs
Storage Costs
```

Questions:

How do small teams survive financially?

---

# 11.40 FinOps

Topics:

Cloud economics

Questions:

How can costs be optimized?

---

# 11.41 Edge Deployments

Topics:

Global infrastructure

Questions:

How can applications remain fast worldwide?

---

# 11.42 Production Security

Topics:

Hardening

Questions:

How do we protect production systems?

---

# 11.43 Feature Flags

Topics:

Controlled releases

Questions:

Can features be disabled instantly?

---

# 11.44 Release Engineering

Topics:

Software delivery

Questions:

How should releases occur?

---

# 11.45 Internal Tooling

Topics:

Operational leverage

Questions:

How can engineers automate operations?

---

# 11.46 Platform Engineering

Topics:

Developer platforms

Questions:

How can developers move faster?

---

# 11.47 Infrastructure As Code

Topics:

```text id="trn6dh"
Terraform
Pulumi
Automation
```

Questions:

Can infrastructure be version controlled?

---

# 11.48 Production Automation

Topics:

Self-healing systems

Questions:

Can systems operate themselves?

---

# 11.49 Operating Software At Scale

Topics:

Millions of users

Questions:

What changes at scale?

---

# 11.50 Production Systems Thinking

Topics:

Everything working together

Questions:

How should software be operated for years?

---

# Completion Project

Build:

```text id="xf3vsk"
MountainKid Production Platform
```

Requirements:

```text id="rmg4gn"
Docker
CI/CD
Monitoring
Logging
Metrics
Alerts
Backups
Health Checks
Feature Flags
Disaster Recovery Plan
```

Deploy:

```text id="0a35d6"
Phunsuk
Sari
Wangdu
Koel
```

into a production environment.

---

# Bonus Project

Build:

```text id="kr26ye"
MountainKid Control Center
```

Features:

```text id="x4snyf"
Deployments
Logs
Metrics
Alerts
User Activity
Health Status
```

One dashboard for every product.

---

# Success Criteria

You can confidently answer:

1. What is production?
2. Why do environments exist?
3. What is CI/CD?
4. Why does Docker exist?
5. What is observability?
6. What is the difference between logs, metrics, and traces?
7. What is an incident?
8. What is a postmortem?
9. What is an SLO?
10. What is an error budget?
11. How do backups work?
12. How does disaster recovery work?
13. What is platform engineering?
14. What is infrastructure as code?
15. How should monitoring be designed?
16. How should alerts be configured?
17. How should deployments be performed safely?
18. How can a small team operate large systems?
19. How can infrastructure costs remain low?
20. Why is operating software harder than building software?

If you can answer those questions from first principles, you'll realize:

```text id="g2mtrj"
Software Engineering
Does Not End At Deployment.

Deployment
Is The Beginning.
```

The companies that survive are not necessarily the ones that write the best code.

They are the ones that can operate reliable systems for years while everyone else is asleep.
