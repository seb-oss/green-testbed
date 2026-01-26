import { expect, browser } from "@wdio/globals";
import { ComponentPage } from "../../helpers/component-page";
import { testbedUrl } from "../../helpers/testbed-url";

class DropdownPage extends ComponentPage {
  constructor() {
    super("gds-dropdown");
  }
}

describe("gds-dropdown Interaction /", () => {
  before(async () => {
    await browser.url(testbedUrl("/component/gds-dropdown"));
  });

  it("should render", async () => {
    const page = new DropdownPage();
    await page.waitForReady();
    expect(await page.component.isExisting()).toBe(true);
  });
});
