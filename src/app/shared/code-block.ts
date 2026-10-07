import { Component, input, signal } from '@angular/core';
import { NaButton, NaRow, NaStack, NaText } from 'newang';

@Component({
  selector: 'docs-code-block',
  imports: [NaButton, NaRow, NaStack, NaText],
  template: `
    <na-stack gap="sm">
      <pre class="docs-code" [innerText]="code()"></pre>
      <na-row gap="sm" align="center">
        <na-button variant="ghost" size="sm" (pressed)="copy()">{{ copied() ? 'Copied!' : 'Copy' }}</na-button>
        @if (copied()) {
          <na-text tone="muted" size="sm">Snippet copied to clipboard.</na-text>
        }
      </na-row>
    </na-stack>
  `,
})
export class CodeBlock {
  readonly code = input.required<string>();
  protected readonly copied = signal(false);

  protected copy(): void {
    const text = this.code();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => this.flash(),
        () => this.fallback(text),
      );
    } else {
      this.fallback(text);
    }
  }

  private fallback(text: string): void {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    this.flash();
  }

  private flash(): void {
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 1600);
  }
}
