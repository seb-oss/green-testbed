import { browser } from "@wdio/globals";

export const Keys = {
  Enter: "\uE007",
  Space: "\uE00D",
  Escape: "\uE00C",
  Tab: "\uE004",
  ArrowDown: "\uE015",
  ArrowUp: "\uE013",
  ArrowLeft: "\uE012",
  ArrowRight: "\uE014",
} as const;

export async function pressKey(key: string): Promise<void> {
  await browser.keys(key);
  await browser.pause(100);
}
