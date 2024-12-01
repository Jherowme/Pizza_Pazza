import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private router: Router) { } // Inject Router

  ngOnInit() { }

  // Navigation method
  navigateToRegister() {
    this.router.navigate(['/register']); // Navigate to the Register module
  }
}