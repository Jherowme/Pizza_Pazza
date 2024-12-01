import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  // Add pizza data with images and details
  pizzas = [
    { 
      name: 'Margherita', 
      description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil.', 
      price: 10.99, 
      image: 'assets/images/margherita.jpg' 
    },
    { 
      name: 'Pepperoni', 
      description: 'Loaded with pepperoni and cheese.', 
      price: 12.99, 
      image: 'assets/images/pepperoni.jpg' 
    },
    { 
      name: 'Hawaiian', 
      description: 'Topped with ham, pineapple, and mozzarella.', 
      price: 12.99, 
      image: 'assets/images/hawaiian.jpg' 
    },
    { 
      name: 'Veggie Delight', 
      description: 'Topped with fresh vegetables and mozzarella.', 
      price: 11.99, 
      image: 'assets/images/veggie.jpg' 
    },
    { 
      name: 'BBQ Chicken', 
      description: 'Barbecue chicken with onions and cilantro.', 
      price: 13.99, 
      image: 'assets/images/bbq_chicken.jpg' 
    },
    { 
      name: 'Supreme', 
      description: 'Loaded with pepperoni, sausage, onions, and peppers.', 
      price: 14.99, 
      image: 'assets/images/supreme.jpg' 
    },
    { 
      name: 'Four Cheese', 
      description: 'A rich blend of four cheeses on a crispy crust.', 
      price: 14.99, 
      image: 'assets/images/four_cheese.jpg' 
    },
    { 
      name: 'Sicilian', 
      description: 'Thick crust pizza with a hearty tomato sauce and mozzarella.', 
      price: 14.99, 
      image: 'assets/images/sicilian.jpg' 
    },
    { 
      name: 'Buffalo Chicken', 
      description: 'Spicy buffalo chicken with a tangy blue cheese sauce.', 
      price: 13.99, 
      image: 'assets/images/buffalo_chicken.jpg' 
    },
    { 
      name: 'Meat Lover\'s', 
      description: 'Loaded with pepperoni, sausage, bacon, and ground beef.', 
      price: 14.99, 
      image: 'assets/images/meat_lovers.jpg' 
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  // Navigate to Checkout with selected pizza data
  navigateToCheckout(pizza: any) {
    this.router.navigate(['/checkout'], { state: { pizza } });
  }
}