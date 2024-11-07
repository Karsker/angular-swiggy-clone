import { Component } from '@angular/core';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { NgFor } from '@angular/common';
import { FavouriteRestaurantsComponent } from "../favourite-restaurants/favourite-restaurants.component";
@Component({
  selector: 'app-top-restaurants',
  standalone: true,
  imports: [RestaurantCardComponent, NgFor, FavouriteRestaurantsComponent],
  templateUrl: './top-restaurants.component.html',
  styleUrl: './top-restaurants.component.scss'
})
export class TopRestaurantsComponent {
  restaurants = [
    {
      name: "Domino's Pizza",
      imgSrc: "../../assets/images/restaurants/dominos.avif",
      imgAlt: "dominos",
      rating: "4.4",
      deliveryTime: "20-25 mins",
      pricePromotion: "ITEMS AT ₹89",
      tags: ["Pizzas", "Italian", "Pastas", "Desserts"],
      link: ["/restaurant", 'dominos']
    },
    {
      name: "Subway",
      imgSrc: "../../assets/images/restaurants/subway.avif",
      imgAlt: "subway",
      rating: "4.4",
      deliveryTime: "35-40 mins",
      pricePromotion: "30% OFF UPTO ₹75",
      tags: ["Salads", "Snacks", "Desserts", "Beverages"],
      link: ['/restaurant', 'subway']
    },
    {
      name: "LunchBox - Meals and Thalis",
      imgSrc: "../../assets/images/restaurants/lunchbox.avif",
      imgAlt: "lunchbox",
      rating: "4.4",
      deliveryTime: "25-30 mins",
      pricePromotion: "ITEMS AT ₹159",
      tags: ["Biryani", "North Indian", "Punjabi"],
      link: ['/restaurant/lunchbox']
    },
    {
      name: "A2B - Adyar Ananda Bhavan",
      imgSrc: "../../assets/images/restaurants/a2b.avif",
      imgAlt: "a2b",
      rating: "4.5",
      deliveryTime: "25-30 mins",
      pricePromotion: "₹125 OFF ABOVE ₹199",
      tags: ["South Indian", "Sweets", "Chinese"],
      link: ['/restaurant']
    },
    {
      name: "Jain Meals by EatFit",
      imgSrc: "../../assets/images/restaurants/eatfit.avif",
      imgAlt: "eatfit",
      rating: "4.7",
      deliveryTime: "35-40 mins",
      pricePromotion: "50% OFF UPTO ₹100",
      tags: ["Healthy Food", "Pizzas", "North Indian"],
      link: ['/restaurant']
    },
    {
      name: "KFC",
      imgSrc: "../../assets/images/restaurants/kfc.avif",
      imgAlt: "kfc",
      rating: "4.2",
      deliveryTime: "10-15 mins",
      pricePromotion: "ITEMS AT ₹89",
      tags: ["Burgers", "Fast Food", "Rolls & Wraps"],
      link: ['/restaurant']
    },
  ];

  scrollForward() {
    let featuredDishesContainer = document.getElementById('top-restaurants') as HTMLElement;
    featuredDishesContainer.scrollLeft += 500;
  }

  scrollBackward() {
    let featuredDishesContainer = document.getElementById('top-restaurants') as HTMLElement;
    featuredDishesContainer.scrollLeft -= 500;
  }
}
