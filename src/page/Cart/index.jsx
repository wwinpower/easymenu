import React, {useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProductById} from "../../store/asyncAction/productAction";
import {openProductInCart, toggleModal} from "../../store/features/productSlice";
import ProductModal from "../../components/ProductModal";
import CartModal from "../../components/CartModal";

const Cart = () => {
    const dispatch = useDispatch();

    const product = useSelector((state) => state.products.product);
    const cart = useSelector((state) => state.products.cart);

    const handleOpenModal = (cartId) => {
        console.log(cartId)
        dispatch(openProductInCart({cartId}));

        setTimeout(() => {
            dispatch(toggleModal());
        }, 500)
    }


    const totalPrice = useMemo(() => {
        if (!cart) return 0;
        return cart.reduce((acc, crr) => acc + (crr.count * (crr.price.amd + crr.sum)), 0);
    }, [cart]);

    return (
        <>
            <div className="cart">
                <ul className="list">
                    {
                        cart && cart.map((product, index) => (
                            <li className="list__item" onClick={() => handleOpenModal(product.cartId)} key={product.cartId}>
                                <div className="list__item_info">
                                    <div className="list__item_count">
                                        <span>{product.count}</span>
                                        <span className="fs-12">x</span>
                                    </div>

                                    <img src={product.image} alt=""/>

                                    <div className="list__item_title">
                                        <h2>{product.name.ru}</h2>

                                        {
                                            product && product.modifiers.map(modifier => {
                                                if (modifier.type === "multiple") {
                                                    return modifier.options && modifier.options.map(option => (
                                                        option.count > 0 &&
                                                        <p key={product.cartId + option.id}>{option.name.ru} x {option.count} {option.name.value} {option.units.name.ru}</p>
                                                    ))
                                                }

                                                if (modifier.type === "single") {
                                                    return modifier.options && modifier.options.map(option => (
                                                        option.selected &&
                                                        <p key={product.cartId + option.id}>{option.value} {option.units.name.ru}</p>
                                                    ))
                                                }
                                            })
                                        }
                                    </div>
                                </div>

                                <div className="list__item_price">
                                    <span>{product.count * (product.price.amd + product.sum)} ֏</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <div className="cart__footer">
                    <h3>
                        <span>Сумма</span>
                        <span>{totalPrice} ֏</span>
                    </h3>
                    <h4>
                        <span>Итог</span>
                        <span>{totalPrice} ֏</span>
                    </h4>
                </div>
            </div>

            {totalPrice > 0 && <button className="btn btn-blue btn-next">Далее <span>{totalPrice} ֏</span></button>}

            {
                product && <CartModal product={product}/>
            }
        </>
    );
};

export default Cart;