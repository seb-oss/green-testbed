import { expect, browser, $, $$ } from "@wdio/globals";

describe("Form /", () => {
  before(async () => {
    await browser.url(`${process.env.TESTBED_URL as string}/form`);
  });

  it("should display the form", async () => {
    const form = $("form");
    expect(form).toBeDisplayed();
  });

  // it("should tab in the correct sequence", async () => {
  //   for (let i = 1; i <= 21; i++) {
  //     await browser.keys("Tab");
  //     await expect(browser).toMatchScreenSnapshot(`form-tab${i}`);
  //   }
  // });

  it("should not show any errors initially", async () => {
    const form = $("form");
    const formText = await form.getText();
    expect(formText).not.toContain("This field cannot be empty");
  });

  it("should show errors when submitting empty fields", async () => {
    const submitButton = $("#submit-button");
    await submitButton.execute((el) => {
      el.shadowRoot?.querySelector("button")?.click();
    });

    await browser.pause(500); // Wait for validation to complete

    const formElements = await $$(".form-control");

    for (const element of formElements) {
      const isInvalid = (await element.execute(
        (el: any) => el.invalid
      )) as boolean;
      const errorMessage = (await element.execute(
        (el: any) => el.errorMessage
      )) as string;

      expect(isInvalid).toBe(true);
      expect(errorMessage).toContain("This field cannot be empty");
    }
  });
});
