import { expect, browser } from "@wdio/globals";
import { ComponentPage } from "../../helpers/component-page";
import { testbedUrl } from "../../helpers/testbed-url";

class InputPage extends ComponentPage {
  constructor() {
    super("gds-input");
  }
}

describe("gds-input Interaction /", () => {
  before(async () => {
    await browser.url(testbedUrl("/component/gds-input"));
  });

  it("should render", async () => {
    const page = new InputPage();
    await page.waitForReady();
    expect(await page.component.isExisting()).toBe(true);
  });
});
