# PHASE 1 — HTML ENGINEERING

> Before CSS.
>
> Before JavaScript.
>
> Before React.
>
> There is HTML.

---

# Why This Phase Exists

Most developers think HTML is:

```html
<h1>Hello World</h1>
<p>Some text</p>
<button>Click Me</button>
```

They see HTML as tags.

This is wrong.

HTML is not a styling language.

HTML is not a programming language.

HTML is not a layout system.

HTML is:

```text
A Document Description Language
```

Its purpose is to describe:

```text
Meaning
Structure
Relationships
Content
```

to both:

- Humans
- Machines

A browser, search engine, screen reader, AI agent, and crawler should all understand the same document.

That is the true purpose of HTML.

---

# The Fundamental Question

Imagine CSS disappears.

Imagine JavaScript disappears.

What remains?

Only HTML.

Would the document still make sense?

If yes:

```text
Your HTML is good.
```

If no:

```text
Your HTML is broken.
```

HTML should describe information.

Everything else is enhancement.

---

# Learning Objectives

By the end of this phase you should understand:

- Why HTML exists
- How documents are structured
- Semantic HTML
- Accessibility fundamentals
- Forms
- Metadata
- SEO foundations
- Browser interpretation of HTML
- Modern HTML APIs
- Web Components foundations

---

# Mental Model

HTML is not:

```text
How a website looks
```

HTML is:

```text
What a website means
```

CSS answers:

```text
How it looks
```

JavaScript answers:

```text
How it behaves
```

HTML answers:

```text
What it is
```

---

# PHASE ROADMAP

---

# 1.1 What Is HTML?

## Topics

- History of HTML
- Documents before HTML
- HyperText
- Markup Languages
- Evolution of HTML

## Questions

Why was HTML invented?

What problem did it solve?

Why did the web need markup?

---

# 1.2 Anatomy of a Web Page

Every page starts with:

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body></body>
</html>
```

Understand:

- Document
- Root element
- Metadata section
- Content section

Why does every page have this structure?

---

# 1.3 Elements

Topics:

- Opening tags
- Closing tags
- Self-closing elements
- Nesting
- Parent-child relationships

Examples:

```html
<h1>Title</h1>

<p>Paragraph</p>

<img src="image.jpg" />
```

Questions:

What is an element?

How does the browser interpret elements?

---

# 1.4 Attributes

Topics:

- Global attributes
- Element attributes
- IDs
- Classes
- Data attributes

Examples:

```html
<input type="email" />

<img src="logo.png" />

<button disabled></button>
```

Questions:

How do attributes modify behavior?

How does the browser process them?

---

# 1.5 Document Structure

The most important HTML skill.

Topics:

```html
<header>
  <nav>
    <main>
      <article>
        <section>
          <aside>
            <footer></footer>
          </aside>
        </section>
      </article>
    </main>
  </nav>
</header>
```

Questions:

What is the structure of information?

How should content be organized?

---

# 1.6 Headings

Topics:

```html
<h1>
  <h2>
    <h3>
      <h4>
        <h5>
          <h6></h6>
        </h5>
      </h4>
    </h3>
  </h2>
</h1>
```

Questions:

Why do headings exist?

Why should there only be one primary heading?

How do search engines use heading structures?

---

# 1.7 Text Content

Topics:

```html
<p>
  <strong>
    <em>
      <blockquote>
        <code>
          <pre></pre>
        </code></blockquote></em
  ></strong>
</p>
```

Questions:

How do we communicate meaning through text?

What is semantic emphasis?

---

# 1.8 Lists

Topics:

```html
<ul>
  <ol>
    <li>
      <dl>
        <dt></dt>
        <dd></dd>
      </dl>
    </li>
  </ol>
</ul>
```

Questions:

When should information be a list?

When should it not?

---

# 1.9 Links

The invention that created the web.

Topics:

```html
<a></a>
```

Attributes:

```html
href target rel download
```

Questions:

Why are hyperlinks revolutionary?

How does navigation work?

---

# 1.10 Images

Topics:

```html
<img /> <picture> <source /></picture>
```

Attributes:

```html
src alt width height loading
```

Questions:

What is alternative text?

Why do images need dimensions?

Why do images affect performance?

---

# 1.11 Audio & Video

Topics:

```html
<audio>
  <video>
    <track />
  </video>
