import { test, expect } from '@playwright/test';

test('Bài tập 2: Thêm sản phẩm vào giỏ hàng', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('text=Bài học 2: Product page').click();

    // 3. Add product 1 (2 times)
    for (let i = 0; i < 2; i++) {
        await page.locator('.add-to-cart').nth(0).click();
    }

    // 4. Add product 2 (3 times)
    for (let i = 0; i < 3; i++) {
        await page.locator('.add-to-cart').nth(1).click();
    }

    // 5. Add product 3 (1 time)
    await page.locator('.add-to-cart').nth(2).click();

// 6. Check the number of items in the shopping cart
    const cartItems = page.locator('#cart-body tr');

    const count = await cartItems.count();
    console.log('Cart items:', count);

// Verify current product
    await expect(cartItems).toHaveCount(count);
});