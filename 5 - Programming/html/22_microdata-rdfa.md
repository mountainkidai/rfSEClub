# Microdata and RDFa in HTML

Structured data helps search engines understand your content better. **Microdata** and **RDFa** are two ways to add structured data directly into your HTML.

They are like adding labels to your content so search engines can read your pages more intelligently.

---

## Simple Explanation

Imagine you're organizing a shelf of books at home. You know what each book is about, but if someone else comes in, they might not understand which one is a novel, a science book, or a cookbook unless you label them.

Structured data is like putting labels on your books so Google (and other search engines) also knows what's what. It helps computers "read" and "understand" your web pages like a human would.

Microdata and RDFa are two different ways of adding these helpful labels right into your HTML.

## What is Structured Data?

Structured data is extra information added to your HTML that describes your content — like the name of a person, the rating of a product, or the date of an event — in a way that search engines can understand.

Think of it as tagging your content with meaning.

---

## 1. Microdata

**Definition:** Microdata uses special HTML attributes to label content using vocabularies like [schema.org](https://schema.org/).

### Basic Syntax

* `itemscope`: Declares that a part of the HTML is a specific item
* `itemtype`: Specifies the type of item (e.g., Person, Product)
* `itemprop`: Defines a property of the item

### Example

```html
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">Alice Johnson</span>
  <img itemprop="image" src="alice.jpg" alt="Alice">
  <span itemprop="jobTitle">Software Engineer</span>
</div>
```

### Explanation

* This tells search engines: “This section is about a Person.”
* It defines their name, image, and job title.

### Use Cases

* People
* Products
* Articles
* Reviews
* Recipes

---

## 2. RDFa (Resource Description Framework in Attributes)

**Definition:** RDFa is another way to add semantic information to HTML using attributes like `vocab`, `typeof`, and `property`.

### Basic Syntax

* `vocab`: Base vocabulary URL
* `typeof`: Type of the entity
* `property`: Describes properties of the entity

### Example

```html
<div vocab="https://schema.org/" typeof="Person">
  <span property="name">Bob Smith</span>
  <img property="image" src="bob.jpg" alt="Bob">
  <span property="jobTitle">UX Designer</span>
</div>
```

### Explanation

* Similar to Microdata but uses different attribute names.
* Based on RDF (used more in semantic web and linked data).

---

## Microdata vs RDFa

| Feature        | Microdata            | RDFa                           |
| -------------- | -------------------- | ------------------------------ |
| Standard       | HTML5 extension      | Based on RDF                   |
| Readability    | Easier for beginners | More powerful for complex data |
| Vocabulary Use | schema.org           | schema.org and more            |

---

## Why Use Structured Data?

* Helps with **rich results** (stars, prices, events in Google)
* Improves SEO
* Gives search engines clear context
* Makes your site more discoverable

---

## Summary

Structured data like Microdata and RDFa gives your content more meaning for machines, without changing how it looks to users.

Both are supported by [schema.org](https://schema.org/) and are widely recognized by search engines.
