import { Component } from '@angular/core';
import { NaAlert, NaHeading, NaPage, NaStack, NaText } from 'newang';
import { CodeBlock } from '../shared/code-block';

@Component({
  imports: [NaAlert, NaHeading, NaPage, NaStack, NaText, CodeBlock],
  template: `
    <na-page maxWidth="md">
      <na-stack gap="lg">
        <na-stack gap="md">
          <na-heading level="1">Install</na-heading>
          <na-text tone="muted">One command wires the theme into your app. Requires Angular 19+.</na-text>
        </na-stack>
        <docs-code-block code="ng add newang" />
        <na-alert tone="info" title="What ng add does">
          Adds the dependency and wires the theme into src/styles.scss. If the schematic fails on your
          setup, do the manual step below — it is equivalent.
        </na-alert>
        <na-stack gap="md">
          <na-heading level="2">Manual install</na-heading>
          <docs-code-block [code]="manualNpm" />
          <na-text tone="muted">Then add this to the top of src/styles.scss:</na-text>
          <docs-code-block [code]="manualScss" />
        </na-stack>
        <na-stack gap="md">
          <na-heading level="2">Verify</na-heading>
          <na-text tone="muted">Drop this anywhere inside your root component template:</na-text>
          <docs-code-block [code]="verify" />
        </na-stack>
      </na-stack>
    </na-page>
  `,
})
export class InstallPage {
  protected readonly manualNpm = `npm i newang`;
  protected readonly manualScss = `@use 'newang/styles' as na;\n@include na.base();`;
  protected readonly verify = `<na-app>\n  <na-page maxWidth="md">\n    <na-button variant="primary">It works</na-button>\n  </na-page>\n</na-app>`;
}
