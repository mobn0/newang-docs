import { Component, input } from '@angular/core';
import { NaTable } from 'newang';
import type { ApiRow } from '../data/component-docs';

@Component({
  selector: 'docs-api-table',
  imports: [NaTable],
  template: `
    <na-table
      [columns]="[
        { key: 'name', header: 'Input / Output' },
        { key: 'type', header: 'Type' },
        { key: 'default', header: 'Default' },
        { key: 'description', header: 'Description' },
      ]"
      [rows]="tableRows()"
      emptyMessage="No API entries."
    />
  `,
})
export class ApiTable {
  readonly rows = input.required<ApiRow[]>();

  protected tableRows() {
    return this.rows().map((r) => ({
      name: r.name,
      type: r.type,
      default: r.default,
      description: r.description,
    }));
  }
}
