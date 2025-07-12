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

* Item One
* Item Two
* Item Three

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
HTML
: A markup language for creating web pages.

CSS
: A style sheet language used for describing presentation.

JavaScript
: A scripting language that enables interactive web features.

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
