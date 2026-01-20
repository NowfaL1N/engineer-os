/**
 * SQL Language Data
 * 
 * Comprehensive SQL tutorial data.
 * Organized by categories with topics, explanations, and practice questions.
 */

export const sqlCoding = {
  language: "SQL",
  categories: [
    {
      id: "basics",
      title: "SQL Basics",
      topics: [
        {
          id: "sql-intro",
          title: "SQL Intro",
          explanation: "SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. SQL is used to insert, update, delete, and retrieve data from databases. It's essential for working with databases like MySQL, PostgreSQL, SQL Server, Oracle, and SQLite. SQL allows you to create databases, tables, and perform complex queries to extract meaningful information from data.",
          syntax: "SQL is a declarative language. You describe what you want, not how to get it. SQL statements are executed by database management systems.",
          examples: [
            {
              title: "What is SQL?",
              description: "SQL overview and purpose",
              code: `-- SQL (Structured Query Language)
-- Used to manage relational databases
-- Standard language for database operations

-- Common SQL operations:
-- SELECT: Retrieve data
-- INSERT: Add new data
-- UPDATE: Modify existing data
-- DELETE: Remove data
-- CREATE: Create databases and tables`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does SQL stand for?",
              type: "fill",
              starterQuery: `SQL stands for Structured ___ Language`,
              answer: "Query",
            },
            {
              question: "What is SQL used for?",
              type: "predict",
              starterQuery: `Managing and manipulating relational databases`,
              answer: "Managing and manipulating relational databases",
            },
            {
              question: "Which operation retrieves data from a database?",
              type: "fill",
              starterQuery: `___ * FROM table_name;`,
              answer: "SELECT",
            },
          ],
        },
        {
          id: "sql-syntax",
          title: "SQL Syntax",
          explanation: "SQL syntax follows specific rules. SQL statements are not case-sensitive, but it's a convention to write keywords in uppercase. SQL statements end with a semicolon (;) in some database systems. SQL uses single quotes for string literals. Table and column names can be case-sensitive depending on the database system. Understanding SQL syntax is fundamental to writing correct queries.",
          syntax: "SELECT column1, column2 FROM table_name WHERE condition;",
          examples: [
            {
              title: "Basic SQL Syntax",
              description: "SQL statement structure",
              code: `-- SQL keywords are typically uppercase
SELECT column_name 
FROM table_name;

-- Multiple columns
SELECT column1, column2, column3
FROM table_name;

-- With condition
SELECT * 
FROM customers 
WHERE country = 'USA';`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the SQL statement to select all columns",
              type: "fill",
              starterQuery: `___ * FROM customers;`,
              answer: "SELECT",
            },
            {
              question: "What character typically ends SQL statements?",
              type: "fill",
              starterQuery: `SELECT * FROM table_name___`,
              answer: ";",
            },
            {
              question: "Are SQL keywords case-sensitive?",
              type: "predict",
              starterQuery: `SQL keywords are not case-sensitive`,
              answer: "No, but uppercase is conventional",
            },
          ],
        },
        {
          id: "sql-select",
          title: "SQL Select",
          explanation: "The SELECT statement is used to retrieve data from a database. SELECT is one of the most commonly used SQL commands. You can select specific columns or all columns using *. SELECT can be combined with other clauses like WHERE, ORDER BY, and GROUP BY to filter and organize results. The SELECT statement returns a result set of rows and columns.",
          syntax: "SELECT column1, column2 FROM table_name;\nSELECT * FROM table_name;",
          examples: [
            {
              title: "SELECT Examples",
              description: "Using SELECT to retrieve data",
              code: `-- Select all columns
SELECT * FROM customers;

-- Select specific columns
SELECT customer_name, email, phone
FROM customers;

-- Select with calculation
SELECT product_name, price * quantity AS total
FROM orders;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What keyword retrieves data from a database?",
              type: "fill",
              starterQuery: `___ * FROM products;`,
              answer: "SELECT",
            },
            {
              question: "How do you select all columns from a table?",
              type: "fill",
              starterQuery: `SELECT ___ FROM table_name;`,
              answer: "*",
            },
            {
              question: "Complete the SELECT statement for specific columns",
              type: "fill",
              starterQuery: `SELECT name, email ___ users;`,
              answer: "FROM",
            },
          ],
        },
        {
          id: "sql-select-distinct",
          title: "SQL Select Distinct",
          explanation: "The SELECT DISTINCT statement is used to return only distinct (unique) values. When you have duplicate values in a column, DISTINCT eliminates duplicates and returns only unique values. DISTINCT can be used with one or multiple columns. When used with multiple columns, it returns unique combinations of those columns. DISTINCT is useful for finding unique values in your data.",
          syntax: "SELECT DISTINCT column_name FROM table_name;\nSELECT DISTINCT column1, column2 FROM table_name;",
          examples: [
            {
              title: "SELECT DISTINCT Examples",
              description: "Using DISTINCT to get unique values",
              code: `-- Get unique countries
SELECT DISTINCT country 
FROM customers;

-- Get unique combinations
SELECT DISTINCT country, city 
FROM customers;

-- Without DISTINCT (shows duplicates)
SELECT country 
FROM customers;

-- With DISTINCT (shows unique values)
SELECT DISTINCT country 
FROM customers;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What keyword removes duplicate values?",
              type: "fill",
              starterQuery: `SELECT ___ country FROM customers;`,
              answer: "DISTINCT",
            },
            {
              question: "What does SELECT DISTINCT return?",
              type: "predict",
              starterQuery: `Only unique values from a column`,
              answer: "Only unique (distinct) values",
            },
            {
              question: "Complete the statement to get unique cities",
              type: "fill",
              starterQuery: `SELECT DISTINCT city ___ locations;`,
              answer: "FROM",
            },
          ],
        },
        {
          id: "sql-comments",
          title: "SQL Comments",
          explanation: "SQL comments are used to explain SQL statements or to prevent execution of SQL code. Single-line comments start with -- (two hyphens). Multi-line comments use /* and */. Comments are ignored by the database engine and are useful for documentation and debugging. Comments help make SQL code more readable and maintainable.",
          syntax: "-- Single-line comment\n/* Multi-line comment */",
          examples: [
            {
              title: "SQL Comments Examples",
              description: "Using comments in SQL",
              code: `-- This is a single-line comment
SELECT * FROM customers;

-- Get all customers from USA
SELECT * 
FROM customers 
WHERE country = 'USA';

/* This is a 
   multi-line comment
   that spans multiple lines */

SELECT customer_name, email
FROM customers
WHERE active = 1; -- Only active customers`,
            },
          ],
          practiceQuestions: [
            {
              question: "What characters start a single-line comment?",
              type: "fill",
              starterQuery: `___ This is a comment`,
              answer: "--",
            },
            {
              question: "What characters are used for multi-line comments?",
              type: "fill",
              starterQuery: `___ Multi-line comment ___`,
              answer: "/*",
            },
            {
              question: "Are comments executed by the database?",
              type: "predict",
              starterQuery: `Comments are ignored by the database engine`,
              answer: "No, comments are ignored",
            },
          ],
        },
        {
          id: "sql-insert-into",
          title: "SQL Insert Into",
          explanation: "The INSERT INTO statement is used to insert new records into a table. You can insert data in two ways: specify both column names and values, or just values for all columns. INSERT INTO is essential for adding new data to your database. You can insert a single row or multiple rows in one statement. Understanding INSERT INTO is fundamental for data entry operations.",
          syntax: "INSERT INTO table_name (column1, column2) VALUES (value1, value2);\nINSERT INTO table_name VALUES (value1, value2, value3);",
          examples: [
            {
              title: "INSERT INTO Examples",
              description: "Inserting data into tables",
              code: `-- Insert with column names
INSERT INTO customers (customer_name, email, country)
VALUES ('John Doe', 'john@example.com', 'USA');

-- Insert multiple rows
INSERT INTO products (product_name, price, category)
VALUES 
  ('Laptop', 999.99, 'Electronics'),
  ('Mouse', 29.99, 'Electronics'),
  ('Keyboard', 79.99, 'Electronics');

-- Insert without column names (all columns)
INSERT INTO employees
VALUES (1, 'Jane Smith', 'jane@company.com', '2024-01-15');`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement adds new records to a table?",
              type: "fill",
              starterQuery: `___ INTO customers (name, email) VALUES ('John', 'john@email.com');`,
              answer: "INSERT",
            },
            {
              question: "Complete the INSERT statement",
              type: "fill",
              starterQuery: `INSERT INTO products (name, price) ___ ('Laptop', 999.99);`,
              answer: "VALUES",
            },
            {
              question: "What does INSERT INTO do?",
              type: "predict",
              starterQuery: `Adds new records to a database table`,
              answer: "Adds new records to a table",
            },
          ],
        },
        {
          id: "sql-null-values",
          title: "SQL Null Values",
          explanation: "A NULL value represents missing or unknown data in a database. NULL is not the same as zero or an empty string. NULL values are handled differently in SQL queries. You cannot use comparison operators like = or <> with NULL. Instead, you must use IS NULL or IS NOT NULL to check for NULL values. Understanding NULL is crucial for working with incomplete data.",
          syntax: "SELECT * FROM table_name WHERE column IS NULL;\nSELECT * FROM table_name WHERE column IS NOT NULL;",
          examples: [
            {
              title: "NULL Values Examples",
              description: "Working with NULL values",
              code: `-- Find records with NULL values
SELECT * FROM customers 
WHERE email IS NULL;

-- Find records without NULL values
SELECT * FROM employees 
WHERE phone IS NOT NULL;

-- NULL in WHERE clause
SELECT * FROM orders 
WHERE shipping_date IS NULL;

-- Insert NULL value
INSERT INTO customers (name, email, phone)
VALUES ('John Doe', 'john@example.com', NULL);`,
            },
          ],
          practiceQuestions: [
            {
              question: "What represents missing or unknown data?",
              type: "fill",
              starterQuery: `SELECT * FROM customers WHERE email IS ___;`,
              answer: "NULL",
            },
            {
              question: "How do you check for NULL values?",
              type: "fill",
              starterQuery: `SELECT * FROM products WHERE description IS ___ NULL;`,
              answer: "NOT",
            },
            {
              question: "Is NULL the same as zero or empty string?",
              type: "predict",
              starterQuery: `No, NULL represents missing data`,
              answer: "No, NULL is different from zero or empty string",
            },
          ],
        },
        {
          id: "sql-update",
          title: "SQL Update",
          explanation: "The UPDATE statement is used to modify existing records in a table. UPDATE can change one or multiple columns. Always use WHERE clause with UPDATE to specify which records to update, otherwise all records will be updated. UPDATE is essential for maintaining accurate data. You can update multiple columns in a single statement. Understanding UPDATE is crucial for data modification operations.",
          syntax: "UPDATE table_name SET column1 = value1 WHERE condition;\nUPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;",
          examples: [
            {
              title: "UPDATE Examples",
              description: "Updating existing records",
              code: `-- Update single column
UPDATE customers 
SET email = 'newemail@example.com'
WHERE customer_id = 1;

-- Update multiple columns
UPDATE products 
SET price = 99.99, stock = 50
WHERE product_id = 5;

-- Update with condition
UPDATE employees 
SET salary = salary * 1.1
WHERE department = 'Sales';`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement modifies existing records?",
              type: "fill",
              starterQuery: `___ customers SET email = 'new@email.com' WHERE id = 1;`,
              answer: "UPDATE",
            },
            {
              question: "What keyword sets new values in UPDATE?",
              type: "fill",
              starterQuery: `UPDATE products ___ price = 99.99 WHERE id = 1;`,
              answer: "SET",
            },
            {
              question: "Why is WHERE important in UPDATE?",
              type: "predict",
              starterQuery: `To specify which records to update`,
              answer: "To specify which records to update, otherwise all records are updated",
            },
          ],
        },
        {
          id: "sql-delete",
          title: "SQL Delete",
          explanation: "The DELETE statement is used to delete existing records from a table. DELETE can remove one or multiple rows. Always use WHERE clause with DELETE to specify which records to delete, otherwise all records will be deleted. DELETE removes entire rows, not just column values. DELETE is a powerful operation that permanently removes data. Understanding DELETE is essential for data management.",
          syntax: "DELETE FROM table_name WHERE condition;\nDELETE FROM table_name; -- Deletes all records",
          examples: [
            {
              title: "DELETE Examples",
              description: "Deleting records from tables",
              code: `-- Delete specific records
DELETE FROM customers 
WHERE customer_id = 5;

-- Delete with condition
DELETE FROM orders 
WHERE order_date < '2020-01-01';

-- Delete all records (be careful!)
DELETE FROM temp_table;

-- Delete with multiple conditions
DELETE FROM products 
WHERE stock = 0 AND discontinued = 1;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement removes records from a table?",
              type: "fill",
              starterQuery: `___ FROM customers WHERE id = 5;`,
              answer: "DELETE",
            },
            {
              question: "Complete the DELETE statement",
              type: "fill",
              starterQuery: `DELETE FROM orders ___ order_date < '2020-01-01';`,
              answer: "WHERE",
            },
            {
              question: "What happens if you omit WHERE in DELETE?",
              type: "predict",
              starterQuery: `All records in the table are deleted`,
              answer: "All records in the table are deleted",
            },
          ],
        },
        {
          id: "sql-select-top",
          title: "SQL Select Top",
          explanation: "The SELECT TOP clause is used to specify the number of records to return. SELECT TOP is useful when working with large tables and you only need a limited number of records. The syntax varies by database: SQL Server uses TOP, MySQL uses LIMIT, and Oracle uses ROWNUM. SELECT TOP is often used with ORDER BY to get the top N records based on a specific criteria.",
          syntax: "SELECT TOP number column_name FROM table_name;\nSELECT TOP number PERCENT column_name FROM table_name;",
          examples: [
            {
              title: "SELECT TOP Examples",
              description: "Limiting query results",
              code: `-- Top 10 records (SQL Server)
SELECT TOP 10 * FROM customers;

-- Top 5 with ORDER BY
SELECT TOP 5 * FROM products 
ORDER BY price DESC;

-- Top 10 percent
SELECT TOP 10 PERCENT * FROM orders;

-- MySQL equivalent (LIMIT)
SELECT * FROM customers LIMIT 10;

-- PostgreSQL equivalent (LIMIT)
SELECT * FROM products LIMIT 5;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What clause limits the number of records returned?",
              type: "fill",
              starterQuery: `SELECT ___ 10 * FROM customers;`,
              answer: "TOP",
            },
            {
              question: "How do you get top 5 records?",
              type: "fill",
              starterQuery: `SELECT TOP ___ * FROM products ORDER BY price DESC;`,
              answer: "5",
            },
            {
              question: "What is SELECT TOP useful for?",
              type: "predict",
              starterQuery: `Limiting results from large tables`,
              answer: "Limiting the number of records returned from large tables",
            },
          ],
        },
        {
          id: "sql-select-into",
          title: "SQL Select Into",
          explanation: "The SELECT INTO statement copies data from one table into a new table. SELECT INTO creates a new table and inserts the selected data into it. The new table will have the same column structure as the result set. SELECT INTO is useful for creating backups, archiving data, or creating temporary tables. The syntax may vary by database system.",
          syntax: "SELECT * INTO new_table FROM old_table WHERE condition;\nSELECT column1, column2 INTO new_table FROM old_table;",
          examples: [
            {
              title: "SELECT INTO Examples",
              description: "Copying data to new tables",
              code: `-- Copy all data to new table
SELECT * INTO customers_backup 
FROM customers;

-- Copy with condition
SELECT * INTO old_orders 
FROM orders 
WHERE order_date < '2020-01-01';

-- Copy specific columns
SELECT customer_name, email INTO customer_contacts 
FROM customers;

-- Copy with JOIN
SELECT c.customer_name, o.order_date 
INTO customer_orders_summary
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement copies data into a new table?",
              type: "fill",
              starterQuery: `SELECT * ___ new_table FROM old_table;`,
              answer: "INTO",
            },
            {
              question: "Complete the SELECT INTO statement",
              type: "fill",
              starterQuery: `SELECT * INTO backup_table ___ customers;`,
              answer: "FROM",
            },
            {
              question: "What does SELECT INTO create?",
              type: "predict",
              starterQuery: `A new table with copied data`,
              answer: "A new table with the selected data",
            },
          ],
        },
        {
          id: "sql-insert-into-select",
          title: "SQL Insert Into Select",
          explanation: "The INSERT INTO SELECT statement copies data from one table and inserts it into another existing table. The target table must already exist. INSERT INTO SELECT is useful for copying data between tables, merging data, or populating tables with data from queries. You can copy all columns or specific columns. The data types must be compatible between source and target tables.",
          syntax: "INSERT INTO table2 SELECT * FROM table1 WHERE condition;\nINSERT INTO table2 (column1, column2) SELECT column1, column2 FROM table1;",
          examples: [
            {
              title: "INSERT INTO SELECT Examples",
              description: "Copying data between existing tables",
              code: `-- Copy all data
INSERT INTO customers_backup 
SELECT * FROM customers;

-- Copy with condition
INSERT INTO archived_orders 
SELECT * FROM orders 
WHERE order_date < '2020-01-01';

-- Copy specific columns
INSERT INTO customer_contacts (name, email)
SELECT customer_name, email FROM customers;

-- Copy from multiple tables
INSERT INTO order_summary (customer_name, total)
SELECT c.customer_name, SUM(o.total)
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_name;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement copies data into an existing table?",
              type: "fill",
              starterQuery: `INSERT INTO table2 ___ * FROM table1;`,
              answer: "SELECT",
            },
            {
              question: "Complete the INSERT INTO SELECT statement",
              type: "fill",
              starterQuery: `INSERT INTO backup_table SELECT * ___ customers;`,
              answer: "FROM",
            },
            {
              question: "What must exist before using INSERT INTO SELECT?",
              type: "predict",
              starterQuery: `The target table must already exist`,
              answer: "The target table must already exist",
            },
          ],
        },
      ],
    },
    {
      id: "filtering-sorting",
      title: "SQL Filtering & Sorting",
      topics: [
        {
          id: "sql-where",
          title: "SQL Where",
          explanation: "The WHERE clause is used to filter records and extract only those that fulfill a specified condition. WHERE is used with SELECT, UPDATE, and DELETE statements. It allows you to specify conditions that must be met for rows to be included in the result set. WHERE supports various operators like =, <, >, <=, >=, <>, and !=. Understanding WHERE is essential for querying specific data from large tables.",
          syntax: "SELECT column1, column2 FROM table_name WHERE condition;",
          examples: [
            {
              title: "WHERE Clause Examples",
              description: "Using WHERE to filter data",
              code: `-- Filter by exact value
SELECT * FROM customers 
WHERE country = 'USA';

-- Filter with comparison
SELECT * FROM products 
WHERE price > 100;

-- Filter with multiple conditions
SELECT * FROM orders 
WHERE order_date >= '2024-01-01' 
AND status = 'completed';`,
            },
          ],
          practiceQuestions: [
            {
              question: "What clause filters records in SQL?",
              type: "fill",
              starterQuery: `SELECT * FROM customers ___ country = 'USA';`,
              answer: "WHERE",
            },
            {
              question: "Complete the WHERE clause to find products over $50",
              type: "fill",
              starterQuery: `SELECT * FROM products WHERE price ___ 50;`,
              answer: ">",
            },
            {
              question: "What does the WHERE clause do?",
              type: "predict",
              starterQuery: `Filters records based on specified conditions`,
              answer: "Filters records that meet specified conditions",
            },
          ],
        },
        {
          id: "sql-order-by",
          title: "SQL Order By",
          explanation: "The ORDER BY clause is used to sort the result set in ascending or descending order. By default, ORDER BY sorts in ascending order (ASC). You can specify DESC for descending order. ORDER BY can sort by one or multiple columns. When sorting by multiple columns, the first column takes priority, then the second, and so on. ORDER BY is essential for organizing query results in a meaningful way.",
          syntax: "SELECT column1, column2 FROM table_name ORDER BY column1 ASC;\nSELECT column1, column2 FROM table_name ORDER BY column1 DESC;",
          examples: [
            {
              title: "ORDER BY Examples",
              description: "Sorting query results",
              code: `-- Sort ascending (default)
SELECT * FROM customers 
ORDER BY customer_name;

-- Sort descending
SELECT * FROM products 
ORDER BY price DESC;

-- Sort by multiple columns
SELECT * FROM employees 
ORDER BY department ASC, salary DESC;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What clause sorts query results?",
              type: "fill",
              starterQuery: `SELECT * FROM customers ___ customer_name;`,
              answer: "ORDER BY",
            },
            {
              question: "How do you sort in descending order?",
              type: "fill",
              starterQuery: `SELECT * FROM products ORDER BY price ___;`,
              answer: "DESC",
            },
            {
              question: "What is the default sort order?",
              type: "predict",
              starterQuery: `Ascending order (ASC)`,
              answer: "Ascending (ASC)",
            },
          ],
        },
        {
          id: "sql-and",
          title: "SQL And",
          explanation: "The AND operator is used to combine multiple conditions in a WHERE clause. All conditions separated by AND must be true for a row to be included in the result set. AND is a logical operator that allows you to create more specific queries. You can use multiple AND operators in a single query. AND is useful when you need to filter data based on multiple criteria simultaneously.",
          syntax: "SELECT * FROM table_name WHERE condition1 AND condition2;",
          examples: [
            {
              title: "AND Operator Examples",
              description: "Using AND to combine conditions",
              code: `-- Multiple conditions with AND
SELECT * FROM customers 
WHERE country = 'USA' AND city = 'New York';

-- AND with different operators
SELECT * FROM products 
WHERE price > 50 AND stock > 0;

-- Multiple AND conditions
SELECT * FROM orders 
WHERE order_date >= '2024-01-01' 
AND status = 'completed' 
AND total_amount > 100;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator combines multiple conditions where all must be true?",
              type: "fill",
              starterQuery: `SELECT * FROM customers WHERE country = 'USA' ___ city = 'NYC';`,
              answer: "AND",
            },
            {
              question: "Complete the query with AND condition",
              type: "fill",
              starterQuery: `SELECT * FROM products WHERE price > 50 ___ stock > 0;`,
              answer: "AND",
            },
            {
              question: "What happens when using AND with multiple conditions?",
              type: "predict",
              starterQuery: `All conditions must be true for a row to be included`,
              answer: "All conditions must be true for the row to be included",
            },
          ],
        },
        {
          id: "sql-or",
          title: "SQL Or",
          explanation: "The OR operator is used to combine multiple conditions in a WHERE clause. At least one condition separated by OR must be true for a row to be included in the result set. OR is a logical operator that allows you to create broader queries. You can use multiple OR operators in a single query. OR is useful when you want to find records that match any of several criteria.",
          syntax: "SELECT * FROM table_name WHERE condition1 OR condition2;",
          examples: [
            {
              title: "OR Operator Examples",
              description: "Using OR to combine conditions",
              code: `-- Multiple conditions with OR
SELECT * FROM customers 
WHERE country = 'USA' OR country = 'Canada';

-- OR with different conditions
SELECT * FROM products 
WHERE category = 'Electronics' OR price < 50;

-- Multiple OR conditions
SELECT * FROM employees 
WHERE department = 'Sales' 
OR department = 'Marketing' 
OR department = 'IT';`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator combines conditions where at least one must be true?",
              type: "fill",
              starterQuery: `SELECT * FROM customers WHERE country = 'USA' ___ country = 'Canada';`,
              answer: "OR",
            },
            {
              question: "Complete the query with OR condition",
              type: "fill",
              starterQuery: `SELECT * FROM products WHERE category = 'Books' ___ price < 20;`,
              answer: "OR",
            },
            {
              question: "What happens when using OR with multiple conditions?",
              type: "predict",
              starterQuery: `At least one condition must be true for a row to be included`,
              answer: "At least one condition must be true for the row to be included",
            },
          ],
        },
        {
          id: "sql-not",
          title: "SQL Not",
          explanation: "The NOT operator is used to negate a condition in a WHERE clause. NOT returns rows where the condition is false. NOT can be combined with other operators like IN, LIKE, BETWEEN, and EXISTS. NOT is useful when you want to exclude certain records from your results. Understanding NOT helps you create queries that exclude specific data.",
          syntax: "SELECT * FROM table_name WHERE NOT condition;\nSELECT * FROM table_name WHERE column NOT IN (value1, value2);",
          examples: [
            {
              title: "NOT Operator Examples",
              description: "Using NOT to negate conditions",
              code: `-- NOT with equals
SELECT * FROM customers 
WHERE NOT country = 'USA';

-- NOT with IN
SELECT * FROM products 
WHERE category NOT IN ('Electronics', 'Books');

-- NOT with LIKE
SELECT * FROM employees 
WHERE email NOT LIKE '%@company.com';`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator negates a condition?",
              type: "fill",
              starterQuery: `SELECT * FROM customers WHERE ___ country = 'USA';`,
              answer: "NOT",
            },
            {
              question: "Complete the query to exclude certain categories",
              type: "fill",
              starterQuery: `SELECT * FROM products WHERE category ___ IN ('Electronics');`,
              answer: "NOT",
            },
            {
              question: "What does NOT return?",
              type: "predict",
              starterQuery: `Rows where the condition is false`,
              answer: "Rows where the condition is false",
            },
          ],
        },
        {
          id: "sql-like",
          title: "SQL Like",
          explanation: "The LIKE operator is used in a WHERE clause to search for a specified pattern in a column. LIKE is often used with wildcards (% and _) to match patterns. The percent sign (%) represents zero, one, or multiple characters. The underscore (_) represents a single character. LIKE is case-sensitive in some databases and case-insensitive in others. LIKE is essential for pattern matching in text searches.",
          syntax: "SELECT * FROM table_name WHERE column LIKE pattern;",
          examples: [
            {
              title: "LIKE Operator Examples",
              description: "Using LIKE for pattern matching",
              code: `-- Starts with 'A'
SELECT * FROM customers 
WHERE customer_name LIKE 'A%';

-- Ends with 'com'
SELECT * FROM employees 
WHERE email LIKE '%@company.com';

-- Contains 'test'
SELECT * FROM products 
WHERE product_name LIKE '%test%';

-- Single character wildcard
SELECT * FROM customers 
WHERE phone LIKE '555-___-____';`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator searches for patterns in SQL?",
              type: "fill",
              starterQuery: `SELECT * FROM customers WHERE name ___ 'A%';`,
              answer: "LIKE",
            },
            {
              question: "What wildcard represents zero or more characters?",
              type: "fill",
              starterQuery: `SELECT * FROM products WHERE name LIKE 'Test___';`,
              answer: "%",
            },
            {
              question: "What does LIKE 'A%' match?",
              type: "predict",
              starterQuery: `Values that start with 'A'`,
              answer: "Values that start with 'A'",
            },
          ],
        },
        {
          id: "sql-wildcards",
          title: "SQL Wildcards",
          explanation: "SQL wildcards are special characters used with the LIKE operator to match patterns. The percent sign (%) represents zero, one, or multiple characters. The underscore (_) represents exactly one character. Wildcards can be combined to create complex search patterns. Wildcards are useful for finding data when you know part of the value but not the exact match. Understanding wildcards is essential for flexible text searching.",
          syntax: "% - Zero, one, or multiple characters\n_ - Exactly one character",
          examples: [
            {
              title: "Wildcard Examples",
              description: "Using wildcards in pattern matching",
              code: `-- % matches any sequence of characters
SELECT * FROM customers 
WHERE email LIKE '%@gmail.com';

-- _ matches exactly one character
SELECT * FROM products 
WHERE product_code LIKE 'ABC_123';

-- Combined wildcards
SELECT * FROM employees 
WHERE phone LIKE '555-___-____';

-- Multiple wildcards
SELECT * FROM customers 
WHERE name LIKE 'J%n';`,
            },
          ],
          practiceQuestions: [
            {
              question: "What wildcard matches exactly one character?",
              type: "fill",
              starterQuery: `SELECT * FROM products WHERE code LIKE 'ABC___123';`,
              answer: "_",
            },
            {
              question: "What wildcard matches zero or more characters?",
              type: "fill",
              starterQuery: `SELECT * FROM customers WHERE email LIKE '___@gmail.com';`,
              answer: "%",
            },
            {
              question: "What does the pattern 'A_B' match?",
              type: "predict",
              starterQuery: `Values like 'A1B', 'AxB' (one character between A and B)`,
              answer: "Values with exactly one character between A and B",
            },
          ],
        },
        {
          id: "sql-in",
          title: "SQL In",
          explanation: "The IN operator allows you to specify multiple values in a WHERE clause. IN is a shorthand for multiple OR conditions. It's more readable and efficient than using multiple OR operators. IN can be used with SELECT, INSERT, UPDATE, and DELETE statements. IN can also be used with a subquery to check if a value exists in another table. Understanding IN helps you write cleaner and more efficient queries.",
          syntax: "SELECT * FROM table_name WHERE column IN (value1, value2, value3);",
          examples: [
            {
              title: "IN Operator Examples",
              description: "Using IN to match multiple values",
              code: `-- Multiple values
SELECT * FROM customers 
WHERE country IN ('USA', 'Canada', 'Mexico');

-- IN with numbers
SELECT * FROM products 
WHERE category_id IN (1, 2, 3);

-- IN with subquery
SELECT * FROM orders 
WHERE customer_id IN (
  SELECT customer_id FROM customers WHERE country = 'USA'
);`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator allows multiple values in a WHERE clause?",
              type: "fill",
              starterQuery: `SELECT * FROM customers WHERE country ___ ('USA', 'Canada');`,
              answer: "IN",
            },
            {
              question: "Complete the IN clause with multiple values",
              type: "fill",
              starterQuery: `SELECT * FROM products WHERE category_id ___ (1, 2, 3);`,
              answer: "IN",
            },
            {
              question: "What is IN a shorthand for?",
              type: "predict",
              starterQuery: `Multiple OR conditions`,
              answer: "Multiple OR conditions",
            },
          ],
        },
        {
          id: "sql-between",
          title: "SQL Between",
          explanation: "The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates. BETWEEN is inclusive, meaning it includes both the start and end values. BETWEEN is equivalent to using >= AND <= operators. BETWEEN is useful for filtering data within a specific range. Understanding BETWEEN helps you write cleaner range queries.",
          syntax: "SELECT * FROM table_name WHERE column BETWEEN value1 AND value2;",
          examples: [
            {
              title: "BETWEEN Operator Examples",
              description: "Using BETWEEN for range queries",
              code: `-- Numeric range
SELECT * FROM products 
WHERE price BETWEEN 10 AND 100;

-- Date range
SELECT * FROM orders 
WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';

-- Text range (alphabetical)
SELECT * FROM customers 
WHERE customer_name BETWEEN 'A' AND 'M';`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator selects values within a range?",
              type: "fill",
              starterQuery: `SELECT * FROM products WHERE price ___ 10 AND 100;`,
              answer: "BETWEEN",
            },
            {
              question: "Is BETWEEN inclusive of the end values?",
              type: "predict",
              starterQuery: `Yes, BETWEEN includes both start and end values`,
              answer: "Yes, it includes both start and end values",
            },
            {
              question: "Complete the BETWEEN clause for dates",
              type: "fill",
              starterQuery: `SELECT * FROM orders WHERE order_date ___ '2024-01-01' AND '2024-12-31';`,
              answer: "BETWEEN",
            },
          ],
        },
      ],
    },
    {
      id: "functions-operators",
      title: "SQL Functions & Operators",
      topics: [
        {
          id: "sql-aggregate-functions",
          title: "SQL Aggregate Functions",
          explanation: "Aggregate functions perform a calculation on a set of values and return a single value. Common aggregate functions include COUNT, SUM, AVG, MIN, and MAX. Aggregate functions are often used with GROUP BY to group results. Aggregate functions ignore NULL values except COUNT(*). Understanding aggregate functions is essential for data analysis and reporting.",
          syntax: "SELECT aggregate_function(column_name) FROM table_name;\nSELECT aggregate_function(column_name) FROM table_name GROUP BY column_name;",
          examples: [
            {
              title: "Aggregate Functions Examples",
              description: "Using aggregate functions",
              code: `-- Count all rows
SELECT COUNT(*) FROM customers;

-- Sum of values
SELECT SUM(price) FROM products;

-- Average value
SELECT AVG(salary) FROM employees;

-- Minimum value
SELECT MIN(price) FROM products;

-- Maximum value
SELECT MAX(order_date) FROM orders;

-- Multiple aggregates
SELECT 
  COUNT(*) AS total_orders,
  SUM(total_amount) AS total_revenue,
  AVG(total_amount) AS average_order
FROM orders;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What type of functions perform calculations on sets of values?",
              type: "fill",
              starterQuery: `SELECT ___(*) FROM customers;`,
              answer: "COUNT",
            },
            {
              question: "What aggregate function finds the average?",
              type: "fill",
              starterQuery: `SELECT ___(price) FROM products;`,
              answer: "AVG",
            },
            {
              question: "Do aggregate functions ignore NULL values?",
              type: "predict",
              starterQuery: `Yes, except COUNT(*)`,
              answer: "Yes, except COUNT(*)",
            },
          ],
        },
        {
          id: "sql-min-max",
          title: "SQL Min and Max",
          explanation: "The MIN() function returns the smallest value in a column. The MAX() function returns the largest value in a column. MIN and MAX work with numeric, date, and text columns. MIN and MAX are useful for finding the lowest and highest values in your data. These functions are essential for data analysis and reporting.",
          syntax: "SELECT MIN(column_name) FROM table_name;\nSELECT MAX(column_name) FROM table_name;",
          examples: [
            {
              title: "MIN and MAX Examples",
              description: "Finding minimum and maximum values",
              code: `-- Minimum price
SELECT MIN(price) AS lowest_price 
FROM products;

-- Maximum salary
SELECT MAX(salary) AS highest_salary 
FROM employees;

-- Both MIN and MAX
SELECT 
  MIN(price) AS min_price,
  MAX(price) AS max_price
FROM products;

-- MIN with date
SELECT MIN(order_date) AS first_order 
FROM orders;

-- MAX with text (alphabetical)
SELECT MAX(customer_name) AS last_name 
FROM customers;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function returns the smallest value?",
              type: "fill",
              starterQuery: `SELECT ___(price) FROM products;`,
              answer: "MIN",
            },
            {
              question: "What function returns the largest value?",
              type: "fill",
              starterQuery: `SELECT ___(salary) FROM employees;`,
              answer: "MAX",
            },
            {
              question: "What data types do MIN and MAX work with?",
              type: "predict",
              starterQuery: `Numeric, date, and text columns`,
              answer: "Numeric, date, and text columns",
            },
          ],
        },
        {
          id: "sql-count",
          title: "SQL Count",
          explanation: "The COUNT() function returns the number of rows that match a specified criterion. COUNT(*) counts all rows including those with NULL values. COUNT(column_name) counts only non-NULL values in that column. COUNT is useful for counting records, checking data completeness, and generating statistics. Understanding COUNT is essential for data analysis.",
          syntax: "SELECT COUNT(*) FROM table_name;\nSELECT COUNT(column_name) FROM table_name WHERE condition;",
          examples: [
            {
              title: "COUNT Examples",
              description: "Counting rows and values",
              code: `-- Count all rows
SELECT COUNT(*) AS total_customers 
FROM customers;

-- Count non-NULL values
SELECT COUNT(email) AS customers_with_email 
FROM customers;

-- Count with condition
SELECT COUNT(*) AS active_orders 
FROM orders 
WHERE status = 'completed';

-- Count distinct values
SELECT COUNT(DISTINCT country) AS unique_countries 
FROM customers;

-- Count grouped data
SELECT category, COUNT(*) AS product_count
FROM products
GROUP BY category;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function counts the number of rows?",
              type: "fill",
              starterQuery: `SELECT ___(*) FROM customers;`,
              answer: "COUNT",
            },
            {
              question: "What does COUNT(*) count?",
              type: "predict",
              starterQuery: `All rows including NULL values`,
              answer: "All rows including those with NULL values",
            },
            {
              question: "How do you count distinct values?",
              type: "fill",
              starterQuery: `SELECT COUNT(___ country) FROM customers;`,
              answer: "DISTINCT",
            },
          ],
        },
        {
          id: "sql-sum",
          title: "SQL Sum",
          explanation: "The SUM() function returns the total sum of a numeric column. SUM adds up all the values in a column. SUM ignores NULL values. SUM is commonly used with GROUP BY to calculate totals for groups. SUM is essential for financial calculations, inventory totals, and statistical analysis. Understanding SUM is crucial for data aggregation.",
          syntax: "SELECT SUM(column_name) FROM table_name;\nSELECT SUM(column_name) FROM table_name GROUP BY column_name;",
          examples: [
            {
              title: "SUM Examples",
              description: "Calculating sums",
              code: `-- Total revenue
SELECT SUM(total_amount) AS total_revenue 
FROM orders;

-- Sum with condition
SELECT SUM(price * quantity) AS total_value 
FROM order_items 
WHERE order_id = 100;

-- Sum grouped by category
SELECT category, SUM(price) AS category_total
FROM products
GROUP BY category;

-- Sum with calculation
SELECT SUM(salary * 1.1) AS total_with_bonus 
FROM employees;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function calculates the total sum?",
              type: "fill",
              starterQuery: `SELECT ___(price) FROM products;`,
              answer: "SUM",
            },
            {
              question: "What does SUM ignore?",
              type: "predict",
              starterQuery: `NULL values`,
              answer: "NULL values",
            },
            {
              question: "Complete the SUM calculation",
              type: "fill",
              starterQuery: `SELECT SUM(total_amount) ___ total_revenue FROM orders;`,
              answer: "AS",
            },
          ],
        },
        {
          id: "sql-avg",
          title: "SQL Avg",
          explanation: "The AVG() function returns the average value of a numeric column. AVG calculates the mean by summing all values and dividing by the count of non-NULL values. AVG ignores NULL values. AVG is commonly used with GROUP BY to calculate averages for groups. AVG is essential for statistical analysis and reporting. Understanding AVG helps you analyze data trends.",
          syntax: "SELECT AVG(column_name) FROM table_name;\nSELECT AVG(column_name) FROM table_name GROUP BY column_name;",
          examples: [
            {
              title: "AVG Examples",
              description: "Calculating averages",
              code: `-- Average price
SELECT AVG(price) AS average_price 
FROM products;

-- Average with condition
SELECT AVG(salary) AS avg_salary 
FROM employees 
WHERE department = 'Sales';

-- Average grouped by category
SELECT category, AVG(price) AS avg_category_price
FROM products
GROUP BY category;

-- Average order value
SELECT AVG(total_amount) AS average_order_value 
FROM orders;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function calculates the average value?",
              type: "fill",
              starterQuery: `SELECT ___(price) FROM products;`,
              answer: "AVG",
            },
            {
              question: "How does AVG calculate the average?",
              type: "predict",
              starterQuery: `Sums values and divides by count of non-NULL values`,
              answer: "Sums all values and divides by the count of non-NULL values",
            },
            {
              question: "Complete the AVG calculation",
              type: "fill",
              starterQuery: `SELECT AVG(salary) ___ avg_salary FROM employees;`,
              answer: "AS",
            },
          ],
        },
        {
          id: "sql-case",
          title: "SQL Case",
          explanation: "The CASE statement goes through conditions and returns a value when the first condition is met. If no conditions are met, it returns the value in the ELSE clause. CASE is SQL's way of handling if-then-else logic. CASE can be used in SELECT, WHERE, and ORDER BY clauses. CASE is essential for conditional logic in SQL queries.",
          syntax: "CASE WHEN condition1 THEN result1 WHEN condition2 THEN result2 ELSE result END",
          examples: [
            {
              title: "CASE Examples",
              description: "Using CASE for conditional logic",
              code: `-- Simple CASE
SELECT customer_name,
  CASE 
    WHEN country = 'USA' THEN 'Domestic'
    WHEN country = 'Canada' THEN 'North America'
    ELSE 'International'
  END AS region
FROM customers;

-- CASE with calculations
SELECT product_name, price,
  CASE 
    WHEN price > 100 THEN 'Expensive'
    WHEN price > 50 THEN 'Moderate'
    ELSE 'Affordable'
  END AS price_category
FROM products;

-- CASE in WHERE clause
SELECT * FROM orders
WHERE 
  CASE 
    WHEN order_date >= '2024-01-01' THEN status = 'new'
    ELSE status = 'completed'
  END;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement handles if-then-else logic in SQL?",
              type: "fill",
              starterQuery: `SELECT name, ___ WHEN age > 18 THEN 'Adult' ELSE 'Minor' END FROM users;`,
              answer: "CASE",
            },
            {
              question: "Complete the CASE statement",
              type: "fill",
              starterQuery: `CASE WHEN price > 100 THEN 'Expensive' ___ 'Affordable' END`,
              answer: "ELSE",
            },
            {
              question: "What does CASE return when no conditions are met?",
              type: "predict",
              starterQuery: `The value in the ELSE clause`,
              answer: "The value in the ELSE clause",
            },
          ],
        },
        {
          id: "sql-null-functions",
          title: "SQL Null Functions",
          explanation: "NULL functions handle NULL values in SQL queries. Common NULL functions include ISNULL(), IFNULL(), COALESCE(), and NULLIF(). These functions help replace NULL values with default values or handle NULL in calculations. Different database systems have different NULL functions. Understanding NULL functions is essential for working with incomplete data.",
          syntax: "ISNULL(column, replacement_value)\nCOALESCE(value1, value2, value3)\nIFNULL(column, replacement_value)",
          examples: [
            {
              title: "NULL Functions Examples",
              description: "Handling NULL values",
              code: `-- SQL Server: ISNULL
SELECT customer_name, ISNULL(phone, 'No phone') AS contact
FROM customers;

-- MySQL: IFNULL
SELECT product_name, IFNULL(description, 'No description') AS desc
FROM products;

-- Standard: COALESCE (works in most databases)
SELECT customer_name, COALESCE(email, phone, 'No contact') AS contact
FROM customers;

-- Replace NULL with 0
SELECT product_name, COALESCE(stock, 0) AS stock_level
FROM products;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function replaces NULL with a default value in SQL Server?",
              type: "fill",
              starterQuery: `SELECT ___(phone, 'No phone') FROM customers;`,
              answer: "ISNULL",
            },
            {
              question: "What function works across most databases to handle NULL?",
              type: "fill",
              starterQuery: `SELECT ___(email, phone, 'No contact') FROM customers;`,
              answer: "COALESCE",
            },
            {
              question: "What does COALESCE return?",
              type: "predict",
              starterQuery: `The first non-NULL value from the list`,
              answer: "The first non-NULL value from the provided arguments",
            },
          ],
        },
        {
          id: "sql-operators",
          title: "SQL Operators",
          explanation: "SQL operators are used to perform operations on data. Arithmetic operators include +, -, *, /, and %. Comparison operators include =, <>, !=, <, >, <=, >=, and LIKE. Logical operators include AND, OR, and NOT. Operators are used in WHERE clauses, SELECT statements, and calculations. Understanding operators is fundamental to writing SQL queries.",
          syntax: "Arithmetic: +, -, *, /, %\nComparison: =, <>, !=, <, >, <=, >=\nLogical: AND, OR, NOT",
          examples: [
            {
              title: "SQL Operators Examples",
              description: "Using various SQL operators",
              code: `-- Arithmetic operators
SELECT product_name, price * 1.1 AS price_with_tax
FROM products;

-- Comparison operators
SELECT * FROM customers 
WHERE age >= 18 AND age <= 65;

-- Logical operators
SELECT * FROM orders 
WHERE status = 'completed' OR status = 'pending';

-- Combined operators
SELECT product_name, 
  price * quantity AS total,
  CASE 
    WHEN total > 1000 THEN 'High Value'
    ELSE 'Standard'
  END AS value_category
FROM order_items;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator performs multiplication?",
              type: "fill",
              starterQuery: `SELECT price ___ 1.1 AS total FROM products;`,
              answer: "*",
            },
            {
              question: "What operator means 'not equal'?",
              type: "fill",
              starterQuery: `SELECT * FROM customers WHERE status ___ 'inactive';`,
              answer: "<>",
            },
            {
              question: "What are the three types of SQL operators?",
              type: "predict",
              starterQuery: `Arithmetic, comparison, and logical operators`,
              answer: "Arithmetic, comparison, and logical operators",
            },
          ],
        },
      ],
    },
    {
      id: "joins-subqueries",
      title: "SQL Joins & Subqueries",
      topics: [
        {
          id: "sql-joins",
          title: "SQL Joins",
          explanation: "SQL JOINs are used to combine rows from two or more tables based on a related column between them. JOINs allow you to retrieve data from multiple tables in a single query. There are different types of JOINs: INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN. JOINs are essential for working with relational databases where data is spread across multiple tables. Understanding JOINs is crucial for complex data retrieval.",
          syntax: "SELECT columns FROM table1 JOIN table2 ON table1.column = table2.column;",
          examples: [
            {
              title: "SQL JOIN Overview",
              description: "Understanding JOINs in SQL",
              code: `-- JOIN combines data from multiple tables
-- Based on a related column (foreign key)

-- Basic JOIN structure
SELECT customers.customer_name, orders.order_date
FROM customers
JOIN orders ON customers.customer_id = orders.customer_id;

-- Using table aliases
SELECT c.customer_name, o.order_date, o.total_amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id;

-- Multiple JOINs
SELECT c.customer_name, o.order_date, p.product_name
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What combines rows from multiple tables?",
              type: "fill",
              starterQuery: `SELECT * FROM table1 ___ table2 ON table1.id = table2.id;`,
              answer: "JOIN",
            },
            {
              question: "What clause specifies the relationship between tables?",
              type: "fill",
              starterQuery: `SELECT * FROM customers JOIN orders ___ customers.id = orders.customer_id;`,
              answer: "ON",
            },
            {
              question: "What are JOINs used for?",
              type: "predict",
              starterQuery: `Combining data from multiple tables`,
              answer: "Combining rows from multiple tables based on related columns",
            },
          ],
        },
        {
          id: "sql-inner-join",
          title: "SQL Inner Join",
          explanation: "INNER JOIN returns only the rows that have matching values in both tables. INNER JOIN is the most common type of JOIN. If there's no match, the row is excluded from the result set. INNER JOIN is the default JOIN type in many databases, so you can use just JOIN instead of INNER JOIN. Understanding INNER JOIN is fundamental for combining related data.",
          syntax: "SELECT columns FROM table1 INNER JOIN table2 ON table1.column = table2.column;\nSELECT columns FROM table1 JOIN table2 ON table1.column = table2.column;",
          examples: [
            {
              title: "INNER JOIN Examples",
              description: "Using INNER JOIN to combine tables",
              code: `-- INNER JOIN (explicit)
SELECT customers.customer_name, orders.order_date
FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id;

-- JOIN (implicit INNER JOIN)
SELECT c.customer_name, o.total_amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id;

-- Multiple INNER JOINs
SELECT c.customer_name, p.product_name, oi.quantity
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.product_id;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What JOIN returns only matching rows from both tables?",
              type: "fill",
              starterQuery: `SELECT * FROM table1 ___ JOIN table2 ON table1.id = table2.id;`,
              answer: "INNER",
            },
            {
              question: "What happens to rows without matches in INNER JOIN?",
              type: "predict",
              starterQuery: `They are excluded from the result set`,
              answer: "They are excluded from the result set",
            },
            {
              question: "Is INNER JOIN the default JOIN type?",
              type: "predict",
              starterQuery: `Yes, in many databases`,
              answer: "Yes, in many databases you can use JOIN instead of INNER JOIN",
            },
          ],
        },
        {
          id: "sql-left-join",
          title: "SQL Left Join",
          explanation: "LEFT JOIN returns all rows from the left table and the matched rows from the right table. If there's no match, the result is NULL on the right side. LEFT JOIN is also called LEFT OUTER JOIN. LEFT JOIN is useful when you want all records from the left table regardless of whether they have matches in the right table. Understanding LEFT JOIN is essential for inclusive data retrieval.",
          syntax: "SELECT columns FROM table1 LEFT JOIN table2 ON table1.column = table2.column;\nSELECT columns FROM table1 LEFT OUTER JOIN table2 ON table1.column = table2.column;",
          examples: [
            {
              title: "LEFT JOIN Examples",
              description: "Using LEFT JOIN to include all left table rows",
              code: `-- LEFT JOIN
SELECT customers.customer_name, orders.order_date
FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id;

-- LEFT OUTER JOIN (same as LEFT JOIN)
SELECT c.customer_name, o.total_amount
FROM customers c
LEFT OUTER JOIN orders o ON c.customer_id = o.customer_id;

-- Find customers without orders
SELECT c.customer_name
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What JOIN returns all rows from the left table?",
              type: "fill",
              starterQuery: `SELECT * FROM customers ___ JOIN orders ON customers.id = orders.customer_id;`,
              answer: "LEFT",
            },
            {
              question: "What appears for non-matching rows in LEFT JOIN?",
              type: "predict",
              starterQuery: `NULL values`,
              answer: "NULL values for the right table columns",
            },
            {
              question: "What is LEFT JOIN also called?",
              type: "fill",
              starterQuery: `LEFT ___ JOIN`,
              answer: "OUTER",
            },
          ],
        },
        {
          id: "sql-right-join",
          title: "SQL Right Join",
          explanation: "RIGHT JOIN returns all rows from the right table and the matched rows from the left table. If there's no match, the result is NULL on the left side. RIGHT JOIN is also called RIGHT OUTER JOIN. RIGHT JOIN is less commonly used than LEFT JOIN but is useful when you want all records from the right table. Understanding RIGHT JOIN helps you work with different data retrieval scenarios.",
          syntax: "SELECT columns FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;\nSELECT columns FROM table1 RIGHT OUTER JOIN table2 ON table1.column = table2.column;",
          examples: [
            {
              title: "RIGHT JOIN Examples",
              description: "Using RIGHT JOIN to include all right table rows",
              code: `-- RIGHT JOIN
SELECT customers.customer_name, orders.order_date
FROM customers
RIGHT JOIN orders ON customers.customer_id = orders.customer_id;

-- RIGHT OUTER JOIN (same as RIGHT JOIN)
SELECT c.customer_name, o.total_amount
FROM customers c
RIGHT OUTER JOIN orders o ON c.customer_id = o.customer_id;

-- Find orders without customers (orphaned orders)
SELECT o.order_id, o.order_date
FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.customer_id
WHERE c.customer_id IS NULL;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What JOIN returns all rows from the right table?",
              type: "fill",
              starterQuery: `SELECT * FROM customers ___ JOIN orders ON customers.id = orders.customer_id;`,
              answer: "RIGHT",
            },
            {
              question: "What appears for non-matching rows in RIGHT JOIN?",
              type: "predict",
              starterQuery: `NULL values for left table columns`,
              answer: "NULL values for the left table columns",
            },
            {
              question: "Is RIGHT JOIN commonly used?",
              type: "predict",
              starterQuery: `Less commonly used than LEFT JOIN`,
              answer: "Less commonly used than LEFT JOIN",
            },
          ],
        },
        {
          id: "sql-full-join",
          title: "SQL Full Join",
          explanation: "FULL JOIN returns all rows when there is a match in either left or right table. FULL JOIN combines the results of both LEFT JOIN and RIGHT JOIN. If there's no match, the missing side contains NULL. FULL JOIN is also called FULL OUTER JOIN. FULL JOIN is useful when you want all records from both tables. Understanding FULL JOIN helps you retrieve comprehensive data sets.",
          syntax: "SELECT columns FROM table1 FULL JOIN table2 ON table1.column = table2.column;\nSELECT columns FROM table1 FULL OUTER JOIN table2 ON table1.column = table2.column;",
          examples: [
            {
              title: "FULL JOIN Examples",
              description: "Using FULL JOIN to include all rows from both tables",
              code: `-- FULL JOIN
SELECT customers.customer_name, orders.order_date
FROM customers
FULL JOIN orders ON customers.customer_id = orders.customer_id;

-- FULL OUTER JOIN (same as FULL JOIN)
SELECT c.customer_name, o.total_amount
FROM customers c
FULL OUTER JOIN orders o ON c.customer_id = o.customer_id;

-- Note: FULL JOIN is not supported in MySQL
-- Use UNION of LEFT and RIGHT JOINs instead`,
            },
          ],
          practiceQuestions: [
            {
              question: "What JOIN returns all rows from both tables?",
              type: "fill",
              starterQuery: `SELECT * FROM table1 ___ JOIN table2 ON table1.id = table2.id;`,
              answer: "FULL",
            },
            {
              question: "What does FULL JOIN combine?",
              type: "predict",
              starterQuery: `Results of LEFT JOIN and RIGHT JOIN`,
              answer: "Results of both LEFT JOIN and RIGHT JOIN",
            },
            {
              question: "Is FULL JOIN supported in MySQL?",
              type: "predict",
              starterQuery: `No, use UNION of LEFT and RIGHT JOINs`,
              answer: "No, MySQL doesn't support FULL JOIN",
            },
          ],
        },
        {
          id: "sql-self-join",
          title: "SQL Self Join",
          explanation: "A self-join is a regular join where a table is joined with itself. Self-joins are useful for comparing rows within the same table or finding relationships within a table. Self-joins require table aliases to distinguish between the two instances of the same table. Self-joins are commonly used for hierarchical data like employee-manager relationships. Understanding self-joins helps you work with recursive relationships.",
          syntax: "SELECT a.column, b.column FROM table_name a JOIN table_name b ON a.column = b.column;",
          examples: [
            {
              title: "Self JOIN Examples",
              description: "Joining a table with itself",
              code: `-- Employee and manager relationship
SELECT e.employee_name AS employee, m.employee_name AS manager
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id;

-- Find products in same category
SELECT p1.product_name AS product1, p2.product_name AS product2
FROM products p1
JOIN products p2 ON p1.category_id = p2.category_id
WHERE p1.product_id < p2.product_id;

-- Hierarchical data
SELECT child.name AS child, parent.name AS parent
FROM categories child
JOIN categories parent ON child.parent_id = parent.category_id;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is a join where a table joins with itself?",
              type: "fill",
              starterQuery: `SELECT * FROM employees e JOIN employees m ON e.manager_id = m.id; This is a ___ join`,
              answer: "self",
            },
            {
              question: "Why are table aliases needed in self-joins?",
              type: "predict",
              starterQuery: `To distinguish between two instances of the same table`,
              answer: "To distinguish between the two instances of the same table",
            },
            {
              question: "What are self-joins commonly used for?",
              type: "predict",
              starterQuery: `Hierarchical data and relationships within a table`,
              answer: "Hierarchical data and comparing rows within the same table",
            },
          ],
        },
        {
          id: "sql-union",
          title: "SQL Union",
          explanation: "The UNION operator combines the result sets of two or more SELECT statements. UNION removes duplicate rows from the result set. Each SELECT statement must have the same number of columns and compatible data types. UNION is useful for combining data from different tables or queries. Understanding UNION helps you merge query results effectively.",
          syntax: "SELECT column1 FROM table1 UNION SELECT column1 FROM table2;",
          examples: [
            {
              title: "UNION Examples",
              description: "Combining query results with UNION",
              code: `-- Combine customer names from two tables
SELECT customer_name FROM customers
UNION
SELECT customer_name FROM archived_customers;

-- UNION with multiple columns
SELECT first_name, last_name FROM employees
UNION
SELECT first_name, last_name FROM contractors;

-- UNION removes duplicates
SELECT country FROM customers
UNION
SELECT country FROM suppliers;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator combines result sets from multiple SELECT statements?",
              type: "fill",
              starterQuery: `SELECT name FROM table1 ___ SELECT name FROM table2;`,
              answer: "UNION",
            },
            {
              question: "Does UNION remove duplicate rows?",
              type: "predict",
              starterQuery: `Yes, UNION removes duplicates`,
              answer: "Yes, UNION removes duplicate rows",
            },
            {
              question: "What must SELECT statements have to use UNION?",
              type: "predict",
              starterQuery: `Same number of columns and compatible data types`,
              answer: "Same number of columns and compatible data types",
            },
          ],
        },
        {
          id: "sql-union-all",
          title: "SQL Union All",
          explanation: "The UNION ALL operator combines the result sets of two or more SELECT statements. Unlike UNION, UNION ALL does not remove duplicate rows, so it's faster. UNION ALL includes all rows from all SELECT statements. UNION ALL is useful when you want to keep duplicates or when you know there are no duplicates. Understanding UNION ALL helps you combine results efficiently.",
          syntax: "SELECT column1 FROM table1 UNION ALL SELECT column1 FROM table2;",
          examples: [
            {
              title: "UNION ALL Examples",
              description: "Combining query results with UNION ALL",
              code: `-- Combine with duplicates
SELECT product_name FROM products
UNION ALL
SELECT product_name FROM discontinued_products;

-- UNION ALL is faster than UNION
SELECT category FROM table1
UNION ALL
SELECT category FROM table2;

-- All rows included
SELECT customer_id FROM orders_2023
UNION ALL
SELECT customer_id FROM orders_2024;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator combines results without removing duplicates?",
              type: "fill",
              starterQuery: `SELECT name FROM table1 ___ ALL SELECT name FROM table2;`,
              answer: "UNION",
            },
            {
              question: "Is UNION ALL faster than UNION?",
              type: "predict",
              starterQuery: `Yes, because it doesn't remove duplicates`,
              answer: "Yes, because it doesn't need to check for duplicates",
            },
            {
              question: "When should you use UNION ALL?",
              type: "predict",
              starterQuery: `When you want to keep duplicates or know there are none`,
              answer: "When you want to keep duplicates or when duplicates don't matter",
            },
          ],
        },
        {
          id: "sql-group-by",
          title: "SQL Group By",
          explanation: "The GROUP BY clause groups rows that have the same values in specified columns into summary rows. GROUP BY is often used with aggregate functions like COUNT, SUM, AVG, etc. GROUP BY allows you to perform calculations on groups of data rather than individual rows. Understanding GROUP BY is essential for data aggregation and reporting.",
          syntax: "SELECT column1, aggregate_function(column2) FROM table_name GROUP BY column1;",
          examples: [
            {
              title: "GROUP BY Examples",
              description: "Grouping data with GROUP BY",
              code: `-- Count by category
SELECT category, COUNT(*) AS product_count
FROM products
GROUP BY category;

-- Sum by customer
SELECT customer_id, SUM(total_amount) AS total_spent
FROM orders
GROUP BY customer_id;

-- Multiple grouping columns
SELECT country, city, COUNT(*) AS customer_count
FROM customers
GROUP BY country, city;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What clause groups rows with the same values?",
              type: "fill",
              starterQuery: `SELECT category, COUNT(*) FROM products ___ BY category;`,
              answer: "GROUP",
            },
            {
              question: "What functions are commonly used with GROUP BY?",
              type: "predict",
              starterQuery: `Aggregate functions like COUNT, SUM, AVG`,
              answer: "Aggregate functions like COUNT, SUM, AVG, MIN, MAX",
            },
            {
              question: "Complete the GROUP BY statement",
              type: "fill",
              starterQuery: `SELECT country, COUNT(*) FROM customers GROUP ___ country;`,
              answer: "BY",
            },
          ],
        },
        {
          id: "sql-having",
          title: "SQL Having",
          explanation: "The HAVING clause is used to filter groups created by GROUP BY. HAVING is similar to WHERE but works on groups instead of individual rows. HAVING is used with aggregate functions in the condition. WHERE filters rows before grouping, HAVING filters groups after grouping. Understanding HAVING is essential for filtering aggregated data.",
          syntax: "SELECT column1, aggregate_function(column2) FROM table_name GROUP BY column1 HAVING aggregate_function(column2) condition;",
          examples: [
            {
              title: "HAVING Examples",
              description: "Filtering groups with HAVING",
              code: `-- Filter groups with HAVING
SELECT category, COUNT(*) AS product_count
FROM products
GROUP BY category
HAVING COUNT(*) > 10;

-- HAVING with SUM
SELECT customer_id, SUM(total_amount) AS total_spent
FROM orders
GROUP BY customer_id
HAVING SUM(total_amount) > 1000;

-- HAVING vs WHERE
SELECT country, COUNT(*) AS customer_count
FROM customers
WHERE active = 1
GROUP BY country
HAVING COUNT(*) > 5;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What clause filters groups created by GROUP BY?",
              type: "fill",
              starterQuery: `SELECT category, COUNT(*) FROM products GROUP BY category ___ COUNT(*) > 10;`,
              answer: "HAVING",
            },
            {
              question: "What's the difference between WHERE and HAVING?",
              type: "predict",
              starterQuery: `WHERE filters rows, HAVING filters groups`,
              answer: "WHERE filters rows before grouping, HAVING filters groups after grouping",
            },
            {
              question: "Can HAVING use aggregate functions?",
              type: "predict",
              starterQuery: `Yes, HAVING is used with aggregate functions`,
              answer: "Yes, HAVING is commonly used with aggregate functions",
            },
          ],
        },
        {
          id: "sql-exists",
          title: "SQL Exists",
          explanation: "The EXISTS operator is used to test for the existence of any record in a subquery. EXISTS returns TRUE if the subquery returns one or more records, and FALSE otherwise. EXISTS is often more efficient than IN when checking for existence. EXISTS stops as soon as it finds a match, making it faster for large datasets. Understanding EXISTS helps you write efficient existence checks.",
          syntax: "SELECT column1 FROM table1 WHERE EXISTS (SELECT column2 FROM table2 WHERE condition);",
          examples: [
            {
              title: "EXISTS Examples",
              description: "Using EXISTS to check for record existence",
              code: `-- Find customers who have placed orders
SELECT customer_name
FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o 
  WHERE o.customer_id = c.customer_id
);

-- Find products that have been ordered
SELECT product_name
FROM products p
WHERE EXISTS (
  SELECT 1 FROM order_items oi 
  WHERE oi.product_id = p.product_id
);

-- NOT EXISTS
SELECT customer_name
FROM customers c
WHERE NOT EXISTS (
  SELECT 1 FROM orders o 
  WHERE o.customer_id = c.customer_id
);`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator tests for the existence of records in a subquery?",
              type: "fill",
              starterQuery: `SELECT * FROM customers WHERE ___ (SELECT 1 FROM orders WHERE orders.customer_id = customers.id);`,
              answer: "EXISTS",
            },
            {
              question: "What does EXISTS return if the subquery finds a match?",
              type: "predict",
              starterQuery: `TRUE`,
              answer: "TRUE if the subquery returns one or more records",
            },
            {
              question: "Why is EXISTS often more efficient than IN?",
              type: "predict",
              starterQuery: `It stops as soon as it finds a match`,
              answer: "It stops as soon as it finds a match, making it faster",
            },
          ],
        },
        {
          id: "sql-any-all",
          title: "SQL Any, All",
          explanation: "The ANY and ALL operators are used with WHERE or HAVING clauses. ANY returns TRUE if any of the subquery values meet the condition. ALL returns TRUE if all of the subquery values meet the condition. ANY and ALL are useful for comparing a value to a set of values from a subquery. Understanding ANY and ALL helps you write complex comparison queries.",
          syntax: "SELECT column1 FROM table1 WHERE column1 operator ANY (SELECT column2 FROM table2);\nSELECT column1 FROM table1 WHERE column1 operator ALL (SELECT column2 FROM table2);",
          examples: [
            {
              title: "ANY and ALL Examples",
              description: "Using ANY and ALL operators",
              code: `-- ANY: Find products with price greater than any product in category 1
SELECT product_name, price
FROM products
WHERE price > ANY (
  SELECT price FROM products WHERE category_id = 1
);

-- ALL: Find products with price greater than all products in category 1
SELECT product_name, price
FROM products
WHERE price > ALL (
  SELECT price FROM products WHERE category_id = 1
);

-- ANY with equals
SELECT customer_name
FROM customers
WHERE customer_id = ANY (
  SELECT customer_id FROM orders WHERE total_amount > 1000
);`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator returns TRUE if any subquery value meets the condition?",
              type: "fill",
              starterQuery: `SELECT * FROM products WHERE price > ___ (SELECT price FROM products WHERE category = 'A');`,
              answer: "ANY",
            },
            {
              question: "What operator returns TRUE if all subquery values meet the condition?",
              type: "fill",
              starterQuery: `SELECT * FROM products WHERE price > ___ (SELECT price FROM products WHERE category = 'A');`,
              answer: "ALL",
            },
            {
              question: "What is the difference between ANY and ALL?",
              type: "predict",
              starterQuery: `ANY checks if any value meets condition, ALL checks if all values meet condition`,
              answer: "ANY returns TRUE if any value meets the condition, ALL returns TRUE if all values meet the condition",
            },
          ],
        },
      ],
    },
    {
      id: "database-tables",
      title: "SQL Database & Tables",
      topics: [
        {
          id: "sql-create-db",
          title: "SQL Create DB",
          explanation: "The CREATE DATABASE statement is used to create a new SQL database. Creating a database is the first step in setting up a database system. The database name must be unique within the database server. After creating a database, you need to select it before creating tables. Understanding CREATE DATABASE is fundamental for database administration.",
          syntax: "CREATE DATABASE database_name;",
          examples: [
            {
              title: "CREATE DATABASE Examples",
              description: "Creating new databases",
              code: `-- Create a new database
CREATE DATABASE my_database;

-- Create database with character set
CREATE DATABASE my_database
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Create database if not exists (MySQL)
CREATE DATABASE IF NOT EXISTS my_database;

-- Select the database
USE my_database;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement creates a new database?",
              type: "fill",
              starterQuery: `___ DATABASE my_database;`,
              answer: "CREATE",
            },
            {
              question: "What must the database name be?",
              type: "predict",
              starterQuery: `Unique within the database server`,
              answer: "Unique within the database server",
            },
            {
              question: "What statement selects a database to use?",
              type: "fill",
              starterQuery: `___ my_database;`,
              answer: "USE",
            },
          ],
        },
        {
          id: "sql-drop-db",
          title: "SQL Drop DB",
          explanation: "The DROP DATABASE statement is used to delete an existing SQL database. DROP DATABASE permanently removes the database and all its data. This operation cannot be undone, so use it with caution. Some databases require you to be connected to a different database before dropping one. Understanding DROP DATABASE is important for database management.",
          syntax: "DROP DATABASE database_name;",
          examples: [
            {
              title: "DROP DATABASE Examples",
              description: "Deleting databases",
              code: `-- Drop a database
DROP DATABASE old_database;

-- Drop database if exists (MySQL)
DROP DATABASE IF EXISTS old_database;

-- Warning: This permanently deletes the database
-- Make sure to backup important data first

-- Drop and recreate
DROP DATABASE IF EXISTS my_database;
CREATE DATABASE my_database;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement deletes a database?",
              type: "fill",
              starterQuery: `___ DATABASE old_database;`,
              answer: "DROP",
            },
            {
              question: "Can DROP DATABASE be undone?",
              type: "predict",
              starterQuery: `No, it permanently deletes the database`,
              answer: "No, it permanently deletes the database and all data",
            },
            {
              question: "What should you do before dropping a database?",
              type: "predict",
              starterQuery: `Backup important data`,
              answer: "Backup important data first",
            },
          ],
        },
        {
          id: "sql-backup-db",
          title: "SQL Backup DB",
          explanation: "Database backup is the process of creating a copy of your database to protect against data loss. Different database systems have different backup methods. Common backup methods include full backups, incremental backups, and transaction log backups. Backups are essential for disaster recovery and data protection. Understanding backup procedures is crucial for database administration.",
          syntax: "Backup syntax varies by database system:\nMySQL: mysqldump database_name > backup.sql\nSQL Server: BACKUP DATABASE database_name TO disk = 'path'\nPostgreSQL: pg_dump database_name > backup.sql",
          examples: [
            {
              title: "Database Backup Examples",
              description: "Backing up databases",
              code: `-- MySQL backup (command line)
mysqldump -u username -p database_name > backup.sql

-- MySQL restore
mysql -u username -p database_name < backup.sql

-- SQL Server backup
BACKUP DATABASE my_database
TO DISK = 'C:\\backup\\my_database.bak';

-- PostgreSQL backup (command line)
pg_dump -U username database_name > backup.sql

-- PostgreSQL restore
psql -U username database_name < backup.sql`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the purpose of database backup?",
              type: "predict",
              starterQuery: `To protect against data loss`,
              answer: "To create a copy of the database for data protection",
            },
            {
              question: "What MySQL command creates a backup?",
              type: "fill",
              starterQuery: `mysql___ -u user -p database > backup.sql`,
              answer: "dump",
            },
            {
              question: "Are backup methods the same for all databases?",
              type: "predict",
              starterQuery: `No, they vary by database system`,
              answer: "No, backup methods vary by database system",
            },
          ],
        },
        {
          id: "sql-create-table",
          title: "SQL Create Table",
          explanation: "The CREATE TABLE statement is used to create a new table in a database. A table consists of columns and rows. Each column has a name and data type. You can specify constraints like PRIMARY KEY, NOT NULL, and UNIQUE when creating a table. CREATE TABLE is fundamental for database design. Understanding CREATE TABLE is essential for building database structures.",
          syntax: "CREATE TABLE table_name (column1 datatype, column2 datatype, ...);",
          examples: [
            {
              title: "CREATE TABLE Examples",
              description: "Creating tables",
              code: `-- Simple table
CREATE TABLE customers (
  customer_id INT,
  customer_name VARCHAR(100),
  email VARCHAR(100)
);

-- Table with constraints
CREATE TABLE products (
  product_id INT PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2),
  stock INT DEFAULT 0
);

-- Table with foreign key
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement creates a new table?",
              type: "fill",
              starterQuery: `___ TABLE customers (id INT, name VARCHAR(50));`,
              answer: "CREATE",
            },
            {
              question: "What does each column need?",
              type: "predict",
              starterQuery: `A name and data type`,
              answer: "A name and data type",
            },
            {
              question: "Complete the CREATE TABLE statement",
              type: "fill",
              starterQuery: `CREATE TABLE products (product_id INT, product_name VARCHAR(100), price DECIMAL(10, 2)___);`,
              answer: ")",
            },
          ],
        },
        {
          id: "sql-drop-table",
          title: "SQL Drop Table",
          explanation: "The DROP TABLE statement is used to delete an existing table from a database. DROP TABLE permanently removes the table structure and all its data. This operation cannot be undone. If the table has foreign key constraints, you may need to drop those first or use CASCADE. Understanding DROP TABLE is important for database maintenance.",
          syntax: "DROP TABLE table_name;\nDROP TABLE IF EXISTS table_name;",
          examples: [
            {
              title: "DROP TABLE Examples",
              description: "Deleting tables",
              code: `-- Drop a table
DROP TABLE old_table;

-- Drop table if exists
DROP TABLE IF EXISTS temp_table;

-- Drop multiple tables
DROP TABLE table1, table2, table3;

-- Drop table with CASCADE (removes dependent objects)
DROP TABLE customers CASCADE;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement deletes a table?",
              type: "fill",
              starterQuery: `___ TABLE old_table;`,
              answer: "DROP",
            },
            {
              question: "Can DROP TABLE be undone?",
              type: "predict",
              starterQuery: `No, it permanently deletes the table`,
              answer: "No, it permanently deletes the table and all data",
            },
            {
              question: "What should you check before dropping a table with foreign keys?",
              type: "predict",
              starterQuery: `Dependent objects or use CASCADE`,
              answer: "Check for dependent objects or use CASCADE",
            },
          ],
        },
        {
          id: "sql-alter-table",
          title: "SQL Alter Table",
          explanation: "The ALTER TABLE statement is used to add, delete, or modify columns in an existing table. ALTER TABLE can also be used to add or drop constraints. ALTER TABLE allows you to change the table structure without losing data. Common operations include adding columns, dropping columns, modifying column data types, and renaming columns. Understanding ALTER TABLE is essential for database maintenance.",
          syntax: "ALTER TABLE table_name ADD column_name datatype;\nALTER TABLE table_name DROP COLUMN column_name;\nALTER TABLE table_name ALTER COLUMN column_name datatype;",
          examples: [
            {
              title: "ALTER TABLE Examples",
              description: "Modifying table structure",
              code: `-- Add a column
ALTER TABLE customers
ADD phone VARCHAR(20);

-- Drop a column
ALTER TABLE customers
DROP COLUMN phone;

-- Modify column data type
ALTER TABLE products
ALTER COLUMN price DECIMAL(12, 2);

-- Rename column (SQL Server)
EXEC sp_rename 'customers.customer_name', 'name', 'COLUMN';

-- Add constraint
ALTER TABLE products
ADD CONSTRAINT chk_price CHECK (price > 0);`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement modifies an existing table?",
              type: "fill",
              starterQuery: `___ TABLE customers ADD phone VARCHAR(20);`,
              answer: "ALTER",
            },
            {
              question: "What can ALTER TABLE do?",
              type: "predict",
              starterQuery: `Add, delete, or modify columns and constraints`,
              answer: "Add, delete, or modify columns and constraints",
            },
            {
              question: "Complete the ALTER TABLE to add a column",
              type: "fill",
              starterQuery: `ALTER TABLE customers ___ phone VARCHAR(20);`,
              answer: "ADD",
            },
          ],
        },
        {
          id: "sql-data-types",
          title: "SQL Data Types",
          explanation: "SQL data types define what kind of data can be stored in a column. Common data types include INT for integers, VARCHAR for variable-length strings, DECIMAL for precise numbers, DATE for dates, and BOOLEAN for true/false values. Different database systems may have slightly different data types. Choosing the right data type is important for data integrity and storage efficiency. Understanding data types is fundamental for database design.",
          syntax: "Common types: INT, VARCHAR(n), DECIMAL(p,s), DATE, DATETIME, BOOLEAN, TEXT, BLOB",
          examples: [
            {
              title: "SQL Data Types Examples",
              description: "Using different data types",
              code: `-- Integer types
CREATE TABLE products (
  product_id INT,
  stock SMALLINT,
  price DECIMAL(10, 2)
);

-- String types
CREATE TABLE customers (
  customer_name VARCHAR(100),
  email VARCHAR(255),
  notes TEXT
);

-- Date and time types
CREATE TABLE orders (
  order_id INT,
  order_date DATE,
  created_at DATETIME,
  updated_at TIMESTAMP
);

-- Boolean type
CREATE TABLE users (
  user_id INT,
  username VARCHAR(50),
  is_active BOOLEAN
);`,
            },
          ],
          practiceQuestions: [
            {
              question: "What data type stores whole numbers?",
              type: "fill",
              starterQuery: `CREATE TABLE products (id ___, name VARCHAR(50));`,
              answer: "INT",
            },
            {
              question: "What data type stores variable-length strings?",
              type: "fill",
              starterQuery: `CREATE TABLE customers (name ___ VARCHAR(100));`,
              answer: "VARCHAR",
            },
            {
              question: "What data type stores precise decimal numbers?",
              type: "fill",
              starterQuery: `CREATE TABLE products (price ___ DECIMAL(10, 2));`,
              answer: "DECIMAL",
            },
          ],
        },
        {
          id: "sql-dates",
          title: "SQL Dates",
          explanation: "SQL provides several data types for storing dates and times. Common date types include DATE for dates only, TIME for time only, DATETIME for date and time, and TIMESTAMP for automatic date/time tracking. SQL also provides functions to work with dates like GETDATE(), NOW(), DATEADD(), and DATEDIFF(). Understanding date types and functions is essential for working with temporal data.",
          syntax: "Date types: DATE, TIME, DATETIME, TIMESTAMP\nDate functions: GETDATE(), NOW(), DATEADD(), DATEDIFF()",
          examples: [
            {
              title: "SQL Dates Examples",
              description: "Working with dates in SQL",
              code: `-- Date types
CREATE TABLE orders (
  order_id INT,
  order_date DATE,
  order_time TIME,
  created_at DATETIME
);

-- Get current date/time
SELECT GETDATE(); -- SQL Server
SELECT NOW(); -- MySQL, PostgreSQL

-- Date arithmetic
SELECT DATEADD(day, 30, order_date) AS due_date
FROM orders;

-- Date difference
SELECT DATEDIFF(day, order_date, GETDATE()) AS days_ago
FROM orders;

-- Format dates
SELECT FORMAT(order_date, 'yyyy-MM-dd') AS formatted_date
FROM orders;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What data type stores date and time?",
              type: "fill",
              starterQuery: `CREATE TABLE orders (order_date ___, total DECIMAL(10,2));`,
              answer: "DATETIME",
            },
            {
              question: "What function gets the current date and time in MySQL?",
              type: "fill",
              starterQuery: `SELECT ___( ) AS current_time;`,
              answer: "NOW",
            },
            {
              question: "What does DATEADD do?",
              type: "predict",
              starterQuery: `Adds a time interval to a date`,
              answer: "Adds a specified time interval to a date",
            },
          ],
        },
        {
          id: "sql-views",
          title: "SQL Views",
          explanation: "A VIEW is a virtual table based on the result of a SQL statement. A view contains rows and columns like a real table, but the data comes from one or more underlying tables. Views can simplify complex queries, provide security by limiting access to specific columns, and present data in a different format. Views are updated automatically when the underlying tables change. Understanding views is important for database design and security.",
          syntax: "CREATE VIEW view_name AS SELECT column1, column2 FROM table_name WHERE condition;",
          examples: [
            {
              title: "SQL Views Examples",
              description: "Creating and using views",
              code: `-- Create a simple view
CREATE VIEW active_customers AS
SELECT customer_name, email, country
FROM customers
WHERE active = 1;

-- Use the view
SELECT * FROM active_customers;

-- Create view with JOIN
CREATE VIEW order_summary AS
SELECT 
  c.customer_name,
  o.order_date,
  o.total_amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id;

-- Drop a view
DROP VIEW active_customers;

-- Update a view
CREATE OR REPLACE VIEW active_customers AS
SELECT customer_name, email, country, phone
FROM customers
WHERE active = 1;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is a virtual table based on a SQL statement?",
              type: "fill",
              starterQuery: `CREATE ___ active_customers AS SELECT * FROM customers WHERE active = 1;`,
              answer: "VIEW",
            },
            {
              question: "Where does view data come from?",
              type: "predict",
              starterQuery: `From underlying tables`,
              answer: "From one or more underlying tables",
            },
            {
              question: "What are views useful for?",
              type: "predict",
              starterQuery: `Simplifying queries, security, presenting data differently`,
              answer: "Simplifying complex queries, providing security, and presenting data in different formats",
            },
          ],
        },
      ],
    },
    {
      id: "constraints-keys",
      title: "SQL Constraints & Keys",
      topics: [
        {
          id: "sql-constraints",
          title: "SQL Constraints",
          explanation: "SQL constraints are rules enforced on data columns to ensure data integrity and accuracy. Constraints limit the type of data that can go into a table. Common constraints include NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, and DEFAULT. Constraints can be specified when creating a table or added later with ALTER TABLE. Understanding constraints is essential for maintaining data quality.",
          syntax: "Constraints can be specified in CREATE TABLE or added with ALTER TABLE:\nNOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT",
          examples: [
            {
              title: "SQL Constraints Examples",
              description: "Using constraints in table creation",
              code: `-- Table with multiple constraints
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  customer_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  age INT CHECK (age >= 18),
  country VARCHAR(50) DEFAULT 'USA',
  created_at DATETIME DEFAULT GETDATE()
);

-- Add constraint with ALTER TABLE
ALTER TABLE products
ADD CONSTRAINT chk_price CHECK (price > 0);

-- Foreign key constraint
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);`,
            },
          ],
          practiceQuestions: [
            {
              question: "What are rules enforced on data columns called?",
              type: "fill",
              starterQuery: `SQL ___ ensure data integrity`,
              answer: "constraints",
            },
            {
              question: "What do constraints limit?",
              type: "predict",
              starterQuery: `The type of data that can go into a table`,
              answer: "The type of data that can go into a table",
            },
            {
              question: "When can constraints be specified?",
              type: "predict",
              starterQuery: `When creating a table or added later with ALTER TABLE`,
              answer: "When creating a table or added later with ALTER TABLE",
            },
          ],
        },
        {
          id: "sql-not-null",
          title: "SQL Not Null",
          explanation: "The NOT NULL constraint ensures that a column cannot have a NULL value. NOT NULL forces a field to always contain a value, which means you cannot insert a new record or update a record without adding a value to this field. NOT NULL is essential for ensuring required data is always present. Understanding NOT NULL helps maintain data completeness.",
          syntax: "CREATE TABLE table_name (column_name datatype NOT NULL);",
          examples: [
            {
              title: "NOT NULL Examples",
              description: "Using NOT NULL constraint",
              code: `-- Column with NOT NULL
CREATE TABLE customers (
  customer_id INT,
  customer_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

-- Add NOT NULL to existing column
ALTER TABLE customers
ALTER COLUMN customer_name VARCHAR(100) NOT NULL;

-- Insert will fail if NOT NULL column is missing
INSERT INTO customers (customer_id) VALUES (1);
-- Error: Cannot insert NULL into customer_name

-- Correct insert
INSERT INTO customers (customer_id, customer_name, email)
VALUES (1, 'John Doe', 'john@example.com');`,
            },
          ],
          practiceQuestions: [
            {
              question: "What constraint ensures a column cannot be NULL?",
              type: "fill",
              starterQuery: `CREATE TABLE customers (name VARCHAR(100) ___ NULL);`,
              answer: "NOT",
            },
            {
              question: "What happens if you try to insert NULL into a NOT NULL column?",
              type: "predict",
              starterQuery: `The insert will fail with an error`,
              answer: "The insert will fail with an error",
            },
            {
              question: "What does NOT NULL ensure?",
              type: "predict",
              starterQuery: `The column always contains a value`,
              answer: "The column always contains a value",
            },
          ],
        },
        {
          id: "sql-unique",
          title: "SQL Unique",
          explanation: "The UNIQUE constraint ensures that all values in a column are different. UNIQUE prevents duplicate values in a column. A table can have multiple UNIQUE constraints. UNIQUE allows NULL values (but only one NULL in most databases). UNIQUE is useful for ensuring data uniqueness like email addresses or usernames. Understanding UNIQUE helps maintain data integrity.",
          syntax: "CREATE TABLE table_name (column_name datatype UNIQUE);\nALTER TABLE table_name ADD CONSTRAINT constraint_name UNIQUE (column_name);",
          examples: [
            {
              title: "UNIQUE Examples",
              description: "Using UNIQUE constraint",
              code: `-- Column with UNIQUE constraint
CREATE TABLE users (
  user_id INT,
  username VARCHAR(50) UNIQUE,
  email VARCHAR(100) UNIQUE
);

-- Add UNIQUE constraint
ALTER TABLE customers
ADD CONSTRAINT uq_email UNIQUE (email);

-- Multiple columns UNIQUE
CREATE TABLE order_items (
  order_id INT,
  product_id INT,
  UNIQUE (order_id, product_id)
);

-- Insert duplicate will fail
INSERT INTO users (username) VALUES ('john');
INSERT INTO users (username) VALUES ('john');
-- Error: Duplicate entry`,
            },
          ],
          practiceQuestions: [
            {
              question: "What constraint ensures all values in a column are different?",
              type: "fill",
              starterQuery: `CREATE TABLE users (email VARCHAR(100) ___);`,
              answer: "UNIQUE",
            },
            {
              question: "Does UNIQUE allow NULL values?",
              type: "predict",
              starterQuery: `Yes, but typically only one NULL`,
              answer: "Yes, but typically only one NULL value",
            },
            {
              question: "What does UNIQUE prevent?",
              type: "predict",
              starterQuery: `Duplicate values in a column`,
              answer: "Duplicate values in a column",
            },
          ],
        },
        {
          id: "sql-primary-key",
          title: "SQL Primary Key",
          explanation: "The PRIMARY KEY constraint uniquely identifies each record in a table. A primary key must contain UNIQUE values and cannot contain NULL values. A table can have only one primary key, which may consist of single or multiple columns. Primary keys are used to create relationships between tables. Understanding PRIMARY KEY is fundamental for database design.",
          syntax: "CREATE TABLE table_name (column_name datatype PRIMARY KEY);\nCREATE TABLE table_name (column1 datatype, column2 datatype, PRIMARY KEY (column1, column2));",
          examples: [
            {
              title: "PRIMARY KEY Examples",
              description: "Using PRIMARY KEY constraint",
              code: `-- Single column primary key
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  customer_name VARCHAR(100)
);

-- Primary key with constraint name
CREATE TABLE products (
  product_id INT,
  product_name VARCHAR(100),
  CONSTRAINT pk_products PRIMARY KEY (product_id)
);

-- Composite primary key
CREATE TABLE order_items (
  order_id INT,
  product_id INT,
  quantity INT,
  PRIMARY KEY (order_id, product_id)
);

-- Add primary key to existing table
ALTER TABLE customers
ADD PRIMARY KEY (customer_id);`,
            },
          ],
          practiceQuestions: [
            {
              question: "What constraint uniquely identifies each record?",
              type: "fill",
              starterQuery: `CREATE TABLE customers (id INT ___ KEY);`,
              answer: "PRIMARY",
            },
            {
              question: "Can a primary key contain NULL values?",
              type: "predict",
              starterQuery: `No, primary keys cannot contain NULL`,
              answer: "No, primary keys cannot contain NULL values",
            },
            {
              question: "How many primary keys can a table have?",
              type: "predict",
              starterQuery: `One primary key, but it can consist of multiple columns`,
              answer: "One primary key, which may consist of single or multiple columns",
            },
          ],
        },
        {
          id: "sql-foreign-key",
          title: "SQL Foreign Key",
          explanation: "A FOREIGN KEY is a column or group of columns that references the PRIMARY KEY of another table. Foreign keys maintain referential integrity between tables. Foreign keys prevent actions that would destroy links between tables. Foreign keys can reference columns in the same table (self-referencing). Understanding FOREIGN KEY is essential for relational database design.",
          syntax: "CREATE TABLE table1 (column1 datatype, column2 datatype, FOREIGN KEY (column1) REFERENCES table2(column2));",
          examples: [
            {
              title: "FOREIGN KEY Examples",
              description: "Using FOREIGN KEY constraints",
              code: `-- Foreign key in table creation
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Named foreign key constraint
CREATE TABLE order_items (
  item_id INT PRIMARY KEY,
  order_id INT,
  product_id INT,
  CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES orders(order_id),
  CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Add foreign key with ALTER TABLE
ALTER TABLE orders
ADD CONSTRAINT fk_customer 
FOREIGN KEY (customer_id) REFERENCES customers(customer_id);

-- Self-referencing foreign key
CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  employee_name VARCHAR(100),
  manager_id INT,
  FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);`,
            },
          ],
          practiceQuestions: [
            {
              question: "What constraint references the PRIMARY KEY of another table?",
              type: "fill",
              starterQuery: `CREATE TABLE orders (order_id INT, customer_id INT, ___ KEY (customer_id) REFERENCES customers(id));`,
              answer: "FOREIGN",
            },
            {
              question: "What do foreign keys maintain?",
              type: "predict",
              starterQuery: `Referential integrity between tables`,
              answer: "Referential integrity between tables",
            },
            {
              question: "Can a foreign key reference the same table?",
              type: "predict",
              starterQuery: `Yes, this is called self-referencing`,
              answer: "Yes, this is called a self-referencing foreign key",
            },
          ],
        },
        {
          id: "sql-check",
          title: "SQL Check",
          explanation: "The CHECK constraint limits the value range that can be placed in a column. CHECK ensures that all values in a column satisfy a specific condition. CHECK can be applied to a single column or multiple columns. CHECK constraints are useful for data validation. Understanding CHECK helps enforce business rules at the database level.",
          syntax: "CREATE TABLE table_name (column_name datatype CHECK (condition));\nALTER TABLE table_name ADD CONSTRAINT constraint_name CHECK (condition);",
          examples: [
            {
              title: "CHECK Examples",
              description: "Using CHECK constraints",
              code: `-- Single column CHECK
CREATE TABLE products (
  product_id INT,
  product_name VARCHAR(100),
  price DECIMAL(10, 2) CHECK (price > 0),
  stock INT CHECK (stock >= 0)
);

-- Named CHECK constraint
CREATE TABLE employees (
  employee_id INT,
  salary DECIMAL(10, 2),
  CONSTRAINT chk_salary CHECK (salary > 0)
);

-- Multiple column CHECK
CREATE TABLE orders (
  order_id INT,
  order_date DATE,
  delivery_date DATE,
  CHECK (delivery_date >= order_date)
);

-- Add CHECK with ALTER TABLE
ALTER TABLE products
ADD CONSTRAINT chk_price CHECK (price > 0 AND price < 10000);`,
            },
          ],
          practiceQuestions: [
            {
              question: "What constraint limits the value range in a column?",
              type: "fill",
              starterQuery: `CREATE TABLE products (price DECIMAL(10,2) ___ (price > 0));`,
              answer: "CHECK",
            },
            {
              question: "What does CHECK ensure?",
              type: "predict",
              starterQuery: `All values satisfy a specific condition`,
              answer: "All values in a column satisfy a specific condition",
            },
            {
              question: "Can CHECK be applied to multiple columns?",
              type: "predict",
              starterQuery: `Yes, CHECK can validate multiple columns`,
              answer: "Yes, CHECK can be applied to multiple columns",
            },
          ],
        },
        {
          id: "sql-default",
          title: "SQL Default",
          explanation: "The DEFAULT constraint provides a default value for a column when no value is specified. DEFAULT is used to insert a default value into all new records if no other value is provided. DEFAULT values can be constants, functions, or expressions. DEFAULT is useful for setting standard values. Understanding DEFAULT helps simplify data insertion.",
          syntax: "CREATE TABLE table_name (column_name datatype DEFAULT default_value);",
          examples: [
            {
              title: "DEFAULT Examples",
              description: "Using DEFAULT constraints",
              code: `-- Column with DEFAULT value
CREATE TABLE customers (
  customer_id INT,
  customer_name VARCHAR(100),
  country VARCHAR(50) DEFAULT 'USA',
  created_at DATETIME DEFAULT GETDATE()
);

-- DEFAULT with function
CREATE TABLE orders (
  order_id INT,
  order_date DATE DEFAULT CURRENT_DATE,
  status VARCHAR(20) DEFAULT 'pending'
);

-- Insert without specifying default column
INSERT INTO customers (customer_id, customer_name)
VALUES (1, 'John Doe');
-- country will be 'USA', created_at will be current date/time

-- Override default value
INSERT INTO customers (customer_id, customer_name, country)
VALUES (2, 'Jane Smith', 'Canada');`,
            },
          ],
          practiceQuestions: [
            {
              question: "What constraint provides a default value for a column?",
              type: "fill",
              starterQuery: `CREATE TABLE customers (country VARCHAR(50) ___ 'USA');`,
              answer: "DEFAULT",
            },
            {
              question: "When is the DEFAULT value used?",
              type: "predict",
              starterQuery: `When no value is specified during insert`,
              answer: "When no value is specified during insert",
            },
            {
              question: "What can DEFAULT values be?",
              type: "predict",
              starterQuery: `Constants, functions, or expressions`,
              answer: "Constants, functions, or expressions",
            },
          ],
        },
        {
          id: "sql-index",
          title: "SQL Index",
          explanation: "An INDEX is used to speed up the retrieval of data from a database table. Indexes are created on columns that are frequently used in WHERE clauses or JOIN conditions. Indexes can significantly improve query performance but take up additional storage space. Too many indexes can slow down INSERT, UPDATE, and DELETE operations. Understanding indexes is important for database optimization.",
          syntax: "CREATE INDEX index_name ON table_name (column_name);\nCREATE UNIQUE INDEX index_name ON table_name (column_name);",
          examples: [
            {
              title: "INDEX Examples",
              description: "Creating and using indexes",
              code: `-- Create index on single column
CREATE INDEX idx_customer_name 
ON customers (customer_name);

-- Create unique index
CREATE UNIQUE INDEX idx_email 
ON customers (email);

-- Create index on multiple columns
CREATE INDEX idx_name_country 
ON customers (customer_name, country);

-- Drop an index
DROP INDEX idx_customer_name ON customers;

-- Indexes are used automatically by the database
-- No need to reference them in queries
SELECT * FROM customers 
WHERE customer_name = 'John Doe';
-- Database will use idx_customer_name if it exists`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is used to speed up data retrieval?",
              type: "fill",
              starterQuery: `CREATE ___ idx_name ON customers (name);`,
              answer: "INDEX",
            },
            {
              question: "What do indexes improve?",
              type: "predict",
              starterQuery: `Query performance`,
              answer: "Query performance, especially for WHERE and JOIN operations",
            },
            {
              question: "What is a downside of too many indexes?",
              type: "predict",
              starterQuery: `They can slow down INSERT, UPDATE, and DELETE operations`,
              answer: "They can slow down INSERT, UPDATE, and DELETE operations",
            },
          ],
        },
        {
          id: "sql-auto-increment",
          title: "SQL Auto Increment",
          explanation: "AUTO INCREMENT allows a unique number to be generated automatically when a new record is inserted into a table. AUTO INCREMENT is often used for primary key columns. The starting value and increment can be specified. Different database systems use different syntax: MySQL uses AUTO_INCREMENT, SQL Server uses IDENTITY, and PostgreSQL uses SERIAL. Understanding AUTO INCREMENT helps with primary key management.",
          syntax: "MySQL: column_name INT AUTO_INCREMENT\nSQL Server: column_name INT IDENTITY(1,1)\nPostgreSQL: column_name SERIAL",
          examples: [
            {
              title: "AUTO INCREMENT Examples",
              description: "Using auto increment for primary keys",
              code: `-- MySQL AUTO_INCREMENT
CREATE TABLE customers (
  customer_id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(100)
);

-- SQL Server IDENTITY
CREATE TABLE products (
  product_id INT IDENTITY(1,1) PRIMARY KEY,
  product_name VARCHAR(100)
);

-- PostgreSQL SERIAL
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  order_date DATE
);

-- Insert without specifying auto increment column
INSERT INTO customers (customer_name)
VALUES ('John Doe');
-- customer_id will be automatically generated

-- Get the last auto increment value
SELECT LAST_INSERT_ID(); -- MySQL
SELECT SCOPE_IDENTITY(); -- SQL Server`,
            },
          ],
          practiceQuestions: [
            {
              question: "What generates a unique number automatically?",
              type: "fill",
              starterQuery: `CREATE TABLE customers (id INT ___ PRIMARY KEY);`,
              answer: "AUTO_INCREMENT",
            },
            {
              question: "What is AUTO INCREMENT commonly used for?",
              type: "predict",
              starterQuery: `Primary key columns`,
              answer: "Primary key columns",
            },
            {
              question: "Is the syntax for auto increment the same in all databases?",
              type: "predict",
              starterQuery: `No, different databases use different syntax`,
              answer: "No, MySQL uses AUTO_INCREMENT, SQL Server uses IDENTITY, PostgreSQL uses SERIAL",
            },
          ],
        },
      ],
    },
    {
      id: "advanced",
      title: "SQL Advanced",
      topics: [
        {
          id: "sql-stored-procedures",
          title: "SQL Stored Procedures",
          explanation: "A stored procedure is a prepared SQL code that you can save and reuse. Stored procedures can accept parameters and return values. Stored procedures are stored in the database and can be called by applications. Stored procedures improve performance by reducing network traffic and allowing code reuse. Stored procedures can contain control flow statements, loops, and error handling. Understanding stored procedures is important for advanced database programming.",
          syntax: "CREATE PROCEDURE procedure_name @parameter datatype AS BEGIN SQL statements END;\nEXEC procedure_name @parameter = value;",
          examples: [
            {
              title: "Stored Procedures Examples",
              description: "Creating and using stored procedures",
              code: `-- SQL Server: Create stored procedure
CREATE PROCEDURE GetCustomerOrders
  @CustomerID INT
AS
BEGIN
  SELECT * FROM orders 
  WHERE customer_id = @CustomerID
END;

-- Execute stored procedure
EXEC GetCustomerOrders @CustomerID = 1;

-- MySQL: Create stored procedure
DELIMITER //
CREATE PROCEDURE GetCustomerOrders(IN customer_id INT)
BEGIN
  SELECT * FROM orders 
  WHERE customer_id = customer_id;
END //
DELIMITER ;

-- Call stored procedure (MySQL)
CALL GetCustomerOrders(1);

-- Stored procedure with output parameter
CREATE PROCEDURE GetOrderCount
  @CustomerID INT,
  @OrderCount INT OUTPUT
AS
BEGIN
  SELECT @OrderCount = COUNT(*) 
  FROM orders 
  WHERE customer_id = @CustomerID
END;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is prepared SQL code that can be saved and reused?",
              type: "fill",
              starterQuery: `A stored ___ is reusable SQL code`,
              answer: "procedure",
            },
            {
              question: "What do stored procedures improve?",
              type: "predict",
              starterQuery: `Performance by reducing network traffic`,
              answer: "Performance by reducing network traffic and allowing code reuse",
            },
            {
              question: "How do you execute a stored procedure in SQL Server?",
              type: "fill",
              starterQuery: `___ GetCustomerOrders @CustomerID = 1;`,
              answer: "EXEC",
            },
          ],
        },
      ],
    },
    {
      id: "security-hosting",
      title: "SQL Security & Hosting",
      topics: [
        {
          id: "sql-injection",
          title: "SQL Injection",
          explanation: "SQL Injection is a code injection technique that exploits security vulnerabilities in database-driven applications. SQL injection occurs when user input is not properly validated or sanitized before being used in SQL queries. Attackers can inject malicious SQL code to manipulate database queries, access unauthorized data, or destroy data. Preventing SQL injection requires using parameterized queries, input validation, and prepared statements. Understanding SQL injection is crucial for database security.",
          syntax: "Prevention: Use parameterized queries and prepared statements\nVulnerable: SELECT * FROM users WHERE username = 'userInput'\nSafe: SELECT * FROM users WHERE username = ? (with parameter binding)",
          examples: [
            {
              title: "SQL Injection Examples",
              description: "Understanding and preventing SQL injection",
              code: `-- VULNERABLE CODE (DON'T DO THIS)
-- User input: admin' OR '1'='1
SELECT * FROM users 
WHERE username = 'admin' OR '1'='1' AND password = 'password';
-- This would bypass authentication!

-- SAFE CODE: Parameterized Query (SQL Server)
DECLARE @username NVARCHAR(50) = @input_parameter;
SELECT * FROM users 
WHERE username = @username;

-- SAFE CODE: Prepared Statement (MySQL)
PREPARE stmt FROM 'SELECT * FROM users WHERE username = ?';
SET @username = 'user_input_value';
EXECUTE stmt USING @username;

-- SAFE CODE: Using parameterized queries in application code
-- Example in Python with parameterized query
-- cursor.execute("SELECT * FROM users WHERE username = %s", (username,))

-- Input validation
-- Always validate and sanitize user input before using in queries`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is a code injection technique that exploits SQL vulnerabilities?",
              type: "fill",
              starterQuery: `SQL ___ is a security vulnerability`,
              answer: "injection",
            },
            {
              question: "How can SQL injection be prevented?",
              type: "predict",
              starterQuery: `Use parameterized queries and input validation`,
              answer: "Use parameterized queries, prepared statements, and input validation",
            },
            {
              question: "What happens when user input is not validated in SQL queries?",
              type: "predict",
              starterQuery: `Attackers can inject malicious SQL code`,
              answer: "Attackers can inject malicious SQL code to manipulate queries",
            },
          ],
        },
        {
          id: "sql-hosting",
          title: "SQL Hosting",
          explanation: "SQL hosting refers to services that provide database hosting and management. Database hosting can be on-premises (your own servers) or cloud-based (managed services). Popular cloud database hosting providers include AWS RDS, Google Cloud SQL, Azure SQL Database, and managed MySQL/PostgreSQL services. Hosting considerations include scalability, security, backup, performance, and cost. Understanding SQL hosting options helps you choose the right database solution for your needs.",
          syntax: "Hosting options vary by provider:\nCloud: AWS RDS, Google Cloud SQL, Azure SQL Database\nOn-premises: Self-managed database servers",
          examples: [
            {
              title: "SQL Hosting Examples",
              description: "Database hosting options and considerations",
              code: `-- Cloud Database Hosting Options:

-- AWS RDS (Amazon Relational Database Service)
-- Supports: MySQL, PostgreSQL, SQL Server, Oracle, MariaDB
-- Features: Automated backups, scaling, monitoring

-- Google Cloud SQL
-- Supports: MySQL, PostgreSQL, SQL Server
-- Features: High availability, automated backups

-- Azure SQL Database
-- Supports: SQL Server
-- Features: Built-in intelligence, automatic tuning

-- Managed PostgreSQL/MySQL Services
-- Providers: Heroku Postgres, DigitalOcean Managed Databases
-- Features: Easy setup, automatic updates

-- On-Premises Hosting
-- Self-managed database servers
-- Full control but requires maintenance

-- Considerations:
-- - Scalability needs
-- - Security requirements
-- - Backup and recovery
-- - Performance requirements
-- - Cost and budget`,
            },
          ],
          practiceQuestions: [
            {
              question: "What refers to services that provide database hosting?",
              type: "fill",
              starterQuery: `SQL ___ provides database hosting services`,
              answer: "hosting",
            },
            {
              question: "What are popular cloud database hosting providers?",
              type: "predict",
              starterQuery: `AWS RDS, Google Cloud SQL, Azure SQL Database`,
              answer: "AWS RDS, Google Cloud SQL, Azure SQL Database, and managed services",
            },
            {
              question: "What should you consider when choosing database hosting?",
              type: "predict",
              starterQuery: `Scalability, security, backup, performance, and cost`,
              answer: "Scalability, security, backup, performance, and cost",
            },
          ],
        },
      ],
    },
    {
      id: "reference",
      title: "SQL References",
      topics: [
        {
          id: "sql-keywords",
          title: "SQL Keywords",
          explanation: "SQL keywords are reserved words that have special meaning in SQL. Keywords cannot be used as identifiers (table names, column names) without quoting. Common SQL keywords include SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, ALTER, WHERE, JOIN, ORDER BY, GROUP BY, and many more. Understanding SQL keywords helps you write correct SQL statements and avoid naming conflicts.",
          syntax: "Common keywords: SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, ALTER, WHERE, JOIN, ORDER BY, GROUP BY, HAVING, DISTINCT, AND, OR, NOT, IN, LIKE, BETWEEN, IS NULL, AS, FROM, INTO, VALUES, SET",
          examples: [
            {
              title: "SQL Keywords Reference",
              description: "Common SQL keywords and their usage",
              code: `-- Data Query Keywords
SELECT, FROM, WHERE, ORDER BY, GROUP BY, HAVING, DISTINCT

-- Data Manipulation Keywords
INSERT, UPDATE, DELETE, VALUES, SET

-- Data Definition Keywords
CREATE, DROP, ALTER, TABLE, DATABASE, INDEX, VIEW

-- Join Keywords
JOIN, INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN, ON

-- Logical Operators
AND, OR, NOT, IN, LIKE, BETWEEN, IS NULL, EXISTS

-- Aggregate Functions
COUNT, SUM, AVG, MIN, MAX

-- Other Important Keywords
AS, CASE, WHEN, THEN, ELSE, END, UNION, UNION ALL

-- Note: Keywords are case-insensitive in most databases
-- But it's convention to write them in uppercase`,
            },
          ],
          practiceQuestions: [
            {
              question: "What are reserved words with special meaning in SQL called?",
              type: "fill",
              starterQuery: `SQL ___ are reserved words`,
              answer: "keywords",
            },
            {
              question: "Can keywords be used as table or column names?",
              type: "predict",
              starterQuery: `Not without quoting`,
              answer: "Not without quoting or escaping",
            },
            {
              question: "What is the convention for writing SQL keywords?",
              type: "predict",
              starterQuery: `Uppercase`,
              answer: "Uppercase, though they are case-insensitive",
            },
          ],
        },
        {
          id: "mysql-functions",
          title: "MySQL Functions",
          explanation: "MySQL provides a wide range of built-in functions for string manipulation, date/time operations, mathematical calculations, and data type conversion. Common MySQL functions include CONCAT() for string concatenation, DATE_FORMAT() for date formatting, NOW() for current date/time, IFNULL() for handling NULL values, and many more. Understanding MySQL functions helps you write efficient and powerful queries.",
          syntax: "String: CONCAT(), SUBSTRING(), LENGTH(), UPPER(), LOWER()\nDate: NOW(), CURDATE(), DATE_FORMAT(), DATE_ADD(), DATEDIFF()\nMath: ABS(), ROUND(), CEIL(), FLOOR(), MOD()\nNULL: IFNULL(), COALESCE()",
          examples: [
            {
              title: "MySQL Functions Examples",
              description: "Common MySQL functions",
              code: `-- String functions
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
SELECT UPPER(customer_name) FROM customers;
SELECT SUBSTRING(email, 1, 5) FROM customers;

-- Date functions
SELECT NOW() AS current_datetime;
SELECT CURDATE() AS current_date;
SELECT DATE_FORMAT(order_date, '%Y-%m-%d') FROM orders;
SELECT DATE_ADD(order_date, INTERVAL 30 DAY) FROM orders;

-- Math functions
SELECT ROUND(price, 2) FROM products;
SELECT ABS(-10) AS absolute_value;
SELECT CEIL(4.2) AS ceiling_value;

-- NULL functions
SELECT IFNULL(phone, 'No phone') FROM customers;
SELECT COALESCE(email, phone, 'No contact') FROM customers;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What MySQL function concatenates strings?",
              type: "fill",
              starterQuery: `SELECT ___(first_name, ' ', last_name) FROM users;`,
              answer: "CONCAT",
            },
            {
              question: "What MySQL function gets the current date and time?",
              type: "fill",
              starterQuery: `SELECT ___( ) AS current_time;`,
              answer: "NOW",
            },
            {
              question: "What MySQL function handles NULL values?",
              type: "fill",
              starterQuery: `SELECT ___(phone, 'No phone') FROM customers;`,
              answer: "IFNULL",
            },
          ],
        },
        {
          id: "sql-server-functions",
          title: "SQL Server Functions",
          explanation: "SQL Server provides extensive built-in functions for string manipulation, date/time operations, mathematical calculations, and system functions. Common SQL Server functions include CONCAT() for string concatenation, FORMAT() for formatting, GETDATE() for current date/time, ISNULL() for handling NULL values, and many more. Understanding SQL Server functions helps you write efficient queries and leverage SQL Server's capabilities.",
          syntax: "String: CONCAT(), SUBSTRING(), LEN(), UPPER(), LOWER(), REPLACE()\nDate: GETDATE(), DATEADD(), DATEDIFF(), FORMAT(), YEAR(), MONTH(), DAY()\nMath: ABS(), ROUND(), CEILING(), FLOOR(), POWER()\nNULL: ISNULL(), COALESCE()",
          examples: [
            {
              title: "SQL Server Functions Examples",
              description: "Common SQL Server functions",
              code: `-- String functions
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
SELECT UPPER(customer_name) FROM customers;
SELECT SUBSTRING(email, 1, 5) FROM customers;
SELECT LEN(customer_name) FROM customers;

-- Date functions
SELECT GETDATE() AS current_datetime;
SELECT DATEADD(day, 30, order_date) FROM orders;
SELECT DATEDIFF(day, order_date, GETDATE()) FROM orders;
SELECT FORMAT(order_date, 'yyyy-MM-dd') FROM orders;

-- Math functions
SELECT ROUND(price, 2) FROM products;
SELECT ABS(-10) AS absolute_value;
SELECT CEILING(4.2) AS ceiling_value;
SELECT POWER(2, 3) AS power_result;

-- NULL functions
SELECT ISNULL(phone, 'No phone') FROM customers;
SELECT COALESCE(email, phone, 'No contact') FROM customers;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What SQL Server function gets the current date and time?",
              type: "fill",
              starterQuery: `SELECT ___( ) AS current_time;`,
              answer: "GETDATE",
            },
            {
              question: "What SQL Server function handles NULL values?",
              type: "fill",
              starterQuery: `SELECT ___(phone, 'No phone') FROM customers;`,
              answer: "ISNULL",
            },
            {
              question: "What SQL Server function gets the length of a string?",
              type: "fill",
              starterQuery: `SELECT ___(customer_name) FROM customers;`,
              answer: "LEN",
            },
          ],
        },
        {
          id: "ms-access-functions",
          title: "MS Access Functions",
          explanation: "Microsoft Access provides built-in functions for working with data in Access databases. MS Access functions include string functions, date/time functions, mathematical functions, and domain aggregate functions. Common MS Access functions include IIF() for conditional logic, DLookup() for domain lookups, Date() for current date, and Format() for formatting. Understanding MS Access functions helps you work effectively with Access databases.",
          syntax: "String: Left(), Right(), Mid(), Len(), UCase(), LCase()\nDate: Date(), Now(), DateAdd(), DateDiff(), Year(), Month(), Day()\nMath: Abs(), Round(), Int(), Sqr()\nConditional: IIF(), Switch()\nDomain: DLookup(), DCount(), DSum(), DAvg()",
          examples: [
            {
              title: "MS Access Functions Examples",
              description: "Common MS Access functions",
              code: `-- String functions
SELECT Left(customer_name, 5) FROM customers;
SELECT Right(email, 10) FROM customers;
SELECT Mid(phone, 1, 3) FROM customers;
SELECT UCase(customer_name) FROM customers;

-- Date functions
SELECT Date() AS current_date;
SELECT Now() AS current_datetime;
SELECT DateAdd("d", 30, order_date) FROM orders;
SELECT DateDiff("d", order_date, Date()) FROM orders;

-- Math functions
SELECT Round(price, 2) FROM products;
SELECT Abs(-10) AS absolute_value;
SELECT Int(4.7) AS integer_value;

-- Conditional functions
SELECT IIF(price > 100, "Expensive", "Affordable") FROM products;
SELECT Switch(price > 100, "High", price > 50, "Medium", True, "Low") FROM products;

-- Domain aggregate functions
SELECT DLookup("customer_name", "customers", "customer_id = 1") AS name;
SELECT DCount("*", "orders", "customer_id = 1") AS order_count;`,
            },
          ],
          practiceQuestions: [
            {
              question: "What MS Access function performs conditional logic?",
              type: "fill",
              starterQuery: `SELECT ___(price > 100, "Expensive", "Affordable") FROM products;`,
              answer: "IIF",
            },
            {
              question: "What MS Access function gets the current date?",
              type: "fill",
              starterQuery: `SELECT ___( ) AS current_date;`,
              answer: "Date",
            },
            {
              question: "What MS Access function performs domain lookups?",
              type: "fill",
              starterQuery: `SELECT _____("customer_name", "customers", "id = 1");`,
              answer: "DLookup",
            },
          ],
        },
        {
          id: "sql-quick-reference",
          title: "SQL Quick Reference",
          explanation: "A SQL quick reference provides a concise guide to common SQL statements, clauses, operators, and functions. Quick references are useful for quickly looking up syntax and remembering SQL commands. A good quick reference includes SELECT statements, data manipulation commands, data definition commands, constraints, joins, and common functions. Understanding SQL quick references helps you write SQL more efficiently.",
          syntax: "Quick reference includes:\nSELECT, INSERT, UPDATE, DELETE\nCREATE, DROP, ALTER\nWHERE, ORDER BY, GROUP BY, HAVING\nJOIN types, operators, functions",
          examples: [
            {
              title: "SQL Quick Reference Guide",
              description: "Essential SQL commands and syntax",
              code: `-- QUERY DATA
SELECT column1, column2 FROM table WHERE condition;
SELECT * FROM table ORDER BY column DESC;
SELECT column, COUNT(*) FROM table GROUP BY column;

-- MODIFY DATA
INSERT INTO table (col1, col2) VALUES (val1, val2);
UPDATE table SET column = value WHERE condition;
DELETE FROM table WHERE condition;

-- CREATE/DROP
CREATE TABLE table (col1 type, col2 type);
CREATE DATABASE dbname;
DROP TABLE table;
DROP DATABASE dbname;

-- CONSTRAINTS
PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, CHECK, DEFAULT

-- JOINS
INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN

-- OPERATORS
=, <>, <, >, <=, >=, AND, OR, NOT, IN, LIKE, BETWEEN

-- FUNCTIONS
COUNT(), SUM(), AVG(), MIN(), MAX(), CONCAT(), NOW()`,
            },
          ],
          practiceQuestions: [
            {
              question: "What provides a concise guide to SQL commands?",
              type: "fill",
              starterQuery: `A SQL quick ___ provides syntax reference`,
              answer: "reference",
            },
            {
              question: "What does a quick reference help with?",
              type: "predict",
              starterQuery: `Quickly looking up syntax and remembering commands`,
              answer: "Quickly looking up syntax and remembering SQL commands",
            },
            {
              question: "What should a good SQL quick reference include?",
              type: "predict",
              starterQuery: `SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, constraints, joins, functions`,
              answer: "SELECT statements, data manipulation, data definition, constraints, joins, and functions",
            },
          ],
        },
      ],
    },
  ],
}

