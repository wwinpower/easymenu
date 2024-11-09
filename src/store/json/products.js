const data = [
    {
        id: "1",
        name: {
            ru: "Пицца Бургер",
            am: "Պիցցա Բուրգեր",
            eng: "Pizza Burger"
        },
        price: {
            amd: 3500,
            usd: 9,
            rub: 1000
        },
        description: {
            ru: "Сыр Моцарелла, фарш говяжий, лук красный, сыр Чеддер, помидоры, соус BBQ, соус томатный, огурцы маринованные",
            am: "Պանիր Մոցարելլա, աղացած տավարի միս, կարմիր սոխ, չեդդեր պանիր, լոլիկ, BBQ սոուս, տոմատի սոուս, մարինացված վարունգ",
            eng: "Mozzarella cheese, minced beef, red onion, Cheddar cheese, tomatoes, BBQ sauce, tomato sauce, pickled cucumbers"
        },
        count: 1,
        image: "https://amigos51.ru/nuber/images/shop/product/dd404c62-f6d2-477c-9c6a-429589131049/57c30f1a-06f7-48ee-b245-bf366f500f98.jpg",
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
                            name: {ru: "Грамм", am: "Գրամ", eng: "Grams"},
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
                            name: {ru: "Грамм", am: "Գրամ", eng: "Grams"},
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
                            name: {ru: "Грамм", am: "Գրամ", eng: "Grams"},
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


export default data;