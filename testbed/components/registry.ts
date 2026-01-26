import type { TemplateResult } from "lit";

export type ComponentShowcaseEntry = {
  name: string; // e.g. "gds-button"
  title: string; // human readable
  elementTag: string; // e.g. "gds-button-showcase"
  load: () => Promise<unknown>; // dynamic import
};

export const COMPONENT_SHOWCASES: ComponentShowcaseEntry[] = [
  {
    name: "gds-button",
    title: "Button",
    elementTag: "gds-button-showcase",
    load: () => import("./button.js"),
  },
  {
    name: "gds-dropdown",
    title: "Dropdown",
    elementTag: "gds-dropdown-showcase",
    load: () => import("./dropdown.js"),
  },
  {
    name: "gds-input",
    title: "Input",
    elementTag: "gds-input-showcase",
    load: () => import("./input.js"),
  },
];

export function getShowcaseEntry(name: string): ComponentShowcaseEntry | null {
  return COMPONENT_SHOWCASES.find((c) => c.name === name) ?? null;
}

export function getShowcaseNames(): string[] {
  return COMPONENT_SHOWCASES.map((c) => c.name);
}
