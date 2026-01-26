import { LitElement, css } from "lit";
import { Router, Routes } from "@lit-labs/router";
import { customElement, property } from "lit/decorators.js";
import { html } from "@sebgroup/green-core/scoping";
import { GdsTheme } from "@sebgroup/green-core/pure";

import "@sebgroup/fonts/scss/gds-fonts.scss";

import "@sebgroup/green-core/everything";

import "@sebgroup/green-core/components/icon/icons/minus-small.js";

import { COMPONENT_SHOWCASES } from "./components/registry";

GdsTheme.define();

if (!(globalThis as any).URLPattern) {
  await import("urlpattern-polyfill");
}

@customElement("green-testbed-main")
export class MyElement extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  private _router = new Router(this, [
    {
      path: "/",
      render: () => html`
        <gds-flex flex-direction="column" gap="l" max-width="960px" padding="l">
          <gds-text tag="h1">Green testbed</gds-text>
          <gds-flex direction="row" gap="m" flex-wrap>
            <gds-link href="/green-testbed/all-components"
              >All components</gds-link
            >
            <gds-link href="/green-testbed/form">Form scenario</gds-link>
            <gds-link href="/green-testbed/components"
              >Component pages</gds-link
            >
          </gds-flex>
        </gds-flex>
      `,
    },
    {
      path: "/green-testbed/components",
      render: () => html`
        <gds-flex flex-direction="column" gap="l" max-width="960px" padding="l">
          <gds-text tag="h1">Component pages</gds-text>
          <gds-flex flex-direction="column" gap="s">
            ${COMPONENT_SHOWCASES.map(
              (c) =>
                html`<gds-link href="/green-testbed/component/${c.name}"
                  >${c.name}</gds-link
                >`,
            )}
          </gds-flex>
        </gds-flex>
      `,
    },
    {
      path: "/green-testbed/component/:name",
      render: ({ name }) =>
        html`<component-host .name=${name}></component-host>`,
      enter: (async () => {
        await import("./components/component-host.js");
      }) as any,
    },
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
    return html`<gds-theme><main>${this._router.outlet()}</main></gds-theme>`;
  }
}
