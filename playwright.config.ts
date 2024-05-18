import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests', // Ensure this points to the correct directory
  testMatch: '**/*.test.ts', // Adjust this glob pattern to match your file naming convention
};
export default config;