const data = [
    {
        id: "1",
        name: {
            ru: "Пицца Бургер",
            am: "Պիցցա Բուրգեր",
            eng: "Pizza Burger"
        },
        price: {
            amd: 4500,
            usd: 9,
            rub: 1000
        },
        description: {
            ru: "Сыр Моцарелла, фарш говяжий, лук красный, сыр Чеддер, помидоры, соус BBQ, соус томатный, огурцы маринованные",
            am: "Պանիր Մոցարելլա, աղացած տավարի միս, կարմիր սոխ, չեդդեր պանիր, լոլիկ, BBQ սոուս, տոմատի սոուս, մարինացված վարունգ",
            eng: "Mozzarella cheese, minced beef, red onion, Cheddar cheese, tomatoes, BBQ sauce, tomato sauce, pickled cucumbers"
        },
        count: 1,
        image: "https://d9de67c9-7c80-4867-9059-316e0ef5445b.selstorage.ru/e87e352b-5887-48a2-abdd-d11974db2f14/product_images/compiled/square_large_jpeg/1-412-68888286b15edda34e48f0f5263c4a12b59b3c6c0ca98524b50ff357bc6576fa-810x810.jpeg",
        modifiers: [
            {
                id: "1",
                name: {
                    ru: "Топпинги",
                    am: "Տոպինգներ",
                    eng: "Toppings"
                },
                type: "multiple",
                required: true,
                options: [
                    {
                        id: "1",
                        name: {ru: "Сыр", am: "Պանիր", eng: "Cheese"},
                        price: {
                            amd: 250,
                            usd: 5,
                            rub: 200
                        },
                        default: false,
                        included: true,
                        value: 40,
                        count: 0,
                        units: {
                            id: "1",
                            name: {ru: "гр.", am: "գր․", eng: "g"},
                            value: "g"
                        }
                    },
                    {
                        id: "2",
                        name: {ru: "Грибы", am: "Սունկ", eng: "Mushrooms"},
                        price: {
                            amd: 300,
                            usd: 5,
                            rub: 200
                        },
                        default: false,
                        included: true,
                        value: 20,
                        count: 0,
                        units: {
                            id: "1",
                            name: {ru: "гр.", am: "գր․", eng: "g"},
                            value: "g"
                        }
                    },
                    {
                        id: "3",
                        name: {ru: "Колбаса", am: "Երշիկ", eng: "Sausage"},
                        price: {
                            amd: 200,
                            usd: 5,
                            rub: 200
                        },
                        default: false,
                        included: true,
                        value: 20,
                        count: 0,
                        units: {
                            id: "1",
                            name: {ru: "гр.", am: "գր․", eng: "g"},
                            value: "g"
                        }
                    }
                ]
            },
            {
                id: "2",
                name: {
                    ru: "Размер",
                    am: "Չափ",
                    eng: "Size"
                },
                type: "single",
                required: true,
                options: [
                    {
                        id: "1",
                        name: {ru: "", am: "", eng: ""},
                        value: 20,
                        price: {
                            amd: 0,
                            usd: 0,
                            rub: 0
                        },
                        default: true,
                        included: true,
                        selected: true,
                        units: {
                            id: "4",
                            name: {ru: "см", am: "սմ", eng: "cm"},
                            value: "cm"
                        }
                    },
                    {
                        id: "2",
                        name: {ru: "", am: "", eng: ""},
                        value: 30,
                        price: {
                            amd: 1000,
                            usd: 5,
                            rub: 200
                        },
                        default: false,
                        included: true,
                        selected: false,
                        units: {
                            id: "4",
                            name: {ru: "см", am: "սմ", eng: "cm"},
                            value: "cm"
                        }
                    },
                    {
                        id: "3",
                        name: {ru: "", am: "", eng: ""},
                        value: 40,
                        price: {
                            amd: 1500,
                            usd: 5,
                            rub: 200
                        },
                        default: false,
                        included: true,
                        selected: false,
                        units: {
                            id: "4",
                            name: {ru: "см", am: "սմ", eng: "cm"},
                            value: "cm"
                        }
                    },
                ]
            }
        ],
        categoryId: "7"
    }
]


module.exports = data;