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
        rate: [
            {
                name: "Pauline McGuire",
                rate: 4,
                date: "Yesterday",
                time: "5:00pm",
                comment: "Very good I love it",
                attachment_file: [
                    require('../assets/images/img1.jpg'),
                    require('../assets/images/img2.jpg'),
                    require('../assets/images/img3.jpg'),
                ]
            }
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
            {
                name: "Pauline McGuire",
                rate: 4,
                date: "Yesterday",
                comment: "Very good I love it",
                attachment_file: [
                    require('../assets/images/img1.jpg'),
                    require('../assets/images/img2.jpg'),
                    require('../assets/images/img3.jpg'),
                ]
            }
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
]

export default {
    categoryItem,
    itemContent,
    nearBy,
}