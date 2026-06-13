# 013 Basic Operations

Basic operations on data structures like lists, tuples, and dictionaries involve accessing, modifying, adding, and removing elements. For students in the rfSE Club, mastering these operations is essential for manipulating datasets in scientific applications, such as organizing experiment results or managing simulation data.

## Operations on Lists

- **Accessing**: Use index `list[index]` or slicing `list[start:stop:step]`.
- **Modifying**: Assign new values to indices or use methods like `append()`, `insert()`, `pop()`, `remove()`.
- **Adding**: Use `append()` for single items, `extend()` or `+` for multiple items.
- **Removing**: Use `pop(index)`, `remove(item)`, or `clear()` to empty the list.

**Example**:

```python
fruits = ['apple', 'banana', 'orange']
print(fruits[1])  # Output: banana
fruits[1] = 'mango'  # Modify
print(fruits)  # Output: ['apple', 'mango', 'orange']
fruits.append('grape')  # Add single item
print(fruits)  # Output: ['apple', 'mango', 'orange', 'grape']
fruits.extend(['kiwi', 'pear'])  # Add multiple items
print(fruits)  # Output: ['apple', 'mango', 'orange', 'grape', 'kiwi', 'pear']
fruits.pop(2)  # Remove item at index 2
print(fruits)  # Output: ['apple', 'mango', 'grape', 'kiwi', 'pear']
fruits.remove('grape')  # Remove specific item
print(fruits)  # Output: ['apple', 'mango', 'kiwi', 'pear']
```

## Operations on Tuples

- **Accessing**: Use index `tuple[index]` or slicing `tuple[start:stop:step]`.
- **Modifying**: Not possible (tuples are immutable), but you can create a new tuple.
- **Adding**: Concatenate tuples using `+`.
- **Removing**: Not possible directly; create a new tuple with desired elements via slicing.

**Example**:

```python
data = ('sample1', 100, 3.14)
print(data[0])  # Output: sample1
print(data[1:3])  # Output: (100, 3.14)
new_data = data + ('sample2',)  # Concatenate
print(new_data)  # Output: ('sample1', 100, 3.14, 'sample2')
filtered_data = data[:2]  # Remove by slicing
print(filtered_data)  # Output: ('sample1', 100)
```

## Operations on Dictionaries

- **Accessing**: Use `dict[key]` or `dict.get(key, default)` to retrieve values.
- **Modifying**: Assign new values to keys `dict[key] = value`.
- **Adding**: Assign a value to a new key.
- **Removing**: Use `pop(key)`, `del dict[key]`, or `clear()` to empty the dictionary.

**Example**:

```python
student = {'name': 'Aariv', 'grade': 'A', 'age': 12}
print(student['name'])  # Output: Aariv
print(student.get('grade', 'Not found'))  # Output: A
student['grade'] = 'A+'  # Modify
print(student)  # Output: {'name': 'Aariv', 'grade': 'A+', 'age': 12}
student['school'] = 'Science Academy'  # Add
print(student)  # Output: {'name': 'Aariv', 'grade': 'A+', 'age': 12, 'school': 'Science Academy'}
student.pop('age')  # Remove
print(student)  # Output: {'name': 'Aariv', 'grade': 'A+', 'school': 'Science Academy'}
```

## Best Practices

- Use `get()` for dictionaries to avoid `KeyError`.
- Validate indices to prevent `IndexError` in lists and tuples.
- Prefer list methods (`append`, `pop`) over manual concatenation for efficiency.
- Use tuples for immutable data to ensure data integrity.
- Keep operations clear and minimal to maintain readable code.

**Example from Provided Code**:

```python
# List operations
vegbasket = ['tomato', 'paneer', 'onion', 'mushroom']
vegbasket[1] = 'bottle gourd'  # Modify
vegbasket.pop(2)  # Remove
print(vegbasket)  # Output: ['tomato', 'bottle gourd', 'mushroom']

# Dictionary operations
rifaat = {
    'firstname': 'rifaat',
    'lastname': 'ahmed',
    'age': 11,
    'fav_food': 'pasta'
}
print(rifaat['firstname'] + rifaat['lastname'])  # Access: rifaatahmed
rifaat['fav_food'] = 'Pizza'  # Modify
rifaat['city'] = 'Hyderabad'  # Add
print(rifaat)  # Output: {'firstname': 'rifaat', 'lastname': 'ahmed', 'age': 11, 'fav_food': 'Pizza', 'city': 'Hyderabad'}
```

## Practice Task

Write a Python script that:

1. Creates a list of three experiment samples, a tuple of three measurements, and a dictionary with two sample attributes.
2. Modifies the second list item, adds a new item, and removes one.
3. Concatenates a new value to the tuple.
4. Updates a dictionary value and adds a new key-value pair.
5. Prints all modified structures.

**Solution**:

```python
# List operations
samples = ['sampleA', 'sampleB', 'sampleC']
samples[1] = 'sampleX'  # Modify
samples.append('sampleD')  # Add
samples.pop(2)  # Remove
print(f"Modified list: {samples}")

# Tuple operations
measurements = (10.5, 20.3, 15.7)
new_measurements = measurements + (25.0,)  # Concatenate
print(f"Modified tuple: {new_measurements}")

# Dictionary operations
sample_data = {'id': 'A1', 'type': 'liquid'}
sample_data['type'] = 'solid'  # Modify
sample_data['volume'] = 100  # Add
print(f"Modified dictionary: {sample_data}")
```
