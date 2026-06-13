# Advanced Patterns in TypeScript (Simplified)

These patterns make your code smarter, more reusable, and easier to maintain. Let’s go one by one:

## Generics

🔸 What is it?
Let you create functions, classes, or types that work with any type, but still keep type safety.

🔸 Example:

```ts

function echo<T>(value: T): T {
  return value;
}

echo("Hello"); // Type is string
echo(123);     // Type is number
```

## Type Guards

🔸 What is it?
Used to check and narrow down the type at runtime.

🔸 Example:

```ts

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function print(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
}
```

## Discriminated Unions

🔸 What is it?
A way to create types with different shapes and safely check which one you're using.

🔸 Example:

```ts

type Animal = 
  | { type: "dog"; bark: () => void }
  | { type: "cat"; meow: () => void };

function speak(animal: Animal) {
  if (animal.type === "dog") animal.bark();
  else animal.meow();
}
```

## Mapped Types

🔸 What is it?
Create new types by going over the keys of an existing type.

🔸 Example:

```ts

type Person = { name: string; age: number };

type OptionalPerson = {
  [K in keyof Person]?: Person[K];
};
// { name?: string; age?: number }
```

## Conditional Types

🔸 What is it?
Create types based on conditions.

🔸 Example:

```ts

type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"
```

## Utility Types

🔸 What is it?
Built-in TypeScript tools to modify types easily.

🔸 Examples:

```ts

type User = { name: string; email: string };

type PartialUser = Partial<User>; // All properties optional
type OnlyEmail = Pick<User, "email">;
type NoEmail = Omit<User, "email">;
```

## infer Keyword

🔸 What is it?
Used to extract a type from another type (usually inside extends).

🔸 Example:

```ts

type GetReturnType<T> = T extends (...args: any) => infer R ? R : never;

type ExampleFn = () => number;
type Result = GetReturnType<ExampleFn>; // number
```

## Function Overloads

🔸 What is it?
One function can have multiple input types and behave accordingly.

🔸 Example:

```ts
function greet(name: string): string;
function greet(names: string[]): string;
function greet(nameOrNames: string | string[]): string {
  return Array.isArray(nameOrNames)
    ? `Hello, ${nameOrNames.join(", ")}`
    : `Hello, ${nameOrNames}`;
}
```

## Index Signatures

🔸 What is it?
Allow objects to have dynamic keys.

🔸 Example:

```ts

type ErrorMap = {
  [key: string]: string;
};

const errors: ErrorMap = {
  email: "Email is required",
  password: "Too short",
};
```

## Template Literal Types

🔸 What is it?
Create types using string patterns.

🔸 Example:

```ts

type Event = "click" | "hover";
type Handler = `on${Capitalize<Event>}`; // "onClick" | "onHover"
```
