import { enableProdMode } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const locale = $localize.locale;

fetch('assets/' + locale + '.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    return response.json();
  })
  .then((result) => {
    // Load translation
    console.log(result.translations);
    loadTranslations(result.translations);
    console.log('loaded translation');

    // Bootstrap app
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then(x => console.log('bootstrapped'))
      .catch((err) => {
        console.error(err);
        console.log('wtf');
      });
  })
  .catch(function () {
    //Err
  });
