AUTHENTICATION (OLD → MODERN)

---

## 10. The Core Auth Problem (First Principles)

Server must answer:

- **"Who are you?"**
- **"Can I trust you?"**

---

## 11. Old-School Login (Sessions + Cookies)

### Step-by-Step (Classic Way)

**User sends:**

```

POST /login
(username + password)

```

**Server verifies credentials**

**Server creates:**

### Session - Definition

A **session** is server-side stored login state.

**Server sends:**

### Cookie - Definition

A **cookie** is a small piece of data stored in browser.

**Cookie contains:**

```text
session_id = xyz123
```

**Browser sends cookie on every request**

**Server:**

- Looks up session_id
- Identifies user

### 📌 Important

**State lives on server**

---

## 12. Problems with Sessions

- Server memory grows
- Hard to scale across regions
- Load balancers need sticky sessions

**This breaks at scale.**
| Problem | What Happens | Example |
| ------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| Server Memory | Each login = 1KB+ RAM per user | 10k Shimla users on mountainkid.ai = 10GB RAM on 1 Vercel instance |
| Multi-Server | Server A has your session, Server B doesn't | User1 on Server A logs in → Server B says "Who are you?" → logout |
| Load Balancer | Must send you always to same server ("sticky") | Round-robin fails → 50% users get wrong server → session lost |

---

1. Your Next.js app gets viral (10k users)
2. Vercel spins up Server B, C, D (auto-scale)
3. User1 (Server A) → fine
4. User1 refreshes → Load balancer sends to Server B → "Not logged in"
5. User1 rage quits

## 13. Tokens (Stateless Auth)

### Token - Definition

A **token** is a signed proof of identity.

**Server:**

- Issues token
- Does NOT store session

**Client:**

- Stores token
- Sends it with each request

**Example:**

```

Authorization: Bearer token123

```

---

## 14. JWT (JSON Web Token)

### JWT - Definition

A **JWT** is:

- A structured token
- Digitally signed
- Self-contained

**It includes:**

- User ID
- Expiry
- Permissions

**Server:**

- Verifies signature
- No DB lookup needed

### 📌 Important

**This enables massive scale.**

1. you@gmail.com + password → Gmail server
2. Server creates JWT: {user: "you@gmail.com", exp: "1hr later", scope: "read/write"}
3. Signs it → eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (300 chars)
4. Browser stores → every click sends "Bearer [token]"
5. Gmail servers (Delhi/NY) ALL verify signature → "Valid user" → no DB lookup

---

### OLD WAY

1. User1 from Shimla logs in → Server#1 RAM: "user1@email.com = logged in"
2. User1 clicks "View Analytics" → Load balancer sends to Server#2
3. Server#2: "No record of user1" → Kicks out → "LOGIN AGAIN!" 😤
4. Server#1 still holds user1 data in RAM (wasting memory)
5. 5,000 Shimla users = Server#1 RAM **FULL** → crashes

### NEW WAY

1. User1 logs in → Gets JWT cookie: "user1@email.com, admin=true, expires=7days"
2. User1 clicks "View Analytics" → ANY Server#2 sees JWT → "Valid! Show dashboard"
3. Server#2 needs **ZERO memory** - just math check (signature valid?)
4. 5,000 users = **0 RAM used anywhere**
5. User1 uses app from Delhi phone later → SAME JWT works

## 15. Cookies vs Tokens (Truth Table)

- Cookies and tokens are two primary methods used in web applications to manage user authentication and sessions after a user logs in. Cookies have been around since the early days of the web and work closely with the browser's built-in mechanisms. Tokens, particularly modern ones like JWTs (JSON Web Tokens), represent a more recent, stateless approach that's popular for APIs and scalable systems. The truth table simplifies their key differences, but let's break it down fully with explanations for each aspect.

| Aspect      | Cookies     | Tokens      |
| ----------- | ----------- | ----------- |
| State       | Server-side | Client-side |
| Scaling     | Hard        | Easy        |
| Security    | Automatic   | Manual      |
| Mobile apps | Bad         | Great       |

