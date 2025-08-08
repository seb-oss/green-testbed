import { expect, browser, $ } from "@wdio/globals";

describe("Form /", () => {
  before(async () => {
    await browser.url(`${process.env.TESTBED_URL as string}/form`);
  });

  it("should display the form", async () => {
    const form = await $("form");
    expect(form).toBeDisplayed();
  });

  it("should tab in the correct sequence", async () => {
    for (let i = 1; i <= 21; i++) {
      await browser.keys("Tab");
      await expect(browser).toMatchScreenSnapshot(`form-tab${i}`);
    }
  });
});
