# Inline Object Type + Issue
**Explanation**: Inline object types define an object’s shape directly in a variable or function. They’re quick but not reusable, leading to repetition and errors in Koel’s Aadhaar system.

- **Example** (Koel Aadhaar auth):
```typescript
// Inline object type for Aadhaar user
let user: { aadhaar: string; name: string } = { aadhaar: "1234-5678-9012", name: "Jack" };

// Same type repeated for another user
let user2: { aadhaar: string; name: string } = { aadhaar: "5678-9012-3456", name: "Steve" };
```

- **Issue**: You need to add a `verified: boolean` property to both users. You update one but forget the other, causing inconsistency.
```typescript
let user: { aadhaar: string; name: string; verified: boolean } = { 
  aadhaar: "1234-5678-9012", 
  name: "Aariv", 
  verified: true 
};
// Forgot to update user2
let user2: { aadhaar: string; name: string } = { aadhaar: "5678-9012-3456", name: "Steve" }; // Missing verified
// Bug: user2 lacks verified, TypeScript doesn’t catch it
```

# Type Alias + Fix + New Issue
**Explanation**: A type alias (`type`) gives a reusable name to an object type, fixing the repetition issue. It’s flexible for Koel’s API data but lacks extensibility.

### Fix for Inline Issue:
```typescript
// Type alias: Reusable
type KoelUser = { aadhaar: string; name: string; verified: boolean };

let user: KoelUser = { aadhaar: "1234-5678-9012", name: "Aariv", verified: true };
let user2: KoelUser = { aadhaar: "5678-9012-3456", name: "Steve", verified: false };
```

**How It Fixes**: `KoelUser` is defined once, reused everywhere. Adding `verified` updates all users, ensuring consistency across Koel’s auth system.

**New Issue**: You want to extend `KoelUser` for admins with an `adminRole: string`. Type aliases can’t be extended easily, so you create a new type, leading to duplication.
```typescript
type KoelUser = { aadhaar: string; name: string; verified: boolean };
type AdminUser = { aadhaar: string; name: string; verified: boolean; adminRole: string };
// Duplication: Repeating aadhaar, name, verified
let admin: AdminUser = { 
  aadhaar: "1234-5678-9012", 
  name: "Aariv", 
  verified: true, 
  adminRole: "superadmin" 
};
```

**Problem**: Duplicating fields is error-prone and hard to maintain in Koel’s growing auth system.

# Interface + Fix
**Explanation**: Interfaces define reusable object shapes and support extending/merging, perfect for Koel’s scalable Aadhaar user data.

### Fix for Type Alias Issue:
```typescript
// Interface: Reusable and extensible
interface KoelUser {
  aadhaar: string;
  name: string;
  verified: boolean;
}

// Extend for admins
interface AdminUser extends KoelUser {
  adminRole: string;
}

let user: KoelUser = { aadhaar: "1234-5678-9012", name: "Aariv", verified: true };
let admin: AdminUser = { 
  aadhaar: "1234-5678-9012", 
  name: "Aariv", 
  verified: true, 
  adminRole: "superadmin" 
};
```

## Property Features (For Object Types, Type Aliases, Interfaces)
- **Required Properties**: All properties are required by default (must be provided).
- **Optional Properties (?)**: Properties that can be omitted.
- **Readonly Properties (readonly)**: Properties that can’t be modified after initialization.
- **Index Signatures ([key: type]: type)**: Allow dynamic property names with a specific type, useful for flexible Aadhaar metadata.

```typescript
// 1. Object Type (Inline)
let user: {
  aadhaar: string; // Required
  name?: string; // Optional
  readonly id: string; // Readonly
  [key: string]: string | boolean; // Index signature for extra fields
} = { aadhaar: "1234-5678-9012", id: "user1", extra: true };
user.name = "Aariv"; // OK
// user.id = "new"; // Error: readonly
user.metadata = "custom"; // OK: index signature

// 2. Type Alias
type KoelUser = {
  aadhaar: string; // Required
  name?: string; // Optional
  readonly id: string; // Readonly
  [key: string]: string | boolean; // Index signature
};
let user2: KoelUser = { aadhaar: "1234-5678-9012", id: "user1" };
user2.name = "Steve"; // OK
// user2.id = "new"; // Error: readonly
user2.metadata = true; // OK: index signature

// 3. Interface
interface KoelUserInterface {
  aadhaar: string; // Required
  name?: string; // Optional
  readonly id: string; // Readonly
  [key: string]: string | boolean; // Index signature
}
let user3: KoelUserInterface = { aadhaar: "1234-5678-9012", id: "user1" };
user3.name = "Bill"; // OK
// user3.id = "new"; // Error: readonly
user3.metadata = "custom"; // OK: index signature
```

- **Required**: Ensures critical fields like `aadhaar` are always present.
- **Optional**: Handles incomplete API data (e.g., missing `name`).
- **Readonly**: Protects Aadhaar IDs from changes.
- **Index Signature**: Supports dynamic user attributes.

## Spread vs Rest Parameters
**Explanation**: Spread and rest are JavaScript/TypeScript features for handling arrays/objects, critical for Koel’s Aadhaar auth (e.g., processing user lists). They’re distinct but related.

- **Rest Parameters**: Collects multiple arguments into a typed array in a function definition. Used to gather inputs.
- **Spread Operator**: Expands arrays/objects into individual elements in a function call or literal. Used to split data.

```typescript
// Rest: Collects args into array (function definition)
function logUsers(...aadhaars: string[]): void {
  console.log(aadhaars); // ["1234-5678-9012", "5678-9012-3456"]
}
logUsers("1234-5678-9012", "5678-9012-3456");

// Spread: Expands array into args (function call)
const aadhaarList = ["1234-5678-9012", "5678-9012-3456"];
logUsers(...aadhaarList); // Same output: ["1234-5678-9012", "5678-9012-3456"]

// Spread for Objects: Expands object properties
const baseUser = { aadhaar: "1234-5678-9012" };
const fullUser = { ...baseUser, name: "Aariv" }; // { aadhaar: "1234-5678-9012", name: "Aariv" }
```

### Key Difference:
- **Rest**: Gathers inputs into an array (e.g., collecting Aadhaar IDs in a function).
- **Spread**: Splits an array/object into parts (e.g., passing Aadhaar list or merging user data).
- **They’re opposites**: rest combines, spread separates.