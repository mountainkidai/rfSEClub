```text
🏠 HOME (Your App)
├── 🔑 COOKIES (Auto-sent everywhere)
│   ├── ACCESS TOKEN (15min JWT) ← Short life, fire-and-forget
│   └── REFRESH TOKEN (7d)       ← Long life, HttpOnly + hashed in DB
│
├── 🛡️ XSS BLOCK = HttpOnly       ← JS can't read: document.cookie = blind
├── 🚫 CSRF BLOCK = SameSite      ← Cross-site requests blocked
│
├── 📧 MAGIC LINKS (Supabase)
│   ├── Click → verifyOtp()      ← AUTO sets JWT cookies
│   ├── Random + Expires + 1-Use ← Unbreakable combo
│   └── Role redirect → /admin ✨
│
└── 🌐 OAUTH (Google)
    ├── Redirect → code=abc123   ← Safe ticket (not token!)
    ├── Server + client_secret   ← Private handshake
    └── JWT cookies (your own)   ← Google exits after verification
```

```text
XSS: "RUN MY EVIL JS"           → HttpOnly = "Can't touch cookies!"
CSRF: "USE YOUR COOKIES"        → SameSite = "Wrong site, GTFO!"

Hacker sees: yourapp.com/code=abc → Useless without YOUR secret
```

```text
"HttpOnly blocks XSS, SameSite blocks CSRF"
```
