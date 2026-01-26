import { LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { html } from "@sebgroup/green-core/scoping";

import "@sebgroup/green-core/everything";

import { getShowcaseEntry } from "./registry";

@customElement("component-host")
export class ComponentHost extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  @property({ type: String })
  name = "";

  @state()
  private _status: "idle" | "loading" | "ready" | "not-found" = "idle";

  @state()
  private _elementTag: string | null = null;

  protected async updated(changed: Map<string, unknown>) {
    if (!changed.has("name")) return;
    await this._load();
  }

  private async _load() {
    const entry = getShowcaseEntry(this.name);

    if (!entry) {
      this._status = "not-found";
      this._elementTag = null;
      return;
    }

    this._status = "loading";

    await entry.load();

    this._elementTag = entry.elementTag;
    this._status = "ready";

    await this.updateComplete;

    const mount = this.querySelector("#showcase-mount");
    if (!mount || !this._elementTag) return;

    mount.replaceChildren();
    mount.appendChild(document.createElement(this._elementTag));
  }

  render() {
    const entry = getShowcaseEntry(this.name);

    return html`
      <gds-flex flex-direction="column" gap="l" max-width="960px" padding="l">
        <gds-text tag="h1">${entry?.title ?? "Component"}</gds-text>

        ${this._status === "not-found"
          ? html`<gds-text>Unknown component: ${this.name}</gds-text>`
          : html`<gds-div id="showcase-mount"></gds-div>`}
      </gds-flex>
    `;
  }
}
