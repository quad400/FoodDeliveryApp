import icons from './icons'
import images from './images'

const categoryItem = [
    {
        id:1,
        label:"All",
        icon:require('../assets/images/img1.jpg')
    },
    {
        id:2,
        label:"Chicken",
        icon:require('../assets/images/img1.jpg')
    },
    {
        id:3,
        label:"Rice",
        icon:require('../assets/images/img1.jpg')
    },
    {
        id:4,
        label:"Cake",
        icon:require('../assets/images/img1.jpg')
    },
    {
        id:5,
        label:"Fast Food",
        icon:require('../assets/images/img1.jpg')
    },
    {
        id:6,
        label:"Coffee",
        icon:require('../assets/images/img1.jpg')
    },
]

const itemContent = [
    {
        id: 1,
        image: require('../assets/images/img1.jpg'),
        title: "Funchose with shrimps",
        detail: "Medium to large shrimp, chicken stock, makrut lime leaves lemongrass, golangal, thai chilis, thai chili paste, fresh lime juice",
        sizes: [
            {
                id: 1,
                size: "S",
                liter: "500ml",
                price: 0,
            },
            {
                id:2,
                size: "M",
                liter: "750ml",
                price: 0.5,
            },
            {
                id:3,
                size: "L",
                liter: "1100ml",
                price: 1.2,
            }
        ],
        options: [
            {
                id: 1,
                name:"Add Lemon"
            }, 
            {
                id: 2,
                name:"Add Ice"
            }
        ],
        price: 74,
        star_one:0,
        star_two:0,
        star_three:0,
        star_four:0,
        star_five:3,
        rate_count:4.5,
        reviews_count: 23,
        photos: [
            {
                id: 1,
                image: require("../assets/images/img1.jpg"),
            },
            {
                id: 2,
                image: require("../assets/images/img2.jpg"),
            },
            {
                id: 3,
                image: require("../assets/images/img3.jpg"),
            }
        ],
        rate: [
            {   
                id: 1,
                name: "Pauline McGuire",
                rate: 2,
                image: require("../assets/images/pic.jpeg"),
                date: "Yesterday",
                time: "5:00pm",
                comment: "Very good I love it",
                content: []
            },
            {   
                id: 2,
                name: "Adediji Abdulquadri",
                rate: 4,
                image: require("../assets/images/pic.jpeg"),
                date: "Yesterday",
                time: "5:00pm",
                comment: "Very good I love it",
                content: [
                    {
                        id: 1,
                        image: require('../assets/images/img1.jpg'),
                    },
                    {
                        id: 2,
                        image: require('../assets/images/img2.jpg'),
                    },
                    {
                        id: 3,
                        image: require('../assets/images/img3.jpg'),
                    }
                ]
            }
        ],

    popular_similar_product: [
        {
            id: 1,
            image: require('../assets/images/img2.jpg'),
            title: "Bread and Beans",
            detail: "Medium to large shrimp, chicken stock, makrut lime leaves lemongrass, golangal, thai chilis, thai chili paste, fresh lime juice",
            calories: 320,
            previousPrice: 87,
            price: 74,
        },
        {
            id: 2,
            image: require('../assets/images/img3.jpg'),
            title: "Rice  and spaggetti",
            detail: "Medium to large shrimp, chicken stock, makrut lime leaves lemongrass, golangal, thai chilis, thai chili paste, fresh lime juice",
            calories: 320,
            previousPrice: 87,
            price: 74,
        },
    ]
    },
    {
        id: 2,
        image: require('../assets/images/img2.jpg'),
        title: "Fried & Jollof rice",
        detail: "Medium to large shrimp, chicken stock",
        calories: 33,
        previousPrice: 89,
        price: 5,
        sizes: [
            {
                id: 1,
                size: "S",
                price: 0.5,
            },
            {
                id:2,
                size: "M",
                liter: "",
                price: 5,
            },
            {
                id:3,
                size: "L",
                liter: "",
                price: 10,
            }
        ],
        options: [
            {
                id: 1,
                name:"Add Extra Chicken"
            }, 
            {
                id: 2,
                name:"Add Extra Rice"
            },
            {
                id: 3,
                name:"Add Coldslaw"
            }
        ],
        star_one:0,
        star_two:0,
        star_three:0,
        star_four:2,
        star_five:4,
        rate_count:3.5,
        reviews_count: 12,
        rate: [
            {
                name: "Adediji Abdul quadri",
                rate: 5,
                time: "6:00pm",
                date: "Yesterday",
                comment: "",
                attachment_file: []
            },
            {
                name: "Adediji Khadijat",
                rate: 4,
                date: "Yesterday",
                time: "6:00pm",
                comment: "Nice food",
                attachment_file: []
            }
        ]
    },
    {
        id: 3,
        image: require('../assets/images/img3.jpg'),
        title: "Funchose with shrimps",
        detail: "Medium to large shrimp, chicken stock, makrut lime leaves lemongrass, golangal, thai chilis, thai chili paste, fresh lime juice",
        calories: 320,
        previousPrice: 87,
        price: 74,
        sizes: [
            {
                id: 1,
                size: "S",
                liter: "500ml",
                price: 0,
            },
            {
                id:2,
                size: "M",
                liter: "750ml",
                price: 0.5,
            },
            {
                id:3,
                size: "L",
                liter: "1100ml",
                price: 1.2,
            }
        ],
        options: [
            {
                id: 1,
                name:"Add Lemon"
            }, 
            {
                id: 2,
                name:"Add Ice"
            }
        ],
        price: 74,
        star_one:0,
        star_two:0,
        star_three:0,
        star_four:0,
        star_five:0,
        rate: [
            // {
            //     name: "Pauline McGuire",
            //     rate: 4,
            //     date: "Yesterday",
            //     comment: "Very good I love it",
            //     attachment_file: [
            //         require('../assets/images/img1.jpg'),
            //         require('../assets/images/img2.jpg'),
            //         require('../assets/images/img3.jpg'),
            //     ]
            // }
        ]
    },
    {
        id: 4,
        image: require('../assets/images/img2.jpg'),
        title: "Funchose with shrimps",
        detail: "Medium to large shrimp, chicken stock, makrut lime leaves lemongrass, golangal, thai chilis, thai chili paste, fresh lime juice",
        calories: 320,
        previousPrice: 87,
        price: 74,
    },
    {
        id: 5,
        image: require('../assets/images/img3.jpg'),
        title: "Funchose with shrimps",
        detail: "Medium to large shrimp, chicken stock, makrut lime leaves lemongrass, golangal, thai chilis, thai chili paste, fresh lime juice",
        calories: 320,
        previousPrice: 87,
        price: 74,
    },
]

