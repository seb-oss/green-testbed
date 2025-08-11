import { html } from "@sebgroup/green-core/scoping";
import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "@sebgroup/green-core/everything";
import { GdsValidator } from "@sebgroup/green-core/components/form/form-control.js";

const NotEmptyValidator: GdsValidator = {
  validate: (el: any) => {
    if (el.value === undefined || el.value.length === 0)
      return [
        { ...el.validity, valid: false, customError: true },
        "This field cannot be empty.",
      ];
  },
};

@customElement("form-view")
export class FormView extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  render() {
    return html`<gds-flex flex-direction="column" gap="xl" max-width="400px">
      <gds-text tag="h1">Form</gds-text>

      <form
        @submit=${(e: SubmitEvent) => {
          e.preventDefault();
        }}
      >
        <gds-card variant="secondary" border-color="primary">
          <gds-flex flex-direction="column" gap="l" id="form-controls">
            <gds-input
              class="form-control"
              label="Your name"
              supporting-text="Example support text"
              .validator=${NotEmptyValidator}
              clearable
            >
              <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </gds-input>
            <gds-datepicker
              class="form-control"
              label="Date of birth"
              supporting-text="Example support text"
              .validator=${NotEmptyValidator}
              clearable
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </gds-datepicker>
            <gds-dropdown
              class="form-control"
              label="Country"
              supporting-text="Example support text"
              .validator=${NotEmptyValidator}
              clearable
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-option value=""> Select a country... </gds-option>
              <gds-option value="sweden">Sweden</gds-option>
              <gds-option value="norway">Norway</gds-option>
              <gds-option value="finland">Finland</gds-option>
            </gds-dropdown>
            <gds-textarea
              class="form-control"
              label="Textarea"
              supporting-text="Example support text"
              .validator=${NotEmptyValidator}
              clearable
            >
              <gds-icon-ai slot="lead"></gds-icon-ai>
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </gds-textarea>
            <gds-checkbox-group
              class="form-control"
              label="Checkbox Group"
              supporting-text="Example support text"
              .validator=${NotEmptyValidator}
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-checkbox label="Checkbox 1" value="1"></gds-checkbox>
              <gds-checkbox label="Checkbox 2" value="2"></gds-checkbox>
              <gds-checkbox label="Checkbox 3" value="3"></gds-checkbox>
            </gds-checkbox-group>
            <gds-radio-group
              class="form-control"
              label="Radio Group"
              supporting-text="Example support text"
              .validator=${NotEmptyValidator}
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-radio value="option1" label="Option 1"></gds-radio>
              <gds-radio value="option2" label="Option 2"></gds-radio>
              <gds-radio value="option3" label="Option 3"></gds-radio>
            </gds-radio-group>
            <gds-select
              class="form-control"
              label="Select"
              supporting-text="Example support text"
              clearable
              .validator=${NotEmptyValidator}
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <select>
                <option value="">Select...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </gds-select>
          </gds-flex>
          <gds-divider color="primary"></gds-divider>
          <gds-form-summary reactive></gds-form-summary>
          <gds-flex direction="row" justify-content="center" gap="m">
            <gds-button rank="tertiary" type="reset" id="reset-button"
              >Reset</gds-button
            >
            <gds-button rank="primary" type="submit" id="submit-button"
              >Submit</gds-button
            >
          </gds-flex>
        </gds-card>
      </form>
    </gds-flex>`;
  }
}
