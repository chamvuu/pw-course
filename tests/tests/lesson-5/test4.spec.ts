import { test, expect } from '@playwright/test';

test('Thêm mới 10 personal notes', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();

    // Declare 10 notes 
    const notes = [
        { title: 'Action 1', content: 'Description 1' },
        { title: 'Action 2', content: 'Description 2' },
        { title: 'Action 3', content: 'Description 3' },
        { title: 'Action 4', content: 'Description 4' },
        { title: 'Action 5', content: 'Description 5' },
        { title: 'Action 6', content: 'Description 6' },
        { title: 'Action 7', content: 'Description 7' },
        { title: 'Action 8', content: 'Description 8' },
        { title: 'Action 9', content: 'Description 9' },
        { title: 'Action 10', content: 'Description 10' },
    ];

    // Add 10 notes
    for (const note of notes) {
        // Input Title 
        await page.locator('#note-title').fill(note.title);
        
        // Input description
        await page.locator('#note-content').fill(note.content);
        
        // Click Add button to add note 
        await page.locator('#add-note').click();        
        // Check the note created in the list
       await expect(page.getByText(note.title)).toBeVisible();
    }
});