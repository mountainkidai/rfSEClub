# TypeScript Concepts Curriculum

Made by MountainKid AI, Jakhu Hill,Shimla

## 1. Introduction to TypeScript

- **What is TypeScript?**: Superset of JavaScript with static types for better tooling and scalability.
- **Setup**: Installing TypeScript (`npm install -g typescript`), configuring `tsconfig.json`.
- **Compiling TypeScript**: Using `tsc` to transpile `.ts` files to `.js`.

## 2. Basic Types

- **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`.
- **Any Type**: Using `any` for dynamic types (avoid when possible for type safety).
- **Unknown Type**: Safer alternative to `any` for unknown values.
- **Void**: For functions that return nothing.
- **Never**: For functions that never return (e.g., throw errors or infinite loops).

## 3. Arrays and Tuples

- **Arrays**: Defining arrays with `number[]` or `Array<number>`.
- **Tuples**: Fixed-length arrays with specific types, e.g., `[string, number]`.

## 4. Objects and Interfaces

- **Object Types**: Defining object shapes, e.g., `{ name: string; age: number }`.
- **Interfaces**: Reusable type definitions for objects, e.g., `interface User { id: string; name: string }`.
- **Optional Properties**: Using `?` for optional fields, e.g., `email?: string`.
- **Readonly Properties**: Using `readonly` to prevent modification.

## 5. Functions

- **Function Types**: Defining function signatures, e.g., `(a: number, b: number) => number`.
- **Optional Parameters**: Using `?` for optional params, e.g., `param?: string`.
- **Default Parameters**: Setting defaults, e.g., `param: string = "default"`.
- **Rest Parameters**: Using `...args: number[]` for variable arguments.
- **Function Overloading**: Defining multiple function signatures for the same function.

## 6. Type Aliases

- **Type Aliases**: Creating custom types, e.g., `type Point = { x: number; y: number }`.
- **Union Types**: Combining types, e.g., `string | number`.
- **Intersection Types**: Merging types, e.g., `TypeA & TypeB`.

## 7. Enums

- **Numeric Enums**: e.g., `enum Direction { Up = 1, Down, Left, Right }`.
- **String Enums**: e.g., `enum Status { Success = "SUCCESS", Error = "ERROR" }`.
- **Const Enums**: Optimized enums that don’t generate runtime code.

## 8. Type Assertions

- **As Syntax**: Casting types, e.g., `let value = someValue as string`.
- **Angle Bracket Syntax**: Alternative casting, e.g., `<string>someValue` (not used in JSX).
- **Non-null Assertion**: Using `!` to assert a value is non-null, e.g., `value!`.

## 9. Classes

- **Class Basics**: Defining classes with properties and methods, e.g., `class User { name: string }`.
- **Access Modifiers**: `public`, `private`, `protected`.
- **Readonly Properties**: Preventing property modification.
- **Inheritance**: Using `extends` for class hierarchies.
- **Abstract Classes**: Defining base classes with `abstract`.
- **Interfaces with Classes**: Implementing interfaces with `implements`.

## 10. Generics

- **Generic Functions**: Reusable functions with type parameters, e.g., `function identity<T>(arg: T): T`.
- **Generic Interfaces**: e.g., `interface Pair<K, V> { key: K; value: V }`.
- **Generic Classes**: e.g., `class Box<T> { content: T }`.
- **Constraints**: Limiting generic types, e.g., `T extends string`.
- **Default Types**: Setting default generic types, e.g., `Generic<T = string>`.

## 11. Modules

- **Export/Import**: Exporting and importing modules, e.g., `export const func; import { func } from './module'`.
- **Default Exports**: e.g., `export default class User`.
- **Namespace**: Organizing code with `namespace` (less common with ES modules).

## 12. Advanced Types

- **Conditional Types**: Types based on conditions, e.g., `T extends U ? X : Y`.
- **Mapped Types**: Transforming types, e.g., `{ [P in keyof T]: T[P] }`.
- **Template Literal Types**: String literal types, e.g., `type Event = 'click' | 'hover'`.
- **Indexed Access Types**: Accessing types via indices, e.g., `T[keyof T]`.

## 13. Type Guards

- **Typeof Guard**: Checking types with `typeof`, e.g., `if (typeof value === 'string')`.
- **Instanceof Guard**: Checking class instances, e.g., `if (value instanceof Date)`.
- **In Operator**: Checking property existence, e.g., `if ('key' in obj)`.
- **Custom Type Guards**: Functions that narrow types, e.g., `function isString(value: any): value is string`.

## 14. Utility Types

- **Partial<T>**: Makes all properties optional.
- **Required<T>**: Makes all properties required.
- **Pick<T, K>**: Selects specific properties.
- **Omit<T, K>**: Excludes specific properties.
- **Record<K, T>**: Creates an object type with keys `K` and values `T`.
- **Exclude<T, U>**: Excludes types from a union.
- **Extract<T, U>**: Extracts types from a union.

## 15. Decorators

- **Class Decorators**: Modifying classes, e.g., `@sealed`.
- **Method Decorators**: Modifying methods.
- **Property Decorators**: Modifying properties.
- **Decorator Factories**: Creating reusable decorators.

## 16. Type Inference

- **Automatic Inference**: TypeScript infers types from values, e.g., `let x = 5` (inferred as `number`).
- **Contextual Typing**: Inferring types based on context, e.g., function parameters.

## 17. Type Compatibility

- **Structural Typing**: Types are compatible if structures match.
- **Function Compatibility**: Rules for function parameter and return type compatibility.
- **Enum Compatibility**: Enums vs. numbers.

## 18. Declaration Files

- **.d.ts Files**: Declaring types for JavaScript libraries.
- **Ambient Declarations**: Declaring global variables, e.g., `declare const myVar: string`.
- **DefinitelyTyped**: Using `@types` packages for third-party libraries.

## 19. Error Handling

- **Type Errors**: Understanding and fixing common TypeScript errors.
- **Strict Mode**: Enabling `strict` in `tsconfig.json` for better type safety.
- **NoImplicitAny**: Preventing implicit `any` types.

## 20. Integration with Tools

- **Node.js**: Using TypeScript with Node.js (e.g., `ts-node`).
- **React**: Using TypeScript with React (e.g., `.tsx` files, props typing).
- **Next.js**: TypeScript setup with Next.js.
- **ESLint/Prettier**: Linting and formatting TypeScript code.

## 21. Advanced Patterns

- **Discriminated Unions**: Combining union types with a common discriminator, e.g., `{ kind: 'circle' } | { kind: 'square' }`.
- **Type Narrowing**: Narrowing types in control flows.
- **Type Predicates**: Functions that assert specific types.
- **Symbol and Unique Symbol**: Using `symbol` for unique keys.

## 22. Performance Optimization

- **Reducing Compilation Time**: Optimizing `tsconfig.json` (e.g., `skipLibCheck`).
- **Incremental Builds**: Using `--incremental` flag.
- **Avoiding Type Complexity**: Simplifying complex generics and unions.

## 23. Real-World Application

- **Typing API Responses**: Defining types for API responses.
- **Auth System**: Using interfaces for user auth payloads, e.g., `interface User { id: string; token: string }`.
- **Error Handling**: Custom type guards for API error responses.
- **State Management**: Typing Redux or Zustand stores.
- **Blockchain Integration**: Typing blockchain data structures.
