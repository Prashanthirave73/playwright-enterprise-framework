# Theory – Variables & Data Types

> Module 01 – JavaScript Fundamentals

---

# Table of Contents

1. Introduction
2. Java vs JavaScript
3. What is a Variable?
4. Why Do We Need Variables?
5. Variable Naming Rules
6. Variable Naming Conventions
7. Reserved Keywords
8. Declaring Variables
9. var
10. let
11. const
12. var vs let vs const
13. Primitive Data Types
14. Reference Data Types
15. Arrays
16. Objects
17. typeof Operator
18. Dynamic Typing
19. Type Conversion
20. Template Literals
21. Truthy & Falsy Values
22. null vs undefined
23. Best Practices
24. Common Mistakes
25. Playwright Examples
26. Summary

---

# 1. Introduction

Variables are the building blocks of every programming language.

Every JavaScript application—from a simple calculator to a large Playwright automation framework—uses variables to store and manipulate data.

Examples include:

- URLs
- Browser names
- Login credentials
- API payloads
- Test data
- Configuration values
- Environment variables

Without variables, every value would have to be hardcoded repeatedly, making programs difficult to maintain.

---

# 2. Java vs JavaScript

Since you already know Java, understanding JavaScript becomes much easier.

| Java                      | JavaScript                  |
| ------------------------- | --------------------------- |
| Statically Typed          | Dynamically Typed           |
| Compiled                  | Interpreted / JIT Compiled  |
| Type Declaration Required | Type Inferred Automatically |
| Strongly Typed            | Weakly Typed                |
| Class-Based               | Prototype-Based             |

### Java Example

```java
String browser = "Chrome";
int timeout = 30000;
```

### JavaScript Example

```javascript
let browser = 'Chrome';
let timeout = 30000;
```

Notice that JavaScript automatically determines the data type.

---

# 3. What is a Variable?

A variable is a named container used to store data.

Think of it as a labeled box where you can keep information that your program needs.

Example:

```javascript
let browser = 'Chromium';
```

Here:

```
browser
```

is the variable name.

```
Chromium
```

is the value stored inside it.

---

# Memory Representation

```
Variable Name          Value

browser     ───────►   Chromium

timeout     ───────►   30000

username    ───────►   Admin
```

The variable points to a value stored in memory.

---

# 4. Why Do We Need Variables?

Imagine writing this:

```javascript
await page.goto('https://opensource-demo.orangehrmlive.com');
```

Now imagine you have 150 tests.

If the URL changes, you'll need to update it in every file.

Instead:

```javascript
const baseUrl = 'https://opensource-demo.orangehrmlive.com';

await page.goto(baseUrl);
```

Now you only update one variable.

This makes your automation framework easier to maintain.

---

# Real Playwright Example

```javascript
const username = 'Admin';
const password = 'admin123';

await page.fill('#username', username);

await page.fill('#password', password);
```

Variables improve readability and reduce duplication.

---

# 5. Variable Naming Rules

JavaScript has rules for naming variables.

## Rule 1 – Must Start With

A variable may begin with:

- A letter
- An underscore (_)
- A dollar sign ($)

Examples:

```javascript
let name;
let _username;
let $price;
```

---

## Rule 2 – Cannot Start With a Number

❌ Invalid

```javascript
let 1name;
```

✅ Valid

```javascript
let name1;
```

---

## Rule 3 – No Spaces

❌ Invalid

```javascript
let first name;
```

✅ Valid

```javascript
let firstName;
```

---

## Rule 4 – Case Sensitive

These are different variables:

```javascript
let browser;
let Browser;
let BROWSER;
```

---

## Rule 5 – Avoid Reserved Keywords

Invalid:

```javascript
let class;
let return;
let if;
```

Reserved words already have special meanings in JavaScript.

---

# 6. Variable Naming Conventions

Professional JavaScript developers follow naming conventions.

## camelCase (Recommended)

```javascript
let firstName;
let browserName;
let loginTimeout;
```

