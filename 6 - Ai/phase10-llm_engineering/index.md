Phase 10 is where you stop studying AI models and start building AI systems.

Up to now you've learned:

```text
Intelligence
↓
Information
↓
Statistics
↓
Machine Learning
↓
Optimization
↓
Neural Networks
↓
Deep Learning
↓
Computer Vision
↓
NLP
↓
Transformers
```

At this point you understand how modern models work.

But knowing how a Transformer works does **not** mean you can build:

```text
GPT
Claude
Gemini
DeepSeek
Perplexity
Cursor
Windsurf
OpenAI
Anthropic
```

Those are not models.

They are systems.

A useful mental model:

```text
Transformer
=
CPU

LLM
=
Computer
```

The transformer is only one component.

The rest is engineering.

This phase teaches how to build production-grade Large Language Model systems from first principles.

---

# Phase 10 — LLM Engineering

## Introduction

A Large Language Model is not simply:

```text
Tokens
↓
Transformer
↓
Tokens
```

Modern LLM systems are:

```text
Data
↓
Training
↓
Model
↓
Inference
↓
Memory
↓
Retrieval
↓
Tools
↓
Agents
↓
Products
```

The purpose of this phase is understanding how modern intelligence systems are engineered.

---

# 10.1 What Is A Large Language Model?

## Why This Matters

Most people cannot clearly define an LLM.

## Topics

### 10.1.1 Language Models

### 10.1.2 Foundation Models

### 10.1.3 Pretrained Models

### 10.1.4 General Purpose Models

### 10.1.5 Emergent Capabilities

### 10.1.6 Intelligence Systems

### 10.1.7 Modern AI Architecture

---

# 10.2 Token Prediction At Scale

## Why This Matters

Everything begins with next-token prediction.

## Topics

### 10.2.1 Language Modeling Review

### 10.2.2 Probability Distributions

### 10.2.3 Context Windows

### 10.2.4 Prediction Loops

### 10.2.5 Generation

### 10.2.6 Sampling

### 10.2.7 Intelligence Emergence

---

# 10.3 Training Datasets

## Why This Matters

Models become what they consume.

## Topics

### 10.3.1 Internet Data

### 10.3.2 Books

### 10.3.3 Research Papers

### 10.3.4 Code Repositories

### 10.3.5 Structured Knowledge

### 10.3.6 Dataset Construction

### 10.3.7 Data Quality Engineering

---

# 10.4 Data Processing Pipelines

## Why This Matters

Raw internet data is unusable.

## Topics

### 10.4.1 Data Collection

### 10.4.2 Crawling

### 10.4.3 Cleaning

### 10.4.4 Deduplication

### 10.4.5 Filtering

### 10.4.6 Quality Scoring

### 10.4.7 Dataset Construction

---

# 10.5 Tokenizers

## Why This Matters

Every LLM begins with tokenization.

## Topics

### 10.5.1 Vocabulary Design

### 10.5.2 BPE

### 10.5.3 SentencePiece

### 10.5.4 Byte-Level Models

### 10.5.5 Token Efficiency

### 10.5.6 Compression

### 10.5.7 Language Representation

---

# 10.6 Pretraining

## Why This Matters

This creates the base model.

## Topics

### 10.6.1 Self-Supervised Learning

### 10.6.2 Next Token Prediction

### 10.6.3 Massive Scale Training

### 10.6.4 Foundation Model Creation

### 10.6.5 Knowledge Acquisition

### 10.6.6 Scaling Laws

### 10.6.7 Emergent Capabilities

---

# 10.7 Distributed Training

## Why This Matters

Modern models exceed single-machine limits.

## Topics

### 10.7.1 GPU Clusters

### 10.7.2 Data Parallelism

### 10.7.3 Tensor Parallelism

### 10.7.4 Pipeline Parallelism

### 10.7.5 Communication Systems

### 10.7.6 Training Infrastructure

### 10.7.7 Large Scale AI Systems

---

# 10.8 Fine-Tuning

## Why This Matters

Pretrained models are general.

Products require specialization.

## Topics

### 10.8.1 Transfer Learning

### 10.8.2 Domain Adaptation

### 10.8.3 Task Specialization

### 10.8.4 Instruction Tuning

### 10.8.5 Model Alignment

### 10.8.6 Knowledge Injection

### 10.8.7 Production Adaptation

---

# 10.9 Alignment

## Why This Matters

Powerful models must be controllable.

## Topics

### 10.9.1 Human Preferences

### 10.9.2 Helpful Behavior

### 10.9.3 Harmlessness

### 10.9.4 Instruction Following

### 10.9.5 Reward Models

### 10.9.6 Alignment Strategies

### 10.9.7 Safety Engineering

---

# 10.10 RLHF

## Why This Matters

Modern assistants rely heavily on RLHF.

## Topics

### 10.10.1 Human Feedback

### 10.10.2 Reward Models

### 10.10.3 Preference Learning

