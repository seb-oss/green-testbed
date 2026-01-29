# Test Generator Constitution (Green Testbed)

This document defines **hard constraints** and **default practices** for agent-generated WebdriverIO tests in this repo.

## Prime Directive

Tests must validate **user-observable behavior and public API** of the component under test.

- Prefer assertions against the **host custom element** (attributes, reflected properties, ARIA, emitted events, visible text/state).
- Interact using **real user-like actions** (WebdriverIO: `click`, `keys`, pointer actions), not synthetic DOM calls.

## Interaction Rules (Mandatory)

1. **Do not simulate interactions via `execute()`**
   - Forbidden: `node.click()`, `node.focus()`, `dispatchEvent(new KeyboardEvent(...))` as the _primary_ action.
   - Allowed: `execute()` only for **read-only inspection** (e.g., reading a property) or **installing an event listener** on the host.

2. **Prefer stable selectors from the scaffold**
   - Use `#ids` defined in `testbed/components/<component>.ts`.
   - If an id is missing, update the scaffold (when allowed) to add an id instead of using brittle selectors.

3. **Use WDIO waits, not ad-hoc sleeps**
   - Prefer `waitForExist`, `waitForDisplayed`, `waitUntil`.
   - Avoid `pause()` unless there is a documented, deterministic reason.

## Shadow DOM Policy (Critical)

Shadow DOM access is sometimes necessary, but it can also bypass the public contract.

**Default**: treat the component as a black box.

### Allowed use of Shadow DOM (Last resort)

Shadow DOM access is allowed only when **there is no stable public alternative** for the specific goal.

Examples of acceptable reasons:

- You must place focus on the internal focusable element but cannot do so via host-level API.
- You must read `shadowRoot.activeElement` to determine whether focus moved inside (and you also assert a host-level signal such as `:focus-within`).

### Forbidden use of Shadow DOM

- Asserting internal markup structure/classes/DOM shape as a primary assertion.
- Selecting internal elements to “make tests pass” when a host-level assertion would fail.
- Emitting events on internal nodes to bypass the host component’s event/interaction plumbing.

### Required safeguards if Shadow DOM is used

When you use Shadow DOM for setup or inspection:

- Also include at least one assertion that validates the **host-level outcome**.
- Document the reason in the test’s Goal comment.

## Events & Keyboard Testing

1. **Event assertions should observe events on the host**
   - You may attach an event listener via `execute()` on the host.
   - The triggering action must be performed via WDIO (`element.click()`, `browser.keys()`), not via DOM calls.

2. **Keyboard interactions should use WebDriver**
   - Use `await element.click()` or other means to focus.
   - Use `await browser.keys(["Enter"])` or `await browser.keys(["Space"])`.
   - Prefer asserting a host-level effect (event fired, attribute/state changed, or observable UI change).

3. **Focus assertions should avoid internal node matching**
   - Prefer `element.isFocused()` when it works.
   - Otherwise prefer host-level checks like `execute(() => el.matches(':focus-within'))`.
   - Shadow DOM focus inspection is last resort (see policy above).

## What to do when requirements conflict

- If coverage requirements require something that can only be tested through internals, record that explicitly in the test Goal comment and include both:
  - a minimal internal inspection (only what’s needed)
  - a host-level assertion about the public contract.

## Output Quality Gates

- Tests must be deterministic, no bypassing/skipping.
- Use repo helpers (`test/helpers/*`) when available.
- Keep selectors and fixtures stable and explicit.
