import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const lock = JSON.parse(readFileSync(new URL('../package-lock.json', import.meta.url), 'utf8'));

function versionParts(value) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(value || '');
  assert.ok(match, `Expected a pinned stable version, received: ${value}`);
  return match.slice(1).map(Number);
}

test('Next.js lockfile matches the manifest and includes the security fixes', () => {
  const pinned = lock.packages['node_modules/next']?.version;
  const [major, minor, patch] = versionParts(pinned);
  assert.equal(lock.packages[''].dependencies.next, manifest.dependencies.next);
  assert.ok(
    (major === 15 && minor === 5 && patch >= 28) ||
    (major === 16 && (minor > 4 || (minor === 4 && patch >= 1))) ||
    major > 16,
    `Next.js ${pinned} predates the October 2026 security patches`,
  );
});

test('every bundled sharp binary uses the patched image-processing release', () => {
  const entries = Object.entries(lock.packages).filter(([name]) =>
    name === 'node_modules/sharp' ||
    (name.startsWith('node_modules/@img/sharp-') && !name.includes('libvips'))
  );
  assert.ok(entries.length > 0, 'sharp packages must be present in the lockfile');
  for (const [name, info] of entries) {
    const [major, minor, patch] = versionParts(info.version);
    assert.ok(
      major > 0 || minor > 35 || (minor === 35 && patch >= 5),
      `${name} is pinned to vulnerable sharp ${info.version}`,
    );
  }
});

test('PostCSS selector parser uses the fixed release on its compatible major line', () => {
  const pinned = lock.packages['node_modules/postcss-selector-parser']?.version;
  const [major, minor, patch] = versionParts(pinned);
  assert.ok(
    (major === 6 && (minor > 1 || (minor === 1 && patch >= 5))) ||
    (major === 7 && (minor > 1 || (minor === 1 && patch >= 6))) ||
    major > 7,
    `postcss-selector-parser ${pinned} is affected by GHSA-rj75-hqrm-r3gf`,
  );
  assert.equal(manifest.overrides['postcss-selector-parser'], '6.1.5');
});

test('source-map-js is pinned above the indexed-source-map denial-of-service fix', () => {
  const pinned = lock.packages['node_modules/source-map-js']?.version;
  const [major, minor, patch] = versionParts(pinned);
  assert.ok(
    major > 1 || (major === 1 && (minor > 2 || (minor === 2 && patch >= 2))),
    `source-map-js ${pinned} is affected by GHSA-68fv-2mgg-jv7q`,
  );
  assert.equal(manifest.overrides['source-map-js'], '1.2.2');
});
