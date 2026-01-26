import { access, readFile } from "node:fs/promises";

const VALID_TIER_STATUSES = new Set([
  "pending",
  "in-progress",
  "review",
  "complete",
]);

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

async function fileExists(relativePath) {
  try {
    await access(new URL(`../${relativePath}`, import.meta.url));
    return true;
  } catch {
    return false;
  }
}

function fail(errors, message) {
  errors.push(message);
}

function validateTierStatus(errors, componentName, tierKey, status) {
  if (!VALID_TIER_STATUSES.has(status)) {
    fail(
      errors,
      `${componentName}: ${tierKey}.status must be one of ${Array.from(VALID_TIER_STATUSES).join(", ")}`,
    );
  }
}

async function main() {
  const raw = await readFile(
    new URL("../test/coverage-matrix.json", import.meta.url),
    "utf8",
  );
  const matrix = JSON.parse(raw);

  const errors = [];

  if (!isNonEmptyString(matrix.version))
    fail(errors, "matrix.version is required");
  if (!isNonEmptyString(matrix.lastUpdated))
    fail(errors, "matrix.lastUpdated is required");
  if (!isNonEmptyString(matrix.greenCoreVersion))
    fail(errors, "matrix.greenCoreVersion is required");

  const components = matrix.components ?? {};

  for (const [name, entry] of Object.entries(components)) {
    if (!isNonEmptyString(entry.category)) {
      fail(errors, `${name}: category is required`);
    }

    if (!entry.tier || ![1, 2, 3].includes(entry.tier)) {
      fail(errors, `${name}: tier must be 1, 2, or 3`);
    }

    if (!entry.tier1) {
      fail(errors, `${name}: tier1 is required`);
      continue;
    }

    if (entry.tier1.rendering !== true) {
      fail(errors, `${name}: tier1.rendering must be true`);
    }

    if (!Array.isArray(entry.tier1.basicProps)) {
      fail(errors, `${name}: tier1.basicProps must be an array`);
    }

    if (typeof entry.tier1.visualSnapshot !== "boolean") {
      fail(errors, `${name}: tier1.visualSnapshot must be boolean`);
    }

    validateTierStatus(errors, name, "tier1", entry.tier1.status);

    if (entry.tier2?.status)
      validateTierStatus(errors, name, "tier2", entry.tier2.status);
    if (entry.tier3?.status)
      validateTierStatus(errors, name, "tier3", entry.tier3.status);

    // sequencing rule
    if (
      entry.tier2?.status === "complete" &&
      entry.tier1.status !== "complete"
    ) {
      fail(
        errors,
        `${name}: tier2 cannot be complete unless tier1 is complete`,
      );
    }

    // file references: allow missing for stubs, but if present must exist
    if (isNonEmptyString(entry.testbedPage)) {
      // eslint-disable-next-line no-await-in-loop
      const exists = await fileExists(entry.testbedPage);
      if (!exists)
        fail(errors, `${name}: testbedPage not found: ${entry.testbedPage}`);
    }

    if (isNonEmptyString(entry.testSpec)) {
      // eslint-disable-next-line no-await-in-loop
      const exists = await fileExists(entry.testSpec);
      if (!exists)
        fail(errors, `${name}: testSpec not found: ${entry.testSpec}`);
    }
  }

  if (errors.length) {
    console.error("Coverage matrix validation failed:\n");
    for (const e of errors) console.error(`- ${e}`);
    process.exitCode = 1;
    return;
  }

  console.log("Coverage matrix validation passed");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
