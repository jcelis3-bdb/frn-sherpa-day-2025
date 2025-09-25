import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { defineCustomElements } from '@npm-bbta/bbog-dig-dt-sherpa-lib/loader';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

defineCustomElements();
