#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');
const projectRoot = join(__dirname, '..');
const distDir = join(projectRoot, 'dist');

try {
  const nojekyllPath = join(distDir, '.nojekyll');
  writeFileSync(nojekyllPath, '');
  console.log('✅ Created .nojekyll file in dist/');
} catch (error) {
  console.error('❌ Error creating .nojekyll file:', error.message);
  process.exit(1);
}

