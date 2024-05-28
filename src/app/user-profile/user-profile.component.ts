import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://cache.cosmopolitan.fr/data/photo/w650_c17/47/photo-retro-humour-large.jpg'
  };

  AfficherAge: boolean = true;

  toggleAgeVisibility(): void {
    this.AfficherAge = !this.AfficherAge;
  }
}
