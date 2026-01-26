import { expect, browser } from "@wdio/globals";
import { ComponentPage } from "../../helpers/component-page";
import { testbedUrl } from "../../helpers/testbed-url";

class ButtonPage extends ComponentPage {
  constructor() {
    super("gds-button");
  }
}

describe("gds-button Interaction /", () => {
  before(async () => {
    await browser.url(testbedUrl("/component/gds-button"));
  });

  it("should render", async () => {
    const page = new ButtonPage();
    await page.waitForReady();
    expect(await page.component.isExisting()).toBe(true);
  });
});
