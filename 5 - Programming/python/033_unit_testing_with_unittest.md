# 033 Unit Testing with Unittest

Unit testing in Python involves testing individual components (units) of a program to ensure they work as expected. The `unittest` module provides a robust framework for creating and running tests. For students in the rfSE Club, mastering unit testing is critical for validating scientific programs, ensuring reliability in calculations, data processing, or simulations. The provided code includes a `unittest` example for testing a string capitalization function, which is used to illustrate key concepts. This section covers `unittest` in detail, including setup, test cases, assertions, and best practices.

## What is Unit Testing?

- **Unit Testing**: Testing the smallest testable parts of a program (e.g., functions, methods) in isolation to verify their correctness.
- **Purpose**: Catch bugs early, ensure code reliability, and facilitate refactoring.
- **unittest**: Python’s built-in testing framework, inspired by frameworks like JUnit, offering tools to define test cases, run tests, and report results.

## Key Components of `unittest`

- **Test Case**: A single test, defined as a method in a class that inherits from `unittest.TestCase`.
- **Assertions**: Methods like `assertEqual`, `assertTrue`, or `assertRaises` to check expected outcomes.
- **Test Suite**: A collection of test cases, automatically managed by `unittest`.
- **Test Runner**: Executes tests and reports results (e.g., pass/fail, errors).

## Setting Up a Unit Test

1. Import the `unittest` module and the code to test.
2. Create a class that inherits from `unittest.TestCase`.
3. Define test methods starting with `test_` (e.g., `test_my_function`).
4. Use assertion methods to verify outputs.
5. Run tests using `unittest.main()` or a test runner.

**Basic Example**:

```python
import unittest

def add_numbers(a, b):
    return a + b

class TestMathOperations(unittest.TestCase):
    def test_add_numbers(self):
        self.assertEqual(add_numbers(2, 3), 5)
        self.assertEqual(add_numbers(-1, 1), 0)

if __name__ == '__main__':
    unittest.main()
```

## Common Assertion Methods

- `assertEqual(a, b)`: Checks if `a == b`.
- `assertNotEqual(a, b)`: Checks if `a != b`.
- `assertTrue(x)`: Checks if `x` is `True`.
- `assertFalse(x)`: Checks if `x` is `False`.
- `assertRaises(exception, func, *args)`: Checks if `func(*args)` raises the specified exception.
- `assertAlmostEqual(a, b, places=7)`: Checks if `a` and `b` are equal within a given precision (useful for floats).

**Example with Assertions**:

```python
import unittest

def divide(a, b):
    return a / b

class TestDivision(unittest.TestCase):
    def test_division(self):
        self.assertEqual(divide(10, 2), 5.0)
        self.assertAlmostEqual(divide(3, 2), 1.5, places=5)

    def test_division_by_zero(self):
        with self.assertRaises(ZeroDivisionError):
            divide(10, 0)

if __name__ == '__main__':
    unittest.main()
```

## Test Setup and Teardown

- Use `setUp` and `tearDown` methods to prepare and clean up test environments.
- `setUp`: Runs before each test method (e.g., initialize data).
- `tearDown`: Runs after each test method (e.g., reset resources).

**Example**:

```python
import unittest

class TestExperiment(unittest.TestCase):
    def setUp(self):
        self.data = [1, 2, 3]
        print("Setting up test data")

    def tearDown(self):
        self.data = []
        print("Cleaning up test data")

    def test_sum(self):
        self.assertEqual(sum(self.data), 6)

if __name__ == '__main__':
    unittest.main()
```

## Organizing Tests

- **Test Files**: Place tests in separate files (e.g., `test_module.py`) from production code.
- **Test Naming**: Use descriptive names like `test_function_name_case` (e.g., `test_add_numbers_negative`).
- **Test Suites**: Group tests using `unittest.TestSuite()` for selective execution.

**Example**:

```python
import unittest

def calculate_average(numbers):
    return sum(numbers) / len(numbers) if numbers else 0

class TestCalculations(unittest.TestCase):
    def test_average_valid_list(self):
        self.assertEqual(calculate_average([1, 2, 3]), 2.0)

    def test_average_empty_list(self):
        self.assertEqual(calculate_average([]), 0)

if __name__ == '__main__':
    unittest.main()
```

## Running Tests

- Run tests from the command line:

```bash
python -m unittest test_module.py
```

- Use `-v` for verbose output:

```bash
python -m unittest -v test_module.py
```

- Discover all tests in a directory:

```bash
python -m unittest discover
```

## Best Practices

- Write small, focused tests for individual units (e.g., one function per test).
- Use descriptive test names to clarify what is being tested (e.g., `test_calculate_average_empty_list`).
- Test edge cases (e.g., empty inputs, negative numbers, invalid types).
- Use `setUp` and `tearDown` to avoid duplicating setup code.
- Run tests frequently during development to catch issues early.
- Aim for high test coverage but prioritize critical functionality.

**Example from Provided Code**:

```python
import unittest
import printcaptext

class TestPrintCapTest(unittest.TestCase):
    def test_word(self):
        text = 'python'
        result = printcaptext.fun(text)
        self.assertEqual(result, 'Python')

    def test_multiple_words(self):
        text = 'aariv python'
        result = printcaptext.fun(text)
        self.assertEqual(result, 'Aariv Python')

if __name__ == "__main__":
    unittest.main()
```

This tests a function `fun` in a module `printcaptext` that capitalizes words. Pylint might flag issues like a non-descriptive function name (`fun`). An improved version of the tested code could be:

```python
# printcaptext.py
def capitalize_text(text):
    """Capitalize the first letter of each word in the input text."""
    return text.title()
```

**Improved Test**:

```python
import unittest
import printcaptext

class TestCapitalizeText(unittest.TestCase):
    def setUp(self):
        self.text1 = "python"
        self.text2 = "aariv python"

    def test_single_word(self):
        result = printcaptext.capitalize_text(self.text1)
        self.assertEqual(result, "Python")

    def test_multiple_words(self):
        result = printcaptext.capitalize_text(self.text2)
        self.assertEqual(result, "Aariv Python")

    def test_empty_string(self):
        result = printcaptext.capitalize_text("")
        self.assertEqual(result, "")

if __name__ == "__main__":
    unittest.main()
```

## Practice Task

Write a Python script that:

1. Defines a function `calculate_volume(length, width, height)` that returns the volume of a rectangular prism.
2. Creates a test class `TestVolumeCalculation` with `unittest.TestCase`.
3. Includes tests for:
   - A valid volume calculation (e.g., `2, 3, 4` → `24`).
   - An edge case with zero dimensions (e.g., `2, 0, 4` → `0`).
   - An invalid input raising a `TypeError` (e.g., passing a string).
4. Uses `setUp` to initialize test data.

**Solution**:

```python
import unittest

def calculate_volume(length, width, height):
    """Calculate the volume of a rectangular prism."""
    return length * width * height

class TestVolumeCalculation(unittest.TestCase):
    def setUp(self):
        self.valid_inputs = (2, 3, 4)
        self.zero_inputs = (2, 0, 4)
        self.invalid_input = ("2", 3, 4)

    def test_valid_volume(self):
        result = calculate_volume(*self.valid_inputs)
        self.assertEqual(result, 24)

    def test_zero_dimension(self):
        result = calculate_volume(*self.zero_inputs)
        self.assertEqual(result, 0)

    def test_invalid_input(self):
        with self.assertRaises(TypeError):
            calculate_volume(*self.invalid_input)

if __name__ == "__main__":
    unittest.main()
```
