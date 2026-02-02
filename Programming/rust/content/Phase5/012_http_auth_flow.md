cookies are automatically sent as part of the HTTP **request headers** by the browser—specifically in the `Cookie` header (e.g., `Cookie: access_token=eyJ...`).

## How It Works: Cookie as Request Header

When the server sets a cookie via `Set-Cookie` response header:

```
Set-Cookie: access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...; HttpOnly; Secure; SameSite=Strict
```

Future requests to the same domain auto-include it:

```
GET /api/profile HTTP/1.1
Cookie: access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  // <-- Here!
```

Your server middleware reads `req.headers.cookie` or `req.cookies.access_token` (with cookie-parser lib).

## Simple Signup/Login Example: Node.js + JWT + Refresh

Here's a complete, runnable example using Express.js, bcrypt (password hash), jsonwebtoken (JWT), and in-memory storage for refresh tokens.

### 1. Setup (Install: `npm i express cookie-parser bcrypt jsonwebtoken`)

```javascript
const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cookieParser());

const SECRET = "your-super-secret-key"; // Use env var!
const users = {}; // Fake DB: {email: {password: hashed, id: 1}}
const refreshTokens = []; // Store refresh tokens (in real: DB + hashed)

// Hash password helper
async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}
```

### 2. Signup Endpoint (Hash Password, Store User)

```javascript
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  if (users[email]) return res.status(400).json({ error: "User exists" });

  const hashed = await hashPassword(password);
  const userId = Date.now(); // Simple ID
  users[email] = { id: userId, password: hashed };

  // Login immediately: Issue tokens
  const accessToken = jwt.sign({ id: userId, email }, SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ id: userId }, SECRET, { expiresIn: "7d" });
  refreshTokens.push(refreshToken); // Store (real: hash + DB)

  // Set as HttpOnly cookies
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.json({ message: "Signed up & logged in", user: { id: userId, email } });
});
```

### 3. Protected Route (Decode/Verify Access Token)

```javascript
function verifyAccess(req, res, next) {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json({ error: "No access token" });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid/expired token" });
    req.user = decoded; // { id: 123, email: "..." }
    next();
  });
}

app.get("/profile", verifyAccess, (req, res) => {
  res.json({ message: "Protected data", user: req.user });
});
```

**Decode example** (jwt.io or code):

```
Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MDY5MjAwMDAsImV4cCI6MTcwNjkyMzYwMH0.signature
Decoded payload: { id: 123, email: "user@example.com", iat: 1706920000, exp: 1706923600 }
```

### 4. Refresh Endpoint (New Access from Refresh Cookie)

```javascript
app.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json({ error: "Invalid refresh token" });
  }

  jwt.verify(refreshToken, SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Refresh expired" });

    // Issue new access (rotate refresh in prod)
    const newAccess = jwt.sign({ id: decoded.id }, SECRET, {
      expiresIn: "15m",
    });
    res.cookie("accessToken", newAccess, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.json({ message: "New access token issued" });
  });
});
```

### 5. Logout (Clear Cookies + Revoke Refresh)

```javascript
app.post("/logout", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const index = refreshTokens.indexOf(refreshToken);
  if (index > -1) refreshTokens.splice(index, 1); // Revoke

  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.json({ message: "Logged out" });
});
```

### Full Test Flow (Run `app.listen(3000)`)

1. **Signup**: `POST /signup` → Cookies set, user created.
2. **Profile**: `GET /profile` → Succeeds, sees decoded user.
3. **Wait 15m or expire**: `/profile` fails (401).
4. **Refresh**: `POST /refresh` → New access cookie.
5. **Logout**: Clears everything.

**Encode/Decode Deep Dive**:

- **Sign (Encode)**: `jwt.sign(payload, secret, options)` → Base64(header).Base64(payload).Base64(signature).
- **Verify (Decode)**: `jwt.verify(token, secret)` → Gets payload if valid.
- Refresh stored server-side (hashed in prod DB) for revocation.
