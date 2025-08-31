import { test, expect } from '@playwright/test';

test.describe('Main Pages', () => {
  test('homepage loads and shows games', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/All Games \| Roguelike Database/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('ALL ROGUELIKE GAMES');
    
    // Should show some games (we know there are at least 100+)
    const gameItems = page.locator('.terminal-border');
    const count = await gameItems.count();
    expect(count).toBeGreaterThan(100);
    
    // Check that games have proper structure
    const firstGame = gameItems.first();
    await expect(firstGame.locator('h2')).toBeVisible();
    await expect(firstGame.locator('a')).toBeVisible();
  });

  test('search page functionality', async ({ page }) => {
    await page.goto('/search');
    
    await expect(page).toHaveTitle(/Search Games \| Roguelike Database/);
    await expect(page.locator('h1')).toContainText('SEARCH ROGUELIKES');
    
    // Check search filters exist
    await expect(page.locator('#name-search')).toBeVisible();
    await expect(page.locator('#type-filter')).toBeVisible();
    await expect(page.locator('#year-search')).toBeVisible();
    await expect(page.locator('#platform-filter')).toBeVisible();
    
    // First verify games are loaded
    const allGames = await page.locator('.game-item').count();
    expect(allGames).toBeGreaterThan(100);
    
    // Test name search - search for a common term that should match many games
    await page.fill('#name-search', 'hack');
    await page.waitForTimeout(1000); // Allow filtering to process
    const searchResults = await page.locator('.game-item:visible').count();
    console.log(`Search results for 'hack': ${searchResults}`);
    expect(searchResults).toBeGreaterThan(0);
    
    // Clear search and verify all games show again
    await page.click('#clear-filters');
    await page.waitForTimeout(1000); // Allow clearing to process
    const allResults = await page.locator('.game-item:visible').count();
    expect(allResults).toBeGreaterThan(100);
  });

  test('tags page functionality', async ({ page }) => {
    await page.goto('/tags');
    
    await expect(page).toHaveTitle(/Browse by Tags \| Roguelike Database/);
    await expect(page.locator('h1')).toContainText('BROWSE BY TAGS');
    
    // Check view buttons
    await expect(page.locator('#view-popular')).toBeVisible();
    await expect(page.locator('#view-alphabetical')).toBeVisible();
    await expect(page.locator('#view-categories')).toBeVisible();
    await expect(page.locator('#view-cloud')).toBeVisible();
    
    // Test clicking on a tag
    const firstTag = page.locator('.tag-item').first();
    await firstTag.click();
    
    // Should show games for that tag
    await expect(page.locator('#tag-games')).toBeVisible();
    const tagGameCount = await page.locator('#tag-games-list .terminal-border').count();
    expect(tagGameCount).toBeGreaterThan(0);
  });

  test('lineage page functionality', async ({ page }) => {
    await page.goto('/lineage');
    
    await expect(page).toHaveTitle(/Game Lineage \| Roguelike Database/);
    await expect(page.locator('h1')).toContainText('ROGUELIKE LINEAGE');
    
    // Check view buttons
    await expect(page.locator('#view-trees')).toBeVisible();
    await expect(page.locator('#view-parents')).toBeVisible();
    await expect(page.locator('#view-chronological')).toBeVisible();
    await expect(page.locator('#view-orphans')).toBeVisible();
    
    // Family trees should be visible by default
    await expect(page.locator('#trees-view')).toBeVisible();
    
    // Test switching to chronological view
    await page.click('#view-chronological');
    await expect(page.locator('#chronological-view')).toBeVisible();
    await expect(page.locator('#trees-view')).toBeHidden();
  });

  test('random page functionality', async ({ page }) => {
    await page.goto('/random');
    
    await expect(page).toHaveTitle(/Random Discovery \| Roguelike Database/);
    await expect(page.locator('h1')).toContainText('RANDOM DISCOVERY');
    
    // Check discovery buttons
    await expect(page.locator('#random-any')).toBeVisible();
    await expect(page.locator('#random-type')).toBeVisible();
    await expect(page.locator('#random-era')).toBeVisible();
    await expect(page.locator('#random-gems')).toBeVisible();
    await expect(page.locator('#random-rec')).toBeVisible();
    
    // Should show a random game by default
    await expect(page.locator('#random-game-display')).toBeVisible();
    
    // Test getting a new random game
    await page.click('#get-new-random');
    await expect(page.locator('#random-game-display')).toBeVisible();
  });

  test('help page functionality', async ({ page }) => {
    await page.goto('/help');
    
    await expect(page).toHaveTitle(/Help & Documentation \| Roguelike Database/);
    await expect(page.locator('h1')).toContainText('HELP & DOCUMENTATION');
    
    // Check help section buttons
    await expect(page.locator('#help-quickstart')).toBeVisible();
    await expect(page.locator('#help-navigation')).toBeVisible();
    await expect(page.locator('#help-search')).toBeVisible();
    await expect(page.locator('#help-about')).toBeVisible();
    
    // Quick start should be visible by default
    await expect(page.locator('#quickstart-section')).toBeVisible();
    
    // Test switching to about section
    await page.click('#help-about');
    await expect(page.locator('#about-section')).toBeVisible();
    await expect(page.locator('#quickstart-section')).toBeHidden();
  });
});

test.describe('Navigation', () => {
  test('navigation links work', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation links
    await page.click('a[href="/search"]');
    await expect(page).toHaveURL(/\/search/);
    
    await page.click('a[href="/tags"]');
    await expect(page).toHaveURL(/\/tags/);
    
    await page.click('a[href="/lineage"]');  
    await expect(page).toHaveURL(/\/lineage/);
    
    await page.click('a[href="/random"]');
    await expect(page).toHaveURL(/\/random/);
    
    await page.click('a[href="/help"]');
    await expect(page).toHaveURL(/\/help/);
    
    await page.click('a[href="/"]');
    await expect(page).toHaveURL(/\/$/);
  });

  test('keyboard shortcuts work', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Test keyboard navigation - wait a bit and then check URL change
    await page.keyboard.press('s');
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/\/search/);
    
    await page.keyboard.press('h');
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/\/help/);
    
    await page.keyboard.press('a');
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe('Game Pages', () => {
  test('individual game pages load', async ({ page }) => {
    // Go to homepage first
    await page.goto('/');
    
    // Wait for games to load
    await page.waitForSelector('.terminal-border h2 a', { timeout: 10000 });
    
    const firstGameLink = page.locator('.terminal-border h2 a').first();
    const href = await firstGameLink.getAttribute('href');
    
    if (href) {
      await firstGameLink.click();
      
      // Should navigate to game page
      await expect(page).toHaveURL(new RegExp(href));
      
      // Game page should have content
      await expect(page.locator('h1')).toBeVisible();
    }
  });
});

test.describe('Terminal Aesthetics', () => {
  test('maintains terminal styling', async ({ page }) => {
    await page.goto('/');
    
    // Check terminal color scheme
    const body = page.locator('body');
    await expect(body).toHaveCSS('background-color', 'rgb(0, 0, 0)');
    await expect(body).toHaveCSS('color', 'rgb(255, 255, 255)');
    
    // Check monospace font
    await expect(body).toHaveCSS('font-family', /mono/);
    
    // Check ASCII art is preserved
    await expect(page.locator('.ascii-art')).toBeVisible();
  });
});