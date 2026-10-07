import { Component, input } from '@angular/core';
import { NaCard, NaStack, NaText } from 'newang';
import { CodeBlock } from './code-block';

@Component({
  selector: 'docs-demo-card',
  imports: [NaCard, NaStack, NaText, CodeBlock],
  template: `
    <na-card [title]="title()">
      <na-stack gap="md">
        <na-text tone="muted">{{ description() }}</na-text>
        <ng-content />
        <docs-code-block [code]="code()" />
      </na-stack>
    </na-card>
  `,
})
export class DemoCard {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly code = input.required<string>();
}
