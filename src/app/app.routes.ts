import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
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
