# Performance Optimization in TypeScript

TypeScript itself doesn’t run code — it compiles to JavaScript. So performance optimizations are mostly about writing efficient code, improving build speed, and ensuring runtime performance in your JS output.

We’ll cover both code-level and project-level optimizations.

## Use Correct Types Instead of any

🔸 Description:
Avoid using any, as it skips type checking. Wrong usage can lead to runtime bugs, which slows down apps.

 Example:

```ts
//    Bad
function calculate(a: any, b: any) {
  return a + b;
}

//  Good
function calculate(a: number, b: number): number {
  return a + b;
}
```

## Avoid Unnecessary Object Copies

🔸 Description:
Don’t clone objects/arrays repeatedly — it wastes memory.

Example:

```ts

//    Inefficient
const newArray = [...array].map(...);

//  Efficient
array.map(...);
```

## Lazy Loading with Dynamic Imports

🔸 Description:
Load heavy modules only when needed (like charts, reports, etc).

 Example:

```ts
// Lazy load only when needed
const module = await import('./heavy-module');
module.run();
```

## Memoization (React/TS)

🔸 Description:
Cache function results to avoid recalculating.

Example:

```tsx

import { useMemo } from "react";

const list = useMemo(() => expensiveCalculation(data), [data]);
```

Use useMemo, useCallback, or libraries like memoizee.

## Avoid Unnecessary Type Assertions

🔸 Description:
Using as any or as unknown often can hurt safety and cause bugs.

```ts
const user = getUser() as any; //    risky

const user: User = getUser();  //  safer
```

## Smarter Loops

🔸 Description:
Use for, forEach, or map wisely. Avoid nested loops when possible.

 Example:

```ts

//    Avoid nested loops over large arrays
for (let i of bigArray1) {
  for (let j of bigArray2) {
    // Very slow
  }
}

//  Use maps or sets for lookups
const set = new Set(bigArray2);
for (let i of bigArray1) {
  if (set.has(i)) {
    // Fast check
  }
}
```

## Tree Shaking + Dead Code Elimination

🔸 Description:
Write modular code using import/export. Bundlers like Webpack/Vite will remove unused code.

```ts
//  Good: ES modules help bundlers
export function useful() {}
export function unused() {}
```

## tsconfig Optimizations

🔸 Description:
Improve build performance and type checking speed.

Example: tsconfig.json

```json

{
  "compilerOptions": {
    "skipLibCheck": true,
    "noEmit": true,
    "strict": true,
    "incremental": true,
    "target": "ES2020",
    "module": "ESNext"
  }
}
```

skipLibCheck: Skip type checks of dependencies (faster)

incremental: Cache previous builds

## Use const over let if value doesn’t change

🔸 Description:
const helps V8 (JavaScript engine) optimize better.

```ts
const name = "Abhishek"; //  better performance
```

## Profiling & Analysis Tools

🔸 Description:
Use tools to find performance bottlenecks:

- Chrome DevTools (for JS runtime)
- Webpack Bundle Analyzer
- React Profiler
- Lighthouse (for web apps)
  