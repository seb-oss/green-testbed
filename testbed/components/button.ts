import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { html } from "@sebgroup/green-core/scoping";

import "@sebgroup/green-core/everything";

@customElement("gds-button-showcase")
export class GdsButtonShowcase extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <gds-flex flex-direction="column" gap="xl">
        <gds-text tag="h2">Variants</gds-text>
        <gds-flex direction="row" gap="m" align-items="center" flex-wrap>
          <gds-button id="primary-button" rank="primary">Primary</gds-button>
          <gds-button rank="secondary">Secondary</gds-button>
          <gds-button rank="tertiary">Tertiary</gds-button>
        </gds-flex>

        <gds-text tag="h2">States</gds-text>
        <gds-flex direction="row" gap="m" align-items="center" flex-wrap>
          <gds-button disabled>Disabled</gds-button>
        </gds-flex>
      </gds-flex>
    `;
  }
}
