# Internationalization (Intl) in JavaScript

JavaScript provides a powerful built-in object called `Intl` for **internationalization**, which means formatting messages, numbers, dates, and times in a way that’s appropriate for different locales (countries/languages).

This is helpful for making web apps that support multiple languages and regions.

---

## 1. Why Use `Intl`?

Different countries format things differently:

* Dates: `MM/DD/YYYY` (US) vs `DD/MM/YYYY` (India, UK)
* Currency: `$1,000.00` vs `₹1,000.00` vs `1.000,00 €`
* Languages: `Hello` vs `Hola` vs `Namaste`

Using `Intl`, you don’t have to hard-code this — JavaScript can do it for you!

---

## 2. Intl.NumberFormat

Used for formatting numbers, especially currencies and percentages.

```js
const number = 1234567.89;

const usFormatter = new Intl.NumberFormat('en-US');
console.log(usFormatter.format(number)); // "1,234,567.89"

const indiaFormatter = new Intl.NumberFormat('en-IN');
console.log(indiaFormatter.format(number)); // "12,34,567.89"

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR'
});
console.log(currencyFormatter.format(1234.56)); // "₹1,234.56"
```

---

## 3. Intl.DateTimeFormat

Used to format date and time according to locale.

```js
const date = new Date();

const usDate = new Intl.DateTimeFormat('en-US').format(date);
console.log(usDate); // e.g., "7/17/2025"

const indiaDate = new Intl.DateTimeFormat('en-IN', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});
console.log(indiaDate.format(date));
// "Thursday, 17 July 2025"
```

---

## 4. Intl.Collator

Used to compare strings based on locale-specific sort order.

```js
const names = ['Zara', 'Anjali', 'Mélanie'];

names.sort(new Intl.Collator('fr').compare);
console.log(names); // sorted according to French rules
```

---

## 5. Intl.PluralRules

Used to decide whether to use singular/plural forms in a given language.

```js
const pr = new Intl.PluralRules('en-US');
console.log(pr.select(1)); // "one"
console.log(pr.select(2)); // "other"
```

---

## Summary

* `Intl` is used for **localizing** your app for different languages and countries
* `Intl.NumberFormat` for numbers and currency
* `Intl.DateTimeFormat` for dates
* `Intl.Collator` for sorting text
* `Intl.PluralRules` for singular/plural logic

This helps make your applications **user-friendly globally** with very little effort!
