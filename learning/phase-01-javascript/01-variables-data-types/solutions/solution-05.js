/**
 * ==========================================================
 * Solution 05
 * Template Literals
 * ==========================================================
 */

const tester = {
  name: 'Prashant',
  experience: 4.5,
  company: 'OpenAI',
  skills: ['Java', 'Selenium', 'Playwright'],
  isImmediateJoiner: true,
};

console.log(`Hello, I am ${tester.name}.`);

console.log(`I have ${tester.experience} years of experience.`);

console.log(`I work at ${tester.company}.`);

console.log(`My skills are ${tester.skills.join(', ')}.`);

console.log(`Immediate Joiner : ${tester.isImmediateJoiner ? 'Yes' : 'No'}`);
