
# Prerequisites Explained (Chronological Order for Decorators)
These are the key JavaScript/TypeScript concepts needed to understand decorators, ordered by how they appear in decorator usage.

## Classes
**What**: Blueprints for objects with properties and methods (e.g., a calculator with `add`).  
**Why for Decorators**: Decorators modify classes, methods, or properties, so classes are the foundation.  
```typescript
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}
```
**Explanation**: Class defines a calculator with an `add` method.

## Prototype
The **prototype** is an object shared by all instances of a class, holding methods to save memory.  
In JavaScript, not all methods and properties are added to the prototype by default.  
**Key Points**:  
- **Instance Properties/Methods**: Defined inside the constructor or with class field syntax (e.g., `this.x`) are added to each instance, not the prototype.  
- **Class Methods**: Defined directly in the class body (e.g., `method() {}`) are added to the prototype by default.  
- **Static Methods/Properties**: Defined with `static` (e.g., `static method() {}`) are added to the class itself, not the prototype or instances.  
- **Class Fields (Properties)**: Defined with class field syntax (e.g., `x = 10;`) are added to each instance, not the prototype, unless explicitly assigned to the prototype.

```typescript
class KoelAuth {
  // Instance property (not on prototype)
  user = "Aariv";

  // Constructor adds to instance
  constructor(id) {
    this.id = id; // Instance property
  }

  // Prototype method (added to KoelAuth.prototype)
  verify() {
    return `${this.user} verified with ID ${this.id}`;
  }

  // Static method (on KoelAuth, not prototype)
  static getVersion() {
    return "Koel v1.0";
  }
}

const auth1 = new KoelAuth("123");
const auth2 = new KoelAuth("456");

// Instance properties
console.log(auth1.user); // Outputs: Aariv (on instance)
console.log(auth1.id); // Outputs: 123 (on instance)
console.log(auth2.id); // Outputs: 456 (on instance)

// Prototype method (shared)
console.log(auth1.verify()); // Outputs: Aariv verified with ID 123
console.log(auth2.verify()); // Outputs: Aariv verified with ID 456
console.log(auth1.verify === auth2.verify); // Outputs: true (on prototype)

// Static method (on class)
console.log(KoelAuth.getVersion()); // Outputs: Koel v1.0

// Check prototype
console.log(KoelAuth.prototype.verify); // Outputs: [Function: verify]
console.log(KoelAuth.prototype.user); // Outputs: undefined (not on prototype)
console.log(KoelAuth.prototype.id); // Outputs: undefined (not on prototype)
```
