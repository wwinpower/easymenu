import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import ProductModal from "../../components/ProductModal";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductById, fetchProductsByCategory} from "../../store/asyncAction/productAction";
import {toggleModal} from "../../store/features/productSlice";

const Products = () => {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.products);
    const product = useSelector((state) => state.products.product);

    const {categoryId} = useParams();

    useEffect(() => {
        dispatch(fetchProductsByCategory(categoryId));
    }, []);

    const handleOpenModal = (id) => {
        dispatch(fetchProductById(id));

        setTimeout(() => {
            dispatch(toggleModal());
        }, 200)
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
                product && <ProductModal product={product}/>
            }

        </>
    );
};

export default Products;