### 10.10.4 Reinforcement Learning

### 10.10.5 Behavioral Shaping

### 10.10.6 Instruction Following

### 10.10.7 Assistant Training

---

# 10.11 Inference Systems

## Why This Matters

Training happens once.

Inference happens billions of times.

## Topics

### 10.11.1 Serving Models

### 10.11.2 Request Processing

### 10.11.3 Context Construction

### 10.11.4 Response Generation

### 10.11.5 Latency Optimization

### 10.11.6 Throughput Optimization

### 10.11.7 Production AI Serving

---

# 10.12 KV Caches

## Why This Matters

Without KV caching modern LLMs would be unusable.

## Topics

### 10.12.1 Attention Review

### 10.12.2 Context Reuse

### 10.12.3 Cached Computation

### 10.12.4 Memory Optimization

### 10.12.5 Long Context Systems

### 10.12.6 Inference Acceleration

### 10.12.7 Practical Serving

---

# 10.13 Quantization

## Why This Matters

Model size determines deployment feasibility.

## Topics

### 10.13.1 Precision

### 10.13.2 Compression

### 10.13.3 Memory Reduction

### 10.13.4 INT8

### 10.13.5 INT4

### 10.13.6 GGUF

### 10.13.7 Edge Deployment

---

# 10.14 Retrieval Augmented Generation

## Why This Matters

Models have limited memory.

Retrieval extends intelligence.

## Topics

### 10.14.1 Knowledge Retrieval

### 10.14.2 Embeddings

### 10.14.3 Vector Databases

### 10.14.4 Search Systems

### 10.14.5 Context Injection

### 10.14.6 Grounded Responses

### 10.14.7 Knowledge Systems

---

# 10.15 Tool Use

## Why This Matters

Intelligence requires actions.

## Topics

### 10.15.1 External Functions

### 10.15.2 APIs

### 10.15.3 Calculators

### 10.15.4 Search Engines

### 10.15.5 Databases

### 10.15.6 Execution Systems

### 10.15.7 Tool-Augmented Intelligence

---

# 10.16 Memory Systems

## Why This Matters

Persistent memory changes everything.

## Topics

### 10.16.1 Working Memory

### 10.16.2 Episodic Memory

### 10.16.3 Semantic Memory

### 10.16.4 Long-Term Memory

### 10.16.5 Memory Retrieval

### 10.16.6 Memory Updating

### 10.16.7 Personalized Intelligence

---

# 10.17 Evaluation Systems

## Why This Matters

You cannot improve what you cannot measure.

## Topics

### 10.17.1 Benchmarks

### 10.17.2 Human Evaluation

### 10.17.3 Automated Evaluation

### 10.17.4 Hallucination Detection

### 10.17.5 Reliability Testing

### 10.17.6 Agent Evaluation

### 10.17.7 Intelligence Measurement

---

# 10.18 Open Source LLM Ecosystem

## Why This Matters

Understanding the ecosystem accelerates engineering.

## Topics

### OpenAI

### Anthropic

### Meta

### Mistral AI

### DeepSeek

### Model Families

### Open Weight Ecosystems

---

# 10.19 Reading The Foundations

## Why This Matters

These works created the modern LLM era.

## Topics

### Alec Radford

### Ilya Sutskever

### John Schulman

### Dario Amodei

### Andrej Karpathy

### GPT Papers

### InstructGPT

### RLHF Papers

### Scaling Law Papers

---

# 10.20 Final Project — Build Your Own LLM Platform

Build from scratch:

### Data Layer

- Crawlers
- Cleaning Pipelines
- Tokenizers

### Model Layer

- Transformer
- Training Pipeline
- Fine-Tuning

### Retrieval Layer

- Embeddings
- Vector Search
- Knowledge Retrieval

### Memory Layer

- Persistent Memory
- User Profiles
- Long-Term Context

### Agent Layer

- Tool Use
- Function Calling
- Workflow Execution

### Serving Layer

- Inference Engine
- Quantization
- Scaling Infrastructure

Architecture

```text
Knowledge
↓
Training
↓
Foundation Model
↓
Retrieval
↓
Memory
↓
Tools
↓
Agent
↓
Product
```

---

# Outcome

By the end of Phase 10 you should understand:

```text
Data
↓
Training
↓
Foundation Model
↓
Inference
↓
Retrieval
↓
Memory
↓
Tools
↓
Agents
↓
Products
```

and be able to answer:

```text
How are GPT-class models trained?

Why does pretraining work?

Why does RLHF work?

Why does RAG work?

Why do agents need tools?

Why are memory systems important?

How do you build a complete LLM platform?
```

Most importantly, you should realize:

```text
Transformer
≠
GPT
```

A transformer is an architecture.

A GPT-class assistant is an entire ecosystem of:

```text
Models
+
Data
+
Memory
+
Retrieval
+
Tools
+
Infrastructure
+
Evaluation
```

Phase 10 is where you become capable of engineering those systems rather than merely using them.
