import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  redirectToUdemy(){
    window.open('https://www.udemy.com/user/tomasz-klewicki/');
  }
  sendEmail(){
    window.location.href="mailto:brosofcode@gmail.com"
  }
}
