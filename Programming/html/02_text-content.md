# Text Content in HTML

HTML provides several tags for displaying text on a web page.

## 1. Headings (`<h1>` to `<h6>`)

Used to define headings from largest (`<h1>`) to smallest (`<h6>`).
These tags also provide semantic meaning. For example, `<h1>` usually represents the main title of the page, while `<h2>` to `<h6>` are used for sub-sections.
Headings help organize content hierarchically and improve accessibility and SEO.

```html
<h1>Main Heading</h1>     <!-- Most important heading -->
<h2>Subheading</h2>        <!-- Second level heading -->
<h3>Section Heading</h3>   <!-- Third level heading -->
```

## 2. Paragraphs (`<p>`)

Used to define blocks of text.
Paragraphs automatically add spacing above and below themselves to separate content visually.
They are the most common way to write content on a web page.

<p>This is a paragraph of text. It automatically adds spacing above and below.</p>
```

## 3. Line Breaks (`<br>`)

Inserts a single line break without starting a new paragraph.
This is useful for addresses, poems, or short lines where you want to break text without extra space.
Note: `<br>` is an empty tag — it doesn’t need a closing tag.

```html
<p>Line one<br>Line two<br>Line three</p>
```

## Example

A complete HTML document showing how text tags work together:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Text Content Example</title>
  </head>
  <body>
    <h1>Welcome</h1> <!-- Main heading -->

    <p>This is a paragraph.</p> <!-- First block of text -->

    <p>Another paragraph with<br>a line break.</p> <!-- Line break shown without new paragraph -->
  </body>
</html>
```

### Summary

- Use `<h1>` to `<h6>` for hierarchical headings.
- Use `<p>` for paragraphs of text.
- Use `<br>` for single line breaks within text.
