# Combining Selectors

CSS allows you to group selectors together to apply the same styles to multiple elements efficiently.

## Grouping Selectors

Use commas to separate selectors and apply the same styles to all of them.

```css
selector1, selector2, selector3 {
    property: value;
}
```

## Basic Examples

```css
/* Style all headings the same way */
h1, h2, h3 {
    color: #333;
    font-family: Arial, sans-serif;
}

/* Style multiple elements with same properties */
p, div, span {
    margin: 10px;
    padding: 5px;
}
```

## Combining Different Selector Types

```css
/* Mix element selectors with class selectors */
h1, .title, #main-heading {
    font-size: 24px;
    font-weight: bold;
}

/* Group related navigation elements */
nav, .navbar, #navigation {
    background-color: #333;
    padding: 10px;
}
```
