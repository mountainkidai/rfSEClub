# PHASE 9 — FRONTEND SYSTEMS DESIGN & SOFTWARE ARCHITECTURE

> Junior developers write components.
>
> Senior developers design systems.
>
> Elite engineers design organizations.

---

# Why This Phase Exists

Most frontend courses teach:

```text
Button
Card
Modal
Table
```

Those are useful.

But companies do not fail because buttons are difficult.

Companies fail because:

```text
Complexity
```

eventually destroys productivity.

A small application:

```text
10 Components
```

can survive poor architecture.

A platform with:

```text
10,000 Components
100 Engineers
Multiple Products
Millions of Users
```

cannot.

This phase teaches how to design frontend systems that survive:

```text
Years
Not Months
```

---

# The Fundamental Question

Imagine MountainKid becomes:

```text
Phunsuk
Sari
Wangdu
Koel
AlpKid
MountainKid AI
```

All sharing:

```text
Authentication
Design System
Components
Analytics
Payments
Infrastructure
```

Questions:

- How should code be organized?
- What should be shared?
- What should remain independent?
- How do teams avoid chaos?

This is Systems Design.

---

# Learning Objectives

By the end of this phase you should understand:

- Software architecture
- Frontend systems design
- Design systems
- Monorepos
- Scalability
- Team organization
- Product architecture
- Enterprise frontend engineering

---

# Mental Model

Most developers think:

```text
Architecture
=
Folder Structure
```

Wrong.

Architecture is:

```text
Managing Complexity
```

The goal is:

```text
Make Large Systems
Feel Small
```

---

# PHASE ROADMAP

---

# 9.1 What Is Software Architecture?

Topics:

- Complexity management
- System design
- Long-term maintainability

Questions:

Why does architecture exist?

Why do projects become difficult?

---

# 9.2 Frontend Architecture

Topics:

```text
UI
Business Logic
Data Layer
Infrastructure Layer
```

Questions:

What belongs where?

---

# 9.3 Separation of Concerns

Topics:

```text
Presentation
Logic
Data
Infrastructure
```

Questions:

Why should responsibilities be isolated?

---

# 9.4 Dependency Direction

Critical topic.

Topics:

```text
UI
↓
Application
↓
Domain
↓
Infrastructure
```

Questions:

Which layers should depend on which?

---

# 9.5 Domain Modeling

Topics:

Business entities

Questions:

What is a Tour?

What is a Booking?

What is a User?

What is a Payment?

---

# 9.6 Feature-Based Architecture

Topics:

```text
features/
```

Questions:

Why organize by business features?

---

# 9.7 Layer-Based Architecture

Topics:

```text
components/
hooks/
services/
```

Questions:

When is layer-based organization useful?

---

# 9.8 Modular Architecture

Topics:

Boundaries

Questions:

How do systems remain independent?

---

# 9.9 Clean Architecture

Topics:

```text
Domain
Application
Infrastructure
Presentation
```

Questions:

How should software depend on abstractions?

---

# 9.10 Hexagonal Architecture

Topics:

Ports & Adapters

Questions:

How can systems remain replaceable?

---

# 9.11 Design Systems

One of the most important frontend topics.

Topics:

```text
Tokens
Components
Patterns
Guidelines
```

Questions:

Why do design systems exist?

---

# 9.12 Design Tokens

Topics:

```text
Colors
Spacing
Typography
Radius
```

Questions:

How do brands remain consistent?

---

# 9.13 Component Libraries

Topics:

Reusable UI

Questions:

Why rewrite buttons repeatedly?

---

# 9.14 Pattern Libraries

Topics:

UI Patterns

Questions:

What is larger than a component?

---

# 9.15 Visual Consistency

Topics:

Design governance

Questions:

How do products feel unified?

---

# 9.16 Accessibility Systems

Topics:

Accessibility standards

Questions:

How do systems remain inclusive?

---

# 9.17 Documentation Systems

Topics:

Engineering knowledge

Questions:

How do teams share understanding?

---

# 9.18 Storybook Concepts

Topics:

Component development

Questions:

How can UI be developed independently?

---

# 9.19 Monorepos

Critical topic.

Topics:

```text
Single Repository
Multiple Projects
```

Questions:

Why do large companies use monorepos?

---

# 9.20 Turborepo

Topics:

Task orchestration

Questions:

How do monorepos remain fast?

---

# 9.21 Shared Packages

Topics:

```text
ui/
types/
auth/
```

Questions:

What should be shared?

---

# 9.22 Internal Platforms

Topics:

Developer experience

Questions:

How do organizations build leverage?

---

# 9.23 Frontend Infrastructure

Topics:

Build systems

Questions:

