# 012 Dictionaries

Dictionaries in Python are mutable, unordered collections of key-value pairs, ideal for storing and retrieving data efficiently. For young scientists in the rfSE Club, dictionaries are crucial for organizing complex datasets, such as experiment results or user profiles, in scientific programming.

## Creating Dictionaries

- Defined using curly braces `{}`, with keys and values separated by colons (`:`) and pairs separated by commas.
- Keys must be immutable (e.g., strings, numbers, tuples); values can be any data type.

**Example**:

```python
rifaat = {
    'firstname': 'rifaat',
    'lastname': 'ahmed',
    'age': 11,
    'fav_food': 'pasta'
}
print(rifaat)  # Output: {'firstname': 'rifaat', 'lastname': 'ahmed', 'age': 11, 'fav_food': 'pasta'}
```

## Accessing and Modifying Dictionaries

- Access values using keys with square brackets `dict[key]` or the `get()` method.
- Modify values by assigning to a key; add new key-value pairs similarly.
- Remove items using `pop(key)` or `del dict[key]`.

**Example**:

```python
atij = {
    'firstname': 'atij',
    'lastname': 'hyd',
    'age': 22,
    'fav_food': 'apple'
}
print(atij['firstname'])  # Output: atij
atij['fav_food'] = 'Pizza'  # Modify value
print(atij)  # Output: {'firstname': 'atij', 'lastname': 'hyd', 'age': 22, 'fav_food': 'Pizza'}
atij['city'] = 'Hyderabad'  # Add new key-value pair
print(atij)  # Output: {'firstname': 'atij', 'lastname': 'hyd', 'age': 22, 'fav_food': 'Pizza', 'city': 'Hyderabad'}
del atij['age']  # Remove key-value pair
print(atij)  # Output: {'firstname': 'atij', 'lastname': 'hyd', 'fav_food': 'Pizza', 'city': 'Hyderabad'}
```

## Nested Dictionaries

- Dictionaries can contain other dictionaries or lists as values, enabling complex data structures.
- Access nested values using multiple keys or indices.

**Example**:

```python
sixthclass_data = {
    'rifaat': {
        'firstname': 'rifaat',
        'lastname': 'ahmed',
        'age': 11,
        'fav_food': {
            'softdrink': 'maza',
            'snack': 'doritos',
            'pizza': 'mushroom & veg pizza'
        }
    }
}
print(sixthclass_data['rifaat']['fav_food']['snack'])  # Output: doritos
```

## Common Dictionary Methods

- `get(key, default)`: Returns value for key or default if key not found.
- `keys()`: Returns all keys.
- `values()`: Returns all values.
- `items()`: Returns key-value pairs as tuples.
- `pop(key)`: Removes and returns the value for the key.

**Example**:

```python
student = {'name': 'Aariv', 'grade': 'A'}
print(student.get('name'))  # Output: Aariv
print(student.keys())      # Output: dict_keys(['name', 'grade'])
print(student.values())    # Output: dict_values(['Aariv', 'A'])
print(student.items())     # Output: dict_items([('name', 'Aariv'), ('grade', 'A')])
student.pop('grade')
print(student)  # Output: {'name': 'Aariv'}
```

## Best Practices

- Use descriptive keys to make dictionaries self-explanatory (e.g., `firstname` instead of `fn`).
- Use `get()` to safely access keys and avoid `KeyError`.
- Leverage nested dictionaries for structured data but keep nesting shallow for readability.
- Iterate over `items()` for key-value pair processing in loops.

**Example from Provided Code**:

```python
rifaat = {
    'firstname': 'rifaat',
    'lastname': 'ahmed',
    'age': 11,
    'password': '@rifaat',
    'fav_food': 'pasta'
}
print(rifaat['firstname'] + rifaat['lastname'])  # Output: rifaatahmed
atij = {
    'firstname': 'atij',
    'lastname': 'hyd',
    'age': 22,
    'fav_food': 'apple'
}
atij['fav_food'] = 'Pizza'
print('after changing favorite food of atij', atij)  # Output: {'firstname': 'atij', 'lastname': 'hyd', 'age': 22, 'fav_food': 'Pizza'}
```

## Practice Task

Write a Python script that:

1. Creates a dictionary for a scientist with keys for `name`, `field`, `years_experience`, and `projects` (a list of project names).
2. Prints the scientist’s name and field using `get()`.
3. Adds a new key `lab` and modifies `projects` to add a new project.
4. Iterates over the dictionary to print all key-value pairs.

**Solution**:

```python
scientist = {
    'name': 'Marie Curie',
    'field': 'Physics',
    'years_experience': 20,
    'projects': ['Radium Study', 'Polonium Research']
}
print(scientist.get('name', 'Unknown'))  # Output: Marie Curie
print(scientist.get('field', 'Unknown'))  # Output: Physics

scientist['lab'] = 'Paris Lab'  # Add new key
scientist['projects'].append('X-Ray Development')  # Modify projects list
print(scientist)  # Output: {'name': 'Marie Curie', 'field': 'Physics', 'years_experience': 20, 'projects': ['Radium Study', 'Polonium Research', 'X-Ray Development'], 'lab': 'Paris Lab'}

for key, value in scientist.items():
    print(f"{key}: {value}")
```
