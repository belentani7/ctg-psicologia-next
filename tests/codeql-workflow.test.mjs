import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const workflow = readFileSync(new URL('../.github/workflows/codeql.yml', import.meta.url), 'utf8');

test('CodeQL workflow has executable steps, not an empty quality job', () => {
  assert.match(workflow, /^jobs:\s*\n  analyze:/m);
  assert.doesNotMatch(workflow, /^  quality:/m);
  assert.match(workflow, /^    steps:\s*\n      - name: Checkout/m);
});

test('CodeQL scans JavaScript/TypeScript with supported v4 actions', () => {
  assert.match(workflow, /uses: github\/codeql-action\/init@v4/);
  assert.match(workflow, /languages: javascript-typescript/);
  assert.match(workflow, /build-mode: none/);
  assert.match(workflow, /uses: github\/codeql-action\/analyze@v4/);
});

test('CodeQL permissions are scoped and checkout does not persist credentials', () => {
  assert.match(workflow, /^permissions:\s*\n  contents: read/m);
  assert.match(workflow, /^      security-events: write/m);
  assert.match(workflow, /persist-credentials: false/);
  assert.match(workflow, /timeout-minutes: 30/);
});
