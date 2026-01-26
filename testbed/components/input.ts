import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { html } from "@sebgroup/green-core/scoping";

import "@sebgroup/green-core/everything";

@customElement("gds-input-showcase")
export class GdsInputShowcase extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <gds-flex flex-direction="column" gap="xl" max-width="400px">
        <gds-text tag="h2">Default</gds-text>
        <gds-input id="input-default" label="Your name" clearable></gds-input>

        <gds-text tag="h2">Disabled</gds-text>
        <gds-input
          id="input-disabled"
          label="Your name"
          disabled
          value="Jane Doe"
        ></gds-input>
      </gds-flex>
    `;
  }
}
