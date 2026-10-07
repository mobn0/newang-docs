export interface ApiRow {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface DemoDoc {
  title: string;
  description: string;
  code: string;
}

export interface ComponentDoc {
  slug: string;
  name: string;
  selector: string;
  area: string;
  description: string;
  whenToUse: string;
  zeroCssRule: string;
  demos: DemoDoc[];
  api: ApiRow[];
  donts: string[];
}

export const COMPONENT_DOCS: Record<string, ComponentDoc> = {
  button: {
    slug: 'button',
    name: 'Button',
    selector: 'na-button',
    area: 'Actions',
    description: 'Opinionated button. No classes needed — pick a variant and size with inputs.',
    whenToUse: 'Use for every action: form submits, modal confirmations, toolbar actions, empty-state CTAs.',
    zeroCssRule: 'Never style a <button> by hand. Control everything with variant, size, disabled, loading and fullWidth.',
    demos: [
      {
        title: 'Variants',
        description: 'Four flat variants. Primary is lime; danger is matte red. No gradients anywhere.',
        code: `<na-row gap="md">\n  <na-button variant="primary">Save</na-button>\n  <na-button variant="secondary">Cancel</na-button>\n  <na-button variant="ghost">Later</na-button>\n  <na-button variant="danger">Delete</na-button>\n</na-row>`,
      },
      {
        title: 'Sizes and states',
        description: 'Sizes plus disabled, loading and fullWidth — all inputs, zero CSS.',
        code: `<na-stack gap="md">\n  <na-row gap="md">\n    <na-button size="sm">Small</na-button>\n    <na-button size="md">Medium</na-button>\n    <na-button size="lg">Large</na-button>\n  </na-row>\n  <na-row gap="md">\n    <na-button disabled>Disabled</na-button>\n    <na-button loading>Loading</na-button>\n  </na-row>\n  <na-button fullWidth>Full width</na-button>\n</na-stack>`,
      },
      {
        title: 'Handling clicks',
        description: 'Listen to pressed instead of click — it only fires when the button is enabled.',
        code: `<na-button variant="primary" (pressed)="save()">\n  Save changes\n</na-button>`,
      },
    ],
    api: [
      { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'danger'", default: "'primary'", description: 'Visual variant.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size.' },
      { name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'Native button type.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state.' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Loading state (disables + shows spinner).' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretch to container width.' },
      { name: 'pressed', type: 'Output<MouseEvent>', default: '—', description: 'Fires on click when enabled.' },
    ],
    donts: ['Do not add class= or style= to change colors.', 'Do not use gradients or shadows on buttons.'],
  },
  field: {
    slug: 'field',
    name: 'Field + Input',
    selector: 'na-field',
    area: 'Forms',
    description: 'Field wrapper plus the naInput directive. Label, hint and error spacing are baked in.',
    whenToUse: 'Wrap every native input, textarea or select in na-field so forms share one rhythm.',
    zeroCssRule: 'Style the native element with naInput, structure with na-field inputs — never a form stylesheet.',
    demos: [
      {
        title: 'Basic field',
        description: 'Label + hint. The input gets NewAng styling from the naInput attribute alone.',
        code: `<na-field label="Email" hint="Work email">\n  <input naInput placeholder="you@co.com" />\n</na-field>`,
      },
      {
        title: 'Error and required',
        description: 'Pass error text to show the message; add invalid to the input to trigger the danger border.',
        code: `<na-stack gap="md">\n  <na-field label="Password" error="Minimum 8 characters" required>\n    <input naInput invalid type="password" placeholder="••••••••" />\n  </na-field>\n  <na-field label="Notes" hint="Anything we should know?">\n    <textarea naInput rows="3"></textarea>\n  </na-field>\n</na-stack>`,
      },
      {
        title: 'Select',
        description: 'naInput also styles native selects — still zero CSS.',
        code: `<na-field label="Plan" hint="Billed monthly">\n  <select naInput>\n    <option>Free</option>\n    <option>Pro</option>\n  </select>\n</na-field>`,
      },
    ],
    api: [
      { name: 'label', type: 'string', default: "''", description: 'Field label.' },
      { name: 'hint', type: 'string', default: "''", description: 'Helper text under the control.' },
      { name: 'error', type: 'string', default: "''", description: 'Error text; empty hides the error row.' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Show required marker.' },
      { name: 'naInput', type: 'directive', default: '—', description: 'Attribute for input / textarea / select.' },
      { name: 'invalid', type: 'boolean', default: 'false', description: 'Sets aria-invalid, triggering the danger border. Pair with na-field error.' },
    ],
    donts: ['Do not wrap inputs in custom divs for spacing — na-field already does it.'],
  },
  form: {
    slug: 'form',
    name: 'Form',
    selector: 'na-form',
    area: 'Forms',
    description: 'Vertical stack plus submit row baked in. Project your na-fields inside.',
    whenToUse: 'Any data-entry form with a submit (and optional cancel) action.',
    zeroCssRule: 'Do not build form layout with CSS grid by hand — na-form owns the rhythm.',
    demos: [
      {
        title: 'Login form',
        description: 'Fields projected in; submitLabel drives the primary button.',
        code: `<na-form submitLabel="Login" (submitted)="login()">\n  <na-field label="Email" required>\n    <input naInput placeholder="you@co.com" />\n  </na-field>\n  <na-field label="Password" required>\n    <input naInput type="password" />\n  </na-field>\n</na-form>`,
      },
      {
        title: 'With cancel',
        description: 'showCancel adds a secondary button wired to cancelled.',
        code: `<na-form\n  submitLabel="Save"\n  showCancel\n  (submitted)="save()"\n  (cancelled)="back()">\n  <na-field label="Name">\n    <input naInput />\n  </na-field>\n</na-form>`,
      },
    ],
    api: [
      { name: 'submitLabel', type: 'string', default: "'Submit'", description: 'Primary button label.' },
      { name: 'submitDisabled', type: 'boolean', default: 'false', description: 'Disable the submit button.' },
      { name: 'showCancel', type: 'boolean', default: 'false', description: 'Show a cancel button.' },
      { name: 'submitted', type: 'Output<SubmitEvent>', default: '—', description: 'Fires on submit.' },
      { name: 'cancelled', type: 'Output<void>', default: '—', description: 'Fires on cancel.' },
    ],
    donts: ['Do not place your own submit <button> inside na-form.'],
  },
  switch: {
    slug: 'switch',
    name: 'Switch',
    selector: 'na-switch',
    area: 'Forms',
    description: 'Lime toggle. Works with [(checked)] or formControl.',
    whenToUse: 'Binary on/off settings: notifications, dark mode (already dark), feature flags.',
    zeroCssRule: 'Bind checked — never restyle a checkbox into a toggle yourself.',
    demos: [
      {
        title: 'Basic',
        description: 'Two-way bind checked with signals.',
        code: `<na-switch label="Email alerts" [(checked)]="alerts" />`,
      },
      {
        title: 'Disabled',
        description: 'Disabled state is one input.',
        code: `<na-switch label="Locked by admin" disabled />`,
      },
    ],
    api: [
      { name: 'label', type: 'string', default: "''", description: 'Label next to the toggle.' },
      { name: 'checked', type: 'boolean (model)', default: 'false', description: 'Two-way checked state.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state.' },
    ],
    donts: ['Do not use a switch for multi-option choice — use na-radio-group.'],
  },
  checkbox: {
    slug: 'checkbox',
    name: 'Checkbox',
    selector: 'na-checkbox',
    area: 'Forms',
    description: 'Flat checkbox with baked-in label spacing. [(checked)] or formControl.',
    whenToUse: 'Multi-select options, agreements, remember-me.',
    zeroCssRule: 'Use the label input — do not build label + input pairs by hand.',
    demos: [
      {
        title: 'Basic',
        description: 'Label and two-way state in one line.',
        code: `<na-stack gap="md">\n  <na-checkbox label="Remember me" [(checked)]="remember" />\n  <na-checkbox label="Subscribe to changelog" [(checked)]="news" />\n</na-stack>`,
      },
    ],
    api: [
      { name: 'label', type: 'string', default: "''", description: 'Checkbox label.' },
      { name: 'checked', type: 'boolean (model)', default: 'false', description: 'Two-way checked state.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state.' },
    ],
    donts: ['Do not use checkboxes for exclusive choice — use na-radio-group.'],
  },
  'radio-group': {
    slug: 'radio-group',
    name: 'Radio group',
    selector: 'na-radio-group',
    area: 'Forms',
    description: 'Exclusive-choice group driven by an options array. [(value)] or formControl.',
    whenToUse: 'Pick exactly one of several plans, sizes, tones.',
    zeroCssRule: 'Pass options + value — never hand-roll radio inputs.',
    demos: [
      {
        title: 'Plan picker',
        description: 'Options in, selected value out.',
        code: `<na-radio-group\n  label="Plan"\n  [options]="[\n    { value: 'free', label: 'Free' },\n    { value: 'pro', label: 'Pro' }\n  ]"\n  [(value)]="plan"\n/>`,
      },
    ],
    api: [
      { name: 'label', type: 'string', default: "''", description: 'Group label.' },
      { name: 'options', type: '{ value; label }[]', default: '[]', description: 'Radio options.' },
      { name: 'value', type: 'string | number (model)', default: 'undefined', description: 'Selected value.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state.' },
      { name: 'groupName', type: 'string', default: "''", description: 'Native radio group name.' },
    ],
    donts: ['Do not use na-radio elements directly — drive the group via options.'],
  },
  app: {
    slug: 'app',
    name: 'App',
    selector: 'na-app',
    area: 'Layout',
    description: 'Root wrapper — applies background + text color. Every page starts here.',
    whenToUse: 'Once, at the root of your app component template.',
    zeroCssRule: 'Do not set body background or font yourself — na-app + na.base() own it.',
    demos: [
      {
        title: 'Root',
        description: 'Wrap the whole app. That is the entire tutorial.',
        code: `<na-app>\n  <na-page maxWidth="md">\n    <na-text>Hello, NewAng.</na-text>\n  </na-page>\n</na-app>`,
      },
    ],
    api: [{ name: '—', type: 'no inputs', default: '—', description: 'Projection-only wrapper.' }],
    donts: ['Do not nest na-app inside itself.'],
  },
  page: {
    slug: 'page',
    name: 'Page',
    selector: 'na-page',
    area: 'Layout',
    description: 'Centered page column. One input controls the width.',
    whenToUse: 'Wrap each route view to get consistent max-width + gutters.',
    zeroCssRule: 'No container classes — use maxWidth instead.',
    demos: [
      {
        title: 'Widths',
        description: 'sm for forms, md for docs, lg for dashboards, full for tables.',
        code: `<na-page maxWidth="md">\n  <na-heading level="1">Docs</na-heading>\n</na-page>`,
      },
    ],
    api: [{ name: 'maxWidth', type: "'sm' | 'md' | 'lg' | 'full'", default: "'md'", description: 'Column width.' }],
    donts: ['Do not set max-width in your own CSS.'],
  },
  stack: {
    slug: 'stack',
    name: 'Stack',
    selector: 'na-stack',
    area: 'Layout',
    description: 'Vertical rhythm. One gap input replaces a pile of margin utilities.',
    whenToUse: 'Forms, cards, page sections — anything stacked vertically.',
    zeroCssRule: 'Space children with gap, not margins.',
    demos: [
      {
        title: 'Gaps',
        description: 'xs through xl map to the spacing scale.',
        code: `<na-stack gap="lg">\n  <na-heading level="2">Sign in</na-heading>\n  <na-field label="Email">\n    <input naInput />\n  </na-field>\n  <na-button variant="primary">Login</na-button>\n</na-stack>`,
      },
    ],
    api: [{ name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Vertical gap.' }],
    donts: ['Do not add margin-bottom to children of na-stack.'],
  },
  row: {
    slug: 'row',
    name: 'Row',
    selector: 'na-row',
    area: 'Layout',
    description: 'Horizontal row with gap, alignment and justification inputs.',
    whenToUse: 'Button groups, toolbar actions, avatar + text lines.',
    zeroCssRule: 'Use align/justify inputs instead of flexbox CSS.',
    demos: [
      {
        title: 'Alignment',
        description: 'justify="between" pushes actions to both edges — the classic header row.',
        code: `<na-row gap="md" align="center" justify="between">\n  <na-heading level="3">Members</na-heading>\n  <na-button variant="primary">Invite</na-button>\n</na-row>`,
      },
    ],
    api: [
      { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Horizontal gap.' },
      { name: 'align', type: "'start' | 'center' | 'end' | 'stretch'", default: "'start'", description: 'Cross-axis alignment.' },
      { name: 'justify', type: "'start' | 'center' | 'end' | 'between'", default: "'start'", description: 'Main-axis justification.' },
    ],
    donts: ['Do not write display:flex by hand when na-row fits.'],
  },
  grid: {
    slug: 'grid',
    name: 'Grid',
    selector: 'na-grid',
    area: 'Layout',
    description: 'Responsive grid — collapses to one column under 768px automatically.',
    whenToUse: 'Card decks, dashboards, feature trios.',
    zeroCssRule: 'Pick cols + gap; responsiveness is free.',
    demos: [
      {
        title: 'Three columns',
        description: 'Stacks on mobile with no media queries from you.',
        code: `<na-grid cols="3" gap="md">\n  <na-card title="Free">Hobby projects</na-card>\n  <na-card title="Pro">Teams</na-card>\n  <na-card title="Scale">Platforms</na-card>\n</na-grid>`,
      },
    ],
    api: [
      { name: 'cols', type: '1 | 2 | 3 | 4', default: '2', description: 'Column count on desktop.' },
      { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Grid gap.' },
    ],
    donts: ['Do not add your own breakpoints for simple grids.'],
  },
  split: {
    slug: 'split',
    name: 'Split',
    selector: 'na-split',
    area: 'Layout',
    description: 'Two-pane split that stacks on mobile. Perfect for docs sidebars.',
    whenToUse: 'Sidebar + content layouts like this very page.',
    zeroCssRule: 'Declare columns as a string — no grid-template CSS.',
    demos: [
      {
        title: 'Sidebar layout',
        description: 'This docs site is na-split with columns="280px 1fr". The value is passed straight to grid-template-columns.',
        code: `<na-split columns="280px 1fr">\n  <na-text>Sidebar</na-text>\n  <na-text>Content</na-text>\n</na-split>`,
      },
    ],
    api: [{ name: 'columns', type: 'string', default: "'1fr_1fr'", description: 'Two-pane column definition.' }],
    donts: ['Do not use na-split for 3+ panes — use na-grid.'],
  },
  divider: {
    slug: 'divider',
    name: 'Divider',
    selector: 'na-divider',
    area: 'Layout',
    description: 'Flat 1px rule. No inputs — drop it between sections.',
    whenToUse: 'Separate card sections, sidebar groups, form blocks.',
    zeroCssRule: 'Use na-divider instead of <hr> styling.',
    demos: [
      {
        title: 'Section break',
        description: 'Zero-config separator.',
        code: `<na-stack gap="md">\n  <na-text>Above</na-text>\n  <na-divider />\n  <na-text>Below</na-text>\n</na-stack>`,
      },
    ],
    api: [{ name: '—', type: 'no inputs', default: '—', description: 'Self-contained rule.' }],
    donts: [],
  },
  spacer: {
    slug: 'spacer',
    name: 'Spacer',
    selector: 'na-spacer',
    area: 'Layout',
    description: 'Flexible breathing room inside na-row / na-stack.',
    whenToUse: 'Push toolbar actions apart without justify hacks.',
    zeroCssRule: 'Prefer na-spacer over empty divs with heights.',
    demos: [
      {
        title: 'Push apart',
        description: 'Spacer grows to fill available space.',
        code: `<na-row gap="md">\n  <na-text>Left</na-text>\n  <na-spacer />\n  <na-text>Right</na-text>\n</na-row>`,
      },
    ],
    api: [{ name: '—', type: 'no inputs', default: '—', description: 'Flex-grow spacer.' }],
    donts: [],
  },
  heading: {
    slug: 'heading',
    name: 'Heading',
    selector: 'na-heading',
    area: 'Type',
    description: 'Size, weight and margins baked in. One level input.',
    whenToUse: 'Page titles (1), sections (2), card titles (3).',
    zeroCssRule: 'Never use raw h1–h4 — always na-heading.',
    demos: [
      {
        title: 'Levels',
        description: 'Four levels, consistent rhythm.',
        code: `<na-stack gap="md">\n  <na-heading level="1">Page title</na-heading>\n  <na-heading level="2">Section</na-heading>\n  <na-heading level="3">Subsection</na-heading>\n  <na-heading level="4">Detail</na-heading>\n</na-stack>`,
      },
    ],
    api: [{ name: 'level', type: '1 | 2 | 3 | 4', default: '2', description: 'Heading level.' }],
    donts: ['Do not skip levels for visual effect — pick the right level.'],
  },
  text: {
    slug: 'text',
    name: 'Text',
    selector: 'na-text',
    area: 'Type',
    description: 'Body text with tone and size inputs. Muted and faint map to tokens.',
    whenToUse: 'Paragraphs, captions, helper copy.',
    zeroCssRule: 'Use tone instead of color CSS.',
    demos: [
      {
        title: 'Tones and sizes',
        description: 'Four tones, three sizes.',
        code: `<na-stack gap="md">\n  <na-text>Default body copy.</na-text>\n  <na-text tone="muted">Secondary information.</na-text>\n  <na-text tone="faint" size="sm">Caption / metadata.</na-text>\n  <na-text tone="accent">Lime highlight.</na-text>\n</na-stack>`,
      },
    ],
    api: [
      { name: 'tone', type: "'default' | 'muted' | 'faint' | 'accent'", default: "'default'", description: 'Text tone.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Text size.' },
    ],
    donts: ['Do not use #fff or gray hex codes — use tones.'],
  },
  link: {
    slug: 'link',
    name: 'Link',
    selector: 'na-link',
    area: 'Type',
    description: 'Lime underline link with offset baked in.',
    whenToUse: 'Inline links in text, nav links, footer links.',
    zeroCssRule: 'Use na-link instead of styling <a> yourself.',
    demos: [
      {
        title: 'Inline',
        description: 'Href in, styled link out.',
        code: `<na-text>\n  Read the <na-link href="/docs/theme">theme guide</na-link> first.\n</na-text>`,
      },
    ],
    api: [{ name: 'href', type: 'string', default: "''", description: 'Link target.' }],
    donts: [],
  },
  code: {
    slug: 'code',
    name: 'Code',
    selector: 'na-code',
    area: 'Type',
    description: 'Inline code chip. For blocks, use the docs code styling pattern.',
    whenToUse: 'Mention props, selectors and commands inside sentences.',
    zeroCssRule: 'Use na-code for inline snippets, never backtick CSS.',
    demos: [
      {
        title: 'Inline mention',
        description: 'Props read clearly inside docs copy.',
        code: `<na-text>\n  Set <na-code>variant="primary"</na-code> for the main action.\n</na-text>`,
      },
    ],
    api: [{ name: '—', type: 'no inputs', default: '—', description: 'Projection-only chip.' }],
    donts: [],
  },
  'empty-state': {
    slug: 'empty-state',
    name: 'Empty state',
    selector: 'na-empty-state',
    area: 'Type',
    description: 'Pre-spaced empty state with optional action slot.',
    whenToUse: 'Empty tables, no search results, fresh projects.',
    zeroCssRule: 'Pass title + description — do not build empty art with divs.',
    demos: [
      {
        title: 'No results',
        description: 'Action projected into the slot.',
        code: `<na-empty-state\n  title="No members yet"\n  description="Invite your team to get started.">\n  <na-button variant="primary">Invite</na-button>\n</na-empty-state>`,
      },
    ],
    api: [
      { name: 'title', type: 'string', default: "''", description: 'Empty-state title.' },
      { name: 'description', type: 'string', default: "''", description: 'Supporting copy.' },
    ],
    donts: [],
  },
  card: {
    slug: 'card',
    name: 'Card',
    selector: 'na-card',
    area: 'Display',
    description: 'Flat card with baked-in padding. Header/body/footer via projection.',
    whenToUse: 'Feature blocks, demo containers, dashboard panels.',
    zeroCssRule: 'Use title/subtitle inputs — no card CSS.',
    demos: [
      {
        title: 'Titled card',
        description: 'Title + subtitle plus any projected body.',
        code: `<na-card title="Pro plan" subtitle="For teams">\n  <na-text>$20 / seat / month.</na-text>\n</na-card>`,
      },
      {
        title: 'Action card',
        description: 'Project buttons and rows freely inside.',
        code: `<na-card title="Billing">\n  <na-stack gap="md">\n    <na-text tone="muted">Next invoice May 1.</na-text>\n    <na-button variant="primary">Pay now</na-button>\n  </na-stack>\n</na-card>`,
      },
    ],
    api: [
      { name: 'title', type: 'string', default: "''", description: 'Card title.' },
      { name: 'subtitle', type: 'string', default: "''", description: 'Card subtitle.' },
    ],
    donts: ['Do not add shadows or rounded-3xl overrides to cards.'],
  },
  badge: {
    slug: 'badge',
    name: 'Badge',
    selector: 'na-badge',
    area: 'Display',
    description: 'Status pill. Lime is the default accent; neutrals for metadata.',
    whenToUse: 'Versions, counts, statuses next to headings.',
    zeroCssRule: 'Pick a tone — never background-color CSS.',
    demos: [
      {
        title: 'Tones',
        description: 'Six matte tones.',
        code: `<na-row gap="md">\n  <na-badge tone="lime">v1.0.4</na-badge>\n  <na-badge tone="neutral">draft</na-badge>\n  <na-badge tone="success">live</na-badge>\n  <na-badge tone="warning">beta</na-badge>\n  <na-badge tone="danger">down</na-badge>\n  <na-badge tone="info">new</na-badge>\n</na-row>`,
      },
    ],
    api: [{ name: 'tone', type: "'lime' | 'neutral' | 'success' | 'warning' | 'danger' | 'info'", default: "'neutral'", description: 'Badge tone.' }],
    donts: [],
  },
  alert: {
    slug: 'alert',
    name: 'Alert',
    selector: 'na-alert',
    area: 'Display',
    description: 'Matte status banner with optional title.',
    whenToUse: 'Form errors, deprecation notices, zero-CSS rule callouts.',
    zeroCssRule: 'Use tone + title inputs — no alert stylesheets.',
    demos: [
      {
        title: 'Tones',
        description: 'Four desaturated status colors.',
        code: `<na-stack gap="md">\n  <na-alert tone="info" title="Heads up">New version available.</na-alert>\n  <na-alert tone="success" title="Saved">Changes are live.</na-alert>\n  <na-alert tone="warning" title="Careful">This affects billing.</na-alert>\n  <na-alert tone="danger" title="Failed">Could not save.</na-alert>\n</na-stack>`,
      },
    ],
    api: [
      { name: 'tone', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", description: 'Alert tone.' },
      { name: 'title', type: 'string', default: "''", description: 'Bold alert title.' },
    ],
    donts: [],
  },
  table: {
    slug: 'table',
    name: 'Table',
    selector: 'na-table',
    area: 'Display',
    description: 'Pre-styled table with empty state. Columns + rows in, styled table out.',
    whenToUse: 'API references, member lists, invoices.',
    zeroCssRule: 'No table CSS — describe columns declaratively.',
    demos: [
      {
        title: 'Members',
        description: 'Keys map to row fields; emptyMessage covers the zero case.',
        code: `<na-table\n  [columns]="[{ key: 'name', header: 'Name' }]"\n  [rows]="[{ name: 'Ada' }]"\n  emptyMessage="No members yet"\n/>`,
      },
    ],
    api: [
      { name: 'columns', type: '{ key; header }[]', default: '[]', description: 'Column definitions.' },
      { name: 'rows', type: 'Record<string, string | number>[]', default: '[]', description: 'Row data.' },
      { name: 'emptyMessage', type: 'string', default: "''", description: 'Shown when rows are empty.' },
    ],
    donts: ['Do not hand-write <table> markup for data tables.'],
  },
  list: {
    slug: 'list',
    name: 'List',
    selector: 'na-list',
    area: 'Display',
    description: 'Simple stacked list with dividers baked in.',
    whenToUse: 'Settings rows, nav lists, activity feeds.',
    zeroCssRule: 'Project rows — dividers come free.',
    demos: [
      {
        title: 'Settings list',
        description: 'Rows projected; separators automatic.',
        code: `<na-list>\n  <na-row gap="md" align="center" justify="between">\n    <na-text>Notifications</na-text>\n    <na-switch />\n  </na-row>\n  <na-row gap="md" align="center" justify="between">\n    <na-text>Marketing email</na-text>\n    <na-switch />\n  </na-row>\n</na-list>`,
      },
    ],
    api: [{ name: '—', type: 'no inputs', default: '—', description: 'Projection-only list.' }],
    donts: [],
  },
  breadcrumbs: {
    slug: 'breadcrumbs',
    name: 'Breadcrumbs',
    selector: 'na-breadcrumbs',
    area: 'Display',
    description: 'Breadcrumb trail with lime current page. Non-current crumbs can link somewhere.',
    whenToUse: 'Top of deep pages: Docs / Components / Button.',
    zeroCssRule: 'Pass items — no separator CSS.',
    demos: [
      {
        title: 'Trail',
        description: 'Strings render as plain crumbs; the last item renders as current.',
        code: `<na-breadcrumbs [items]="['Docs', 'Components', 'Button']" />`,
      },
      {
        title: 'With links',
        description: 'Pass { label, href } objects for clickable crumbs.',
        code: `<na-breadcrumbs\n  [items]="[\n    { label: 'Docs', href: '/docs/install' },\n    { label: 'Components', href: '/components/button' },\n    'Button'\n  ]"\n/>`,
      },
    ],
    api: [{ name: 'items', type: '(string \| { label; href? })[]', default: '[]', description: 'Breadcrumb segments; objects render as links.' }],
    donts: [],
  },
  avatar: {
    slug: 'avatar',
    name: 'Avatar',
    selector: 'na-avatar',
    area: 'Display',
    description: 'Initials fallback when no src. Three sizes.',
    whenToUse: 'Members, authors, comment threads.',
    zeroCssRule: 'Use name/src/size — never img border-radius CSS.',
    demos: [
      {
        title: 'Sizes',
        description: 'Initials computed from name automatically.',
        code: `<na-row gap="md" align="center">\n  <na-avatar name="Ada Lovelace" size="sm" />\n  <na-avatar name="Ada Lovelace" size="md" />\n  <na-avatar name="Grace Hopper" size="lg" />\n</na-row>`,
      },
      {
        title: 'Photo',
        description: 'Provide src to show an image instead of initials.',
        code: `<na-avatar name="Ada Lovelace" src="/avatar.jpg" />`,
      },
    ],
    api: [
      { name: 'name', type: 'string', default: "''", description: 'Used for initials.' },
      { name: 'src', type: 'string', default: "''", description: 'Image URL; empty shows initials.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Avatar size.' },
    ],
    donts: [],
  },
  spinner: {
    slug: 'spinner',
    name: 'Spinner',
    selector: 'na-spinner',
    area: 'Display',
    description: 'Inline spinner — flat lime ring, no glow.',
    whenToUse: 'Loading rows, buttons (automatic), async cards.',
    zeroCssRule: 'Use na-spinner instead of CSS loaders.',
    demos: [
      {
        title: 'Loading line',
        description: 'Optional label beside the ring.',
        code: `<na-spinner label="Loading members…" />`,
      },
    ],
    api: [{ name: 'label', type: 'string', default: "''", description: 'Accessible label.' }],
    donts: [],
  },
  progress: {
    slug: 'progress',
    name: 'Progress',
    selector: 'na-progress',
    area: 'Display',
    description: 'Flat progress bar — solid lime fill, no gradient. Values clamp to 0–100.',
    whenToUse: 'Uploads, onboarding steps, quotas.',
    zeroCssRule: 'Bind value 0–100 — no width CSS.',
    demos: [
      {
        title: 'Quota',
        description: 'Value clamps to 0–100.',
        code: `<na-stack gap="md">\n  <na-progress value="35" />\n  <na-progress value="80" />\n</na-stack>`,
      },
    ],
    api: [{ name: 'value', type: 'number', default: '0', description: 'Progress 0–100.' }],
    donts: [],
  },
  modal: {
    slug: 'modal',
    name: 'Modal',
    selector: 'na-modal',
    area: 'Overlay',
    description: 'Flat modal. Drive visibility with open, listen for closed. Escape, backdrop click and ✕ all emit closed.',
    whenToUse: 'Confirmations, focused forms, previews.',
    zeroCssRule: 'No dialog CSS — title + open + closed cover it.',
    demos: [
      {
        title: 'Confirm delete',
        description: 'Signal-driven open state; closed resets it.',
        code: `<na-button variant="danger" (pressed)="show = true">\n  Delete\n</na-button>\n<na-modal\n  title="Delete project?"\n  [open]="show"\n  (closed)="show = false">\n  <na-stack gap="md">\n    <na-text>This cannot be undone.</na-text>\n    <na-button variant="danger">Delete</na-button>\n  </na-stack>\n</na-modal>`,
      },
    ],
    api: [
      { name: 'title', type: 'string', default: "''", description: 'Modal title.' },
      { name: 'open', type: 'boolean', default: 'false', description: 'Visibility flag.' },
      { name: 'closed', type: 'Output<void>', default: '—', description: 'Fires on dismiss.' },
    ],
    donts: ['Do not manage z-index or backdrop CSS yourself.'],
  },
  tabs: {
    slug: 'tabs',
    name: 'Tabs',
    selector: 'na-tabs',
    area: 'Overlay',
    description: 'Opinionated tabs. Labels in, lime underline for active — no pill glow.',
    whenToUse: 'Code samples (HTML/TS), settings sections, preview toggles.',
    zeroCssRule: 'Pass tabs + active — tab styling is fixed.',
    demos: [
      {
        title: 'Active tab',
        description: 'Two-way bind active; render content conditionally.',
        code: `<na-tabs [tabs]="['HTML', 'API']" [(active)]="tab" />\n@if (tab === 0) {\n  <na-code>markup</na-code>\n} @else {\n  <na-text>props</na-text>\n}`,
      },
    ],
    api: [
      { name: 'tabs', type: 'string[]', default: '[]', description: 'Tab labels.' },
      { name: 'active', type: 'number (model)', default: '0', description: 'Active index.' },
    ],
    donts: [],
  },
  tooltip: {
    slug: 'tooltip',
    name: 'Tooltip',
    selector: 'naTooltip',
    area: 'Overlay',
    description: 'Flat tooltip via attribute. No wrapper component needed. Styling ships with na.base().',
    whenToUse: 'Icon buttons, truncated text, extra hint on hover/focus.',
    zeroCssRule: 'Add naTooltip="…" — never build tooltip CSS.',
    demos: [
      {
        title: 'Hover hint',
        description: 'Works on any element, keyboard-focusable.',
        code: `<na-button variant="secondary" naTooltip="Saved to drafts">\n  Hover me\n</na-button>`,
      },
    ],
    api: [{ name: 'naTooltip', type: 'string', default: "''", description: 'Tooltip text.' }],
    donts: [],
  },
  header: {
    slug: 'header',
    name: 'Header',
    selector: 'na-header',
    area: 'Shell',
    description: 'App top bar. Title + subtitle inputs, actions projected.',
    whenToUse: 'Top of every authenticated page or the docs shell.',
    zeroCssRule: 'Use title/subtitle — no header layout CSS.',
    demos: [
      {
        title: 'Page header',
        description: 'Actions slot on the right.',
        code: `<na-header title="Billing" subtitle="Invoices and seats">\n  <na-button variant="primary">Pay now</na-button>\n</na-header>`,
      },
    ],
    api: [
      { name: 'title', type: 'string', default: "''", description: 'Header title.' },
      { name: 'subtitle', type: 'string', default: "''", description: 'Header subtitle.' },
    ],
    donts: [],
  },
  footer: {
    slug: 'footer',
    name: 'Footer',
    selector: 'na-footer',
    area: 'Shell',
    description: 'Muted footer bar. Project links and copy inside.',
    whenToUse: 'Bottom of app shell and docs pages.',
    zeroCssRule: 'Wrap footer content — do not style footers manually.',
    demos: [
      {
        title: 'Simple footer',
        description: 'Everything projected, spacing baked in.',
        code: `<na-footer>\n  <na-text tone="muted" size="sm">MIT · newAng docs</na-text>\n</na-footer>`,
      },
    ],
    api: [{ name: '—', type: 'no inputs', default: '—', description: 'Projection-only bar.' }],
    donts: [],
  },
  toolbar: {
    slug: 'toolbar',
    name: 'Toolbar',
    selector: 'na-toolbar',
    area: 'Shell',
    description: 'Toolbar row for card headers and table toolbars.',
    whenToUse: 'Search + actions above a table, card header actions.',
    zeroCssRule: 'Use na-toolbar instead of flex rows for toolbars.',
    demos: [
      {
        title: 'Table toolbar',
        description: 'Search input on the left, action on the right.',
        code: `<na-toolbar>\n  <input naInput placeholder="Search members…" />\n  <na-spacer />\n  <na-button variant="primary">Invite</na-button>\n</na-toolbar>`,
      },
    ],
    api: [{ name: '—', type: 'no inputs', default: '—', description: 'Projection-only row.' }],
    donts: [],
  },
};
