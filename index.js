const puppeteer = require('puppeteer');

async function createAccount() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://floodehq.com/version-test/agent');

    // Fill in the signup form
    await page.type('#emailInput', 'your-email@example.com');
    await page.type('#passwordInput', 'yourPassword123');
    await page.click('#signupButton');

    // Wait some time to ensure the action completes (adjust as necessary)
    await browser.close();
}

// To execute the function:
createAccount();
