import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // Define user object to bind to the form
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) { } // Inject Router

  ngOnInit() { }

  // Registration method (with navigation to Login Module)
  register() {
    if (this.user.name && this.user.email && this.user.password) {
      console.log('Registration successful!');
      console.log('Name:', this.user.name);
      console.log('Email:', this.user.email);
      console.log('Password:', this.user.password);

      // Navigate to the Login module
      this.router.navigate(['/login']);
    } else {
      console.log('Please fill out all fields');
    }
  }
}