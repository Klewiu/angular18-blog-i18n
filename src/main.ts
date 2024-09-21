/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


import {provideNgcCookieConsent} from 'ngx-cookieconsent';


bootstrapApplication(AppComponent, {
  ...appConfig, // Spread the existing appConfig
  providers: [
    ...(appConfig.providers || []), // Keep existing providers from appConfig, // Add cookie consent provider
  ]
}).catch((err) => console.error(err));