const { test, expect } = require('@playwright/test');
/*const { BasicCalculatorPage } = require('../pages-Calculator/basicCalculatorPage.js');
const { CalculatorResultPage } = require('../pages-Calculator/calculatorResultPage');

test.describe('', () => {
    let page;
    
    test.beforeAll(async ({ browser }) => {
      page = await browser.newPage();
      startPage = new BasicCalculatorPage(page);
      resultsPage = new CalculatorResultPage(page);
    
    });*/

    
 
test('Testing page to be opened', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  const calculatorPageTop = await page.isVisible('#page-top');
  expect(calculatorPageTop).toBe(true);
  
});

test('Check that calculator is working', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.waitForSelector('#page-top');
  await page.fill('#number1Field', '5');
  await page.fill('#number2Field', '3');
  await page.click('#calculateButton');
  const result2Content = await page.isVisible('#numberAnswerField');
  expect(result2Content).toBe(true);
  
    });

    test('Check that calculator adds numbers', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.waitForSelector('#page-top');
      await page.selectOption('#selectBuild','0');
      await page.fill('#number1Field', '5');
      await page.fill('#number2Field', '3');
      await page.click('#calculateButton');
      const result1Content = await page.textContent('#numberAnswerField');
      expect(result1Content).toBe(true);
     
    });
      


          
  const inputLengths = ['8'];
  inputLengths.forEach(inputLengths => {
  test(`Fill ${inputLengths} characters`, async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.waitForSelector('#page-top');
  await page.fill('#number1Field', ('' + inputLengths));
  await page.fill('#number2Field', ('' + inputLengths));
  await page.click('#calculateButton');
  const result2Content = await page.isVisible('#numberAnswerField');
  expect(result2Content).toBe(true);
 
});
});
















