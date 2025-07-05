# Type Assertion
**Explanation**: Type assertions in TypeScript let you override the inferred type of a value when you know its type better than TypeScript, useful for handling dynamic Aadhaar API data in Koel. They don’t change the value, only its type for the compiler.
- **As Syntax**: `value as Type` (preferred).
- **Angle Bracket Syntax**: `<Type>value` (avoid in JSX).
- **Non-null Assertion**: `value!` (asserts value isn’t `null` or `undefined`).

```typescript
// As Syntax: Assert API response is string
let data: any = "1234-5678-9012"; // From API
let aadhaar: string = data as string;

// Angle Bracket: Same but less common
let token: string = <string>data;

// Non-null Assertion: Assert property exists
interface User { aadhaar?: string }
let user: User = { aadhaar: "1234-5678-9012" };
let id: string = user.aadhaar!; // Assert aadhaar isn’t undefined
```