Used for:

- Variables
- Functions
- Object properties

---

## PascalCase

```javascript
class LoginPage {}

class UserService {}
```

Used for:

- Classes
- Constructors

---

## UPPER_CASE

```javascript
const MAX_TIMEOUT = 30000;
const API_VERSION = 'v1';
```

Used for:

- Constants
- Fixed configuration values

---

# Good Variable Names

```javascript
const browserName = 'Chromium';

const baseUrl = 'https://example.com';

const loginButton = '#login';

const timeout = 30000;
```

---

# Poor Variable Names

```javascript
let a;

let x;

let abc;

let temp1;
```

These names do not explain what the variable represents.

Always choose meaningful names.

---

# Interview Tip

One of the most common interview questions is:

**"How do you name variables in JavaScript?"**

Answer:

- Use meaningful names.
- Follow camelCase.
- Avoid abbreviations unless they are widely understood.
- Make variable names descriptive and readable.

---

# Summary

In this section, you learned:

- What variables are
- Why variables are important
- Java vs JavaScript comparison
- Variable naming rules
- Naming conventions
- Best practices for readable code

In the next section, we'll learn how variables are declared using:

- var
- let
- const

and understand why modern JavaScript recommends `const` by default.

# 7. Declaring Variables

JavaScript provides three keywords to declare variables:

- `var` (ES5)
- `let` (ES6)
- `const` (ES6)

```javascript
var browser1 = 'Chrome';

let browser2 = 'Firefox';

const browser3 = 'Chromium';
```

Although all three can declare variables, they behave differently regarding scope, hoisting, redeclaration, and reassignment.

---

# 8. The `var` Keyword

`var` is the original way of declaring variables in JavaScript.

Introduced in the first version of JavaScript, it is still supported but is **not recommended for modern development**.

## Syntax

```javascript
var browser = 'Chrome';
```

---

## Characteristics

- Function Scoped
- Can be Redeclared
- Can be Reassigned
- Hoisted
- Initialized with `undefined`

---

## Example 1 – Declaration

```javascript
var browser = 'Chrome';

console.log(browser);
```

Output

```
Chrome
```

---

## Example 2 – Redeclaration

```javascript
var browser = 'Chrome';

var browser = 'Firefox';

console.log(browser);
```

Output

```
Firefox
```

Since `var` allows redeclaration, accidental overwrites can occur.

---

## Example 3 – Reassignment

```javascript
var browser = 'Chrome';

browser = 'Chromium';

console.log(browser);
```

Output

```
Chromium
```

---

## Function Scope

```javascript
function launchBrowser() {
  var browser = 'Chrome';

  console.log(browser);
}

launchBrowser();

console.log(browser);
```

Output

```
Chrome

ReferenceError
```

The variable only exists inside the function.

---

## Block Scope Problem

```javascript
if (true) {
  var language = 'JavaScript';
}

console.log(language);
```

Output

```
JavaScript
```

Although declared inside the `if` block, the variable is still accessible outside.

This often leads to bugs.

---

# 9. The `let` Keyword

Introduced in ES6 (ECMAScript 2015).

This is the preferred keyword when a variable's value needs to change.

---

## Syntax

```javascript
let browser = 'Chrome';
```

---

## Characteristics

- Block Scoped
- Cannot be Redeclared
- Can be Reassigned
- Hoisted
- Temporal Dead Zone (TDZ)

---

## Example 1

```javascript
let browser = 'Chrome';

console.log(browser);
```

Output

```
Chrome
```

---

## Example 2 – Reassignment

```javascript
let browser = 'Chrome';

browser = 'Firefox';

console.log(browser);
```

Output

```
Firefox
```

---

## Example 3 – Redeclaration

```javascript
let browser = 'Chrome';

let browser = 'Firefox';
```

Output

```
SyntaxError
```

Redeclaration is not allowed within the same scope.

---

## Block Scope

```javascript
if (true) {
  let browser = 'Chromium';

  console.log(browser);
}

console.log(browser);
```

