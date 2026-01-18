/**
 * Python Language Data
 * 
 * Comprehensive Python programming tutorial data.
 * Organized by categories with topics, explanations, and practice questions.
 */

export const pythonCoding = {
  language: "Python",
  categories: [
    {
      id: "basics",
      title: "Python Basics",
      topics: [
        {
          id: "python-intro",
          title: "Python Intro",
          explanation: "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python emphasizes code readability with its clean syntax. It's widely used in web development, data science, artificial intelligence, automation, and more. Python's philosophy is 'Simple is better than complex', making it perfect for beginners.",
          syntax: "Python uses indentation to define code blocks instead of curly braces. No semicolons needed. Python is dynamically typed - you don't need to declare variable types.",
          examples: [
            {
              title: "Hello World Program",
              description: "Basic Python program structure",
              code: `print("Hello, World!")`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function is used to display output in Python?",
              type: "fill",
              starterCode: `___("Hello, World!")`,
              answer: "print",
            },
            {
              question: "Complete the Python hello world program",
              type: "complete",
              starterCode: `print(___"Hello, World!"___)`,
              answer: '"Hello, World!"',
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `print("Python is awesome")`,
              answer: "Python is awesome",
            },
          ],
        },
        {
          id: "python-get-started",
          title: "Python Get Started",
          explanation: "To start programming in Python, you need to install Python on your computer. Python can be downloaded from python.org. Once installed, you can write Python code in a text editor and run it using the Python interpreter. You can also use Python interactively in the command line or use IDEs like PyCharm, VS Code, or Jupyter Notebooks.",
          syntax: "Run Python file: python filename.py\nInteractive mode: python (then type code)\nPython files use .py extension",
          examples: [
            {
              title: "Running Python Code",
              description: "How to create and run a Python program",
              code: `# Save as hello.py
print("Hello, Python!")

# Run: python hello.py
# Output: Hello, Python!`,
            },
          ],
          practiceQuestions: [
            {
              question: "What file extension do Python source files use?",
              type: "fill",
              starterCode: `# File: program.___`,
              answer: "py",
            },
            {
              question: "What command runs a Python file named 'test.py'?",
              type: "complete",
              starterCode: `___ test.py`,
              answer: "python",
            },
            {
              question: "What is the output of this program?",
              type: "predict",
              starterCode: `print("Welcome to Python")
print("Let's code!")`,
              answer: "Welcome to Python\nLet's code!",
            },
          ],
        },
        {
          id: "python-syntax",
          title: "Python Syntax",
          explanation: "Python syntax is clean and readable. Unlike many languages, Python uses indentation (whitespace) to define code blocks instead of curly braces. Statements don't need semicolons. Python is case-sensitive. Comments start with #. This simple syntax makes Python code easy to read and write.",
          syntax: "Indentation defines blocks (typically 4 spaces). No semicolons. Comments use #. Case-sensitive. Use colons (:) after control statements.",
          examples: [
            {
              title: "Basic Syntax Rules",
              description: "Python syntax fundamentals",
              code: `# This is a comment
name = "Python"  # No semicolon needed
if name == "Python":
    print("Hello, Python!")  # Indentation shows this is inside if block`,
            },
          ],
          practiceQuestions: [
            {
              question: "What character starts a comment in Python?",
              type: "fill",
              starterCode: `___ This is a comment`,
              answer: "#",
            },
            {
              question: "Complete the if statement with proper syntax",
              type: "complete",
              starterCode: `x = 5
___ x > 0___
    print("Positive")`,
              answer: "if x > 0:",
            },
            {
              question: "How many spaces are typically used for indentation?",
              type: "fill",
              starterCode: `# Python uses ___ spaces for indentation`,
              answer: "4",
            },
          ],
        },
        {
          id: "python-output",
          title: "Python Output",
          explanation: "The print() function is used to display output in Python. It can print text, numbers, variables, and multiple values. You can use print() to show results, debug code, or communicate with users. Python automatically adds a newline after each print statement, but you can control this behavior.",
          syntax: "print(value1, value2, ...)\nprint() can take multiple arguments separated by commas. Use sep and end parameters to customize output.",
          examples: [
            {
              title: "Printing Output",
              description: "Using print to display text and variables",
              code: `print("Hello, World!")
name = "Python"
age = 30
print("Language:", name, "Age:", age)
# Output: Hello, World!
# Output: Language: Python Age: 30`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the print statement",
              type: "fill",
              starterCode: `___("Hello, Python!")`,
              answer: "print",
            },
            {
              question: "Print multiple values separated by commas",
              type: "complete",
              starterCode: `name = "Alice"
age = 25
print(name, ___)`,
              answer: "age",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `print("Python")
print("is")
print("awesome")`,
              answer: "Python\nis\nawesome",
            },
          ],
        },
        {
          id: "python-comments",
          title: "Python Comments",
          explanation: "Comments are lines in your code that Python ignores. They're used to explain what your code does, making it easier for others (and yourself) to understand. Comments start with # and can be on their own line or at the end of a code line. Good comments explain 'why', not 'what'.",
          syntax: "# This is a single-line comment\n# Comments can be on separate lines\ncode = 5  # Or at the end of a line",
          examples: [
            {
              title: "Using Comments",
              description: "Different ways to write comments",
              code: `# This is a comment explaining the code
name = "Python"  # Inline comment

# Multi-line comments
# are written with multiple
# hash symbols`,
            },
          ],
          practiceQuestions: [
            {
              question: "What character starts a comment in Python?",
              type: "fill",
              starterCode: `___ This is a comment`,
              answer: "#",
            },
            {
              question: "Add a comment explaining this code",
              type: "complete",
              starterCode: `___ Calculate the sum
total = 10 + 20`,
              answer: "# Calculate the sum",
            },
            {
              question: "Which line will be executed?",
              type: "predict",
              starterCode: `print("Hello")
# print("This won't print")
print("World")`,
              answer: "Hello\nWorld",
            },
          ],
        },
        {
          id: "python-variables",
          title: "Python Variables",
          explanation: "Variables are containers that store data values. In Python, you create a variable by assigning a value to a name using the = operator. Python is dynamically typed, meaning you don't need to declare the variable type - Python figures it out automatically. Variable names are case-sensitive and can contain letters, numbers, and underscores.",
          syntax: "variable_name = value\nVariables are created when you assign a value. No type declaration needed. Use descriptive names.",
          examples: [
            {
              title: "Creating Variables",
              description: "Different types of variables",
              code: `# Integer variable
age = 25

# String variable
name = "Python"

# Float variable
price = 19.99

# Boolean variable
is_active = True

print(age, name, price, is_active)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a variable named 'count' with value 10",
              type: "fill",
              starterCode: `___ = 10
print(count)`,
              answer: "count",
            },
            {
              question: "Complete the variable assignment",
              type: "complete",
              starterCode: `message = ___
print(message)`,
              answer: '"Hello"',
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `x = 5
y = 10
result = x + y
print(result)`,
              answer: "15",
            },
          ],
        },
        {
          id: "python-data-types",
          title: "Python Data Types",
          explanation: "Python has several built-in data types. The most common are: int (integers), float (decimal numbers), str (strings/text), bool (True/False), list (ordered collection), tuple (immutable collection), dict (key-value pairs), and set (unique collection). Python automatically determines the type when you assign a value, but you can check types using type() or convert between types.",
          syntax: "Common types: int, float, str, bool, list, tuple, dict, set\nCheck type: type(variable)\nConvert: int(), float(), str(), bool()",
          examples: [
            {
              title: "Data Types Examples",
              description: "Different Python data types",
              code: `# Integer
age = 25
print(type(age))  # <class 'int'>

# Float
price = 19.99
print(type(price))  # <class 'float'>

# String
name = "Python"
print(type(name))  # <class 'str'>

# Boolean
is_active = True
print(type(is_active))  # <class 'bool'>`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the data type of 3.14?",
              type: "fill",
              starterCode: `x = 3.14
print(type(x))  # <class '___'>`,
              answer: "float",
            },
            {
              question: "Convert the string '25' to an integer",
              type: "complete",
              starterCode: `age_str = "25"
age = ___(age_str)
print(age)`,
              answer: "int",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `x = 10
y = "20"
result = x + int(y)
print(result)`,
              answer: "30",
            },
          ],
        },
        {
          id: "python-numbers",
          title: "Python Numbers",
          explanation: "Python supports three numeric types: integers (int), floating point numbers (float), and complex numbers (complex). Integers are whole numbers without decimals. Floats are numbers with decimal points. Complex numbers have real and imaginary parts. Python automatically handles number operations and type conversions.",
          syntax: "int: 10, -5, 0\nfloat: 3.14, -2.5, 0.0\ncomplex: 3+5j\nOperations: +, -, *, /, //, %, **",
          examples: [
            {
              title: "Number Types",
              description: "Working with different number types",
              code: `# Integer
x = 10
print(type(x))  # <class 'int'>

# Float
y = 3.14
print(type(y))  # <class 'float'>

# Operations
result = x + y
print(result)  # 13.14`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the result of 10 / 3?",
              type: "predict",
              starterCode: `result = 10 / 3
print(result)`,
              answer: "3.3333333333333335",
            },
            {
              question: "Use integer division to get whole number result",
              type: "complete",
              starterCode: `result = 10 ___ 3
print(result)  # Should be 3`,
              answer: "//",
            },
            {
              question: "Calculate 2 to the power of 3",
              type: "fill",
              starterCode: `result = 2 ___ 3
print(result)`,
              answer: "**",
            },
          ],
        },
        {
          id: "python-casting",
          title: "Python Casting",
          explanation: "Casting is converting one data type to another. Python provides built-in functions for type conversion: int(), float(), str(), bool(). This is useful when you need to perform operations that require specific types, like converting user input (which is always a string) to a number for calculations.",
          syntax: "int(value) - converts to integer\nfloat(value) - converts to float\nstr(value) - converts to string\nbool(value) - converts to boolean",
          examples: [
            {
              title: "Type Casting",
              description: "Converting between different types",
              code: `# String to integer
age_str = "25"
age = int(age_str)
print(age)  # 25

# Integer to string
count = 10
count_str = str(count)
print("Count: " + count_str)  # Count: 10

# Float to integer
price = 19.99
price_int = int(price)
print(price_int)  # 19`,
            },
          ],
          practiceQuestions: [
            {
              question: "Convert the string '42' to an integer",
              type: "fill",
              starterCode: `num_str = "42"
num = ___(num_str)
print(num)`,
              answer: "int",
            },
            {
              question: "Convert integer 100 to a string",
              type: "complete",
              starterCode: `number = 100
text = ___(number)
print("Number: " + text)`,
              answer: "str",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `x = "5"
y = "3"
result = int(x) + int(y)
print(result)`,
              answer: "8",
            },
          ],
        },
        {
          id: "python-strings",
          title: "Python Strings",
          explanation: "Strings are sequences of characters enclosed in quotes. Python strings are immutable (cannot be changed after creation). You can use single quotes, double quotes, or triple quotes. Strings support many operations like concatenation (+), repetition (*), slicing, and various built-in methods for manipulation.",
          syntax: "str = 'text' or \"text\" or '''text'''\nConcatenation: str1 + str2\nRepetition: str * n\nSlicing: str[start:end]\nMethods: .upper(), .lower(), .strip(), .split(), etc.",
          examples: [
            {
              title: "String Operations",
              description: "Working with strings",
              code: `# Create strings
name = "Python"
greeting = 'Hello'

# Concatenation
message = greeting + " " + name
print(message)  # Hello Python

# String methods
print(name.upper())  # PYTHON
print(name.lower())  # python
print(len(name))  # 6`,
            },
          ],
          practiceQuestions: [
            {
              question: "Concatenate two strings",
              type: "fill",
              starterCode: `first = "Hello"
second = "World"
result = first ___ " " ___ second
print(result)`,
              answer: "+",
            },
            {
              question: "Convert string to uppercase",
              type: "complete",
              starterCode: `text = "python"
upper_text = text.___()
print(upper_text)`,
              answer: "upper",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `text = "Python"
print(len(text))`,
              answer: "6",
            },
          ],
        },
        {
          id: "python-booleans",
          title: "Python Booleans",
          explanation: "Booleans represent one of two values: True or False. They're used in conditional statements and comparisons. In Python, True and False are keywords (capitalized). Boolean values are returned by comparison operators (==, !=, <, >, etc.) and logical operators (and, or, not).",
          syntax: "True or False (capitalized)\nComparisons return booleans: ==, !=, <, >, <=, >=\nLogical operators: and, or, not",
          examples: [
            {
              title: "Boolean Values",
              description: "Working with booleans",
              code: `# Boolean values
is_active = True
is_complete = False

# Comparisons return booleans
age = 20
is_adult = age >= 18
print(is_adult)  # True

# Logical operations
result = True and False
print(result)  # False`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the boolean result of 5 > 3?",
              type: "predict",
              starterCode: `result = 5 > 3
print(result)`,
              answer: "True",
            },
            {
              question: "Use 'and' operator to check both conditions",
              type: "fill",
              starterCode: `age = 20
has_license = True
can_drive = age >= 18 ___ has_license
print(can_drive)`,
              answer: "and",
            },
            {
              question: "Negate a boolean value",
              type: "complete",
              starterCode: `is_false = True
result = ___(is_false)
print(result)`,
              answer: "not",
            },
          ],
        },
        {
          id: "python-operators",
          title: "Python Operators",
          explanation: "Operators are special symbols that perform operations on values. Python has arithmetic operators (+, -, *, /, //, %, **), comparison operators (==, !=, <, >, <=, >=), logical operators (and, or, not), assignment operators (=, +=, -=, etc.), and more. Understanding operators is essential for writing expressions and conditions.",
          syntax: "Arithmetic: +, -, *, /, //, %, **\nComparison: ==, !=, <, >, <=, >=\nLogical: and, or, not\nAssignment: =, +=, -=, *=, /=",
          examples: [
            {
              title: "Operator Examples",
              description: "Different types of operators",
              code: `# Arithmetic
a = 10
b = 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...
print(a // b)  # 3 (floor division)
print(a % b)  # 1 (modulus)
print(a ** b)  # 1000 (exponentiation)`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator calculates the remainder?",
              type: "fill",
              starterCode: `result = 10 ___ 3
print(result)  # Should be 1`,
              answer: "%",
            },
            {
              question: "Use comparison operator to check equality",
              type: "complete",
              starterCode: `x = 5
y = 5
is_equal = x ___ y
print(is_equal)`,
              answer: "==",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `x = 10
x += 5
print(x)`,
              answer: "15",
            },
          ],
        },
        {
          id: "python-lists",
          title: "Python Lists",
          explanation: "Lists are ordered, mutable collections of items. They can contain any type of data and allow duplicates. Lists are created with square brackets [] and items are separated by commas. You can access items by index, add/remove items, and perform various operations. Lists are one of Python's most versatile data structures.",
          syntax: "list = [item1, item2, item3]\nAccess: list[index]\nAdd: list.append(item)\nRemove: list.remove(item)\nLength: len(list)",
          examples: [
            {
              title: "List Operations",
              description: "Working with lists",
              code: `# Create a list
fruits = ["apple", "banana", "orange"]

# Access elements
print(fruits[0])  # apple

# Add element
fruits.append("grape")
print(fruits)  # ['apple', 'banana', 'orange', 'grape']

# List length
print(len(fruits))  # 4`,
            },
          ],
          practiceQuestions: [
            {
              question: "Access the first element of the list",
              type: "fill",
              starterCode: `numbers = [10, 20, 30]
first = numbers[___]
print(first)`,
              answer: "0",
            },
            {
              question: "Add 'cherry' to the list",
              type: "complete",
              starterCode: `fruits = ["apple", "banana"]
fruits.___("cherry")
print(fruits)`,
              answer: "append",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `numbers = [1, 2, 3, 4, 5]
print(len(numbers))`,
              answer: "5",
            },
          ],
        },
        {
          id: "python-tuples",
          title: "Python Tuples",
          explanation: "Tuples are ordered, immutable collections of items. They're similar to lists but cannot be modified after creation. Tuples are created with parentheses () and items are separated by commas. Tuples are useful when you want to ensure data doesn't change. They're faster than lists and can be used as dictionary keys.",
          syntax: "tuple = (item1, item2, item3)\nAccess: tuple[index]\nImmutable - cannot modify after creation\nSingle item: (item,) - note the comma",
          examples: [
            {
              title: "Tuple Operations",
              description: "Working with tuples",
              code: `# Create a tuple
coordinates = (10, 20)

# Access elements
print(coordinates[0])  # 10
print(coordinates[1])  # 20

# Tuple unpacking
x, y = coordinates
print(x, y)  # 10 20

# Length
print(len(coordinates))  # 2`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a tuple with values 1, 2, 3",
              type: "fill",
              starterCode: `numbers = (___, ___, ___)
print(numbers)`,
              answer: "1, 2, 3",
            },
            {
              question: "Access the second element of the tuple",
              type: "complete",
              starterCode: `data = (10, 20, 30)
second = data[___]
print(second)`,
              answer: "1",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `point = (5, 10)
x, y = point
print(x + y)`,
              answer: "15",
            },
          ],
        },
        {
          id: "python-sets",
          title: "Python Sets",
          explanation: "Sets are unordered collections of unique items. They're created with curly braces {} or the set() function. Sets automatically remove duplicates and don't allow indexing. They're useful for membership testing, removing duplicates, and mathematical set operations like union, intersection, and difference.",
          syntax: "set = {item1, item2, item3}\nOr: set = set([item1, item2])\nOperations: add(), remove(), union(), intersection(), difference()\nMembership: item in set",
          examples: [
            {
              title: "Set Operations",
              description: "Working with sets",
              code: `# Create a set
fruits = {"apple", "banana", "orange"}

# Add item
fruits.add("grape")
print(fruits)

# Remove duplicates
numbers = [1, 2, 2, 3, 3, 3]
unique = set(numbers)
print(unique)  # {1, 2, 3}

# Membership test
print("apple" in fruits)  # True`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a set with values 1, 2, 3",
              type: "fill",
              starterCode: `numbers = {___, ___, ___}
print(numbers)`,
              answer: "1, 2, 3",
            },
            {
              question: "Add 'cherry' to the set",
              type: "complete",
              starterCode: `fruits = {"apple", "banana"}
fruits.___("cherry")
print(fruits)`,
              answer: "add",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `numbers = {1, 2, 2, 3, 3}
print(len(numbers))`,
              answer: "3",
            },
          ],
        },
        {
          id: "python-dictionaries",
          title: "Python Dictionaries",
          explanation: "Dictionaries are unordered collections of key-value pairs. They're created with curly braces {} and use colons to separate keys and values. Dictionaries are mutable and allow fast lookups by key. Keys must be immutable types (strings, numbers, tuples). Dictionaries are perfect for storing related data together.",
          syntax: "dict = {key1: value1, key2: value2}\nAccess: dict[key] or dict.get(key)\nAdd/Update: dict[key] = value\nKeys: dict.keys()\nValues: dict.values()",
          examples: [
            {
              title: "Dictionary Operations",
              description: "Working with dictionaries",
              code: `# Create a dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Access values
print(person["name"])  # Alice
print(person.get("age"))  # 25

# Add/Update
person["email"] = "alice@example.com"
print(person)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Access the value for key 'name'",
              type: "fill",
              starterCode: `data = {"name": "Python", "age": 30}
value = data[___]
print(value)`,
              answer: '"name"',
            },
            {
              question: "Add a new key-value pair 'city': 'London'",
              type: "complete",
              starterCode: `info = {"name": "Alice"}
info[___] = "London"
print(info)`,
              answer: '"city"',
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `scores = {"math": 90, "science": 85}
print(scores["math"])`,
              answer: "90",
            },
          ],
        },
        {
          id: "python-if-else",
          title: "Python If...Else",
          explanation: "Conditional statements allow your program to make decisions. The if statement executes code when a condition is True. elif (else if) checks additional conditions. else executes code when all conditions are False. Python uses indentation to define code blocks, making the structure clear and readable.",
          syntax: "if condition:\n    code\nelif condition:\n    code\nelse:\n    code\nUse colons (:) after conditions and indent code blocks",
          examples: [
            {
              title: "If-Else Statements",
              description: "Conditional logic in Python",
              code: `age = 20

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")

# Output: You are an adult`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the if statement",
              type: "fill",
              starterCode: `score = 85
___ score >= 80:
    print("Pass")`,
              answer: "if",
            },
            {
              question: "Add an else clause",
              type: "complete",
              starterCode: `x = 10
if x > 5:
    print("Greater")
___:
    print("Smaller")`,
              answer: "else",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `num = 7
if num % 2 == 0:
    print("Even")
else:
    print("Odd")`,
              answer: "Odd",
            },
          ],
        },
        {
          id: "python-match",
          title: "Python Match",
          explanation: "The match statement (introduced in Python 3.10) is similar to switch statements in other languages. It allows pattern matching and executes code based on matching patterns. Match is more powerful than if-elif chains for multiple value comparisons. It uses 'case' keywords to define patterns.",
          syntax: "match value:\n    case pattern1:\n        code\n    case pattern2:\n        code\n    case _:\n        default code\nUse underscore (_) for default case",
          examples: [
            {
              title: "Match Statement",
              description: "Pattern matching with match",
              code: `day = "Monday"

match day:
    case "Monday":
        print("Start of work week")
    case "Friday":
        print("End of work week")
    case "Saturday" | "Sunday":
        print("Weekend!")
    case _:
        print("Regular day")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the match statement",
              type: "fill",
              starterCode: `status = "active"
___ status:
    case "active":
        print("Running")`,
              answer: "match",
            },
            {
              question: "Add a default case",
              type: "complete",
              starterCode: `x = 5
match x:
    case 1:
        print("One")
    case ___:
        print("Other")`,
              answer: "_",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `grade = "A"
match grade:
    case "A":
        print("Excellent")
    case "B":
        print("Good")
    case _:
        print("Keep trying")`,
              answer: "Excellent",
            },
          ],
        },
        {
          id: "python-while-loops",
          title: "Python While Loops",
          explanation: "While loops repeat code as long as a condition is True. They're useful when you don't know in advance how many times you need to loop. The loop continues until the condition becomes False. Be careful to avoid infinite loops by ensuring the condition eventually becomes False.",
          syntax: "while condition:\n    code\nMake sure condition changes inside loop\nUse break to exit early\nUse continue to skip iteration",
          examples: [
            {
              title: "While Loop",
              description: "Repeating code with while",
              code: `# Count from 0 to 4
count = 0
while count < 5:
    print(count)
    count += 1

# Output: 0, 1, 2, 3, 4

# Break example
i = 0
while True:
    if i >= 3:
        break
    print(i)
    i += 1`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the while loop condition",
              type: "fill",
              starterCode: `count = 0
___ count < 5:
    print(count)
    count += 1`,
              answer: "while",
            },
            {
              question: "Increment the counter to avoid infinite loop",
              type: "complete",
              starterCode: `i = 0
while i < 3:
    print(i)
    i ___
print("Done")`,
              answer: "+= 1",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `x = 1
while x < 4:
    print(x)
    x += 1`,
              answer: "1\n2\n3",
            },
          ],
        },
        {
          id: "python-for-loops",
          title: "Python For Loops",
          explanation: "For loops iterate over a sequence (like a list, string, or range). They're perfect when you know how many times to loop or want to process each item in a collection. Python's for loop is more like a 'for-each' loop - it iterates over items rather than using a counter. The range() function is commonly used to generate number sequences.",
          syntax: "for item in sequence:\n    code\nIterate over: lists, strings, ranges, tuples\nrange(start, stop, step) generates numbers",
          examples: [
            {
              title: "For Loop Examples",
              description: "Iterating with for loops",
              code: `# Loop through a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# Loop with range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Loop through string
for char in "Python":
    print(char)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the for loop to iterate through list",
              type: "fill",
              starterCode: `items = ["a", "b", "c"]
for item ___ items:
    print(item)`,
              answer: "in",
            },
            {
              question: "Loop from 0 to 4 using range",
              type: "complete",
              starterCode: `for i in range(___):
    print(i)`,
              answer: "5",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `for i in range(3):
    print(i * 2)`,
              answer: "0\n2\n4",
            },
          ],
        },
        {
          id: "python-functions",
          title: "Python Functions",
          explanation: "Functions are reusable blocks of code that perform specific tasks. They help organize code, avoid repetition, and make programs easier to understand. Functions are defined with 'def' keyword, can take parameters, and can return values. Functions make code modular and testable.",
          syntax: "def function_name(parameters):\n    code\n    return value\nCall: function_name(arguments)\nParameters are optional\nReturn is optional (returns None if omitted)",
          examples: [
            {
              title: "Function Definition",
              description: "Creating and using functions",
              code: `# Define a function
def greet(name):
    return f"Hello, {name}!"

# Call the function
message = greet("Python")
print(message)  # Hello, Python!

# Function with multiple parameters
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8`,
            },
          ],
          practiceQuestions: [
            {
              question: "Define a function named 'say_hello'",
              type: "fill",
              starterCode: `___ say_hello():
    print("Hello!")

say_hello()`,
              answer: "def",
            },
            {
              question: "Complete the return statement",
              type: "complete",
              starterCode: `def multiply(x, y):
    ___ x * y

result = multiply(3, 4)
print(result)`,
              answer: "return",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `def square(n):
    return n ** 2

print(square(5))`,
              answer: "25",
            },
          ],
        },
        {
          id: "python-range",
          title: "Python Range",
          explanation: "The range() function generates a sequence of numbers. It's commonly used in for loops to iterate a specific number of times. Range can take one, two, or three arguments: start (inclusive), stop (exclusive), and step. Range is memory-efficient as it doesn't store all values, it generates them on demand.",
          syntax: "range(stop) - 0 to stop-1\nrange(start, stop) - start to stop-1\nrange(start, stop, step) - with step size\nReturns iterable, use list() to see values",
          examples: [
            {
              title: "Range Function",
              description: "Using range in different ways",
              code: `# Range with one argument (0 to 4)
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Range with start and stop
for i in range(2, 6):
    print(i)  # 2, 3, 4, 5

# Range with step
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# Convert to list
numbers = list(range(5))
print(numbers)  # [0, 1, 2, 3, 4]`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a range from 0 to 4",
              type: "fill",
              starterCode: `for i in range(___):
    print(i)`,
              answer: "5",
            },
            {
              question: "Create a range from 5 to 9",
              type: "complete",
              starterCode: `for i in range(___, ___):
    print(i)`,
              answer: "5, 10",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `for i in range(0, 6, 2):
    print(i)`,
              answer: "0\n2\n4",
            },
          ],
        },
        {
          id: "python-arrays",
          title: "Python Arrays",
          explanation: "Arrays in Python are similar to lists but are more memory-efficient and require all elements to be of the same type. Arrays are part of the 'array' module. For most purposes, Python lists are preferred, but arrays are useful when you need to work with large amounts of numeric data or interface with C code. Arrays support the same indexing and slicing as lists.",
          syntax: "import array\narr = array.array('type_code', [values])\nType codes: 'i' (int), 'f' (float), 'd' (double)\nAccess: arr[index]\nMethods: append(), extend(), pop()",
          examples: [
            {
              title: "Array Operations",
              description: "Working with arrays",
              code: `import array

# Create integer array
numbers = array.array('i', [1, 2, 3, 4, 5])
print(numbers)  # array('i', [1, 2, 3, 4, 5])

# Access elements
print(numbers[0])  # 1

# Add element
numbers.append(6)
print(numbers)  # array('i', [1, 2, 3, 4, 5, 6])

# Length
print(len(numbers))  # 6`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import the array module",
              type: "fill",
              starterCode: `___ array

numbers = array.array('i', [1, 2, 3])`,
              answer: "import",
            },
            {
              question: "Create an integer array with values 10, 20, 30",
              type: "complete",
              starterCode: `import array
numbers = array.array(___, [10, 20, 30])
print(numbers)`,
              answer: "'i'",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `import array
arr = array.array('i', [1, 2, 3])
print(arr[1])`,
              answer: "2",
            },
          ],
        },
        {
          id: "python-iterators",
          title: "Python Iterators",
          explanation: "Iterators are objects that can be iterated (looped) upon. An iterator implements the iterator protocol with __iter__() and __next__() methods. Lists, tuples, strings, and dictionaries are all iterable objects. The iter() function creates an iterator, and next() gets the next value. Iterators are memory-efficient as they generate values on demand.",
          syntax: "iterable = iter(sequence)\nnext(iterable) - get next value\nRaises StopIteration when exhausted\nfor loops automatically use iterators",
          examples: [
            {
              title: "Iterator Usage",
              description: "Working with iterators",
              code: `# Create iterator from list
fruits = ["apple", "banana", "orange"]
fruit_iter = iter(fruits)

# Get next value
print(next(fruit_iter))  # apple
print(next(fruit_iter))  # banana
print(next(fruit_iter))  # orange

# For loops use iterators automatically
for fruit in fruits:
    print(fruit)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create an iterator from a list",
              type: "fill",
              starterCode: `numbers = [1, 2, 3]
num_iter = ___(numbers)
print(next(num_iter))`,
              answer: "iter",
            },
            {
              question: "Get the next value from iterator",
              type: "complete",
              starterCode: `items = iter(["a", "b", "c"])
first = ___(items)
print(first)`,
              answer: "next",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `numbers = iter([10, 20, 30])
print(next(numbers))
print(next(numbers))`,
              answer: "10\n20",
            },
          ],
        },
        {
          id: "python-modules",
          title: "Python Modules",
          explanation: "Modules are files containing Python code (functions, classes, variables). They allow you to organize code into reusable components. Python has a large standard library of built-in modules. You can also create your own modules. Use 'import' to use a module, 'from...import' to import specific items, or 'import...as' to use an alias.",
          syntax: "import module_name\nfrom module_name import item\nfrom module_name import item as alias\nimport module_name as alias\nAccess: module.function() or function()",
          examples: [
            {
              title: "Using Modules",
              description: "Importing and using modules",
              code: `# Import entire module
import math
print(math.pi)  # 3.141592653589793
print(math.sqrt(16))  # 4.0

# Import specific function
from math import sqrt, pi
print(sqrt(25))  # 5.0

# Import with alias
import datetime as dt
now = dt.datetime.now()
print(now)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import the math module",
              type: "fill",
              starterCode: `___ math
print(math.pi)`,
              answer: "import",
            },
            {
              question: "Import sqrt function from math module",
              type: "complete",
              starterCode: `from math ___ sqrt
result = sqrt(16)
print(result)`,
              answer: "import",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `import math
print(int(math.sqrt(9)))`,
              answer: "3",
            },
          ],
        },
        {
          id: "python-dates",
          title: "Python Dates",
          explanation: "Python's datetime module provides classes for working with dates and times. The datetime class combines date and time information. You can create dates, format them, perform calculations, and extract components. Dates are essential for logging, scheduling, and time-based operations in applications.",
          syntax: "from datetime import datetime, date\ndatetime.now() - current date/time\ndatetime(year, month, day)\nstrftime(format) - format date\nstrptime(string, format) - parse date",
          examples: [
            {
              title: "Working with Dates",
              description: "Date operations in Python",
              code: `from datetime import datetime, date

# Get current date and time
now = datetime.now()
print(now)  # 2024-01-15 10:30:45.123456

# Create specific date
birthday = date(2000, 5, 15)
print(birthday)  # 2000-05-15

# Format date
formatted = now.strftime("%Y-%m-%d %H:%M:%S")
print(formatted)  # 2024-01-15 10:30:45

# Extract components
print(now.year)  # 2024
print(now.month)  # 1
print(now.day)  # 15`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import datetime module",
              type: "fill",
              starterCode: `from datetime ___ datetime
now = datetime.now()
print(now)`,
              answer: "import",
            },
            {
              question: "Create a date for January 1, 2024",
              type: "complete",
              starterCode: `from datetime import date
new_year = date(___, ___, ___)
print(new_year)`,
              answer: "2024, 1, 1",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `from datetime import date
d = date(2024, 12, 25)
print(d.year)`,
              answer: "2024",
            },
          ],
        },
        {
          id: "python-math",
          title: "Python Math",
          explanation: "Python's math module provides mathematical functions and constants. It includes functions for basic operations (sqrt, pow), trigonometry (sin, cos, tan), logarithms (log, log10), rounding (ceil, floor), and constants (pi, e). The math module works with real numbers, while cmath works with complex numbers.",
          syntax: "import math\nmath.sqrt(x) - square root\nmath.pow(x, y) - x to power y\nmath.pi - pi constant\nmath.ceil(x) - round up\nmath.floor(x) - round down\nmath.sin(x), math.cos(x), etc.",
          examples: [
            {
              title: "Math Functions",
              description: "Using math module functions",
              code: `import math

# Square root
print(math.sqrt(16))  # 4.0

# Power
print(math.pow(2, 3))  # 8.0

# Constants
print(math.pi)  # 3.141592653589793
print(math.e)  # 2.718281828459045

# Rounding
print(math.ceil(4.3))  # 5
print(math.floor(4.7))  # 4

# Trigonometric functions
print(math.sin(math.pi / 2))  # 1.0`,
            },
          ],
          practiceQuestions: [
            {
              question: "Calculate square root of 25",
              type: "fill",
              starterCode: `import math
result = math.___(25)
print(result)`,
              answer: "sqrt",
            },
            {
              question: "Calculate 2 to the power of 5",
              type: "complete",
              starterCode: `import math
result = math.___(2, 5)
print(result)`,
              answer: "pow",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `import math
print(int(math.sqrt(9)))`,
              answer: "3",
            },
          ],
        },
        {
          id: "python-json",
          title: "Python JSON",
          explanation: "JSON (JavaScript Object Notation) is a lightweight data format for exchanging data. Python's json module allows you to convert Python objects (dicts, lists) to JSON strings and vice versa. JSON is commonly used for APIs, configuration files, and data storage. The json module provides dumps() to convert to JSON string and loads() to parse JSON.",
          syntax: "import json\njson.dumps(obj) - Python to JSON string\njson.loads(json_string) - JSON string to Python\njson.dump(obj, file) - write to file\njson.load(file) - read from file",
          examples: [
            {
              title: "JSON Operations",
              description: "Working with JSON data",
              code: `import json

# Python dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Convert to JSON string
json_string = json.dumps(person)
print(json_string)  # {"name": "Alice", "age": 25, "city": "New York"}

# Parse JSON string back to Python
parsed = json.loads(json_string)
print(parsed["name"])  # Alice`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import the json module",
              type: "fill",
              starterCode: `___ json

data = {"key": "value"}
json_str = json.dumps(data)`,
              answer: "import",
            },
            {
              question: "Convert Python dict to JSON string",
              type: "complete",
              starterCode: `import json
data = {"name": "Python"}
json_str = json.___(data)
print(json_str)`,
              answer: "dumps",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `import json
json_str = '{"x": 10, "y": 20}'
data = json.loads(json_str)
print(data["x"])`,
              answer: "10",
            },
          ],
        },
        {
          id: "python-regex",
          title: "Python RegEx",
          explanation: "Regular expressions (RegEx) are patterns used to match and manipulate text. Python's 're' module provides functions for working with regular expressions. RegEx is powerful for searching, replacing, and validating text patterns. Common uses include email validation, extracting data, and text processing.",
          syntax: "import re\nre.search(pattern, string) - find first match\nre.findall(pattern, string) - find all matches\nre.sub(pattern, replacement, string) - replace\nPatterns use special characters: ., *, +, ?, ^, $, etc.",
          examples: [
            {
              title: "Regular Expressions",
              description: "Using regex to match patterns",
              code: `import re

# Search for pattern
text = "The price is $50"
match = re.search(r'\$\\d+', text)
if match:
    print(match.group())  # $50

# Find all matches
text = "Contact: email@example.com or phone@test.com"
emails = re.findall(r'\\w+@\\w+\\.\\w+', text)
print(emails)  # ['email@example.com', 'phone@test.com']

# Replace pattern
text = "Hello 123 World"
new_text = re.sub(r'\\d+', 'NUM', text)
print(new_text)  # Hello NUM World`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import the re module",
              type: "fill",
              starterCode: `___ re

text = "Hello World"
match = re.search("Hello", text)`,
              answer: "import",
            },
            {
              question: "Find all digits in the string",
              type: "complete",
              starterCode: `import re
text = "Price is 100 dollars"
numbers = re.findall(___, text)
print(numbers)`,
              answer: "r'\\d+'",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `import re
text = "abc123def"
match = re.search(r'\\d+', text)
print(match.group())`,
              answer: "123",
            },
          ],
        },
        {
          id: "python-pip",
          title: "Python PIP",
          explanation: "PIP (Pip Installs Packages) is Python's package manager. It allows you to install, upgrade, and manage external libraries and packages from the Python Package Index (PyPI). PIP comes pre-installed with Python 3.4+. It's essential for installing third-party packages like requests, numpy, pandas, and thousands of others.",
          syntax: "pip install package_name - install package\npip uninstall package_name - remove package\npip list - show installed packages\npip show package_name - show package info\npip freeze - show installed with versions",
          examples: [
            {
              title: "Using PIP",
              description: "Package management with pip",
              code: `# Install a package (run in terminal)
# pip install requests

# After installation, use in Python
import requests

# pip list shows all installed packages
# pip show requests shows package details
# pip freeze > requirements.txt saves package list`,
            },
          ],
          practiceQuestions: [
            {
              question: "What command installs a package named 'numpy'?",
              type: "fill",
              starterCode: `# Run in terminal:
# pip ___ numpy`,
              answer: "install",
            },
            {
              question: "What command shows all installed packages?",
              type: "complete",
              starterCode: `# Run in terminal:
# pip ___`,
              answer: "list",
            },
            {
              question: "What file is commonly used to save package requirements?",
              type: "fill",
              starterCode: `# pip freeze > ___.txt`,
              answer: "requirements",
            },
          ],
        },
        {
          id: "python-try-except",
          title: "Python Try...Except",
          explanation: "Exception handling allows you to gracefully handle errors in your code. The try block contains code that might raise an exception. The except block handles specific exceptions. You can have multiple except blocks for different exception types. The finally block always executes, regardless of whether an exception occurred. This prevents programs from crashing.",
          syntax: "try:\n    code\nexcept ExceptionType:\n    handle error\nfinally:\n    always executes\nYou can catch specific exceptions or use Exception for all",
          examples: [
            {
              title: "Exception Handling",
              description: "Handling errors with try-except",
              code: `# Basic try-except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Multiple exceptions
try:
    num = int("abc")
    result = 10 / num
except ValueError:
    print("Invalid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Finally block
try:
    file = open("data.txt")
except FileNotFoundError:
    print("File not found")
finally:
    print("This always runs")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the try-except block",
              type: "fill",
              starterCode: `___
    result = 10 / 0
___ ZeroDivisionError:
    print("Error!")`,
              answer: "try",
            },
            {
              question: "Catch a ValueError exception",
              type: "complete",
              starterCode: `try:
    num = int("abc")
___ ValueError:
    print("Invalid input!")`,
              answer: "except",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `try:
    result = 10 / 2
    print("Success")
except:
    print("Error")
finally:
    print("Done")`,
              answer: "Success\nDone",
            },
          ],
        },
        {
          id: "python-string-formatting",
          title: "Python String Formatting",
          explanation: "String formatting allows you to insert variables and expressions into strings. Python offers several methods: f-strings (f\"...\"), .format() method, and % formatting. F-strings (Python 3.6+) are the most modern and recommended approach. They're readable, fast, and allow expressions inside curly braces.",
          syntax: "f\"text {variable} more text\" - f-string\n\"text {}\".format(variable) - format method\n\"text %s\" % variable - old style\nF-strings support expressions: f\"{x + y}\"",
          examples: [
            {
              title: "String Formatting Methods",
              description: "Different ways to format strings",
              code: `name = "Alice"
age = 25

# F-string (recommended)
message = f"My name is {name} and I'm {age} years old"
print(message)  # My name is Alice and I'm 25 years old

# .format() method
message = "My name is {} and I'm {} years old".format(name, age)
print(message)

# With expressions
x = 10
y = 20
result = f"The sum is {x + y}"
print(result)  # The sum is 30`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the f-string",
              type: "fill",
              starterCode: `name = "Python"
message = f"Hello, {___}!"
print(message)`,
              answer: "name",
            },
            {
              question: "Use .format() to insert variables",
              type: "complete",
              starterCode: `name = "Alice"
age = 25
message = "Name: {}, Age: {}".___(name, age)
print(message)`,
              answer: "format",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `x = 5
y = 3
result = f"{x} + {y} = {x + y}"
print(result)`,
              answer: "5 + 3 = 8",
            },
          ],
        },
        {
          id: "python-none",
          title: "Python None",
          explanation: "None is a special constant in Python representing the absence of a value or a null value. It's the return value of functions that don't explicitly return something. None is a singleton object (only one instance exists). Use 'is None' or 'is not None' to check for None (not ==). None is falsy in boolean context.",
          syntax: "variable = None\nCheck: if variable is None:\nOr: if variable is not None:\nFunctions return None by default\nNone is falsy (evaluates to False)",
          examples: [
            {
              title: "Using None",
              description: "Working with None values",
              code: `# Assign None
value = None
print(value)  # None

# Function returns None by default
def do_something():
    print("Doing something")
    # No return statement

result = do_something()
print(result)  # None

# Check for None
if value is None:
    print("Value is None")

# None in boolean context
if not None:
    print("None is falsy")  # This prints`,
            },
          ],
          practiceQuestions: [
            {
              question: "Assign None to a variable",
              type: "fill",
              starterCode: `value = ___
print(value)`,
              answer: "None",
            },
            {
              question: "Check if variable is None",
              type: "complete",
              starterCode: `x = None
if x ___ None:
    print("It's None")`,
              answer: "is",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `def test():
    pass

result = test()
print(result)`,
              answer: "None",
            },
          ],
        },
        {
          id: "python-user-input",
          title: "Python User Input",
          explanation: "The input() function allows programs to get data from users. It displays a prompt message and waits for the user to type something and press Enter. input() always returns a string, so you need to convert it to other types (int, float) if needed. User input makes programs interactive and dynamic.",
          syntax: "variable = input(\"prompt message\")\nAlways returns string\nConvert: int(input(\"Enter number: \"))\nfloat(input(\"Enter decimal: \"))\nCan use in loops for multiple inputs",
          examples: [
            {
              title: "Getting User Input",
              description: "Interactive input from users",
              code: `# Get string input
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Get number input (convert to int)
age = int(input("Enter your age: "))
print(f"You are {age} years old")

# Get float input
price = float(input("Enter price: "))
print(f"Price: \${price:.2f}")

# Multiple inputs
first_name = input("First name: ")
last_name = input("Last name: ")
print(f"Full name: {first_name} {last_name}")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Get input from user",
              type: "fill",
              starterCode: `name = ___("Enter name: ")
print(name)`,
              answer: "input",
            },
            {
              question: "Convert input to integer",
              type: "complete",
              starterCode: `age = ___(input("Enter age: "))
print(age)`,
              answer: "int",
            },
            {
              question: "What type does input() return?",
              type: "fill",
              starterCode: `# input() always returns a ___`,
              answer: "string",
            },
          ],
        },
        {
          id: "python-virtualenv",
          title: "Python VirtualEnv",
          explanation: "Virtual environments (venv) create isolated Python environments for projects. Each virtual environment has its own Python interpreter and package installations. This prevents conflicts between different projects' dependencies. Virtual environments are essential for managing project dependencies and ensuring reproducible environments. Activate before use, deactivate when done.",
          syntax: "python -m venv env_name - create virtual environment\nsource env_name/bin/activate (Linux/Mac) - activate\nenv_name\\Scripts\\activate (Windows) - activate\ndeactivate - deactivate\npip install packages (inside venv)",
          examples: [
            {
              title: "Virtual Environment Setup",
              description: "Creating and using virtual environments",
              code: `# Create virtual environment (run in terminal)
# python -m venv myenv

# Activate (Linux/Mac)
# source myenv/bin/activate

# Activate (Windows)
# myenv\\Scripts\\activate

# After activation, install packages
# pip install requests

# Your prompt shows (myenv) when active
# Deactivate when done
# deactivate`,
            },
          ],
          practiceQuestions: [
            {
              question: "What command creates a virtual environment named 'venv'?",
              type: "fill",
              starterCode: `# Run in terminal:
# python -m ___ venv`,
              answer: "venv",
            },
            {
              question: "What command activates virtual environment on Windows?",
              type: "complete",
              starterCode: `# Windows:
# venv\\Scripts\\___
# Linux/Mac:
# source venv/bin/activate`,
              answer: "activate",
            },
            {
              question: "What command deactivates the virtual environment?",
              type: "fill",
              starterCode: `# Run in terminal:
# ___`,
              answer: "deactivate",
            },
          ],
        },
      ],
    },
    {
      id: "classes-oop",
      title: "Python Classes & OOP",
      topics: [
        {
          id: "python-oop",
          title: "Python OOP",
          explanation: "Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects containing data (attributes) and behavior (methods). OOP principles include encapsulation, inheritance, and polymorphism. Python is an object-oriented language that supports classes and objects, making code more organized, reusable, and maintainable.",
          syntax: "class ClassName:\n    attributes\n    methods\nObjects are instances of classes\nOOP concepts: encapsulation, inheritance, polymorphism",
          examples: [
            {
              title: "Basic OOP Example",
              description: "Creating a simple class",
              code: `# Define a class
class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        return f"{self.name} says Woof!"

# Create an object (instance)
my_dog = Dog("Buddy")
print(my_dog.bark())  # Buddy says Woof!`,
            },
          ],
          practiceQuestions: [
            {
              question: "Define a class named 'Car'",
              type: "fill",
              starterCode: `___ Car:
    pass

my_car = Car()`,
              answer: "class",
            },
            {
              question: "Create an instance of the Person class",
              type: "complete",
              starterCode: `class Person:
    pass

person1 = ___(Person)`,
              answer: "Person()",
            },
            {
              question: "What is an instance of a class called?",
              type: "fill",
              starterCode: `# An instance is called an ___`,
              answer: "object",
            },
          ],
        },
        {
          id: "python-classes-objects",
          title: "Python Classes / Objects",
          explanation: "A class is a blueprint for creating objects. It defines attributes (data) and methods (functions) that objects will have. An object is an instance of a class - a concrete realization of the class blueprint. You can create multiple objects from the same class, each with its own attribute values. Classes help organize code and create reusable components.",
          syntax: "class ClassName:\n    def __init__(self, params):\n        self.attribute = value\n    def method(self):\n        code\nCreate object: obj = ClassName(args)\nAccess: obj.attribute, obj.method()",
          examples: [
            {
              title: "Class and Object",
              description: "Creating a class and objects",
              code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"I'm {self.name}, {self.age} years old"

# Create objects
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

print(person1.introduce())  # I'm Alice, 25 years old
print(person2.introduce())  # I'm Bob, 30 years old`,
            },
          ],
          practiceQuestions: [
            {
              question: "Define a class with an __init__ method",
              type: "fill",
              starterCode: `class Student:
    def ___(self, name):
        self.name = name`,
              answer: "__init__",
            },
            {
              question: "Create an object from the Student class",
              type: "complete",
              starterCode: `class Student:
    def __init__(self, name):
        self.name = name

student = ___(Student)("Alice")`,
              answer: "Student",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `class Book:
    def __init__(self, title):
        self.title = title

book = Book("Python Guide")
print(book.title)`,
              answer: "Python Guide",
            },
          ],
        },
        {
          id: "python-__init__-method",
          title: "__init__ Method",
          explanation: "The __init__ method is a special method called a constructor. It's automatically executed when you create a new object from a class. __init__ initializes the object's attributes with values passed during object creation. The 'self' parameter refers to the instance being created. You can pass parameters to __init__ to set initial attribute values.",
          syntax: "def __init__(self, param1, param2, ...):\n    self.attribute1 = param1\n    self.attribute2 = param2\nCalled automatically when object is created\nMust have 'self' as first parameter",
          examples: [
            {
              title: "__init__ Method",
              description: "Using __init__ to initialize objects",
              code: `class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        print(f"Created {brand} {model}")

# Creating object calls __init__ automatically
my_car = Car("Toyota", "Camry", 2023)
# Output: Created Toyota Camry

print(my_car.brand)  # Toyota`,
            },
          ],
          practiceQuestions: [
            {
              question: "Define the __init__ method",
              type: "fill",
              starterCode: `class Person:
    def ___(self, name):
        self.name = name`,
              answer: "__init__",
            },
            {
              question: "Initialize an attribute in __init__",
              type: "complete",
              starterCode: `class Product:
    def __init__(self, name, price):
        self.name = name
        self.___ = price`,
              answer: "price",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(5, 10)
print(p.x, p.y)`,
              answer: "5 10",
            },
          ],
        },
        {
          id: "python-self-parameter",
          title: "self Parameter",
          explanation: "The 'self' parameter is a reference to the current instance of the class. It's the first parameter of every method in a class (including __init__). When you call a method on an object, Python automatically passes the object as the 'self' argument. You use 'self' to access attributes and methods of the current object. 'self' is a convention, not a keyword.",
          syntax: "def method(self, other_params):\n    self.attribute = value\n    self.other_method()\n'self' is always first parameter\nAccess attributes: self.attribute\nCall methods: self.method()",
          examples: [
            {
              title: "Using self",
              description: "Understanding the self parameter",
              code: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def display(self):
        print(f"Width: {self.width}, Height: {self.height}")

rect = Rectangle(5, 10)
print(rect.area())  # 50
rect.display()  # Width: 5, Height: 10`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add self as the first parameter",
              type: "fill",
              starterCode: `class Calculator:
    def add(___, a, b):
        return a + b`,
              answer: "self",
            },
            {
              question: "Access an attribute using self",
              type: "complete",
              starterCode: `class Person:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        return f"Hello, {___.name}!"`,
              answer: "self",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `class Counter:
    def __init__(self):
        self.count = 0
    
    def increment(self):
        self.count += 1

c = Counter()
c.increment()
print(c.count)`,
              answer: "1",
            },
          ],
        },
        {
          id: "python-class-properties",
          title: "Class Properties",
          explanation: "Properties (attributes) are variables that belong to an object. They store data specific to each instance. Properties are accessed using dot notation (object.attribute). You can set properties in __init__ or modify them later. Properties can be public (accessible directly) or private (prefixed with __). Properties define the state of an object.",
          syntax: "self.attribute = value - set property\nobject.attribute - access property\nobject.attribute = new_value - modify property\nPrivate: self.__private_attr (name mangling)",
          examples: [
            {
              title: "Class Properties",
              description: "Working with class attributes",
              code: `class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
    
    def update_grade(self, new_grade):
        self.grade = new_grade

student = Student("Alice", "A")
print(student.name)  # Alice
print(student.grade)  # A

# Modify property
student.grade = "A+"
print(student.grade)  # A+`,
            },
          ],
          practiceQuestions: [
            {
              question: "Access the 'name' property",
              type: "fill",
              starterCode: `class Person:
    def __init__(self, name):
        self.name = name

p = Person("Alice")
print(p.___)`,
              answer: "name",
            },
            {
              question: "Set a property in __init__",
              type: "complete",
              starterCode: `class Product:
    def __init__(self, name):
        self.___ = name`,
              answer: "name",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `class Circle:
    def __init__(self, radius):
        self.radius = radius

c = Circle(5)
c.radius = 10
print(c.radius)`,
              answer: "10",
            },
          ],
        },
        {
          id: "python-class-methods",
          title: "Class Methods",
          explanation: "Methods are functions defined inside a class that operate on objects. They define the behavior of objects. Methods always take 'self' as the first parameter. Methods can access and modify object properties. You call methods using dot notation (object.method()). Methods can also be class methods (using @classmethod) or static methods (using @staticmethod) that don't require an instance.",
          syntax: "def method_name(self, params):\n    code\nCall: object.method(args)\n@classmethod - class method\n@staticmethod - static method\nMethods define object behavior",
          examples: [
            {
              title: "Class Methods",
              description: "Defining and using methods",
              code: `class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return self.balance
        return "Insufficient funds"
    
    def display_balance(self):
        return f"Balance: \${self.balance}"

account = BankAccount(100)
account.deposit(50)
print(account.display_balance())  # Balance: $150`,
            },
          ],
          practiceQuestions: [
            {
              question: "Define a method named 'greet'",
              type: "fill",
              starterCode: `class Person:
    def ___(self):
        print("Hello!")`,
              answer: "greet",
            },
            {
              question: "Call the 'calculate' method",
              type: "complete",
              starterCode: `class Calculator:
    def calculate(self, x, y):
        return x + y

calc = Calculator()
result = calc.___(5, 3)
print(result)`,
              answer: "calculate",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `class Counter:
    def __init__(self):
        self.value = 0
    
    def increment(self):
        self.value += 1

c = Counter()
c.increment()
c.increment()
print(c.value)`,
              answer: "2",
            },
          ],
        },
        {
          id: "python-inheritance",
          title: "Inheritance",
          explanation: "Inheritance allows a class (child/subclass) to inherit attributes and methods from another class (parent/superclass). This promotes code reuse and creates a hierarchical relationship. The child class can override parent methods or add new ones. Inheritance follows the 'is-a' relationship. In Python, you specify the parent class in parentheses when defining the child class.",
          syntax: "class ChildClass(ParentClass):\n    pass\nChild inherits all parent attributes/methods\nOverride: define same method in child\nsuper() - access parent class\nMultiple inheritance: class Child(Parent1, Parent2)",
          examples: [
            {
              title: "Inheritance Example",
              description: "Creating a child class",
              code: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some sound"

# Child class
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

dog = Dog("Buddy")
print(dog.speak())  # Buddy says Woof!

cat = Cat("Whiskers")
print(cat.speak())  # Whiskers says Meow!`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a child class that inherits from Parent",
              type: "fill",
              starterCode: `class Parent:
    pass

class Child(___):
    pass`,
              answer: "Parent",
            },
            {
              question: "Override the parent method",
              type: "complete",
              starterCode: `class Animal:
    def speak(self):
        return "Sound"

class Dog(Animal):
    def ___(self):
        return "Woof!"`,
              answer: "speak",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `class Vehicle:
    def start(self):
        return "Vehicle started"

class Car(Vehicle):
    pass

car = Car()
print(car.start())`,
              answer: "Vehicle started",
            },
          ],
        },
        {
          id: "python-polymorphism",
          title: "Polymorphism",
          explanation: "Polymorphism means 'many forms'. It allows objects of different classes to be treated as objects of a common parent class. The same method name can behave differently in different classes. Polymorphism enables code to work with objects of different types through a common interface. It's achieved through method overriding and duck typing in Python.",
          syntax: "Different classes implement same method name\nMethod behaves differently per class\nDuck typing: 'if it walks like a duck...'\nPolymorphism enables flexible, extensible code",
          examples: [
            {
              title: "Polymorphism",
              description: "Same method, different behaviors",
              code: `class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

# Polymorphism in action
shapes = [Rectangle(5, 10), Circle(3)]
for shape in shapes:
    print(shape.area())  # 50, 28.26`,
            },
          ],
          practiceQuestions: [
            {
              question: "What concept allows same method name in different classes?",
              type: "fill",
              starterCode: `# This is called ___`,
              answer: "polymorphism",
            },
            {
              question: "Implement area method in Circle class",
              type: "complete",
              starterCode: `class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    def ___(self):
        return 3.14 * self.radius ** 2`,
              answer: "area",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `class Animal:
    def sound(self):
        return "Sound"

class Dog(Animal):
    def sound(self):
        return "Woof"

animal = Dog()
print(animal.sound())`,
              answer: "Woof",
            },
          ],
        },
        {
          id: "python-encapsulation",
          title: "Encapsulation",
          explanation: "Encapsulation is the bundling of data (attributes) and methods that operate on that data within a single unit (class). It also involves restricting direct access to some components. In Python, you can use single underscore (_) for 'protected' and double underscore (__) for 'private' attributes. Encapsulation helps protect data integrity and hide implementation details.",
          syntax: "self.public - public attribute\nself._protected - protected (convention)\nself.__private - private (name mangling)\nGetter/setter methods for controlled access\nEncapsulation protects data",
          examples: [
            {
              title: "Encapsulation",
              description: "Controlling access to attributes",
              code: `class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute
    
    def get_balance(self):
        return self.__balance
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False

account = BankAccount(100)
account.deposit(50)
print(account.get_balance())  # 150
# account.__balance  # Error: cannot access directly`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a private attribute",
              type: "fill",
              starterCode: `class Secret:
    def __init__(self, value):
        self.___value = value`,
              answer: "__",
            },
            {
              question: "Create a getter method",
              type: "complete",
              starterCode: `class Data:
    def __init__(self, value):
        self.__value = value
    
    def ___(self):
        return self.__value`,
              answer: "get_value",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `class Counter:
    def __init__(self):
        self.__count = 0
    
    def increment(self):
        self.__count += 1
    
    def get_count(self):
        return self.__count

c = Counter()
c.increment()
print(c.get_count())`,
              answer: "1",
            },
          ],
        },
        {
          id: "python-inner-classes",
          title: "Inner Classes",
          explanation: "Inner classes (nested classes) are classes defined inside another class. They're useful for logically grouping classes that are only used within the outer class. Inner classes can access attributes of the outer class. They help organize code and create more maintainable structures. Inner classes are less common but useful for specific design patterns.",
          syntax: "class Outer:\n    def __init__(self):\n        self.inner = self.Inner()\n    class Inner:\n        pass\nCreate: outer.Inner() or outer_instance.Inner()\nInner class can access outer class attributes",
          examples: [
            {
              title: "Inner Classes",
              description: "Defining and using inner classes",
              code: `class Car:
    def __init__(self, brand):
        self.brand = brand
        self.engine = self.Engine()
    
    class Engine:
        def __init__(self):
            self.status = "off"
        
        def start(self):
            self.status = "on"
            return "Engine started"
        
        def stop(self):
            self.status = "off"
            return "Engine stopped"

my_car = Car("Toyota")
print(my_car.engine.start())  # Engine started
print(my_car.engine.status)  # on`,
            },
          ],
          practiceQuestions: [
            {
              question: "Define an inner class named 'Inner'",
              type: "fill",
              starterCode: `class Outer:
    class ___:
        pass`,
              answer: "Inner",
            },
            {
              question: "Create an instance of inner class",
              type: "complete",
              starterCode: `class Outer:
    class Inner:
        pass

outer = Outer()
inner = outer.___()
print(inner)`,
              answer: "Inner",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `class Container:
    class Item:
        def __init__(self, value):
            self.value = value

container = Container()
item = container.Item(42)
print(item.value)`,
              answer: "42",
            },
          ],
        },
      ],
    },
    {
      id: "file-handling",
      title: "File Handling",
      topics: [
        {
          id: "python-file-handling",
          title: "Python File Handling",
          explanation: "File handling allows Python programs to read from and write to files on the disk. Files are essential for storing data persistently. Python provides built-in functions like open(), read(), write(), and close() for file operations. Always close files after use, or use 'with' statement for automatic closing. Files can be opened in different modes: read ('r'), write ('w'), append ('a'), and more.",
          syntax: "file = open('filename.txt', 'mode')\nfile.read() - read entire file\nfile.readline() - read one line\nfile.write() - write to file\nfile.close() - close file\nwith open() as file: - auto-close",
          examples: [
            {
              title: "Basic File Operations",
              description: "Opening and working with files",
              code: `# Open file for reading
file = open("data.txt", "r")
content = file.read()
print(content)
file.close()

# Using 'with' statement (recommended)
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
# File automatically closes here`,
            },
          ],
          practiceQuestions: [
            {
              question: "Open a file named 'test.txt' for reading",
              type: "fill",
              starterCode: `file = open(___, "r")
content = file.read()
file.close()`,
              answer: "'test.txt'",
            },
            {
              question: "Use 'with' statement to open file",
              type: "complete",
              starterCode: `___ open("data.txt", "r") as file:
    content = file.read()`,
              answer: "with",
            },
            {
              question: "What mode opens file for writing?",
              type: "fill",
              starterCode: `file = open("output.txt", ___)`,
              answer: "'w'",
            },
          ],
        },
        {
          id: "python-read-files",
          title: "Read Files",
          explanation: "Reading files allows you to access data stored in files. Python provides several methods: read() reads the entire file, readline() reads one line at a time, and readlines() reads all lines into a list. You can also iterate over the file object directly. Reading is done in text mode by default, or binary mode with 'rb'. Always handle file not found errors.",
          syntax: "file.read() - read entire file\nfile.readline() - read one line\nfile.readlines() - read all lines as list\nfor line in file: - iterate lines\nfile.read(size) - read specific bytes",
          examples: [
            {
              title: "Reading Files",
              description: "Different ways to read file content",
              code: `# Read entire file
with open("data.txt", "r") as file:
    content = file.read()
    print(content)

# Read one line
with open("data.txt", "r") as file:
    line = file.readline()
    print(line)

# Read all lines
with open("data.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())

# Iterate directly
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())`,
            },
          ],
          practiceQuestions: [
            {
              question: "Read the entire file content",
              type: "fill",
              starterCode: `with open("file.txt", "r") as f:
    content = f.___()
    print(content)`,
              answer: "read",
            },
            {
              question: "Read one line from file",
              type: "complete",
              starterCode: `with open("file.txt", "r") as f:
    line = f.___()
    print(line)`,
              answer: "readline",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `with open("test.txt", "w") as f:
    f.write("Hello\\nWorld")
with open("test.txt", "r") as f:
    print(f.read())`,
              answer: "Hello\nWorld",
            },
          ],
        },
        {
          id: "python-write-create-files",
          title: "Write / Create Files",
          explanation: "Writing to files allows you to save data permanently. Use 'w' mode to write (overwrites existing file) or 'a' mode to append. The write() method writes strings to files. You can write single strings or use writelines() for multiple lines. If the file doesn't exist, Python creates it. Be careful with 'w' mode as it overwrites existing content.",
          syntax: "file.write(string) - write string\nfile.writelines(list) - write multiple lines\nMode 'w' - write (overwrite)\nMode 'a' - append\nMode 'x' - create (fails if exists)",
          examples: [
            {
              title: "Writing to Files",
              description: "Creating and writing to files",
              code: `# Write to file (creates if doesn't exist)
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("Python is great!\\n")

# Append to file
with open("output.txt", "a") as file:
    file.write("Appended line\\n")

# Write multiple lines
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open("data.txt", "w") as file:
    file.writelines(lines)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Write text to a file",
              type: "fill",
              starterCode: `with open("file.txt", "w") as f:
    f.___("Hello, Python!")`,
              answer: "write",
            },
            {
              question: "Append text to existing file",
              type: "complete",
              starterCode: `with open("file.txt", ___) as f:
    f.write("New line")`,
              answer: "'a'",
            },
            {
              question: "What mode creates a new file for writing?",
              type: "fill",
              starterCode: `file = open("new.txt", ___)`,
              answer: "'w'",
            },
          ],
        },
        {
          id: "python-delete-files",
          title: "Delete Files",
          explanation: "Deleting files removes them from the filesystem. Python's os module provides remove() and unlink() functions to delete files. Both functions do the same thing. Always check if file exists before deleting, or handle FileNotFoundError. You can also use pathlib module's unlink() method. Be careful when deleting files as the operation is permanent.",
          syntax: "import os\nos.remove('filename') - delete file\nos.unlink('filename') - same as remove\nos.path.exists() - check if exists\npathlib.Path.unlink() - modern approach",
          examples: [
            {
              title: "Deleting Files",
              description: "Removing files from filesystem",
              code: `import os

# Check if file exists
if os.path.exists("old_file.txt"):
    os.remove("old_file.txt")
    print("File deleted")
else:
    print("File not found")

# Using try-except
try:
    os.remove("temp.txt")
    print("File deleted successfully")
except FileNotFoundError:
    print("File does not exist")

# Using pathlib (modern approach)
from pathlib import Path
file_path = Path("old_file.txt")
if file_path.exists():
    file_path.unlink()
    print("File deleted")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import os module",
              type: "fill",
              starterCode: `___ os

os.remove("file.txt")`,
              answer: "import",
            },
            {
              question: "Delete a file using os.remove",
              type: "complete",
              starterCode: `import os
os.___("temp.txt")`,
              answer: "remove",
            },
            {
              question: "Check if file exists before deleting",
              type: "fill",
              starterCode: `import os
if os.path.___("file.txt"):
    os.remove("file.txt")`,
              answer: "exists",
            },
          ],
        },
      ],
    },
    {
      id: "modules-libraries",
      title: "Python Modules & Libraries",
      topics: [
        {
          id: "python-numpy-tutorial",
          title: "NumPy Tutorial",
          explanation: "NumPy (Numerical Python) is a fundamental library for scientific computing in Python. It provides powerful N-dimensional array objects, mathematical functions, and tools for working with arrays. NumPy arrays are faster and more memory-efficient than Python lists for numerical operations. NumPy is the foundation for many other scientific libraries like Pandas and SciPy.",
          syntax: "import numpy as np\nnp.array([1, 2, 3]) - create array\nnp.zeros(shape) - array of zeros\nnp.ones(shape) - array of ones\nnp.arange(start, stop, step) - range array\nArray operations: +, -, *, /, **",
          examples: [
            {
              title: "NumPy Basics",
              description: "Creating and using NumPy arrays",
              code: `import numpy as np

# Create array
arr = np.array([1, 2, 3, 4, 5])
print(arr)  # [1 2 3 4 5]

# Array operations
arr2 = arr * 2
print(arr2)  # [2 4 6 8 10]

# Create 2D array
matrix = np.array([[1, 2], [3, 4]])
print(matrix)

# Array attributes
print(arr.shape)  # (5,)
print(arr.dtype)  # int64`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import NumPy with alias 'np'",
              type: "fill",
              starterCode: `import numpy as ___
arr = np.array([1, 2, 3])`,
              answer: "np",
            },
            {
              question: "Create a NumPy array from list",
              type: "complete",
              starterCode: `import numpy as np
numbers = [1, 2, 3, 4]
arr = np.___(numbers)
print(arr)`,
              answer: "array",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `import numpy as np
arr = np.array([1, 2, 3])
result = arr * 2
print(result)`,
              answer: "[2 4 6]",
            },
          ],
        },
        {
          id: "python-pandas-tutorial",
          title: "Pandas Tutorial",
          explanation: "Pandas is a powerful data manipulation and analysis library. It provides DataFrame (2D table) and Series (1D array) data structures. Pandas excels at reading, cleaning, transforming, and analyzing structured data like CSV, Excel, and databases. It's essential for data science, data analysis, and working with tabular data. Pandas is built on NumPy.",
          syntax: "import pandas as pd\npd.DataFrame(data) - create DataFrame\npd.read_csv('file.csv') - read CSV\npd.read_excel('file.xlsx') - read Excel\ndf.head() - first 5 rows\ndf.info() - data info\ndf.describe() - statistics",
          examples: [
            {
              title: "Pandas Basics",
              description: "Working with DataFrames",
              code: `import pandas as pd

# Create DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'London', 'Tokyo']
}
df = pd.DataFrame(data)
print(df)

# Read CSV file
# df = pd.read_csv('data.csv')

# Basic operations
print(df.head())  # First 5 rows
print(df.info())  # Data information
print(df.describe())  # Statistics`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import pandas with alias 'pd'",
              type: "fill",
              starterCode: `import pandas as ___
df = pd.DataFrame({'A': [1, 2, 3]})`,
              answer: "pd",
            },
            {
              question: "Read a CSV file using pandas",
              type: "complete",
              starterCode: `import pandas as pd
df = pd.___('data.csv')
print(df)`,
              answer: "read_csv",
            },
            {
              question: "What method shows first 5 rows of DataFrame?",
              type: "fill",
              starterCode: `df.___()`,
              answer: "head",
            },
          ],
        },
        {
          id: "python-scipy-tutorial",
          title: "SciPy Tutorial",
          explanation: "SciPy (Scientific Python) is a library built on NumPy that provides additional functionality for scientific computing. It includes modules for optimization, integration, interpolation, linear algebra, statistics, signal processing, and more. SciPy is essential for advanced mathematical operations, scientific research, and engineering applications. It works seamlessly with NumPy arrays.",
          syntax: "from scipy import module\nscipy.optimize - optimization\nscipy.integrate - integration\nscipy.stats - statistics\nscipy.linalg - linear algebra\nscipy.signal - signal processing",
          examples: [
            {
              title: "SciPy Usage",
              description: "Using SciPy for scientific computing",
              code: `from scipy import stats
import numpy as np

# Generate random data
data = np.random.normal(100, 15, 1000)

# Calculate statistics
mean = np.mean(data)
std = np.std(data)
print(f"Mean: {mean:.2f}, Std: {std:.2f}")

# Statistical tests
t_stat, p_value = stats.ttest_1samp(data, 100)
print(f"T-statistic: {t_stat:.2f}, P-value: {p_value:.2f}")

# Probability distributions
normal = stats.norm(mean, std)
probability = normal.cdf(115)
print(f"P(X < 115) = {probability:.2f}")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import stats from scipy",
              type: "fill",
              starterCode: `from scipy ___ stats
mean = stats.norm(0, 1).mean()`,
              answer: "import",
            },
            {
              question: "Calculate mean using scipy",
              type: "complete",
              starterCode: `from scipy import stats
import numpy as np
data = [1, 2, 3, 4, 5]
mean = np.___(data)
print(mean)`,
              answer: "mean",
            },
            {
              question: "What library is SciPy built on?",
              type: "fill",
              starterCode: `# SciPy is built on ___`,
              answer: "NumPy",
            },
          ],
        },
        {
          id: "python-django-tutorial",
          title: "Django Tutorial",
          explanation: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the Model-View-Template (MVT) architecture. Django provides an admin interface, ORM (Object-Relational Mapping), URL routing, templating, and many built-in features. It's perfect for building web applications, APIs, and content management systems.",
          syntax: "django-admin startproject name\npython manage.py runserver\npython manage.py startapp appname\npython manage.py migrate\npython manage.py createsuperuser\nURL patterns, views, models, templates",
          examples: [
            {
              title: "Django Basics",
              description: "Creating a Django project",
              code: `# Create Django project (run in terminal)
# django-admin startproject myproject
# cd myproject
# python manage.py runserver

# In views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")

# In urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]

# In models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()`,
            },
          ],
          practiceQuestions: [
            {
              question: "What command creates a new Django project?",
              type: "fill",
              starterCode: `# Run in terminal:
# django-admin ___ myproject`,
              answer: "startproject",
            },
            {
              question: "What command runs the Django development server?",
              type: "complete",
              starterCode: `# Run in terminal:
# python manage.py ___`,
              answer: "runserver",
            },
            {
              question: "What architecture pattern does Django follow?",
              type: "fill",
              starterCode: `# Django follows ___ pattern`,
              answer: "MVT",
            },
          ],
        },
      ],
    },
    {
      id: "matplotlib",
      title: "Python Matplotlib",
      topics: [
        {
          id: "python-matplotlib-intro",
          title: "Python Matplotlib Intro",
          explanation: "Matplotlib is a comprehensive plotting library for Python. It creates static, animated, and interactive visualizations. Matplotlib is widely used for data visualization in data science, research, and analytics. It provides MATLAB-like plotting interface and is highly customizable. Matplotlib works seamlessly with NumPy and Pandas.",
          syntax: "import matplotlib.pyplot as plt\nplt.plot(x, y) - create plot\nplt.show() - display plot\nplt.savefig('filename.png') - save plot\nplt.figure() - create figure\nplt.close() - close figure",
          examples: [
            {
              title: "First Plot",
              description: "Creating a simple plot",
              code: `import matplotlib.pyplot as plt
import numpy as np

# Create data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create plot
plt.plot(x, y)
plt.title("Sine Wave")
plt.xlabel("X axis")
plt.ylabel("Y axis")
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import matplotlib.pyplot with alias 'plt'",
              type: "fill",
              starterCode: `import matplotlib.pyplot as ___
plt.plot([1, 2, 3], [1, 4, 9])`,
              answer: "plt",
            },
            {
              question: "Display the plot",
              type: "complete",
              starterCode: `import matplotlib.pyplot as plt
plt.plot([1, 2, 3], [1, 4, 9])
plt.___()`,
              answer: "show",
            },
            {
              question: "What function creates a line plot?",
              type: "fill",
              starterCode: `plt.___([1, 2, 3], [1, 4, 9])`,
              answer: "plot",
            },
          ],
        },
        {
          id: "python-matplotlib-pyplot",
          title: "Python Matplotlib Pyplot",
          explanation: "Pyplot is Matplotlib's procedural interface. It provides MATLAB-like plotting functions. Pyplot maintains state between function calls, making it easy to create plots incrementally. Most plotting functions are in the pyplot module. Pyplot is the most common way to use Matplotlib for quick plotting and prototyping.",
          syntax: "import matplotlib.pyplot as plt\nplt.plot() - line plot\nplt.scatter() - scatter plot\nplt.bar() - bar chart\nplt.hist() - histogram\nplt.xlabel(), plt.ylabel() - axis labels\nplt.title() - plot title",
          examples: [
            {
              title: "Pyplot Interface",
              description: "Using pyplot for plotting",
              code: `import matplotlib.pyplot as plt
import numpy as np

# Create data
x = np.linspace(0, 10, 50)
y = np.sin(x)

# Create plot using pyplot
plt.plot(x, y, 'b-', linewidth=2)
plt.xlabel('X values')
plt.ylabel('Y values')
plt.title('Sine Function')
plt.grid(True)
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add x-axis label",
              type: "fill",
              starterCode: `plt.___('Time')`,
              answer: "xlabel",
            },
            {
              question: "Add title to plot",
              type: "complete",
              starterCode: `plt.___('My Plot')`,
              answer: "title",
            },
            {
              question: "What module provides MATLAB-like interface?",
              type: "fill",
              starterCode: `# ___ provides MATLAB-like interface`,
              answer: "pyplot",
            },
          ],
        },
        {
          id: "python-matplotlib-plotting",
          title: "Python Matplotlib Plotting",
          explanation: "Plotting is the core function of Matplotlib. The plot() function creates line plots connecting data points. You can plot single or multiple datasets, customize colors, line styles, and markers. Plotting is essential for visualizing data trends, relationships, and patterns. Matplotlib supports various plot types for different visualization needs.",
          syntax: "plt.plot(x, y) - basic plot\nplt.plot(x, y, 'r-') - red line\nplt.plot(x, y, 'bo') - blue circles\nplt.plot(x1, y1, x2, y2) - multiple plots\nLine styles: '-', '--', '-.', ':'\nColors: 'r', 'g', 'b', 'k', 'y', 'c', 'm'",
          examples: [
            {
              title: "Basic Plotting",
              description: "Creating different types of plots",
              code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Single plot
plt.plot(x, y1, 'b-', label='sin(x)')

# Multiple plots
plt.plot(x, y1, 'b-', label='sin(x)')
plt.plot(x, y2, 'r--', label='cos(x)')
plt.legend()
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a plot with x and y data",
              type: "fill",
              starterCode: `x = [1, 2, 3, 4]
y = [1, 4, 9, 16]
plt.___(x, y)`,
              answer: "plot",
            },
            {
              question: "Plot with red line style",
              type: "complete",
              starterCode: `plt.plot([1, 2, 3], [1, 4, 9], ___)`,
              answer: "'r-'",
            },
            {
              question: "What character represents blue color?",
              type: "fill",
              starterCode: `plt.plot(x, y, '___')  # blue line`,
              answer: "b",
            },
          ],
        },
        {
          id: "python-matplotlib-markers",
          title: "Python Matplotlib Markers",
          explanation: "Markers are symbols used to mark data points on plots. Matplotlib provides many marker styles like circles, squares, triangles, stars, and more. Markers help distinguish different datasets and make individual data points visible. You can customize marker size, color, and style. Markers are especially useful for scatter plots and discrete data visualization.",
          syntax: "plt.plot(x, y, marker='o') - circle markers\nplt.plot(x, y, 'o-') - line with circles\nMarker styles: 'o', 's', '^', 'v', '*', '+', 'x', 'D'\nMarker size: markersize=10\nMarker color: markerfacecolor='red'",
          examples: [
            {
              title: "Using Markers",
              description: "Adding markers to plots",
              code: `import matplotlib.pyplot as plt
import numpy as np

x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 6, 8, 10])

# Plot with markers
plt.plot(x, y, 'o-', markersize=10, markerfacecolor='red')
plt.plot(x, y*2, 's--', markersize=8, markerfacecolor='blue')
plt.xlabel('X')
plt.ylabel('Y')
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add circle markers to plot",
              type: "fill",
              starterCode: `plt.plot([1, 2, 3], [1, 4, 9], marker=___)`,
              answer: "'o'",
            },
            {
              question: "Set marker size to 10",
              type: "complete",
              starterCode: `plt.plot(x, y, 'o', ___=10)`,
              answer: "markersize",
            },
            {
              question: "What marker represents square?",
              type: "fill",
              starterCode: `plt.plot(x, y, marker=___)  # square`,
              answer: "'s'",
            },
          ],
        },
        {
          id: "python-matplotlib-line",
          title: "Python Matplotlib Line",
          explanation: "Lines connect data points in plots. Matplotlib offers various line styles: solid, dashed, dotted, and dash-dot. You can control line width, color, and style. Lines are essential for showing trends, relationships, and continuous data. Line plots are the most common type of visualization for time series and continuous data.",
          syntax: "plt.plot(x, y, linestyle='-') - solid line\nplt.plot(x, y, '--') - dashed\nplt.plot(x, y, ':') - dotted\nplt.plot(x, y, '-.') - dash-dot\nlinewidth=2 - line thickness\ncolor='red' - line color",
          examples: [
            {
              title: "Line Styles",
              description: "Different line styles and widths",
              code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

# Different line styles
plt.plot(x, y, '-', linewidth=2, label='Solid')
plt.plot(x, y+0.5, '--', linewidth=2, label='Dashed')
plt.plot(x, y+1, ':', linewidth=2, label='Dotted')
plt.plot(x, y+1.5, '-.', linewidth=2, label='Dash-dot')
plt.legend()
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a dashed line plot",
              type: "fill",
              starterCode: `plt.plot([1, 2, 3], [1, 4, 9], ___)`,
              answer: "'--'",
            },
            {
              question: "Set line width to 3",
              type: "complete",
              starterCode: `plt.plot(x, y, ___-=3)`,
              answer: "linewidth",
            },
            {
              question: "What character represents solid line?",
              type: "fill",
              starterCode: `plt.plot(x, y, ___)  # solid line`,
              answer: "'-'",
            },
          ],
        },
        {
          id: "python-matplotlib-labels",
          title: "Python Matplotlib Labels",
          explanation: "Labels provide context and meaning to plots. Axis labels describe what the axes represent. Titles give the plot a name. Legends identify different data series. Labels make plots understandable and professional. Good labeling is essential for effective data communication. Matplotlib provides functions to add and customize all types of labels.",
          syntax: "plt.xlabel('text') - x-axis label\nplt.ylabel('text') - y-axis label\nplt.title('text') - plot title\nplt.legend() - show legend\nplt.suptitle('text') - super title\nFont size: fontsize=14",
          examples: [
            {
              title: "Adding Labels",
              description: "Labeling plots properly",
              code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y, label='sin(x)')
plt.xlabel('X values', fontsize=12)
plt.ylabel('Y values', fontsize=12)
plt.title('Sine Function Plot', fontsize=14, fontweight='bold')
plt.legend()
plt.grid(True)
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add x-axis label",
              type: "fill",
              starterCode: `plt.___('Time (seconds)')`,
              answer: "xlabel",
            },
            {
              question: "Add plot title",
              type: "complete",
              starterCode: `plt.___('Data Visualization')`,
              answer: "title",
            },
            {
              question: "Show legend on plot",
              type: "fill",
              starterCode: `plt.___()`,
              answer: "legend",
            },
          ],
        },
        {
          id: "python-matplotlib-grid",
          title: "Python Matplotlib Grid",
          explanation: "Grid lines help read values from plots by providing visual reference lines. Grids make it easier to estimate data values and compare different points. Matplotlib can display grid lines on both axes. You can customize grid style, color, and transparency. Grids are especially useful for precise data reading and professional presentations.",
          syntax: "plt.grid(True) - show grid\nplt.grid(False) - hide grid\nplt.grid(axis='x') - x-axis only\nplt.grid(axis='y') - y-axis only\nplt.grid(linestyle='--', alpha=0.5) - customize",
          examples: [
            {
              title: "Adding Grid",
              description: "Using grid in plots",
              code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.grid(True, linestyle='--', alpha=0.5)
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Plot with Grid')
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Enable grid on plot",
              type: "fill",
              starterCode: `plt.grid(___)`,
              answer: "True",
            },
            {
              question: "Add grid with dashed lines",
              type: "complete",
              starterCode: `plt.grid(True, ___='--')`,
              answer: "linestyle",
            },
            {
              question: "What parameter controls grid transparency?",
              type: "fill",
              starterCode: `plt.grid(True, ___=0.5)`,
              answer: "alpha",
            },
          ],
        },
        {
          id: "python-matplotlib-subplot",
          title: "Python Matplotlib Subplot",
          explanation: "Subplots allow you to create multiple plots in a single figure. This is useful for comparing different datasets or showing related visualizations together. Subplots are arranged in a grid. You can create subplots using plt.subplot() or plt.subplots(). Subplots help organize multiple visualizations and save space in presentations and reports.",
          syntax: "plt.subplot(rows, cols, index)\nfig, axes = plt.subplots(nrows, ncols)\naxes[0].plot(x, y) - plot on first subplot\nplt.tight_layout() - adjust spacing",
          examples: [
            {
              title: "Creating Subplots",
              description: "Multiple plots in one figure",
              code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)

# Create subplots
fig, axes = plt.subplots(2, 2, figsize=(10, 8))

# Plot on each subplot
axes[0, 0].plot(x, np.sin(x))
axes[0, 0].set_title('sin(x)')

axes[0, 1].plot(x, np.cos(x))
axes[0, 1].set_title('cos(x)')

axes[1, 0].plot(x, np.tan(x))
axes[1, 0].set_title('tan(x)')

axes[1, 1].plot(x, np.exp(-x))
axes[1, 1].set_title('exp(-x)')

plt.tight_layout()
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a 2x2 subplot grid",
              type: "fill",
              starterCode: `fig, axes = plt.subplots(___, ___)`,
              answer: "2, 2",
            },
            {
              question: "Plot on first subplot",
              type: "complete",
              starterCode: `fig, axes = plt.subplots(2, 2)
axes[___, ___].plot([1, 2, 3], [1, 4, 9])`,
              answer: "0, 0",
            },
            {
              question: "What function adjusts subplot spacing?",
              type: "fill",
              starterCode: `plt.___()`,
              answer: "tight_layout",
            },
          ],
        },
        {
          id: "python-matplotlib-scatter",
          title: "Python Matplotlib Scatter",
          explanation: "Scatter plots display individual data points without connecting lines. They're perfect for showing relationships between two variables, identifying clusters, and detecting outliers. Scatter plots are essential for correlation analysis and exploring data distributions. You can customize point size, color, and transparency to show additional dimensions of data.",
          syntax: "plt.scatter(x, y) - basic scatter\nplt.scatter(x, y, s=50) - size\nplt.scatter(x, y, c='red') - color\nplt.scatter(x, y, alpha=0.5) - transparency\nplt.scatter(x, y, s=sizes, c=colors) - variable size/color",
          examples: [
            {
              title: "Scatter Plot",
              description: "Creating scatter plots",
              code: `import matplotlib.pyplot as plt
import numpy as np

# Generate random data
x = np.random.randn(100)
y = np.random.randn(100)
colors = np.random.rand(100)
sizes = 1000 * np.random.rand(100)

# Create scatter plot
plt.scatter(x, y, c=colors, s=sizes, alpha=0.5)
plt.xlabel('X values')
plt.ylabel('Y values')
plt.title('Scatter Plot')
plt.colorbar()
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a scatter plot",
              type: "fill",
              starterCode: `plt.___([1, 2, 3], [1, 4, 9])`,
              answer: "scatter",
            },
            {
              question: "Set scatter point size to 100",
              type: "complete",
              starterCode: `plt.scatter(x, y, ___=100)`,
              answer: "s",
            },
            {
              question: "What parameter controls point transparency?",
              type: "fill",
              starterCode: `plt.scatter(x, y, ___=0.5)`,
              answer: "alpha",
            },
          ],
        },
        {
          id: "python-matplotlib-bars",
          title: "Python Matplotlib Bars",
          explanation: "Bar charts display categorical data using rectangular bars. Bar heights represent values. Bar charts are ideal for comparing categories, showing rankings, and displaying discrete data. Matplotlib provides vertical (bar) and horizontal (barh) bar charts. You can customize bar colors, widths, and add labels. Bar charts are essential for business presentations and data analysis.",
          syntax: "plt.bar(x, height) - vertical bars\nplt.barh(y, width) - horizontal bars\nplt.bar(x, height, color='blue') - color\nplt.bar(x, height, width=0.8) - bar width\nplt.bar(x, height, label='Category') - with label",
          examples: [
            {
              title: "Bar Chart",
              description: "Creating bar charts",
              code: `import matplotlib.pyplot as plt

categories = ['A', 'B', 'C', 'D']
values = [23, 45, 56, 78]

# Vertical bar chart
plt.bar(categories, values, color=['red', 'green', 'blue', 'orange'])
plt.xlabel('Categories')
plt.ylabel('Values')
plt.title('Bar Chart')
plt.show()

# Horizontal bar chart
plt.barh(categories, values)
plt.xlabel('Values')
plt.ylabel('Categories')
plt.title('Horizontal Bar Chart')
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a bar chart",
              type: "fill",
              starterCode: `plt.___(['A', 'B', 'C'], [10, 20, 30])`,
              answer: "bar",
            },
            {
              question: "Create horizontal bar chart",
              type: "complete",
              starterCode: `plt.___(['A', 'B'], [10, 20])`,
              answer: "barh",
            },
            {
              question: "What function creates vertical bars?",
              type: "fill",
              starterCode: `plt.___(x, height)`,
              answer: "bar",
            },
          ],
        },
        {
          id: "python-matplotlib-histograms",
          title: "Python Matplotlib Histograms",
          explanation: "Histograms display the distribution of numerical data by grouping values into bins. They show frequency of values in different ranges. Histograms are essential for understanding data distributions, identifying patterns, and detecting outliers. They're commonly used in statistics and data analysis. Matplotlib's hist() function creates histograms with customizable bins and styling.",
          syntax: "plt.hist(data) - basic histogram\nplt.hist(data, bins=20) - number of bins\nplt.hist(data, bins=20, color='blue') - color\nplt.hist(data, bins=20, alpha=0.5) - transparency\nplt.hist(data, bins=20, edgecolor='black') - edge color",
          examples: [
            {
              title: "Histogram",
              description: "Creating histograms",
              code: `import matplotlib.pyplot as plt
import numpy as np

# Generate random data
data = np.random.normal(100, 15, 1000)

# Create histogram
plt.hist(data, bins=30, color='skyblue', edgecolor='black', alpha=0.7)
plt.xlabel('Values')
plt.ylabel('Frequency')
plt.title('Histogram of Normal Distribution')
plt.grid(True, alpha=0.3)
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a histogram",
              type: "fill",
              starterCode: `plt.___([1, 2, 2, 3, 3, 3, 4, 4, 5])`,
              answer: "hist",
            },
            {
              question: "Set number of bins to 20",
              type: "complete",
              starterCode: `plt.hist(data, ___=20)`,
              answer: "bins",
            },
            {
              question: "What does histogram show?",
              type: "fill",
              starterCode: `# Histogram shows data ___`,
              answer: "distribution",
            },
          ],
        },
        {
          id: "python-matplotlib-pie-charts",
          title: "Python Matplotlib Pie Charts",
          explanation: "Pie charts display proportions of a whole. Each slice represents a category's percentage. Pie charts are effective for showing composition and relative sizes. They're commonly used for displaying market share, survey results, and categorical breakdowns. Matplotlib provides extensive customization for pie charts including colors, labels, percentages, and explode effects.",
          syntax: "plt.pie(sizes) - basic pie\nplt.pie(sizes, labels=labels) - with labels\nplt.pie(sizes, autopct='%1.1f%%') - percentages\nplt.pie(sizes, explode=explode) - explode slices\nplt.pie(sizes, colors=colors) - custom colors",
          examples: [
            {
              title: "Pie Chart",
              description: "Creating pie charts",
              code: `import matplotlib.pyplot as plt

# Data
sizes = [30, 25, 20, 15, 10]
labels = ['A', 'B', 'C', 'D', 'E']
colors = ['red', 'green', 'blue', 'orange', 'yellow']
explode = (0.1, 0, 0, 0, 0)  # explode first slice

# Create pie chart
plt.pie(sizes, labels=labels, colors=colors, explode=explode,
        autopct='%1.1f%%', shadow=True, startangle=90)
plt.title('Pie Chart')
plt.show()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a pie chart",
              type: "fill",
              starterCode: `plt.___([30, 40, 30])`,
              answer: "pie",
            },
            {
              question: "Add labels to pie chart",
              type: "complete",
              starterCode: `plt.pie([30, 40, 30], ___=['A', 'B', 'C'])`,
              answer: "labels",
            },
            {
              question: "What parameter shows percentages?",
              type: "fill",
              starterCode: `plt.pie(sizes, ___='%1.1f%%')`,
              answer: "autopct",
            },
          ],
        },
      ],
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      topics: [
        {
          id: "python-ml-getting-started",
          title: "Machine Learning Getting Started",
          explanation: "Machine Learning (ML) enables computers to learn from data without explicit programming. Python is the leading language for ML with libraries like scikit-learn, TensorFlow, and PyTorch. ML involves training models on data to make predictions or decisions. Key concepts include supervised learning (labeled data), unsupervised learning (unlabeled data), and reinforcement learning. Start with scikit-learn for traditional ML.",
          syntax: "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nX_train, X_test, y_train, y_test = train_test_split(X, y)\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)",
          examples: [
            {
              title: "First ML Model",
              description: "Simple machine learning example",
              code: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import numpy as np

# Generate sample data
X = np.random.rand(100, 1) * 10
y = 2 * X.flatten() + 1 + np.random.randn(100) * 0.5

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
print(f"MSE: {mean_squared_error(y_test, predictions):.2f}")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import train_test_split from sklearn",
              type: "fill",
              starterCode: `from sklearn.model_selection import ___
X_train, X_test, y_train, y_test = train_test_split(X, y)`,
              answer: "train_test_split",
            },
            {
              question: "Train a linear regression model",
              type: "complete",
              starterCode: `from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.___(X_train, y_train)`,
              answer: "fit",
            },
            {
              question: "What method makes predictions?",
              type: "fill",
              starterCode: `predictions = model.___(X_test)`,
              answer: "predict",
            },
          ],
        },
        {
          id: "python-ml-mean-median-mode",
          title: "Machine Learning Mean Median Mode",
          explanation: "Mean, median, and mode are central tendency measures essential for understanding data. Mean is the average, median is the middle value, and mode is the most frequent value. These statistics help understand data distribution and are used in data preprocessing, feature engineering, and handling missing values. NumPy and Pandas provide functions to calculate these measures.",
          syntax: "np.mean(data) - mean\nnp.median(data) - median\nfrom scipy import stats\nstats.mode(data) - mode\npd.Series.mean() - pandas mean\npd.Series.median() - pandas median",
          examples: [
            {
              title: "Central Tendency",
              description: "Calculating mean, median, mode",
              code: `import numpy as np
from scipy import stats

data = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]

# Mean
mean = np.mean(data)
print(f"Mean: {mean}")  # 5.0

# Median
median = np.median(data)
print(f"Median: {median}")  # 5.0

# Mode
mode = stats.mode(data)
print(f"Mode: {mode.mode[0]}")  # 5`,
            },
          ],
          practiceQuestions: [
            {
              question: "Calculate mean of data",
              type: "fill",
              starterCode: `import numpy as np
mean = np.___([1, 2, 3, 4, 5])`,
              answer: "mean",
            },
            {
              question: "Calculate median",
              type: "complete",
              starterCode: `import numpy as np
median = np.___([1, 2, 3, 4, 5])`,
              answer: "median",
            },
            {
              question: "What is the average called?",
              type: "fill",
              starterCode: `# The average is called the ___`,
              answer: "mean",
            },
          ],
        },
        {
          id: "python-ml-standard-deviation",
          title: "Machine Learning Standard Deviation",
          explanation: "Standard deviation measures how spread out data is from the mean. It indicates data variability. Low standard deviation means data points are close to the mean; high standard deviation means data is spread out. Standard deviation is crucial for understanding data distribution, detecting outliers, and feature scaling. It's used in normalization and z-score calculations.",
          syntax: "np.std(data) - standard deviation\nnp.var(data) - variance (std squared)\npd.Series.std() - pandas std\nStandardization: (x - mean) / std\nZ-score: (value - mean) / std",
          examples: [
            {
              title: "Standard Deviation",
              description: "Calculating and using standard deviation",
              code: `import numpy as np

data = [10, 12, 14, 16, 18, 20]

# Standard deviation
std = np.std(data)
print(f"Standard Deviation: {std:.2f}")  # 3.42

# Variance
variance = np.var(data)
print(f"Variance: {variance:.2f}")  # 11.67

# Z-score normalization
mean = np.mean(data)
z_scores = (data - mean) / std
print(f"Z-scores: {z_scores}")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Calculate standard deviation",
              type: "fill",
              starterCode: `import numpy as np
std = np.___([1, 2, 3, 4, 5])`,
              answer: "std",
            },
            {
              question: "Calculate variance",
              type: "complete",
              starterCode: `import numpy as np
variance = np.___([1, 2, 3, 4, 5])`,
              answer: "var",
            },
            {
              question: "What measures data spread?",
              type: "fill",
              starterCode: `# ___ measures data spread`,
              answer: "standard deviation",
            },
          ],
        },
        {
          id: "python-ml-linear-regression",
          title: "Machine Learning Linear Regression",
          explanation: "Linear regression predicts a continuous target variable using a linear relationship with features. It finds the best-fit line through data points. Linear regression is simple, interpretable, and works well for many problems. It's the foundation for understanding more complex algorithms. Use it for predicting prices, sales, temperatures, and other continuous values.",
          syntax: "from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\nmodel.coef_ - coefficients\nmodel.intercept_ - intercept",
          examples: [
            {
              title: "Linear Regression",
              description: "Training a linear regression model",
              code: `from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Generate data
X = np.random.rand(100, 1) * 10
y = 2 * X.flatten() + 1 + np.random.randn(100) * 0.5

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Evaluate
print(f"R² Score: {r2_score(y_test, y_pred):.2f}")
print(f"MSE: {mean_squared_error(y_test, y_pred):.2f}")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import LinearRegression",
              type: "fill",
              starterCode: `from sklearn.linear_model import ___
model = LinearRegression()`,
              answer: "LinearRegression",
            },
            {
              question: "Train the model",
              type: "complete",
              starterCode: `model = LinearRegression()
model.___(X_train, y_train)`,
              answer: "fit",
            },
            {
              question: "What type of target does linear regression predict?",
              type: "fill",
              starterCode: `# Linear regression predicts ___ values`,
              answer: "continuous",
            },
          ],
        },
        {
          id: "python-ml-logistic-regression",
          title: "Machine Learning Logistic Regression",
          explanation: "Logistic regression predicts binary or categorical outcomes (classification). Despite its name, it's a classification algorithm. It uses the logistic function to output probabilities between 0 and 1. Logistic regression is interpretable and works well for binary classification problems. It's widely used in medical diagnosis, spam detection, and credit scoring.",
          syntax: "from sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\npredict_proba = model.predict_proba(X_test) - probabilities",
          examples: [
            {
              title: "Logistic Regression",
              description: "Binary classification with logistic regression",
              code: `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix
import numpy as np

# Generate binary classification data
X = np.random.rand(100, 2) * 10
y = (X[:, 0] + X[:, 1] > 10).astype(int)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import LogisticRegression",
              type: "fill",
              starterCode: `from sklearn.linear_model import ___
model = LogisticRegression()`,
              answer: "LogisticRegression",
            },
            {
              question: "Get prediction probabilities",
              type: "complete",
              starterCode: `model = LogisticRegression()
model.fit(X_train, y_train)
probabilities = model.___(X_test)`,
              answer: "predict_proba",
            },
            {
              question: "What type of problem does logistic regression solve?",
              type: "fill",
              starterCode: `# Logistic regression is for ___ problems`,
              answer: "classification",
            },
          ],
        },
        {
          id: "python-ml-knn",
          title: "Machine Learning KNN",
          explanation: "K-Nearest Neighbors (KNN) is a simple, instance-based learning algorithm. It classifies data points based on the majority class of their k nearest neighbors. KNN is non-parametric and makes no assumptions about data distribution. It's effective for small datasets but can be slow for large ones. Choose k carefully - too small causes overfitting, too large causes underfitting.",
          syntax: "from sklearn.neighbors import KNeighborsClassifier\nmodel = KNeighborsClassifier(n_neighbors=5)\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\nFor regression: KNeighborsRegressor",
          examples: [
            {
              title: "KNN Classifier",
              description: "Using KNN for classification",
              code: `from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import numpy as np

# Generate data
X = np.random.rand(100, 2) * 10
y = (X[:, 0] + X[:, 1] > 10).astype(int)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train KNN
model = KNeighborsClassifier(n_neighbors=5)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import KNeighborsClassifier",
              type: "fill",
              starterCode: `from sklearn.neighbors import ___
model = KNeighborsClassifier(n_neighbors=5)`,
              answer: "KNeighborsClassifier",
            },
            {
              question: "Create KNN with 3 neighbors",
              type: "complete",
              starterCode: `from sklearn.neighbors import KNeighborsClassifier
model = KNeighborsClassifier(___=3)`,
              answer: "n_neighbors",
            },
            {
              question: "What does K in KNN stand for?",
              type: "fill",
              starterCode: `# K stands for number of ___`,
              answer: "neighbors",
            },
          ],
        },
        {
          id: "python-ml-decision-tree",
          title: "Machine Learning Decision Tree",
          explanation: "Decision trees make decisions by asking a series of yes/no questions. They split data based on feature values to create a tree structure. Decision trees are interpretable, handle non-linear relationships, and require little data preprocessing. They can overfit, so use techniques like pruning or ensemble methods (Random Forest). Decision trees are the foundation for Random Forest and Gradient Boosting.",
          syntax: "from sklearn.tree import DecisionTreeClassifier\nmodel = DecisionTreeClassifier(max_depth=5)\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\nFor regression: DecisionTreeRegressor\nVisualize: plot_tree(model)",
          examples: [
            {
              title: "Decision Tree",
              description: "Training a decision tree classifier",
              code: `from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import numpy as np

# Generate data
X = np.random.rand(100, 2) * 10
y = (X[:, 0] + X[:, 1] > 10).astype(int)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train decision tree
model = DecisionTreeClassifier(max_depth=3)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import DecisionTreeClassifier",
              type: "fill",
              starterCode: `from sklearn.tree import ___
model = DecisionTreeClassifier()`,
              answer: "DecisionTreeClassifier",
            },
            {
              question: "Set maximum depth to 5",
              type: "complete",
              starterCode: `model = DecisionTreeClassifier(___=5)`,
              answer: "max_depth",
            },
            {
              question: "What problem can decision trees have?",
              type: "fill",
              starterCode: `# Decision trees can ___ (fit too closely to training data)`,
              answer: "overfit",
            },
          ],
        },
        {
          id: "python-ml-confusion-matrix",
          title: "Machine Learning Confusion Matrix",
          explanation: "Confusion matrix is a table showing classification performance. It displays true positives, true negatives, false positives, and false negatives. From confusion matrix, you can calculate accuracy, precision, recall, and F1-score. Confusion matrix helps understand where the model makes mistakes. It's essential for evaluating classification models, especially for imbalanced datasets.",
          syntax: "from sklearn.metrics import confusion_matrix\ncm = confusion_matrix(y_true, y_pred)\nfrom sklearn.metrics import classification_report\nreport = classification_report(y_true, y_pred)\nVisualize: sns.heatmap(cm)",
          examples: [
            {
              title: "Confusion Matrix",
              description: "Evaluating model with confusion matrix",
              code: `from sklearn.metrics import confusion_matrix, classification_report
import numpy as np

# Example predictions
y_true = [0, 1, 0, 1, 1, 0, 1, 0]
y_pred = [0, 1, 0, 1, 0, 0, 1, 1]

# Confusion matrix
cm = confusion_matrix(y_true, y_pred)
print("Confusion Matrix:")
print(cm)
# [[3 1]
#  [1 3]]

# Classification report
report = classification_report(y_true, y_pred)
print(report)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import confusion_matrix",
              type: "fill",
              starterCode: `from sklearn.metrics import ___
cm = confusion_matrix(y_true, y_pred)`,
              answer: "confusion_matrix",
            },
            {
              question: "Calculate confusion matrix",
              type: "complete",
              starterCode: `from sklearn.metrics import confusion_matrix
cm = ___(y_true, y_pred)
print(cm)`,
              answer: "confusion_matrix",
            },
            {
              question: "What does confusion matrix show?",
              type: "fill",
              starterCode: `# Confusion matrix shows classification ___`,
              answer: "performance",
            },
          ],
        },
        {
          id: "python-ml-k-means",
          title: "Machine Learning K-means",
          explanation: "K-means is an unsupervised clustering algorithm that groups similar data points into k clusters. It finds cluster centers (centroids) and assigns points to nearest centroids. K-means is simple, fast, and works well for spherical clusters. You must specify k (number of clusters) beforehand. K-means is used for customer segmentation, image compression, and data exploration.",
          syntax: "from sklearn.cluster import KMeans\nmodel = KMeans(n_clusters=3)\nmodel.fit(X)\nlabels = model.labels_\ncentroids = model.cluster_centers_\npredictions = model.predict(X_new)",
          examples: [
            {
              title: "K-means Clustering",
              description: "Clustering data with K-means",
              code: `from sklearn.cluster import KMeans
import numpy as np
import matplotlib.pyplot as plt

# Generate sample data
X = np.random.rand(100, 2) * 10

# Apply K-means
kmeans = KMeans(n_clusters=3, random_state=42)
kmeans.fit(X)

# Get cluster labels and centers
labels = kmeans.labels_
centroids = kmeans.cluster_centers_

print(f"Number of clusters: {len(centroids)}")
print(f"Cluster centers: {centroids}")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import KMeans",
              type: "fill",
              starterCode: `from sklearn.cluster import ___
model = KMeans(n_clusters=3)`,
              answer: "KMeans",
            },
            {
              question: "Create K-means with 5 clusters",
              type: "complete",
              starterCode: `from sklearn.cluster import KMeans
model = KMeans(___=5)`,
              answer: "n_clusters",
            },
            {
              question: "What type of learning is K-means?",
              type: "fill",
              starterCode: `# K-means is ___ learning (no labels)`,
              answer: "unsupervised",
            },
          ],
        },
        {
          id: "python-ml-cross-validation",
          title: "Machine Learning Cross Validation",
          explanation: "Cross-validation splits data into multiple folds for training and testing. It provides more reliable performance estimates than a single train-test split. K-fold cross-validation divides data into k folds, trains on k-1 folds, tests on remaining fold, and repeats. Cross-validation helps detect overfitting and provides better model evaluation. It's essential for model selection and hyperparameter tuning.",
          syntax: "from sklearn.model_selection import cross_val_score\nscores = cross_val_score(model, X, y, cv=5)\nfrom sklearn.model_selection import KFold\nkf = KFold(n_splits=5)\nfor train_idx, test_idx in kf.split(X):\n    # train and test",
          examples: [
            {
              title: "Cross Validation",
              description: "Using cross-validation for model evaluation",
              code: `from sklearn.model_selection import cross_val_score, KFold
from sklearn.linear_model import LogisticRegression
import numpy as np

# Generate data
X = np.random.rand(100, 2) * 10
y = (X[:, 0] + X[:, 1] > 10).astype(int)

# Create model
model = LogisticRegression()

# 5-fold cross-validation
scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')
print(f"Cross-validation scores: {scores}")
print(f"Mean score: {scores.mean():.2f} (+/- {scores.std() * 2:.2f})")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import cross_val_score",
              type: "fill",
              starterCode: `from sklearn.model_selection import ___
scores = cross_val_score(model, X, y, cv=5)`,
              answer: "cross_val_score",
            },
            {
              question: "Perform 5-fold cross-validation",
              type: "complete",
              starterCode: `scores = cross_val_score(model, X, y, ___=5)`,
              answer: "cv",
            },
            {
              question: "What does cross-validation help detect?",
              type: "fill",
              starterCode: `# Cross-validation helps detect ___`,
              answer: "overfitting",
            },
          ],
        },
        {
          id: "python-ml-auc-roc",
          title: "Machine Learning AUC-ROC",
          explanation: "AUC-ROC (Area Under the ROC Curve) measures classification model performance. ROC curve plots True Positive Rate vs False Positive Rate at different thresholds. AUC ranges from 0 to 1, where 1 is perfect and 0.5 is random. Higher AUC means better model performance. AUC-ROC is especially useful for binary classification and imbalanced datasets. It shows model's ability to distinguish between classes.",
          syntax: "from sklearn.metrics import roc_curve, auc, roc_auc_score\nfpr, tpr, thresholds = roc_curve(y_true, y_scores)\nroc_auc = auc(fpr, tpr)\nroc_auc = roc_auc_score(y_true, y_scores)\nplt.plot(fpr, tpr) - plot ROC curve",
          examples: [
            {
              title: "AUC-ROC",
              description: "Calculating and plotting ROC curve",
              code: `from sklearn.metrics import roc_curve, auc, roc_auc_score
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import numpy as np

# Generate data
X = np.random.rand(100, 2) * 10
y = (X[:, 0] + X[:, 1] > 10).astype(int)

# Split and train
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = LogisticRegression()
model.fit(X_train, y_train)

# Get probabilities
y_scores = model.predict_proba(X_test)[:, 1]

# Calculate ROC
fpr, tpr, thresholds = roc_curve(y_test, y_scores)
roc_auc = auc(fpr, tpr)

print(f"AUC-ROC: {roc_auc:.2f}")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import roc_auc_score",
              type: "fill",
              starterCode: `from sklearn.metrics import ___
score = roc_auc_score(y_true, y_scores)`,
              answer: "roc_auc_score",
            },
            {
              question: "Calculate AUC-ROC score",
              type: "complete",
              starterCode: `from sklearn.metrics import roc_auc_score
score = ___(y_true, y_scores)
print(score)`,
              answer: "roc_auc_score",
            },
            {
              question: "What is the perfect AUC-ROC score?",
              type: "fill",
              starterCode: `# Perfect AUC-ROC score is ___`,
              answer: "1.0",
            },
          ],
        },
      ],
    },
    {
      id: "dsa",
      title: "Python DSA",
      topics: [
        {
          id: "python-dsa-lists-arrays",
          title: "Python DSA Lists & Arrays",
          explanation: "Lists and arrays are fundamental data structures for storing collections of elements. Python lists are dynamic and can hold different types. NumPy arrays are more efficient for numerical computations. Understanding lists and arrays is essential for implementing other data structures and algorithms. They support indexing, slicing, and various operations.",
          syntax: "list = [1, 2, 3] - Python list\narr = np.array([1, 2, 3]) - NumPy array\nlist.append(item) - add to end\nlist.insert(index, item) - insert\nlist.pop() - remove last\nAccess: list[index], list[start:end]",
          examples: [
            {
              title: "Lists and Arrays",
              description: "Working with lists and arrays",
              code: `# Python list
my_list = [1, 2, 3, 4, 5]
my_list.append(6)
my_list.insert(0, 0)
print(my_list)  # [0, 1, 2, 3, 4, 5, 6]

# NumPy array
import numpy as np
arr = np.array([1, 2, 3, 4, 5])
arr = arr * 2
print(arr)  # [2 4 6 8 10]

# Slicing
print(my_list[1:4])  # [1, 2, 3]`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add element to end of list",
              type: "fill",
              starterCode: `my_list = [1, 2, 3]
my_list.___(4)
print(my_list)`,
              answer: "append",
            },
            {
              question: "Create NumPy array from list",
              type: "complete",
              starterCode: `import numpy as np
numbers = [1, 2, 3]
arr = np.___(numbers)`,
              answer: "array",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `my_list = [1, 2, 3, 4, 5]
print(my_list[1:4])`,
              answer: "[2, 3, 4]",
            },
          ],
        },
        {
          id: "python-dsa-stacks",
          title: "Python DSA Stacks",
          explanation: "Stacks are LIFO (Last In First Out) data structures. Elements are added and removed from the top. Stacks are used in expression evaluation, undo operations, and function call management. Python lists can implement stacks using append() (push) and pop() (pop). Stacks support push, pop, peek, and isEmpty operations.",
          syntax: "stack = [] - create stack\nstack.append(item) - push\nstack.pop() - pop (removes and returns)\nstack[-1] - peek (view top)\nlen(stack) == 0 - check empty\nOr use collections.deque for better performance",
          examples: [
            {
              title: "Stack Implementation",
              description: "Implementing a stack using list",
              code: `# Stack using list
stack = []

# Push operations
stack.append(1)
stack.append(2)
stack.append(3)
print(stack)  # [1, 2, 3]

# Pop operation
top = stack.pop()
print(top)  # 3
print(stack)  # [1, 2]

# Peek
if stack:
    print(stack[-1])  # 2

# Check if empty
print(len(stack) == 0)  # False`,
            },
          ],
          practiceQuestions: [
            {
              question: "Push element onto stack",
              type: "fill",
              starterCode: `stack = []
stack.___(5)
print(stack)`,
              answer: "append",
            },
            {
              question: "Pop element from stack",
              type: "complete",
              starterCode: `stack = [1, 2, 3]
top = stack.___()
print(top)`,
              answer: "pop",
            },
            {
              question: "What principle does stack follow?",
              type: "fill",
              starterCode: `# Stack follows ___ principle`,
              answer: "LIFO",
            },
          ],
        },
        {
          id: "python-dsa-queues",
          title: "Python DSA Queues",
          explanation: "Queues are FIFO (First In First Out) data structures. Elements are added at the rear and removed from the front. Queues are used in task scheduling, breadth-first search, and message processing. Python's collections.deque is efficient for queues. Queues support enqueue (add), dequeue (remove), front, and isEmpty operations.",
          syntax: "from collections import deque\nqueue = deque() - create queue\nqueue.append(item) - enqueue\nqueue.popleft() - dequeue\nqueue[0] - front element\nlen(queue) == 0 - check empty",
          examples: [
            {
              title: "Queue Implementation",
              description: "Implementing a queue using deque",
              code: `from collections import deque

# Create queue
queue = deque()

# Enqueue operations
queue.append(1)
queue.append(2)
queue.append(3)
print(queue)  # deque([1, 2, 3])

# Dequeue operation
front = queue.popleft()
print(front)  # 1
print(queue)  # deque([2, 3])

# Front element
if queue:
    print(queue[0])  # 2`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import deque from collections",
              type: "fill",
              starterCode: `from collections import ___
queue = deque()`,
              answer: "deque",
            },
            {
              question: "Remove element from front of queue",
              type: "complete",
              starterCode: `from collections import deque
queue = deque([1, 2, 3])
front = queue.___()
print(front)`,
              answer: "popleft",
            },
            {
              question: "What principle does queue follow?",
              type: "fill",
              starterCode: `# Queue follows ___ principle`,
              answer: "FIFO",
            },
          ],
        },
        {
          id: "python-dsa-linked-lists",
          title: "Python DSA Linked Lists",
          explanation: "Linked lists are linear data structures where elements are stored in nodes. Each node contains data and a reference to the next node. Linked lists allow efficient insertion and deletion. Unlike arrays, linked lists don't require contiguous memory. Types include singly linked lists, doubly linked lists, and circular linked lists. Python doesn't have built-in linked lists, so you implement them using classes.",
          syntax: "class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\nclass LinkedList:\n    def __init__(self):\n        self.head = None\nMethods: insert(), delete(), search(), display()",
          examples: [
            {
              title: "Linked List Implementation",
              description: "Creating a simple linked list",
              code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Usage
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.display()  # 1 -> 2 -> 3 -> None`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a Node class",
              type: "fill",
              starterCode: `class ___(Node):
    def __init__(self, data):
        self.data = data
        self.next = None`,
              answer: "Node",
            },
            {
              question: "Initialize linked list head",
              type: "complete",
              starterCode: `class LinkedList:
    def __init__(self):
        self.___ = None`,
              answer: "head",
            },
            {
              question: "What does each node contain?",
              type: "fill",
              starterCode: `# Each node contains data and ___ to next node`,
              answer: "reference",
            },
          ],
        },
        {
          id: "python-dsa-hash-tables",
          title: "Python DSA Hash Tables",
          explanation: "Hash tables (dictionaries in Python) store key-value pairs with O(1) average time complexity for operations. They use hash functions to map keys to array indices. Hash tables are efficient for lookups, insertions, and deletions. Python dictionaries are implemented as hash tables. Collision handling methods include chaining and open addressing.",
          syntax: "dict = {} - create dictionary\ndict[key] = value - insert/update\ndict[key] - access value\ndel dict[key] - delete\nkey in dict - check existence\nhash(key) - hash function",
          examples: [
            {
              title: "Hash Table (Dictionary)",
              description: "Using Python dictionaries as hash tables",
              code: `# Python dictionary is a hash table
hash_table = {}

# Insert
hash_table['name'] = 'Alice'
hash_table['age'] = 25
hash_table['city'] = 'New York'
print(hash_table)  # {'name': 'Alice', 'age': 25, 'city': 'New York'}

# Access
print(hash_table['name'])  # Alice

# Check existence
if 'age' in hash_table:
    print(f"Age: {hash_table['age']}")  # Age: 25

# Delete
del hash_table['city']
print(hash_table)  # {'name': 'Alice', 'age': 25}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create an empty dictionary",
              type: "fill",
              starterCode: `hash_table = ___
hash_table['key'] = 'value'`,
              answer: "{}",
            },
            {
              question: "Check if key exists in dictionary",
              type: "complete",
              starterCode: `data = {'a': 1, 'b': 2}
if 'a' ___ data:
    print("Exists")`,
              answer: "in",
            },
            {
              question: "What is the average time complexity of hash table lookup?",
              type: "fill",
              starterCode: `# Average time complexity is O(___)`,
              answer: "1",
            },
          ],
        },
        {
          id: "python-dsa-trees",
          title: "Python DSA Trees",
          explanation: "Trees are hierarchical data structures with nodes connected by edges. The top node is the root. Trees are used for hierarchical data, searching, and sorting. Binary trees have at most two children per node. Tree traversals include inorder, preorder, and postorder. Binary Search Trees (BST) maintain ordering for efficient searching. Trees are fundamental for many algorithms.",
          syntax: "class TreeNode:\n    def __init__(self, data):\n        self.data = data\n        self.left = None\n        self.right = None\nTraversals: inorder, preorder, postorder\nBST: left < root < right",
          examples: [
            {
              title: "Binary Tree",
              description: "Creating and traversing a binary tree",
              code: `class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.data, end=" ")
        inorder_traversal(root.right)

# Create tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

# Traverse
inorder_traversal(root)  # 4 2 5 1 3`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a TreeNode class",
              type: "fill",
              starterCode: `class ___(TreeNode):
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None`,
              answer: "TreeNode",
            },
            {
              question: "Perform inorder traversal",
              type: "complete",
              starterCode: `def inorder(root):
    if root:
        inorder(root.___)
        print(root.data)
        inorder(root.right)`,
              answer: "left",
            },
            {
              question: "What is the top node of a tree called?",
              type: "fill",
              starterCode: `# The top node is called the ___`,
              answer: "root",
            },
          ],
        },
        {
          id: "python-dsa-graphs",
          title: "Python DSA Graphs",
          explanation: "Graphs are collections of nodes (vertices) connected by edges. Graphs represent relationships and connections. Types include directed (edges have direction) and undirected graphs. Graph representations include adjacency list and adjacency matrix. Graph algorithms include BFS (breadth-first search) and DFS (depth-first search). Graphs are used in social networks, maps, and network analysis.",
          syntax: "graph = {node: [neighbors]} - adjacency list\ngraph = defaultdict(list) - using defaultdict\nBFS: queue-based traversal\nDFS: stack/recursive traversal\nVisited set to track visited nodes",
          examples: [
            {
              title: "Graph Representation",
              description: "Creating and traversing a graph",
              code: `from collections import defaultdict, deque

# Graph as adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
}

# BFS traversal
def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        node = queue.popleft()
        print(node, end=" ")
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

bfs(graph, 'A')  # A B C D`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create graph as adjacency list",
              type: "fill",
              starterCode: `graph = {
    'A': ['B', 'C'],
    'B': ['A']
}
# This is an adjacency ___`,
              answer: "list",
            },
            {
              question: "Import deque for BFS",
              type: "complete",
              starterCode: `from collections import ___
queue = deque([start])`,
              answer: "deque",
            },
            {
              question: "What does BFS stand for?",
              type: "fill",
              starterCode: `# BFS stands for Breadth-___ Search`,
              answer: "First",
            },
          ],
        },
        {
          id: "python-dsa-searching-algorithms",
          title: "Python DSA Searching Algorithms",
          explanation: "Searching algorithms find elements in data structures. Linear search checks each element sequentially (O(n)). Binary search works on sorted arrays by repeatedly dividing search space (O(log n)). Binary search is much faster but requires sorted data. Other search algorithms include hash-based search (O(1)) and tree-based search. Choosing the right algorithm depends on data structure and requirements.",
          syntax: "Linear: for item in list: if item == target\nBinary: left, right = 0, len(arr)-1\nwhile left <= right: mid = (left+right)//2\nif arr[mid] == target: return mid\nelif arr[mid] < target: left = mid+1\nelse: right = mid-1",
          examples: [
            {
              title: "Searching Algorithms",
              description: "Linear and binary search",
              code: `# Linear search
def linear_search(arr, target):
    for i, item in enumerate(arr):
        if item == target:
            return i
    return -1

# Binary search (sorted array)
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Test
arr = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(arr, 7))  # 3
print(linear_search(arr, 7))  # 3`,
            },
          ],
          practiceQuestions: [
            {
              question: "Perform linear search",
              type: "fill",
              starterCode: `def linear_search(arr, target):
    for item in arr:
        if item == ___(target):
            return True
    return False`,
              answer: "item",
            },
            {
              question: "Calculate midpoint in binary search",
              type: "complete",
              starterCode: `mid = (left + right) ___ 2`,
              answer: "//",
            },
            {
              question: "What is binary search time complexity?",
              type: "fill",
              starterCode: `# Binary search is O(___ n)`,
              answer: "log",
            },
          ],
        },
        {
          id: "python-dsa-sorting-algorithms",
          title: "Python DSA Sorting Algorithms",
          explanation: "Sorting algorithms arrange elements in order. Common algorithms include Bubble Sort (O(n²)), Selection Sort (O(n²)), Insertion Sort (O(n²)), Merge Sort (O(n log n)), Quick Sort (O(n log n) average), and Heap Sort (O(n log n)). Python's built-in sorted() uses Timsort (hybrid). Understanding sorting helps with algorithm design and optimization.",
          syntax: "sorted(list) - built-in sort (returns new list)\nlist.sort() - in-place sort\nBubble: compare adjacent, swap if needed\nQuick: choose pivot, partition, recurse\nMerge: divide, sort halves, merge",
          examples: [
            {
              title: "Sorting Algorithms",
              description: "Different sorting approaches",
              code: `# Built-in sort
numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = sorted(numbers)
print(sorted_numbers)  # [11, 12, 22, 25, 34, 64, 90]

# In-place sort
numbers.sort()
print(numbers)  # [11, 12, 22, 25, 34, 64, 90]

# Bubble sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

print(bubble_sort([64, 34, 25, 12]))  # [12, 25, 34, 64]`,
            },
          ],
          practiceQuestions: [
            {
              question: "Sort list using built-in function",
              type: "fill",
              starterCode: `numbers = [3, 1, 4, 2]
sorted_nums = ___(numbers)
print(sorted_nums)`,
              answer: "sorted",
            },
            {
              question: "Sort list in-place",
              type: "complete",
              starterCode: `numbers = [3, 1, 4, 2]
numbers.___()
print(numbers)`,
              answer: "sort",
            },
            {
              question: "What is the time complexity of bubble sort?",
              type: "fill",
              starterCode: `# Bubble sort is O(___²)`,
              answer: "n",
            },
          ],
        },
      ],
    },
    {
      id: "databases",
      title: "Python Databases",
      topics: [
        {
          id: "python-mysql-create-db",
          title: "Python MySQL Create DB",
          explanation: "MySQL is a popular relational database management system. Python connects to MySQL using libraries like mysql-connector-python or PyMySQL. You can create databases, tables, and manage data programmatically. Creating a database is the first step before creating tables and storing data. Always handle connection errors and close connections properly.",
          syntax: "import mysql.connector\nconn = mysql.connector.connect(host='localhost', user='user', password='pass')\ncursor = conn.cursor()\ncursor.execute('CREATE DATABASE dbname')\nconn.commit()\nconn.close()",
          examples: [
            {
              title: "Create MySQL Database",
              description: "Creating a database in MySQL",
              code: `import mysql.connector

# Connect to MySQL server
conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password'
)

cursor = conn.cursor()

# Create database
cursor.execute("CREATE DATABASE IF NOT EXISTS mydb")

print("Database created successfully")

# Close connection
cursor.close()
conn.close()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import mysql.connector",
              type: "fill",
              starterCode: `import ___
conn = mysql.connector.connect(host='localhost')`,
              answer: "mysql.connector",
            },
            {
              question: "Create database using cursor",
              type: "complete",
              starterCode: `cursor.___("CREATE DATABASE mydb")`,
              answer: "execute",
            },
            {
              question: "What method executes SQL commands?",
              type: "fill",
              starterCode: `cursor.___("SQL command")`,
              answer: "execute",
            },
          ],
        },
        {
          id: "python-mysql-crud",
          title: "Python MySQL CRUD",
          explanation: "CRUD stands for Create, Read, Update, Delete - the four basic database operations. Create inserts new records, Read retrieves data, Update modifies existing records, and Delete removes records. Python's MySQL connector provides methods to execute SQL commands for all CRUD operations. Always use parameterized queries to prevent SQL injection.",
          syntax: "INSERT INTO table VALUES (...)\nSELECT * FROM table WHERE condition\nUPDATE table SET column=value WHERE condition\nDELETE FROM table WHERE condition\nUse %s for parameters: cursor.execute(query, (params,))",
          examples: [
            {
              title: "CRUD Operations",
              description: "Performing CRUD operations in MySQL",
              code: `import mysql.connector

conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password',
    database='mydb'
)
cursor = conn.cursor()

# Create (Insert)
cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", ("Alice", "alice@example.com"))
conn.commit()

# Read (Select)
cursor.execute("SELECT * FROM users")
results = cursor.fetchall()
for row in results:
    print(row)

# Update
cursor.execute("UPDATE users SET email=%s WHERE name=%s", ("newemail@example.com", "Alice"))
conn.commit()

# Delete
cursor.execute("DELETE FROM users WHERE name=%s", ("Alice",))
conn.commit()

cursor.close()
conn.close()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Insert data into table",
              type: "fill",
              starterCode: `cursor.execute("INSERT INTO users (name) VALUES (%s)", ("Alice",))
conn.___()`,
              answer: "commit",
            },
            {
              question: "Fetch all results from query",
              type: "complete",
              starterCode: `cursor.execute("SELECT * FROM users")
results = cursor.___()`,
              answer: "fetchall",
            },
            {
              question: "What does CRUD stand for?",
              type: "fill",
              starterCode: `# CRUD: Create, Read, Update, ___`,
              answer: "Delete",
            },
          ],
        },
        {
          id: "python-mysql-joins",
          title: "Python MySQL Joins",
          explanation: "Joins combine rows from multiple tables based on related columns. INNER JOIN returns matching rows, LEFT JOIN returns all left table rows, RIGHT JOIN returns all right table rows, and FULL JOIN returns all rows. Joins are essential for querying related data across tables. Understanding joins is crucial for working with relational databases.",
          syntax: "SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id\nLEFT JOIN - all left rows\nRIGHT JOIN - all right rows\nFULL JOIN - all rows\nMultiple joins: JOIN ... JOIN ...",
          examples: [
            {
              title: "SQL Joins",
              description: "Using different types of joins",
              code: `import mysql.connector

conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password',
    database='mydb'
)
cursor = conn.cursor()

# INNER JOIN
query = """
SELECT users.name, orders.product
FROM users
INNER JOIN orders ON users.id = orders.user_id
"""
cursor.execute(query)
results = cursor.fetchall()
for row in results:
    print(row)

# LEFT JOIN
query = """
SELECT users.name, orders.product
FROM users
LEFT JOIN orders ON users.id = orders.user_id
"""
cursor.execute(query)

cursor.close()
conn.close()`,
            },
          ],
          practiceQuestions: [
            {
              question: "Perform INNER JOIN",
              type: "fill",
              starterCode: `query = "SELECT * FROM table1 ___ JOIN table2 ON table1.id = table2.id"
cursor.execute(query)`,
              answer: "INNER",
            },
            {
              question: "Use LEFT JOIN to get all left table rows",
              type: "complete",
              starterCode: `query = "SELECT * FROM users ___ JOIN orders ON users.id = orders.user_id"
cursor.execute(query)`,
              answer: "LEFT",
            },
            {
              question: "What join returns only matching rows?",
              type: "fill",
              starterCode: `# ___ JOIN returns only matching rows`,
              answer: "INNER",
            },
          ],
        },
        {
          id: "python-mongodb-create-db",
          title: "Python MongoDB Create DB",
          explanation: "MongoDB is a NoSQL document database that stores data in JSON-like documents. Python connects to MongoDB using pymongo library. In MongoDB, databases and collections are created automatically when you first insert data. MongoDB is schema-less, flexible, and great for unstructured data. It's widely used in modern web applications.",
          syntax: "from pymongo import MongoClient\nclient = MongoClient('mongodb://localhost:27017/')\ndb = client['dbname']\ncollection = db['collectionname']\ncollection.insert_one({}) - creates collection\nDatabases and collections created on first insert",
          examples: [
            {
              title: "Create MongoDB Database",
              description: "Connecting and creating database in MongoDB",
              code: `from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')

# Create/access database (created on first use)
db = client['mydatabase']

# Create/access collection (created on first use)
collection = db['users']

# Insert document (creates collection if doesn't exist)
collection.insert_one({
    'name': 'Alice',
    'email': 'alice@example.com',
    'age': 25
})

print("Database and collection created")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import MongoClient from pymongo",
              type: "fill",
              starterCode: `from pymongo import ___
client = MongoClient('mongodb://localhost:27017/')`,
              answer: "MongoClient",
            },
            {
              question: "Access a database",
              type: "complete",
              starterCode: `client = MongoClient('mongodb://localhost:27017/')
db = client[___]`,
              answer: "'mydb'",
            },
            {
              question: "When is MongoDB database created?",
              type: "fill",
              starterCode: `# Database is created on first ___`,
              answer: "insert",
            },
          ],
        },
        {
          id: "python-mongodb-collections",
          title: "Python MongoDB Collections",
          explanation: "Collections in MongoDB are like tables in relational databases. They store documents (records). Collections are schema-less, meaning documents can have different structures. Collections are created automatically when you first insert a document. You can create indexes on collections for faster queries. Collections organize related documents together.",
          syntax: "db['collectionname'] - access collection\ncollection = db.collectionname - alternative syntax\ncollection.insert_one({}) - insert document\ncollection.find() - query documents\ncollection.create_index('field') - create index",
          examples: [
            {
              title: "Working with Collections",
              description: "Creating and using collections",
              code: `from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']

# Access collection (created on first insert)
users = db['users']

# Insert documents
users.insert_one({'name': 'Alice', 'age': 25})
users.insert_one({'name': 'Bob', 'age': 30})

# Find documents
for user in users.find():
    print(user)

# Create index
users.create_index('name')
print("Index created")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Access a collection",
              type: "fill",
              starterCode: `db = client['mydb']
collection = db[___]`,
              answer: "'users'",
            },
            {
              question: "Insert one document into collection",
              type: "complete",
              starterCode: `collection.___({'name': 'Alice', 'age': 25})`,
              answer: "insert_one",
            },
            {
              question: "What are MongoDB collections similar to?",
              type: "fill",
              starterCode: `# Collections are like ___ in relational databases`,
              answer: "tables",
            },
          ],
        },
        {
          id: "python-mongodb-crud",
          title: "Python MongoDB CRUD",
          explanation: "MongoDB CRUD operations work with documents instead of rows. Create uses insert_one() or insert_many(). Read uses find() or find_one(). Update uses update_one() or update_many(). Delete uses delete_one() or delete_many(). MongoDB queries use dictionaries for filtering. CRUD operations are straightforward and flexible in MongoDB.",
          syntax: "insert_one({}) - create one\insert_many([{}, {}]) - create many\nfind() - read all\nfind_one({}) - read one\nupdate_one({filter}, {$set: {data}}) - update\ndelete_one({filter}) - delete\nUse dictionaries for queries",
          examples: [
            {
              title: "MongoDB CRUD",
              description: "Performing CRUD operations",
              code: `from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']
collection = db['users']

# Create
collection.insert_one({'name': 'Alice', 'age': 25})
collection.insert_many([
    {'name': 'Bob', 'age': 30},
    {'name': 'Charlie', 'age': 35}
])

# Read
user = collection.find_one({'name': 'Alice'})
print(user)

all_users = collection.find({'age': {'$gt': 25}})
for user in all_users:
    print(user)

# Update
collection.update_one({'name': 'Alice'}, {'$set': {'age': 26}})

# Delete
collection.delete_one({'name': 'Bob'})`,
            },
          ],
          practiceQuestions: [
            {
              question: "Insert one document",
              type: "fill",
              starterCode: `collection.___({'name': 'Alice'})`,
              answer: "insert_one",
            },
            {
              question: "Find one document matching filter",
              type: "complete",
              starterCode: `user = collection.___({'name': 'Alice'})`,
              answer: "find_one",
            },
            {
              question: "Update document using $set",
              type: "fill",
              starterCode: `collection.update_one({'name': 'Alice'}, {'$___': {'age': 26}})`,
              answer: "set",
            },
          ],
        },
        {
          id: "python-mongodb-queries",
          title: "Python MongoDB Queries",
          explanation: "MongoDB queries use dictionaries to filter documents. Query operators include $gt (greater than), $lt (less than), $eq (equal), $ne (not equal), $in (in array), $and, $or, and more. Queries are flexible and powerful. You can query nested fields using dot notation. MongoDB queries are intuitive and similar to filtering Python dictionaries.",
          syntax: "find({'field': 'value'}) - exact match\nfind({'age': {'$gt': 25}}) - greater than\nfind({'$or': [{}, {}]}) - OR condition\nfind({'field.nested': 'value'}) - nested field\nfind().sort('field', 1) - sort ascending\nfind().limit(10) - limit results",
          examples: [
            {
              title: "MongoDB Queries",
              description: "Querying documents in MongoDB",
              code: `from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']
collection = db['users']

# Exact match
results = collection.find({'name': 'Alice'})

# Greater than
results = collection.find({'age': {'$gt': 25}})

# Multiple conditions
results = collection.find({
    'age': {'$gte': 18, '$lte': 65},
    'city': 'New York'
})

# OR condition
results = collection.find({
    '$or': [
        {'age': {'$lt': 18}},
        {'age': {'$gt': 65}}
    ]
})

# Sort and limit
results = collection.find().sort('age', 1).limit(10)
for result in results:
    print(result)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Query documents with age greater than 25",
              type: "fill",
              starterCode: `results = collection.find({'age': {'$___': 25}})`,
              answer: "gt",
            },
            {
              question: "Sort results by age ascending",
              type: "complete",
              starterCode: `results = collection.find().___(___, 1)`,
              answer: "sort, 'age'",
            },
            {
              question: "What operator means 'greater than'?",
              type: "fill",
              starterCode: `# $___ means greater than`,
              answer: "gt",
            },
          ],
        },
      ],
    },
    {
      id: "reference",
      title: "Python Reference",
      topics: [
        {
          id: "python-reference-builtin-functions",
          title: "Python Reference Built-in Functions",
          explanation: "Python provides many built-in functions that are always available. These include print(), len(), type(), str(), int(), float(), max(), min(), sum(), sorted(), range(), and many more. Built-in functions don't require imports and are part of Python's core functionality. They're essential for everyday programming tasks.",
          syntax: "print(value) - output\nlen(sequence) - length\ntype(obj) - type\nstr(obj) - convert to string\nint(obj) - convert to int\nmax(iterable) - maximum\nmin(iterable) - minimum\nsum(iterable) - sum\nsorted(iterable) - sorted list\nrange(start, stop, step) - number sequence",
          examples: [
            {
              title: "Built-in Functions",
              description: "Using common built-in functions",
              code: `# Common built-in functions
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

print(len(numbers))  # 8
print(max(numbers))  # 9
print(min(numbers))  # 1
print(sum(numbers))  # 31
print(sorted(numbers))  # [1, 1, 2, 3, 4, 5, 6, 9]

# Type conversion
x = 42
print(type(x))  # <class 'int'>
print(str(x))  # '42'
print(float(x))  # 42.0

# Range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4`,
            },
          ],
          practiceQuestions: [
            {
              question: "Get length of a list",
              type: "fill",
              starterCode: `my_list = [1, 2, 3, 4]
length = ___(my_list)
print(length)`,
              answer: "len",
            },
            {
              question: "Find maximum value",
              type: "complete",
              starterCode: `numbers = [10, 5, 20, 15]
maximum = ___(numbers)
print(maximum)`,
              answer: "max",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `numbers = [1, 2, 3, 4, 5]
print(sum(numbers))`,
              answer: "15",
            },
          ],
        },
        {
          id: "python-reference-string-methods",
          title: "Python Reference String Methods",
          explanation: "String methods operate on string objects. Common methods include upper(), lower(), strip(), split(), join(), replace(), find(), startswith(), endswith(), isdigit(), isalpha(), and format(). String methods return new strings (strings are immutable). Methods help manipulate and analyze text data effectively.",
          syntax: "str.upper() - uppercase\nstr.lower() - lowercase\nstr.strip() - remove whitespace\nstr.split(sep) - split into list\nstr.join(iterable) - join elements\nstr.replace(old, new) - replace\nstr.find(sub) - find substring\nstr.startswith(prefix) - check prefix\nstr.endswith(suffix) - check suffix",
          examples: [
            {
              title: "String Methods",
              description: "Using string methods",
              code: `text = "  Hello, Python!  "

# Case conversion
print(text.upper())  # "  HELLO, PYTHON!  "
print(text.lower())  # "  hello, python!  "

# Whitespace
print(text.strip())  # "Hello, Python!"

# Splitting and joining
words = text.strip().split(", ")
print(words)  # ['Hello', 'Python!']
print("-".join(words))  # "Hello-Python!"

# Finding and replacing
print(text.find("Python"))  # 9
print(text.replace("Python", "World"))  # "  Hello, World!  "

# Checking
print(text.startswith("Hello"))  # False (has leading space)
print("123".isdigit())  # True`,
            },
          ],
          practiceQuestions: [
            {
              question: "Convert string to uppercase",
              type: "fill",
              starterCode: `text = "hello"
upper_text = text.___()
print(upper_text)`,
              answer: "upper",
            },
            {
              question: "Split string by comma",
              type: "complete",
              starterCode: `text = "a,b,c"
items = text.___(',')
print(items)`,
              answer: "split",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `text = "  Python  "
print(text.strip())`,
              answer: "Python",
            },
          ],
        },
        {
          id: "python-reference-list-methods",
          title: "Python Reference List Methods",
          explanation: "List methods modify or query lists. Common methods include append(), extend(), insert(), remove(), pop(), index(), count(), sort(), reverse(), and copy(). Lists are mutable, so most methods modify the list in-place. Understanding list methods is essential for working with collections of data.",
          syntax: "list.append(item) - add to end\nlist.extend(iterable) - add multiple\nlist.insert(index, item) - insert\nlist.remove(item) - remove first occurrence\nlist.pop(index) - remove and return\nlist.index(item) - find index\nlist.count(item) - count occurrences\nlist.sort() - sort in-place\nlist.reverse() - reverse in-place",
          examples: [
            {
              title: "List Methods",
              description: "Using list methods",
              code: `my_list = [1, 2, 3]

# Adding elements
my_list.append(4)
print(my_list)  # [1, 2, 3, 4]

my_list.extend([5, 6])
print(my_list)  # [1, 2, 3, 4, 5, 6]

my_list.insert(0, 0)
print(my_list)  # [0, 1, 2, 3, 4, 5, 6]

# Removing elements
my_list.remove(3)
print(my_list)  # [0, 1, 2, 4, 5, 6]

popped = my_list.pop()
print(popped)  # 6
print(my_list)  # [0, 1, 2, 4, 5]

# Querying
print(my_list.index(2))  # 2
print(my_list.count(1))  # 1

# Sorting
my_list.sort(reverse=True)
print(my_list)  # [5, 4, 2, 1, 0]`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add element to end of list",
              type: "fill",
              starterCode: `my_list = [1, 2, 3]
my_list.___(4)
print(my_list)`,
              answer: "append",
            },
            {
              question: "Find index of element",
              type: "complete",
              starterCode: `my_list = [10, 20, 30]
idx = my_list.___(20)
print(idx)`,
              answer: "index",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `my_list = [3, 1, 4, 1, 5]
print(my_list.count(1))`,
              answer: "2",
            },
          ],
        },
        {
          id: "python-reference-dict-set-methods",
          title: "Python Reference Dict / Set Methods",
          explanation: "Dictionary methods include keys(), values(), items(), get(), update(), pop(), popitem(), and clear(). Set methods include add(), remove(), discard(), union(), intersection(), difference(), and issubset(). These methods enable efficient manipulation of key-value pairs and unique collections.",
          syntax: "dict.keys() - all keys\ndict.values() - all values\ndict.items() - key-value pairs\ndict.get(key, default) - get with default\ndict.update(other) - update\nset.add(item) - add\nset.remove(item) - remove (raises error)\nset.discard(item) - remove (no error)\nset.union(other) - union\nset.intersection(other) - intersection",
          examples: [
            {
              title: "Dict and Set Methods",
              description: "Using dictionary and set methods",
              code: `# Dictionary methods
person = {'name': 'Alice', 'age': 25}
print(person.keys())  # dict_keys(['name', 'age'])
print(person.values())  # dict_values(['Alice', 25])
print(person.items())  # dict_items([('name', 'Alice'), ('age', 25)])
print(person.get('name'))  # Alice
print(person.get('city', 'Unknown'))  # Unknown

# Set methods
set1 = {1, 2, 3}
set2 = {3, 4, 5}

set1.add(4)
print(set1)  # {1, 2, 3, 4}

print(set1.union(set2))  # {1, 2, 3, 4, 5}
print(set1.intersection(set2))  # {3, 4}
print(set1.difference(set2))  # {1, 2}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Get all keys from dictionary",
              type: "fill",
              starterCode: `data = {'a': 1, 'b': 2}
keys = data.___()
print(list(keys))`,
              answer: "keys",
            },
            {
              question: "Add element to set",
              type: "complete",
              starterCode: `my_set = {1, 2, 3}
my_set.___(4)
print(my_set)`,
              answer: "add",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.intersection(set2))`,
              answer: "{3}",
            },
          ],
        },
        {
          id: "python-reference-file-methods",
          title: "Python Reference File Methods",
          explanation: "File objects provide methods for reading and writing. Common methods include read(), readline(), readlines(), write(), writelines(), seek(), tell(), close(), and flush(). File methods work with file objects returned by open(). Always close files or use 'with' statement for automatic closing.",
          syntax: "file.read() - read all\nfile.readline() - read one line\nfile.readlines() - read all lines\nfile.write(string) - write string\nfile.writelines(list) - write multiple\nfile.seek(position) - move cursor\nfile.tell() - current position\nfile.close() - close file",
          examples: [
            {
              title: "File Methods",
              description: "Using file methods",
              code: `# Writing
with open("test.txt", "w") as f:
    f.write("Line 1\\n")
    f.write("Line 2\\n")
    f.writelines(["Line 3\\n", "Line 4\\n"])

# Reading
with open("test.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line
with open("test.txt", "r") as f:
    line = f.readline()
    print(line)  # Line 1

# Read all lines
with open("test.txt", "r") as f:
    lines = f.readlines()
    print(lines)  # ['Line 1\\n', 'Line 2\\n', ...]

# Position
with open("test.txt", "r") as f:
    print(f.tell())  # 0
    f.read(5)
    print(f.tell())  # 5`,
            },
          ],
          practiceQuestions: [
            {
              question: "Read entire file content",
              type: "fill",
              starterCode: `with open("file.txt", "r") as f:
    content = f.___()
    print(content)`,
              answer: "read",
            },
            {
              question: "Write text to file",
              type: "complete",
              starterCode: `with open("file.txt", "w") as f:
    f.___("Hello, World!")`,
              answer: "write",
            },
            {
              question: "What method reads one line?",
              type: "fill",
              starterCode: `f.___()  # reads one line`,
              answer: "readline",
            },
          ],
        },
        {
          id: "python-reference-keywords",
          title: "Python Reference Keywords",
          explanation: "Keywords are reserved words in Python that have special meaning. They cannot be used as variable names. Python has 35 keywords including if, else, elif, for, while, def, class, import, from, return, try, except, finally, and, or, not, True, False, None, in, is, lambda, and more. Keywords define Python's syntax and control flow.",
          syntax: "Control flow: if, else, elif, for, while, break, continue\nFunctions: def, return, lambda\nClasses: class\nImports: import, from, as\nExceptions: try, except, finally, raise\nLogic: and, or, not\nValues: True, False, None\nMembership: in, is\nCheck: import keyword; keyword.kwlist",
          examples: [
            {
              title: "Python Keywords",
              description: "Understanding Python keywords",
              code: `import keyword

# List all keywords
print(keyword.kwlist)
# ['False', 'None', 'True', 'and', 'as', 'assert', 'break', ...]

# Common keywords in use
if True:
    print("This is True")

for i in range(5):
    if i == 3:
        break
    print(i)

def greet(name):
    return f"Hello, {name}!"

class Person:
    pass

try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")

# Keywords cannot be variable names
# if = 5  # SyntaxError: invalid syntax`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import keyword module",
              type: "fill",
              starterCode: `import ___
print(keyword.kwlist)`,
              answer: "keyword",
            },
            {
              question: "Use 'break' to exit loop",
              type: "complete",
              starterCode: `for i in range(10):
    if i == 5:
        ___
    print(i)`,
              answer: "break",
            },
            {
              question: "What keyword defines a function?",
              type: "fill",
              starterCode: `___ my_function():
    pass`,
              answer: "def",
            },
          ],
        },
        {
          id: "python-reference-exceptions",
          title: "Python Reference Exceptions",
          explanation: "Exceptions are errors that occur during program execution. Python has many built-in exceptions like ValueError, TypeError, IndexError, KeyError, FileNotFoundError, ZeroDivisionError, and more. You can raise exceptions with raise, catch them with try-except, and define custom exceptions. Understanding exceptions helps write robust code.",
          syntax: "try: code\nexcept ExceptionType: handle\nexcept: catch all\nfinally: always execute\nraise ExceptionType('message') - raise\nraise - re-raise\nCustom: class MyError(Exception): pass",
          examples: [
            {
              title: "Python Exceptions",
              description: "Common exceptions and handling",
              code: `# Common exceptions
try:
    x = int("abc")  # ValueError
except ValueError:
    print("Invalid number")

try:
    my_list = [1, 2, 3]
    print(my_list[10])  # IndexError
except IndexError:
    print("Index out of range")

try:
    data = {'a': 1}
    print(data['b'])  # KeyError
except KeyError:
    print("Key not found")

# Multiple exceptions
try:
    result = 10 / 0
except (ZeroDivisionError, ValueError) as e:
    print(f"Error: {e}")

# Custom exception
class MyCustomError(Exception):
    pass

raise MyCustomError("Something went wrong")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Catch ValueError exception",
              type: "fill",
              starterCode: `try:
    x = int("abc")
___ ValueError:
    print("Invalid input")`,
              answer: "except",
            },
            {
              question: "Raise an exception",
              type: "complete",
              starterCode: `if x < 0:
    ___ ValueError("Negative not allowed")`,
              answer: "raise",
            },
            {
              question: "What exception occurs for invalid index?",
              type: "fill",
              starterCode: `# ___ occurs for invalid list index`,
              answer: "IndexError",
            },
          ],
        },
        {
          id: "python-reference-glossary",
          title: "Python Reference Glossary",
          explanation: "Python glossary defines important terms used in Python programming. Key terms include: variable, function, class, object, method, attribute, module, package, iterator, generator, decorator, context manager, list comprehension, dictionary comprehension, lambda, closure, and more. Understanding these terms helps communicate about Python code effectively.",
          syntax: "Variable: name that refers to value\nFunction: reusable code block\nClass: blueprint for objects\nObject: instance of class\nMethod: function in class\nAttribute: data in object\nModule: Python file\nPackage: directory with modules\nIterator: object with __iter__\nGenerator: function with yield",
          examples: [
            {
              title: "Python Terms",
              description: "Understanding Python terminology",
              code: `# Variable
name = "Python"

# Function
def greet(name):
    return f"Hello, {name}!"

# Class
class Person:
    # Attribute
    def __init__(self, name):
        self.name = name
    
    # Method
    def introduce(self):
        return f"I'm {self.name}"

# Object (instance)
person = Person("Alice")

# List comprehension
squares = [x**2 for x in range(5)]

# Dictionary comprehension
squares_dict = {x: x**2 for x in range(5)}

# Lambda
add = lambda x, y: x + y

# Generator
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is an instance of a class called?",
              type: "fill",
              starterCode: `# An instance is called an ___`,
              answer: "object",
            },
            {
              question: "What is a function inside a class called?",
              type: "complete",
              starterCode: `# A function in a class is called a ___`,
              answer: "method",
            },
            {
              question: "What creates a list from an expression?",
              type: "fill",
              starterCode: `# ___ comprehension creates lists`,
              answer: "list",
            },
          ],
        },
        {
          id: "python-reference-random",
          title: "Python Reference random Module",
          explanation: "The random module generates random numbers and selections. Functions include random(), randint(), choice(), shuffle(), sample(), uniform(), and seed(). Random numbers are useful for simulations, games, testing, and sampling. Use random.seed() for reproducible results.",
          syntax: "import random\nrandom.random() - float 0.0 to 1.0\nrandom.randint(a, b) - integer in range\nrandom.choice(sequence) - random element\nrandom.shuffle(list) - shuffle in-place\nrandom.sample(population, k) - k random samples\nrandom.uniform(a, b) - float in range\nrandom.seed(value) - set seed",
          examples: [
            {
              title: "Random Module",
              description: "Using random functions",
              code: `import random

# Random float between 0 and 1
print(random.random())  # 0.123456...

# Random integer
print(random.randint(1, 10))  # Random number 1-10

# Random choice
fruits = ['apple', 'banana', 'orange']
print(random.choice(fruits))  # Random fruit

# Shuffle
numbers = [1, 2, 3, 4, 5]
random.shuffle(numbers)
print(numbers)  # Shuffled list

# Sample
print(random.sample(range(100), 5))  # 5 random numbers

# Seed for reproducibility
random.seed(42)
print(random.random())  # Always same with same seed`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import random module",
              type: "fill",
              starterCode: `import ___
print(random.randint(1, 10))`,
              answer: "random",
            },
            {
              question: "Get random integer between 1 and 100",
              type: "complete",
              starterCode: `import random
num = random.___(1, 100)
print(num)`,
              answer: "randint",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `import random
random.seed(5)
print(random.randint(1, 10))`,
              answer: "9",
            },
          ],
        },
        {
          id: "python-reference-requests",
          title: "Python Reference requests Module",
          explanation: "The requests library simplifies HTTP requests in Python. It's the standard for making API calls and fetching web content. Functions include get(), post(), put(), delete(), and more. Requests handles headers, parameters, JSON, and authentication. It's much simpler than urllib and is essential for web APIs and web scraping.",
          syntax: "import requests\nrequests.get(url) - GET request\nrequests.post(url, data={}) - POST\nrequests.put(url, data={}) - PUT\nrequests.delete(url) - DELETE\nresponse.text - response text\nresponse.json() - parse JSON\nresponse.status_code - status code",
          examples: [
            {
              title: "Requests Module",
              description: "Making HTTP requests",
              code: `import requests

# GET request
response = requests.get('https://api.github.com')
print(response.status_code)  # 200
print(response.text[:100])  # First 100 chars

# GET with parameters
response = requests.get('https://api.github.com/search/users', 
                        params={'q': 'python'})
print(response.json())

# POST request
data = {'name': 'Alice', 'age': 25}
response = requests.post('https://httpbin.org/post', json=data)
print(response.json())

# Headers
headers = {'User-Agent': 'MyApp/1.0'}
response = requests.get('https://example.com', headers=headers)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import requests module",
              type: "fill",
              starterCode: `import ___
response = requests.get('https://example.com')`,
              answer: "requests",
            },
            {
              question: "Make a GET request",
              type: "complete",
              starterCode: `import requests
response = requests.___('https://api.example.com')
print(response.status_code)`,
              answer: "get",
            },
            {
              question: "What method parses JSON response?",
              type: "fill",
              starterCode: `response.___()  # parse JSON`,
              answer: "json",
            },
          ],
        },
        {
          id: "python-reference-statistics",
          title: "Python Reference statistics Module",
          explanation: "The statistics module provides functions for statistical calculations. Functions include mean(), median(), mode(), stdev(), variance(), and more. It's useful for basic statistical analysis without needing NumPy or SciPy. The module handles both sample and population statistics.",
          syntax: "import statistics\nstatistics.mean(data) - arithmetic mean\nstatistics.median(data) - median\nstatistics.mode(data) - mode\nstatistics.stdev(data) - sample std dev\nstatistics.pstdev(data) - population std dev\nstatistics.variance(data) - variance",
          examples: [
            {
              title: "Statistics Module",
              description: "Calculating statistics",
              code: `import statistics

data = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]

# Mean
mean = statistics.mean(data)
print(f"Mean: {mean}")  # 5.0

# Median
median = statistics.median(data)
print(f"Median: {median}")  # 5.0

# Mode
mode = statistics.mode(data)
print(f"Mode: {mode}")  # 5

# Standard deviation
std_dev = statistics.stdev(data)
print(f"Std Dev: {std_dev:.2f}")

# Variance
variance = statistics.variance(data)
print(f"Variance: {variance:.2f}")`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import statistics module",
              type: "fill",
              starterCode: `import ___
mean = statistics.mean([1, 2, 3, 4, 5])`,
              answer: "statistics",
            },
            {
              question: "Calculate median",
              type: "complete",
              starterCode: `import statistics
median = statistics.___([1, 2, 3, 4, 5])
print(median)`,
              answer: "median",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `import statistics
print(statistics.mean([10, 20, 30]))`,
              answer: "20",
            },
          ],
        },
        {
          id: "python-reference-math",
          title: "Python Reference math Module",
          explanation: "The math module provides mathematical functions and constants. It includes sqrt(), pow(), sin(), cos(), tan(), log(), exp(), pi, e, ceil(), floor(), and more. Math module works with real numbers. For complex numbers, use cmath module. Math is essential for mathematical computations.",
          syntax: "import math\nmath.sqrt(x) - square root\nmath.pow(x, y) - x to power y\nmath.sin(x), math.cos(x), math.tan(x) - trigonometry\nmath.log(x) - natural logarithm\nmath.exp(x) - e to power x\nmath.pi - pi constant\nmath.e - e constant\nmath.ceil(x) - round up\nmath.floor(x) - round down",
          examples: [
            {
              title: "Math Module",
              description: "Using math functions",
              code: `import math

# Square root
print(math.sqrt(16))  # 4.0

# Power
print(math.pow(2, 3))  # 8.0

# Constants
print(math.pi)  # 3.141592653589793
print(math.e)  # 2.718281828459045

# Trigonometry
print(math.sin(math.pi / 2))  # 1.0
print(math.cos(0))  # 1.0

# Logarithms
print(math.log(math.e))  # 1.0
print(math.log10(100))  # 2.0

# Rounding
print(math.ceil(4.3))  # 5
print(math.floor(4.7))  # 4`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import math module",
              type: "fill",
              starterCode: `import ___
print(math.pi)`,
              answer: "math",
            },
            {
              question: "Calculate square root",
              type: "complete",
              starterCode: `import math
result = math.___(25)
print(result)`,
              answer: "sqrt",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `import math
print(int(math.sqrt(9)))`,
              answer: "3",
            },
          ],
        },
        {
          id: "python-reference-cmath",
          title: "Python Reference cmath Module",
          explanation: "The cmath module provides mathematical functions for complex numbers. It includes all math module functions plus complex-specific functions. Complex numbers have real and imaginary parts (e.g., 3+4j). cmath handles complex arithmetic, trigonometry, logarithms, and more. Use cmath when working with complex numbers.",
          syntax: "import cmath\ncmath.sqrt(x) - square root (complex)\ncmath.exp(x) - exponential (complex)\ncmath.log(x) - logarithm (complex)\ncmath.sin(x), cmath.cos(x) - trigonometry (complex)\ncmath.phase(z) - phase angle\ncmath.polar(z) - polar coordinates\ncmath.rect(r, phi) - rectangular from polar",
          examples: [
            {
              title: "Cmath Module",
              description: "Working with complex numbers",
              code: `import cmath

# Complex number
z = 3 + 4j
print(z)  # (3+4j)

# Square root of complex number
sqrt_z = cmath.sqrt(z)
print(sqrt_z)  # (2+1j)

# Exponential
exp_z = cmath.exp(z)
print(exp_z)

# Phase (angle)
phase = cmath.phase(z)
print(f"Phase: {phase:.2f}")  # Phase: 0.93

# Polar coordinates
r, phi = cmath.polar(z)
print(f"Magnitude: {r:.2f}, Phase: {phi:.2f}")

# Rectangular from polar
rect = cmath.rect(r, phi)
print(rect)  # (3+4j)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Import cmath module",
              type: "fill",
              starterCode: `import ___
z = 3 + 4j
sqrt_z = cmath.sqrt(z)`,
              answer: "cmath",
            },
            {
              question: "Get phase angle of complex number",
              type: "complete",
              starterCode: `import cmath
z = 3 + 4j
angle = cmath.___(z)
print(angle)`,
              answer: "phase",
            },
            {
              question: "What module handles complex numbers?",
              type: "fill",
              starterCode: `# ___ module handles complex numbers`,
              answer: "cmath",
            },
          ],
        },
      ],
    },
    {
      id: "how-to",
      title: "Python How To",
      topics: [
        {
          id: "python-how-to-remove-duplicates",
          title: "Python How To Remove List Duplicates",
          explanation: "Removing duplicates from a list is a common task. Methods include using set() (fastest, loses order), list comprehension with set, dict.fromkeys() (preserves order), and loop with checking. Choose method based on whether order matters and performance requirements. Sets are fastest but unordered. Dict.fromkeys() preserves order efficiently.",
          syntax: "list(set(my_list)) - remove duplicates (unordered)\nlist(dict.fromkeys(my_list)) - remove duplicates (ordered)\n[item for item in my_list if item not in seen] - list comprehension\nseen = set(); result = []; for item in my_list: if item not in seen: seen.add(item); result.append(item)",
          examples: [
            {
              title: "Remove Duplicates",
              description: "Different ways to remove duplicates",
              code: `# Method 1: Using set (fastest, loses order)
my_list = [1, 2, 2, 3, 3, 3, 4, 5]
unique = list(set(my_list))
print(unique)  # [1, 2, 3, 4, 5] (order may vary)

# Method 2: Using dict.fromkeys() (preserves order)
my_list = [1, 2, 2, 3, 3, 3, 4, 5]
unique = list(dict.fromkeys(my_list))
print(unique)  # [1, 2, 3, 4, 5] (order preserved)

# Method 3: List comprehension
my_list = [1, 2, 2, 3, 3, 3, 4, 5]
seen = set()
unique = [x for x in my_list if x not in seen and not seen.add(x)]
print(unique)  # [1, 2, 3, 4, 5]`,
            },
          ],
          practiceQuestions: [
            {
              question: "Remove duplicates using set",
              type: "fill",
              starterCode: `my_list = [1, 2, 2, 3, 3, 4]
unique = list(___(my_list))
print(unique)`,
              answer: "set",
            },
            {
              question: "Remove duplicates preserving order",
              type: "complete",
              starterCode: `my_list = [1, 2, 2, 3, 3, 4]
unique = list(dict.___(my_list))
print(unique)`,
              answer: "fromkeys",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `my_list = [1, 1, 2, 2, 3]
unique = list(set(my_list))
print(len(unique))`,
              answer: "3",
            },
          ],
        },
        {
          id: "python-how-to-reverse-string",
          title: "Python How To Reverse a String",
          explanation: "Reversing a string is a common operation. Methods include slicing [::-1] (simplest), reversed() with join(), loop, and recursion. String slicing is the most Pythonic and efficient. Strings are immutable, so all methods create new strings. Choose method based on readability and performance needs.",
          syntax: "string[::-1] - slicing (simplest)\n''.join(reversed(string)) - using reversed\nresult = ''; for char in string: result = char + result - loop\nRecursive: reverse(string[1:]) + string[0] if len(string) > 1",
          examples: [
            {
              title: "Reverse String",
              description: "Different ways to reverse a string",
              code: `text = "Python"

# Method 1: Slicing (simplest)
reversed_text = text[::-1]
print(reversed_text)  # "nohtyP"

# Method 2: Using reversed() and join()
reversed_text = ''.join(reversed(text))
print(reversed_text)  # "nohtyP"

# Method 3: Loop
reversed_text = ''
for char in text:
    reversed_text = char + reversed_text
print(reversed_text)  # "nohtyP"

# Method 4: List comprehension
reversed_text = ''.join([text[i] for i in range(len(text)-1, -1, -1)])
print(reversed_text)  # "nohtyP"`,
            },
          ],
          practiceQuestions: [
            {
              question: "Reverse string using slicing",
              type: "fill",
              starterCode: `text = "Hello"
reversed_text = text[___]
print(reversed_text)`,
              answer: "::-1",
            },
            {
              question: "Reverse using reversed() and join()",
              type: "complete",
              starterCode: `text = "Hello"
reversed_text = ''.join(___(text))
print(reversed_text)`,
              answer: "reversed",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `text = "Python"
print(text[::-1])`,
              answer: "nohtyP",
            },
          ],
        },
        {
          id: "python-how-to-add-numbers",
          title: "Python How To Add Two Numbers",
          explanation: "Adding two numbers in Python is straightforward using the + operator. You can add integers, floats, or mix types. For user input, convert strings to numbers first. You can also use sum() for multiple numbers. Adding numbers is fundamental arithmetic in Python.",
          syntax: "result = a + b - basic addition\nresult = int(a) + int(b) - convert then add\nresult = float(a) + float(b) - float addition\nresult = sum([a, b, c]) - sum multiple\nFor input: num1 = int(input()); num2 = int(input()); result = num1 + num2",
          examples: [
            {
              title: "Add Two Numbers",
              description: "Adding numbers in different ways",
              code: `# Basic addition
a = 5
b = 3
result = a + b
print(result)  # 8

# Float addition
x = 3.5
y = 2.7
result = x + y
print(result)  # 6.2

# From user input
# num1 = int(input("Enter first number: "))
# num2 = int(input("Enter second number: "))
# result = num1 + num2
# print(f"Sum: {result}")

# Using sum() for multiple numbers
numbers = [10, 20, 30, 40]
total = sum(numbers)
print(total)  # 100

# Mixed types
result = 5 + 3.5
print(result)  # 8.5`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add two numbers",
              type: "fill",
              starterCode: `a = 10
b = 20
result = a ___ b
print(result)`,
              answer: "+",
            },
            {
              question: "Convert input to int then add",
              type: "complete",
              starterCode: `num1 = ___(input("Enter number: "))
num2 = int(input("Enter number: "))
result = num1 + num2
print(result)`,
              answer: "int",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `result = 15 + 25
print(result)`,
              answer: "40",
            },
          ],
        },
      ],
    },
  ],
};
