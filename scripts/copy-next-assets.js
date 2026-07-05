const fs = require('fs');
const path = require('path');

const srcPublic = path.join(__dirname, '../public');
const destPublic = path.join(__dirname, '../.next/standalone/public');

const srcStatic = path.join(__dirname, '../.next/static');
const destStatic = path.join(__dirname, '../.next/standalone/.next/static');

const standaloneDir = path.join(__dirname, '../.next/standalone');

if (!fs.existsSync(standaloneDir)) {
  console.error('Error: .next/standalone does not exist. Please run next build first.');
  process.exit(1);
}

try {
  console.log('Copying public assets to standalone...');
  if (fs.existsSync(srcPublic)) {
    fs.cpSync(srcPublic, destPublic, { recursive: true, force: true });
    console.log('Successfully copied public assets.');
  } else {
    console.log('Warning: public directory not found.');
  }

  console.log('Copying static assets to standalone...');
  if (fs.existsSync(srcStatic)) {
    fs.cpSync(srcStatic, destStatic, { recursive: true, force: true });
    console.log('Successfully copied static assets.');
  } else {
    console.log('Warning: .next/static directory not found.');
  }

  // Remove .env file from standalone directory to prevent electron-builder from failing on default exclude rules
  const standaloneEnv = path.join(standaloneDir, '.env');
  if (fs.existsSync(standaloneEnv)) {
    console.log('Removing build-time .env file from standalone...');
    fs.unlinkSync(standaloneEnv);
  }

  console.log('Next.js standalone assets copied successfully!');
} catch (err) {
  console.error('Error copying Next.js standalone assets:', err);
  process.exit(1);
}
