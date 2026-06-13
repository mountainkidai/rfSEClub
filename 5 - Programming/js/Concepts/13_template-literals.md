# JavaScript Template Literals

Template literals are strings enclosed by backticks (\`) instead of single or double quotes. They provide powerful features like:

## 1. Interpolation

You can insert variables or expressions directly in the string using `${...}`.

```js
let name = "Alice";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
```

**Output:**

```txt
My name is Alice and I am 25 years old.
```

## 2. Multi-line Strings

Template literals allow you to write strings on multiple lines without special characters.

```js
let message = `Hello,
This is a multi-line string
using template literals.`;
console.log(message);
```

**Output:**

```txt
Hello,
This is a multi-line string
using template literals.
```

## 3. Tagged Templates

A tag is a function that can process a template literal.

```js
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<b>${values[i] || ''}</b>`, '');
}

let lang = "JavaScript";
let level = "beginner";
console.log(highlight`Learn ${lang} at a ${level} level.`);
```

**Output:**

```txt
Learn <b>JavaScript</b> at a <b>beginner</b> level.
```

## Problems

1. Create a template literal that displays a person's name and age
2. Create a template literal that shows a product name and its price
3. Create a multi-line template literal for a simple poem
4. Create a template literal that displays current date and time
5. Create a template literal that shows a student's grades in different subjects
6. Create a template literal for a simple HTML structure
7. Create a template literal that displays weather information
8. Create a template literal for a simple email template
9. Create a template literal that shows a book's details
10. Create a template literal for a simple address format
