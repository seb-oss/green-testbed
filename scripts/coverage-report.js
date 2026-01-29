import { readFile } from "node:fs/promises";

function countStatuses(components, key) {
  const counts = {
    validated: 0,
    review: 0,
    blocked: 0,
    pending: 0,
    unknown: 0,
  };

  for (const entry of Object.values(components)) {
    const status = entry?.[key]?.status ?? "unknown";
    if (status in counts) counts[status] += 1;
    else counts.unknown += 1;
  }

  return counts;
}

function sumCounts(counts) {
  return Object.values(counts).reduce((acc, n) => acc + n, 0);
}

function formatCounts(counts) {
  const orderedKeys = ["validated", "review", "blocked", "pending", "unknown"];
  return orderedKeys.map((k) => `${k}: ${counts[k]}`).join(" | ");
}

async function main() {
  const raw = await readFile(
    new URL("../test/coverage-matrix.json", import.meta.url),
    "utf8",
  );
  const matrix = JSON.parse(raw);

  const components = matrix.components ?? {};
  const total = Object.keys(components).length;

  const interaction = countStatuses(components, "interaction");
  const accessibility = countStatuses(components, "accessibility");
  const visual = countStatuses(components, "visual");

  console.log("Component Coverage Report");
  console.log("═════════════════════════════════════");
  console.log(`Total Components: ${total}`);
  console.log(
    `Interaction: ${formatCounts(interaction)} (total ${sumCounts(interaction)})`,
  );
  console.log(
    `Accessibility: ${formatCounts(accessibility)} (total ${sumCounts(accessibility)})`,
  );
  console.log(`Visual: ${formatCounts(visual)} (total ${sumCounts(visual)})`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
