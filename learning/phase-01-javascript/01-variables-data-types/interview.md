# Module 01 – Interview Questions

Variables & Data Types

---

# Overview

This document contains interview questions ranging from beginner to advanced level.

Difficulty:

⭐ Beginner

⭐⭐ Intermediate

⭐⭐⭐ Advanced

---

# Section 1 – Beginner Questions

---

## Q1. What is a variable?

### Answer

A variable is a named container used to store data in memory.

Example:

```javascript
const browser = 'Chromium';
```

Here,

- browser → variable name
- Chromium → value

Variables make programs reusable and maintainable.

---

## Q2. Why do we use variables?

Variables help us:

- Store data
- Reuse values
- Avoid duplication
- Improve readability
- Make maintenance easier

Example:

```javascript
const baseUrl = 'https://example.com';

await page.goto(baseUrl);
```

Instead of hardcoding the URL multiple times, we store it once in a variable.

---

## Q3. What are the ways to declare variables?

JavaScript provides three keywords:

```javascript
var

let

const
```

Modern JavaScript recommends:

- const by default
- let when reassignment is needed
- Avoid var

---

## Q4. Difference between var, let and const?

| Feature   | var      | let       | const     |
| --------- | -------- | --------- | --------- |
| Scope     | Function | Block     | Block     |
| Redeclare | Yes      | No        | No        |
| Reassign  | Yes      | Yes       | No        |
| Hoisting  | Yes      | Yes (TDZ) | Yes (TDZ) |

---

## Q5. Why should we avoid var?

Because:

- Function scoped
- Can be redeclared
- Causes bugs
- Older JavaScript

Example:

```javascript
var browser = 'Chrome';

var browser = 'Firefox';
```

No error occurs.

---

## Q6. Why is const preferred?

Because:

- Prevents reassignment
- Safer
- Easier to understand
- Improves maintainability

This is the standard used in Playwright projects.

---

## Q7. What is block scope?

Variables declared with let and const exist only inside the block.

Example:

```javascript
if (true) {
  let browser = 'Chrome';
}

console.log(browser);
```

Output

```
ReferenceError
```

---

## Q8. What is function scope?

Variables declared using var exist only inside the function.

Example:

```javascript
function login() {
  var user = 'Admin';
}
```

Outside the function it cannot be accessed.

---

## Q9. What is hoisting?

Hoisting is JavaScript's behavior of moving variable declarations to the top before execution.

Example:

```javascript
console.log(browser);

var browser = 'Chrome';
```

Output

```
undefined
```

---

## Q10. What is Temporal Dead Zone?

TDZ is the time between entering a scope and initializing a let or const variable.

Example:

```javascript
console.log(browser);

let browser = 'Chrome';
```

Output

```
ReferenceError
```

---

# Section 2 – Data Types

---

## Q11. What are primitive data types?

JavaScript has seven primitive data types.

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

---

## Q12. What are reference data types?

Examples:

- Object
- Array
- Function
- Date
- Map
- Set

---

## Q13. Difference between primitive and reference types?

| Primitive       | Reference           |
| --------------- | ------------------- |
| Stored by value | Stored by reference |
| Immutable       | Mutable             |
| Faster          | Slightly slower     |

---

## Q14. What is a string?

A string stores text.

```javascript
const name = 'Prashant';
```

---

## Q15. What is Number?

JavaScript has only one numeric type.

It supports:

- Integers
- Floating Point

Example

```javascript
const age = 25;

const salary = 25000.75;
```

---

## Q16. Difference between null and undefined?

| null                    | undefined              |
| ----------------------- | ---------------------- |
| Intentional empty value | Not assigned           |
| Assigned manually       | Assigned automatically |

---

## Q17. What does typeof return?

It returns the data type.

Example

```javascript
typeof 'Hello';
```

Output

```
string
```

---

## Q18. Why does typeof null return object?

This is a historical bug in JavaScript retained for backward compatibility.

---

## Q19. What is BigInt?

Used for storing integers larger than the safe Number range.

```javascript
const value = 12345678901234567890n;
```

---

## Q20. What is Symbol?

Creates a unique value.

Mostly used internally by libraries.

---

# Section 3 – Arrays & Objects

---

## Q21. What is an object?

Objects store data using key-value pairs.

```javascript
const employee = {
  name: 'Prashant',

  company: 'OpenAI',
};
```

---

## Q22. What is an array?

Stores multiple values.

```javascript
const browsers = ['Chrome', 'Firefox'];
```

---

## Q23. Difference between array and object?

| Array       | Object         |
| ----------- | -------------- |
| Ordered     | Key-Value      |
| Index Based | Property Based |

---

## Q24. Can const objects be modified?

Yes.

Properties can change.

Reference cannot.

---

## Q25. Can const arrays be modified?

Yes.

Items can be added or removed.

Reference remains constant.

---

# Section 4 – Playwright Questions

---

## Q26. Where are variables used in Playwright?

Examples:

- Base URL
- Username
- Password
- Browser
- Timeout
- API URLs
- Test Data

---

## Q27. Why use const in Playwright?

Configuration values generally don't change.

Example:

```javascript
const baseUrl = 'https://example.com';
```

---

## Q28. Why use objects in Playwright?

Objects help organize related data.

Example:

```javascript
const user = {
  username: 'Admin',

  password: 'admin123',
};
```

---

## Q29. Why use arrays?

Executing tests across multiple browsers.

```javascript
const browsers = ['Chromium', 'Firefox', 'WebKit'];
```

---

## Q30. Give a real Playwright example using variables.

```javascript
const username = 'Admin';

const password = 'admin123';

await page.fill('#username', username);

await page.fill('#password', password);
```

---

# Section 5 – Java vs JavaScript

| Java           | JavaScript   |
| -------------- | ------------ |
| Static         | Dynamic      |
| Compiled       | JIT          |
| Strongly Typed | Weakly Typed |

---

# Section 6 – Rapid Fire

✔ Difference between let and const?

✔ What is TDZ?

✔ What is typeof?

✔ Is null primitive?

✔ Is array an object?

✔ Can const object change?

✔ Can let be redeclared?

✔ Can var be redeclared?

✔ Which keyword should be preferred?

✔ What is dynamic typing?

---

# Section 7 – Scenario Based Questions

### Scenario 1

You declared:

```javascript
const timeout = 30000;
```

Later,

```javascript
timeout = 50000;
```

What happens?

Answer:

TypeError

---

### Scenario 2

Why is the following code wrong?

```javascript
var browser = 'Chrome';

var browser = 'Firefox';
```

Answer:

Redeclaration may introduce bugs and reduce code clarity.

---

# Section 8 – Coding Questions

Write a program to:

- Swap two variables
- Print employee object
- Create browser array
- Use template literals
- Print typeof every variable

---

# Section 9 – Common Interview Mistakes

❌ Saying JavaScript is compiled only.

❌ Saying const object cannot change.

❌ Confusing null and undefined.

❌ Using var in examples.

❌ Forgetting TDZ.

---

# Section 10 – Quick Revision

Remember:

✔ const first

✔ let second

✔ Avoid var

✔ Arrays use []

✔ Objects use {}

✔ typeof null → object

✔ Array.isArray() checks arrays

✔ Primitive → Value

✔ Reference → Address

---

Congratulations!

You have completed Module 01 Interview Preparation.
