#!/usr/bin/env node

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const distDir = join(projectRoot, 'dist');

try {
  // Ensure dist directory exists
  mkdirSync(distDir, { recursive: true });
  
  // Create .nojekyll file
  const nojekyllPath = join(distDir, '.nojekyll');
  writeFileSync(nojekyllPath, '');
  console.log('✅ Created .nojekyll file in dist/');
} catch (error) {
  console.error('❌ Error creating .nojekyll file:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}

