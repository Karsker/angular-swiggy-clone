# Angular Swiggy Clone
This project is a clone of the Swiggy website developed using Angular.

## Functionality
The website has the following working components:
1. The landing page shows a list of restaurants
2. On selecting a restaurant, the user is redirected to the restaurant page with details like delivery time, outlet, top picks and menu.
3. The user can click on the Add button to add the item to the cart.
4. At a time, items from only one restaurant may be added to the cart. On adding item from different restaurants, a prompt is shown asking the user to confirm if they want to reset the cart.
5. The cart page shows the added items, along with option to increase or decrase the quantity of the items. The prices and amounts are updated dynamically.
6. Users can sign up and sign in to their accounts.

### Restuarants With Available Data
Currently only the following restuarants on the home page have working menu pages:
1. Domino's Pizza
2. Subway
3. LunchBox

## Data
All the data for the restaurants is stored in the `restaurants-data.ts` file.

## Authentication
For user authentication, the users sign up using their phone number, name and email. The user data is stored in mockapi.io database. To sign in, the users must provide the same phone number. The application fetches the users list from mockapi and checks if a user with the entered phone number exists. If the user exists, their ID is added to session storage. On subsequent launches of the application, the user details are fetched from session storage, if available.

## Routes
The following routes exist in the application:
1. `/home`: The landing page where the default route is redirected to. It shows the popular restaurants, dishes, and the contact details in the footer.
2. `/restaurant/:id`: The individual restaurant page. The dynamic route `:id` is replaced by the restaurant id.
3. `/checkout`: The cart page where user can see their added items and place the order.