| Aspect      | Cookies                                                                                                                                                                                                                                                                                                                                                                                        | Tokens (e.g., JWTs)                                                                                                                                                                                                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| State       | Server-side: When using cookies for authentication, the cookie typically contains a session ID (a unique string). The server stores the actual user data (like user ID, roles, expiration) associated with that ID in a database or memory store (e.g., Redis). Every request requires the server to look up this data, making the system "stateful"—the server must remember active sessions. | Client-side: Tokens are self-contained. They encode all necessary user info (claims like user ID, roles, expiration time) directly inside the token string itself, signed with a secret key. The server just verifies the signature and decodes it—no database lookup needed. This makes it "stateless." |
| Scaling     | Hard: As your user base grows to millions, the server (or session store) must handle millions of active sessions. This creates bottlenecks in databases, requires sticky sessions in load balancers, or expensive shared storage like Redis clusters. Horizontal scaling (adding more servers) becomes complex because sessions must be synchronized.                                          | Easy: No session storage on the server. Any server in a cluster can independently verify a token. This shines in microservices, cloud-native apps, or global CDNs where requests hit any backend instance. Perfect for serverless like AWS Lambda.                                                       |
| Security    | Automatic: Browsers enforce powerful flags out-of-the-box: HttpOnly (blocks JavaScript access, preventing XSS theft), Secure (HTTPS only), `SameSite=Strict                                                                                                                                                                                                                                    | Lax` (blocks CSRF attacks). No extra coding needed for basics. Drawback: CSRF if not using SameSite properly.                                                                                                                                                                                            |
| Mobile Apps | Bad: Native apps (iOS/Android) don't have automatic cookie handling like browsers. You'd manually manage cookie jars, which is clunky and non-standard. Cookies are browser-centric.                                                                                                                                                                                                           | Great: Apps easily store tokens and attach them to Authorization: Bearer <token> headers in every API call. Universal across platforms, no browser dependency. Ideal for React Native, Flutter, etc.                                                                                                     |

**Modern systems often:**

- Use cookies for web
- Use tokens for APIs

---

## Key Nuance: Cookies ≠ Tokens. Cookies are a transport/storage mechanism. Tokens are the data format. Best web auth today: JWT tokens stored in secure cookies.

## 16. Modern Login Flow (OAuth-Style)

**User logs in**

**Server issues:**

- Access token (short-lived)
- Refresh token (long-lived)

**Access token expires fast**

**Refresh token gets new one**

**This balances:**

- Security
- UX
- Scale

---

- User logs in: Submits username/password (or social login) to /login endpoint.

- Server issues tokens:
  - Access token (short-lived, e.g., 15 minutes - 1 hour): A JWT with user claims. Used for protected API calls (e.g., fetch user profile).

  - Refresh token (long-lived, e.g., 7-30 days): Opaque string tied to the user/device. Stored separately for security.

- Normal usage: Browser/app attaches access token (via cookie/header) to requests. Server verifies instantly.

- Access token expires fast: By design—for security. If stolen, attacker has limited time.

- Refresh token gets new one: App silently sends refresh token to /refresh endpoint. Server validates it, issues new access token (sometimes new refresh too), without asking for password.

```text
Login → Access (15min) + Refresh (7 days)

API Calls ──[Access Token]──→ Server (OK)

Access Expires
     ↓
Refresh Request ──[Refresh Token]──→ New Access Token
     ↓
Back to API Calls
```

## 17. Why Auth Feels Slow Sometimes

Auth cost includes:

- DNS
- TCP
- TLS handshake
- Token verification
- DB lookup

**Most latency is before your code runs.**

---

## 18. Mental Model (Lock This)

- **HTTP** = conversation rules
- **Headers** = context
- **Cookies** = browser memory
- **Tokens** = portable identity
- **JWT** = self-verifying passport

---

## Problems

Answer instantly:

- Why HTTP is stateless
- Why cookies exist
- Why tokens scale better
- Why HTTP/2 feels faster
- Why HTTP/3 uses UDP

**If this clicks → you now understand real-world web systems.**

---
