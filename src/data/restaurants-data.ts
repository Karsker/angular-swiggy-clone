import { RestaurantDetails } from "../types";
export const restaurantsByCity:string[] = [
    'Best Restaurants in Hyderabad',
    'Best Restaurants in Kolkata',
    'Best Restaurants in Chennai',
    'Best Restaurants in Chandigarh',
    'Best Restaurants in Ahmedabad',
    'Best Restaurants in Jaipur',
    'Best Restaurants in Nagpur',
    'Best Restaurants in Bhubaneswar',
];

export const restaurantsByCuisine:string[] = [
    'Chinese Restaurant Near Me',
    'South Indian Restaurant Near Me',
    'Indian Restaurant Near Me',
    'Kerela Restaurant Near Me',
    'Korean Restaurant Near Me',
    'North Indian Restaurant Near Me',
    'Seafood Restaurant Near Me',
    'Bengali Restaurant Near Me',
    'Punjabi Restaurant Near Me',
    'Italian Restaurant Near Me',
    'Andhra Restaurant Near Me',
    'Biryani Restaurant Near Me',
];


export const restaurantMenus:RestaurantDetails[] = [
    {
        id: "subway",
        name: "Subway",
        rating: 4.2,
        outlet: "Egattur",
        deliveryTime: "40-45 mins",
        tags: ["Salads", "Snacks"],
        imgSrc: "../../assets/images/restaurants/subway.avif",
        menu: [
            {
                id: 1,
                name: "Potato Chilli Cheese",
                price: 279,
                imgSrc: "../../assets/images/menu/subway/potato-chilli-cheese.avif",
                description: "Hot toasted sub loaded with 1.5x potato patty and real mozz cheese, topped with mint mayo, onions and capsicum and cheese slice. Serving size: 15cm - 238 g/518 kcal, 30cm - 476 g/1036 kcal. Allergens - Contains cereals containing gluten, milk, soy.",
                veg: true
            },
            {
                id: 2,
                name: "Chicken Melt Keema",
                price:  279,
                imgSrc: "../../assets/images/menu/subway/chicken-keema-melt.avif",
                description: "Hot and cheesy toasted sub with 1.5x chicken keema, real mozz cheese, onion, capsicum, chili mayo and cheese slice. Serving size: 15cm - 233 g/569 kcal, 30cm - 466 g/1138 kcal.  Allergens - Contains cereals containing gluten, milk, soy.",
                veg: false
            },
            {
                id: 3,
                name: "Cheesy Paneer Tikka",
                price: 319,
                imgSrc: "../../assets/images/menu/subway/cheesy-paneer-tikka.avif",
                description: "Double the paneer, with real mozz cheese. Indulge in hot cheesy paneer melt loaded with paneer, tangy tandoori sauce, fresh veggies and cheese slice. Serving size: 15cm - 299 g/678 kcal, 30cm - 598 g/1356 kcal.  Allergens - Contains cereals containing gluten, milk, soy.",
                veg: true
            }
        ],
        topPicks: [
            {
                dish: {
                    id: 3,
                    name: "Cheesy Paneer Tikka",
                    price: 319,
                    imgSrc: "../../assets/images/menu/subway/cheesy-paneer-tikka.avif",
                    description: "Double the paneer, with real mozz cheese. Indulge in hot cheesy paneer melt loaded with paneer, tangy tandoori sauce, fresh veggies and cheese slice. Serving size: 15cm - 299 g/678 kcal, 30cm - 598 g/1356 kcal.  Allergens - Contains cereals containing gluten, milk, soy.",
                    veg: true
                },
                imgSrc: "../../assets/images/menu/subway/top-picks/cheesy-paneer-tikka.avif"
            },
            {
                dish: {
                    id: 1,
                    name: "Potato Chilli Cheese",
                    price: 279,
                    imgSrc: "../../assets/images/menu/subway/potato-chilli-cheese.avif",
                    description: "Hot toasted sub loaded with 1.5x potato patty and real mozz cheese, topped with mint mayo, onions and capsicum and cheese slice. Serving size: 15cm - 238 g/518 kcal, 30cm - 476 g/1036 kcal. Allergens - Contains cereals containing gluten, milk, soy.",
                    veg: true
                },
                imgSrc: "../../assets/images/menu/subway/top-picks/potato-chilli-cheese.avif",
            },
            
        ]
       
    },
    {
        id: "dominos",
        name: "Domino's Pizza",
        rating: 3.8,
        outlet: "Coromandel Plaza",
        deliveryTime: "20-25 mins",
        tags: ["Pizzas", "Italian"],
        imgSrc: "../../assets/images/restaurants/dominos.avif",
        menu: [
            {
                id: 1,
                name: "Peppy Paneer Cheese Burst",
                price: 558,
                imgSrc: "../../assets/images/menu/dominos/peppy-paneer-cheese-burst.avif",
                description: "Now in 3 New Flavours - Molten Cheese Indulgence with Flavorful trio of juicy paneer, crisp capsicum & spicy red paprika",
                veg: true
            },
            {
                id: 2,
                name: "Farmhouse Cheese Burst",
                price: 558,
                imgSrc: "../../assets/images/menu/dominos/farmhouse-cheese-burst.avif",
                description: "Now in 3 New Flavours - Molten Cheese Indulgence with combination of onion, capsicum, tomato & grilled mushroom",
                veg: true
            },
            {
                id: 3,
                name: "Veggie Paradise Cheese Burst",
                price: 558,
                imgSrc: "../../assets/images/menu/dominos/veggie-paradise-cheese-burst.avif",
                description: "Now in 3 New Flavours - Molten Cheese Indulgence with Golden corn, black olives, capsicum & red paprika",
                veg: true
            },
            {
                id: 4,
                name: "Margherita Cheese Burst",
                price: 338,
                imgSrc: "../../assets/images/menu/dominos/margherita-cheese-burst.avif",
                description: "Now in 3 New Flavours - Molten Cheese Indulgence with delight of 100% real mozzarella cheese",
                veg: true
            },
            
        ],
        topPicks: [
            {
                dish: {
                    id: 2,
                    name: "Farmhouse Cheese Burst",
                    price: 558,
                    imgSrc: "../../assets/images/menu/dominos/farmhouse-cheese-burst.avif",
                    description: "Now in 3 New Flavours - Molten Cheese Indulgence with combination of onion, capsicum, tomato & grilled mushroom",
                    veg: true
                },
                imgSrc: "../../assets/images/menu/dominos/top-picks/farm-house-cheese-burst.avif"
            },
            {
                dish: {
                    id: 1,
                    name: "Peppy Paneer Cheese Burst",
                    price: 558,
                    imgSrc: "../../assets/images/menu/dominos/peppy-paneer-cheese-burst.avif",
                    description: "Now in 3 New Flavours - Molten Cheese Indulgence with Flavorful trio of juicy paneer, crisp capsicum & spicy red paprika",
                    veg: true
                },
                imgSrc: "../../assets/images/menu/dominos/top-picks/peppy-paneer-cheese-burst.avif"
            }
        ]
    },
    {
        id: "lunchbox",
        name: "LunchBox - Meals and Thalis",
        outlet: "Adambakam",
        imgSrc: "../../assets/images/restaurants/lunchbox.avif",
        deliveryTime: "25-30 mins",
        rating: 4.4,
        tags: ["Biryani", "North Indian"],
        menu: [
            {
                id: 1,
                name: "Gobi Paratha With Curd and Green Chutney",
                description: "Savor the classic comfort of stuffed Gobi Paratha paired with cooling curd and a zesty green chutney. A light yet flavorful meal perfect for any time of the day.",
                price: 239,
                imgSrc: "../../assets/images/menu/lunchbox/gobi-parantha.avif",
                veg: true
            },
            {
                id: 2,
                name: "Gobi Paratha and Dal Makhani",
                description: "Indulge in a hearty combo of soft, spiced Gobi Paratha served alongside creamy Dal Makhani. The rich gravy and stuffed paratha make for a wholesome, satisfying meal.",
                price: 259,
                imgSrc: "../../assets/images/menu/lunchbox/gobi-parantha-and-dal-makhani.avif",
                veg: true
            },
            {
                id: 3,
                name: "Rajma Chawal Lunchbox",
                description: "Savor the classic comfort of stuffed Gobi Paratha paired with cooling curd and a zesty green chutney. A light yet flavorful meal perfect for any time of the day.",
                price: 159,
                imgSrc: "../../assets/images/menu/lunchbox/rajma-chawal.avif",
                veg: true
            },
            {
                id: 4,
                name: "Dal Makhani & Rice Lunchbox",
                description: "(Contains Onion and garlic) Authentic Dal Makhni, creamy & rich at its core, will fill you with a feeling of contentment and delight. Served with a side of Rice. Sufficient for 1.",
                price: 159,
                imgSrc: "../../assets/images/menu/lunchbox/dal-makhani.avif",
                veg: true
            }
        ],
        topPicks: [
            {
                imgSrc: "../../assets/images/menu/lunchbox/top-picks/sabudana-khichdi-curd-meal.avif",
                dish: {
                    id: 5,
                    description: "(NO ONION, NO GARLIC & MADE WITH SENDHA NAMAK) All time favourite upvas essential made with sabudana, green chillies and roasted peanut and served with Curd",
                    name: "Sabudana Khichdi & Curd Meal",
                    imgSrc: "",
                    price: 159,
                    veg: true,
                }
            },
            {
                imgSrc: "../../assets/images/menu/lunchbox/top-picks/upvas-aloo-pattice.avif",
                dish: {
                    id: 6,
                    description: "(NO ONION, NO GARLIC & MADE WITH SENDHA NAMAK) All time favourite upvas essential made with sabudana, green chillies and roasted peanut and served with Curd",
                    name: "Upvas Aloo Pattice with Imli Chutney and Curd",
                    imgSrc: "",
                    price: 159,
                    veg: true,
                }
            }
        ]

    }
]