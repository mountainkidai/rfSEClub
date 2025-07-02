# 1. Introduction to TypeScript

**Explanation**:  
TypeScript is a superset of JavaScript that adds static types, enabling better tooling, scalability, and error detection during development. It transpiles to JavaScript via the `tsc` compiler  (npm install -g typescript)
Setup involves installing TypeScript globally:
and configuring tsconfig.json for project settings like target ES version or strict mode.
```bash

// hello.ts
let message: string = "Hello, MountainKid!";
console.log(message);
// Compile: tsc hello.ts -> hello.js
```

## ES Version: 
The ECMAScript version (e.g., ES5, ES6/ES2015, ES2020) your TypeScript code compiles to. Set in tsconfig.json under "target". Choose based on your runtime (e.g., Node.js 18 supports ES2020). Lower versions (like ES5) ensure broader compatibility but limit modern features.

**tsconfig.json**: A JSON file at your project root that configures TypeScript. It defines compiler options like:
"target": ES version for output JS.
"module": Module system (e.g., CommonJS for Node.js, ESModules for browsers).
"outDir": Output directory for compiled JS.
```bash
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist"
  }
}