Output

```
Chromium

ReferenceError
```

Unlike `var`, `let` remains inside the block.

---

# 10. The `const` Keyword

`const` creates variables whose binding cannot be reassigned.

It is the recommended default choice for modern JavaScript.

---

## Syntax

```javascript
const company = 'OpenAI';
```

---

## Characteristics

- Block Scoped
- Cannot be Redeclared
- Cannot be Reassigned
- Must be Initialized
- Hoisted
- Temporal Dead Zone

---

## Example

```javascript
const browser = 'Chromium';

console.log(browser);
```

Output

```
Chromium
```

---

## Reassignment

```javascript
const browser = 'Chrome';

browser = 'Firefox';
```

Output

```
TypeError
```

---

## Initialization

❌ Invalid

```javascript
const browser;
```

Output

```
SyntaxError
```

A `const` variable must be initialized immediately.

---

# Objects with const

Many beginners believe `const` makes an object immutable.

This is incorrect.

Example

```javascript
const user = {
  name: 'Prashant',
};

user.name = 'Rahul';

console.log(user);
```

Output

```
{
    name: "Rahul"
}
```

The object reference cannot change, but its properties can.

---

# Arrays with const

```javascript
const browsers = ['Chrome', 'Firefox'];

browsers.push('Chromium');

console.log(browsers);
```

Output

```
Chrome

Firefox

Chromium
```

Again, the array reference is constant, not its contents.

---

# 11. Hoisting

One of the most frequently asked JavaScript interview topics.

## What is Hoisting?

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

---

## var Example

```javascript
console.log(browser);

var browser = 'Chrome';
```

Output

```
undefined
```

Internally JavaScript treats it as:

```javascript
var browser;

console.log(browser);

browser = 'Chrome';
```

---

## let Example

```javascript
console.log(browser);

let browser = 'Chrome';
```

Output

```
ReferenceError
```

---

## const Example

```javascript
console.log(browser);

const browser = 'Chrome';
```

Output

```
ReferenceError
```

---

# 12. Temporal Dead Zone (TDZ)

The TDZ is the period between entering a scope and initializing a `let` or `const` variable.

Example

```javascript
{
  console.log(browser);

  let browser = 'Chrome';
}
```

Output

```
ReferenceError
```

The variable exists but cannot be accessed until initialization.

---

# 13. Scope

Scope determines where a variable can be accessed.

JavaScript has:

- Global Scope
- Function Scope
- Block Scope

---

## Global Scope

```javascript
let company = 'OpenAI';

function printCompany() {
  console.log(company);
}
```

Accessible everywhere.

---

## Function Scope

```javascript
function login() {
  let username = 'Admin';
}
```

Only accessible inside the function.

---

## Block Scope

```javascript
if (true) {
  let browser = 'Firefox';
}
```

Accessible only inside the block.

---

# Scope Comparison

| Keyword | Scope    |
| ------- | -------- |
| var     | Function |
| let     | Block    |
| const   | Block    |

---

# 14. var vs let vs const

| Feature         | var      | let      | const    |
| --------------- | -------- | -------- | -------- |
| Scope           | Function | Block    | Block    |
| Redeclare       | ✅       | ❌       | ❌       |
| Reassign        | ✅       | ✅       | ❌       |
| Hoisted         | ✅       | ✅ (TDZ) | ✅ (TDZ) |
| Must Initialize | ❌       | ❌       | ✅       |
| Recommended     | ❌       | ✅       | ⭐ Best  |

---

# Interview Tips

## Which keyword should you use?

Use `const` by default.

Use `let` when the value needs to change.

Avoid `var` unless maintaining legacy code.

---

## Why is `const` preferred?

- Prevents accidental reassignment.
- Makes code easier to understand.
- Improves maintainability.
- Encourages immutable programming practices.

---

# Real Playwright Example

