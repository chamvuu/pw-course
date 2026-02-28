import { test } from '@playwright/test';
import path from 'node:path';

test ('Demo', async({page}) => {
    await test.step('Step 1: Đi đến trang material', async() =>{
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Step 2: Click vào Bài học 1: Register Page (có đủ các element)', async () =>{
        const baiHoc1Locator = page.locator("//a[@href = '01-xpath-register-page.html']");
        await baiHoc1Locator.click();

    // Username
        await page.locator("//input[@id = 'username']").fill("Cham Vu");

    //Email
        await page.locator("//input[@id = 'email']").fill("example@test.com");

    //Gender
        await page.check('input[value="male"]');

    // Hobbies
    await page.check('input[value="reading"]');
    await page.check('input[value="traveling"]');

    // Interests 
    await page.selectOption('#interests', 'Art');

    // Country 
    await page.selectOption('#country', 'Canada');
    await page.fill('#dob', '2000-01-01');
    // Biography (Textarea)
    await page.fill('#bio', 'My biography');
    });
    
    // 4. Click button Register
    await page.getByRole('button', { name: 'Register' }).click();
})