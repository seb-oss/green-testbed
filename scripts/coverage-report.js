import { readFile } from "node:fs/promises";

function countStatuses(components, tierKey) {
  const counts = {
    complete: 0,
    review: 0,
    "in-progress": 0,
    pending: 0,
    unknown: 0,
  };

  for (const entry of Object.values(components)) {
    const status = entry?.[tierKey]?.status ?? "unknown";
    if (status in counts) counts[status] += 1;
    else counts.unknown += 1;
  }

  return counts;
}

function sumCounts(counts) {
  return Object.values(counts).reduce((acc, n) => acc + n, 0);
}

function formatCounts(counts) {
  const orderedKeys = [
    "complete",
    "review",
    "in-progress",
    "pending",
    "unknown",
  ];
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

  const tier1 = countStatuses(components, "tier1");
  const tier2 = countStatuses(components, "tier2");
  const tier3 = countStatuses(components, "tier3");

  console.log("Component Coverage Report");
  console.log("═════════════════════════════════════");
  console.log(`Total Components: ${total}`);
  console.log(`Tier 1: ${formatCounts(tier1)} (total ${sumCounts(tier1)})`);
  console.log(`Tier 2: ${formatCounts(tier2)} (total ${sumCounts(tier2)})`);
  console.log(`Tier 3: ${formatCounts(tier3)} (total ${sumCounts(tier3)})`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