What supports frontend teams?

---

# 9.24 Configuration Management

Topics:

Environment management

Questions:

How do systems vary across environments?

---

# 9.25 Feature Flags

Topics:

Controlled rollouts

Questions:

Can features be deployed safely?

---

# 9.26 Experimentation Systems

Topics:

A/B Testing

Questions:

How do companies learn?

---

# 9.27 Analytics Architecture

Topics:

Event tracking

Questions:

How do products understand users?

---

# 9.28 Logging Architecture

Topics:

Diagnostics

Questions:

How do engineers investigate failures?

---

# 9.29 Error Tracking

Topics:

Production monitoring

Questions:

How do teams discover bugs?

---

# 9.30 Event-Driven Frontends

Topics:

Events

Questions:

Can systems communicate indirectly?

---

# 9.31 Application Services

Topics:

Business workflows

Questions:

Where should business logic live?

---

# 9.32 API Client Architecture

Topics:

Network layers

Questions:

How should frontend communicate with backend?

---

# 9.33 Repository Pattern

Topics:

Data access

Questions:

How can data sources be replaced?

---

# 9.34 Authentication Architecture

Topics:

Identity systems

Questions:

How should authentication be designed?

---

# 9.35 Authorization Architecture

Topics:

Permissions

Questions:

How should permissions scale?

---

# 9.36 Multi-Tenant Architecture

Topics:

Organizations

Questions:

How do SaaS products support multiple customers?

---

# 9.37 Internationalization

Topics:

Localization

Questions:

How do products support many languages?

---

# 9.38 White Label Systems

Topics:

Customization

Questions:

How can one platform serve many brands?

---

# 9.39 Frontend Security Architecture

Topics:

Security boundaries

Questions:

How do systems protect users?

---

# 9.40 Scalability Architecture

Topics:

Growth

Questions:

What breaks first as products grow?

---

# 9.41 Maintainability Engineering

Topics:

Technical debt

Questions:

How do systems survive ten years?

---

# 9.42 Team Topologies

Topics:

Organization design

Questions:

How should engineering teams be structured?

---

# 9.43 Conway's Law

Topics:

Communication structures

Questions:

Why do organizations shape software?

---

# 9.44 Engineering Leverage

Critical MountainKid topic.

Topics:

```text
Automation
Reuse
Platforms
```

Questions:

How can 10 engineers outperform 100?

---

# 9.45 Product Platforms

Topics:

Shared capabilities

Questions:

How can multiple products share foundations?

---

# 9.46 Frontend Governance

Topics:

Standards

Questions:

How do large organizations remain consistent?

---

# 9.47 Architecture Reviews

Topics:

Decision making

Questions:

How should architecture evolve?

---

# 9.48 Technical Strategy

Topics:

Long-term planning

Questions:

How should technology support business goals?

---

# 9.49 Systems Thinking

Most important topic.

Topics:

Feedback loops
Emergence
Complexity

Questions:

Why do systems behave unexpectedly?

---

# 9.50 Frontend Organization Design

Topics:

Putting everything together

Questions:

How can an organization continuously ship quality software?

---

# Completion Project

Build:

```text
MountainKid Frontend Platform
```

Architecture:

```text
apps/
├── phunsuk
├── sari
├── wangdu
├── sheldon

packages/
├── ui
├── auth
├── analytics
├── types
├── config
├── design-system
```

Requirements:

```text
Monorepo
Shared UI
Shared Authentication
Shared Analytics
Shared Types
Shared Design System
Shared Tooling
```

---

# Bonus Project

Build:

```text
MountainKid Design System
v1.0
```

Including:

```text
50+ Components
Documentation
Accessibility
Theming
Dark Mode
Storybook
Tokens
```

Used by:

```text
Phunsuk
Sari
Wangdu
Sheldon
```

simultaneously.

---

# Success Criteria

You can confidently answer:

1. What is software architecture?
2. What is frontend architecture?
3. What is Clean Architecture?
4. What is Hexagonal Architecture?
5. Why do design systems exist?
6. What are design tokens?
7. What is a monorepo?
8. Why do large companies use monorepos?
9. What should be shared between products?
10. What should remain independent?
11. What are feature flags?
12. What is frontend governance?
13. What is Conway's Law?
14. What is engineering leverage?
15. How can 10 engineers support millions of users?
16. How should business logic be organized?
17. How should authentication scale across products?
18. How should a design system evolve?
19. How should technology strategy support business strategy?
20. Why is architecture fundamentally the art of managing complexity?

If you can answer those questions from first principles, you stop thinking like a developer and start thinking like a CTO.

At that point, building one product becomes easy.

The challenge becomes building an ecosystem.