const nearBy = [
    {
        id: 1,
        image: require('../assets/images/img3.jpg'),
        title: "Funchose with shrimps",
        detail: "Medium to large shrimp, chicken stock, makrut lime leaves lemongrass, golangal, thai chilis, thai chili paste, fresh lime juice",
        calories: 320,
        previousPrice: 87,
        price: 74,
    },
    {
        id: 2,
        image: require('../assets/images/img3.jpg'),
        title: "Funchose with shrimps",
        detail: "Medium to large shrimp, chicken stock, makrut lime leaves lemongrass, golangal, thai chilis, thai chili paste, fresh lime juice",
        calories: 320,
        previousPrice: 87,
        price: 74,
    },
]

const ongoing_order = [
    {
        id:'4324eH2',
        resturant_name: 'Kichi Coffee & Drink',
        status: 'Shipping',
        item_count: 4,
        resturant_image: require('../assets/images/img3.jpg'),
        total_price: 67,
        items: [
            {
                id: 1,
                name: 'Coke',
                image: require('../assets/images/img3.jpg'),
                price: 34,
                count: 2
            },
            {
                id: 2,
                name: 'Maltina',
                image: require('../assets/images/img2.jpg'),
                price: 21,
                count: 1
            },
        ]
    },
    {
        id:'43fw34fg',
        resturant_name: 'Chicken Republic',
        status: 'Waiting',
        item_count: 3,
        total_price: 50,
        resturant_image: require('../assets/images/img1.jpg'),
        items: [
            {
                id: 1,
                name: 'Full Chicken',
                image: require('../assets/images/img3.jpg'),
                price: 14,
                count: 1
            },
            {
                id: 2,
                name: 'Rice & Chicken',
                image: require('../assets/images/img2.jpg'),
                price: 30,
                count: 1
            },
        ]
    },
]

