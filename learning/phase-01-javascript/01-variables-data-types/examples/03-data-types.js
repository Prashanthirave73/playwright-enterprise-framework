/**
 * ==========================================================
 * Topic: Primitive Data Types
 * ==========================================================
 */

const name = 'Prashant';
const age = 25;
const experience = 4.5;
const isImmediateJoiner = true;
const city = undefined;
const manager = null;
const employeeId = Symbol('EMP001');
const salary = 999999999999999999n;

console.log(name);
console.log(age);
console.log(experience);
console.log(isImmediateJoiner);
console.log(city);
console.log(manager);
console.log(employeeId);
console.log(salary);

// Objects

const employee = {
  name: 'Prashant',

  company: 'OpenAI',
};

console.log(employee);

// Arrays

const browsers = ['Chromium', 'Firefox', 'WebKit'];

console.log(browsers);
