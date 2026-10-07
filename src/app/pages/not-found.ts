import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NaButton, NaEmptyState, NaPage } from 'newang';

@Component({
  imports: [RouterLink, NaButton, NaEmptyState, NaPage],
  template: `
    <na-page maxWidth="md">
      <na-empty-state title="Page not found" description="The page you are looking for does not exist.">
        <a routerLink="/" style="text-decoration:none"><na-button variant="primary">Back home</na-button></a>
      </na-empty-state>
    </na-page>
  `,
})
export class NotFoundPage {}
