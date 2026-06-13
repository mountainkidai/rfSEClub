# Lists in HTML

HTML supports three main types of lists: unordered, ordered, and definition lists.

## 1. Unordered List (`<ul>`)

Displays items with bullet points.

```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
```

**Output:**

- Item One
- Item Two
- Item Three

### Nested Unordered List

```html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>
```

**Output:**

- Fruits
  - Apple
  - Banana
- Vegetables
  - Carrot
  - Broccoli

## 2. Ordered List (`<ol>`)

Displays items with numbers.

```html
<ol>
  <li>First Step</li>
  <li>Second Step</li>
  <li>Third Step</li>
</ol>
```

**Output:**

1. First Step
2. Second Step
3. Third Step

### Ordered List with Type Attribute

```html
<ol type="A">
  <li>Step A</li>
  <li>Step B</li>
  <li>Step C</li>
</ol>
```

**Output:**
A. Step A
B. Step B
C. Step C

### Ordered List with Start Attribute

```html
<ol start="5">
  <li>Step Five</li>
  <li>Step Six</li>
</ol>
```

**Output:**
5. Step Five
6. Step Six

### Nested Ordered List

```html
<ol>
  <li>Setup
    <ol>
      <li>Install</li>
      <li>Configure</li>
    </ol>
  </li>
  <li>Launch</li>
</ol>
```

**Output:**

1. Setup
   1. Install
   2. Configure
2. Launch

## 3. Definition List (`<dl>`, `<dt>`, `<dd>`)

Used for displaying terms and their descriptions. `<dt>` defines the term and `<dd>` provides the definition.

```html
<dl>
  <dt>HTML</dt>
  <dd>A markup language for creating web pages.</dd>

  <dt>CSS</dt>
  <dd>A style sheet language used for describing presentation.</dd>

  <dt>JavaScript</dt>
  <dd>A scripting language that enables interactive web features.</dd>
</dl>
```

**Output:**
HTML: A markup language for creating web pages.  
CSS: A style sheet language used for describing presentation.  
JavaScript: A scripting language that enables interactive web features.

### Definition List with Multiple Descriptions

```html
<dl>
  <dt>Python</dt>
  <dd>A general-purpose programming language.</dd>
  <dd>Popular for web and data science.</dd>

  <dt>API</dt>
  <dd>Application Programming Interface</dd>
</dl>
```

**Output:**
Python: A general-purpose programming language.  
Python: Popular for web and data science.  
API: Application Programming Interface

## Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Lists Example</title>
  </head>
  <body>
    <h2>Unordered List</h2>
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
    </ul>

    <h2>Ordered List</h2>
    <ol>
      <li>Wash</li>
      <li>Cut</li>
      <li>Serve</li>
    </ol>

    <h2>Definition List</h2>
    <dl>
      <dt>HTML</dt>
      <dd>HyperText Markup Language</dd>

      <dt>URL</dt>
      <dd>Uniform Resource Locator</dd>

      <dt>HTTP</dt>
      <dd>HyperText Transfer Protocol</dd>
    </dl>
  </body>
</html>
```

**Output:**

Unordered List

- Apple
- Banana
- Cherry

Ordered List

1. Wash
2. Cut
3. Serve

Definition List:
HTML: HyperText Markup Language  
URL: Uniform Resource Locator  
HTTP: HyperText Transfer Protocol