```javascript
const baseUrl = 'https://opensource-demo.orangehrmlive.com';

const username = 'Admin';

const password = 'admin123';

await page.goto(baseUrl);

await page.fill('#username', username);

await page.fill('#password', password);

await page.click("button[type='submit']");
```

Here:

- `baseUrl` never changes → `const`
- `username` never changes → `const`
- `password` never changes → `const`

This follows modern JavaScript best practices.

---

# Summary

In this section, you learned:

- `var`
- `let`
- `const`
- Scope
- Hoisting
- Temporal Dead Zone (TDZ)
- Block Scope
- Function Scope
- Global Scope
- Best practices for choosing variable declarations

You now understand why modern JavaScript and Playwright projects use **`const` by default**, `let` only when reassignment is required, and avoid `var` in new code.

# 15. Data Types

Every value stored in JavaScript belongs to a data type.

A data type tells JavaScript:

- What kind of value is stored
- How much memory is required
- What operations can be performed on it

Example:

```javascript
let name = 'Prashant';
let age = 25;
let isAutomation = true;
```

Here,

- `"Prashant"` → String
- `25` → Number
- `true` → Boolean

---

# JavaScript Data Types

JavaScript has two categories of data types.

```
                Data Types
                     │
         ┌───────────┴───────────┐
         │                       │
 Primitive Types          Reference Types
```

---

## Primitive Data Types

There are **7 primitive data types**.

| Data Type | Description                        |
| --------- | ---------------------------------- |
| String    | Text                               |
| Number    | Numeric values                     |
| Boolean   | true / false                       |
| Undefined | Variable declared but not assigned |
| Null      | Intentional empty value            |
| Symbol    | Unique identifier                  |
| BigInt    | Very large integers                |

Primitive values are immutable.

---

## Reference Data Types

Reference types store collections of data.

Examples:

- Object
- Array
- Function
- Date
- Map
- Set

These are stored by reference rather than by value.

---

# 16. String

A string represents textual data.

Examples:

```javascript
let firstName = 'Prashant';

let city = 'Pune';

let company = `OpenAI`;
```

---

## String Methods

```javascript
let name = 'Playwright';
```

Length

```javascript
console.log(name.length);
```

Output

```
10
```

Uppercase

```javascript
console.log(name.toUpperCase());
```

Output

```
PLAYWRIGHT
```

Lowercase

```javascript
console.log(name.toLowerCase());
```

Output

```
playwright
```

Includes

```javascript
console.log(name.includes('Play'));
```

Output

```
true
```

Replace

```javascript
console.log(name.replace('Play', 'Test'));
```

Output

```
Testwright
```

---

# Playwright Example

```javascript
const browser = 'Chromium';

console.log(browser.toUpperCase());
```

---

# 17. Number

JavaScript has only one number type.

It represents:

- Integers
- Floating Point Numbers

Examples

```javascript
let age = 25;

let salary = 25000.75;

let timeout = 30000;
```

---

## Number Methods

```javascript
let value = 25.6789;
```

```javascript
console.log(value.toFixed(2));
```

Output

```
25.68
```

---

```javascript
console.log(Number('100'));
```

Output

```
100
```

---

```javascript
console.log(parseInt('25px'));
```

Output

```
25
```

---

```javascript
console.log(parseFloat('15.75px'));
```

Output

```
15.75
```

---

# Playwright Example

```javascript
const timeout = 30000;

await page.waitForTimeout(timeout);
```

---

# 18. Boolean

Boolean represents only two values.

```
true

false
```

Examples

```javascript
let isLoggedIn = true;

let isVisible = false;
```

---

Example

```javascript
if (isLoggedIn) {
  console.log('Welcome');
}
```

---

# Playwright Example

```javascript
const isEnabled = await page.locator('#login').isEnabled();

console.log(isEnabled);
```

---

# 19. Undefined

A variable that has been declared but not assigned any value is undefined.

Example

```javascript
let city;

console.log(city);
```

Output

```
undefined
```

---

Example

```javascript
let browser;

console.log(typeof browser);
```

Output

```
undefined
```

---

