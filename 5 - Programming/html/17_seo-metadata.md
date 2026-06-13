# SEO and Metadata in HTML

Search Engine Optimization (SEO) and metadata play a crucial role in helping search engines understand and rank your website content. HTML provides various tags that assist in defining page context and visibility for web crawlers.

---

## What is Metadata?

**Definition:**
Metadata is information about the HTML document that is not directly visible to users but can be read by browsers, search engines, and social platforms.

Metadata is placed inside the `<head>` element and influences:

* Search engine rankings
* Display of your webpage in search results
* Social media previews
* Web accessibility and indexing behavior

---

## `<meta>` Tags

### 1. **Meta Description**

```html
<meta name="description" content="A short summary of your page content for search engines.">
```

* **Purpose**: Helps search engines display a relevant description below the page title.
* **Best practice**: Keep it under 160 characters. Use compelling, keyword-rich summaries.

### 2. **Meta Keywords** (Deprecated by most modern search engines)

```html
<meta name="keywords" content="HTML, metadata, SEO, web development">
```

* Not used for rankings anymore, but still seen on older pages.

### 3. **Meta Viewport** (for responsive design)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* Ensures the page scales correctly on mobile devices.

### 4. **Meta Charset**

```html
<meta charset="UTF-8">
```

* Defines the character encoding to avoid rendering issues with special characters.

---

## Open Graph Tags (for Social Media Sharing)

Open Graph tags make your pages look better when shared on social media platforms like Facebook, Twitter, LinkedIn.

```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description for social sharing.">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page.html">
```

* `og:title`: The headline shown in the social post.
* `og:description`: The summary under the title.
* `og:image`: A preview image.
* `og:url`: Canonical link to your page.

These help control how your content appears when shared.

---

## JSON-LD (Linked Data for SEO)

JSON-LD (JavaScript Object Notation for Linked Data) is a way to embed structured data in your HTML to improve SEO. Google and other search engines use it to generate rich results (like stars, prices, events).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is SEO?",
  "author": {
    "@type": "Person",
    "name": "Jane Doe"
  },
  "datePublished": "2024-07-10"
}
</script>
```

**Explanation:**

* `@context`: tells search engines what vocabulary to use (Schema.org).
* `@type`: the type of content (e.g., Article, Product, Event).
* Other fields define who wrote it, when, and what it’s about.

---

## Summary

Metadata enhances how your site appears in search engines and social media platforms. The most important tags for SEO include:

* `<meta name="description">`: page summary for search listings
* Open Graph tags: improve social media previews
* JSON-LD: adds rich structured data for smarter indexing

Using proper metadata is a low-effort, high-impact way to improve your page visibility and engagement.
