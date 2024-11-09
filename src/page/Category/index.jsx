import React from 'react';
import CategoryItem from "../../components/CategoryItem";
import Flicking from "@egjs/react-flicking";


const Category = ({data}) => {
    return (
        <>
            <header className="popular">
                <h2>Популярные товары</h2>

                <div className="popular__content">
                    <Flicking moveType="freeScroll" bound={true} align="prev">
                        <div className="item">
                            <img src="https://foodies.academy/wp-content/uploads/2019/05/hemulthan-601x601.jpg"
                                 alt=""/>
                            <div className="item__info">
                                <h2>Клешни Камчатского краба +1 литр пива*</h2>
                                <span>1500 ֏</span>
                            </div>
                        </div>

                        <div className="item">
                            <img src="https://foodies.academy/wp-content/uploads/2019/05/hemulthan-601x601.jpg"
                                 alt=""/>
                            <div className="item__info">
                                <h2>Клешни Камчатского краба +1 литр пива*</h2>
                                <span>1500 ֏</span>
                            </div>
                        </div>

                        <div className="item">
                            <img src="https://foodies.academy/wp-content/uploads/2019/05/hemulthan-601x601.jpg"
                                 alt=""/>
                            <div className="item__info">
                                <h2>Клешни Камчатского краба +1 литр пива*</h2>
                                <span>1500 ֏</span>
                            </div>
                        </div>
                    </Flicking>

                </div>
            </header>

            <div className="category">
                <div className="content">
                    <div className="category__content">
                        {
                            data && data.map(item => !item.parentId && (
                                <CategoryItem key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;