# 20. Null

Null represents an intentional absence of value.

Example

```javascript
let employee = null;
```

Meaning

The variable exists but currently contains no value.

---

Example

```javascript
console.log(employee);
```

Output

```
null
```

---

# Interview Tip

```
undefined

↓

Value not assigned

--------------------

null

↓

Value intentionally empty
```

---

# 21. Symbol

A Symbol creates a unique value.

Example

```javascript
const id1 = Symbol();

const id2 = Symbol();

console.log(id1 === id2);
```

Output

```
false
```

Symbols are mostly used internally by JavaScript libraries.

They are rarely used in Playwright projects.

---

# 22. BigInt

BigInt stores integers larger than the Number type can safely represent.

Example

```javascript
const value = 123456789012345678901234567890n;
```

Notice the `n` at the end.

---

Example

```javascript
console.log(typeof value);
```

Output

```
bigint
```

---

# 23. Objects

Objects store data using key-value pairs.

Example

```javascript
const employee = {
  name: 'Prashant',

  experience: 4.5,

  company: 'OpenAI',
};
```

---

Accessing Properties

```javascript
console.log(employee.name);
```

Output

```
Prashant
```

---

Using Bracket Notation

```javascript
console.log(employee['company']);
```

Output

```
OpenAI
```

---

Adding Properties

```javascript
employee.skill = 'Playwright';
```

---

Updating Properties

```javascript
employee.company = 'Microsoft';
```

---

Deleting Properties

```javascript
delete employee.skill;
```

---

# Real Playwright Example

```javascript
const loginData = {
  username: 'Admin',

  password: 'admin123',
};

await page.fill('#username', loginData.username);

await page.fill('#password', loginData.password);
```

Objects are heavily used for:

- Test Data
- Configuration
- API Payloads
- JSON Responses

---

# 24. Arrays

Arrays store multiple values in a single variable.

Example

```javascript
const browsers = ['Chromium', 'Firefox', 'WebKit'];
```

---

Access Elements

```javascript
console.log(browsers[0]);
```

Output

```
Chromium
```

---

Length

```javascript
console.log(browsers.length);
```

Output

```
3
```

---

Add Item

```javascript
browsers.push('Edge');
```

---

Remove Last

```javascript
browsers.pop();
```

---

Loop

```javascript
for (const browser of browsers) {
  console.log(browser);
}
```

---

# Playwright Example

```javascript
const browsers = ['Chromium', 'Firefox', 'WebKit'];

for (const browser of browsers) {
  console.log(browser);
}
```

This concept is useful when executing tests across multiple browsers.

---

# 25. Primitive vs Reference Types

| Primitive        | Reference           |
| ---------------- | ------------------- |
| Stored by Value  | Stored by Reference |
| Immutable        | Mutable             |
| Fast             | Slightly Slower     |
| Independent Copy | Shared Reference    |

---

Primitive Example

```javascript
let x = 10;

let y = x;

y = 20;

console.log(x);

console.log(y);
```

Output

```
10

20
```

---

Reference Example

```javascript
const user1 = {
  name: 'Prashant',
};

const user2 = user1;

user2.name = 'Rahul';

console.log(user1.name);
```

Output

```
Rahul
```

Both variables point to the same object.

---

# 26. Memory Representation

Primitive

```
Stack

x

↓

10
```

Reference

```
Stack

user

↓

Heap

{

name:"Prashant"

}
```

Objects and arrays live in the Heap, while variables hold references in the Stack.

---

# Summary

In this section you learned:

- Primitive Data Types
- Reference Data Types
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt
- Objects
- Arrays
- Primitive vs Reference
- Memory Representation
- Real Playwright Examples

These concepts form the foundation for handling configuration, test data, API responses, and JSON objects in Playwright automation.

# 27. The `typeof` Operator

The `typeof` operator returns the data type of a value.

## Syntax

```javascript
typeof value;
```

---

## Examples

```javascript
console.log(typeof 'Playwright');
```

Output

