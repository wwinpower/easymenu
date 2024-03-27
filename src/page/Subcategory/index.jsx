import React from 'react';
import {Link, useParams} from "react-router-dom";
import CategoryItem from "../../components/CategoryItem";

const Subcategory = ({data}) => {
    const {categoryId} = useParams();

    data = data.filter(item => item.parentId === categoryId);

    return (
        <div className="category">
            <div className="category__content">
                {
                    data.length > 0 && data.map(item =>   <CategoryItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default Subcategory;