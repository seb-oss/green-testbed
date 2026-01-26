import { browser, expect, $ } from "@wdio/globals";

export abstract class ComponentPage {
  constructor(
    protected componentName: string, // e.g. "gds-button"
    protected testId?: string,
  ) {}

  get component(): WebdriverIO.Element {
    if (this.testId) return $("#" + this.testId);

    // Support both tag-based selection and the testbed's gds-element attribute.
    return $(
      `${this.componentName},[gds-element='${this.componentName}']`,
    ) as WebdriverIO.Element;
  }

  async waitForReady(timeout = 10_000): Promise<void> {
    await this.component.waitForExist({ timeout });

    await browser.waitUntil(
      async () => {
        const isReady = await this.component.execute((el: Element) => {
          const anyEl = el as any;
          return (
            el.hasAttribute("ready") ||
            anyEl.updateComplete !== undefined ||
            anyEl.shadowRoot !== null
          );
        });
        return Boolean(isReady);
      },
      { timeout, timeoutMsg: `${this.componentName} not ready` },
    );
  }

  async getProp<T = unknown>(propName: string): Promise<T> {
    return (await this.component.execute(
      (el: any, prop: string) => el[prop],
      propName,
    )) as T;
  }

  async setProp(propName: string, value: unknown): Promise<void> {
    await this.component.execute(
      (el: any, prop: string, val: unknown) => {
        el[prop] = val;
      },
      propName,
      value,
    );
  }

  async shadow$(selector: string): Promise<WebdriverIO.Element> {
    return (await this.component.shadow$(selector)) as WebdriverIO.Element;
  }

  async takeSnapshot(name: string): Promise<void> {
    await expect(this.component).toMatchElementSnapshot(name);
  }
}
