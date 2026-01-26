import { browser, expect } from "@wdio/globals";

export async function snapshotWithRetry(
  element: WebdriverIO.Element,
  name: string,
  options: { retries?: number; delayMs?: number } = {},
): Promise<void> {
  const { retries = 3, delayMs = 300 } = options;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await browser.pause(delayMs);
      await expect(element).toMatchElementSnapshot(name);
      return;
    } catch (error) {
      if (attempt === retries) throw error;
    }
  }
}
