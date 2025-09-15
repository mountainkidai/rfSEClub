# Embedded Content in HTML

Embedded content allows you to display external webpages, interactive maps, videos, and apps directly within your HTML document. The primary tool for this is the `<iframe>` tag.

---

## `<iframe>` Tag

**Definition:**
The `<iframe>` (short for **inline frame**) is an HTML tag used to embed another HTML page within the current page.

**Syntax:**

```html
<iframe src="https://example.com" width="600" height="400"></iframe>
```

**Explanation:**

* `src`: The URL of the webpage to be embedded.
* `width`, `height`: Define the size (in pixels) of the frame.
* `title`: Describes the iframe's content (used by screen readers for accessibility).
* `loading="lazy"`: Defers loading the iframe until it becomes visible, improving performance.

**Output:** A framed window showing the content of `https://example.com`.

**Example:**

```html
<iframe src="https://www.wikipedia.org" width="500" height="300" title="Wikipedia Homepage"></iframe>
```

This displays the Wikipedia homepage in a scrollable box.

---

## `sandbox` Attribute

**Definition:**
The `sandbox` attribute provides **security restrictions** on the content inside the iframe.

**Basic Syntax:**

```html
<iframe src="https://example.com" sandbox></iframe>
```

This blocks:

* Forms
* Scripts
* Plugins
* Automatic features

**Selective Permissions:**
You can allow specific features:

* `allow-scripts`: Enables JavaScript execution.
* `allow-forms`: Allows form submission.
* `allow-same-origin`: Allows content to behave as if from the same origin (gives access to cookies and storage).

**Example:**

```html
<iframe src="https://example.com" sandbox="allow-scripts allow-same-origin"></iframe>
```

---

## Security Considerations

Iframes can be **risky** if not properly controlled.

**Risks Include:**

* **Clickjacking:** An invisible iframe tricks users into clicking hidden buttons.
* **Cookie Theft:** If `allow-same-origin` is misused.
* **Phishing/Malware:** Untrusted sites can pretend to be something they’re not.

**Best Practices:**

* Use `sandbox` to limit iframe behavior.
* Use `referrerpolicy="no-referrer"` to prevent sending sensitive info.
* Never embed untrusted third-party content.
* Set proper `title` for accessibility.

---

## Summary

* `<iframe>` lets you embed external HTML pages.
* The `src` attribute defines what to show.
* Use `sandbox` to add security restrictions.
* Always be cautious when embedding third-party content.
