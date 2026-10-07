import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  NaApp,
  NaBadge,
  NaButton,
  NaFooter,
  NaHeader,
  NaInput,
  NaLink,
  NaRow,
  NaSplit,
  NaText,
} from 'newang';
import { DOCS_GROUPS } from './data/nav';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NaApp,
    NaBadge,
    NaButton,
    NaFooter,
    NaHeader,
    NaInput,
    NaLink,
    NaRow,
    NaSplit,
    NaText,
  ],
  templateUrl: './app.html',
})
export class App {
  protected readonly query = signal('');
  protected readonly groups = DOCS_GROUPS;

  protected readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return this.groups;
    return this.groups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (i) =>
            i.label.toLowerCase().includes(q) ||
            (i.selector ?? '').toLowerCase().includes(q),
        ),
      }))
      .filter((g) => g.items.length > 0);
  });

  protected onSearch(e: Event): void {
    this.query.set((e.target as HTMLInputElement).value);
  }
}
