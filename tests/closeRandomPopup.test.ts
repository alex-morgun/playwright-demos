import { expect, test } from '@playwright/test';

test.describe('Popup Test', () => {
    test('should Close Random popups', async ({ page }) => {
        // As soon as specific popup becomes visible, would trigger the callback
        page.addLocatorHandler(
            page.getByText("Payment successful"), // look for this element
            async () => {
                const closeButton = page.getByRole('button', { name: "Got it, thanks!" });
                await closeButton.click();
                await expect(page.getByText("Payment successful")).toBeHidden();
                console.log('Popup was closed.');
            }
        );

        // Navigates to a page where a dialog (popup) is expected to appear
        await page.goto('https://headlessui.com/examples/react-dialog');

        // Waits for the 'Open dialog' button to become visible
        // It is initially not visible because of popup
        // This way confirms the popup interception worked
        await expect(page.getByRole('button', { name: "Open dialog" })).toBeVisible();
    });
});
