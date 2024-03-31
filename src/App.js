import React, {lazy} from 'react';

import {Routes, Route, Link} from "react-router-dom";
import Layout from "./page/Layout";
const Category = lazy(() => import("./page/Category"));
const Cart = lazy(() => import("./page/Cart"));
const Products = lazy(() => import("./page/Products"));
const Subcategory = lazy(() => import("./page/Subcategory"));

const App = () => {
    const categories = [
        {
            id: "1",
            name: {
                ru: "Промо",
                am: "Պրոմո",
                eng: "Promo"
            },
            image: "https://img.freepik.com/free-photo/flat-lay-table-full-of-delicious-food-arrangement_23-2149141371.jpg",
            children: [],
            parentId: "",
        },
        {
            id: "2",
            name: {
                ru: "Акции",
                am: "Ակցիաներ",
                eng: "Discounts"
            },
            image: "https://img.freepik.com/premium-photo/sale-tags-hang-on-a-black-background_648777-170.jpg",
            children: [],
            parentId: "",
        },
        {
            id: "3",
            name: {
                ru: "Завтраки",
                am: "Նախաճաշ",
                eng: "Breakfast"
            },
            image: "https://static.sobaka.ru/images/image/01/71/85/07/_normal.jpg?v=1692789545",
            children: [],
            parentId: "",
        },
        {
            id: "4",
            name: {
                ru: "Постное меню",
                am: "Պահքի մենյու",
                eng: "Lean menu"
            },
            image: "https://s1.stc.all.kpcdn.net/family/wp-content/uploads/2023/02/luchshie-reczepty-prazdnichnyh-postnyh-blyud-960-960x540.jpg",
            children: [],
            parentId: "",
        },
        {
            id: "5",
            name: {
                ru: "Салаты",
                am: "Աղցաններ",
                eng: "Salads"
            },
            image: "https://lafoy.ru/photo_l/dieticheskie-salaty-recepty-1202-0.jpg",
            children: [],
            parentId: "",
        },
        {
            id: "6",
            name: {
                ru: "Закуски",
                am: "Նախուտեստներ",
                eng: "Snacks"
            },
            image: "https://cdn.lifehacker.ru/wp-content/uploads/2023/12/7_1608644081-e1701710615688_1701710643-630x315.jpeg",
            children: [],
            parentId: "",
        },
        {
            id: "7",
            name: {
                ru: "Пицца/Сэндвичи",
                am: "Պիցցա / Սենդվիչներ",
                eng: "Pizza/Sandwiches"
            },
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeWAFnZRLpBJt5Z8yIjgiJ6ohtxvV2EbCCQ&usqp=CAU",
            children: [],
            parentId: "",
        },
        {
            id: "8",
            name: {
                ru: "Супы",
                am: "Ապուրներ",
                eng: "Soups"
            },
            image: "https://cdn.vedomosti.ru/image/2022/q/126m1c/mobile_high-1dhi.jpg",
            children: [],
            parentId: "",
        },
        {
            id: "9",
            name: {
                ru: "Паназия",
                am: "Պանազիա",
                eng: "Panasia"
            },
            image: "https://www.afisha.ru/uploads/c/95/c958269606bc40c08e424e6fcb0530a5.jpg",
            children: [],
            parentId: "",
        },
        {
            id: "10",
            name: {
                ru: "Горячие Блюда",
                am: "Թաք ուտեստներ",
                eng: "Hot Dishes"
            },
            image: "https://ferma-m2.ru/images/shop/recipe_image/crop_500h500_02.jpg",
            children: [],
            parentId: "",
        },
        {
            id: "11",
            name: {
                ru: "Роллы/Теплые роллы",
                am: "Ռոլլեր/Տաք ռոլլեր",
                eng: "Rolls/Warm rolls"
            },
            image: "https://pizzausovo.ru/wp-content/uploads/2020/10/amerikanskij-e1604426504252.jpg",
            children: [],
            parentId: "",
        },
        {
            id: "12",
            name: {
                ru: "Суши/Острые суши",
                am: "Սուշի / Կծու սուշի",
                eng: "Sushi/Spicy sushi"
            },
            image: "https://доняпон.рф/wp-content/uploads/2022/01/12.jpg",
            children: [],
            parentId: "",
        },
        {
            id: "13",
            name: {
                ru: "Соусы",
                am: "Սոուսներ",
                eng: "Sauces"
            },
            image: "https://www.chefmarket.ru/blog/wp-content/uploads/2019/02/sauce-e1550351615568.jpg",
            children: [],
            parentId: "",
        },
        {
            id: "14",
            name: {
                ru: "Десерты",
                am: "Աղանդեր",
                eng: "Desserts"
            },
            image: "https://n1s1.hsmedia.ru/9a/16/7d/9a167da9ff6a625cc52deef5613cf22d/728x542_1_1ab28e0a737be5a979e9ced91cf7478c@1000x745_0xac120003_6533069871562640176.jpg",
            children: [],
            parentId: "",
        },
        {
            id: "15",
            name: {
                ru: "Барное меню",
                am: "Բար մենյու",
                eng: "The bar menu"
            },
            image: "https://img.freepik.com/premium-photo/beautiful-colorful-cocktails-in-the-glasses-on-the-bar_187166-1824.jpg",
            children: ["17", "18", "19", "20"],
            parentId: "",
        },
        {
            id: "16",
            name: {
                ru: "Подарочные сертификаты",
                am: "Նվերների վկայագրեր",
                eng: "Gift certificates"
            },
            image: "https://shelbygrooming.ru/local/templates/shelby/static/assets/media/certificate/1.jpg?1633694011",
            children: [],
            parentId: "",
        },
        {
            id: "17",
            name: {
                ru: "Кофе",
                am: "Սուրճ",
                eng: "Coffee"
            },
            image: "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg",
            children: [],
            parentId: "15"
        },
        {
            id: "18",
            name: {
                ru: "Молочные коктейли",
                am: "Կաթնային կոկտեյլներ.",
                eng: "Milkshakes"
            },
            image: "https://girlinthelittleredkitchen.com/wp-content/uploads/2016/08/Susan-Palmer-Boozy-Mexican-Chocolate-Milkshakes-2.jpg",
            children: [],
            parentId: "15"
        },
        {
            id: "19",
            name: {
                ru: "Смузи",
                am: "Սմուզի",
                eng: "Smoothie"
            },
            image: "https://images.eatsmarter.com/sites/default/files/styles/max_size/public/green-smoothie-with-kefir-676617.jpg",
            children: [],
            parentId: "15"
        },
        {
            id: "20",
            name: {
                ru: "Лимонады",
                am: "Լիմոնադներ",
                eng: "Lemonades"
            },
            image: "https://s1.eda.ru/StaticContent/Photos/120131111301/120214130019/p_O.jpg",
            children: [],
            parentId: "15"
        }
    ];

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Category data={categories} main={true}/>} />
                <Route path="cart" element={<Cart />} />
                <Route path="category/:categoryId" element={<Subcategory data={categories} />} />
                <Route path="products/:categoryId" element={<Products />} />
            </Route>
        </Routes>
    );
};

export default App;