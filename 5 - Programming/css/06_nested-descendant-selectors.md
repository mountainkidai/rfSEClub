# Nested Descendant Selectors

Nested descendant selectors allow you to target elements with very specific relationships in your HTML structure.

## Basic Syntax

```css
ancestor1 ancestor2 descendant {
    property: value;
}
```

## How It Works

Chain multiple selectors to target elements that are nested within multiple parent elements.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="styles.css"> <!-- External CSS -->
</head>
<body>

  <main>
    <header>
      <p>This is a paragraph inside header inside main.</p>
    </header>
  </main>

  <nav>
    <ul>
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </ul>
  </nav>

</body>
</html>

```

```css
/* Target p elements inside header inside main */
main header p {
    color: #333;
    font-size: 16px;
}

/* Target links inside list items inside navigation */
nav ul li a {
    text-decoration: none;
    color: #555;
}
