# 009 String Slicing and Manipulation

String slicing and manipulation in Python allow you to extract, modify, and analyze parts of strings. For young scientists in the rfSE Club, these skills are vital for processing text data in scientific applications, such as parsing experimental data or formatting outputs.

## String Slicing

- Strings are sequences of characters, and slicing extracts a portion using the syntax `string[start:stop:step]`.
- **start**: Index to begin (inclusive, default 0).
- **stop**: Index to end (exclusive, default end of string).
- **step**: Increment between indices (default 1, negative for reverse).
- Negative indices count from the end of the string.

**Example**:

```python
name = "rifaat"
print(name[0])      # Output: r
print(name[3])      # Output: a
print(name[0:3])    # Output: rif
print(name[2:])     # Output: faat
print(name[-2])     # Output: t
print(name[-3:])    # Output: aat
print(name[::-1])   # Output: tafaar (reverses string)
print(name[::2])    # Output: rfa (every second character)
```

## String Manipulation

- Strings are **immutable**, meaning they cannot be changed in place, but you can create new strings.
- Common methods: `upper()`, `lower()`, `strip()`, `replace()`, `len()`.
- Use concatenation or formatting for combining strings (covered in 004).

**Example**:

```python
text = "  Python Programming  "
print(text.upper())         # Output: PYTHON PROGRAMMING
print(text.lower())         # Output: python programming
print(text.strip())         # Output: Python Programming
print(text.replace("Python", "AI"))  # Output: AI Programming
print(len(text))            # Output: 22
```

## Best Practices

- Use slicing for efficient substring extraction instead of loops.
- Combine slicing with string methods for flexible manipulation.
- Be cautious with index ranges to avoid `IndexError` (e.g., accessing beyond string length).
- Use negative indices for quick access to end-of-string data.

**Example from Provided Code**:

```python
name = 'rifaat'
print(name[0])      # Output: r
print(name[0:])     # Output: rifaat
print(name[2:])     # Output: faat
print(name[0:3])    # Output: rif
print(name[-2])     # Output: t
print(name[-3:])    # Output: aat
print(name[::-1])   # Output: tafaar
print(name[::-3])   # Output: tf

phone = '7896543790'
print('phone number ends with ' + phone[-4:])  # Output: phone number ends with 3790
```

## Practice Task

Write a Python script that:

1. Takes a user’s full name as input.
2. Prints the first three characters, last three characters, and the reversed name.
3. Converts the name to uppercase and checks its length.
4. Replaces any spaces in the name with underscores.

**Solution**:

```python
full_name = input("Enter your full name: ")

# Slicing
print(f"First three characters: {full_name[:3]}")
print(f"Last three characters: {full_name[-3:]}")
print(f"Reversed name: {full_name[::-1]}")

# Manipulation
print(f"Uppercase: {full_name.upper()}")
print(f"Length: {len(full_name)}")
print(f"With underscores: {full_name.replace(' ', '_')}")
```
