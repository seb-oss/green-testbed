import { expect, browser, $ } from "@wdio/globals";
import { testbedUrl } from "../helpers/testbed-url";

// Example patterns for form controls (input, dropdown, etc.).
// This file is agent context only; it is not executed by WDIO.

describe("Form Control Template /", () => {
  before(async () => {
    await browser.url(testbedUrl("/component/gds-input"));
  });

  it("should render", async () => {
    const el = $("gds-input,[gds-element='gds-input']");
    await el.waitForExist();
    expect(await el.isExisting()).toBe(true);
  });

  it("should allow setting value", async () => {
    const el = $("gds-input,[gds-element='gds-input']");
    await el.execute((node: any) => {
      node.value = "hello";
    });
    const value = await el.execute((node: any) => node.value);
    expect(value).toBe("hello");
  });
});
