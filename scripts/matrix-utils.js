import { readFile, writeFile } from "node:fs/promises";

const MATRIX_URL = new URL("../test/coverage-matrix.json", import.meta.url);

export async function readMatrix() {
  const raw = await readFile(MATRIX_URL, "utf8");
  return JSON.parse(raw);
}

export async function writeMatrix(matrix) {
  await writeFile(MATRIX_URL, JSON.stringify(matrix, null, 2) + "\n", "utf8");
}

export function getMatrixEntry(matrix, componentName) {
  const entry = matrix?.components?.[componentName];
  if (!entry) {
    throw new Error(`Component not found in coverage matrix: ${componentName}`);
  }
  return entry;
}
