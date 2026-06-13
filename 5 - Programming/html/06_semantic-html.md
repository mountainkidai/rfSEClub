# Semantic HTML

Semantic HTML uses meaningful tags that describe the purpose of the content. It helps both browsers and developers understand the structure of a web page.

## Common Semantic Elements (with Simple Definitions and Examples)

### `<header>`

The top part of a page or a section. It usually contains the website logo, heading, or navigation links.

```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
```

### `<nav>`

This tag holds links for site navigation (like menus or important links).

```html
<nav>
  <a href="/">Home</a>
  <a href="/contact">Contact</a>
</nav>
```

### `<main>`

The central part of the webpage where the main content goes.

```html
<main>
  <h2>Welcome to My Page</h2>
  <p>This content is the most important part of the page.</p>
</main>
```

### `<section>`

Groups related content together in a block.

```html
<section>
  <h3>Our Services</h3>
  <p>We offer web design, development, and SEO.</p>
</section>
```

### `<article>`

Represents a self-contained piece of content like a blog post or news article.

```html
<article>
  <h2>News: New Feature Released</h2>
  <p>We just launched a new feature for our app.</p>
</article>
```

### `<aside>`

Extra content that is related to the main content, such as tips, ads, or links.

```html
<aside>
  <h4>Did you know?</h4>
  <p>HTML stands for HyperText Markup Language.</p>
</aside>
```

### `<footer>`

Bottom section of a webpage. Often contains contact info, copyright, or links.

```html
<footer>
  <p>&copy; 2025 My Website. All rights reserved.</p>
</footer>
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic HTML Example</title>
</head>
<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/posts">Posts</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Understanding Semantic HTML</h2>
      <p>Semantic HTML makes websites accessible and organized.</p>
    </article>
  </main>

  <aside>
    <p>Check out our latest post!</p>
  </aside>

  <footer>
    <p>Contact us: info@example.com</p>
  </footer>
</body>
</html>
```
