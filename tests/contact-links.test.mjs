import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const home = readFileSync(new URL("../src/components/pages/HomePage.tsx", import.meta.url), "utf8");
const content = readFileSync(new URL("../src/data/content.ts", import.meta.url), "utf8");

test("the homepage preserves an independent telephone and WhatsApp path", () => {
  assert.match(home, /href=\{\`tel:/);
  assert.match(home, /href=\{\`https:\/\/wa\.me\//);
  assert.match(home, /rel="noopener noreferrer"/);
  assert.match(home, /contact\.phone\.replace/);
  assert.doesNotMatch(home, /wa\.me\/34605362664/);
});

test("the service details and safe contact copy are localized", () => {
  assert.match(home, /<main lang=\{locale\}>/);
  assert.match(home, /WhatsApp es un servicio externo/);
  assert.match(home, /WhatsApp és un servei extern/);
  assert.match(home, /WhatsApp is an external service/);
  assert.match(content, /export const services:/);
  assert.match(content, /export const contact =/);
});
