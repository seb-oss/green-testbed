import { browser } from "@wdio/globals";

export async function waitForState(
  element: WebdriverIO.Element,
  stateName: string,
  expectedValue: unknown = true,
  timeout = 5000,
): Promise<void> {
  await browser.waitUntil(
    async () => {
      const stateValue = await element.execute(
        (el: any, state: string) => el?.[state],
        stateName,
      );
      return stateValue === expectedValue;
    },
    {
      timeout,
      timeoutMsg: `State ${stateName} did not become ${String(expectedValue)}`,
    },
  );
}

export async function waitForEvent(
  element: WebdriverIO.Element,
  eventName: string,
  timeout = 5000,
): Promise<{ type: string; detail?: unknown }> {
  const eventPromise = browser.execute(
    (el: any, event: string) => {
      return new Promise((resolve) => {
        const handler = (e: Event) => {
          el.removeEventListener(event, handler);
          resolve({
            type: e.type,
            detail: (e as CustomEvent).detail,
          });
        };
        el.addEventListener(event, handler);
      });
    },
    element,
    eventName,
  );

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(
      () => reject(new Error(`Event ${eventName} not fired`)),
      timeout,
    ),
  );

  return (await Promise.race([eventPromise, timeoutPromise])) as {
    type: string;
    detail?: unknown;
  };
}
