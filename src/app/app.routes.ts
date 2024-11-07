import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Swiggy'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Swiggy'        
    },
    {
        path: 'restaurant/:name',
        component: RestaurantPageComponent,
        title: 'Restaurant'
    },
    {
        path: 'checkout',
        component: CartPageComponent,
        title: 'Checkout'
    }
];
