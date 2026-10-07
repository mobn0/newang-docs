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
            Dark-only. Neutral charcoal surfaces, pastel lime accent, square corners.
            Tokens live in newang/styles as !default SCSS variables
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
        <na-alert tone="info" title="Bar-less alerts">
          Alert tone colors the title text — there is no side bar or background
          wash. Pick tone + title and let the component do the rest.
        </na-alert>
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
    { token: '$na-bg / --na-bg', value: '#1a1a1a', description: '', use: 'App background' },
    { token: '$na-surface-1', value: '#232323', description: '', use: 'Card / input' },
    { token: '$na-surface-2', value: '#2b2b2b', description: '', use: 'Raised / hover' },
    { token: '$na-surface-3', value: '#333333', description: '', use: 'Active / selected' },
    { token: '$na-border', value: '#3a3a3a', description: '', use: 'Flat elevation' },
    { token: '$na-border-strong', value: '#525252', description: '', use: 'Strong borders' },
    { token: '$na-text', value: '#e8e8e8', description: '', use: 'Soft off-white (never #fff)' },
    { token: '$na-text-muted', value: '#a8a8a8', description: '', use: 'Secondary text' },
    { token: '$na-text-faint', value: '#808080', description: '', use: 'Captions / metadata' },
    { token: '$na-accent', value: '#cdea7f', description: '', use: 'Pastel lime — actions only' },
    { token: '$na-danger', value: '#e2a3a3', description: '', use: 'Desaturated matte red' },
    { token: '$na-success', value: '#a9d1a4', description: '', use: 'Matte green' },
    { token: '$na-warning', value: '#e3c88d', description: '', use: 'Matte amber' },
    { token: '$na-info', value: '#a9c6d4', description: '', use: 'Matte blue' },
    { token: '$na-radius-sm / md / lg', value: '0', description: '', use: 'Square corners everywhere' },
  ];
  protected readonly override = `@use 'newang/styles' as na with (\n  $na-accent: #d4f08a,\n  $na-bg: #191c19\n);\n@include na.base();`;
}
