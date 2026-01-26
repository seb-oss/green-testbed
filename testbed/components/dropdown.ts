import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { html } from "@sebgroup/green-core/scoping";

import "@sebgroup/green-core/everything";

@customElement("gds-dropdown-showcase")
export class GdsDropdownShowcase extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <gds-flex flex-direction="column" gap="xl" max-width="400px">
        <gds-text tag="h2">Default</gds-text>
        <gds-dropdown id="dropdown-default" label="Country" clearable>
          <gds-option>Select a country...</gds-option>
          <gds-option value="sweden">Sweden</gds-option>
          <gds-option value="norway">Norway</gds-option>
          <gds-option value="finland">Finland</gds-option>
        </gds-dropdown>

        <gds-text tag="h2">Disabled</gds-text>
        <gds-dropdown id="dropdown-disabled" label="Country" disabled>
          <gds-option value="sweden">Sweden</gds-option>
        </gds-dropdown>
      </gds-flex>
    `;
  }
}
