# JavaScript Regular Expressions

Regular Expressions (also called regex or regexp) are special patterns used to find or match sequences of characters in a string. In simple terms, they're tools that help you search, check, or replace parts of text.

They are extremely useful in tasks like:

* Checking if an email address is valid
* Finding all phone numbers in a text
* Replacing bad words with asterisks

In JavaScript, regular expressions are objects and are written using two forward slashes:

```js
let pattern = /abc/; // This looks for the exact text 'abc'
```

You can also create them using the RegExp constructor:

```js
let pattern = new RegExp("abc");
```

---

## 1. Basic Syntax

A regular expression is defined using `/pattern/flags`

* The pattern defines what you're looking for.
* The flags modify how the search works:

  * `g`: Global match (find all matches, not just the first)
  * `i`: Case-insensitive (no difference between A and a)
  * `m`: Multi-line mode (treats strings with line breaks as multiple lines)

Example:

```js
let regex = /hello/i; // will match "Hello", "HELLO", etc.
```

---

## 2. Common Methods

### `test()` – Checks if there is a match

Returns `true` if the pattern exists, `false` if not.

```js
let pattern = /cat/;
console.log(pattern.test("I have a cat")); // true
```

### `match()` – Returns the matched parts

Gives you an array of matches (or `null` if no match).

```js
let text = "cat, bat, rat";
console.log(text.match(/.at/g)); // ["cat", "bat", "rat"]
```

### `replace()` – Replaces matched text

You can replace a match with something else.

```js
let sentence = "Today is sunny";
console.log(sentence.replace(/sunny/, "cloudy"));
// Output: Today is cloudy
```

---

## 3. Use Cases for Beginners

### 3.1 Form Validation

You can check if user input looks like an email:

```js
let emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emailPattern.test("user@example.com")); // true
```

* `^` - Start of string (ensures we check the entire string)
* `[\w.-]+` - Username part: letters, numbers, underscore, dot, or hyphen (one or more)
* `@` - Required @ symbol
* `[\w.-]+` - Domain name: letters, numbers, underscore, dot, or hyphen (one or more)
* `\.` - Required dot (escaped because . has special meaning in regex)
* `\w+` - Domain extension: letters, numbers, or underscore (one or more)
* `$` - End of string

### Search and Highlight

Find all words ending with "ing":

```js
let sentence = "I am coding and learning and debugging.";
console.log(sentence.match(/\w+ing/g));
// Output: ["coding", "learning", "debugging"]
```

### Clean Input

Remove all digits:

```js
let messy = "user123name456";
let clean = messy.replace(/\d/g, "");
console.log(clean); // username
```

---

## 4. Creating Regular Expressions with Constructor

You can also create regex dynamically using the RegExp constructor:

```js
let word = "hello";
let pattern = new RegExp(word, "i");
console.log(pattern.test("Hello world!")); // true
```
