## Problem 2 : The Real OAuth Problem (First Principles)

**Question:**

"How can an app know who you are without ever seeing your password?"

**Answer:**

**Let someone you already trust vouch for you**

**That's OAuth.**

---

## 11. What OAuth Actually Is (Definition)

### OAuth - Definition

**OAuth** is a protocol that lets:

- A trusted identity provider (Google)
- Confirm your identity
- Without sharing your password

**OAuth is delegated authentication.**

---

## 12. Roles in OAuth (Define Clearly)

### Resource Owner - USER

### Client

Your app (Phunsuk, Sari, Koel)

### Authorization Server

Google / GitHub / Apple

### Resource Server

Google APIs (profile, email)

---

## 13. OAuth Flow (Simple, Correct)

```
1. User clicks "Login with Google"
   ↓
2. App redirects to Google
   ↓
3. User logs into Google
   ↓
4. Google asks:
   "Allow this app to know who you are?"
   ↓
5. Google redirects back with authorization code
   ↓
6. App exchanges code for access token
   ↓
7. App gets user info
   ↓
8. App creates its own session / JWT
```

### 📌 Your app never sees the password. Ever.

---

## 14. Why OAuth Uses Redirects (Important)

**Redirects:**

- Happen at browser level
- Cannot be forged easily
- Prevent token leakage

**This is intentional design.**

### Redirects = Google talks to YOUR browser, not your server directly.

#### Wrong Way (Dangerous ❌)

```text
User clicks "Login Google"
↓
YOUR SERVER calls Google directly
↓
Google sends SUPER VALUABLE token → YOUR SERVER over internet
↓
HACKER sniffs network traffic → steals token → hacks ALL users 😱
```

#### Right Way (OAuth Redirects ✅)

1. User clicks "Login Google"
2. Browser visits google.com/login
3. User types password (to Google directly)
4. Google redirects browser:
   yourapp.com/callback?code=abc123
5. Browser shows: yourapp.com/callback?code=abc123
6. YOUR SERVER calls Google privately:

   POST https://oauth2.googleapis.com/token
   code=abc123
   client_id=yourapp_public  
   client_secret=🗝️ your_super_secret_key
   grant_type=authorization_code

7. Google checks: "Right app? Right secret? Code valid?"
8. Google replies: "John Doe, john@gmail.com"
9. Your server: "Cool!" → sets cookies

---

## 15. OAuth ≠ Login System

**Important truth:**

OAuth does **NOT** log the user into your app.

**It only says:**

"Google says this user is legit."

**Your app must still:**

- Create user
- Issue cookies / tokens
- Handle auth internally

---

## 16. Why OAuth Fixes Many Security Problems

**Benefits:**

- No password storage
- No password reuse risk
- No phishing on your app
- Strong identity proof

**Downside:**

- Dependency on third party
- UX breaks if provider is down

---
