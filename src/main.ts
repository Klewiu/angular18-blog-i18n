import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideNgcCookieConsent } from 'ngx-cookieconsent';
import { CookieService } from 'ngx-cookie-service';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    CookieService, // Add CookieService here
  ]
}).catch((err) => console.error(err));
