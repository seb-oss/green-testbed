import { access, readFile } from "node:fs/promises";

const VALID_STATUSES = new Set([
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

function validateStatus(errors, componentName, key, status) {
  if (!VALID_STATUSES.has(status)) {
    fail(
      errors,
      `${componentName}: ${key}.status must be one of ${Array.from(VALID_STATUSES).join(", ")}`,
    );
  }
}

function validateStringArray(errors, componentName, key, value) {
  if (value === undefined) return;
  if (!Array.isArray(value) || value.some((v) => typeof v !== "string")) {
    fail(errors, `${componentName}: ${key} must be an array of strings`);
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

    // required test categories
    if (!entry.interaction) {
      fail(errors, `${name}: interaction is required`);
    } else {
      if (!isNonEmptyString(entry.interaction.status)) {
        fail(errors, `${name}: interaction.status is required`);
      } else {
        validateStatus(errors, name, "interaction", entry.interaction.status);
      }

      validateStringArray(
        errors,
        name,
        "interaction.interactions",
        entry.interaction.interactions,
      );
      validateStringArray(
        errors,
        name,
        "interaction.events",
        entry.interaction.events,
      );
      validateStringArray(
        errors,
        name,
        "interaction.states",
        entry.interaction.states,
      );
      validateStringArray(
        errors,
        name,
        "interaction.keyboardNav",
        entry.interaction.keyboardNav,
      );
      validateStringArray(
        errors,
        name,
        "interaction.validation",
        entry.interaction.validation,
      );
      validateStringArray(
        errors,
        name,
        "interaction.edgeCases",
        entry.interaction.edgeCases,
      );
    }

    if (!entry.accessibility) {
      fail(errors, `${name}: accessibility is required`);
    } else {
      if (!isNonEmptyString(entry.accessibility.status)) {
        fail(errors, `${name}: accessibility.status is required`);
      } else {
        validateStatus(
          errors,
          name,
          "accessibility",
          entry.accessibility.status,
        );
      }

      validateStringArray(
        errors,
        name,
        "accessibility.checks",
        entry.accessibility.checks,
      );
    }

    // optional: visual
    if (entry.visual) {
      if (!isNonEmptyString(entry.visual.status)) {
        fail(
          errors,
          `${name}: visual.status is required when visual is present`,
        );
      } else {
        validateStatus(errors, name, "visual", entry.visual.status);
      }

      validateStringArray(
        errors,
        name,
        "visual.snapshots",
        entry.visual.snapshots,
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
