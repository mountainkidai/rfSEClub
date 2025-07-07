# Classes and IDs

Classes and IDs are powerful selectors that allow you to target specific elements in your HTML.

## Classes

Classes are reusable selectors that can be applied to multiple elements.

```css
.class-name {
    property: value;
}
```

```html
<div class="container">Content</div>
<p class="highlight">Important text</p>
<span class="highlight">More important text</span>
```

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.highlight {
    background-color: yellow;
    padding: 5px;
}
```

## IDs

`ID` is an attribute used to uniquely identify an HTML element. It's like a unique name for a specific element within a webpage

```css
#id-name {
    property: value;
}
```

```html
<header id="main-header">
    <h1>Website Title</h1>
</header>
<nav id="primary-nav">
    <ul>...</ul>
</nav>
```

```css
#main-header {
    background-color: #333;
    color: white;
    padding: 20px;
}

#primary-nav {
    background-color: #555;
    padding: 10px;
}
```

## Multiple Classes

You can apply multiple classes to a single element.

```html
<button class="btn primary large">Click Me</button>
```

```css
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.primary {
    background-color: #007bff;
    color: white;
}

.large {
    font-size: 18px;
    padding: 15px 30px;
}
```

## Common Use Cases

### Navigation

```css
.navbar {
    background-color: #333;
    padding: 1rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
}

.nav-link:hover {
    background-color: #555;
}
```
