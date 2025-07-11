# Error Handling in TypeScript

Error handling is the process of responding to and managing runtime exceptions. TypeScript, being a superset of JavaScript, uses the same mechanisms (try-catch, throw, etc.), but adds type safety and structure to improve reliability.

## try-catch Statement

🔹 Description:
Wraps potentially unsafe code in a block (try) and handles any errors that occur in the catch block.

Example:

```typescript
try {
  const value = JSON.parse("not valid JSON"); // This will throw
} catch (error) {
  console.error("Parsing failed!", error);
}
```

Without the try-catch, the program would crash.

## Typing the error Object

🔹 Description:
In TypeScript, catch (error) is typed as unknown by default, so you need to narrow the type to access properties like message.

 Example 1: Type assertion

```typescript
try {
  throw new Error("Something went wrong");
} catch (error) {
  const err = error as Error;
  console.log(err.message); // Accessing the error message
}
```

Example 2: Type guard (instanceof)

```typescript
try {
  throw new SyntaxError("Invalid syntax");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Caught a syntax error:", error.message);
  } else {
    console.log("Some other error");
  }
}
```

## Throwing Custom Errors

🔹 Description:
You can define your own error types by extending the Error class. This improves readability and control in large applications.

 Example:

```typescript
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function saveUser(data: any) {
  if (!data.email) {
    throw new ValidationError("Email is required");
  }
  // save logic
}

try {
  saveUser({}); // No email
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation failed:", error.message);
  }
}
```

## Handling Errors in Async/Await Functions

🔹 Description:
Async functions can also throw errors. Wrap them in try-catch for proper error handling.

Example:

```typescript
async function getData() {
  try {
    const response = await fetch("https://invalid-url.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    const err = error as Error;
    console.error("Fetch error:", err.message);
  }
}
```

## The Result Pattern (Functional Programming Style)

🔹 Description:
Instead of throwing exceptions, functions return success/error objects. This is useful in apps where you want to avoid try-catch in business logic.

 Example:

```typescript

type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

function divide(a: number, b: number): Result<number> {
  if (b === 0) return { success: false, error: "Cannot divide by zero" };
  return { success: true, data: a / b };
}

const result = divide(10, 0);

if (result.success) {
  console.log("Result:", result.data);
} else {
  console.error("Error:", result.error);
}
```

## Optional: Logging or Reporting Errors

In real-world apps, you may log errors to services like Sentry, LogRocket, or your backend.

```typescript
function logError(error: unknown) {
  const err = error as Error;
  // sendToLogger(err.message, err.stack);
  console.error("Logged Error:", err.message);
}
```
