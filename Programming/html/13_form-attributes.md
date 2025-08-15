# Form Attributes in HTML

Form attributes are vital tools that give additional meaning and functionality to form elements. They enhance usability, ensure data integrity, and make form handling more efficient for both browsers and developers.

---

## 1. `name` Attribute

**Definition:** Specifies the name of a form control, which is submitted with the form data.

**Purpose:**

* Acts as a **key** in the form’s key-value data pairs.
* Identifies the data on the server side or within JavaScript.

**Example:**

```html
<input type="text" name="username">
```

**Submitted Data:**

```txt
username=JohnDoe
```

---

## 2. `id` Attribute

**Definition:** Assigns a unique identifier to the form element.

**Purpose:**

* Connects `<label>` elements via the `for` attribute.
* Used for precise CSS styling or JavaScript selection.

**Example:**

```html
<input type="text" id="email">
<label for="email">Email</label>
```

**Behavior:** Clicking on the label focuses the associated input field.

---

## 3. `value` Attribute

**Definition:** Specifies the default or initial value of the input element.

**Purpose:**

* Preloads form fields with data.
* Useful in forms that edit previously entered values.

**Example:**

```html
<input type="text" name="city" value="Delhi">
```

**Output:**

The text field will show “Delhi” when the page loads.

---

## 4. `autocomplete` Attribute

**Definition:** Suggests whether the browser should autofill the input field.

**Common Values:**

* `on` — Enables autofill.
* `off` — Disables autofill.
* Specific values like `name`, `email`, `tel`, etc.

**Example:**

```html
<input type="email" name="userEmail" autocomplete="email">
```

**Behavior:** Browsers will attempt to fill in the user’s email based on stored form history.

---

## 5. `autofocus` Attribute

**Definition:** Automatically focuses this input field when the page is loaded.

**Purpose:**

* Directs user attention to a primary input field.
* Enhances user experience in forms.

**Example:**

```html
<input type="text" name="firstName" autofocus>
```

**Behavior:** Cursor is placed in this field as soon as the page loads.

---

## 6. `pattern` Attribute

**Definition:** Specifies a regular expression that input must match to be considered valid.

**Purpose:**

* Adds client-side validation without JavaScript.

**Example:**

```html
<input type="text" name="zipcode" pattern="\d{6}" required>
```

* ✅ Valid Input: `110001`
* ❌ Invalid Input: `abc123` (form won’t submit)

This ensures users provide a 6-digit number.

---

## 7. `method` Attribute

**Definition:** Specifies how to send form data to the server.

**Common Values:**

* `GET` — Appends form data to URL. Ideal for search queries.
* `POST` — Sends data in request body. Ideal for sensitive or large data.

**Example:**

```html
<form method="post">
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>
```

**Behavior:** Sends the `username` value securely to the server.

---

## 8. `action` Attribute

**Definition:** Specifies where to send the form data when submitted.

**Example:**

```html
<form action="/submit-form" method="post">
  <input type="text" name="name">
  <button type="submit">Send</button>
</form>
```

**Behavior:** The form submits data to the `/submit-form` URL.

---

## 9. `required` Attribute

**Definition:** Indicates that an input field must be filled before submitting the form.

**Example:**

```html
<input type="email" name="userEmail" required>
```

**Behavior:** Form cannot be submitted if the field is empty.

---

## 10. `readonly` Attribute

**Definition:** Makes an input field non-editable but still submits its value.

**Example:**

```html
<input type="text" name="userID" value="12345" readonly>
```

**Behavior:** User sees the value but cannot change it.

---

## Summary Table

| Attribute      | Description                              | Commonly Used With            |
| -------------- | ---------------------------------------- | ----------------------------- |
| `name`         | Key used in form submission              | `<input>`, `<textarea>`       |
| `id`           | Unique identifier for styling/JS/labels  | All form elements             |
| `value`        | Sets initial/pre-filled value            | `<input>`, `<textarea>`       |
| `autocomplete` | Helps browser autofill common fields     | Login/signup forms            |
| `autofocus`    | Focuses the field on page load           | First user interaction field  |
| `pattern`      | Regex pattern for client-side validation | Input fields with constraints |
| `method`       | Defines how data is sent                 | `<form>`                      |
| `action`       | Defines where data is sent               | `<form>`                      |
| `required`     | Ensures the field must be filled         | `<input>`, `<textarea>`       |
| `readonly`     | Makes field non-editable                 | `<input>`                     |
