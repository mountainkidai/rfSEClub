# SECURITY & TRUST: TLS and Certificates

## Why the Internet Isn't Total Chaos

Without this layer:

- Anyone could read your passwords
- Anyone could impersonate your website
- Payments would be impossible

Yet the internet still works.

**Here's why.**

---

## 1. The Core Problem (First Principles)

Your data travels through:

- Wi-Fi routers
- ISP routers
- Backbone routers
- Foreign countries
- Unknown machines

**Every one of them can:**

- See packets
- Copy packets
- Modify packets

**So the real problem is:**

**How do two computers talk privately over a public network?**

---

## 2. What Encryption Actually Is (Definition)

### Encryption - Definition

**Encryption** means:

Turning readable data into unreadable data using a secret.

**Example:**

```
hello → 9fA#k2!@
```

**Only someone with the key can turn it back.**

### 📌 Important

Encryption does **NOT** hide:

- Your IP
- The destination IP
- The fact that you're communicating

It **only** hides:

- The content

---

## 3. HTTPS — Secure HTTP

### HTTPS - Definition

**HTTPS** = HTTP + encryption.

**It means:**

"All data sent over this connection is encrypted."

**HTTPS is enforced by TLS.**

---

## 4. TLS — The Security Protocol

### TLS (Transport Layer Security) - Definition

**TLS** is a protocol that:

- Encrypts data
- Verifies identity
- Prevents tampering

**TLS sits:**

- On top of TCP
- Below HTTP

### 📌 Important

- **Routing** moves packets
- **TCP** orders packets
- **TLS** secures packets
- **HTTP** gives meaning to packets (we will see in the next article)

---

## 5. The Identity Problem (Critical)

Encryption alone is **not enough**.

Imagine this:

You encrypt data.

But you encrypt it to the **wrong person**.

That's **worse than no encryption**.

**So we need:**

**Proof of identity**

---

## 6. Certificates (What They Are)

### Certificate - Definition

A **certificate** is a digital ID card.

**It says:**

```
This public key belongs to mountainkid.ai
```

**It contains:**

- Domain name
- Public key
- Issuer
- Expiry date

### 📌 Important

- **Certificates are public**
- **The private key is secret**

---

## 7. Public Key & Private Key (Simple)

### Public Key - Definition

A **public key:**

- Is shared openly
- Used to encrypt data

### Private Key - Definition

A **private key:**

- Is kept secret
- Used to decrypt data

**Data encrypted with the public key:**
→ **only the private key can decrypt.**

**This is the foundation of TLS.**

---

## 8. PKI — Who Do You Trust?

### PKI (Public Key Infrastructure) - Definition

**PKI** is the global trust system that answers:

"Why should I believe this certificate?"

**PKI is built like a hierarchy.**

---

| Step | Browser Action     | mountainkid.ai Cert Chain                                | Result                |
| ---- | ------------------ | -------------------------------------------------------- | --------------------- |
| 1    | Visits site        | Receives cert: "I'm mountainkid.ai" (public key)         | Downloads cert        |
| 2    | Check signature    | "Signed by DigiCert Intermediate CA?"                    | Yes ✓                 |
| 3    | Check intermediate | "DigiCert Intermediate signed by DigiCert Root?"         | Yes ✓                 |
| 4    | Check root trust   | "Trust DigiCert Root?" (pre-installed in Chrome/Firefox) | Yes ✓ (hardcoded)     |
| 5    | TLS Handshake      | All links verified → green padlock                       | Success → login works |

---

| Check                  | Purpose                                                            | What If Skipped?                                         |
| ---------------------- | ------------------------------------------------------------------ | -------------------------------------------------------- |
| Site Cert Signature    | Confirms DigiCert Intermediate actually signed mountainkid.ai cert | Attacker forges your cert, claims "DigiCert signed me"   |
| Intermediate Signature | Confirms DigiCert Root signed the Intermediate                     | Compromised intermediate issues fake site certs          |
| Root Trust             | Confirms browser hardcoded-trusts Root CA                          | Malicious root (or stolen root key) poisons entire chain |

## 9. Root Certificate Authorities (Top of Trust)

### Root Certificate Authority (Root CA) - Definition

A **Root CA** is a highly trusted organization that:

- Can issue certificates
- Is trusted by browsers by default

**Examples:**

- DigiCert
- Let's Encrypt
- GlobalSign

**Browsers ship with:**

- A root certificate list

---

## 10. Certificate Chain (Trust Path)

Certificates are **not** issued directly by root CAs.

**Instead:**

```
Root CA
  ↓
Intermediate CA
  ↓
Website certificate
```

**This is called a certificate chain.**

**If any link is broken:**
→ **connection fails.**

---

## 11. TLS Handshake (Why HTTPS Is Slow Initially)

### TLS Handshake - Definition

The **TLS handshake** is a startup conversation where:

- Identity is verified
- Encryption keys are agreed upon

**Steps (simplified):**

1. Client says what crypto it supports
2. Server sends certificate
3. Client verifies certificate chain
4. Keys are exchanged
5. Secure channel is established

### 📌 Important

**This requires:**

- CPU work
- Network round trips

**This is why:**

- **HTTPS is slow on first load**

---

## 12. Session Resumption (Why Repeat Visits Are Fast)

### Session Resumption - Definition

**Session resumption** allows:

- Skipping full handshake
- Reusing previous session keys

**Result:**

- Faster connections
- Lower latency
- Less CPU

### 📌 Important

**This is critical for:**

- Auth APIs
- Mobile apps
- High-traffic systems

---

## 13. Why Certificates Expire

Certificates have an expiry date because:

- Keys can leak
- Algorithms weaken
- Ownership changes

**Short expiry:**

- Safer
- More operational work

**Long expiry:**

- Riskier
- Easier to manage

### 📌 Important

**Expiry forces rotation — a safety feature.**

---

## 14. Why HTTPS Failures Break Auth

Auth involves:

- Passwords
- Tokens
- Cookies

**If TLS fails:**

- Auth cannot proceed
- Browser blocks request

**User sees:**

```
"Your connection is not secure"
```

**Even if:**

- Backend is healthy
- Database is fine

---

| Scenario                                          | Browser Behavior                                   | Login Possible?                  |
| ------------------------------------------------- | -------------------------------------------------- | -------------------------------- |
| TLS Handshake Fail (expired cert, wrong hostname) | "Not Secure" warning + blocks fetch/XMLHttpRequest | No—form submit aborted sectigo​  |
| Mixed Content (HTTPS page loads HTTP login API)   | Console error, blocks script                       | No—API call fails                |
| HSTS Preload (site enforces HTTPS)                | Redirects HTTP → HTTPS; fails if TLS broken        | No                               |
| User "Proceeds Anyway" (old browsers/Firefox)     | Rare bypass → login works (risky)                  | Maybe (not recommended) YouTube​ |

## 15. Real Implications for Your Stack

### Your Auth

TLS handshake adds latency

Session resumption saves milliseconds

**Key insight:** Cert misconfig = login dead

### AirBNB

Payments require strong PKI trust

Mixed content breaks UX

**Key insight:** One insecure resource = whole page fails

---

---

## Problems

- Why encryption alone is not enough
- Why certificates exist
- Why browsers ship root certs
- Why HTTPS is slow on first load
- Why session resumption matters

**If these click → you now understand internet trust.**
