/**
 * Python Language Data
 * 
 * Comprehensive fundamentals data for Python programming language.
 * Includes concepts, examples, and practice questions for each topic.
 */

import type { Topic } from "@/services/coding/types"

export const pythonTopics: Record<string, Topic> = {
  variables: {
    id: "variables",
    title: "Variables & Data Types",
    concept: {
      what: "Variables are containers that store data values. In Python, you don't need to declare variable types - Python automatically determines the type.",
      why: "Variables allow you to store and reuse data throughout your program. They make code flexible and easier to maintain.",
      explanation:
        "In Python, you create a variable by simply assigning a value to a name. Python supports integers, floats, strings, booleans, and more. Variables can change their type during execution (dynamic typing).",
      languageSpecificNotes:
        "Python uses dynamic typing - you don't need to specify types. Variable names are case-sensitive and can contain letters, numbers, and underscores.",
    },
    syntaxExamples: [
      {
        title: "Basic Variable Declaration",
        description: "Creating variables with different data types",
        code: `# Integer
age = 25

# Float
price = 19.99

# String
name = "Python"

# Boolean
is_active = True

# Print variables
print(age, price, name, is_active)`,
      },
      {
        title: "Multiple Assignment",
        description: "Assigning multiple variables at once",
        code: `# Assign multiple values
x, y, z = 10, 20, 30

# Assign same value to multiple variables
a = b = c = 100

print(x, y, z)
print(a, b, c)`,
      },
    ],
    practiceQuestions: [
      {
        id: "py-var-1",
        type: "fill-blank",
        title: "Create a Variable",
        description: "Create a variable named 'message' with the value 'Hello'",
        incompleteCode: `___ = "Hello"
print(message)`,
        placeholder: "message",
        expectedAnswer: "message",
        solution: `message = "Hello"`,
        explanation: "In Python, you create a variable by assigning a value using the = operator.",
      },
      {
        id: "py-var-2",
        type: "fill-blank",
        title: "Integer Variable",
        description: "Create an integer variable named 'count' with value 10",
        incompleteCode: `count = ___
print(count)`,
        placeholder: "10",
        expectedAnswer: "10",
        solution: `count = 10`,
        explanation: "Integers in Python don't need quotes - just write the number directly.",
      },
      {
        id: "py-var-3",
        type: "complete-function",
        title: "Complete Variable Assignment",
        description: "Complete the code to assign 'Python' to variable 'language'",
        incompleteCode: `language = ___
print("I love", language)`,
        placeholder: "Python",
        expectedAnswer: "Python",
        solution: `language = "Python"`,
      },
      {
        id: "py-var-4",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `x = 5
y = 10
result = x + y
print(result)`,
        expectedAnswer: "15",
        solution: `x = 5
y = 10
result = x + y
print(result)  # Output: 15`,
        explanation: "The variables x and y are added together, resulting in 15.",
      },
      {
        id: "py-var-5",
        type: "fill-blank",
        title: "Boolean Variable",
        description: "Create a boolean variable 'is_student' with value True",
        incompleteCode: `is_student = ___
print(is_student)`,
        placeholder: "True",
        expectedAnswer: "True",
        solution: `is_student = True`,
      },
    ],
  },
  operators: {
    id: "operators",
    title: "Operators",
    concept: {
      what: "Operators are special symbols that perform operations on values and variables. Python supports arithmetic, comparison, logical, and assignment operators.",
      why: "Operators allow you to perform calculations, compare values, and combine conditions. They are essential for any programming task.",
      explanation:
        "Python has arithmetic operators (+, -, *, /, %), comparison operators (==, !=, <, >), logical operators (and, or, not), and more. Understanding operators is crucial for writing effective code.",
    },
    syntaxExamples: [
      {
        title: "Arithmetic Operators",
        description: "Basic mathematical operations",
        code: `a = 10
b = 3

print(a + b)  # Addition: 13
print(a - b)  # Subtraction: 7
print(a * b)  # Multiplication: 30
print(a / b)  # Division: 3.333...
print(a % b)  # Modulus: 1
print(a ** b) # Exponentiation: 1000`,
      },
      {
        title: "Comparison Operators",
        description: "Comparing values",
        code: `x = 5
y = 10

print(x == y)  # Equal: False
print(x != y)  # Not equal: True
print(x < y)   # Less than: True
print(x > y)   # Greater than: False
print(x <= y)  # Less or equal: True`,
      },
    ],
    practiceQuestions: [
      {
        id: "py-op-1",
        type: "fill-blank",
        title: "Addition Operator",
        description: "Complete the code to add 5 and 3",
        incompleteCode: `result = 5 ___ 3
print(result)`,
        placeholder: "+",
        expectedAnswer: "+",
        solution: `result = 5 + 3`,
      },
      {
        id: "py-op-2",
        type: "fill-blank",
        title: "Comparison Operator",
        description: "Check if x is greater than y",
        incompleteCode: `x = 10
y = 5
result = x ___ y
print(result)`,
        placeholder: ">",
        expectedAnswer: ">",
        solution: `result = x > y`,
      },
      {
        id: "py-op-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `a = 15
b = 4
print(a % b)`,
        expectedAnswer: "3",
        solution: `a = 15
b = 4
print(a % b)  # Output: 3 (remainder of 15/4)`,
      },
      {
        id: "py-op-4",
        type: "fill-blank",
        title: "Logical Operator",
        description: "Use 'and' operator to check both conditions",
        incompleteCode: `age = 20
has_license = True
can_drive = age >= 18 ___ has_license
print(can_drive)`,
        placeholder: "and",
        expectedAnswer: "and",
        solution: `can_drive = age >= 18 and has_license`,
      },
      {
        id: "py-op-5",
        type: "complete-function",
        title: "Complete Expression",
        description: "Calculate the average of 10, 20, and 30",
        incompleteCode: `avg = (10 + 20 + 30) / ___
print(avg)`,
        placeholder: "3",
        expectedAnswer: "3",
        solution: `avg = (10 + 20 + 30) / 3`,
      },
    ],
  },
  conditionals: {
    id: "conditionals",
    title: "Conditional Statements",
    concept: {
      what: "Conditional statements allow your program to make decisions. They execute different code based on whether conditions are true or false.",
      why: "Conditionals make programs intelligent and responsive. They allow programs to react differently to different situations.",
      explanation:
        "Python uses if, elif (else if), and else statements. The code inside an if block only runs when the condition is True. You can chain multiple conditions with elif.",
    },
    syntaxExamples: [
      {
        title: "If-Else Statement",
        description: "Basic conditional logic",
        code: `age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")`,
      },
      {
        title: "If-Elif-Else",
        description: "Multiple conditions",
        code: `score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")`,
      },
    ],
    practiceQuestions: [
      {
        id: "py-cond-1",
        type: "fill-blank",
        title: "Complete If Statement",
        description: "Complete the condition to check if age is 18 or older",
        incompleteCode: `age = 20
___ age >= 18:
    print("Adult")`,
        placeholder: "if",
        expectedAnswer: "if",
        solution: `if age >= 18:`,
      },
      {
        id: "py-cond-2",
        type: "fill-blank",
        title: "Add Else Clause",
        description: "Add an else clause to print 'Minor'",
        incompleteCode: `age = 15
if age >= 18:
    print("Adult")
___:
    print("Minor")`,
        placeholder: "else",
        expectedAnswer: "else",
        solution: `else:`,
      },
      {
        id: "py-cond-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `x = 10
if x > 5:
    print("Greater")
else:
    print("Smaller")`,
        expectedAnswer: "Greater",
        solution: `x = 10
if x > 5:  # True, so this block executes
    print("Greater")  # Output: Greater`,
      },
      {
        id: "py-cond-4",
        type: "complete-function",
        title: "Complete Conditional",
        description: "Check if number is positive, negative, or zero",
        incompleteCode: `num = 5
___ num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")`,
        placeholder: "if",
        expectedAnswer: "if",
        solution: `if num > 0:`,
      },
      {
        id: "py-cond-5",
        type: "fix-error",
        title: "Fix Syntax Error",
        description: "Fix the missing colon",
        incompleteCode: `age = 20
if age >= 18
    print("Adult")`,
        expectedAnswer: ":",
        solution: `if age >= 18:  # Added colon`,
      },
    ],
  },
  loops: {
    id: "loops",
    title: "Loops",
    concept: {
      what: "Loops allow you to repeat code multiple times. Python has for loops (iterate over sequences) and while loops (repeat while condition is true).",
      why: "Loops eliminate repetitive code and make it easy to process collections of data. They're essential for working with lists, strings, and any repetitive task.",
      explanation:
        "For loops iterate over sequences (lists, strings, ranges). While loops continue as long as a condition is true. Both can be controlled with break and continue statements.",
    },
    syntaxExamples: [
      {
        title: "For Loop",
        description: "Iterating over a range",
        code: `# Loop from 0 to 4
for i in range(5):
    print(i)

# Output: 0, 1, 2, 3, 4`,
      },
      {
        title: "While Loop",
        description: "Repeating while condition is true",
        code: `count = 0
while count < 5:
    print(count)
    count += 1

# Output: 0, 1, 2, 3, 4`,
      },
    ],
    practiceQuestions: [
      {
        id: "py-loop-1",
        type: "fill-blank",
        title: "Complete For Loop",
        description: "Complete the loop to print numbers 0 to 4",
        incompleteCode: `for i in range(___):
    print(i)`,
        placeholder: "5",
        expectedAnswer: "5",
        solution: `for i in range(5):`,
      },
      {
        id: "py-loop-2",
        type: "fill-blank",
        title: "Increment in While Loop",
        description: "Complete the increment to avoid infinite loop",
        incompleteCode: `i = 0
while i < 5:
    print(i)
    i ___`,
        placeholder: "+= 1",
        expectedAnswer: "+= 1",
        solution: `i += 1`,
      },
      {
        id: "py-loop-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `for i in range(3):
    print(i * 2)`,
        expectedAnswer: "0\n2\n4",
        solution: `for i in range(3):  # i = 0, 1, 2
    print(i * 2)  # Output: 0, 2, 4`,
      },
      {
        id: "py-loop-4",
        type: "complete-function",
        title: "Complete Loop",
        description: "Loop through a list and print each item",
        incompleteCode: `fruits = ["apple", "banana", "orange"]
for fruit ___ fruits:
    print(fruit)`,
        placeholder: "in",
        expectedAnswer: "in",
        solution: `for fruit in fruits:`,
      },
      {
        id: "py-loop-5",
        type: "fill-blank",
        title: "While Loop Condition",
        description: "Complete the while loop condition",
        incompleteCode: `count = 0
___ count < 10:
    print(count)
    count += 1`,
        placeholder: "while",
        expectedAnswer: "while",
        solution: `while count < 10:`,
      },
    ],
  },
  functions: {
    id: "functions",
    title: "Functions",
    concept: {
      what: "Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.",
      why: "Functions make code modular, testable, and reusable. They're fundamental to writing clean, maintainable programs.",
      explanation:
        "In Python, you define functions with 'def'. Functions can take parameters and return values. They help break complex problems into smaller, manageable pieces.",
    },
    syntaxExamples: [
      {
        title: "Basic Function",
        description: "Defining and calling a function",
        code: `def greet(name):
    return f"Hello, {name}!"

message = greet("Python")
print(message)  # Output: Hello, Python!`,
      },
      {
        title: "Function with Parameters",
        description: "Function that takes multiple parameters",
        code: `def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # Output: 8`,
      },
    ],
    practiceQuestions: [
      {
        id: "py-func-1",
        type: "fill-blank",
        title: "Define Function",
        description: "Complete the function definition",
        incompleteCode: `___ say_hello():
    print("Hello!")

say_hello()`,
        placeholder: "def",
        expectedAnswer: "def",
        solution: `def say_hello():`,
      },
      {
        id: "py-func-2",
        type: "fill-blank",
        title: "Return Statement",
        description: "Complete the return statement",
        incompleteCode: `def multiply(x, y):
    ___ x * y

result = multiply(3, 4)
print(result)`,
        placeholder: "return",
        expectedAnswer: "return",
        solution: `return x * y`,
      },
      {
        id: "py-func-3",
        type: "complete-function",
        title: "Complete Function",
        description: "Complete the function to calculate square",
        incompleteCode: `def square(n):
    return n ___

print(square(5))`,
        placeholder: "** 2",
        expectedAnswer: "** 2",
        solution: `return n ** 2`,
      },
      {
        id: "py-func-4",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `def greet(name):
    return f"Hi, {name}!"

print(greet("Alice"))`,
        expectedAnswer: "Hi, Alice!",
        solution: `def greet(name):
    return f"Hi, {name}!"  # f-string formatting

print(greet("Alice"))  # Output: Hi, Alice!`,
      },
      {
        id: "py-func-5",
        type: "fix-error",
        title: "Fix Function Call",
        description: "Fix the function call syntax",
        incompleteCode: `def add(a, b):
    return a + b

result = add(5, 3)
print(result)`,
        expectedAnswer: "8",
        solution: `# Function is correct, output will be 8`,
      },
    ],
  },
  arrays: {
    id: "arrays",
    title: "Arrays / Lists",
    concept: {
      what: "Lists (arrays) store multiple values in a single variable. They're ordered, changeable, and allow duplicate values.",
      why: "Lists are essential for storing collections of data. They make it easy to work with multiple items at once.",
      explanation:
        "Python lists are created with square brackets. You can access elements by index, add/remove items, and iterate through them. Lists are very flexible and commonly used.",
    },
    syntaxExamples: [
      {
        title: "Creating Lists",
        description: "Different ways to create and access lists",
        code: `# Create a list
fruits = ["apple", "banana", "orange"]

# Access elements
print(fruits[0])  # apple
print(fruits[1])  # banana

# Add element
fruits.append("grape")
print(fruits)`,
      },
      {
        title: "List Operations",
        description: "Common list operations",
        code: `numbers = [1, 2, 3, 4, 5]

# Length
print(len(numbers))  # 5

# Loop through list
for num in numbers:
    print(num)`,
      },
    ],
    practiceQuestions: [
      {
        id: "py-arr-1",
        type: "fill-blank",
        title: "Access List Element",
        description: "Complete the code to access first element",
        incompleteCode: `fruits = ["apple", "banana", "orange"]
print(fruits[___])`,
        placeholder: "0",
        expectedAnswer: "0",
        solution: `print(fruits[0])`,
      },
      {
        id: "py-arr-2",
        type: "fill-blank",
        title: "Add to List",
        description: "Complete the code to add 'grape' to the list",
        incompleteCode: `fruits = ["apple", "banana"]
fruits.___("grape")
print(fruits)`,
        placeholder: "append",
        expectedAnswer: "append",
        solution: `fruits.append("grape")`,
      },
      {
        id: "py-arr-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `numbers = [1, 2, 3]
print(len(numbers))`,
        expectedAnswer: "3",
        solution: `numbers = [1, 2, 3]
print(len(numbers))  # Output: 3 (length of list)`,
      },
      {
        id: "py-arr-4",
        type: "complete-function",
        title: "Complete List Creation",
        description: "Create a list with numbers 1, 2, 3",
        incompleteCode: `numbers = [___, ___, ___]
print(numbers)`,
        placeholder: "1, 2, 3",
        expectedAnswer: "1, 2, 3",
        solution: `numbers = [1, 2, 3]`,
      },
      {
        id: "py-arr-5",
        type: "fill-blank",
        title: "Loop Through List",
        description: "Complete the loop to iterate through list",
        incompleteCode: `items = ["a", "b", "c"]
for item ___ items:
    print(item)`,
        placeholder: "in",
        expectedAnswer: "in",
        solution: `for item in items:`,
      },
    ],
  },
  strings: {
    id: "strings",
    title: "Strings",
    concept: {
      what: "Strings are sequences of characters. In Python, strings are immutable and can be manipulated with various methods.",
      why: "Strings are used everywhere - user input, file names, messages. Understanding string operations is crucial for any program.",
      explanation:
        "Python strings can be created with single or double quotes. They support concatenation, slicing, formatting, and many built-in methods for manipulation.",
    },
    syntaxExamples: [
      {
        title: "String Basics",
        description: "Creating and manipulating strings",
        code: `# Create strings
name = "Python"
greeting = 'Hello'

# Concatenation
message = greeting + " " + name
print(message)  # Hello Python

# String methods
print(name.upper())  # PYTHON
print(name.lower())  # python`,
      },
      {
        title: "String Formatting",
        description: "Formatting strings with f-strings",
        code: `name = "Alice"
age = 25

# f-string formatting
message = f"My name is {name} and I'm {age} years old"
print(message)`,
      },
    ],
    practiceQuestions: [
      {
        id: "py-str-1",
        type: "fill-blank",
        title: "String Concatenation",
        description: "Complete the concatenation",
        incompleteCode: `first = "Hello"
second = "World"
result = first ___ " " ___ second
print(result)`,
        placeholder: "+",
        expectedAnswer: "+",
        solution: `result = first + " " + second`,
      },
      {
        id: "py-str-2",
        type: "fill-blank",
        title: "String Method",
        description: "Convert string to uppercase",
        incompleteCode: `text = "hello"
print(text.___())`,
        placeholder: "upper",
        expectedAnswer: "upper",
        solution: `print(text.upper())`,
      },
      {
        id: "py-str-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `name = "Python"
print(len(name))`,
        expectedAnswer: "6",
        solution: `name = "Python"
print(len(name))  # Output: 6 (number of characters)`,
      },
      {
        id: "py-str-4",
        type: "complete-function",
        title: "Complete f-string",
        description: "Complete the f-string formatting",
        incompleteCode: `age = 20
message = f"I am {___} years old"
print(message)`,
        placeholder: "age",
        expectedAnswer: "age",
        solution: `message = f"I am {age} years old"`,
      },
      {
        id: "py-str-5",
        type: "fill-blank",
        title: "String Slicing",
        description: "Get first 3 characters",
        incompleteCode: `text = "Python"
print(text[___:3])`,
        placeholder: "0",
        expectedAnswer: "0",
        solution: `print(text[0:3])`,
      },
    ],
  },
  recursion: {
    id: "recursion",
    title: "Recursion",
    concept: {
      what: "Recursion is when a function calls itself. It's a powerful technique for solving problems that can be broken down into smaller, similar subproblems.",
      why: "Recursion provides elegant solutions to complex problems. It's especially useful for tree structures, mathematical sequences, and divide-and-conquer algorithms.",
      explanation:
        "A recursive function has a base case (stopping condition) and a recursive case (calls itself). Without a base case, recursion would continue infinitely.",
    },
    syntaxExamples: [
      {
        title: "Factorial Function",
        description: "Calculate factorial using recursion",
        code: `def factorial(n):
    if n == 0 or n == 1:
        return 1  # Base case
    else:
        return n * factorial(n - 1)  # Recursive case

print(factorial(5))  # Output: 120`,
      },
      {
        title: "Countdown Function",
        description: "Simple recursive countdown",
        code: `def countdown(n):
    if n <= 0:
        print("Done!")  # Base case
    else:
        print(n)
        countdown(n - 1)  # Recursive case

countdown(5)`,
      },
    ],
    practiceQuestions: [
      {
        id: "py-rec-1",
        type: "fill-blank",
        title: "Base Case",
        description: "Complete the base case for factorial",
        incompleteCode: `def factorial(n):
    if n == 0 or n == 1:
        return ___
    else:
        return n * factorial(n - 1)`,
        placeholder: "1",
        expectedAnswer: "1",
        solution: `return 1  # Base case`,
      },
      {
        id: "py-rec-2",
        type: "fill-blank",
        title: "Recursive Call",
        description: "Complete the recursive call",
        incompleteCode: `def countdown(n):
    if n <= 0:
        print("Done!")
    else:
        print(n)
        countdown(___ - 1)`,
        placeholder: "n",
        expectedAnswer: "n",
        solution: `countdown(n - 1)`,
      },
      {
        id: "py-rec-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `def print_numbers(n):
    if n > 0:
        print(n)
        print_numbers(n - 1)

print_numbers(3)`,
        expectedAnswer: "3\n2\n1",
        solution: `print_numbers(3)  # Output: 3, 2, 1 (in order)`,
      },
      {
        id: "py-rec-4",
        type: "complete-function",
        title: "Complete Recursive Function",
        description: "Complete the sum function",
        incompleteCode: `def sum_to_n(n):
    if n == 0:
        return 0
    else:
        return n + sum_to_n(___ - 1)`,
        placeholder: "n",
        expectedAnswer: "n",
        solution: `return n + sum_to_n(n - 1)`,
      },
      {
        id: "py-rec-5",
        type: "fix-error",
        title: "Fix Base Case",
        description: "Add the missing base case",
        incompleteCode: `def power(base, exp):
    if exp == 0:
        return ___
    else:
        return base * power(base, exp - 1)`,
        placeholder: "1",
        expectedAnswer: "1",
        solution: `return 1  # Any number to power 0 is 1`,
      },
    ],
  },
  "problem-solving": {
    id: "problem-solving",
    title: "Basic Problem Solving",
    concept: {
      what: "Problem solving involves breaking down complex problems into smaller, manageable steps and applying programming concepts to solve them.",
      why: "Real-world programming is about solving problems. Learning to think algorithmically and apply concepts together is essential.",
      explanation:
        "Combine variables, loops, conditionals, and functions to solve problems. Start by understanding the problem, then plan your approach, and finally implement the solution.",
    },
    syntaxExamples: [
      {
        title: "Find Maximum",
        description: "Find the largest number in a list",
        code: `def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

numbers = [3, 7, 2, 9, 1]
print(find_max(numbers))  # Output: 9`,
      },
      {
        title: "Check Even Numbers",
        description: "Count even numbers in a list",
        code: `def count_evens(numbers):
    count = 0
    for num in numbers:
        if num % 2 == 0:
            count += 1
    return count

numbers = [1, 2, 3, 4, 5, 6]
print(count_evens(numbers))  # Output: 3`,
      },
    ],
    practiceQuestions: [
      {
        id: "py-prob-1",
        type: "complete-function",
        title: "Sum of List",
        description: "Complete the function to sum all numbers",
        incompleteCode: `def sum_list(numbers):
    total = 0
    for num in numbers:
        total += ___
    return total`,
        placeholder: "num",
        expectedAnswer: "num",
        solution: `total += num`,
      },
      {
        id: "py-prob-2",
        type: "fill-blank",
        title: "Check if Even",
        description: "Complete the condition to check if number is even",
        incompleteCode: `num = 8
if num ___ 2 == 0:
    print("Even")`,
        placeholder: "%",
        expectedAnswer: "%",
        solution: `if num % 2 == 0:`,
      },
      {
        id: "py-prob-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `def multiply_list(numbers):
    result = 1
    for num in numbers:
        result *= num
    return result

print(multiply_list([2, 3, 4]))`,
        expectedAnswer: "24",
        solution: `multiply_list([2, 3, 4])  # 2 * 3 * 4 = 24`,
      },
      {
        id: "py-prob-4",
        type: "complete-function",
        title: "Find Minimum",
        description: "Complete the function to find minimum",
        incompleteCode: `def find_min(numbers):
    min_num = numbers[0]
    for num in numbers:
        if num ___ min_num:
            min_num = num
    return min_num`,
        placeholder: "<",
        expectedAnswer: "<",
        solution: `if num < min_num:`,
      },
      {
        id: "py-prob-5",
        type: "fill-blank",
        title: "Count Positive Numbers",
        description: "Complete the condition",
        incompleteCode: `numbers = [-1, 2, -3, 4, 5]
count = 0
for num in numbers:
    if num ___ 0:
        count += 1
print(count)`,
        placeholder: ">",
        expectedAnswer: ">",
        solution: `if num > 0:`,
      },
    ],
  },
  "input-output": {
    id: "input-output",
    title: "Input & Output",
    concept: {
      what: "Input/output (I/O) allows programs to interact with users. Input gets data from users, output displays information.",
      why: "I/O makes programs interactive and useful. Most programs need to receive input and show results to users.",
      explanation:
        "Python uses input() to get user input (always returns a string) and print() to display output. You often need to convert input to the right data type.",
    },
    syntaxExamples: [
      {
        title: "Basic Input/Output",
        description: "Getting and displaying user input",
        code: `# Get string input
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Get number input (convert to int)
age = int(input("Enter your age: "))
print(f"You are {age} years old")`,
      },
      {
        title: "Multiple Inputs",
        description: "Getting multiple values",
        code: `# Get two numbers
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
sum_result = num1 + num2
print(f"Sum: {sum_result}")`,
      },
    ],
    practiceQuestions: [
      {
        id: "py-io-1",
        type: "fill-blank",
        title: "Get Input",
        description: "Complete the input statement",
        incompleteCode: `name = ___("Enter name: ")
print(name)`,
        placeholder: "input",
        expectedAnswer: "input",
        solution: `name = input("Enter name: ")`,
      },
      {
        id: "py-io-2",
        type: "fill-blank",
        title: "Convert Input",
        description: "Convert input to integer",
        incompleteCode: `age = ___(input("Enter age: "))
print(age)`,
        placeholder: "int",
        expectedAnswer: "int",
        solution: `age = int(input("Enter age: "))`,
      },
      {
        id: "py-io-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed if user enters '5'?",
        incompleteCode: `num = input("Enter number: ")
print(num * 2)`,
        expectedAnswer: "55",
        solution: `num = input("Enter number: ")  # Returns string "5"
print(num * 2)  # String multiplication: "5" * 2 = "55"`,
      },
      {
        id: "py-io-4",
        type: "complete-function",
        title: "Complete I/O",
        description: "Get number and print its square",
        incompleteCode: `num = int(input("Enter number: "))
result = num ___
print(result)`,
        placeholder: "** 2",
        expectedAnswer: "** 2",
        solution: `result = num ** 2`,
      },
      {
        id: "py-io-5",
        type: "fill-blank",
        title: "Format Output",
        description: "Complete the f-string",
        incompleteCode: `name = "Alice"
age = 25
print(f"{name} is {___} years old")`,
        placeholder: "age",
        expectedAnswer: "age",
        solution: `print(f"{name} is {age} years old")`,
      },
    ],
  },
}

