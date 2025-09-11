import{i as n,h as p,t as u}from"./index-C_1TO10B.js";import"./video-xs9UHEUj.js";var c=Object.getOwnPropertyDescriptor,g=(t,r,l,i)=>{for(var o=i>1?void 0:i?c(r,l):r,a=t.length-1,s;a>=0;a--)(s=t[a])&&(o=s(o)||o);return o};const e={validate:t=>{if(t.value===void 0||t.value.length===0)return[{...t.validity,valid:!1,customError:!0},"This field cannot be empty."]}};let d=class extends n{createRenderRoot(){return this}render(){return p`<gds-flex flex-direction="column" gap="xl" max-width="400px">
      <gds-text tag="h1">Form</gds-text>

      <form
        @submit=${t=>{t.preventDefault()}}
      >
        <gds-card variant="secondary" border-color="primary">
          <gds-flex flex-direction="column" gap="l" id="form-controls">
            <gds-input
              class="form-control"
              label="Your name"
              supporting-text="Example support text"
              .validator=${e}
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
              .validator=${e}
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
              .validator=${e}
              clearable
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-option>Select a country...</gds-option>
              <gds-option value="sweden">Sweden</gds-option>
              <gds-option value="norway">Norway</gds-option>
              <gds-option value="finland">Finland</gds-option>
            </gds-dropdown>
            <gds-textarea
              class="form-control"
              label="Textarea"
              supporting-text="Example support text"
              .validator=${e}
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
              .validator=${e}
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
              .validator=${e}
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
              .validator=${e}
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
    </gds-flex>`}};d=g([u("form-view")],d);export{d as FormView};