</audio>
```

Questions:

How does media streaming work?

How do browsers handle media?

---

# 1.12 Tables

Topics:

```html
<table>
  <thead></thead>
  <tbody></tbody>
  <tfoot>
    <tr>
      <td></td>
      <th></th>
    </tr>
  </tfoot>
</table>
```

Questions:

When should tables be used?

When should they never be used?

---

# 1.13 Forms

One of the most important areas in frontend engineering.

Topics:

```html
<form>
<input>
<textarea>
<select>
<option>
<button>
<label>
```

Input Types:

```html
text email password number date file checkbox radio
```

Questions:

How does form submission work?

What happens when a user clicks submit?

---

# 1.14 Form Validation

Topics:

```html
required pattern min max maxlength
```

Questions:

How does browser validation work?

Why validate before JavaScript?

---

# 1.15 Accessibility Foundations

Critical.

Topics:

- Screen readers
- Keyboard navigation
- Focus management
- Semantic elements

Questions:

Can someone use your site without a mouse?

Can someone use your site without seeing it?

---

# 1.16 ARIA

Topics:

```html
aria-label aria-hidden aria-expanded role
```

Questions:

When should ARIA be used?

When should ARIA NOT be used?

Golden Rule:

```text
Native HTML first.
ARIA second.
```

---

# 1.17 Metadata

Topics:

```html
<title>
<meta>
<link>
```

Examples:

```html
<meta charset="UTF-8" />

<meta name="viewport" />

<meta name="description" />
```

Questions:

How does metadata affect browsers?

How does metadata affect SEO?

---

# 1.18 Search Engine Foundations

Topics:

- Crawlability
- Indexability
- Metadata
- Structured content

Questions:

How do search engines understand pages?

How does semantic HTML improve rankings?

---

# 1.19 Structured Data

Topics:

```text
Schema.org
JSON-LD
Rich Results
```

Questions:

How do search engines understand products?

Events?

Organizations?

Articles?

---

# 1.20 HTML Performance

Topics:

- Resource discovery
- Preload
- Prefetch
- Lazy loading

Questions:

How does HTML affect page speed?

Why can HTML alone improve performance?

---

# 1.21 Browser Parsing Behavior

Topics:

- Parser blocking
- Script loading
- Async scripts
- Deferred scripts

Questions:

Why can one script freeze rendering?

How does the browser parse documents?

---

# 1.22 HTML Security

Topics:

- Form security
- Input handling
- Injection concepts
- Content Security Policy basics

Questions:

Can user input be trusted?

Why is input dangerous?

---

# 1.23 Shadow DOM

Introduction to modern component systems.

Topics:

- Encapsulation
- Shadow roots
- Style isolation

Questions:

Why do Web Components exist?

---

# 1.24 Web Components

Topics:

- Custom Elements
- Shadow DOM
- Templates
- Slots

Questions:

Can websites create their own HTML elements?

---

# 1.25 HTML for AI Agents

Future-focused engineering.

Topics:

- Machine-readable content
- Semantic structure
- Knowledge extraction

Questions:

How do AI systems understand webpages?

Why does semantic HTML matter more than ever?

---

# Completion Project

Build:

```text
Personal Knowledge Website
```

Requirements:

- Semantic structure
- Navigation
- Forms
- Accessibility
- Metadata
- Structured data
- Images
- Articles

Restrictions:

```text
No CSS
No JavaScript
```

Only HTML.

If the website still feels usable:

you understand HTML.

---

# Success Criteria

You can answer:

1. What is HTML?
2. Why was HTML invented?
3. What is semantic HTML?
4. Why does accessibility matter?
5. How do forms work?
6. How do search engines understand pages?
7. What is metadata?
8. What is structured data?
9. What is ARIA?
10. What is Shadow DOM?
11. What are Web Components?
12. Why is HTML still relevant?
13. Why should meaning come before styling?
14. Why should meaning come before behavior?

If you can answer those questions confidently, you understand HTML as an engineer rather than as a tag memorizer.
