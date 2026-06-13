## Check if a string contains only digits using regex

```js
function isOnlyDigits(str) {
    const regex = /^\d+$/;
    return regex.test(str);
}
console.log(isOnlyDigits("12345")); 
console.log(isOnlyDigits("123a45")); 
```

## Check if a string contains only letters using regex

```js
function isOnlyLetters(str) {
    const regex = /^[A-Za-z]+$/;
    return regex.test(str);
}
console.log(isOnlyLetters("Hello")); 
console.log(isOnlyLetters("Hello123")); 
```

## Check if a string is a valid email address using regex

```js
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
console.log(isValidEmail("test@example.com")); 
console.log(isValidEmail("test@example")); 
```

## Check if a string starts with a specific letter using regex

```js
function startsWithLetter(str, letter) {
    const regex = new RegExp(`^${letter}`);
    return regex.test(str);
}
console.log(startsWithLetter("Hello", "H")); 
console.log(startsWithLetter("Hello", "h")); 
```

## Check if a string ends with a specific letter using regex

```js
function endsWithLetter(str, letter) {
    const regex = new RegExp(`${letter}$`);
    return regex.test(str);
}
console.log(endsWithLetter("Hello", "o")); 
console.log(endsWithLetter("Hello", "O")); 
```

## Find all numbers in a string using regex

```js
function findNumbersInString(str) {
    const regex = /\d+/g;
    return str.match(regex) || [];
}
console.log(findNumbersInString("There are 2 apples and 3 oranges."));
```

## Replace all spaces with underscores using regex

```js
function replaceSpacesWithUnderscores(str) {
    const regex = /\s+/g;
    return str.replace(regex, "_");
}
console.log(replaceSpacesWithUnderscores("Hello World! How are you?"));
```

## Check if a string contains at least one uppercase letter using regex

```js
function containsUppercase(str) {
    const regex = /[A-Z]/;
    return regex.test(str);
}
console.log(containsUppercase("Hello"));
console.log(containsUppercase("hello"));
```

## Check if a string contains at least one lowercase letter using regex

```js
function containsLowercase(str) {
    const regex = /[a-z]/;
    return regex.test(str);
}
console.log(containsLowercase("Hello"));
console.log(containsLowercase("HELLO"));
```

## Check if a string contains at least one number using regex

```js
function containsNumber(str) {
    const regex = /\d/;
    return regex.test(str);
}
console.log(containsNumber("Hello123"));
console.log(containsNumber("Hello"));
```

## Check if a string contains at least one special character using regex

```js
function containsSpecialCharacter(str) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(str);
}
console.log(containsSpecialCharacter("Hello!"));
console.log(containsSpecialCharacter("Hello"));
```

## Validate a phone number format using regex

```js
function isValidPhoneNumber(phone) {
    const regex = /^\d{10}$/; ## Adjust the regex based on your phone number format
    return regex.test(phone);
}
console.log(isValidPhoneNumber("1234567890"));
console.log(isValidPhoneNumber("123-456-7890"));
```

## Validate a date format (DD/MM/YYYY) using regex

```js
function isValidDate(date) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
    return regex.test(date);
}
console.log(isValidDate("31/12/2023"));
console.log(isValidDate("31-12-2023"));
```

## Extract all words from a string using regex

```js
function extractWords(str) {
    const regex = /\b\w+\b/g;
    return str.match(regex) || [];
}
console.log(extractWords("Hello World! How are you?"));
```

## Check if a string is a valid URL using regex

```js
function isValidURL(url) {
    const regex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i;
    return regex.test(url);
}
console.log(isValidURL("https:##www.example.com"));
console.log(isValidURL("invalid-url"));
```
