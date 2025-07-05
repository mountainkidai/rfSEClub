
# Modules
**Explanation**: TypeScript modules organize code into reusable files, using `export` and `import` to share functionality, ideal for structuring a calculator program. Key features:
- **Export/Import**: Share or use code between files.
- **Default Exports**: Export a single main item.
- **Namespaces**: Group code (less common with modules).

**Evolution of Simple Calculator Program**: We’ll build a calculator for addition, starting basic and adding module features as needs arise, showing issues and solutions, explaining each in one line.

## Step 1: Basic Calculator Function
**Need**: Add two numbers in a single file.  
**What**: Simple addition function.  
**Code (in calculator.ts)**:
```typescript
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3)); // 8
```
**Explanation**: Basic function adds numbers, but all code is in one file.  
**Issue**: Can’t reuse `add` in other files or projects.

## Step 2: Need for Reusability (Export Function)
**Need**: Share the `add` function across files.  
**Solution**: Use `export` to make `add` available.  
**Code (in calculator.ts)**:
```typescript
export function add(a: number, b: number): number {
  return a + b;
}
```
**Usage (in main.ts)**:
```typescript
import { add } from './calculator';
console.log(add(5, 3)); // 8
```
**Explanation**: `export` shares `add`; `import` uses it in another file.  
**Issue**: Want a default calculator function for simpler imports.

## Step 3: Need for Simpler Import (Default Export)
**Need**: Import the main function without curly braces.  
**Solution**: Use `export default` for `add`.  
**Code (in calculator.ts)**:
```typescript
export default function add(a: number, b: number): number {
  return a + b;
}
```
**Usage (in main.ts)**:
```typescript
import add from './calculator';
console.log(add(5, 3)); // 8
```
**Explanation**: `export default` allows importing `add` without `{}`.  
**Issue**: Need to organize multiple calculator functions (e.g., add, subtract).

## Step 4: Need for Multiple Functions (Export Multiple)
**Need**: Export `add` and a new `subtract` function.  
**Solution**: Use named exports for multiple functions.  
**Code (in calculator.ts)**:
```typescript
export function add(a: number, b: number): number {
  return a + b;
}
export function subtract(a: number, b: number): number {
  return a - b;
}
```
**Usage (in main.ts)**:
```typescript
import { add, subtract } from './calculator';
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```
**Explanation**: Named exports share multiple functions for use elsewhere.  
**Issue**: Want to group related calculator code logically.