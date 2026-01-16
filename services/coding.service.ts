/**
 * Coding Practice Service
 * 
 * Static data provider for coding practice module.
 * Contains language information, syntax basics, examples, and practice exercises.
 * 
 * Architecture: Frontend-only, no backend calls
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
}

export interface SyntaxExample {
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
  expectedAnswer: string
  hint?: string
}

export interface LanguageContent {
  language: Language
  syntaxBasics: SyntaxExample[]
  codeExamples: SyntaxExample[]
  practiceExercises: PracticeExercise[]
}

/**
 * Supported languages metadata
 */
export const languages: Language[] = [
  {
    id: "c",
    name: "C",
    description: "A foundational programming language used for system programming and embedded systems",
    introduction:
      "C is a powerful, general-purpose programming language developed in the 1970s. It's the foundation for many modern languages and is widely used in system programming, operating systems, and embedded systems.",
    useCases: [
      "System programming",
      "Operating systems",
      "Embedded systems",
      "Game development",
    ],
  },
  {
    id: "cpp",
    name: "C++",
    description: "An extension of C with object-oriented features, used for high-performance applications",
    introduction:
      "C++ is an extension of C that adds object-oriented programming features. It's used for building high-performance applications, game engines, and system software.",
    useCases: [
      "Game development",
      "High-performance applications",
      "System software",
      "Desktop applications",
    ],
  },
  {
    id: "python",
    name: "Python",
    description: "A beginner-friendly language known for its simplicity and versatility",
    introduction:
      "Python is a high-level, interpreted programming language known for its clear syntax and readability. It's widely used in web development, data science, artificial intelligence, and automation.",
    useCases: [
      "Web development",
      "Data science",
      "Artificial intelligence",
      "Automation scripts",
    ],
  },
  {
    id: "java",
    name: "Java",
    description: "A platform-independent language used for enterprise applications and Android development",
    introduction:
      "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It's used for building enterprise applications, Android apps, and large-scale systems.",
    useCases: [
      "Enterprise applications",
      "Android development",
      "Web applications",
      "Big data processing",
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "The language of the web, used for interactive websites and web applications",
    introduction:
      "JavaScript is a versatile programming language that runs in web browsers and on servers. It's essential for creating interactive websites and modern web applications.",
    useCases: [
      "Web development",
      "Frontend frameworks",
      "Backend development (Node.js)",
      "Mobile app development",
    ],
  },
  {
    id: "html",
    name: "HTML",
    description: "The markup language for creating web pages and web applications",
    introduction:
      "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It defines the structure and content of web pages using elements and tags.",
    useCases: [
      "Web page structure",
      "Web applications",
      "Email templates",
      "Documentation",
    ],
  },
  {
    id: "css",
    name: "CSS",
    description: "The styling language for designing and formatting web pages",
    introduction:
      "CSS (Cascading Style Sheets) is used to style and format HTML elements. It controls the appearance, layout, and design of web pages, making them visually appealing and responsive.",
    useCases: [
      "Web page styling",
      "Responsive design",
      "Animations",
      "Theme customization",
    ],
  },
  {
    id: "sql",
    name: "SQL",
    description: "The standard language for managing and querying relational databases",
    introduction:
      "SQL (Structured Query Language) is used to communicate with databases. It allows you to create, read, update, and delete data in relational database management systems.",
    useCases: [
      "Database management",
      "Data analysis",
      "Backend development",
      "Business intelligence",
    ],
  },
]

/**
 * Get language by ID
 */
export function getLanguageById(id: LanguageId): Language | undefined {
  return languages.find((lang) => lang.id === id)
}

/**
 * Get all languages
 */
export function getAllLanguages(): Language[] {
  return languages
}

/**
 * Get complete language content including syntax, examples, and exercises
 */
export function getLanguageContent(id: LanguageId): LanguageContent | null {
  const language = getLanguageById(id)
  if (!language) return null

  return {
    language,
    syntaxBasics: getSyntaxBasics(id),
    codeExamples: getCodeExamples(id),
    practiceExercises: getPracticeExercises(id),
  }
}

/**
 * Get syntax basics for a language
 */
function getSyntaxBasics(id: LanguageId): SyntaxExample[] {
  const basics: Record<LanguageId, SyntaxExample[]> = {
    c: [
      {
        title: "Hello World",
        description: "Print text to the console",
        code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
      },
      {
        title: "Variables",
        description: "Declare and use variables",
        code: `int age = 25;
float price = 19.99;
char grade = 'A';`,
      },
      {
        title: "Comments",
        description: "Add comments to your code",
        code: `// This is a single-line comment

/* This is a
   multi-line comment */`,
      },
    ],
    cpp: [
      {
        title: "Hello World",
        description: "Print text to the console",
        code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
      },
      {
        title: "Variables",
        description: "Declare and use variables",
        code: `int number = 42;
string name = "John";
double pi = 3.14159;`,
      },
      {
        title: "Comments",
        description: "Add comments to your code",
        code: `// Single-line comment

/* Multi-line
   comment */`,
      },
    ],
    python: [
      {
        title: "Hello World",
        description: "Print text to the console",
        code: `print("Hello, World!")`,
      },
      {
        title: "Variables",
        description: "Declare and use variables",
        code: `name = "Alice"
age = 25
price = 19.99`,
      },
      {
        title: "Comments",
        description: "Add comments to your code",
        code: `# This is a comment
name = "John"  # Inline comment`,
      },
    ],
    java: [
      {
        title: "Hello World",
        description: "Print text to the console",
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      },
      {
        title: "Variables",
        description: "Declare and use variables",
        code: `int age = 25;
String name = "John";
double price = 19.99;`,
      },
      {
        title: "Comments",
        description: "Add comments to your code",
        code: `// Single-line comment

/* Multi-line
   comment */`,
      },
    ],
    javascript: [
      {
        title: "Hello World",
        description: "Print text to the console",
        code: `console.log("Hello, World!");`,
      },
      {
        title: "Variables",
        description: "Declare and use variables",
        code: `let name = "Alice";
const age = 25;
var price = 19.99;`,
      },
      {
        title: "Comments",
        description: "Add comments to your code",
        code: `// Single-line comment

/* Multi-line
   comment */`,
      },
    ],
    html: [
      {
        title: "Basic Structure",
        description: "Create a basic HTML document",
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
        title: "Headings",
        description: "Use different heading levels",
        code: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Heading</h3>`,
      },
      {
        title: "Comments",
        description: "Add comments to your HTML",
        code: `<!-- This is an HTML comment -->`,
      },
    ],
    css: [
      {
        title: "Basic Syntax",
        description: "Style HTML elements",
        code: `h1 {
    color: blue;
    font-size: 24px;
}`,
      },
      {
        title: "Selectors",
        description: "Target different elements",
        code: `/* Element selector */
p { color: black; }

/* Class selector */
.my-class { color: red; }

/* ID selector */
#my-id { color: green; }`,
      },
      {
        title: "Comments",
        description: "Add comments to your CSS",
        code: `/* This is a CSS comment */`,
      },
    ],
    sql: [
      {
        title: "SELECT Statement",
        description: "Retrieve data from a table",
        code: `SELECT * FROM users;`,
      },
      {
        title: "WHERE Clause",
        description: "Filter data with conditions",
        code: `SELECT name, email 
FROM users 
WHERE age > 18;`,
      },
      {
        title: "Comments",
        description: "Add comments to your SQL",
        code: `-- Single-line comment

/* Multi-line
   comment */`,
      },
    ],
  }

  return basics[id] || []
}

/**
 * Get code examples for a language
 */
function getCodeExamples(id: LanguageId): SyntaxExample[] {
  const examples: Record<LanguageId, SyntaxExample[]> = {
    c: [
      {
        title: "Input and Output",
        description: "Get input from user and display output",
        code: `#include <stdio.h>

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    printf("You entered: %d\\n", num);
    return 0;
}`,
      },
    ],
    cpp: [
      {
        title: "Input and Output",
        description: "Get input from user and display output",
        code: `#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    cout << "You entered: " << num << endl;
    return 0;
}`,
      },
    ],
    python: [
      {
        title: "Input and Output",
        description: "Get input from user and display output",
        code: `name = input("Enter your name: ")
print("Hello, " + name + "!")`,
      },
    ],
    java: [
      {
        title: "Input and Output",
        description: "Get input from user and display output",
        code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name + "!");
    }
}`,
      },
    ],
    javascript: [
      {
        title: "Variables and Functions",
        description: "Create and use functions",
        code: `function greet(name) {
    return "Hello, " + name + "!";
}

let message = greet("Alice");
console.log(message);`,
      },
    ],
    html: [
      {
        title: "Links and Images",
        description: "Create links and add images",
        code: `<a href="https://example.com">Visit Example</a>

<img src="image.jpg" alt="Description">`,
      },
    ],
    css: [
      {
        title: "Styling Multiple Elements",
        description: "Apply styles to multiple elements",
        code: `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
}`,
      },
    ],
    sql: [
      {
        title: "INSERT Statement",
        description: "Add new data to a table",
        code: `INSERT INTO users (name, email, age)
VALUES ('John Doe', 'john@example.com', 25);`,
      },
    ],
  }

  return examples[id] || []
}

/**
 * Get practice exercises for a language
 */
function getPracticeExercises(id: LanguageId): PracticeExercise[] {
  const exercises: Record<LanguageId, PracticeExercise[]> = {
    c: [
      {
        id: "c-1",
        title: "Print Hello World",
        description: "Complete the code to print 'Hello, World!'",
        incompleteCode: `#include <stdio.h>

int main() {
    printf("___");
    return 0;
}`,
        placeholder: "Hello, World!",
        expectedAnswer: "Hello, World!",
        hint: "Use printf with the message in quotes",
      },
      {
        id: "c-2",
        title: "Declare a Variable",
        description: "Declare an integer variable named 'age' with value 25",
        incompleteCode: `int ___ = 25;`,
        placeholder: "age",
        expectedAnswer: "age",
        hint: "Variable name should be 'age'",
      },
    ],
    cpp: [
      {
        id: "cpp-1",
        title: "Print Hello World",
        description: "Complete the code to print 'Hello, World!'",
        incompleteCode: `#include <iostream>
using namespace std;

int main() {
    cout << "___" << endl;
    return 0;
}`,
        placeholder: "Hello, World!",
        expectedAnswer: "Hello, World!",
        hint: "Use cout with the message in quotes",
      },
    ],
    python: [
      {
        id: "python-1",
        title: "Print Hello World",
        description: "Complete the code to print 'Hello, World!'",
        incompleteCode: `print("___")`,
        placeholder: "Hello, World!",
        expectedAnswer: "Hello, World!",
        hint: "Use print() with the message in quotes",
      },
      {
        id: "python-2",
        title: "Create a Variable",
        description: "Create a variable named 'name' with value 'Alice'",
        incompleteCode: `___ = "Alice"`,
        placeholder: "name",
        expectedAnswer: "name",
        hint: "Variable name should be 'name'",
      },
    ],
    java: [
      {
        id: "java-1",
        title: "Print Hello World",
        description: "Complete the print statement",
        incompleteCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("___");
    }
}`,
        placeholder: "Hello, World!",
        expectedAnswer: "Hello, World!",
        hint: "Use System.out.println with the message",
      },
    ],
    javascript: [
      {
        id: "js-1",
        title: "Print Hello World",
        description: "Complete the code to print 'Hello, World!'",
        incompleteCode: `console.log("___");`,
        placeholder: "Hello, World!",
        expectedAnswer: "Hello, World!",
        hint: "Use console.log with the message in quotes",
      },
    ],
    html: [
      {
        id: "html-1",
        title: "Create a Heading",
        description: "Complete the heading tag to display 'Welcome'",
        incompleteCode: `<h1>___</h1>`,
        placeholder: "Welcome",
        expectedAnswer: "Welcome",
        hint: "Add the text between the opening and closing tags",
      },
    ],
    css: [
      {
        id: "css-1",
        title: "Set Text Color",
        description: "Set the color of paragraph text to blue",
        incompleteCode: `p {
    color: ___;
}`,
        placeholder: "blue",
        expectedAnswer: "blue",
        hint: "Use the color name 'blue'",
      },
    ],
    sql: [
      {
        id: "sql-1",
        title: "Select All Columns",
        description: "Complete the SELECT statement to get all columns from users table",
        incompleteCode: `SELECT ___ FROM users;`,
        placeholder: "*",
        expectedAnswer: "*",
        hint: "Use * to select all columns",
      },
    ],
  }

  return exercises[id] || []
}

