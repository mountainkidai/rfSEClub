# Internationalization in HTML

Internationalization (often abbreviated as i18n) refers to designing websites that can be easily adapted for users of different languages, regions, and cultures.

---

## Why It Matters

* Users around the world speak different languages.
* Text direction can vary (left-to-right vs. right-to-left).
* Browsers rely on markup hints to correctly render content and select fonts.

---

## `lang` Attribute

The `lang` attribute tells the browser (and assistive technologies like screen readers) what language the content is in.

### Example

```html
<html lang="en">
  <head>
    <title>Welcome</title>
  </head>
  <body>
    <p>Hello, world!</p>
  </body>
</html>
```

### Another Example (Hindi)

```html
<html lang="hi">
  <head>
    <title>स्वागत</title>
  </head>
  <body>
    <p>नमस्कार!</p>
  </body>
</html>
```

#### Benefits

* Improves accessibility.
* Enhances SEO.
* Helps search engines understand the content.

---

## RTL (Right-to-Left) Language Support

Languages like Arabic, Hebrew, Persian, and Urdu are written from right to left.

### Enabling RTL

Use the `dir` attribute.

```html
<html lang="ar" dir="rtl">
  <head>
    <title>سلام</title>
  </head>
  <body>
    <p>مرحبا بالعالم!</p>
  </body>
</html>
```

---

## Combining Language and Direction

```html
<html lang="fa" dir="rtl">
  <body>
    <h1>به دنیا خوش آمدید!</h1>
  </body>
</html>
```

* Always declare the `lang` attribute in the root `<html>` tag.
* Use `dir="rtl"` only when needed.
* Provide translations and switchable UI where needed.
* Use encoding like UTF-8 in the `<meta>` tag for global character support:

```html
<meta charset="UTF-8">
```

---

## Summary

| Tag                      | Attribute | Purpose                        |
| ------------------------ | --------- | ------------------------------ |
| `<html lang="en">`       | `lang`    | Specifies content language     |
| `<html dir="rtl">`       | `dir`     | Specifies text direction       |
| `<meta charset="UTF-8">` | `charset` | Enables wide character support |

---

Internationalization ensures your website is accessible and readable by a global audience, adapting to multiple languages and cultures effortlessly.
