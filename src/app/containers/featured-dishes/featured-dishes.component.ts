import { Component } from '@angular/core';
import { SingleDishComponent } from '../../containers/single-dish/single-dish.component';
import { NgFor, NgIf } from '@angular/common';
import { UserAuthenticationService } from '../../services/user-authentication/user-authentication.service';
@Component({
  selector: 'app-featured-dishes',
  standalone: true,
  imports: [SingleDishComponent, NgFor, NgIf],
  templateUrl: './featured-dishes.component.html',
  styleUrl: './featured-dishes.component.scss'
})
export class FeaturedDishesComponent {
  
  dishes = [
    {
      title: "World Sandwich Day",
      imgSrc: "../../assets/images/dishes/world-sandwich-day.avif",
      imgAlt: "world-sandwich-day"
    },
    {
      title: "Biryani",
      imgSrc: "../../assets/images/dishes/biriyani.avif",
      imgAlt: "biryani"
    },
    {
      title: "South Indian",
      imgSrc: "../../assets/images/dishes/south-indian.avif",
      imgAlt: "south-indian"
    },
    {
      title: "Pizzas",
      imgSrc: "../../assets/images/dishes/pizzas.avif",
      imgAlt: "pizzas"
    },
    {
      title: "North Indian",
      imgSrc: "../../assets/images/dishes/north-indian.avif",
      imgAlt: "north-indian"
    },
    {
      title: "Burgers",
      imgSrc: "../../assets/images/dishes/burgers.avif",
      imgAlt: "burgers"
    },
    {
      title: "Chinese",
      imgSrc: "../../assets/images/dishes/chinese.avif",
      imgAlt: "chinese"
    },
    {
      title: "Cakes",
      imgSrc: "../../assets/images/dishes/cakes.avif",
      imgAlt: "cakes"
    }
  ];

  userName: string | null = null;

  constructor(private auth: UserAuthenticationService) {
    this.auth.currentUser.subscribe(value => {
      if (value) {
        this.userName = value.name;
      } else {
        this.userName = null;
      }
    });
  }

  scrollForward() {
    let featuredDishesContainer = document.getElementById('featured-dishes') as HTMLElement;
    featuredDishesContainer.scrollLeft += 100;
  }

  scrollBackward() {
    let featuredDishesContainer = document.getElementById('featured-dishes') as HTMLElement;
    featuredDishesContainer.scrollLeft -= 100;
  }
}