```
string
```

---

```javascript
console.log(typeof 100);
```

Output

```
number
```

---

```javascript
console.log(typeof true);
```

Output

```
boolean
```

---

```javascript
console.log(typeof undefined);
```

Output

```
undefined
```

---

```javascript
console.log(typeof null);
```

Output

```
object
```

⚠ **Interview Note**

This is a well-known JavaScript quirk. Although `null` represents an empty value, `typeof null` returns `"object"` due to a historical implementation bug that has been retained for backward compatibility.

---

```javascript
console.log(typeof []);
```

Output

```
object
```

To check whether a value is an array:

```javascript
console.log(Array.isArray([]));
```

Output

```
true
```

---

```javascript
console.log(typeof {});
```

Output

```
object
```

---

```javascript
console.log(typeof function () {});
```

Output

```
function
```

---

# Playwright Example

```javascript
const response = await page.title();

console.log(typeof response);
```

Output

```
string
```

---

# 28. Dynamic Typing

JavaScript is a **dynamically typed** language.

This means you don't need to specify a variable's data type. JavaScript determines it automatically.

Example:

```javascript
let value = 'Playwright';

console.log(typeof value);

value = 100;

console.log(typeof value);

value = true;

console.log(typeof value);
```

Output

```
string

number

boolean
```

The same variable can hold different data types during execution.

---

## Java vs JavaScript

### Java

```java
String name = "Prashant";

name = 100; // Compilation Error
```

---

### JavaScript

```javascript
let name = 'Prashant';

name = 100;

console.log(name);
```

Output

```
100
```

---

## Advantages

- Flexible
- Faster development
- Less boilerplate code
- Easy to prototype

---

## Disadvantages

- Runtime errors
- Type-related bugs
- Harder to maintain large applications without good practices

---

# 29. Type Conversion

Type conversion means changing one data type into another.

There are two types:

- Implicit Type Conversion
- Explicit Type Conversion

---

# Implicit Type Conversion

JavaScript automatically converts data types when required.

Example

```javascript
console.log('10' + 5);
```

Output

```
105
```

---

```javascript
console.log('10' - 5);
```

Output

```
5
```

---

```javascript
console.log(true + 1);
```

Output

```
2
```

---

# Explicit Type Conversion

The programmer manually converts data types.

---

## Number()

```javascript
const value = Number('100');

console.log(value);
```

Output

```
100
```

---

## String()

```javascript
const value = String(100);

console.log(value);
```

Output

```
100
```

---

## Boolean()

```javascript
console.log(Boolean(1));
```

Output

```
true
```

---

```javascript
console.log(Boolean(0));
```

Output

```
false
```

---

## parseInt()

```javascript
console.log(parseInt('150px'));
```

Output

```
150
```

---

## parseFloat()

```javascript
console.log(parseFloat('99.99%'));
```

Output

```
99.99
```

---

# Playwright Example

```javascript
const timeout = Number(process.env.TIMEOUT);

await page.waitForTimeout(timeout);
```

Environment variables are always strings, so explicit conversion is often required.

---

# 30. Template Literals

Template literals make string formatting easier.

Instead of:

```javascript
const browser = 'Chromium';

console.log('Browser: ' + browser);
```

Use:

```javascript
const browser = 'Chromium';

console.log(`Browser: ${browser}`);
```

Output

```
Browser: Chromium
```

---

## Multiple Variables

```javascript
const name = 'Prashant';
const experience = 4.5;

console.log(`Hello, I am ${name}. I have ${experience} years of experience.`);
```

Output

```
Hello, I am Prashant. I have 4.5 years of experience.
```

---

## Multi-line Strings

```javascript
const message = `
Welcome
to
Playwright
Automation
`;

console.log(message);
```

---

# Playwright Example

```javascript
const browser = 'Chromium';
const url = 'https://example.com';

console.log(`Running tests on ${browser} against ${url}`);
```

---

# 31. Truthy and Falsy Values

JavaScript automatically converts values to `true` or `false` in conditions.

