import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  // Pizza details and options (as before)
  pizza: {
    name: string;
    description: string;
    price: number;
    image: string;
  } | undefined;

  pizzaOptions: {
    crust: string;
    size: string;
    toppings: { basil: boolean; sausages: boolean };
  } = {
    crust: 'Thin Crust',
    size: 'Medium',
    toppings: { basil: false, sausages: false }
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.pizza = navigation.extras.state['pizza'];
      this.pizzaOptions = navigation.extras.state['options'] || this.pizzaOptions;
    }
  }

  // Place Order method (navigates to the payment module)
  placeOrder() {
    if (this.pizza && this.pizzaOptions) {
      console.log('Order placed:', {
        pizza: this.pizza,
        options: this.pizzaOptions,
      });

      // Use Angular's Router to navigate to the payment page
      this.router.navigate(['/payment'], {
        state: {
          pizza: this.pizza,
          options: this.pizzaOptions
        }
      });
    } else {
      console.log('No pizza or options selected!');
    }
  }
}