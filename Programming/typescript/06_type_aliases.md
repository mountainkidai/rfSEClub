# Type Aliases (Super Concise, Koel Context)

**Explanation**: Type aliases create named types for any TypeScript type (objects, unions, primitives) using the `type` keyword. They’re reusable, flexible for Koel’s Aadhaar auth, and support complex types like unions and intersections.

- **Type Alias**: Names a type for reuse.
- **Union Types**: Allow multiple types (e.g., `string | number`).
- **Intersection Types**: Combine types (e.g., `TypeA & TypeB`).

```typescript
// Type Alias: Aadhaar user
type KoelUser = { aadhaar: string; name: string };

// Union: User or error response
type ApiResponse = KoelUser | { error: string };

// Intersection: User with metadata
type UserWithMeta = KoelUser & { verified: boolean };

// Usage
const user: KoelUser = { aadhaar: "1234-5678-9012", name: "Aariv" };
const response: ApiResponse = { error: "Invalid Aadhaar" }; // or KoelUser
const verifiedUser: UserWithMeta = {
  aadhaar: "1234-5678-9012",
  name: "Aariv",
  verified: true,
};
```
