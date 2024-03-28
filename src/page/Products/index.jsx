import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {PiArrowCounterClockwise, PiArrowCounterClockwiseBold, PiCaretDownLight} from "react-icons/pi";
import ModifierMultiple from "../../components/ModifierMultiple";
import ModifierSingle from "../../components/ModifierSingle";
import {BsCartX} from "react-icons/bs";

const Products = () => {
    const {categoryId} = useParams();
    const [product, setProduct] = useState(null);
    const [toggleTab, setToggleTab] = useState(false);
    let [count, setCount] = useState(0)

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

    let [products, setProducts] = useState(data)

    const handleOpenModal = (id) => {
        let item = products.find(item => item.id === id);

        setProduct(item);

        setTimeout(() => {
            setToggleTab(!toggleTab)
        }, 100)
    }

    const handleCloseModal = () => {
        setToggleTab(!toggleTab)

        setTimeout(() => {
            setProduct(null);
        }, 100)
    }

    const incrementModifier = (productId, modifierId, optionId) => {
        let data = products.map(product => {
            if (product.id === productId) {
                product.modifiers = product.modifiers.map(modifier => {
                    if (modifier.id === modifierId) {
                        modifier.options = modifier.options.map(option => {
                            if (option.id === optionId) {
                                option.count += 1;
                            }

                            return option;
                        })
                    }

                    return modifier;
                })
            }

            return product;
        })

        setProducts(data)
    }

    const decrementModifier = (productId, modifierId, optionId) => {
        let data = products.map(product => {
            if (product.id === productId) {
                product.modifiers = product.modifiers.map(modifier => {
                    if (modifier.id === modifierId) {
                        modifier.options = modifier.options.map(option => {
                            if (option.id === optionId) {
                                option.count -= 1;
                            }

                            return option;
                        })
                    }

                    return modifier;
                })
            }

            return product;
        })

        setProducts(data)
    }


    const selectedModifier = (productId, modifierId, optionId) => {
        let data = products.map(product => {
            if (product.id === productId) {
                product.modifiers = product.modifiers.map(modifier => {
                    if (modifier.id === modifierId) {
                        modifier.options = modifier.options.map(option => {
                            option.selected = false;

                            if (option.id === optionId) {
                                option.selected = true;
                            }

                            return option;
                        })
                    }

                    return modifier;
                })
            }

            return product;
        })

        setProducts(data)
    }


    const incrementCount = (productId) => {
        let data = products.map(product => {
            if (product.id === productId) {
                product.count += 1;
            }

            return product;
        })

        setProducts(data)
    }

    const decrementCount = (productId) => {
        let data = products.map(product => {
            if (product.id === productId) {
                product.count -= 1;
            }

            return product;
        })

        setProducts(data)
    }

    const getSum = (productId, currency) => {

        let sum = products.reduce((acc, current) => {
            console.log(acc, current)
            if (current.id === productId) {
                current.modifiers && current.modifiers.map(modifier => {

                    if (modifier.type === "multiple") {
                        modifier.options && modifier.options.map(option => {
                            acc += (option.price[currency] * option.count)
                        })
                    }

                    if (modifier.type === "single") {
                        modifier.options && modifier.options.map(option => {
                            if (option.selected) {
                                acc += option.price[currency]
                            }
                        })
                    }
                })
            }

            return acc;
        }, 0)

        return sum;
    }

    const clearModifier = (productId, modifierId) => {
        let data = products.map(product => {
            if (product.id === productId) {
                product.modifiers = product.modifiers.map(modifier => {
                    if (modifier.id === modifierId) {
                        if (modifier.type === "multiple") {
                            modifier.options = modifier.options.map(option => {
                                option.count = 0;

                                return option;
                            })
                        }

                        if (modifier.type === "single") {
                            modifier.options = modifier.options.map((option, index) => {
                                option.selected = false;

                                if(index === 0){
                                    option.selected = true;
                                }

                                return option;
                            })
                        }
                    }

                    return modifier;
                })
            }

            return product;
        })

        setProducts(data)
    }


    return (
        <>
            <div className="products">
                {
                    products && products.map(item => item.categoryId === categoryId && (
                        <div className="item" onClick={() => handleOpenModal(item.id)} key={item.id}>
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
                                <button onClick={handleCloseModal}><PiCaretDownLight/></button>
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

                                <div className="modifiers">
                                    {
                                        product && product.modifiers.map(item => (
                                            <div className="item" key={item.id}>
                                                <div className="item__header">
                                                    <h2>{item.name.ru}</h2>

                                                    <PiArrowCounterClockwiseBold  onClick={() => clearModifier(product.id, item.id)} className="item__header_icon"/>

                                                </div>
                                                <div className="item__content">
                                                    <ul>
                                                        {
                                                            item.options && item.options.map(option => item.type === "multiple" ?
                                                                <ModifierMultiple
                                                                    key={option.id}
                                                                    productId={product.id}
                                                                    modifierId={item.id}
                                                                    option={option}
                                                                    incrementModifier={incrementModifier}
                                                                    decrementModifier={decrementModifier}
                                                                /> : <ModifierSingle
                                                                    key={option.id}
                                                                    productId={product.id}
                                                                    modifierId={item.id}
                                                                    option={option}
                                                                    selectedModifier={selectedModifier}
                                                                />)
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="product-modal__action">
                                <div className="product__count">
                                    <span onClick={() => product.count > 1 && decrementCount(product.id)}>-</span>
                                    <input type="text" value={product.count}/>
                                    <span onClick={() => incrementCount(product.id)}>+</span>
                                </div>

                                <button
                                    className="btn btn-blue btn-add">Добавить <span>{(product.count * product.price.amd) + getSum(product.id, "amd")} ֏</span>
                                </button>
                            </div>
                        </div>

                    </div>
                )
            }

        </>
    );
};

export default Products;