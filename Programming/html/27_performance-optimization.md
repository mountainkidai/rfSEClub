# Performance Optimization in HTML

Performance optimization helps make websites load faster and feel more responsive. This directly improves user experience and helps with search engine ranking.

---

## Lazy Loading with `loading="lazy"`

### What is Lazy Loading?

Lazy loading is a way to delay loading certain resources (like images or iframes) until they are actually needed — typically when the user scrolls to them.

### HTML Example

```html
<img src="large-image.jpg" loading="lazy" alt="Scenic Landscape">
```

### How it Works

* The browser does **not** load the image when the page first loads.
* The image is only loaded when it is close to being visible on screen.

```txt
|Page Load|
  -> Loads only visible images
  -> Scrolls down
  -> Loads next images when they come into view
```

### When to Use

* For below-the-fold images
* For blog articles with many pictures
* For product listings with lots of thumbnails

---

## Minimizing Render-Blocking Resources

### What are Render-Blocking Resources?

These are files (especially CSS and JavaScript) that the browser must fully load and process before it can display anything meaningful to the user.

### Why It Slows Down Pages

1. HTML loads
2. Encounters a `<link>` to CSS or `<script>`
3. Browser pauses rendering to download and parse it
4. Then continues rendering the page

### How to Optimize

#### 1. **Use `async` and `defer` for JavaScript**

```html
<script src="app.js" async></script>
```

* `async`: Downloads and runs the script as soon as possible (might interfere with HTML execution)
* `defer`: Waits until HTML is fully parsed, then runs script (better for preserving order)

#### 2. **Inline Critical CSS**

Put only the CSS needed to show above-the-fold content directly inside a `<style>` tag in `<head>`.

```html
<style>
  body { font-family: sans-serif; }
  header { background-color: #333; color: white; }
</style>
```

#### 3. **Minify CSS and JS Files**

Use tools like:

* [Terser](https://github.com/terser/terser) for JS
* [cssnano](https://cssnano.co/) for CSS

Minification removes whitespace and comments to reduce file size.

#### 4. **Load Fonts Efficiently**

Use `font-display: swap` in `@font-face` to show fallback fonts immediately:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('custom-font.woff2') format('woff2');
  font-display: swap;
}
```

---

## Summary Table

| Optimization Technique | What It Does                                    |
| ---------------------- | ----------------------------------------------- |
| `loading="lazy"`       | Defers image/iframe loading                     |
| `async` / `defer`      | Prevents JS from blocking HTML rendering        |
| Inline Critical CSS    | Styles important content without extra CSS file |
| Minified Resources     | Reduces file size for faster load times         |
| `font-display: swap`   | Shows text immediately using a fallback font    |
