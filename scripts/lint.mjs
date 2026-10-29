import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Narrow dependency-free safety lint. TypeScript is checked separately with npm run check.
// This does NOT replace a full ESLint or browser accessibility audit.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');
const layout = read('src/components/Layout.tsx');
const home = read('src/components/pages/HomePage.tsx');
const contactPage = read('src/components/pages/ContactoPage.tsx');
const servicesPage = read('src/components/pages/ServiciosPage.tsx');
const blogPage = read('src/components/pages/BlogPage.tsx');
const data = read('src/data/content.ts');

const issues = [];
const phone = data.match(/\bphone:\s*'([^']+)'/);
const email = data.match(/\bemail:\s*'([^']+)'/);
if (!phone || !email) issues.push('canonical contact fields are missing');
if (!/contact\.address\[locale\]/.test(layout) ||
    !/\{contact\.phone\}/.test(layout) ||
    !/\{contact\.email\}/.test(layout)) issues.push('footer must use canonical contact fields');
if (phone && layout.includes(phone[1])) issues.push('footer duplicates the phone literal');
if (email && layout.includes(email[1])) issues.push('footer duplicates the email literal');
if (/<a\b[^>]*href=["']#["']/i.test(layout)) issues.push('placeholder legal links must not be clickable');
if (/wa\.me\/\d{8,}/.test(home + contactPage)) issues.push('WhatsApp number must come from canonical contact');
if (/<form\b/i.test(contactPage)) issues.push('unwired health-data form is not permitted');
if (!/rel="noopener noreferrer"/.test(home) ||
    !/rel="noopener noreferrer"/.test(contactPage)) issues.push('external messaging links must be safe');
if (/wa\.me\/\d{8,}/.test(servicesPage) || !/href=\{contactHref\}/.test(servicesPage)) {
  issues.push('service CTA must link to the localized contact page, not a hard-coded messaging number');
}
if (/\{read\}\s*→/.test(blogPage) || !/\{summary\}/.test(blogPage)) {
  issues.push('blog summaries must not imply full articles exist without real article routes');
}

if (issues.length) {
  for (const issue of issues) console.error('Contact quality guard: ' + issue);
  process.exitCode = 1;
} else {
  console.log('Contact quality guard passed (limited project-specific rules).');
}
