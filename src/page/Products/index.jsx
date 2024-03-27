import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {PiCaretDownLight} from "react-icons/pi";

const Products = () => {
    const {categoryId} = useParams();
    const [product, setProduct] = useState(null);
    const [toggleTab, setToggleTab] = useState(false);

    const units = [
        {
            id: "1",
            name: {ru: "Грамм", am: "Գրամ", eng: "Grams"},
            value: "g"
        },
        {
            id: "2",
            name: {ru: "Штука", am: "Հատ", eng: "Piece"},
            value: "pcs"
        },
        {
            id: "3",
            name: {ru: "Литр", am: "Լիտր", eng: "Liter"},
            value: "l"
        },
        {
            id: "4",
            name: {ru: "см", am: "սմ", eng: "cm"},
            value: "cm"
        }
    ]

    const products = [
        {
            id: "1",
            name: {
                ru: "Пицца Бургер",
                am: "Պիցցա Բուրգեր",
                eng: "Pizza Burger"
            },
            price: {
                amd: 1000,
                usd: 5,
                rub: 200
            },
            description: {
                ru: "Сыр Моцарелла, фарш говяжий, лук красный, сыр Чеддер, помидоры, соус BBQ, соус томатный, огурцы маринованные",
                am: "Պանիր Մոցարելլա, աղացած տավարի միս, կարմիր սոխ, չեդդեր պանիր, լոլիկ, BBQ սոուս, տոմատի սոուս, մարինացված վարունգ",
                eng: "Mozzarella cheese, minced beef, red onion, Cheddar cheese, tomatoes, BBQ sauce, tomato sauce, pickled cucumbers"
            },
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
                            price: 20,
                            default: false,
                            included: true,
                            units: {
                                id: "1",
                                name: {ru: "Грамм", am: "Գրամ", eng: "Grams"},
                                value: "g"
                            }
                        },
                        {
                            id: "2",
                            name: {ru: "Грибы", am: "Սունկ", eng: "Mushrooms"},
                            price: 30,
                            default: false,
                            included: true,
                            units: {
                                id: "1",
                                name: {ru: "Грамм", am: "Գրամ", eng: "Grams"},
                                value: "g"
                            }
                        },
                        {
                            id: "3",
                            name: {ru: "Колбаса", am: "Երշիկ", eng: "Sausage"},
                            price: 40,
                            default: false,
                            included: true,
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
                            name: {ru: "20", am: "20", eng: "20"},
                            price: 20,
                            default: true,
                            included: true,
                            units: {
                                id: "4",
                                name: {ru: "см", am: "սմ", eng: "cm"},
                                value: "cm"
                            }
                        },
                        {
                            id: "2",
                            name: {ru: "30", am: "30", eng: "30"},
                            price: 40,
                            default: false,
                            included: true,
                            units: {
                                id: "4",
                                name: {ru: "см", am: "սմ", eng: "cm"},
                                value: "cm"
                            }
                        },
                        {
                            id: "1",
                            name: {ru: "20", am: "20", eng: "20"},
                            price: 20,
                            default: false,
                            included: true,
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

    const handleClick = (id) => {
        let item = products.find(item => item.id === id);

        setProduct(item);

        setTimeout(()=>{
            setToggleTab(!toggleTab)
        }, 100)
    }


    const handleCloseModal = () => {
        setToggleTab(!toggleTab)

        setTimeout(()=>{
            setProduct(null);
        }, 100)
    }

    return (
        <>
            <div className="products">
                {
                    products && products.map(item => item.categoryId === categoryId && (
                        <div className="item" onClick={() => handleClick(item.id)} key={item.id}>
                            <div className="item__header">
                                <img src={item.image} alt={item.name.ru}/>
                            </div>

                            <div className="item__content">
                                <h3>{item.name.ru}</h3>
                                <h2>{item.price.amd} ֏</h2>
                            </div>
                        </div>
                    ))
                }
            </div>

            {
                product && (
                    <div className="product-modal">
                        <div className={`product-modal__container ${toggleTab ? "product-modal__container-active" : ""}`}>
                            <div className="product-modal__close">
                                <button onClick={handleCloseModal}><PiCaretDownLight /></button>
                            </div>
                            <div className="parallax">

                                <div className="parallax__image">
                                    <img src={product.image} alt=""/>
                                </div>
                            </div>
                            <div className="product-modal__content">
                                <div className="product-modal__info">
                                    <h2 className="product-modal__title">{product.name.ru}</h2>
                                    <p className="product-modal__desc">{product.description.ru}</p>
                                </div>

                                <div className="product-modal__modifiers"></div>
                            </div>

                            <div className="product-modal__action">
                                <div className="product__count">
                                    <span>-</span>
                                    <input type="text" value="1"/>
                                    <span>+</span>
                                </div>

                                <button className="btn btn-blue btn-add">Добавить <span>{product.price.rub}</span></button>
                            </div>
                        </div>

                    </div>
                )
            }

        </>
    );
};

export default Products;