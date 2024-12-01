import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  // Define pizza options as a class property
  pizzaOptions = {
    crust: '',
    size: '',
    toppings: { basil: false, sausages: false }
  };

  constructor(private router: Router) { } // Inject Router for navigation

  ngOnInit() {
  }

  // Define the proceedToCheckout method
  proceedToCheckout() {
    // Navigate to the checkout page and pass pizza options as state
    this.router.navigate(['/checkout'], { state: { options: this.pizzaOptions } });
  }

}