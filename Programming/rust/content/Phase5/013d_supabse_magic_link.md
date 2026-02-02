### Supabase Magic Link: Complete Flow

#### Passwordless login: Email → Click link → Auto login → Smart dashboard.

| Step        | EmailLoginForm (Frontend) | Supabase (Backend Magic)               | Confirm Route (Server)                     |
| ----------- | ------------------------- | -------------------------------------- | ------------------------------------------ |
| 1. Send     | signInWithOtp({email})    | Generates token_hash=abc123Sends email | -                                          |
| 2. Email    | -                         | Click: /auth/confirm?token_hash=abc123 | -                                          |
| 3. Verify   | -                         | -                                      | verifyOtp({token_hash}) → SETS JWT COOKIES |
| 4. Login    | -                         | sb-access-token, sb-refresh-token      | User logged in!                            |
| 5. Redirect | -                         | -                                      | Email check → /admin or /delivery          |

```text
1. Frontend: "Send magic link to john@admin.com"
2. Supabase:
   - Creates random token_hash=abc123xyz (unguessable)
   - Stores in DB: {email, token_hash, expires: +1hr}
   - Emails: yourapp.com/auth/confirm?token_hash=abc123xyz
3. User clicks → Browser visits /auth/confirm
4. Server: supabase.verifyOtp() checks:
   ✅ Token exists? ✅ Not expired? ✅ Not used?
5. Supabase: "VALID!" → Creates JWT session
6. **AUTO sets cookies**: sb-access-token (1hr), sb-refresh-token (7d)
7. Server: Checks email → john@admin.com → redirect /admin
```
