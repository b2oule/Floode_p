const puppeteer = require('puppeteer');

async function getElements() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://floodehq.com/version-test/agent');

    // Extract input elements, their placeholders, and their IDs
    const inputs = await page.$$eval('input', nodes => nodes.map(node => ({
        id: node.getAttribute('id'),
        type: node.getAttribute('type'),
        placeholder: node.getAttribute('placeholder')
    })));

    // Extract button elements, their names, and their IDs
    const buttons = await page.$$eval('button', nodes => nodes.map(node => ({
        id: node.getAttribute('id'),
        text: node.innerText,
        type: node.getAttribute('type')
    })));

    await browser.close();

    return {
        inputs,
        buttons
    };
}

getElements().then(data => {
    console.log("Inputs:", data.inputs);
    console.log("Buttons:", data.buttons);
}).catch(console.error);
