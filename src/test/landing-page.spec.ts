import { test, expect } from '@playwright/test';

test.describe('Moshify Landing Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should load the page with correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/Moshify/i);
    });

    test('should render all major sections', async ({ page }) => {
        // Navbar
        await expect(page.locator('nav.nav')).toBeVisible();

        // Hero
        await expect(page.getByRole('heading', { name: /Cloud Hosting for Pros/i })).toBeVisible();

        // Domain
        await expect(page.getByPlaceholder('Enter domain name here...')).toBeVisible();

        // Plans
        await expect(page.locator('.block-plans')).toBeVisible();

        // Features
        await expect(page.getByRole('heading', { name: /Host on the Cloud to Keep Growing/i })).toBeVisible();

        // Showcase
        await expect(page.getByRole('heading', { name: /User-friendly Control Panel/i })).toBeVisible();

        // Testimonial
        await expect(page.getByRole('heading', { name: /What Our Customers Are Saying/i })).toBeVisible();

        // Callout
        await expect(page.getByRole('heading', { name: /Ready to Get Started\?/i })).toBeVisible();

        // Footer
        await expect(page.locator('footer.footer')).toBeVisible();
    });

    test('mobile navigation toggle', async ({ page }) => {
        // Set viewport to mobile size
        await page.setViewportSize({ width: 375, height: 667 });

        const nav = page.locator('nav.nav');
        const toggler = page.locator('.nav__toggler');

        // Initially collapsed
        await expect(nav).not.toHaveClass(/collapsible--expanded/);

        // Click toggler to expand
        await toggler.click();
        await expect(nav).toHaveClass(/collapsible--expanded/);

        // Click toggler to collapse
        await toggler.click();
        await expect(nav).not.toHaveClass(/collapsible--expanded/);
    });

    test('footer collapsible sections on mobile', async ({ page }) => {
        // Set viewport to mobile size
        await page.setViewportSize({ width: 375, height: 667 });

        const productsSection = page.locator('.collapsible').filter({ hasText: 'Products' }).first();
        const chevron = productsSection.locator('.collapsible__chevron');

        // Initially collapsed
        await expect(productsSection).not.toHaveClass(/collapsible--expanded/);

        // Click chevron to expand
        await chevron.click();
        await expect(productsSection).toHaveClass(/collapsible--expanded/);

        // Click chevron to collapse
        await chevron.click();
        await expect(productsSection).not.toHaveClass(/collapsible--expanded/);
    });
});
