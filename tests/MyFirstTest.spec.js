const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  const duckLogo = await page.isVisible('#logo_homepage_link');
  expect(duckLogo).toBe(true);
});

test('test nr2', async ({ page }) => {
  await page.goto('https://start.duckduckgo.com/');
  await page.waitForSelector('#logo_homepage_link');
  await page.fill('#search_form_input_homepage', 'Test');
  await page.click('#search_button_homepage');
  const result1TextContent = await page.textContent('#r1-0');
  
    });

  test('test Inspector', async ({ page }) => {
    await page.goto('https://start.duckduckgo.com/');
    await page.fill('input[name="q"]', 'Test');
    // Click input[name="q"]
    await page.click('input[name="q"]');
    // Click input:has-text("S")
     await Promise.all([
       page.waitForNavigation(/*{ url: 'https://duckduckgo.com/?q=Test&ia=web' }*/),
       page.click('input:has-text("S")')
      ]);
      // Go to https://duckduckgo.com/?q=Test&ia=web
     await page.goto('https://duckduckgo.com/?q=Test&ia=web');
      // Click text=Test | Definition of Test by Merriam-Webster
      await page.click('text=Test | Definition of Test by Merriam-Webster');
      expect(page.url()).toBe('https://www.merriam-webster.com/dictionary/test');
          });




      test('Check that cheat sheets are working_destytojo', async ({ page }) => {
        await page.goto('https://start.duckduckgo.com/');
        await page.waitForSelector('#logo_homepage_link');
        await page.fill('#search_form_input_homepage', 'microsoft word cheat sheet');
        await page.click('#search_button_homepage');
        const isCheatSheetVisible = await page.isVisible('a[data-zci-link="cheat_sheets"]');
        const cheatSheetsTitle = await page.textContent('h3.c-base__title');
        expect(isCheatSheetVisible).toBe(true);
        expect(cheatSheetsTitle).toContain('Microsoft Word 2010');
      });

      test('Check that wikipedia is working', async ({ page }) => {
        await page.goto('https://start.duckduckgo.com/');
        await page.waitForSelector('#logo_homepage_link');
        await page.fill('#search_form_input_homepage', 'shorten www.wikipedia.com');
        await page.click('#search_button_homepage');
        const isCheatSheetVisible = await page.isVisible('a[data-zci-link="cheat_sheets"]');
        const cheatSheetsTitle = await page.textContent('h3.c-base__title');
        expect(isCheatSheetVisible).toBe(true);
        expect(cheatSheetsTitle).toContain('Microsoft Word 2010');
      });

      test('testing wiki short link_Gedimino', async ({ page }) => {
        await page.goto('https://duckduckgo.com/');
        // waits for selector to be loaded into the website
        await page.waitForSelector('#logo_homepage_link');
        // fills the inout field with text "test"
        await page.fill('#search_form_input_homepage', 'shorten www.wikipedia.com');
        await page.click('#search_button_homepage');
        const shortenURL = await page.isVisible('#shorten-url');
        const shortenURLText = await page.inputValue('#shorten-url');
        expect(shortenURL).toBe(true);
        await page.goto(shortenURLText);
        const url = await page.url();
        expect(url).toBe('https://www.wikipedia.org/');
      });

      test('Check that url shortener works_destytojo', async ({ page }) => {
        await page.goto('https://start.duckduckgo.com/');
        await page.waitForSelector('#logo_homepage_link');
        await page.fill('#search_form_input_homepage', 'shorten www.wikipedia.com');
        await page.click('#search_button_homepage');
        const shortenedUrl = await page.getAttribute('#shorten-url', 'value');
        await page.goto(shortenedUrl);
        const url = page.url();
        expect(url).toBe('https://www.wikipedia.org/');
      });

      test('check that inTitle functionality works_destytojo', async ({ page }) => {
        await page.goto('https://start.duckduckgo.com/');
        await page.waitForSelector('#logo_homepage_link');
        await page.fill('#search_form_input_homepage', 'intitle:panda');
        await page.click('#search_button_homepage');
        const results = await page.evaluate(() => Array.from(document.querySelectorAll('.result__title'), element => element.textContent));
        results.forEach(result => {
        expect(result).toContain("Panda");
          
  });

      });
      
      const passwordsLengths = ['8', '16', '64'];
      passwordsLengths.forEach(passwordLength => {
      test(`Generate ${passwordLength} chracters long password`, async ({ page }) => {
      await page.goto('https://start.duckduckgo.com/');
      await page.waitForSelector("#search_form_input_homepage");
      await page.fill('#search_form_input_homepage', ("password " + passwordLength));
      await page.click("#search_button_homepage");
      const generatedPassword = await page.textContent(".c-base__title");
      expect(generatedPassword.length).toEqual(+passwordLength)

    });
  });

        
const invalidPasswordLengths = ['7', '65'];
  invalidPasswordLengths.forEach(passwordLength => {
    test(`Fails to Generate ${passwordLength} chracters long password`, async ({ page }) => {
      await page.goto('https://start.duckduckgo.com/');
      await page.waitForSelector("#search_form_input_homepage");
      await page.fill('#search_form_input_homepage', ("password " + passwordLength));
      await page.click("#search_button_homepage");
      const isPasswordElementVisible = await page.isVisible(".c-base__sub");
      expect(isPasswordElementVisible).toEqual(false)
    });
  });










  





      