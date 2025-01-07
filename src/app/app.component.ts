import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { CookieBannerComponent } from './shared/cookie-banner/cookie-banner.component';
import { CommonModule } from '@angular/common';
import { CookieManagementService } from './services/cookie-management.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    CookieBannerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CookieManagementService]
})
export class AppComponent  {
  title = 'angular18-blog-i18n';
  showCookieBanner = false;

  // @ViewChild(CookieBannerComponent) cookieBanner!: CookieBannerComponent;

  // constructor(private cookieService: CookieService) {}

  // ngOnInit() {
  //   this.checkConsent(); // Call cookie check on initialization
  // }

  // ngAfterViewInit() {
  //   if (this.showCookieBanner) {
  //     this.cookieBanner.resetBanner(); // Reset banner after it's initialized
  //   }
  // }

  // checkConsent() {
  //   const consent = this.cookieService.get('consent');
  //   const consentGiven = localStorage.getItem('consentGiven');
  //   this.showCookieBanner = !(consent || consentGiven); // Show banner if consent is not given
  // }

  // openCookieBanner() {
  //   this.showCookieBanner = true; // Show the cookie banner again
  //   if (this.cookieBanner) {
  //     this.cookieBanner.resetBanner(); // Reset the state of the banner
  //   }
  // }
}
