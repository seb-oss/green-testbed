import { expect, browser, $ } from "@wdio/globals";

// Example patterns for interactive components (buttons, links, etc.).
// This file is agent context only; it is not executed by WDIO.

describe("Interactive Template /", () => {
  before(async () => {
    await browser.url(
      `${process.env.TESTBED_URL as string}/component/gds-button`,
    );
  });

  it("should render", async () => {
    const el = $("gds-button,[gds-element='gds-button']");
    await el.waitForExist();
    expect(await el.isExisting()).toBe(true);
  });

  it("should be focusable", async () => {
    const el = $("gds-button,[gds-element='gds-button']");
    await el.click();
    await browser.keys("Tab");
  });
});
