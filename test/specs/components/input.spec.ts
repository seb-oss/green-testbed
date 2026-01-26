import { expect, browser } from "@wdio/globals";
import { ComponentPage } from "../../helpers/component-page";

class InputPage extends ComponentPage {
  constructor() {
    super("gds-input");
  }
}

describe("gds-input Tier1 /", () => {
  before(async () => {
    await browser.url(
      `${process.env.TESTBED_URL as string}/component/gds-input`,
    );
  });

  it("should render", async () => {
    const page = new InputPage();
    await page.waitForReady();
    expect(await page.component.isExisting()).toBe(true);
  });
});
