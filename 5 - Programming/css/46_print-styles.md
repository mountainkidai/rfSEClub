# **Print Styles**

When creating web pages, it's important to think about how they will appear when printed. Print styles allow you to customize the appearance of a webpage specifically for printing using the `@media print` CSS rule.

## What is `@media print`?

`@media print` is a special media query in CSS that targets styles applied when a webpage is printed. It helps hide unwanted elements (like navigation menus, sidebars, or ads), adjust layouts, and ensure the printed output is clean and professional.

### Example

```css
@media print {
  body {
    font-size: 12pt;
    color: black;
  }

  nav, footer, .no-print {
    display: none;
  }

  article {
    width: 100%;
    margin: 0;
  }
}
```

### Explanation of the Example

* `font-size: 12pt` and `color: black` ensures good readability in print.
* `display: none` on `nav`, `footer`, and `.no-print` hides those elements during printing.
* `article` is set to full width with no margins to use space efficiently.

## Why Print Styles Matter

* Many users like to print articles, invoices, or documentation.
* Default styles may waste ink or paper.
* Hiding unnecessary content makes printouts cleaner.

## Optimizing for PDF Output

When users print to PDF (common in browsers), print styles improve PDF clarity and structure:

* Ensure background colors don’t obscure text.
* Remove animations or transitions.
* Use page-break-related properties (`break-before`, `break-after`, `break-inside`) to manage layout across pages.

### Example for page breaks

```css
@media print {
  h1 {
    break-before: page;
  }

  .page-break {
    page-break-before: always;
  }
}
```

This helps prevent content from being awkwardly split when printed or exported to PDF.

## Summary

* Use `@media print` to define print-specific styles.
* Hide non-essential elements.
* Optimize fonts, spacing, and colors for paper.
* Use page-break rules for better multi-page formatting.
