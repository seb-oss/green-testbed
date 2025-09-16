import { expect, browser, $ } from "@wdio/globals";

describe("All components /", () => {
  before(async () => {
    await browser.url(`${process.env.TESTBED_URL as string}/all-components`);
  });

  it("Renders a gds-badge", async () => {
    let badge = $("[gds-element=gds-badge]");
    await badge.waitForExist();
    expect(await badge.isExisting()).toBe(true);
    //await expect(badge).toMatchElementSnapshot("gds-badge");
  });

  it("Renders a gds-button", async () => {
    let button = $("[gds-element=gds-button]");
    expect(await button.isExisting()).toBe(true);
    //await expect(button).toMatchElementSnapshot("gds-button");
  });

  it("Renders a gds-calendar", async () => {
    let calendar = $("[gds-element=gds-calendar]");
    expect(await calendar.isExisting()).toBe(true);
    //await expect(calendar).toMatchElementSnapshot("gds-calendar");
  });

  it("Renders a gds-card", async () => {
    let card = $("[gds-element=gds-card]");
    expect(await card.isExisting()).toBe(true);
    //await expect(card).toMatchElementSnapshot("gds-card");
  });

  it("Renders a gds-div", async () => {
    let div = $("[gds-element=gds-div]");
    expect(await div.isExisting()).toBe(true);
    //await expect(div).toMatchElementSnapshot("gds-div");
  });

  it("Renders a gds-context-menu", async () => {
    let contextMenu = $("[gds-element=gds-context-menu]");
    expect(await contextMenu.isExisting()).toBe(true);
  });

  it("Renders a gds-datepicker", async () => {
    let datepicker = $("[gds-element=gds-datepicker]");
    expect(await datepicker.isExisting()).toBe(true);
    //await expect(datepicker).toMatchElementSnapshot("gds-datepicker");
  });

  it("Renders a gds-dialog", async () => {
    let dialog = $("[gds-element=gds-dialog]");
    expect(await dialog.isExisting()).toBe(true);
  });

  it("Renders a gds-divider", async () => {
    let divider = $("[gds-element=gds-divider]");
    expect(await divider.isExisting()).toBe(true);
    //await expect(divider).toMatchElementSnapshot("gds-divider");
  });

  it("Renders a gds-dropdown", async () => {
    let dropdown = $("[gds-element=gds-dropdown]");
    expect(await dropdown.isExisting()).toBe(true);
    //await expect(dropdown).toMatchElementSnapshot("gds-dropdown");
  });

  it("Renders a gds-filter-chips", async () => {
    let filterChips = $("[gds-element=gds-filter-chips]");
    expect(await filterChips.isExisting()).toBe(true);
    //await expect(filterChips).toMatchElementSnapshot("gds-filter-chips");
  });

  it("Renders a gds-flex", async () => {
    let flex = $("[gds-element=gds-flex]");
    expect(await flex.isExisting()).toBe(true);
  });

  it("Renders a gds-grid", async () => {
    let grid = $("[gds-element=gds-grid]");
    expect(await grid.isExisting()).toBe(true);
  });

  it("Renders a gds-grouped-list", async () => {
    let groupedList = $("[gds-element=gds-grouped-list]");
    expect(await groupedList.isExisting()).toBe(true);
  });

  it("Renders a gds-icon", async () => {
    let iconBank = $("[gds-element^=gds-icon]");
    expect(await iconBank.isExisting()).toBe(true);
    //await expect(iconBank).toMatchElementSnapshot("gds-icon-bank");
  });

  it("Renders a gds-img", async () => {
    let img = $("[gds-element=gds-img]");
    expect(await img.isExisting()).toBe(true);
    //await expect(img).toMatchElementSnapshot("gds-img");
  });

  it("Renders a gds-input", async () => {
    let input = $("[gds-element=gds-input]");
    expect(await input.isExisting()).toBe(true);
    //await expect(input).toMatchElementSnapshot("gds-input");
  });

  it("Renders a gds-link", async () => {
    let link = $("[gds-element=gds-link]");
    expect(await link.isExisting()).toBe(true);
    //await expect(link).toMatchElementSnapshot("gds-link");
  });

  it("Renders a gds-mask", async () => {
    let mask = $("[gds-element=gds-mask]");
    expect(await mask.isExisting()).toBe(true);
  });

  it("Renders a gds-menu-button", async () => {
    let menuButton = $("[gds-element=gds-menu-button]");
    expect(await menuButton.isExisting()).toBe(true);
    //await expect(menuButton).toMatchElementSnapshot("gds-menu-button");
  });

  it("Renders a gds-popover", async () => {
    let popover = $("[gds-element=gds-popover]");
    expect(await popover.isExisting()).toBe(true);
  });

  it("Renders a gds-rich-text", async () => {
    let richtext = $("[gds-element=gds-rich-text]");
    expect(await richtext.isExisting()).toBe(true);
  });

  it("Renders a gds-segmented-control", async () => {
    let segmentedControl = $("[gds-element=gds-segmented-control]");
    expect(await segmentedControl.isExisting()).toBe(true);
    //await expect(segmentedControl).toMatchElementSnapshot(
    //  "gds-segmented-control"
    //);
  });

  it("Renders a gds-signal", async () => {
    let signal = $("[gds-element=gds-signal]");
    expect(await signal.isExisting()).toBe(true);
  });

  it("Renders a gds-text", async () => {
    let text = $("[gds-element=gds-text]");
    expect(await text.isExisting()).toBe(true);
    //await expect(text).toMatchElementSnapshot("gds-text");
  });

  it("Renders a gds-textarea", async () => {
    let textarea = $("[gds-element=gds-textarea]");
    expect(await textarea.isExisting()).toBe(true);
    // await expect(textarea).toMatchElementSnapshot("gds-textarea");
  });

  it("Renders a gds-theme", async () => {
    let theme = $("[gds-element=gds-theme]");
    expect(await theme.isExisting()).toBe(true);
  });

  it("Renders a gds-video", async () => {
    let video = $("[gds-element=gds-video]");
    expect(await video.isExisting()).toBe(true);
  });

  it("Renders a gds-checkbox-group", async () => {
    let checkboxGroup = $("[gds-element=gds-checkbox-group]");
    expect(await checkboxGroup.isExisting()).toBe(true);
    //await expect(checkboxGroup).toMatchElementSnapshot("gds-checkbox-group");
  });

  it("Renders a gds-radio-group", async () => {
    let radioGroup = $("[gds-element=gds-radio-group]");
    expect(await radioGroup.isExisting()).toBe(true);
    //await expect(radioGroup).toMatchElementSnapshot("gds-radio-group");
  });
});