const order_history = [
    {
        id:'4324eH2',
        resturant_name: 'Kichi Coffee & Drink',
        status: 'Shipping',
        item_count: 4,
        date: 'Yesterday',
        resturant_image: require('../assets/images/img3.jpg'),
        items: [
            {
                id: 1,
                name: 'Coke',
                image: require('../assets/images/img3.jpg'),
                price: 34,
            },
            {
                id: 2,
                name: 'Maltina',
                image: require('../assets/images/img2.jpg'),
                price: 21,
            },
        ]
    },
    {
        id:'43fw34fg',
        resturant_name: 'Chicken Republic',
        status: 'Waiting',
        item_count: 3,
        date: 'March 02, 2023',
        resturant_image: require('../assets/images/img1.jpg'),
        items: [
            {
                id: 1,
                name: 'Full Chicken',
                image: require('../assets/images/img3.jpg'),
                price: 14,
            },
            {
                id: 2,
                name: 'Rice & Chicken',
                image: require('../assets/images/img2.jpg'),
                price: 30,
            },
        ]
    },
]

const order_item = [
    {    
        id: '4324eH2',
        name: 'Kilishi Spot',
        item :
            [
                {
                    id:'4324eH',
                    resturant_name: 'Kichi Coffee & Drink',
                    price: 2.9,
                    image: require('../assets/images/img3.jpg'),
                },
                {
                    id:'4324eH2',
                    resturant_name: 'Kichi Coffee & Drink',
                    price: 2.9,
                    image: require('../assets/images/img3.jpg'),
                },
            ],
        total_fee : 5.7 
    }
]

const payment_options = [
    {
        id: 1,
        payment_type: 'visa',
        card_number: '1234123412341234',
        icon: icons.visa
    },
    {
        id: 1,
        payment_type: 'paypal',
        card_number: '1234123412341234',
        icon: icons.paypal
    }
]

const profile = {
    location: "76A Eight Avenue,New York,US",
    name: "Adediji Abdulquadri",
    phone: "(+234) 8106490229",
    email: "adedijiabdulquadri@gmail.com",
    picture: require('../assets/images/pic.jpeg'),
    DOB: "July 09, 2000",
    payment_type: [
        {
            id: 1,
            payment_type: 'visa',
            card_number: '1234123412341234',
            icon: icons.visa,
            expiry_date: "Jun 10, 2020"
        },
        {
            id: 2,
            payment_type: 'paypal',
            card_number: '1234123412341234',
            icon: icons.paypal,
            expiry_date: "Jun 10, 2020"
        }
    ],
    address: [
        {  
            id: 1,
            place: 'Home',
            address: 'Zone4 Ayekale, Otaefun Osogbo, Osun State, Nigeria',
            user_address_name: 'Adediji Abdulquadri',
            phone: '(+234) 8106490229'
        },
        {  
            id: 2,
            place: 'Home',
            address: 'Zone4 Ayekale, Otaefun Osogbo, Osun State, Nigeria',
            user_address_name: 'Adediji Abdulquadri',
            phone: '(+234) 8106490229'
        }
    ]
}

const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: images.favFood,
        title: "Search for favourite food near you",
        detail: "Discover the foods from over 3350 resturants"
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/background_02.png"),
        bannerImage: images.hotDelivery,
        title: "Fast delivery to your place",
        detail: "Fast delivery to your home, office and wherever you are"
    },
    {
        id: 3,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: images.greatFood,
        title: "Recieve the great food",
        detail: "Discover the foods from over 3350 resturants"
    }
]

export default {
    categoryItem,
    order_item,
    itemContent,
    profile,
    payment_options,
    nearBy,
    onboarding_screens,
    ongoing_order,
    order_history
}