import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <p i18n="@@my-custom-key">Hello this is a template text</p>
    <p i18n="@@template-only">Template only</p>
  `,
})
export class AppComponent {
  userName = 'Alex';

  title = $localize`:@@title:Hello ${this.userName}`;
}
