/**
 * JavaScript Language Data
 * 
 * Comprehensive JavaScript programming tutorial data.
 * Organized by categories with topics, explanations, and practice questions.
 */

export const javascriptCoding = {
  language: "JavaScript",
  categories: [
    {
      id: "basics",
      title: "JavaScript Basics",
      topics: [
        {
          id: "js-intro",
          title: "JS Intro",
          explanation: "JavaScript is a powerful programming language that runs in web browsers and on servers. Created by Brendan Eich in 1995, JavaScript makes websites interactive and dynamic. It's the only programming language that runs natively in browsers, making it essential for web development. With Node.js, JavaScript can also run on servers, making it a full-stack language. JavaScript is versatile, easy to learn, and used by millions of developers worldwide.",
          syntax: "JavaScript code can be written directly in HTML using <script> tags, in separate .js files, or in browser console. JavaScript is case-sensitive and uses semicolons (optional but recommended).",
          examples: [
            {
              title: "Hello World Program",
              description: "Basic JavaScript program",
              code: `console.log("Hello, World!");`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function is used to display output in JavaScript?",
              type: "fill",
              starterCode: `___.log("Hello, World!");`,
              answer: "console",
            },
            {
              question: "Complete the JavaScript hello world program",
              type: "complete",
              starterCode: `console.log(___"Hello, World!"___);`,
              answer: '"Hello, World!"',
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `console.log("JavaScript is awesome");`,
              answer: "JavaScript is awesome",
            },
          ],
        },
        {
          id: "js-syntax",
          title: "JS Syntax",
          explanation: "JavaScript syntax is the set of rules that define how JavaScript code is written. JavaScript uses curly braces {} for code blocks, semicolons to end statements (optional but recommended), and is case-sensitive. Variables are declared with let, const, or var. JavaScript supports both single and double quotes for strings. Understanding syntax is crucial for writing correct JavaScript code.",
          syntax: "Statements end with semicolons (optional). Code blocks use {}. Variables: let, const, var. Strings: 'single' or \"double\" quotes. Comments: // single line or /* multi-line */.",
          examples: [
            {
              title: "Basic Syntax Rules",
              description: "JavaScript syntax fundamentals",
              code: `// Single line comment
let name = "JavaScript";  // Semicolon optional
if (name === "JavaScript") {
    console.log("Hello!");  // Code block with curly braces
}
/* Multi-line
   comment */`,
            },
          ],
          practiceQuestions: [
            {
              question: "What keyword is used to declare a variable?",
              type: "fill",
              starterCode: `___ name = "JavaScript";`,
              answer: "let",
            },
            {
              question: "Complete the if statement with proper syntax",
              type: "complete",
              starterCode: `if (x > 5) ___
    console.log("Greater");
___`,
              answer: "{\n}",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let x = 10;
console.log(x);`,
              answer: "10",
            },
          ],
        },
        {
          id: "js-variables",
          title: "JS Variables",
          explanation: "Variables are containers that store data values. In JavaScript, you can declare variables using let, const, or var. let is used for variables that can be reassigned. const is used for constants that cannot be reassigned. var is the old way (avoid in modern JavaScript). Variables must start with a letter, underscore, or dollar sign. They are case-sensitive and can contain letters, numbers, and underscores.",
          syntax: "let variableName = value;  // Can be reassigned\nconst constantName = value;  // Cannot be reassigned\nvar oldVariable = value;  // Avoid in modern JS",
          examples: [
            {
              title: "Variable Declarations",
              description: "Different ways to declare variables",
              code: `let age = 25;  // Can be changed
const name = "JavaScript";  // Cannot be changed
let price = 19.99;
console.log(age, name, price);`,
            },
          ],
          practiceQuestions: [
            {
              question: "Declare a variable 'message' with value 'Hello'",
              type: "fill",
              starterCode: `___ message = "Hello";
console.log(message);`,
              answer: "let",
            },
            {
              question: "Create a constant 'PI' with value 3.14",
              type: "complete",
              starterCode: `___ PI = 3.14;
console.log(PI);`,
              answer: "const",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let x = 5;
let y = 10;
console.log(x + y);`,
              answer: "15",
            },
          ],
        },
        {
          id: "js-data-types",
          title: "JS Data Types",
          explanation: "JavaScript has several data types. Primitive types include: number (integers and decimals), string (text), boolean (true/false), undefined (variable declared but not assigned), null (intentional absence of value), and symbol (unique identifier). JavaScript also has object types like arrays and objects. JavaScript is dynamically typed, meaning variables can hold different types of values. Use typeof operator to check a variable's type.",
          syntax: "let num = 42;  // Number\nlet text = \"Hello\";  // String\nlet isActive = true;  // Boolean\nlet value = null;  // Null\nlet data;  // Undefined\nconsole.log(typeof num);  // Check type",
          examples: [
            {
              title: "Data Types Examples",
              description: "Different JavaScript data types",
              code: `let age = 25;  // Number
let name = "Alice";  // String
let isStudent = true;  // Boolean
let data = null;  // Null
let value;  // Undefined

console.log(typeof age);  // "number"
console.log(typeof name);  // "string"
console.log(typeof isStudent);  // "boolean"`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the data type of the value 42?",
              type: "fill",
              starterCode: `let num = 42;
console.log(typeof ___);`,
              answer: "num",
            },
            {
              question: "Create a boolean variable 'isReady' with value true",
              type: "complete",
              starterCode: `let isReady = ___;
console.log(isReady);`,
              answer: "true",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let text = "Hello";
console.log(typeof text);`,
              answer: "string",
            },
          ],
        },
        {
          id: "js-operators",
          title: "JS Operators",
          explanation: "Operators perform operations on values. JavaScript has arithmetic operators (+, -, *, /, %, **), assignment operators (=, +=, -=), comparison operators (==, ===, !=, !==, <, >, <=, >=), and logical operators (&&, ||, !). The === operator checks strict equality (value and type), while == checks loose equality (value only). Understanding operators is essential for calculations and comparisons in JavaScript.",
          syntax: "Arithmetic: +, -, *, /, %, **\nAssignment: =, +=, -=, *=, /=\nComparison: ==, ===, !=, !==, <, >, <=, >=\nLogical: && (AND), || (OR), ! (NOT)",
          examples: [
            {
              title: "Operators Examples",
              description: "Using different JavaScript operators",
              code: `let a = 10;
let b = 3;

console.log(a + b);  // 13 (addition)
console.log(a - b);  // 7 (subtraction)
console.log(a * b);  // 30 (multiplication)
console.log(a / b);  // 3.333... (division)
console.log(a % b);  // 1 (modulus/remainder)
console.log(a === b);  // false (strict equality)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add 5 and 3 using the addition operator",
              type: "fill",
              starterCode: `let result = 5 ___ 3;
console.log(result);`,
              answer: "+",
            },
            {
              question: "Check strict equality between a and b",
              type: "complete",
              starterCode: `let a = 5;
let b = 5;
console.log(a ___ b);`,
              answer: "===",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `console.log(10 % 3);`,
              answer: "1",
            },
          ],
        },
        {
          id: "js-if-conditions",
          title: "JS If Conditions",
          explanation: "Conditional statements execute different code based on conditions. The if statement executes code if a condition is true. The else statement executes code if the condition is false. The else if statement checks multiple conditions. Conditional statements are essential for making decisions in your code and controlling program flow based on different situations.",
          syntax: "if (condition) { code }\nif (condition) { code } else { code }\nif (condition1) { code } else if (condition2) { code } else { code }",
          examples: [
            {
              title: "If-Else Statements",
              description: "Using conditional statements",
              code: `let age = 18;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the if condition to check if age is greater than or equal to 18",
              type: "fill",
              starterCode: `let age = 20;
___ (age >= 18) {
    console.log("Adult");
}`,
              answer: "if",
            },
            {
              question: "Add an else clause to the if statement",
              type: "complete",
              starterCode: `let temp = 25;
if (temp > 30) {
    console.log("Hot");
} ___ {
    console.log("Cool");
}`,
              answer: "else",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let x = 10;
if (x > 5) {
    console.log("Greater");
} else {
    console.log("Smaller");
}`,
              answer: "Greater",
            },
          ],
        },
        {
          id: "js-loops",
          title: "JS Loops",
          explanation: "Loops repeat code blocks multiple times. JavaScript has several loop types: for loops (when you know iterations), while loops (repeat while condition is true), do-while loops (execute at least once), for...in loops (iterate over object properties), and for...of loops (iterate over iterable values like arrays). Loops are essential for processing collections of data and performing repetitive tasks efficiently.",
          syntax: "for (init; condition; increment) { code }\nwhile (condition) { code }\ndo { code } while (condition);\nfor (let item of array) { code }\nfor (let key in object) { code }",
          examples: [
            {
              title: "Loop Examples",
              description: "Different types of loops",
              code: `// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// While loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// For...of loop
let fruits = ["apple", "banana"];
for (let fruit of fruits) {
    console.log(fruit);
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the for loop to iterate from 0 to 4",
              type: "fill",
              starterCode: `for (let i = 0; i ___ 5; i++) {
    console.log(i);
}`,
              answer: "<",
            },
            {
              question: "Complete the increment in the while loop",
              type: "complete",
              starterCode: `let i = 0;
while (i < 5) {
    console.log(i);
    i___;
}`,
              answer: "++",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `for (let i = 0; i < 3; i++) {
    console.log(i * 2);
}`,
              answer: "0\n2\n4",
            },
          ],
        },
        {
          id: "js-strings",
          title: "JS Strings",
          explanation: "Strings are sequences of characters used to represent text. In JavaScript, strings can be created using single quotes, double quotes, or template literals (backticks). Strings are immutable (cannot be changed directly), but JavaScript provides many methods to work with strings like length, toUpperCase(), toLowerCase(), substring(), indexOf(), and more. Template literals allow string interpolation with ${} syntax.",
          syntax: "let str = 'text';\nlet str = \"text\";\nlet str = `text ${variable}`;  // Template literal\nstr.length  // Get length\nstr.toUpperCase()  // Convert to uppercase\nstr.substring(start, end)  // Get substring",
          examples: [
            {
              title: "String Operations",
              description: "Working with strings",
              code: `let name = "JavaScript";
console.log(name.length);  // 10

let greeting = "Hello";
console.log(greeting.toUpperCase());  // "HELLO"

let message = \`Welcome to \${name}\`;
console.log(message);  // "Welcome to JavaScript"

let text = "Hello World";
console.log(text.substring(0, 5));  // "Hello"`,
            },
          ],
          practiceQuestions: [
            {
              question: "Get the length of the string 'Hello'",
              type: "fill",
              starterCode: `let text = "Hello";
console.log(text.___);`,
              answer: "length",
            },
            {
              question: "Convert the string to uppercase",
              type: "complete",
              starterCode: `let text = "hello";
console.log(text.___());`,
              answer: "toUpperCase",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let name = "JavaScript";
console.log(name.length);`,
              answer: "10",
            },
          ],
        },
        {
          id: "js-numbers",
          title: "JS Numbers",
          explanation: "Numbers in JavaScript represent numeric values. JavaScript has one number type that can represent both integers and floating-point numbers. Numbers can be positive, negative, or zero. JavaScript provides the Math object with many useful methods for mathematical operations like Math.round(), Math.floor(), Math.ceil(), Math.max(), Math.min(), and Math.random(). You can perform arithmetic operations directly on numbers.",
          syntax: "let num = 42;  // Integer\nlet decimal = 3.14;  // Float\nMath.round(3.7)  // Round to nearest\nMath.floor(3.7)  // Round down\nMath.ceil(3.2)  // Round up\nMath.max(5, 10)  // Maximum\nMath.min(5, 10)  // Minimum\nMath.random()  // Random 0-1",
          examples: [
            {
              title: "Number Operations",
              description: "Working with numbers and Math object",
              code: `let num1 = 10;
let num2 = 3.7;

console.log(num1 + num2);  // 13.7
console.log(Math.round(num2));  // 4
console.log(Math.floor(num2));  // 3
console.log(Math.ceil(num2));  // 4

console.log(Math.max(5, 10, 3));  // 10
console.log(Math.min(5, 10, 3));  // 3
console.log(Math.random());  // Random number 0-1`,
            },
          ],
          practiceQuestions: [
            {
              question: "Round 3.7 to the nearest integer",
              type: "fill",
              starterCode: `let num = 3.7;
console.log(Math.___(num));`,
              answer: "round",
            },
            {
              question: "Find the maximum of 5, 10, and 3",
              type: "complete",
              starterCode: `console.log(Math.___(5, 10, 3));`,
              answer: "max",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `console.log(Math.floor(4.9));`,
              answer: "4",
            },
          ],
        },
        {
          id: "js-arrays",
          title: "JS Arrays",
          explanation: "Arrays are ordered collections of values. In JavaScript, arrays can hold any type of data including numbers, strings, objects, and even other arrays. Arrays are zero-indexed (first element is at index 0). Arrays have a length property and many useful methods like push() to add elements, pop() to remove from end, shift() to remove from beginning, unshift() to add to beginning, and forEach() to iterate. Arrays are essential for storing and manipulating collections of data.",
          syntax: "let arr = [1, 2, 3];  // Array literal\narr[0]  // Access element\narr.length  // Get length\narr.push(value)  // Add to end\narr.pop()  // Remove from end\narr.forEach(item => { code })  // Iterate",
          examples: [
            {
              title: "Array Operations",
              description: "Working with arrays",
              code: `let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);  // "apple"
console.log(fruits.length);  // 3

fruits.push("grape");  // Add to end
console.log(fruits);  // ["apple", "banana", "orange", "grape"]

fruits.pop();  // Remove from end
console.log(fruits);  // ["apple", "banana", "orange"]

fruits.forEach(fruit => {
    console.log(fruit);
});`,
            },
          ],
          practiceQuestions: [
            {
              question: "Access the first element of the array",
              type: "fill",
              starterCode: `let fruits = ["apple", "banana"];
console.log(fruits[___]);`,
              answer: "0",
            },
            {
              question: "Add 'grape' to the end of the array",
              type: "complete",
              starterCode: `let fruits = ["apple", "banana"];
fruits.___("grape");
console.log(fruits);`,
              answer: "push",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let numbers = [1, 2, 3];
console.log(numbers.length);`,
              answer: "3",
            },
          ],
        },
        {
          id: "js-objects",
          title: "JS Objects",
          explanation: "Objects are collections of key-value pairs used to store and organize related data. In JavaScript, objects are created using curly braces {} with properties defined as key: value pairs. Properties can be accessed using dot notation (object.property) or bracket notation (object['property']). Objects can contain any type of data including strings, numbers, arrays, and even other objects. Objects are fundamental for representing real-world entities and organizing complex data structures.",
          syntax: "let obj = { key: value, key2: value2 };\nobj.key  // Access property\nobj['key']  // Access with bracket notation\nobj.newKey = value;  // Add property\ndelete obj.key;  // Delete property",
          examples: [
            {
              title: "Object Operations",
              description: "Creating and using objects",
              code: `let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log(person.name);  // "Alice"
console.log(person['age']);  // 25

person.email = "alice@example.com";  // Add property
console.log(person);

delete person.city;  // Remove property
console.log(person);`,
            },
          ],
          practiceQuestions: [
            {
              question: "Access the 'name' property of the person object",
              type: "fill",
              starterCode: `let person = { name: "Alice", age: 25 };
console.log(person.___);`,
              answer: "name",
            },
            {
              question: "Add a 'city' property with value 'New York'",
              type: "complete",
              starterCode: `let person = { name: "Alice" };
person.___ = "New York";
console.log(person);`,
              answer: "city",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let obj = { x: 10, y: 20 };
console.log(obj.x + obj.y);`,
              answer: "30",
            },
          ],
        },
        {
          id: "js-sets",
          title: "JS Sets",
          explanation: "Sets are collections of unique values. In JavaScript, a Set stores only unique values - no duplicates allowed. Sets are useful when you need to ensure uniqueness in a collection. You can add values with add(), remove with delete(), check existence with has(), and get the size with the size property. Sets are iterable and can be converted to arrays. Sets are perfect for removing duplicates from arrays and checking membership efficiently.",
          syntax: "let set = new Set();\nset.add(value)  // Add value\nset.delete(value)  // Remove value\nset.has(value)  // Check if exists\nset.size  // Get size\nset.clear()  // Remove all",
          examples: [
            {
              title: "Set Operations",
              description: "Working with Sets",
              code: `let numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(2);  // Duplicate ignored
numbers.add(3);

console.log(numbers.size);  // 3
console.log(numbers.has(2));  // true

numbers.delete(2);
console.log(numbers.has(2));  // false

// Convert array to Set (removes duplicates)
let arr = [1, 2, 2, 3, 3, 4];
let uniqueSet = new Set(arr);
console.log([...uniqueSet]);  // [1, 2, 3, 4]`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add the value 5 to the set",
              type: "fill",
              starterCode: `let set = new Set();
set.___(5);
console.log(set.has(5));`,
              answer: "add",
            },
            {
              question: "Check if the set contains the value 10",
              type: "complete",
              starterCode: `let set = new Set([10, 20]);
console.log(set.___(10));`,
              answer: "has",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let set = new Set([1, 2, 2, 3]);
console.log(set.size);`,
              answer: "3",
            },
          ],
        },
        {
          id: "js-maps",
          title: "JS Maps",
          explanation: "Maps are collections of key-value pairs where keys can be any data type (unlike objects where keys are strings). Maps maintain insertion order and provide better performance for frequent additions and deletions. Maps are created with new Map() and use set() to add entries, get() to retrieve values, has() to check existence, delete() to remove entries, and size to get the number of entries. Maps are ideal for storing key-value data with non-string keys or when you need to preserve insertion order.",
          syntax: "let map = new Map();\nmap.set(key, value)  // Add entry\nmap.get(key)  // Get value\nmap.has(key)  // Check if key exists\nmap.delete(key)  // Remove entry\nmap.size  // Get size\nmap.clear()  // Remove all",
          examples: [
            {
              title: "Map Operations",
              description: "Working with Maps",
              code: `let userMap = new Map();

userMap.set("name", "Alice");
userMap.set("age", 25);
userMap.set(1, "one");  // Number as key

console.log(userMap.get("name"));  // "Alice"
console.log(userMap.has("age"));  // true
console.log(userMap.size);  // 3

userMap.delete("age");
console.log(userMap.size);  // 2

// Iterate over map
for (let [key, value] of userMap) {
    console.log(key, value);
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add a key-value pair to the map",
              type: "fill",
              starterCode: `let map = new Map();
map.___("name", "Alice");
console.log(map.get("name"));`,
              answer: "set",
            },
            {
              question: "Get the value for key 'city'",
              type: "complete",
              starterCode: `let map = new Map([["city", "New York"]]);
console.log(map.___("city"));`,
              answer: "get",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let map = new Map();
map.set("x", 10);
map.set("y", 20);
console.log(map.get("x") + map.get("y"));`,
              answer: "30",
            },
          ],
        },
        {
          id: "js-iterations",
          title: "JS Iterations",
          explanation: "Iteration is the process of looping through collections of data. JavaScript provides multiple ways to iterate: for loops, while loops, for...of loops for arrays and iterables, for...in loops for object properties, and array methods like forEach(), map(), filter(), and reduce(). Each iteration method has its use case - for...of is great for arrays, forEach() for side effects, map() for transformations, and filter() for selecting elements. Understanding different iteration methods makes code more readable and efficient.",
          syntax: "for (let item of array) { code }\nfor (let key in object) { code }\narray.forEach(item => { code })\narray.map(item => transformed)\narray.filter(item => condition)\narray.reduce((acc, item) => result, initial)",
          examples: [
            {
              title: "Iteration Methods",
              description: "Different ways to iterate",
              code: `let numbers = [1, 2, 3, 4, 5];

// for...of loop
for (let num of numbers) {
    console.log(num);
}

// forEach
numbers.forEach(num => {
    console.log(num * 2);
});

// map (creates new array)
let doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter (creates new array)
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]`,
            },
          ],
          practiceQuestions: [
            {
              question: "Loop through the array using for...of",
              type: "fill",
              starterCode: `let fruits = ["apple", "banana"];
for (let fruit ___ fruits) {
    console.log(fruit);
}`,
              answer: "of",
            },
            {
              question: "Use forEach to print each number",
              type: "complete",
              starterCode: `let numbers = [1, 2, 3];
numbers.___(num => console.log(num));`,
              answer: "forEach",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2);
console.log(doubled);`,
              answer: "[2, 4, 6]",
            },
          ],
        },
        {
          id: "js-math",
          title: "JS Math",
          explanation: "The Math object provides mathematical constants and functions. Math is a built-in object with static methods and properties for mathematical operations. Common methods include Math.round() for rounding, Math.floor() for rounding down, Math.ceil() for rounding up, Math.max() and Math.min() for finding extremes, Math.random() for random numbers, Math.pow() for exponentiation, Math.sqrt() for square root, and Math.abs() for absolute value. Math also provides constants like Math.PI and Math.E.",
          syntax: "Math.round(num)  // Round to nearest\nMath.floor(num)  // Round down\nMath.ceil(num)  // Round up\nMath.max(a, b, c)  // Maximum\nMath.min(a, b, c)  // Minimum\nMath.random()  // Random 0-1\nMath.pow(base, exp)  // Power\nMath.sqrt(num)  // Square root\nMath.abs(num)  // Absolute value\nMath.PI  // Pi constant",
          examples: [
            {
              title: "Math Object Methods",
              description: "Using Math object functions",
              code: `console.log(Math.round(4.7));  // 5
console.log(Math.floor(4.7));  // 4
console.log(Math.ceil(4.2));  // 5

console.log(Math.max(5, 10, 3));  // 10
console.log(Math.min(5, 10, 3));  // 3

console.log(Math.random());  // Random 0-1
console.log(Math.pow(2, 3));  // 8 (2^3)
console.log(Math.sqrt(16));  // 4
console.log(Math.abs(-5));  // 5

console.log(Math.PI);  // 3.14159...`,
            },
          ],
          practiceQuestions: [
            {
              question: "Calculate the square root of 25",
              type: "fill",
              starterCode: `console.log(Math.___(25));`,
              answer: "sqrt",
            },
            {
              question: "Calculate 2 to the power of 4",
              type: "complete",
              starterCode: `console.log(Math.___(2, 4));`,
              answer: "pow",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `console.log(Math.abs(-10));`,
              answer: "10",
            },
          ],
        },
        {
          id: "js-regexp",
          title: "JS RegExp",
          explanation: "Regular expressions (RegExp) are patterns used to match character combinations in strings. Regular expressions are powerful tools for searching, matching, and replacing text. In JavaScript, you can create regex using /pattern/ literal syntax or new RegExp(). Common regex methods include test() to check if pattern matches, exec() to find matches, and string methods like match(), replace(), and search(). Regular expressions use special characters like . (any character), * (zero or more), + (one or more), ? (zero or one), ^ (start), $ (end), and [] (character class).",
          syntax: "let regex = /pattern/;\nlet regex = new RegExp('pattern');\nregex.test(string)  // Returns true/false\nregex.exec(string)  // Returns match or null\nstring.match(regex)  // Returns matches\nstring.replace(regex, replacement)  // Replace matches\nstring.search(regex)  // Returns index or -1",
          examples: [
            {
              title: "Regular Expression Examples",
              description: "Using regex for pattern matching",
              code: `// Simple pattern matching
let pattern = /hello/;
console.log(pattern.test("hello world"));  // true

// Case insensitive
let caseInsensitive = /hello/i;
console.log(caseInsensitive.test("Hello"));  // true

// Find digits
let digits = /\d+/;
console.log(digits.test("abc123"));  // true

// Replace text
let text = "Hello World";
let newText = text.replace(/World/, "JavaScript");
console.log(newText);  // "Hello JavaScript"

// Search for pattern
let index = text.search(/World/);
console.log(index);  // 6`,
            },
          ],
          practiceQuestions: [
            {
              question: "Test if the string contains 'hello'",
              type: "fill",
              starterCode: `let regex = /hello/;
console.log(regex.___("hello world"));`,
              answer: "test",
            },
            {
              question: "Replace 'cat' with 'dog' in the string",
              type: "complete",
              starterCode: `let text = "I have a cat";
let newText = text.___(/cat/, "dog");
console.log(newText);`,
              answer: "replace",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let regex = /\d+/;
console.log(regex.test("abc123"));`,
              answer: "true",
            },
          ],
        },
        {
          id: "js-functions",
          title: "JS Functions",
          explanation: "Functions are reusable blocks of code that perform specific tasks. Functions help organize code, eliminate repetition, and make programs modular. In JavaScript, functions can be declared with the function keyword, as arrow functions, or as function expressions. Functions can accept parameters (inputs) and return values (outputs). Functions are first-class citizens in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.",
          syntax: "function name(parameters) { code; return value; }\nconst name = (parameters) => { code; return value; }\nconst name = function(parameters) { code; return value; }",
          examples: [
            {
              title: "Function Examples",
              description: "Different ways to create functions",
              code: `// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow function
const add = (a, b) => {
    return a + b;
};

// Function expression
const multiply = function(x, y) {
    return x * y;
};

console.log(greet("Alice"));  // "Hello, Alice!"
console.log(add(5, 3));  // 8
console.log(multiply(4, 2));  // 8`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the function declaration",
              type: "fill",
              starterCode: `___ sayHello() {
    console.log("Hello!");
}

sayHello();`,
              answer: "function",
            },
            {
              question: "Complete the return statement",
              type: "complete",
              starterCode: `function multiply(x, y) {
    ___ x * y;
}

console.log(multiply(3, 4));`,
              answer: "return",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `function greet(name) {
    return "Hi, " + name;
}

console.log(greet("Bob"));`,
              answer: "Hi, Bob",
            },
          ],
        },
        {
          id: "js-scope",
          title: "JS Scope",
          explanation: "Scope determines the accessibility of variables, functions, and objects in different parts of your code. JavaScript has global scope (accessible everywhere) and local scope (accessible only within a function or block). Variables declared with let and const have block scope (accessible only within {}), while var has function scope. Understanding scope is crucial for avoiding variable conflicts and writing maintainable code. Inner scopes can access outer scope variables, but outer scopes cannot access inner scope variables.",
          syntax: "let globalVar = 'global';  // Global scope\nfunction myFunction() {\n  let localVar = 'local';  // Local scope\n  console.log(globalVar);  // Can access global\n}\nconsole.log(localVar);  // Error: not accessible",
          examples: [
            {
              title: "Scope Examples",
              description: "Understanding variable scope",
              code: `// Global scope
let globalVar = "I'm global";

function outerFunction() {
    // Function scope
    let functionVar = "I'm in function";
    
    if (true) {
        // Block scope
        let blockVar = "I'm in block";
        console.log(globalVar);  // Can access global
        console.log(functionVar);  // Can access function
        console.log(blockVar);  // Can access block
    }
    
    // console.log(blockVar);  // Error: blockVar not accessible here
}

outerFunction();
// console.log(functionVar);  // Error: functionVar not accessible here`,
            },
          ],
          practiceQuestions: [
            {
              question: "What keyword creates block-scoped variables?",
              type: "fill",
              starterCode: `___ x = 10;
if (true) {
    ___ y = 20;
}
console.log(x);`,
              answer: "let",
            },
            {
              question: "Complete the function to access the global variable",
              type: "complete",
              starterCode: `let global = "global";
function test() {
    console.log(___);
}
test();`,
              answer: "global",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let x = 10;
function test() {
    let x = 20;
    console.log(x);
}
test();
console.log(x);`,
              answer: "20\n10",
            },
          ],
        },
        {
          id: "js-dates",
          title: "JS Dates",
          explanation: "The Date object represents dates and times in JavaScript. Dates are created using new Date() and can represent any date and time. JavaScript provides many methods to work with dates like getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), and their setter counterparts. Dates can be formatted and compared. The Date object is essential for handling timestamps, scheduling, and time-based operations in applications.",
          syntax: "let date = new Date();  // Current date/time\nlet date = new Date(year, month, day);\nlet date = new Date('YYYY-MM-DD');\ndate.getFullYear()  // Get year\ndate.getMonth()  // Get month (0-11)\ndate.getDate()  // Get day\ndate.getHours()  // Get hours\ndate.toDateString()  // Format date",
          examples: [
            {
              title: "Date Operations",
              description: "Working with dates",
              code: `// Current date and time
let now = new Date();
console.log(now);

// Specific date
let birthday = new Date(2024, 0, 15);  // Month is 0-indexed
console.log(birthday);

// Get date components
console.log(now.getFullYear());  // Current year
console.log(now.getMonth());  // Current month (0-11)
console.log(now.getDate());  // Current day
console.log(now.getDay());  // Day of week (0-6)

// Format date
console.log(now.toDateString());  // "Mon Jan 15 2024"
console.log(now.toLocaleDateString());  // Localized format`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a new Date object for the current date and time",
              type: "fill",
              starterCode: `let now = new ___();
console.log(now);`,
              answer: "Date",
            },
            {
              question: "Get the current year",
              type: "complete",
              starterCode: `let date = new Date();
console.log(date.___());`,
              answer: "getFullYear",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let date = new Date(2024, 0, 1);
console.log(date.getMonth());`,
              answer: "0",
            },
          ],
        },
        {
          id: "js-errors",
          title: "JS Errors",
          explanation: "Errors occur when something goes wrong in your JavaScript code. Common error types include SyntaxError (syntax mistakes), ReferenceError (variable doesn't exist), TypeError (wrong data type operation), and RangeError (value out of range). JavaScript provides try-catch blocks to handle errors gracefully. The throw statement allows you to create custom errors. Understanding errors helps debug code and create robust applications that handle unexpected situations properly.",
          syntax: "try { code } catch(error) { handle error }\nthrow new Error('message');\nconsole.error('error message');",
          examples: [
            {
              title: "Error Handling",
              description: "Catching and handling errors",
              code: `// Try-catch block
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}

// Throwing custom errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message);  // "Cannot divide by zero"
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the try-catch block",
              type: "fill",
              starterCode: `___ {
    let x = 10 / 0;
} ___ (error) {
    console.error(error);
}`,
              answer: "try\ncatch",
            },
            {
              question: "Throw a custom error with message 'Invalid input'",
              type: "complete",
              starterCode: `___ new Error("Invalid input");`,
              answer: "throw",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `try {
    let x = undefined;
    console.log(x.toString());
} catch (error) {
    console.log("Error caught");
}`,
              answer: "Error caught",
            },
          ],
        },
        {
          id: "js-conventions",
          title: "JS Conventions",
          explanation: "Coding conventions are style guidelines that make code more readable and maintainable. JavaScript conventions include using camelCase for variables and functions, PascalCase for constructors/classes, UPPER_CASE for constants, meaningful variable names, consistent indentation (usually 2 or 4 spaces), semicolons (optional but recommended), and proper commenting. Following conventions makes code easier to read, understand, and collaborate on. Many teams use tools like ESLint to enforce conventions automatically.",
          syntax: "let userName = 'value';  // camelCase\nconst MAX_SIZE = 100;  // UPPER_CASE\nfunction calculateTotal() { }  // camelCase\nclass UserAccount { }  // PascalCase",
          examples: [
            {
              title: "Naming Conventions",
              description: "Following JavaScript conventions",
              code: `// Variables: camelCase
let userName = "Alice";
let userAge = 25;

// Constants: UPPER_CASE
const MAX_USERS = 100;
const API_URL = "https://api.example.com";

// Functions: camelCase
function calculateTotal(price, tax) {
    return price + tax;
}

// Classes: PascalCase
class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

// Meaningful names
let isLoggedIn = true;  // Good
let flag = true;  // Bad (not descriptive)`,
            },
          ],
          practiceQuestions: [
            {
              question: "Name the variable using camelCase convention",
              type: "fill",
              starterCode: `let ___ = "John";`,
              answer: "userName",
            },
            {
              question: "Name the constant using UPPER_CASE convention",
              type: "complete",
              starterCode: `const ___ = 100;`,
              answer: "MAX_SIZE",
            },
            {
              question: "What naming convention is used for classes?",
              type: "predict",
              starterCode: `class UserAccount { }
// What convention?`,
              answer: "PascalCase",
            },
          ],
        },
        {
          id: "js-references",
          title: "JS References",
          explanation: "JavaScript references point to where data is stored in memory. Primitive types (numbers, strings, booleans) are stored by value - when you assign them, a copy is made. Objects and arrays are stored by reference - when you assign them, both variables point to the same object in memory. Understanding references is crucial for avoiding unexpected behavior when working with objects and arrays. Modifying an object through one variable affects all variables referencing that object.",
          syntax: "let a = 5;\nlet b = a;  // Copy by value\nb = 10;  // a still 5\n\nlet obj1 = { x: 1 };\nlet obj2 = obj1;  // Reference\nobj2.x = 2;  // obj1.x also 2",
          examples: [
            {
              title: "Value vs Reference",
              description: "Understanding value and reference types",
              code: `// Primitive types: copied by value
let a = 5;
let b = a;  // b gets a copy
b = 10;
console.log(a);  // 5 (unchanged)
console.log(b);  // 10

// Objects: copied by reference
let obj1 = { name: "Alice" };
let obj2 = obj1;  // obj2 references same object
obj2.name = "Bob";
console.log(obj1.name);  // "Bob" (changed!)
console.log(obj2.name);  // "Bob"

// Arrays: also by reference
let arr1 = [1, 2, 3];
let arr2 = arr1;  // Same reference
arr2.push(4);
console.log(arr1);  // [1, 2, 3, 4] (changed!)`,
            },
          ],
          practiceQuestions: [
            {
              question: "What happens when you assign an object to another variable?",
              type: "fill",
              starterCode: `let obj1 = { x: 1 };
let obj2 = obj1;  // obj2 is a ___
obj2.x = 2;
console.log(obj1.x);  // 2`,
              answer: "reference",
            },
            {
              question: "Complete the code to create a copy of the array",
              type: "complete",
              starterCode: `let arr1 = [1, 2, 3];
let arr2 = [...___];  // Spread operator creates copy
arr2.push(4);
console.log(arr1);  // [1, 2, 3]`,
              answer: "arr1",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let a = 10;
let b = a;
b = 20;
console.log(a);`,
              answer: "10",
            },
          ],
        },
      ],
    },
    {
      id: "versions",
      title: "JavaScript Versions",
      topics: [
        {
          id: "js-es5",
          title: "JavaScript ES5",
          explanation: "ES5 (ECMAScript 5) was released in 2009 and is widely supported in all modern browsers. ES5 introduced important features like strict mode, JSON support, array methods (forEach, map, filter, reduce), and Object methods (keys, create, defineProperty). ES5 is the foundation that most JavaScript code is built on. Understanding ES5 features is essential as they form the core of JavaScript that works everywhere.",
          syntax: "// ES5 Features\n'use strict';  // Strict mode\nJSON.parse()  // Parse JSON\nJSON.stringify()  // Convert to JSON\narray.forEach()  // Iterate\narray.map()  // Transform\nObject.keys()  // Get object keys",
          examples: [
            {
              title: "ES5 Features",
              description: "Common ES5 features",
              code: `// Strict mode
'use strict';
var x = 10;

// JSON support
var json = '{"name": "Alice", "age": 25}';
var obj = JSON.parse(json);
console.log(obj.name);  // "Alice"

var jsonString = JSON.stringify(obj);
console.log(jsonString);  // '{"name":"Alice","age":25}'

// Array methods
var numbers = [1, 2, 3, 4];
numbers.forEach(function(num) {
    console.log(num);
});

var doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled);  // [2, 4, 6, 8]`,
            },
          ],
          practiceQuestions: [
            {
              question: "Enable strict mode in JavaScript",
              type: "fill",
              starterCode: `___ 'use strict';
var x = 10;`,
              answer: "",
            },
            {
              question: "Parse the JSON string to an object",
              type: "complete",
              starterCode: `var json = '{"name": "John"}';
var obj = JSON.___(json);
console.log(obj.name);`,
              answer: "parse",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `var arr = [1, 2, 3];
var doubled = arr.map(function(x) { return x * 2; });
console.log(doubled);`,
              answer: "[2, 4, 6]",
            },
          ],
        },
        {
          id: "js-es6",
          title: "JavaScript ES6",
          explanation: "ES6 (ECMAScript 2015) was a major update released in 2015 that introduced many modern JavaScript features. ES6 added let and const for variable declarations, arrow functions, template literals, destructuring, default parameters, spread operator, classes, modules, and Promises. ES6 features make JavaScript code more concise, readable, and powerful. Most modern JavaScript code uses ES6 features, making it essential to learn.",
          syntax: "let and const  // Block-scoped variables\nconst arrow = () => { }  // Arrow functions\n`Template ${literal}`  // Template literals\nconst {x, y} = obj  // Destructuring\nconst func = (x = 5) => { }  // Default parameters\n[...array]  // Spread operator\nclass MyClass { }  // Classes",
          examples: [
            {
              title: "ES6 Features",
              description: "Modern ES6 syntax",
              code: `// let and const
let name = "Alice";
const age = 25;

// Arrow functions
const greet = (name) => {
    return \`Hello, \${name}\`;
};

// Template literals
let message = \`My name is \${name} and I'm \${age} years old\`;

// Destructuring
let person = { name: "Bob", age: 30 };
let { name, age } = person;
console.log(name);  // "Bob"

// Default parameters
function multiply(a, b = 1) {
    return a * b;
}

// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);  // [1, 2, 3, 4, 5]`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create an arrow function that adds two numbers",
              type: "fill",
              starterCode: `const add = (a, b) => ___
    return a + b;
};`,
              answer: "{",
            },
            {
              question: "Use template literal to create a message",
              type: "complete",
              starterCode: `let name = "Alice";
let message = \`Hello, ___\`;
console.log(message);`,
              answer: "${name}",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let arr1 = [1, 2];
let arr2 = [...arr1, 3];
console.log(arr2);`,
              answer: "[1, 2, 3]",
            },
          ],
        },
        {
          id: "js-es7-plus",
          title: "JavaScript ES7+",
          explanation: "ES7+ (ES2016 and later) introduced additional modern features that enhance JavaScript capabilities. ES2016 added the exponentiation operator (**) and Array.includes(). ES2017 added async/await for asynchronous code. ES2018 added rest/spread for objects. ES2019 added Array.flat() and Object.fromEntries(). ES2020 added optional chaining (?.) and nullish coalescing (??). These features make JavaScript more powerful and easier to work with.",
          syntax: "2 ** 3  // Exponentiation\narray.includes(value)  // Check if includes\nasync function() { await }  // Async/await\nconst {x, ...rest} = obj  // Object spread\narray.flat()  // Flatten array\nobj?.property  // Optional chaining\nvalue ?? default  // Nullish coalescing",
          examples: [
            {
              title: "ES7+ Features",
              description: "Modern JavaScript features",
              code: `// Exponentiation operator (ES2016)
console.log(2 ** 3);  // 8

// Array.includes() (ES2016)
let fruits = ["apple", "banana"];
console.log(fruits.includes("apple"));  // true

// Async/await (ES2017)
async function fetchData() {
    const response = await fetch('url');
    return response.json();
}

// Object spread (ES2018)
let obj1 = { x: 1, y: 2 };
let obj2 = { ...obj1, z: 3 };
console.log(obj2);  // { x: 1, y: 2, z: 3 }

// Optional chaining (ES2020)
let user = { name: "Alice" };
console.log(user?.address?.city);  // undefined (no error)

// Nullish coalescing (ES2020)
let value = null ?? "default";
console.log(value);  // "default"`,
            },
          ],
          practiceQuestions: [
            {
              question: "Calculate 2 to the power of 4 using exponentiation operator",
              type: "fill",
              starterCode: `let result = 2 ___ 4;
console.log(result);`,
              answer: "**",
            },
            {
              question: "Check if the array includes the value 5",
              type: "complete",
              starterCode: `let numbers = [1, 2, 3, 4, 5];
console.log(numbers.___(5));`,
              answer: "includes",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let value = null ?? "default";
console.log(value);`,
              answer: "default",
            },
          ],
        },
        {
          id: "js-version-compatibility",
          title: "JavaScript Version Compatibility",
          explanation: "JavaScript version compatibility refers to which JavaScript features work in which browsers and environments. Older browsers may not support newer ES6+ features. Tools like Babel transpile modern JavaScript to older versions for compatibility. Polyfills add missing features to older browsers. It's important to check browser support for features you use. Modern build tools automatically handle compatibility, but understanding version differences helps write code that works everywhere.",
          syntax: "// Check browser support\nif (typeof Array.from === 'function') { }\n\n// Use Babel to transpile ES6+ to ES5\n// Use polyfills for missing features\n// Check caniuse.com for feature support",
          examples: [
            {
              title: "Compatibility Checking",
              description: "Checking and handling compatibility",
              code: `// Feature detection
if (typeof Array.from === 'function') {
    // Feature is supported
    let arr = Array.from('hello');
    console.log(arr);
} else {
    // Feature not supported, use alternative
    console.log("Array.from not supported");
}

// Using polyfill for older browsers
if (!Array.prototype.includes) {
    Array.prototype.includes = function(search) {
        return this.indexOf(search) !== -1;
    };
}

// Modern code (transpiled by Babel for older browsers)
const greet = (name) => \`Hello, \${name}\`;
// Transpiles to: var greet = function(name) { return "Hello, " + name; };`,
            },
          ],
          practiceQuestions: [
            {
              question: "Check if a feature exists before using it",
              type: "fill",
              starterCode: `if (typeof Array.from === '___') {
    // Feature supported
}`,
              answer: "function",
            },
            {
              question: "What tool is used to convert ES6+ code to ES5?",
              type: "complete",
              starterCode: `// Use ___ to transpile modern JavaScript`,
              answer: "Babel",
            },
            {
              question: "What is a polyfill?",
              type: "predict",
              starterCode: `// Polyfill adds missing features to ___ browsers`,
              answer: "older",
            },
          ],
        },
      ],
    },
    {
      id: "dom",
      title: "JavaScript DOM",
      topics: [
        {
          id: "js-html-dom-intro",
          title: "JS HTML DOM Intro",
          explanation: "The HTML DOM (Document Object Model) is a programming interface that represents the structure of HTML documents as a tree of objects. JavaScript can access and manipulate the DOM to change content, structure, and styling of web pages dynamically. The DOM represents each HTML element as an object that can be accessed, modified, created, or deleted using JavaScript. Understanding the DOM is essential for creating interactive web pages that respond to user actions.",
          syntax: "document  // Root of DOM tree\ndocument.getElementById('id')  // Get element by ID\ndocument.body  // Access body element\nelement.innerHTML  // Get/set HTML content\nelement.textContent  // Get/set text content",
          examples: [
            {
              title: "DOM Basics",
              description: "Accessing and manipulating DOM elements",
              code: `// Access an element by ID
let heading = document.getElementById('myHeading');
console.log(heading);

// Change element content
heading.textContent = "New Heading";

// Change HTML content
heading.innerHTML = "<strong>Bold Heading</strong>";

// Access body element
let body = document.body;
console.log(body);

// Access document root
console.log(document);`,
            },
          ],
          practiceQuestions: [
            {
              question: "Get an element by its ID",
              type: "fill",
              starterCode: `let element = document.___('myId');
console.log(element);`,
              answer: "getElementById",
            },
            {
              question: "Change the text content of an element",
              type: "complete",
              starterCode: `let heading = document.getElementById('title');
heading.___ = "New Title";`,
              answer: "textContent",
            },
            {
              question: "What property gives access to the document body?",
              type: "predict",
              starterCode: `let body = document.___;
console.log(body);`,
              answer: "body",
            },
          ],
        },
        {
          id: "js-dom-selectors",
          title: "DOM Selectors",
          explanation: "DOM selectors are methods used to find and select HTML elements in the document. JavaScript provides multiple ways to select elements: getElementById() for single elements by ID, getElementsByClassName() for elements by class, getElementsByTagName() for elements by tag name, querySelector() for CSS selector (returns first match), and querySelectorAll() for CSS selector (returns all matches). Modern code prefers querySelector and querySelectorAll for their flexibility and CSS selector support.",
          syntax: "document.getElementById('id')\ndocument.getElementsByClassName('class')\ndocument.getElementsByTagName('tag')\ndocument.querySelector('selector')  // CSS selector\ndocument.querySelectorAll('selector')  // All matches",
          examples: [
            {
              title: "DOM Selection Methods",
              description: "Different ways to select elements",
              code: `// Get element by ID
let header = document.getElementById('header');

// Get elements by class
let items = document.getElementsByClassName('item');

// Get elements by tag
let paragraphs = document.getElementsByTagName('p');

// Modern: querySelector (first match)
let firstDiv = document.querySelector('div');
let firstClass = document.querySelector('.myClass');
let firstId = document.querySelector('#myId');

// Modern: querySelectorAll (all matches)
let allDivs = document.querySelectorAll('div');
let allClasses = document.querySelectorAll('.myClass');

console.log(allDivs.length);  // Number of divs`,
            },
          ],
          practiceQuestions: [
            {
              question: "Select the first element with class 'item'",
              type: "fill",
              starterCode: `let element = document.___('.item');
console.log(element);`,
              answer: "querySelector",
            },
            {
              question: "Select all elements with class 'button'",
              type: "complete",
              starterCode: `let buttons = document.___('.button');
console.log(buttons.length);`,
              answer: "querySelectorAll",
            },
            {
              question: "What method selects elements by tag name?",
              type: "predict",
              starterCode: `let divs = document.___('div');
console.log(divs);`,
              answer: "getElementsByTagName",
            },
          ],
        },
        {
          id: "js-dom-manipulation",
          title: "DOM Manipulation",
          explanation: "DOM manipulation involves changing, adding, or removing HTML elements and their attributes. You can change element content with innerHTML or textContent, modify attributes with setAttribute() or direct property access, create new elements with createElement(), add elements with appendChild() or insertBefore(), and remove elements with removeChild() or remove(). DOM manipulation is how JavaScript makes web pages dynamic and interactive.",
          syntax: "element.innerHTML = 'html'  // Set HTML\nelement.textContent = 'text'  // Set text\nelement.setAttribute('attr', 'value')  // Set attribute\nelement.appendChild(newElement)  // Add child\nelement.remove()  // Remove element\ndocument.createElement('tag')  // Create element",
          examples: [
            {
              title: "Manipulating DOM Elements",
              description: "Changing and creating elements",
              code: `// Change text content
let heading = document.querySelector('h1');
heading.textContent = "New Heading";

// Change HTML
heading.innerHTML = "<em>Italic Heading</em>";

// Set attribute
heading.setAttribute('class', 'title');

// Create new element
let newDiv = document.createElement('div');
newDiv.textContent = "New Div";
newDiv.className = "container";

// Add to page
document.body.appendChild(newDiv);

// Remove element
let oldElement = document.querySelector('.old');
oldElement.remove();`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a new paragraph element",
              type: "fill",
              starterCode: `let para = document.___('p');
para.textContent = "Hello";
document.body.appendChild(para);`,
              answer: "createElement",
            },
            {
              question: "Add a new element as a child",
              type: "complete",
              starterCode: `let newDiv = document.createElement('div');
let parent = document.getElementById('container');
parent.___(newDiv);`,
              answer: "appendChild",
            },
            {
              question: "What will happen?",
              type: "predict",
              starterCode: `let element = document.querySelector('.item');
element.remove();
console.log(element);`,
              answer: "Element removed from DOM",
            },
          ],
        },
        {
          id: "js-dom-navigation",
          title: "DOM Navigation",
          explanation: "DOM navigation involves moving between related elements in the DOM tree. You can access parent elements with parentElement, child elements with children or childNodes, siblings with nextElementSibling and previousElementSibling, and the first/last child with firstElementChild and lastElementChild. Understanding DOM navigation helps you traverse the document structure to find and manipulate elements relative to other elements.",
          syntax: "element.parentElement  // Parent element\nelement.children  // Child elements\nelement.firstElementChild  // First child\nelement.lastElementChild  // Last child\nelement.nextElementSibling  // Next sibling\nelement.previousElementSibling  // Previous sibling",
          examples: [
            {
              title: "Navigating the DOM",
              description: "Moving between elements",
              code: `let item = document.querySelector('.item');

// Get parent
let parent = item.parentElement;
console.log(parent);

// Get children
let children = parent.children;
console.log(children.length);

// Get first child
let first = parent.firstElementChild;
console.log(first);

// Get last child
let last = parent.lastElementChild;
console.log(last);

// Get next sibling
let next = item.nextElementSibling;
console.log(next);

// Get previous sibling
let previous = item.previousElementSibling;
console.log(previous);`,
            },
          ],
          practiceQuestions: [
            {
              question: "Get the parent element of the current element",
              type: "fill",
              starterCode: `let element = document.querySelector('.item');
let parent = element.___;
console.log(parent);`,
              answer: "parentElement",
            },
            {
              question: "Get the first child element",
              type: "complete",
              starterCode: `let container = document.getElementById('container');
let first = container.___;
console.log(first);`,
              answer: "firstElementChild",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let div = document.querySelector('div');
let next = div.nextElementSibling;
console.log(next ? next.tagName : 'none');`,
              answer: "Next sibling tag name or 'none'",
            },
          ],
        },
        {
          id: "js-dom-styling",
          title: "DOM Styling",
          explanation: "DOM styling allows you to change the appearance of elements using JavaScript. You can modify styles directly through the style property (element.style.property = 'value'), add or remove CSS classes with classList.add(), classList.remove(), and classList.toggle(), or access computed styles with getComputedStyle(). JavaScript styling is essential for creating dynamic visual effects and responsive user interfaces.",
          syntax: "element.style.property = 'value'  // Direct style\nelement.style.color = 'red'\nelement.classList.add('class')  // Add class\nelement.classList.remove('class')  // Remove class\nelement.classList.toggle('class')  // Toggle class\ngetComputedStyle(element)  // Get computed styles",
          examples: [
            {
              title: "Styling Elements",
              description: "Changing element styles",
              code: `let heading = document.querySelector('h1');

// Direct style property
heading.style.color = 'blue';
heading.style.fontSize = '24px';
heading.style.backgroundColor = 'yellow';

// Using classList
heading.classList.add('highlight');
heading.classList.add('large');

// Toggle class
heading.classList.toggle('active');

// Remove class
heading.classList.remove('old-class');

// Get computed style
let computed = getComputedStyle(heading);
console.log(computed.color);
console.log(computed.fontSize);`,
            },
          ],
          practiceQuestions: [
            {
              question: "Change the color of an element to red",
              type: "fill",
              starterCode: `let element = document.querySelector('p');
element.style.___ = 'red';`,
              answer: "color",
            },
            {
              question: "Add a CSS class to an element",
              type: "complete",
              starterCode: `let div = document.querySelector('div');
div.classList.___('active');`,
              answer: "add",
            },
            {
              question: "What will happen?",
              type: "predict",
              starterCode: `let element = document.querySelector('.item');
element.classList.toggle('highlight');
element.classList.toggle('highlight');`,
              answer: "Class added then removed",
            },
          ],
        },
      ],
    },
    {
      id: "events",
      title: "JavaScript Events",
      topics: [
        {
          id: "js-events-intro",
          title: "JS Events Intro",
          explanation: "Events are actions or occurrences that happen in the browser, such as clicks, mouse movements, keyboard presses, page loads, and form submissions. JavaScript can listen for these events and respond to them, making web pages interactive. Common events include click, mouseover, keydown, submit, load, and change. Events are the foundation of interactive web applications, allowing users to interact with web pages and trigger JavaScript code.",
          syntax: "element.onclick = function() { }  // Inline event\naddEventListener('event', handler)  // Modern way\nelement.addEventListener('click', function() { })\nelement.addEventListener('click', handlerFunction)",
          examples: [
            {
              title: "Event Basics",
              description: "Handling events",
              code: `// Button click event
let button = document.querySelector('button');

// Method 1: Inline (not recommended)
button.onclick = function() {
    console.log('Button clicked!');
};

// Method 2: addEventListener (recommended)
button.addEventListener('click', function() {
    console.log('Button clicked with addEventListener!');
});

// Method 3: Named function
function handleClick() {
    console.log('Button clicked with named function!');
}
button.addEventListener('click', handleClick);`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add a click event listener to a button",
              type: "fill",
              starterCode: `let button = document.querySelector('button');
button.___('click', function() {
    console.log('Clicked!');
});`,
              answer: "addEventListener",
            },
            {
              question: "Complete the event listener for a click event",
              type: "complete",
              starterCode: `let div = document.querySelector('div');
div.addEventListener('___', function() {
    console.log('Clicked!');
});`,
              answer: "click",
            },
            {
              question: "What event fires when a button is clicked?",
              type: "predict",
              starterCode: `button.addEventListener('___', handler);`,
              answer: "click",
            },
          ],
        },
        {
          id: "js-event-listeners",
          title: "Event Listeners",
          explanation: "Event listeners are functions that wait for and respond to events. The addEventListener() method is the modern way to attach event handlers to elements. It allows multiple listeners on the same element, can be removed with removeEventListener(), and provides better control than inline event handlers. Event listeners receive an event object containing information about the event, such as the target element, event type, and event properties.",
          syntax: "element.addEventListener('event', handler)\nelement.addEventListener('event', handler, options)\nelement.removeEventListener('event', handler)\nevent.target  // Element that triggered event\nevent.type  // Type of event\nevent.preventDefault()  // Prevent default behavior",
          examples: [
            {
              title: "Event Listeners",
              description: "Using addEventListener",
              code: `let button = document.querySelector('button');

// Add event listener
function handleClick(event) {
    console.log('Button clicked!');
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
}

button.addEventListener('click', handleClick);

// Multiple listeners on same element
button.addEventListener('click', function() {
    console.log('Second listener!');
});

// Remove event listener
button.removeEventListener('click', handleClick);

// Prevent default behavior
let link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Link click prevented');
});`,
            },
          ],
          practiceQuestions: [
            {
              question: "Remove an event listener from an element",
              type: "fill",
              starterCode: `function handler() { }
button.addEventListener('click', handler);
button.___('click', handler);`,
              answer: "removeEventListener",
            },
            {
              question: "Get the element that triggered the event",
              type: "complete",
              starterCode: `button.addEventListener('click', function(event) {
    console.log(event.___);
});`,
              answer: "target",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `button.addEventListener('click', function(event) {
    console.log(event.type);
});`,
              answer: "click",
            },
          ],
        },
        {
          id: "js-event-bubbling",
          title: "Event Bubbling",
          explanation: "Event bubbling is the process where an event starts at the target element and propagates upward through parent elements in the DOM tree. When you click a button inside a div, the click event first fires on the button, then bubbles up to the div, then to the body, and finally to the document. Event bubbling allows parent elements to handle events from their children. You can stop bubbling with event.stopPropagation().",
          syntax: "event.stopPropagation()  // Stop bubbling\nelement.addEventListener('click', handler)  // Bubbles by default\nelement.addEventListener('click', handler, false)  // Bubbles (default)",
          examples: [
            {
              title: "Event Bubbling",
              description: "Understanding event propagation",
              code: `// HTML: <div id="parent"><button id="child">Click</button></div>

let parent = document.getElementById('parent');
let child = document.getElementById('child');

// Parent listener
parent.addEventListener('click', function() {
    console.log('Parent clicked');
});

// Child listener
child.addEventListener('click', function() {
    console.log('Child clicked');
});

// When button is clicked:
// Output: "Child clicked" then "Parent clicked"
// (event bubbles from child to parent)

// Stop bubbling
child.addEventListener('click', function(event) {
    console.log('Child clicked');
    event.stopPropagation();  // Stops at child
    // Parent won't receive the event
});`,
            },
          ],
          practiceQuestions: [
            {
              question: "Stop event from bubbling to parent elements",
              type: "fill",
              starterCode: `button.addEventListener('click', function(event) {
    event.___();
});`,
              answer: "stopPropagation",
            },
            {
              question: "What happens when an event bubbles?",
              type: "complete",
              starterCode: `// Event starts at child and moves to ___ elements`,
              answer: "parent",
            },
            {
              question: "What will be printed when button is clicked?",
              type: "predict",
              starterCode: `div.addEventListener('click', () => console.log('div'));
button.addEventListener('click', () => console.log('button'));
// Click button`,
              answer: "button\ndiv",
            },
          ],
        },
        {
          id: "js-event-capturing",
          title: "Event Capturing",
          explanation: "Event capturing is the opposite of bubbling - events flow from the document root down to the target element. In the capturing phase, the event travels from the outermost element (document) down through parent elements to the target. Capturing happens before bubbling. You enable capturing by setting the third parameter of addEventListener to true. Capturing is useful when you need to handle events before they reach the target element.",
          syntax: "element.addEventListener('click', handler, true)  // Capturing phase\nelement.addEventListener('click', handler, false)  // Bubbling phase (default)",
          examples: [
            {
              title: "Event Capturing",
              description: "Using capturing phase",
              code: `// HTML: <div id="parent"><button id="child">Click</button></div>

let parent = document.getElementById('parent');
let child = document.getElementById('child');

// Capturing phase (true)
parent.addEventListener('click', function() {
    console.log('Parent (capturing)');
}, true);

// Bubbling phase (false, default)
parent.addEventListener('click', function() {
    console.log('Parent (bubbling)');
}, false);

child.addEventListener('click', function() {
    console.log('Child');
});

// When button is clicked:
// Output: "Parent (capturing)" -> "Child" -> "Parent (bubbling)"
// Capturing happens first, then target, then bubbling`,
            },
          ],
          practiceQuestions: [
            {
              question: "Enable event capturing for an event listener",
              type: "fill",
              starterCode: `div.addEventListener('click', handler, ___);`,
              answer: "true",
            },
            {
              question: "What phase happens first: capturing or bubbling?",
              type: "complete",
              starterCode: `// Event flow: capturing -> target -> ___`,
              answer: "bubbling",
            },
            {
              question: "What will be printed when button is clicked?",
              type: "predict",
              starterCode: `div.addEventListener('click', () => console.log('div capture'), true);
button.addEventListener('click', () => console.log('button'));
// Click button`,
              answer: "div capture\nbutton",
            },
          ],
        },
        {
          id: "js-event-delegation",
          title: "Event Delegation",
          explanation: "Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners on child elements. The parent handles events for all its children by checking the event.target. Event delegation is efficient for dynamic content, reduces memory usage, and simplifies event management. It's especially useful when you have many similar elements or when elements are added/removed dynamically.",
          syntax: "parent.addEventListener('click', function(event) {\n  if (event.target.matches('selector')) {\n    // Handle event\n  }\n});",
          examples: [
            {
              title: "Event Delegation",
              description: "Using delegation pattern",
              code: `// Instead of adding listener to each button:
// button1.addEventListener('click', handler);
// button2.addEventListener('click', handler);
// button3.addEventListener('click', handler);

// Use delegation - one listener on parent
let container = document.getElementById('container');

container.addEventListener('click', function(event) {
    // Check if clicked element is a button
    if (event.target.tagName === 'BUTTON') {
        console.log('Button clicked:', event.target.textContent);
    }
    
    // Or use matches() for more specific selectors
    if (event.target.matches('.delete-btn')) {
        console.log('Delete button clicked');
    }
});

// Works for dynamically added buttons too!
let newButton = document.createElement('button');
newButton.textContent = 'New Button';
container.appendChild(newButton);
// No need to add listener - delegation handles it!`,
            },
          ],
          practiceQuestions: [
            {
              question: "Use event delegation to handle clicks on all buttons",
              type: "fill",
              starterCode: `container.addEventListener('click', function(event) {
    if (event.___.tagName === 'BUTTON') {
        console.log('Button clicked');
    }
});`,
              answer: "target",
            },
            {
              question: "Check if clicked element matches a selector",
              type: "complete",
              starterCode: `container.addEventListener('click', function(event) {
    if (event.target.___('.item')) {
        console.log('Item clicked');
    }
});`,
              answer: "matches",
            },
            {
              question: "What is the main advantage of event delegation?",
              type: "predict",
              starterCode: `// Event delegation uses ___ listener(s) instead of many`,
              answer: "one",
            },
          ],
        },
      ],
    },
    {
      id: "advanced",
      title: "JavaScript Advanced",
      topics: [
        {
          id: "js-classes",
          title: "JS Classes",
          explanation: "Classes are templates for creating objects in JavaScript. Introduced in ES6, classes provide a cleaner syntax for object-oriented programming. Classes can have constructors, methods, static methods, and inheritance. Classes are syntactic sugar over JavaScript's prototype-based inheritance, making object-oriented code more readable and familiar to developers from other languages.",
          syntax: "class ClassName {\n  constructor(params) { }\n  method() { }\n  static staticMethod() { }\n}\nclass Child extends Parent { }",
          examples: [
            {
              title: "Class Definition",
              description: "Creating and using classes",
              code: `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }
    
    static createAdult(name) {
        return new Person(name, 18);
    }
}

let person = new Person("Alice", 25);
console.log(person.greet());  // "Hello, I'm Alice"

// Inheritance
class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
}

let student = new Student("Bob", 20, "University");
console.log(student.greet());`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a class with a constructor",
              type: "fill",
              starterCode: `___ Car {
    ___(brand) {
        this.brand = brand;
    }
}`,
              answer: "class\nconstructor",
            },
            {
              question: "Create a method in the class",
              type: "complete",
              starterCode: `class Car {
    start() {
        console.log('Car started');
    }
}

let car = new Car();
car.___();`,
              answer: "start",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `class Animal {
    constructor(name) {
        this.name = name;
    }
}

let dog = new Animal("Rex");
console.log(dog.name);`,
              answer: "Rex",
            },
          ],
        },
        {
          id: "js-objects-advanced",
          title: "JS Objects (Advanced)",
          explanation: "Advanced object features include object methods, getters/setters, computed properties, property descriptors, and object methods like Object.keys(), Object.values(), Object.entries(), Object.assign(), and Object.create(). These features provide powerful ways to work with objects, control property behavior, and manipulate object structures dynamically.",
          syntax: "Object.keys(obj)  // Get keys\nObject.values(obj)  // Get values\nObject.entries(obj)  // Get key-value pairs\nObject.assign(target, source)  // Copy properties\nObject.create(proto)  // Create with prototype\n{ [key]: value }  // Computed property\nget property() { }  // Getter\nset property(value) { }  // Setter",
          examples: [
            {
              title: "Advanced Object Operations",
              description: "Using object methods and features",
              code: `let person = { name: "Alice", age: 25, city: "NYC" };

// Get keys
console.log(Object.keys(person));  // ["name", "age", "city"]

// Get values
console.log(Object.values(person));  // ["Alice", 25, "NYC"]

// Get entries
console.log(Object.entries(person));  // [["name", "Alice"], ...]

// Copy object
let copy = Object.assign({}, person);
console.log(copy);

// Computed property
let key = "name";
let obj = { [key]: "Bob" };
console.log(obj.name);  // "Bob"

// Getter and Setter
let user = {
    _age: 25,
    get age() {
        return this._age;
    },
    set age(value) {
        this._age = value;
    }
};
user.age = 30;
console.log(user.age);  // 30`,
            },
          ],
          practiceQuestions: [
            {
              question: "Get all keys from an object",
              type: "fill",
              starterCode: `let obj = { x: 1, y: 2 };
console.log(Object.___(obj));`,
              answer: "keys",
            },
            {
              question: "Copy properties from one object to another",
              type: "complete",
              starterCode: `let target = {};
let source = { x: 1 };
Object.___(target, source);
console.log(target.x);`,
              answer: "assign",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let obj = { a: 1, b: 2 };
console.log(Object.values(obj));`,
              answer: "[1, 2]",
            },
          ],
        },
        {
          id: "js-asynchronous",
          title: "Asynchronous JavaScript",
          explanation: "Asynchronous JavaScript allows code to run without blocking the main thread. JavaScript is single-threaded, but asynchronous operations (like fetching data, timers, file I/O) allow other code to run while waiting. Callbacks were the original way to handle async code, but Promises and async/await provide better solutions. Understanding asynchronous programming is crucial for building responsive web applications.",
          syntax: "setTimeout(callback, delay)  // Timer\nsetInterval(callback, delay)  // Repeated timer\nfetch(url).then()  // Async request\nasync function() { await }  // Async/await",
          examples: [
            {
              title: "Asynchronous Operations",
              description: "Using timers and async code",
              code: `// setTimeout - runs once after delay
setTimeout(function() {
    console.log('This runs after 1 second');
}, 1000);

// setInterval - runs repeatedly
let count = 0;
let interval = setInterval(function() {
    count++;
    console.log(count);
    if (count >= 5) {
        clearInterval(interval);
    }
}, 1000);

// Asynchronous with callback
function fetchData(callback) {
    setTimeout(function() {
        callback('Data received');
    }, 2000);
}

fetchData(function(data) {
    console.log(data);  // "Data received" after 2 seconds
});`,
            },
          ],
          practiceQuestions: [
            {
              question: "Run code after 2 seconds",
              type: "fill",
              starterCode: `setTimeout(function() {
    console.log('Delayed');
}, ___);`,
              answer: "2000",
            },
            {
              question: "Stop an interval timer",
              type: "complete",
              starterCode: `let timer = setInterval(() => {}, 1000);
clear___(timer);`,
              answer: "Interval",
            },
            {
              question: "What will be printed first?",
              type: "predict",
              starterCode: `console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');`,
              answer: "First\nThird\nSecond",
            },
          ],
        },
        {
          id: "js-promises",
          title: "Promises",
          explanation: "Promises represent the eventual completion (or failure) of an asynchronous operation. A Promise is in one of three states: pending, fulfilled, or rejected. Promises provide a cleaner way to handle asynchronous code than callbacks, avoiding callback hell. You create promises with new Promise(), handle success with .then(), handle errors with .catch(), and run code after completion with .finally().",
          syntax: "new Promise((resolve, reject) => { })\npromise.then(onFulfilled)\npromise.catch(onRejected)\npromise.finally(onFinally)\nPromise.all([promises])  // Wait for all\nPromise.race([promises])  // First to complete",
          examples: [
            {
              title: "Using Promises",
              description: "Creating and handling promises",
              code: `// Create a promise
let promise = new Promise(function(resolve, reject) {
    let success = true;
    
    if (success) {
        resolve('Operation successful');
    } else {
        reject('Operation failed');
    }
});

// Handle promise
promise
    .then(function(result) {
        console.log(result);  // "Operation successful"
    })
    .catch(function(error) {
        console.error(error);
    })
    .finally(function() {
        console.log('Promise completed');
    });

// Promise.all - wait for all
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
Promise.all([p1, p2]).then(function(values) {
    console.log(values);  // [1, 2]
});`,
            },
          ],
          practiceQuestions: [
            {
              question: "Handle a successful promise",
              type: "fill",
              starterCode: `promise.___(function(result) {
    console.log(result);
});`,
              answer: "then",
            },
            {
              question: "Handle a rejected promise",
              type: "complete",
              starterCode: `promise
    .then(result => console.log(result))
    .___(error => console.error(error));`,
              answer: "catch",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `Promise.resolve('Success')
    .then(result => console.log(result));`,
              answer: "Success",
            },
          ],
        },
        {
          id: "js-async-await",
          title: "Async / Await",
          explanation: "Async/await is modern syntax for working with Promises. The async keyword makes a function return a Promise, and await pauses execution until the Promise resolves. Async/await makes asynchronous code look and behave like synchronous code, making it easier to read and write. It's syntactic sugar over Promises that eliminates the need for .then() chains.",
          syntax: "async function name() { await promise }\nconst func = async () => { await promise }\nawait promise  // Wait for promise\ntry { await } catch { }  // Error handling",
          examples: [
            {
              title: "Async/Await",
              description: "Using async/await syntax",
              code: `// Async function
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call async function
fetchData().then(function(data) {
    console.log(data);
});

// Multiple awaits
async function processData() {
    let data1 = await fetchData1();
    let data2 = await fetchData2();
    return { data1, data2 };
}

// Arrow function
const getData = async () => {
    let result = await somePromise();
    return result;
};`,
            },
          ],
          practiceQuestions: [
            {
              question: "Make a function async",
              type: "fill",
              starterCode: `___ function getData() {
    return await fetch('url');
}`,
              answer: "async",
            },
            {
              question: "Wait for a promise to resolve",
              type: "complete",
              starterCode: `async function fetchData() {
    let result = ___ fetch('url');
    return result;
}`,
              answer: "await",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `async function test() {
    return 'Hello';
}

test().then(console.log);`,
              answer: "Hello",
            },
          ],
        },
        {
          id: "js-modules",
          title: "JS Modules",
          explanation: "Modules allow you to split JavaScript code into separate files that can be imported and exported. ES6 modules use export to share code and import to use code from other modules. Modules help organize code, avoid naming conflicts, and enable code reuse. Each module has its own scope, and you explicitly export what you want to share and import what you need.",
          syntax: "export const name = value;\nexport function func() { }\nexport default value;\nimport { name } from './module';\nimport defaultName from './module';\nimport * as alias from './module';",
          examples: [
            {
              title: "ES6 Modules",
              description: "Exporting and importing modules",
              code: `// math.js - export module
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export default function multiply(a, b) {
    return a * b;
}

// main.js - import module
import multiply, { PI, add } from './math.js';

console.log(PI);  // 3.14159
console.log(add(2, 3));  // 5
console.log(multiply(4, 5));  // 20

// Import all
import * as math from './math.js';
console.log(math.PI);
console.log(math.add(1, 2));`,
            },
          ],
          practiceQuestions: [
            {
              question: "Export a constant from a module",
              type: "fill",
              starterCode: `___ const MAX = 100;`,
              answer: "export",
            },
            {
              question: "Import a named export",
              type: "complete",
              starterCode: `___ { add } from './math.js';`,
              answer: "import",
            },
            {
              question: "What keyword exports a default value?",
              type: "predict",
              starterCode: `___ default function() { }`,
              answer: "export",
            },
          ],
        },
        {
          id: "js-meta-proxy",
          title: "Meta & Proxy",
          explanation: "Proxy and Reflect are advanced JavaScript features for meta-programming. A Proxy wraps an object and intercepts operations like property access, assignment, and function calls. Reflect provides methods that mirror Proxy traps. These features enable powerful patterns like validation, logging, virtual properties, and reactive programming. They're advanced tools for creating flexible and dynamic object behavior.",
          syntax: "new Proxy(target, handler)\nlet proxy = new Proxy(obj, {\n  get(target, prop) { },\n  set(target, prop, value) { }\n});\nReflect.get(target, prop)\nReflect.set(target, prop, value)",
          examples: [
            {
              title: "Proxy and Reflect",
              description: "Using Proxy for interception",
              code: `// Create proxy
let target = { name: "Alice", age: 25 };

let proxy = new Proxy(target, {
    get(target, prop) {
        console.log(\`Getting \${prop}\`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(\`Setting \${prop} to \${value}\`);
        target[prop] = value;
        return true;
    }
});

console.log(proxy.name);  // Logs "Getting name", then "Alice"
proxy.age = 30;  // Logs "Setting age to 30"

// Using Reflect
let obj = { x: 10 };
console.log(Reflect.get(obj, 'x'));  // 10
Reflect.set(obj, 'y', 20);
console.log(obj.y);  // 20`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a Proxy object",
              type: "fill",
              starterCode: `let target = {};
let proxy = new ___(target, { });`,
              answer: "Proxy",
            },
            {
              question: "Intercept property access with Proxy",
              type: "complete",
              starterCode: `let proxy = new Proxy({}, {
    ___(target, prop) {
        return target[prop];
    }
});`,
              answer: "get",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let obj = { x: 10 };
console.log(Reflect.get(obj, 'x'));`,
              answer: "10",
            },
          ],
        },
        {
          id: "js-typed-arrays",
          title: "Typed Arrays",
          explanation: "Typed Arrays are array-like objects that provide a mechanism for accessing raw binary data. Unlike regular arrays, typed arrays have fixed element types and sizes. Common typed arrays include Int8Array, Uint8Array, Int16Array, Float32Array, and Float64Array. Typed arrays are useful for working with binary data, WebGL, audio processing, and performance-critical applications where you need precise control over memory layout.",
          syntax: "new Int8Array(length)\nnew Uint8Array(length)\nnew Float32Array(length)\nnew ArrayBuffer(size)\nnew DataView(buffer)",
          examples: [
            {
              title: "Typed Arrays",
              description: "Creating and using typed arrays",
              code: `// Create typed arrays
let int8 = new Int8Array(4);  // 4 bytes, signed integers
int8[0] = 10;
int8[1] = 20;
console.log(int8);  // Int8Array [10, 20, 0, 0]

let float32 = new Float32Array([1.5, 2.5, 3.5]);
console.log(float32);  // Float32Array [1.5, 2.5, 3.5]

// ArrayBuffer
let buffer = new ArrayBuffer(16);  // 16 bytes
let view = new Int32Array(buffer);  // View as 32-bit integers
view[0] = 42;
console.log(view[0]);  // 42

// DataView for flexible access
let dataView = new DataView(buffer);
dataView.setInt8(0, 100);
console.log(dataView.getInt8(0));  // 100`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create a typed array for 8-bit unsigned integers",
              type: "fill",
              starterCode: `let arr = new ___(10);`,
              answer: "Uint8Array",
            },
            {
              question: "Create a typed array for 32-bit floating point numbers",
              type: "complete",
              starterCode: `let arr = new ___(5);`,
              answer: "Float32Array",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let arr = new Int8Array([10, 20, 30]);
console.log(arr.length);`,
              answer: "3",
            },
          ],
        },
        {
          id: "js-window-object",
          title: "Window Object",
          explanation: "The window object represents the browser window and is the global object in browser JavaScript. It contains properties and methods for controlling the browser window, including location, history, localStorage, sessionStorage, and various APIs. The window object is the top-level object in the browser environment, and global variables become properties of the window object.",
          syntax: "window.property\nwindow.method()\nwindow.location  // Current URL\nwindow.history  // Browser history\nwindow.localStorage  // Local storage\nwindow.sessionStorage  // Session storage\nwindow.alert()  // Alert dialog\nwindow.confirm()  // Confirm dialog",
          examples: [
            {
              title: "Window Object",
              description: "Using window object properties and methods",
              code: `// Window properties
console.log(window.innerWidth);  // Window width
console.log(window.innerHeight);  // Window height

// Location
console.log(window.location.href);  // Current URL
window.location.reload();  // Reload page

// Storage
window.localStorage.setItem('key', 'value');
let value = window.localStorage.getItem('key');
console.log(value);  // "value"

// Dialogs
window.alert('Hello!');
let confirmed = window.confirm('Continue?');
console.log(confirmed);  // true or false

// Global variables are window properties
var globalVar = 'test';
console.log(window.globalVar);  // "test"`,
            },
          ],
          practiceQuestions: [
            {
              question: "Get the current page URL",
              type: "fill",
              starterCode: `let url = window.___.href;
console.log(url);`,
              answer: "location",
            },
            {
              question: "Store data in localStorage",
              type: "complete",
              starterCode: `window.localStorage.___('name', 'Alice');`,
              answer: "setItem",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `var x = 10;
console.log(window.x);`,
              answer: "10",
            },
          ],
        },
        {
          id: "js-web-apis",
          title: "Web APIs",
          explanation: "Web APIs are browser-provided interfaces that extend JavaScript capabilities beyond the core language. Common Web APIs include Fetch API for HTTP requests, Geolocation API for location data, Canvas API for graphics, Web Storage API for data persistence, Web Audio API for audio, and many more. Web APIs enable JavaScript to interact with browser features and external services, making web applications powerful and feature-rich.",
          syntax: "fetch(url)  // Fetch API\nnavigator.geolocation  // Geolocation API\ncanvas.getContext('2d')  // Canvas API\nlocalStorage  // Storage API\nnavigator.mediaDevices  // Media API",
          examples: [
            {
              title: "Web APIs",
              description: "Using various Web APIs",
              code: `// Fetch API - HTTP requests
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));

// Geolocation API
navigator.geolocation.getCurrentPosition(function(position) {
    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);
});

// Canvas API
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);

// Storage API
localStorage.setItem('user', 'Alice');
let user = localStorage.getItem('user');
console.log(user);  // "Alice"`,
            },
          ],
          practiceQuestions: [
            {
              question: "Make an HTTP request using Fetch API",
              type: "fill",
              starterCode: `___(url)
    .then(response => response.json())
    .then(data => console.log(data));`,
              answer: "fetch",
            },
            {
              question: "Get the 2D drawing context from canvas",
              type: "complete",
              starterCode: `let canvas = document.getElementById('canvas');
let ctx = canvas.___('2d');`,
              answer: "getContext",
            },
            {
              question: "What API is used for location data?",
              type: "predict",
              starterCode: `navigator.___.getCurrentPosition(callback);`,
              answer: "geolocation",
            },
          ],
        },
        {
          id: "js-ajax",
          title: "AJAX",
          explanation: "AJAX (Asynchronous JavaScript and XML) allows web pages to update asynchronously by exchanging data with a server without reloading the page. While originally using XMLHttpRequest, modern AJAX typically uses the Fetch API. AJAX enables dynamic, interactive web applications that can update content in real-time. It's the foundation of single-page applications and modern web development.",
          syntax: "fetch(url, options)\nfetch(url).then(response => response.json())\nnew XMLHttpRequest()  // Legacy method\nxhr.open('GET', url)\nxhr.send()",
          examples: [
            {
              title: "AJAX Requests",
              description: "Making asynchronous requests",
              code: `// Modern: Fetch API
fetch('https://api.example.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network error');
        }
        return response.json();
    })
    .then(data => {
        console.log('Users:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// POST request
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Alice', age: 25 })
})
    .then(response => response.json())
    .then(data => console.log('Created:', data));`,
            },
          ],
          practiceQuestions: [
            {
              question: "Make a GET request with Fetch API",
              type: "fill",
              starterCode: `___(url)
    .then(response => response.json())
    .then(data => console.log(data));`,
              answer: "fetch",
            },
            {
              question: "Make a POST request with JSON data",
              type: "complete",
              starterCode: `fetch(url, {
    method: '___',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Alice' })
});`,
              answer: "POST",
            },
            {
              question: "What does AJAX stand for?",
              type: "predict",
              starterCode: `// AJAX = Asynchronous JavaScript and ___`,
              answer: "XML",
            },
          ],
        },
        {
          id: "js-json",
          title: "JSON",
          explanation: "JSON (JavaScript Object Notation) is a lightweight data format for exchanging data. JSON is text-based, human-readable, and language-independent. JavaScript provides JSON.parse() to convert JSON strings to JavaScript objects and JSON.stringify() to convert JavaScript objects to JSON strings. JSON is the standard format for API communication and data storage in web applications.",
          syntax: "JSON.parse(jsonString)  // Parse JSON to object\nJSON.stringify(object)  // Convert object to JSON\nJSON.stringify(object, replacer, space)  // Formatted",
          examples: [
            {
              title: "Working with JSON",
              description: "Parsing and stringifying JSON",
              code: `// JSON string
let jsonString = '{"name": "Alice", "age": 25, "city": "NYC"}';

// Parse JSON to object
let obj = JSON.parse(jsonString);
console.log(obj.name);  // "Alice"
console.log(obj.age);   // 25

// Convert object to JSON
let person = { name: "Bob", age: 30, city: "LA" };
let json = JSON.stringify(person);
console.log(json);  // '{"name":"Bob","age":30,"city":"LA"}'

// Formatted JSON
let formatted = JSON.stringify(person, null, 2);
console.log(formatted);  // Pretty-printed JSON

// Parse array
let jsonArray = '[1, 2, 3, 4]';
let arr = JSON.parse(jsonArray);
console.log(arr);  // [1, 2, 3, 4]`,
            },
          ],
          practiceQuestions: [
            {
              question: "Parse a JSON string to an object",
              type: "fill",
              starterCode: `let json = '{"name": "Alice"}';
let obj = JSON.___(json);
console.log(obj.name);`,
              answer: "parse",
            },
            {
              question: "Convert an object to JSON string",
              type: "complete",
              starterCode: `let obj = { x: 1, y: 2 };
let json = JSON.___(obj);
console.log(json);`,
              answer: "stringify",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let json = '{"value": 42}';
let obj = JSON.parse(json);
console.log(obj.value);`,
              answer: "42",
            },
          ],
        },
        {
          id: "js-jquery",
          title: "jQuery",
          explanation: "jQuery is a popular JavaScript library that simplifies DOM manipulation, event handling, and AJAX requests. While modern JavaScript has made jQuery less necessary, it's still widely used. jQuery provides a simple API with $() selector, chaining methods, and cross-browser compatibility. jQuery makes it easy to select elements, manipulate the DOM, handle events, and make AJAX calls with less code than vanilla JavaScript.",
          syntax: "$(selector)  // jQuery selector\n$(selector).method()  // jQuery method\n$(document).ready(function() { })  // DOM ready\n$.ajax({ })  // AJAX request",
          examples: [
            {
              title: "jQuery Basics",
              description: "Using jQuery library",
              code: `// Wait for DOM ready
$(document).ready(function() {
    // Select element
    let heading = $('h1');
    
    // Change text
    heading.text('New Heading');
    
    // Add class
    heading.addClass('highlight');
    
    // Event handler
    $('button').click(function() {
        console.log('Button clicked!');
    });
    
    // AJAX request
    $.ajax({
        url: 'https://api.example.com/data',
        method: 'GET',
        success: function(data) {
            console.log('Data:', data);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
    
    // Chaining
    $('div')
        .addClass('container')
        .css('color', 'blue')
        .fadeIn();
});`,
            },
          ],
          practiceQuestions: [
            {
              question: "Select an element using jQuery",
              type: "fill",
              starterCode: `let element = ___(selector);
console.log(element);`,
              answer: "$",
            },
            {
              question: "Wait for DOM to be ready with jQuery",
              type: "complete",
              starterCode: `___(document).ready(function() {
    // Code here
});`,
              answer: "$",
            },
            {
              question: "What symbol is used for jQuery?",
              type: "predict",
              starterCode: `// jQuery uses ___ symbol`,
              answer: "$",
            },
          ],
        },
        {
          id: "js-graphics",
          title: "Graphics (Canvas / SVG)",
          explanation: "JavaScript can create graphics using Canvas API for pixel-based drawing and SVG (Scalable Vector Graphics) for vector-based graphics. Canvas is a drawing surface where you can draw shapes, images, and animations pixel by pixel. SVG uses XML to define vector graphics that scale without losing quality. Both are powerful for creating visualizations, games, animations, and interactive graphics in web applications.",
          syntax: "canvas.getContext('2d')  // 2D context\nctx.fillRect(x, y, width, height)  // Draw rectangle\nctx.arc(x, y, radius, start, end)  // Draw circle\nctx.stroke()  // Draw stroke\nctx.fill()  // Fill shape\n<svg>...</svg>  // SVG element",
          examples: [
            {
              title: "Canvas and SVG Graphics",
              description: "Creating graphics with Canvas and SVG",
              code: `// Canvas - pixel-based
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);

// Draw circle
ctx.beginPath();
ctx.arc(150, 150, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

// Draw line
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.strokeStyle = 'green';
ctx.stroke();

// SVG - vector-based
let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '200');
svg.setAttribute('height', '200');

let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', '100');
circle.setAttribute('cy', '100');
circle.setAttribute('r', '50');
circle.setAttribute('fill', 'blue');
svg.appendChild(circle);`,
            },
          ],
          practiceQuestions: [
            {
              question: "Get the 2D drawing context from canvas",
              type: "fill",
              starterCode: `let canvas = document.getElementById('canvas');
let ctx = canvas.___('2d');`,
              answer: "getContext",
            },
            {
              question: "Draw a filled rectangle",
              type: "complete",
              starterCode: `ctx.fillStyle = 'blue';
ctx.___(10, 10, 100, 100);`,
              answer: "fillRect",
            },
            {
              question: "What API is used for pixel-based graphics?",
              type: "predict",
              starterCode: `// ___ API for pixel graphics`,
              answer: "Canvas",
            },
          ],
        },
      ],
    },
    {
      id: "projects",
      title: "JavaScript Projects",
      topics: [
        {
          id: "js-beginner-projects",
          title: "Beginner Projects",
          explanation: "Beginner JavaScript projects help you practice fundamental concepts and build confidence. These projects include simple interactive web pages, basic calculators, to-do lists, random quote generators, and simple games. Beginner projects focus on DOM manipulation, event handling, basic functions, and simple logic. These projects are perfect for reinforcing core JavaScript skills while creating something useful and fun.",
          syntax: "// Beginner project structure\n// HTML structure\n// CSS styling\n// JavaScript functionality\n// Event listeners\n// DOM manipulation",
          examples: [
            {
              title: "Sample Beginner Projects",
              description: "Examples of beginner-level projects",
              code: `// Project 1: Simple Calculator
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Project 2: To-Do List
let todos = [];
function addTodo(task) {
    todos.push(task);
}

// Project 3: Random Quote Generator
let quotes = ["Quote 1", "Quote 2", "Quote 3"];
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Project 4: Interactive Counter
let count = 0;
function increment() {
    count++;
    document.getElementById('counter').textContent = count;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is a good beginner project to practice DOM manipulation?",
              type: "fill",
              starterCode: `// A simple ___ list is a great beginner project`,
              answer: "to-do",
            },
            {
              question: "What skills do beginner projects typically focus on?",
              type: "complete",
              starterCode: `// Beginner projects focus on: DOM manipulation, event handling, and basic ___`,
              answer: "functions",
            },
            {
              question: "What will this beginner project do?",
              type: "predict",
              starterCode: `let count = 0;
function increment() {
    count++;
    document.getElementById('count').textContent = count;
}`,
              answer: "Increment and display counter",
            },
          ],
        },
        {
          id: "js-intermediate-projects",
          title: "Intermediate Projects",
          explanation: "Intermediate JavaScript projects challenge you with more complex functionality and real-world scenarios. These projects include weather apps with API integration, expense trackers, quiz applications, image galleries with lightboxes, form validators, and interactive dashboards. Intermediate projects require understanding of APIs, async programming, data manipulation, error handling, and more advanced DOM techniques. These projects help bridge the gap between beginner and advanced JavaScript.",
          syntax: "// Intermediate project structure\n// API integration\n// Async/await or Promises\n// Data processing\n// Error handling\n// Complex DOM manipulation\n// State management",
          examples: [
            {
              title: "Sample Intermediate Projects",
              description: "Examples of intermediate-level projects",
              code: `// Project 1: Weather App with API
async function getWeather(city) {
    try {
        const response = await fetch(\`https://api.weather.com/\${city}\`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

// Project 2: Expense Tracker
let expenses = [];
function addExpense(description, amount) {
    expenses.push({ description, amount, date: new Date() });
    updateTotal();
}

function updateTotal() {
    let total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    document.getElementById('total').textContent = total;
}

// Project 3: Quiz Application
let questions = [
    { question: "What is JavaScript?", answers: ["Language", "Framework"], correct: 0 }
];
let currentQuestion = 0;
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is commonly used in intermediate projects for data fetching?",
              type: "fill",
              starterCode: `// Intermediate projects often use ___ to fetch data from servers`,
              answer: "APIs",
            },
            {
              question: "What async pattern is commonly used in intermediate projects?",
              type: "complete",
              starterCode: `// Use ___/await for asynchronous operations`,
              answer: "async",
            },
            {
              question: "What will this intermediate project do?",
              type: "predict",
              starterCode: `async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}`,
              answer: "Fetch and parse JSON data",
            },
          ],
        },
        {
          id: "js-advanced-projects",
          title: "Advanced Projects",
          explanation: "Advanced JavaScript projects demonstrate mastery of complex concepts and modern development practices. These projects include single-page applications (SPAs), real-time chat applications, data visualization dashboards, game engines, e-commerce platforms, and full-stack applications. Advanced projects require knowledge of frameworks, state management, build tools, testing, performance optimization, and architecture patterns. These projects showcase professional-level JavaScript development skills.",
          syntax: "// Advanced project structure\n// Framework/library (React, Vue, Angular)\n// State management\n// Routing\n// API integration\n// Build tools (Webpack, Vite)\n// Testing\n// Performance optimization",
          examples: [
            {
              title: "Sample Advanced Projects",
              description: "Examples of advanced-level projects",
              code: `// Project 1: SPA with Routing
class Router {
    constructor() {
        this.routes = {};
    }
    
    addRoute(path, component) {
        this.routes[path] = component;
    }
    
    navigate(path) {
        const component = this.routes[path];
        if (component) {
            component.render();
        }
    }
}

// Project 2: State Management
class StateManager {
    constructor() {
        this.state = {};
        this.listeners = [];
    }
    
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notify();
    }
    
    subscribe(listener) {
        this.listeners.push(listener);
    }
    
    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }
}

// Project 3: Real-time Features
const socket = new WebSocket('ws://example.com');
socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    updateUI(data);
};`,
            },
          ],
          practiceQuestions: [
            {
              question: "What type of application is a common advanced project?",
              type: "fill",
              starterCode: `// A ___ Page Application (SPA) is an advanced project`,
              answer: "Single",
            },
            {
              question: "What is needed for managing complex application state?",
              type: "complete",
              starterCode: `// Advanced projects use state ___ patterns`,
              answer: "management",
            },
            {
              question: "What will this advanced project feature?",
              type: "predict",
              starterCode: `const socket = new WebSocket('ws://example.com');
socket.onmessage = function(event) {
    updateUI(JSON.parse(event.data));
};`,
              answer: "Real-time updates via WebSocket",
            },
          ],
        },
      ],
    },
    {
      id: "reference",
      title: "JavaScript Reference",
      topics: [
        {
          id: "js-built-in-objects",
          title: "Built-in Objects",
          explanation: "JavaScript provides many built-in objects that are available globally. These include Object, Array, String, Number, Boolean, Date, Math, JSON, RegExp, Error, and more. Built-in objects provide constructors, static methods, and prototypes that extend JavaScript's capabilities. Understanding built-in objects and their methods is essential for effective JavaScript programming.",
          syntax: "Object.keys(obj)\nArray.isArray(arr)\nString.fromCharCode(code)\nNumber.parseInt(str)\nBoolean(value)\nDate.now()\nMath.PI\nJSON.parse(str)\nnew RegExp(pattern)\nnew Error(message)",
          examples: [
            {
              title: "Built-in Objects",
              description: "Common built-in objects and their usage",
              code: `// Object methods
let obj = { x: 1, y: 2 };
console.log(Object.keys(obj));  // ["x", "y"]
console.log(Object.values(obj));  // [1, 2]

// Array methods
console.log(Array.isArray([1, 2]));  // true
console.log(Array.from("hello"));  // ["h", "e", "l", "l", "o"]

// String methods
console.log(String.fromCharCode(65));  // "A"

// Number methods
console.log(Number.parseInt("42"));  // 42
console.log(Number.isNaN(NaN));  // true

// Boolean
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false

// Date
console.log(Date.now());  // Current timestamp

// Math
console.log(Math.PI);  // 3.14159...

// JSON
let json = JSON.stringify({ name: "Alice" });
console.log(json);  // '{"name":"Alice"}'`,
            },
          ],
          practiceQuestions: [
            {
              question: "Check if a value is an array",
              type: "fill",
              starterCode: `let arr = [1, 2, 3];
console.log(Array.___(arr));`,
              answer: "isArray",
            },
            {
              question: "Convert a string to a number",
              type: "complete",
              starterCode: `let num = Number.___("42");
console.log(num);`,
              answer: "parseInt",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `console.log(Object.keys({ a: 1, b: 2 }));`,
              answer: "['a', 'b']",
            },
          ],
        },
        {
          id: "js-array-methods",
          title: "Array Methods",
          explanation: "Arrays have many built-in methods for manipulation and iteration. Common methods include push(), pop(), shift(), unshift() for adding/removing, slice(), splice() for extracting/modifying, indexOf(), includes() for searching, map(), filter(), reduce() for transformation, forEach() for iteration, and sort(), reverse() for ordering. Understanding array methods is crucial for working with collections of data.",
          syntax: "arr.push(item)  // Add to end\narr.pop()  // Remove from end\narr.shift()  // Remove from start\narr.unshift(item)  // Add to start\narr.slice(start, end)  // Extract\narr.splice(index, count, items)  // Modify\narr.indexOf(item)  // Find index\narr.includes(item)  // Check existence\narr.map(fn)  // Transform\narr.filter(fn)  // Filter\narr.reduce(fn, initial)  // Reduce\narr.forEach(fn)  // Iterate\narr.sort(fn)  // Sort\narr.reverse()  // Reverse",
          examples: [
            {
              title: "Array Methods",
              description: "Common array methods",
              code: `let arr = [1, 2, 3];

// Add/Remove
arr.push(4);  // [1, 2, 3, 4]
arr.pop();  // [1, 2, 3]
arr.unshift(0);  // [0, 1, 2, 3]
arr.shift();  // [1, 2, 3]

// Extract/Modify
let sliced = arr.slice(1, 3);  // [2, 3]
arr.splice(1, 1, 10);  // [1, 10, 3]

// Search
console.log(arr.indexOf(10));  // 1
console.log(arr.includes(3));  // true

// Transform
let doubled = arr.map(x => x * 2);  // [2, 20, 6]
let evens = arr.filter(x => x % 2 === 0);  // [10]
let sum = arr.reduce((acc, x) => acc + x, 0);  // 14

// Iterate
arr.forEach(x => console.log(x));

// Sort
arr.sort((a, b) => a - b);  // Sort numbers`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add an item to the end of an array",
              type: "fill",
              starterCode: `let arr = [1, 2];
arr.___(3);
console.log(arr);`,
              answer: "push",
            },
            {
              question: "Transform array elements using map",
              type: "complete",
              starterCode: `let arr = [1, 2, 3];
let doubled = arr.___(x => x * 2);
console.log(doubled);`,
              answer: "map",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let arr = [1, 2, 3, 4];
let filtered = arr.filter(x => x > 2);
console.log(filtered);`,
              answer: "[3, 4]",
            },
          ],
        },
        {
          id: "js-string-methods",
          title: "String Methods",
          explanation: "Strings have many methods for manipulation and searching. Common methods include length property, charAt(), substring(), slice() for extraction, toUpperCase(), toLowerCase() for case conversion, indexOf(), includes(), startsWith(), endsWith() for searching, replace(), split() for transformation, trim() for whitespace removal, and concat() for joining. String methods are essential for text processing and manipulation.",
          syntax: "str.length  // Length\nstr.charAt(index)  // Get character\nstr.substring(start, end)  // Extract\nstr.slice(start, end)  // Extract\nstr.toUpperCase()  // Uppercase\nstr.toLowerCase()  // Lowercase\nstr.indexOf(substr)  // Find index\nstr.includes(substr)  // Check existence\nstr.startsWith(substr)  // Check start\nstr.endsWith(substr)  // Check end\nstr.replace(old, new)  // Replace\nstr.split(separator)  // Split\nstr.trim()  // Remove whitespace\nstr.concat(str2)  // Join",
          examples: [
            {
              title: "String Methods",
              description: "Common string methods",
              code: `let str = "Hello World";

// Length
console.log(str.length);  // 11

// Character access
console.log(str.charAt(0));  // "H"
console.log(str[0]);  // "H"

// Extraction
console.log(str.substring(0, 5));  // "Hello"
console.log(str.slice(0, 5));  // "Hello"
console.log(str.slice(-5));  // "World"

// Case conversion
console.log(str.toUpperCase());  // "HELLO WORLD"
console.log(str.toLowerCase());  // "hello world"

// Searching
console.log(str.indexOf("World"));  // 6
console.log(str.includes("Hello"));  // true
console.log(str.startsWith("Hello"));  // true
console.log(str.endsWith("World"));  // true

// Transformation
console.log(str.replace("World", "JavaScript"));  // "Hello JavaScript"
console.log(str.split(" "));  // ["Hello", "World"]
console.log("  hello  ".trim());  // "hello"
console.log(str.concat("!"));  // "Hello World!"`,
            },
          ],
          practiceQuestions: [
            {
              question: "Convert a string to uppercase",
              type: "fill",
              starterCode: `let str = "hello";
console.log(str.___());`,
              answer: "toUpperCase",
            },
            {
              question: "Check if string includes a substring",
              type: "complete",
              starterCode: `let str = "JavaScript";
console.log(str.___("Script"));`,
              answer: "includes",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let str = "Hello World";
console.log(str.substring(0, 5));`,
              answer: "Hello",
            },
          ],
        },
        {
          id: "js-math-methods",
          title: "Math Methods",
          explanation: "The Math object provides mathematical constants and functions. Common methods include Math.round(), Math.floor(), Math.ceil() for rounding, Math.max(), Math.min() for extremes, Math.abs() for absolute value, Math.sqrt() for square root, Math.pow() for exponentiation, Math.random() for random numbers, and constants like Math.PI and Math.E. Math methods are essential for calculations and mathematical operations.",
          syntax: "Math.round(num)  // Round to nearest\nMath.floor(num)  // Round down\nMath.ceil(num)  // Round up\nMath.max(a, b, c)  // Maximum\nMath.min(a, b, c)  // Minimum\nMath.abs(num)  // Absolute value\nMath.sqrt(num)  // Square root\nMath.pow(base, exp)  // Power\nMath.random()  // Random 0-1\nMath.PI  // Pi constant\nMath.E  // Euler's number",
          examples: [
            {
              title: "Math Methods",
              description: "Common Math object methods",
              code: `// Rounding
console.log(Math.round(4.7));  // 5
console.log(Math.floor(4.7));  // 4
console.log(Math.ceil(4.2));  // 5

// Extremes
console.log(Math.max(5, 10, 3));  // 10
console.log(Math.min(5, 10, 3));  // 3

// Absolute value
console.log(Math.abs(-5));  // 5

// Square root
console.log(Math.sqrt(16));  // 4

// Power
console.log(Math.pow(2, 3));  // 8
console.log(2 ** 3);  // 8 (ES6)

// Random
console.log(Math.random());  // Random 0-1
console.log(Math.floor(Math.random() * 10));  // Random 0-9

// Constants
console.log(Math.PI);  // 3.14159...
console.log(Math.E);  // 2.71828...`,
            },
          ],
          practiceQuestions: [
            {
              question: "Round a number to the nearest integer",
              type: "fill",
              starterCode: `let num = 4.7;
console.log(Math.___(num));`,
              answer: "round",
            },
            {
              question: "Calculate the square root of 25",
              type: "complete",
              starterCode: `console.log(Math.___(25));`,
              answer: "sqrt",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `console.log(Math.max(5, 10, 3));`,
              answer: "10",
            },
          ],
        },
        {
          id: "js-date-methods",
          title: "Date Methods",
          explanation: "The Date object provides methods for working with dates and times. Common methods include getFullYear(), getMonth(), getDate(), getDay() for date components, getHours(), getMinutes(), getSeconds(), getMilliseconds() for time components, getTime() for timestamp, setFullYear(), setMonth(), setDate() for setting dates, and toDateString(), toLocaleDateString() for formatting. Date methods are essential for date manipulation and formatting.",
          syntax: "date.getFullYear()  // Get year\ndate.getMonth()  // Get month (0-11)\ndate.getDate()  // Get day\ndate.getDay()  // Get weekday (0-6)\ndate.getHours()  // Get hours\ndate.getMinutes()  // Get minutes\ndate.getSeconds()  // Get seconds\ndate.getTime()  // Get timestamp\ndate.setFullYear(year)  // Set year\ndate.setMonth(month)  // Set month\ndate.toDateString()  // Format date\ndate.toLocaleDateString()  // Localized format",
          examples: [
            {
              title: "Date Methods",
              description: "Common Date object methods",
              code: `let date = new Date();

// Get date components
console.log(date.getFullYear());  // Current year
console.log(date.getMonth());  // Current month (0-11)
console.log(date.getDate());  // Current day
console.log(date.getDay());  // Day of week (0-6)

// Get time components
console.log(date.getHours());  // Current hour
console.log(date.getMinutes());  // Current minute
console.log(date.getSeconds());  // Current second
console.log(date.getTime());  // Timestamp

// Set date components
date.setFullYear(2025);
date.setMonth(0);  // January
date.setDate(15);

// Format dates
console.log(date.toDateString());  // "Wed Jan 15 2025"
console.log(date.toLocaleDateString());  // Localized format
console.log(date.toISOString());  // ISO format

// Create specific date
let birthday = new Date(2024, 0, 15);  // Year, month (0-11), day`,
            },
          ],
          practiceQuestions: [
            {
              question: "Get the current year from a date",
              type: "fill",
              starterCode: `let date = new Date();
console.log(date.___());`,
              answer: "getFullYear",
            },
            {
              question: "Get the day of the month",
              type: "complete",
              starterCode: `let date = new Date();
console.log(date.___());`,
              answer: "getDate",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `let date = new Date(2024, 0, 1);
console.log(date.getMonth());`,
              answer: "0",
            },
          ],
        },
        {
          id: "js-dom-reference",
          title: "DOM Reference",
          explanation: "DOM Reference provides a comprehensive guide to DOM methods and properties. Key methods include getElementById(), getElementsByClassName(), querySelector(), querySelectorAll() for selection, createElement(), appendChild(), removeChild() for manipulation, setAttribute(), getAttribute() for attributes, addEventListener(), removeEventListener() for events, and style property for styling. Understanding DOM reference helps you efficiently work with HTML elements.",
          syntax: "document.getElementById('id')\ndocument.getElementsByClassName('class')\ndocument.querySelector('selector')\ndocument.querySelectorAll('selector')\ndocument.createElement('tag')\nelement.appendChild(child)\nelement.remove()\nelement.setAttribute('attr', 'value')\nelement.getAttribute('attr')\nelement.addEventListener('event', handler)\nelement.style.property = 'value'",
          examples: [
            {
              title: "DOM Reference",
              description: "Common DOM methods and properties",
              code: `// Selection
let byId = document.getElementById('myId');
let byClass = document.getElementsByClassName('myClass');
let bySelector = document.querySelector('.myClass');
let allBySelector = document.querySelectorAll('div');

// Creation
let newDiv = document.createElement('div');
newDiv.textContent = "New Element";

// Manipulation
document.body.appendChild(newDiv);
newDiv.remove();

// Attributes
newDiv.setAttribute('id', 'newId');
let id = newDiv.getAttribute('id');
newDiv.removeAttribute('id');

// Events
newDiv.addEventListener('click', function() {
    console.log('Clicked!');
});

// Styling
newDiv.style.color = 'blue';
newDiv.style.fontSize = '20px';
newDiv.classList.add('highlight');
newDiv.classList.remove('highlight');
newDiv.classList.toggle('active');

// Navigation
let parent = newDiv.parentElement;
let children = parent.children;
let next = newDiv.nextElementSibling;
let previous = newDiv.previousElementSibling;`,
            },
          ],
          practiceQuestions: [
            {
              question: "Select an element by ID",
              type: "fill",
              starterCode: `let element = document.___('myId');`,
              answer: "getElementById",
            },
            {
              question: "Create a new paragraph element",
              type: "complete",
              starterCode: `let para = document.___('p');`,
              answer: "createElement",
            },
            {
              question: "What will be returned?",
              type: "predict",
              starterCode: `let element = document.querySelector('.item');
console.log(element ? 'Found' : 'Not found');`,
              answer: "'Found' or 'Not found'",
            },
          ],
        },
        {
          id: "js-event-reference",
          title: "Event Reference",
          explanation: "Event Reference provides a comprehensive guide to JavaScript events and event handling. Common events include click, mouseover, mouseout, mousedown, mouseup, keydown, keyup, keypress for user input, load, unload, resize for page events, submit, change, focus, blur for form events, and touchstart, touchend for touch events. Understanding event reference helps you create interactive web applications.",
          syntax: "element.addEventListener('click', handler)\nelement.addEventListener('mouseover', handler)\nelement.addEventListener('keydown', handler)\nelement.addEventListener('submit', handler)\nelement.addEventListener('load', handler)\nevent.preventDefault()\nevent.stopPropagation()\nevent.target\nevent.type\nevent.key",
          examples: [
            {
              title: "Event Reference",
              description: "Common events and their usage",
              code: `// Mouse events
button.addEventListener('click', function(event) {
    console.log('Clicked!');
});

div.addEventListener('mouseover', function(event) {
    console.log('Mouse over');
});

div.addEventListener('mouseout', function(event) {
    console.log('Mouse out');
});

// Keyboard events
input.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

input.addEventListener('keyup', function(event) {
    console.log('Key released:', event.key);
});

// Form events
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
});

input.addEventListener('change', function(event) {
    console.log('Value changed');
});

input.addEventListener('focus', function(event) {
    console.log('Input focused');
});

input.addEventListener('blur', function(event) {
    console.log('Input blurred');
});

// Page events
window.addEventListener('load', function(event) {
    console.log('Page loaded');
});

window.addEventListener('resize', function(event) {
    console.log('Window resized');
});

// Event object properties
button.addEventListener('click', function(event) {
    console.log(event.target);  // Element that triggered event
    console.log(event.type);  // Event type
    console.log(event.timeStamp);  // When event occurred
});`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add a click event listener",
              type: "fill",
              starterCode: `button.___('click', function() {
    console.log('Clicked!');
});`,
              answer: "addEventListener",
            },
            {
              question: "Prevent default form submission",
              type: "complete",
              starterCode: `form.addEventListener('submit', function(event) {
    event.___();
});`,
              answer: "preventDefault",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `button.addEventListener('click', function(event) {
    console.log(event.type);
});`,
              answer: "click",
            },
          ],
        },
      ],
    },
  ],
}
