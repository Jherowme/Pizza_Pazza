import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

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

  totalAmount: number = 0;
  selectedPaymentOption: string = ''; // Holds the selected payment option

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.pizza = navigation.extras.state['pizza'];
      this.pizzaOptions = navigation.extras.state['options'] || this.pizzaOptions;
      this.calculateTotalAmount();
    }
  }

  // Method to calculate total amount
  calculateTotalAmount() {
    if (this.pizza) {
      this.totalAmount = this.pizza.price;

      if (this.pizzaOptions.toppings.basil) {
        this.totalAmount += 1;  // Basil topping price
      }
      if (this.pizzaOptions.toppings.sausages) {
        this.totalAmount += 2;  // Sausage topping price
      }
    }
  }

  // Method to handle the Confirm Payment button click
  confirmPayment() {
    if (this.selectedPaymentOption) {
      // Navigate to the order-success page after payment confirmation
      this.router.navigate(['/order-success'], {
        state: { paymentMethod: this.selectedPaymentOption },
      });
    } else {
      alert('Please select a payment option.');
    }
  }
}