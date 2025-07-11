# Pseudo-Classes

Pseudo-classes allow you to style elements based on their state or position in the document.

## Basic Syntax

```css
selector:pseudo-class {
    property: value;
}
```

## Common Pseudo-Classes

### :hover

Applies when user hovers over an element.

```css
button:hover {
    background-color: #0056b3;
    cursor: pointer;
}

.card:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transform: translateY(-2px);
}
```

### :active

Applies when an element is being activated (clicked).

```css
button:active {
    background-color: #004085;
    transform: scale(0.98);
}

.link:active {
    color: #dc3545;
}
```

### :focus

Applies when an element has focus (selected with keyboard or clicked).

```css
input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
}

textarea:focus {
    border-color: #28a745;
}
```

### :visited

Applies to links that have been visited.

```css
a:visited {
    color: #6f42c1;
}

.nav-link:visited {
    color: #495057;
}
```

### :link

Applies to unvisited links.

```css
a:link {
    color: #007bff;
    text-decoration: none;
}
```

## Structural Pseudo-Classes

### :first-child

Targets the first child element.

```css
li:first-child {
    font-weight: bold;
    color: #007bff;
}

.card:first-child {
    margin-top: 0;
}
```

### :last-child

Targets the last child element.

```css
li:last-child {
    border-bottom: none;
}

.menu-item:last-child {
    margin-right: 0;
}
```

### :nth-child(n)

Targets specific child elements by position.

```css
/* Target every 2nd element */
li:nth-child(2n) {
    background-color: #f8f9fa;
}

/* Target every 3rd element */
.card:nth-child(3n) {
    border
```
