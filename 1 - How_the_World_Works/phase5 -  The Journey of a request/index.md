# PHASE 5 — THE JOURNEY OF A REQUEST

## How Modern Applications Actually Work

---

# Goal

At the end of this phase, you should understand:

```text
User
↓
Application
↓
Operating System
↓
Network
↓
Internet
↓
Server
↓
Database
↓
Response
```

And be able to answer:

> What happens when a user opens Phunsuk and searches for "Best places to visit in Shimla"?

This phase combines everything learned in Phases 0–4.

---

# PART 1 — THE BIG PICTURE

---

## 5.1 What Is A Modern Application?

Examples:

- Phunsuk
- Instagram
- WhatsApp
- Google

---

## 5.2 The Client-Server Model

```text
Client
↓
Network
↓
Server
```

---

## 5.3 Why Client-Server Exists

- Centralized data
- Shared resources
- Scalability

---

## 5.4 Components of a Modern Application

```text
Frontend
↓
Backend
↓
Database
↓
Infrastructure
```

---

## 5.5 Request-Response Architecture

- User requests
- Server responses

---

# PART 2 — THE USER INITIATES AN ACTION

---

## 5.6 User Input

Examples:

- Clicking a button
- Typing text
- Uploading a photo

---

## 5.7 Input Devices

```text
Keyboard
Mouse
Touch Screen
Microphone
```

---

## 5.8 Operating System Event Handling

```text
Hardware
↓
Interrupt
↓
Operating System
↓
Application
```

---

## 5.9 Application Receives Input

- Event processing
- User interaction

---

# PART 3 — THE CLIENT APPLICATION

---

## 5.10 What Is A Client?

- Browser
- Mobile app
- Desktop application

---

## 5.11 Application Logic

- Input validation
- Business rules

---

## 5.12 Creating A Request

Example:

```http
GET /search?q=shimla
```

---

## 5.13 Serialization

- Converting data into transferable formats

---

## 5.14 JSON

- Structure
- Data exchange

---

## 5.15 Preparing Network Data

```text
Application Data
↓
JSON
↓
HTTP Request
```

---

# PART 4 — THE NETWORK JOURNEY

---

## 5.16 DNS Lookup

```text
phunsuk.ai
↓
IP Address
```

---

## 5.17 TCP Connection

- Reliable communication

---

## 5.18 TLS Handshake

- Secure communication

---

## 5.19 HTTP Request Creation

- Headers
- Body
- Metadata

---

## 5.20 Packet Creation

```text
HTTP
↓
TCP
↓
IP
↓
Ethernet
```

---

## 5.21 Local Network Transmission

- WiFi
- Routers

---

## 5.22 ISP Infrastructure

- Internet providers

---

## 5.23 Internet Routing

- Packet forwarding
- Autonomous systems

---

## 5.24 Arrival at Data Center

- Destination network

---

# PART 5 — SERVER PROCESSING

---

## 5.25 What Is A Server?

- Always-running software
- Service providers

---

## 5.26 Receiving The Request

```text
NIC
↓
Kernel
↓
Socket
↓
Application
```

---

## 5.27 Socket Fundamentals

- Network endpoints
- Communication channels

---

## 5.28 Server Frameworks

Examples:

- Axum
- Actix
- Express

---

## 5.29 Routing

Example:

```text
/search
↓
Search Handler
```

---

## 5.30 Request Parsing

- Extracting data
- Validation

---

## 5.31 Business Logic

- Processing rules
- Decision making

---

# PART 6 — DATA STORAGE

---

## 5.32 Why Databases Exist

Problems:

```text
Memory
↓
Lost After Shutdown
```

---

## 5.33 Persistent Storage

- Durable data

---

## 5.34 Database Requests

```text
Application
↓
Database Query
```

---

## 5.35 Query Execution

- Searching records
- Returning results

---

## 5.36 Data Retrieval

- Reading stored information

---

## 5.37 Response Construction

```text
Database Result
↓
Application Response
```

---

# PART 7 — RETURNING THE RESPONSE

---

## 5.38 Serialization

- Objects to JSON

---

## 5.39 HTTP Response

```http
200 OK
```

---

## 5.40 TCP Transmission

- Reliable delivery

---

## 5.41 Internet Routing

- Return path

---

## 5.42 Client Receives Response

- Network stack

---

## 5.43 Response Processing

- Parsing data

---

## 5.44 Rendering Results

- User interface updates

---

# PART 8 — PERFORMANCE

---

## 5.45 Why Performance Matters

- User experience

---

## 5.46 Latency

- Time delays

---

## 5.47 Throughput

- Requests per second

---

## 5.48 Bottlenecks

Examples:

- CPU
- Memory
- Disk
- Network

---

## 5.49 Caching

- Avoiding repeated work

---

## 5.50 Content Delivery Networks

- Faster content delivery

---

# PART 9 — FAILURE SCENARIOS

---

## 5.51 DNS Failure

---

## 5.52 Network Failure

---

## 5.53 Server Failure

---

## 5.54 Database Failure

---

## 5.55 Timeout Errors

---

## 5.56 Partial Failures

---

## 5.57 Why Distributed Systems Are Hard

Introduction to future subjects.

---

# PART 10 — COMPLETE END-TO-END JOURNEY

---

## 5.58 User Opens Phunsuk

```text
Touch Screen
↓
Operating System
↓
Phunsuk App
```

---

## 5.59 Search Request Created

```text
Search Query
↓
HTTP Request
```

---

## 5.60 Request Travels Across The Internet

```text
DNS
↓
TCP
↓
TLS
↓
Router
↓
ISP
↓
Internet
↓
Data Center
```

---

## 5.61 Server Processes Request

```text
Kernel
↓
Socket
↓
Axum
↓
Business Logic
```

---

## 5.62 Database Query

```text
Backend
↓
Database
↓
Results
```

---

## 5.63 Response Generated

```text
JSON
↓
HTTP Response
```

---

## 5.64 Response Returns To User

```text
Server
↓
Internet
↓
Phone
```

---

## 5.65 User Sees Results

```text
Pixels
↓
Display
↓
Human
```

---

# PHASE PROJECT

Build a Full Request Visualizer

Features:

- Browser simulation
- DNS visualization
- TCP handshake visualization
- Packet routing visualization
- Server request handling
- Database query simulation
- Response rendering

---

# END GOAL

You should be able to explain:

```text
User
↓
Keyboard / Touchscreen
↓
Operating System
↓
Application
↓
HTTP
↓
TCP
↓
IP
↓
Router
↓
Internet
↓
Server
↓
Database
↓
Response
↓
Display
↓
User
```

from first principles.

This is the complete journey of information through a modern software system.
