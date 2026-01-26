import { expect, browser } from "@wdio/globals";
import { ComponentPage } from "../../helpers/component-page";

class DropdownPage extends ComponentPage {
  constructor() {
    super("gds-dropdown");
  }
}

describe("gds-dropdown Tier1 /", () => {
  before(async () => {
    await browser.url(
      `${process.env.TESTBED_URL as string}/component/gds-dropdown`,
    );
  });

  it("should render", async () => {
    const page = new DropdownPage();
    await page.waitForReady();
    expect(await page.component.isExisting()).toBe(true);
  });
});
