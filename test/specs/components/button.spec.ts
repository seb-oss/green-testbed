import { expect, browser } from "@wdio/globals";
import { ComponentPage } from "../../helpers/component-page";

class ButtonPage extends ComponentPage {
  constructor() {
    super("gds-button");
  }
}

describe("gds-button Tier1 /", () => {
  before(async () => {
    await browser.url(
      `${process.env.TESTBED_URL as string}/component/gds-button`,
    );
  });

  it("should render", async () => {
    const page = new ButtonPage();
    await page.waitForReady();
    expect(await page.component.isExisting()).toBe(true);
  });
});
