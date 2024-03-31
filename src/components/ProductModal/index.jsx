import React from 'react';
import {PiArrowCounterClockwiseBold, PiCaretDownLight} from "react-icons/pi";
import ModifierMultiple from "../ModifierMultiple";
import ModifierSingle from "../ModifierSingle";
import {
    decCount,
    incCount, modifierClear, productAddToCart,
    productClear, productSum,
    toggleModal
} from "../../store/features/productSlice";
import {useDispatch, useSelector} from "react-redux";

const ProductModal = ({product}) => {
    const modalActive = useSelector((state) => state.products.modalActive);
    const sum = useSelector((state) => state.products.sum);

    const dispatch = useDispatch();

    const incrementCount = () => dispatch(incCount());

    const decrementCount = () => dispatch(decCount());

    const handleCloseModal = () => {
        dispatch(toggleModal());

        setTimeout(() => {
            dispatch(productClear());
        }, 100)
    }

    const clearModifier = (modifierId) => {
        dispatch(modifierClear({modifierId}))

        dispatch(productSum({currency: "amd"}))
    }

    const addToCart = () => {
        dispatch(productAddToCart());

        dispatch(toggleModal());

        setTimeout(() => {
            dispatch(productClear());
        }, 100)
    }

    const handlerChangeInput = (e) => {}

    return (
        <div className="product-modal">
            <div className={`product-modal__container ${modalActive ? "product-modal__container-active" : ""}`}>
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

                                        <PiArrowCounterClockwiseBold
                                            onClick={() => clearModifier(item.id)}
                                            className="item__header_icon"
                                        />

                                    </div>
                                    <div className="item__content">
                                        <ul>
                                            {
                                                item.options && item.options.map(option => item.type === "multiple" ?
                                                    <ModifierMultiple
                                                        key={option.id}
                                                        modifierId={item.id}
                                                        option={option}
                                                    /> : <ModifierSingle
                                                        key={option.id}
                                                        modifierId={item.id}
                                                        option={option}
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
                        <span onClick={() => product.count > 1 && decrementCount()}>-</span>
                        <input type="text" value={product.count} onChange={handlerChangeInput}/>
                        <span onClick={incrementCount}>+</span>
                    </div>

                    <button
                        className="btn btn-blue btn-add"
                        onClick={addToCart}>Добавить <span>{product.count * (product.price.amd + sum)} ֏</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductModal;