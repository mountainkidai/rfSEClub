# Links in HTML

HTML links allow users to navigate between web pages, documents, or other resources.

## What Are Attributes?

**Attributes** are special words used inside HTML tags to provide additional information about elements.

* They always go inside the opening tag.
* Attributes have a **name** and a **value**, written as:

```html
<tagname attribute="value">content</tagname>
```

For example, in:

```html
<a href="https://example.com">Visit Example</a>
```

* `href` is the attribute **name**
* `"https://example.com"` is its **value**

You can add more than one attribute inside a tag by separating them with spaces.

---

## 1. Anchor Tag (`<a>`)

The `<a>` (anchor) tag is used to define hyperlinks. It requires the `href` attribute, which indicates the link's destination.

```html
<a href="https://example.com">Visit Example</a>
```

* The text between the opening and closing `<a>` tags becomes the clickable link.
* The link can be styled using CSS like any other text element.

**Output:**

* Visit Example

---

## 2. `href` Attribute

The `href` (hypertext reference) attribute specifies the destination of the link.

### Absolute URL

Links to an external website using a full web address.

```html
<a href="https://www.google.com">Google</a>
```

**Output:**

* Google

### Relative URL

Links to a file or page within your own site directory.

```html
<a href="about.html">About Us</a>
```

**Output:**

* About Us

*Use relative URLs when linking within the same project or website to make your code more portable.*

---

## 3. `target` Attribute

Specifies where to open the linked document.

* `_self`: Opens the link in the same tab or window (default).
* `_blank`: Opens the link in a new tab or window.
* `_parent` and `_top`: Used in framesets (rare today).

```html
<a href="https://example.com" target="_blank">Open in New Tab</a>
```

**Output:**

* Open in New Tab (opens in a new tab)

*Use `target="_blank"` carefully with the `rel="noopener"` attribute for better security.*

---

## 4. Other Useful Attributes

### `title`

Adds extra info that appears on hover.

```html
<a href="page.html" title="Go to page">Page</a>
```

**Output:**

* Page (shows tooltip "Go to page" on hover)

### `download`

Tells the browser to download the linked resource instead of opening it.

```html
<a href="report.pdf" download>Download Report</a>
```

**Output:**

* Download Report (downloads `report.pdf` when clicked)

### `rel`

Describes the relationship between the current page and the linked resource.
Common values:

* `nofollow`: Tells search engines not to follow the link.
* `noopener`: Improves security when using `target="_blank"`.
* `external`: Indicates an external link.

```html
<a href="https://external-site.com" rel="noopener">External Site</a>
```

**Output:**

* External Site

---

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Links Example</title>
  </head>
  <body>
    <h1>HTML Links</h1>

    <p>
      Go to <a href="https://www.wikipedia.org" target="_blank">Wikipedia</a> for more info.
    </p>

    <p>
      Read our <a href="privacy.html" title="Privacy Policy page">Privacy Policy</a>.
    </p>

    <p>
      <a href="brochure.pdf" download>Download Brochure</a>
    </p>
  </body>
</html>
```

**Output:**

* Wikipedia (opens in new tab)
* Privacy Policy (tooltip on hover)
* Download Brochure (starts download)
