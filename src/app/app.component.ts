import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { CookieBannerComponent } from './shared/cookie-banner/cookie-banner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    CookieBannerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular18-blog-i18n';
  showCookieBanner = false;

  @ViewChild(CookieBannerComponent) cookieBanner!: CookieBannerComponent; // Use the definite assignment assertion

  constructor(private cookieService: CookieService) {
    this.checkConsent();
  }

  checkConsent() {
    const consent = this.cookieService.get('consent');
    this.showCookieBanner = !consent; // Show banner if consent is not given
  }

  openCookieBanner() {
    this.showCookieBanner = true; // Show the cookie banner again
    this.cookieBanner.resetBanner(); // Reset the state of the banner
  }
}