---

## Falsy Values

There are only a few falsy values:

- false
- 0
- -0
- ""
- ''
- ``
- null
- undefined
- NaN

Example

```javascript
if ('') {
  console.log('Executed');
} else {
  console.log('Not Executed');
}
```

Output

```
Not Executed
```

---

## Truthy Values

Everything else is truthy.

Examples:

```javascript
"Playwright"

1

[]

{}

-1

"0"
```

---

# 32. null vs undefined

| null                           | undefined              |
| ------------------------------ | ---------------------- |
| Intentional empty value        | Variable not assigned  |
| Object type (historical quirk) | Undefined type         |
| Assigned by developer          | Assigned by JavaScript |

---

Example

```javascript
let city;

console.log(city);
```

Output

```
undefined
```

---

```javascript
let city = null;

console.log(city);
```

Output

```
null
```

---

# 33. Best Practices

✔ Use `const` by default.

✔ Use `let` only when reassignment is required.

✔ Avoid `var` in new projects.

✔ Use meaningful variable names.

✔ Follow camelCase.

✔ Initialize variables whenever possible.

✔ Keep variable scope as small as possible.

✔ Group related data using objects.

✔ Store collections using arrays.

✔ Use template literals instead of string concatenation.

---

# 34. Common Mistakes

## Mistake 1

Using `var`

```javascript
var browser = 'Chrome';
```

Prefer:

```javascript
const browser = 'Chrome';
```

---

## Mistake 2

Using unclear names

```javascript
let a = 10;
```

Prefer:

```javascript
const timeout = 10000;
```

---

## Mistake 3

Using `==`

```javascript
5 == '5';
```

Prefer strict equality:

```javascript
5 === '5';
```

---

## Mistake 4

Forgetting to initialize `const`

```javascript
const browser;
```

This results in a syntax error.

---

## Mistake 5

Assuming `typeof null` returns `"null"`

It actually returns:

```
object
```

---

# 35. Real Playwright Examples

## Login Test

```javascript
const baseUrl = 'https://opensource-demo.orangehrmlive.com';
const username = 'Admin';
const password = 'admin123';

await page.goto(baseUrl);
await page.fill('#username', username);
await page.fill('#password', password);
await page.click("button[type='submit']");
```

---

## Browser List

```javascript
const browsers = ['Chromium', 'Firefox', 'WebKit'];

for (const browser of browsers) {
  console.log(browser);
}
```

---

## Test Data Object

```javascript
const user = {
  username: 'Admin',
  password: 'admin123',
  role: 'Administrator',
};

console.log(user.username);
```

---

# 36. Module Summary

Congratulations! 🎉

You have learned:

- Variables
- var
- let
- const
- Scope
- Hoisting
- Temporal Dead Zone
- Primitive Data Types
- Reference Data Types
- Objects
- Arrays
- typeof
- Dynamic Typing
- Type Conversion
- Template Literals
- Truthy & Falsy Values
- null vs undefined
- Best Practices
- Common Mistakes
- Real Playwright Examples

---

# Quick Revision Cheat Sheet

| Topic             | Key Takeaway                      |
| ----------------- | --------------------------------- |
| var               | Avoid in modern JavaScript        |
| let               | Use when reassignment is required |
| const             | Default choice                    |
| String            | Text data                         |
| Number            | Numeric values                    |
| Boolean           | true / false                      |
| Object            | Key-value pairs                   |
| Array             | Ordered collection                |
| typeof            | Returns data type                 |
| Template Literals | Use backticks and `${}`           |
| Dynamic Typing    | Variable type can change          |
| null              | Intentionally empty               |
| undefined         | Declared but not assigned         |

---

# What's Next?

Continue to **Module 02 – Operators**, where you'll learn:

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Ternary Operator
- Nullish Coalescing (`??`)
- Optional Chaining (`?.`)
- Operator Precedence

These concepts are essential for writing conditions, assertions, loops, and validations in Playwright automation.
