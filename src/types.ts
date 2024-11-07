export interface User {
    name: string,
}

export interface Restaurant {
    name: string,
    imgSrc: string,
    imgAlt: string,
    rating: string,
    deliveryTime: string,
    pricePromotion: string,
    tags: string[],
    link: (string|Object)[]
}

export interface RestaurantDetails {
    id: string,
    name: string,
    rating: number,
    outlet: string,
    deliveryTime: string,
    tags: string[],
    imgSrc: string,
    menu: RestaurantMenuDish[];
    topPicks: TopPickDish[];
}

export interface RestaurantMenuDish {
    id: number,
    name: string,
    price: number,
    imgSrc: string,
    description: string,
    veg: boolean
}

export interface TopPickDish {
    imgSrc: string,
    dish: RestaurantMenuDish;
}

export interface CartItem {
    id: number,
    itemName: string,
    quantity: number,
    price: number,
    veg: boolean,
    amount: number
}

export interface User {
    id?: string,
    name: string,
    phone: string,
    email: string
}