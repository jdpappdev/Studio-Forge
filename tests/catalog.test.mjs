import assert from "node:assert/strict";
import test from "node:test";
import { guidance } from "../knowledge/catalog.mjs";

const allowedDomains = new Set([
  "design",
  "ui-ux",
  "design-system",
  "motion",
  "accessibility",
  "responsive-design",
  "react",
  "review",
  "implementation",
]);

test("guidance catalog has unique identifiers", () => {
  const ids = guidance.map((item) => item.id);
  assert.ok(ids.length > 0, "catalog should not be empty");
  assert.equal(new Set(ids).size, ids.length, "catalog IDs must be unique");
});

test("every guidance entry has searchable, valid fields", () => {
  for (const item of guidance) {
    assert.equal(typeof item.id, "string");
    assert.ok(item.id.length > 0);
    assert.equal(typeof item.title, "string");
    assert.ok(item.title.length > 0);
    assert.ok(allowedDomains.has(item.domain), `unknown domain: ${item.domain}`);
    assert.ok(Array.isArray(item.tags) && item.tags.length > 0, `${item.id} needs tags`);
    assert.ok(item.tags.every((tag) => typeof tag === "string" && tag.length > 0));
    assert.equal(typeof item.text, "string");
    assert.ok(item.text.length > 0);
    assert.ok(Array.isArray(item.sources) && item.sources.length > 0, `${item.id} needs source IDs`);
    assert.ok(item.sources.every((source) => typeof source === "string" && source.length > 0));
  }
});
