# Links in HTML

HTML links allow users to navigate between web pages, documents, or other resources.

## 1. Anchor Tag (`<a>`)

The `<a>` (anchor) tag is used to define hyperlinks. It requires the `href` attribute, which indicates the link's destination.

```html
<a href="https://example.com">Visit Example</a>
```

* The text between the opening and closing `<a>` tags becomes the clickable link.

## 2. `href` Attribute

The `href` (hypertext reference) attribute specifies the destination of the link.

* **Absolute URL**: Links to an external website using a full web address.

  ```html
  <a href="https://www.google.com">Google</a>
  ```

* **Relative URL**: Links to a file or page within your own site directory.

  ```html
  <a href="about.html">About Us</a>
  ```

## 3. `target` Attribute

Specifies where to open the linked document.

* `_self`: Opens the link in the same tab or window (default).
* `_blank`: Opens the link in a new tab or window.
* `_parent` and `_top`: Used in framesets (rare today).

```html
<a href="https://example.com" target="_blank">Open in New Tab</a>
```

## 4. Other Useful Attributes

* `title`: Adds extra info that appears on hover.

  ```html
  <a href="page.html" title="Go to page">Page</a>
  ```

* `download`: Tells the browser to download the linked resource instead of navigating to it.

  ```html
  <a href="report.pdf" download>Download Report</a>
  ```

* `rel`: Describes the relationship between the current page and the linked resource. Common values include `nofollow`, `noopener`, `external`.

  ```html
  <a href="https://external-site.com" rel="noopener">External Site</a>
  ```

## Example

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
