/**
 * ==========================================================
 * Topic: Variables in Playwright
 * ==========================================================
 */

const baseUrl = 'https://opensource-demo.orangehrmlive.com';

const username = 'Admin';

const password = 'admin123';

const browser = 'Chromium';

const timeout = 30000;

console.log('Playwright Configuration');

console.log('------------------------');

console.log(`Browser : ${browser}`);

console.log(`Base URL : ${baseUrl}`);

console.log(`Username : ${username}`);

console.log(`Password : ${password}`);

console.log(`Timeout : ${timeout}`);

// Example Playwright Code

/*
await page.goto(baseUrl);

await page.fill("#username", username);

await page.fill("#password", password);

await page.click("button[type='submit']");
*/
