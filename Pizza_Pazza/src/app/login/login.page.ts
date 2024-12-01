import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Define credentials object to bind to the form
  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { } // Inject Router

  ngOnInit() { }

  // Login method (with navigation to Menu Module)
  login() {
    if (this.credentials.email && this.credentials.password) {
      console.log('Login successful!');
      console.log('Email:', this.credentials.email);
      console.log('Password:', this.credentials.password);

      // Navigate to the Menu Module
      this.router.navigate(['/menu']);
    } else {
      console.log('Please fill out all fields');
    }
  }
}