import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL(".", import.meta.url).pathname;
const supportEmail = "fast-support@eriad.com";

const requiredFiles = [
  "index.html",
  "support.html",
  "privacy.html",
  "privacy-choices.html",
  "app-store.md",
  "styles.css",
  "icon.svg",
];

const htmlPages = [
  "index.html",
  "support.html",
  "privacy.html",
  "privacy-choices.html",
];

const requiredLinks = [
  'href="index.html"',
  'href="support.html"',
  'href="privacy.html"',
  'href="privacy-choices.html"',
];

function read(file) {
  return readFileSync(join(root, file), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

for (const file of requiredFiles) {
  assert(statSync(join(root, file)).isFile(), `${file} is missing`);
}

for (const page of htmlPages) {
  const html = read(page);
  assert(html.includes(supportEmail), `${page} does not include support email`);
  assert(html.includes('rel="stylesheet" href="styles.css"'), `${page} does not load shared CSS`);
  for (const link of requiredLinks) {
    assert(html.includes(link), `${page} missing navigation link ${link}`);
  }
}

const privacy = read("privacy.html").toLowerCase();
for (const phrase of [
  "no accounts",
  "no analytics",
  "no ads",
  "no subscriptions",
  "no server-side data collection",
  "apple health",
  "general wellness",
  "not medical advice",
]) {
  assert(privacy.includes(phrase), `privacy.html missing phrase: ${phrase}`);
}

const support = read("support.html").toLowerCase();
for (const phrase of ["device model", "ios version", "feature requests"]) {
  assert(support.includes(phrase), `support.html missing phrase: ${phrase}`);
}

const metadata = read("app-store.md").toLowerCase();
for (const phrase of [
  "subtitle",
  "promotional text",
  "description",
  "keywords",
  "support url",
  "privacy policy url",
  "review notes",
]) {
  assert(metadata.includes(phrase), `app-store.md missing section: ${phrase}`);
}

console.log("fast-web static site checks passed");
