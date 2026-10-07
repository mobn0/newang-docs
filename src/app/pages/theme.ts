import { Component } from '@angular/core';
import { NaAlert, NaHeading, NaPage, NaStack, NaTable, NaText } from 'newang';
import { CodeBlock } from '../shared/code-block';

@Component({
  imports: [NaAlert, NaHeading, NaPage, NaStack, NaTable, NaText, CodeBlock],
  template: `
    <na-page maxWidth="md">
      <na-stack gap="lg">
        <na-stack gap="md">
          <na-heading level="1">Theme</na-heading>
          <na-text tone="muted">
            Dark-only for v1. Tokens live in newang/styles as !default SCSS variables
            mirrored to --na-* CSS custom properties.
          </na-text>
        </na-stack>
        <na-table
          [columns]="[
            { key: 'token', header: 'Token' },
            { key: 'value', header: 'Value' },
            { key: 'use', header: 'Use' },
          ]"
          [rows]="tokens"
          emptyMessage="No tokens."
        />
        <na-stack gap="md">
          <na-heading level="2">Override</na-heading>
          <na-text tone="muted">Set variables before including base — they are all !default:</na-text>
          <docs-code-block [code]="override" />
        </na-stack>
        <na-alert tone="danger" title="Banned in v1">
          linear-gradient, box-shadow (except none), text-shadow and drop-shadow are
          banned by stylelint. Flat elevation via 1px borders; focus is a 2px lime outline.
        </na-alert>
      </na-stack>
    </na-page>
  `,
})
export class ThemePage {
  protected readonly tokens = [
    { token: '$na-bg / --na-bg', value: '#1b1e1a', description: '', use: 'App background' },
    { token: '$na-surface-1', value: '#232723', description: '', use: 'Card / input' },
    { token: '$na-surface-2', value: '#2c312b', description: '', use: 'Raised / hover' },
    { token: '$na-surface-3', value: '#343a33', description: '', use: 'Active / selected' },
    { token: '$na-border', value: '#3a4139', description: '', use: 'Flat elevation' },
    { token: '$na-text', value: '#e7eae1', description: '', use: 'Warm off-white (never #fff)' },
    { token: '$na-text-muted', value: '#a6afa1', description: '', use: 'Secondary text' },
    { token: '$na-accent', value: '#cdea7f', description: '', use: 'Pastel lime — actions only' },
    { token: '$na-danger', value: '#e2a3a3', description: '', use: 'Desaturated matte red' },
    { token: '$na-success', value: '#a9d1a4', description: '', use: 'Matte green' },
    { token: '$na-warning', value: '#e3c88d', description: '', use: 'Matte amber' },
    { token: '$na-info', value: '#a9c6d4', description: '', use: 'Matte blue' },
  ];
  protected readonly override = `@use 'newang/styles' as na with (\n  $na-accent: #d4f08a,\n  $na-bg: #191c19\n);\n@include na.base();`;
}
