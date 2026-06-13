# Decorators

**What Are Decorators?**: Decorators are special functions in TypeScript that modify classes, methods, or properties at declaration time, adding extra behavior (e.g., logging) to a calculator program without changing its core code.  
**Why Use Decorators?**: They keep code clean by adding features like logging or validation separately, making the calculator reusable and maintainable.  
**Note**: Enable `"experimentalDecorators": true` in `tsconfig.json` for decorators to work.  
**Are Parameters Like `target`, `descriptor` Predefined?**: Yes, TypeScript passes specific parameters to decorators based on their type (class, method, property). They’re predefined by TypeScript’s decorator system, not user-defined, and vary by decorator type:

- **Class Decorator**: Gets `target` (constructor function).
- **Method Decorator**: Gets `target` (class prototype), `propertyKey` (method name), `descriptor` (method metadata).
- **Property Decorator**: Gets `target` (class prototype), `propertyKey` (property name).

**Evolution of Simple Calculator Program**: We’ll build a calculator for addition, starting basic and adding decorators as needs arise, explaining each in one line with issues and solutions. I’ll cover class, method, property decorators, and factories, clarifying `target`, `descriptor`, etc.

## Step 1: Basic Calculator Class

**Need**: Add numbers in a class.  
**What**: Simple class with `add` method.  
**Code**:

```typescript
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
```

**Explanation**: Basic class adds numbers.  
**Issue**: Need to log every addition.
