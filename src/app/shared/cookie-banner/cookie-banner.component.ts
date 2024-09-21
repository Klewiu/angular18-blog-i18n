import { Component, Input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router'; 

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css'],
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule, CommonModule, MatButtonModule, RouterModule]
})
export class CookieBannerComponent {
  necessaryCookies = true; // Always allowed
  performanceCookies = false;
  analyticsCookies = false;
  marketingCookies = false;
  @Input() bannerVisible = true; // This controls the visibility

  constructor(private cookieService: CookieService) {}

  acceptChosen() {
    this.setCookies();
    localStorage.setItem('consentGiven', 'true'); // Set consent given
    this.bannerVisible = false; // Hide the banner
    this.refreshPage(); // Trigger refresh after accepting chosen cookies
  }
  
  acceptAll() {
    this.performanceCookies = true;
    this.analyticsCookies = true;
    this.marketingCookies = true;
    this.setCookies();
    localStorage.setItem('consentGiven', 'true'); // Set consent given
    this.bannerVisible = false; // Hide the banner
    this.refreshPage(); // Trigger refresh after accepting all cookies
  }
  
  denyAll() {
    this.performanceCookies = false;
    this.analyticsCookies = false;
    this.marketingCookies = false;
    this.setCookies();
    localStorage.removeItem('consentGiven'); // Optionally remove consent
    this.bannerVisible = false; // Hide the banner
    this.refreshPage(); // Trigger refresh after denying cookies
  }
  

  setCookies() {
    this.cookieService.set('performance', String(this.performanceCookies));
    this.cookieService.set('analytics', String(this.analyticsCookies));
    this.cookieService.set('marketing', String(this.marketingCookies));
    this.cookieService.set('consent', 'true'); // Indicate that consent was given
  }

  resetBanner() {
    this.performanceCookies = false;
    this.analyticsCookies = false;
    this.marketingCookies = false;
    this.bannerVisible = true; // Show the banner again
    localStorage.removeItem('consentGiven'); // Clear consent
  }

  refreshPage() {
    // This triggers a page refresh to ensure the cookie changes are reflected
    window.location.reload();
  }

  closeBanner() {
    this.bannerVisible = false;
  }
  
}
