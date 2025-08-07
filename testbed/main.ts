import { LitElement, css } from "lit";
import { Router, Routes } from "@lit-labs/router";
import { customElement, property } from "lit/decorators.js";
import { html } from "@sebgroup/green-core/scoping";

import "@sebgroup/fonts/scss/gds-fonts.scss";

if (!(globalThis as any).URLPattern) {
  await import("urlpattern-polyfill");
}

@customElement("green-testbed-main")
export class MyElement extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  private _router = new Router(this, [
    { path: "/", render: () => html`<h1>Green testbed</h1>` },
    {
      path: "/green-testbed/all-components",
      render: () => html`<all-components></all-components>`,
      enter: (async (params) => {
        await import("./all-components.js");
      }) as any,
    },
    {
      path: "/green-testbed/form",
      render: () => html`<form-view></form-view>`,
      enter: (async (params) => {
        await import("./form.js");
      }) as any,
    },
  ]);

  render() {
    return html`<main>${this._router.outlet()}</main>`;
  }
}
