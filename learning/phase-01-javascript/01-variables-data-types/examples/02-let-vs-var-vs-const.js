/**
 * ==========================================================
 * Topic: var vs let vs const
 * ==========================================================
 */

// var

var browser = 'Chrome';
var browser = 'Firefox';

console.log(browser);

// let

let city = 'Pune';

city = 'Mumbai';

console.log(city);

// const

const company = 'OpenAI';

console.log(company);

// Scope Example

if (true) {
  var language = 'Java';

  let framework = 'Playwright';

  console.log(framework);
}

console.log(language);

// console.log(framework); // ReferenceError
