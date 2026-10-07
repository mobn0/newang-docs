import { Component } from '@angular/core';
import { NaAlert, NaHeading, NaPage, NaStack, NaText } from 'newang';
import { CodeBlock } from '../shared/code-block';

@Component({
  imports: [NaAlert, NaHeading, NaPage, NaStack, NaText, CodeBlock],
  template: `
    <na-page maxWidth="md">
      <na-stack gap="lg">
        <na-stack gap="md">
          <na-heading level="1">Zero-CSS usage</na-heading>
          <na-text tone="muted">
            The core promise: spacing, type, layout and form rhythm are baked into
            na-* components. You control everything with inputs.
          </na-text>
        </na-stack>
        <na-alert tone="success" title="The rule">
          No class=, no style=, no stylesheets. If you reach for CSS, use a different
          input value instead: gap, size, tone, variant, maxWidth, cols.
        </na-alert>
        <na-stack gap="md">
          <na-heading level="2">Complete example</na-heading>
          <docs-code-block [code]="full" />
        </na-stack>
        <na-stack gap="md">
          <na-heading level="2">The input vocabulary</na-heading>
          <docs-code-block [code]="vocab" />
        </na-stack>
        <na-alert tone="warning" title="Escape hatch">
          na.base() styles raw HTML sensibly (links, placeholders, focus rings), so
          prose and legacy markup still look right without na-* wrappers.
        </na-alert>
      </na-stack>
    </na-page>
  `,
})
export class ZeroCssPage {
  protected readonly full = `<na-app>\n  <na-page maxWidth="md">\n    <na-stack gap="lg">\n      <na-heading level="1">Sign in</na-heading>\n      <na-field label="Email" hint="Work email" error="">\n        <input naInput placeholder="you@co.com" />\n      </na-field>\n      <na-button variant="primary">Login</na-button>\n    </na-stack>\n  </na-page>\n</na-app>`;
  protected readonly vocab = `gap="xs|sm|md|lg|xl"      → na-stack, na-row, na-grid\nsize="sm|md|lg"          → na-button, na-text, na-avatar\ntone="…"                 → na-text, na-badge, na-alert\nvariant="…"              → na-button (primary|secondary|ghost|danger)\nmaxWidth="sm|md|lg|full" → na-page\ncols="1|2|3|4"           → na-grid\nlevel="1|2|3|4"          → na-heading`;
}
