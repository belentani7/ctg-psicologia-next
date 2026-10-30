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


test("privacy guidance precedes contact actions in DOM and keyboard reading order", () => {
  const contactPage = readFileSync(new URL("../src/components/pages/ContactoPage.tsx", import.meta.url), "utf8");
  const homeNotice = home.indexOf("{t.privacy}");
  const homePhone = home.indexOf("href={`tel:");
  const homeWhatsApp = home.indexOf("href={`https://wa.me/");
  assert.ok(homeNotice !== -1 && homeNotice < homePhone && homeNotice < homeWhatsApp,
    "Homepage privacy guidance must precede call and external WhatsApp actions");

  const contactNotice = contactPage.indexOf("{t.caution}");
  const contactEmail = contactPage.indexOf("href={`mailto:");
  const contactWhatsApp = contactPage.indexOf("href={whatsappUri}");
  assert.ok(contactNotice !== -1 && contactNotice < contactEmail && contactNotice < contactWhatsApp,
    "Contact privacy guidance must precede email and WhatsApp actions");
});
