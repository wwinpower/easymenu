import React from 'react';
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";

const CategoryItem = ({item}) => {
    const {ref, inView, entry} = useInView({
        threshold: 0,
        triggerOnce:true,
    });

    return (
        <div className="item" ref={ref}>
            <Link to={item.children.length > 0 ? `/category/${item.id}` : `/products/${item.id}`}>
                <>
                    {
                        inView ? <img src={item.image} alt={item.name.ru} className={"item__image"}/>: <div className="item__image-skeleton"></div>
                    }
                    <div className="item__overlay">
                        <h3>{item.name.ru}</h3>
                    </div>
                </>

            </Link>
        </div>
    );
};

export default CategoryItem;
