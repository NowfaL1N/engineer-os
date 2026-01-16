/**
 * Coding Practice Service
 * 
 * Static data provider for coding practice module.
 * Contains language definitions, syntax examples, and practice exercises.
 * 
 * Architecture: Frontend-only, no database or API calls.
 */

export type LanguageId =
  | "c"
  | "cpp"
  | "python"
  | "java"
  | "javascript"
  | "html"
  | "css"
  | "sql"

export interface Language {
  id: LanguageId
  name: string
  description: string
  introduction: string
  useCases: string[]
  syntax: SyntaxSection[]
  examples: CodeExample[]
  practices: PracticeExercise[]
}

export interface SyntaxSection {
  title: string
  description: string
  code: string
}

export interface CodeExample {
  title: string
  description: string
  code: string
}

export interface PracticeExercise {
  id: string
  title: string
  description: string
  incompleteCode: string
  placeholder: string
  expectedOutput: string
  solution: string
}

/**
 * Language data - structured for easy expansion
 */
const languagesData: Record<LanguageId, Language> = {
  c: {
    id: "c",
    name: "C",
    description: "A general-purpose programming language, foundational for system programming",
    introduction:
      "C is a powerful, low-level programming language developed in the 1970s. It's widely used for system programming, embedded systems, and building operating systems. Learning C helps you understand how computers work at a fundamental level.",
    useCases: [
      "System programming",
      "Embedded systems",
      "Operating systems",
      "Game development",
    ],
    syntax: [
      {
        title: "Hello World",
        description: "Basic program structure in C",
        code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
      },
      {
        title: "Variables",
        description: "Declaring and using variables",
        code: `int age = 25;
float price = 19.99;
char grade = 'A';`,
      },
      {
        title: "Comments",
        description: "Adding comments to your code",
        code: `// Single-line comment

/* Multi-line
   comment */`,
      },
    ],
    examples: [
      {
        title: "Basic Input/Output",
        description: "Reading and printing user input",
        code: `#include <stdio.h>

int main() {
    int number;
    printf("Enter a number: ");
    scanf("%d", &number);
    printf("You entered: %d\\n", number);
    return 0;
}`,
      },
    ],
    practices: [
      {
        id: "c-hello",
        title: "Print Hello World",
        description: "Complete the code to print 'Hello World'",
        incompleteCode: `#include <stdio.h>

int main() {
    printf("___");
    return 0;
}`,
        placeholder: "Hello World\\n",
        expectedOutput: "Hello World",
        solution: `printf("Hello World\\n");`,
      },
      {
        id: "c-variable",
        title: "Declare a Variable",
        description: "Declare an integer variable named 'age' with value 20",
        incompleteCode: `#include <stdio.h>

int main() {
    ___ age = 20;
    printf("Age: %d\\n", age);
    return 0;
}`,
        placeholder: "int",
        expectedOutput: "Age: 20",
        solution: `int age = 20;`,
      },
    ],
  },
  cpp: {
    id: "cpp",
    name: "C++",
    description: "Object-oriented extension of C, used for high-performance applications",
    introduction:
      "C++ is an extension of C with object-oriented features. It's used for game engines, desktop applications, and performance-critical systems. C++ gives you both low-level control and high-level abstractions.",
    useCases: [
      "Game development",
      "Desktop applications",
      "High-performance computing",
      "System software",
    ],
    syntax: [
      {
        title: "Hello World",
        description: "Basic program using iostream",
        code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
      },
      {
        title: "Variables",
        description: "C++ variable declarations",
        code: `int number = 10;
double price = 29.99;
string name = "John";`,
      },
      {
        title: "Comments",
        description: "Comment syntax in C++",
        code: `// Single-line comment

/* Multi-line
   comment */`,
      },
    ],
    examples: [
      {
        title: "Input/Output",
        description: "Using cin and cout",
        code: `#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;
    cout << "You are " << age << " years old" << endl;
    return 0;
}`,
      },
    ],
    practices: [
      {
        id: "cpp-hello",
        title: "Print Hello World",
        description: "Complete the code to print 'Hello World'",
        incompleteCode: `#include <iostream>
using namespace std;

int main() {
    cout << "___" << endl;
    return 0;
}`,
        placeholder: "Hello World",
        expectedOutput: "Hello World",
        solution: `cout << "Hello World" << endl;`,
      },
    ],
  },
  python: {
    id: "python",
    name: "Python",
    description: "High-level, interpreted language known for simplicity and readability",
    introduction:
      "Python is a beginner-friendly language with clean, readable syntax. It's widely used in web development, data science, artificial intelligence, and automation. Python's simplicity makes it perfect for learning programming concepts.",
    useCases: [
      "Web development",
      "Data science",
      "Machine learning",
      "Automation",
    ],
    syntax: [
      {
        title: "Hello World",
        description: "Simple print statement",
        code: `print("Hello, World!")`,
      },
      {
        title: "Variables",
        description: "Python variables (no type declaration needed)",
        code: `name = "Alice"
age = 25
price = 19.99`,
      },
      {
        title: "Comments",
        description: "Adding comments in Python",
        code: `# This is a single-line comment

# Multi-line comments
# are done with multiple
# hash symbols`,
      },
    ],
    examples: [
      {
        title: "Input/Output",
        description: "Getting user input",
        code: `name = input("Enter your name: ")
print(f"Hello, {name}!")`,
      },
    ],
    practices: [
      {
        id: "python-hello",
        title: "Print Hello World",
        description: "Complete the code to print 'Hello World'",
        incompleteCode: `print( ___)`,
        placeholder: '"Hello World"',
        expectedOutput: "Hello World",
        solution: `print("Hello World")`,
      },
      {
        id: "python-variable",
        title: "Create a Variable",
        description: "Create a variable named 'name' with value 'Python'",
        incompleteCode: `___ = "Python"
print(name)`,
        placeholder: "name",
        expectedOutput: "Python",
        solution: `name = "Python"`,
      },
    ],
  },
  java: {
    id: "java",
    name: "Java",
    description: "Object-oriented language, platform-independent and widely used in enterprise",
    introduction:
      "Java is a popular object-oriented language known for 'write once, run anywhere'. It's used in enterprise applications, Android development, and large-scale systems. Java's strong typing helps catch errors early.",
    useCases: [
      "Enterprise applications",
      "Android development",
      "Web applications",
      "Big data processing",
    ],
    syntax: [
      {
        title: "Hello World",
        description: "Basic Java class structure",
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      },
      {
        title: "Variables",
        description: "Java variable declarations",
        code: `int age = 25;
String name = "John";
double price = 19.99;`,
      },
      {
        title: "Comments",
        description: "Comment syntax in Java",
        code: `// Single-line comment

/* Multi-line
   comment */`,
      },
    ],
    examples: [
      {
        title: "Input/Output",
        description: "Using Scanner for input",
        code: `import java.util.Scanner;

public class Example {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name);
    }
}`,
      },
    ],
    practices: [
      {
        id: "java-hello",
        title: "Print Hello World",
        description: "Complete the code to print 'Hello World'",
        incompleteCode: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("___");
    }
}`,
        placeholder: "Hello World",
        expectedOutput: "Hello World",
        solution: `System.out.println("Hello World");`,
      },
    ],
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    description: "The language of the web, used for interactive web pages",
    introduction:
      "JavaScript is the programming language of the web. It runs in browsers and enables interactive websites. With Node.js, JavaScript can also run on servers. It's essential for modern web development.",
    useCases: [
      "Web development",
      "Frontend frameworks",
      "Backend (Node.js)",
      "Mobile apps (React Native)",
    ],
    syntax: [
      {
        title: "Hello World",
        description: "Console output in JavaScript",
        code: `console.log("Hello, World!");`,
      },
      {
        title: "Variables",
        description: "Variable declarations (let, const, var)",
        code: `let name = "Alice";
const age = 25;
var price = 19.99;`,
      },
      {
        title: "Comments",
        description: "Comment syntax in JavaScript",
        code: `// Single-line comment

/* Multi-line
   comment */`,
      },
    ],
    examples: [
      {
        title: "Basic Example",
        description: "Variables and console output",
        code: `let name = "JavaScript";
let version = 2024;
console.log(name + " version " + version);`,
      },
    ],
    practices: [
      {
        id: "js-hello",
        title: "Print Hello World",
        description: "Complete the code to print 'Hello World'",
        incompleteCode: `console.log(___);`,
        placeholder: '"Hello World"',
        expectedOutput: "Hello World",
        solution: `console.log("Hello World");`,
      },
      {
        id: "js-variable",
        title: "Create a Variable",
        description: "Create a variable named 'message' with value 'Hello'",
        incompleteCode: `let ___ = "Hello";
console.log(message);`,
        placeholder: "message",
        expectedOutput: "Hello",
        solution: `let message = "Hello";`,
      },
    ],
  },
  html: {
    id: "html",
    name: "HTML",
    description: "Markup language for creating web page structure",
    introduction:
      "HTML (HyperText Markup Language) is the foundation of web pages. It defines the structure and content of websites. Every web page you visit is built with HTML. It's the first language every web developer learns.",
    useCases: [
      "Web page structure",
      "Content organization",
      "Form creation",
      "Semantic markup",
    ],
    syntax: [
      {
        title: "Basic Structure",
        description: "Essential HTML document structure",
        code: `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`,
      },
      {
        title: "Common Tags",
        description: "Frequently used HTML elements",
        code: `<h1>Heading 1</h1>
<p>Paragraph text</p>
<a href="#">Link</a>
<img src="image.jpg" alt="Image">`,
      },
      {
        title: "Comments",
        description: "HTML comments",
        code: `<!-- This is an HTML comment -->`,
      },
    ],
    examples: [
      {
        title: "Simple Page",
        description: "A basic HTML page",
        code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`,
      },
    ],
    practices: [
      {
        id: "html-heading",
        title: "Create a Heading",
        description: "Complete the code to create an h1 heading with text 'Hello World'",
        incompleteCode: `<h1>___</h1>`,
        placeholder: "Hello World",
        expectedOutput: "Hello World",
        solution: `<h1>Hello World</h1>`,
      },
      {
        id: "html-paragraph",
        title: "Create a Paragraph",
        description: "Complete the code to create a paragraph",
        incompleteCode: `<p>___</p>`,
        placeholder: "This is a paragraph",
        expectedOutput: "This is a paragraph",
        solution: `<p>This is a paragraph</p>`,
      },
    ],
  },
  css: {
    id: "css",
    name: "CSS",
    description: "Stylesheet language for designing and styling web pages",
    introduction:
      "CSS (Cascading Style Sheets) controls how HTML elements look. It's used to add colors, fonts, layouts, and animations to web pages. CSS makes websites beautiful and user-friendly.",
    useCases: [
      "Web page styling",
      "Responsive design",
      "Animations",
      "Layout control",
    ],
    syntax: [
      {
        title: "Basic Syntax",
        description: "CSS rule structure",
        code: `selector {
    property: value;
}`,
      },
      {
        title: "Common Properties",
        description: "Frequently used CSS properties",
        code: `h1 {
    color: blue;
    font-size: 24px;
    margin: 10px;
}`,
      },
      {
        title: "Comments",
        description: "CSS comments",
        code: `/* This is a CSS comment */`,
      },
    ],
    examples: [
      {
        title: "Styling Text",
        description: "Basic text styling",
        code: `p {
    color: #333;
    font-size: 16px;
    font-family: Arial, sans-serif;
}`,
      },
    ],
    practices: [
      {
        id: "css-color",
        title: "Set Text Color",
        description: "Complete the code to set paragraph text color to red",
        incompleteCode: `p {
    color: ___;
}`,
        placeholder: "red",
        expectedOutput: "red",
        solution: `p {
    color: red;
}`,
      },
    ],
  },
  sql: {
    id: "sql",
    name: "SQL",
    description: "Structured Query Language for managing and querying databases",
    introduction:
      "SQL (Structured Query Language) is used to communicate with databases. It's essential for storing, retrieving, and manipulating data. SQL is used in almost every application that needs to store data.",
    useCases: [
      "Database queries",
      "Data analysis",
      "Backend development",
      "Business intelligence",
    ],
    syntax: [
      {
        title: "SELECT Statement",
        description: "Basic query to retrieve data",
        code: `SELECT * FROM users;`,
      },
      {
        title: "WHERE Clause",
        description: "Filtering data with conditions",
        code: `SELECT * FROM users
WHERE age > 18;`,
      },
      {
        title: "Comments",
        description: "SQL comments",
        code: `-- Single-line comment

/* Multi-line
   comment */`,
      },
    ],
    examples: [
      {
        title: "Query Example",
        description: "Selecting specific columns",
        code: `SELECT name, email
FROM users
WHERE age >= 21;`,
      },
    ],
    practices: [
      {
        id: "sql-select",
        title: "Select All Records",
        description: "Complete the code to select all records from the 'users' table",
        incompleteCode: `SELECT * FROM ___;`,
        placeholder: "users",
        expectedOutput: "users",
        solution: `SELECT * FROM users;`,
      },
    ],
  },
}

/**
 * Get all available languages
 */
export function getAllLanguages(): Language[] {
  return Object.values(languagesData)
}

/**
 * Get language by ID
 */
export function getLanguageById(id: LanguageId): Language | undefined {
  return languagesData[id]
}

/**
 * Check if language ID is valid
 */
export function isValidLanguageId(id: string): id is LanguageId {
  return id in languagesData
}

