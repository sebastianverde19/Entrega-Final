import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.css';
import { useEffect, useState } from 'react';

const ItemList = ({ products }) => {
    const { id: categoryId } = useParams();
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        if (!categoryId) {
            setFilteredItems(products);
        } else {
            const filtered = products.filter((product) => product.category === categoryId);
            setFilteredItems(filtered);
        }
    }, [categoryId, products]);

    return (
        <div className="item-list-container">
            {filteredItems.map((product) => (
                <Link to={`/category/${product.category}/${product.id}`} key={product.id} className='link'>
                    <Item
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        img={product.img}
                    />
                </Link>
            ))}
        </div>
    )
};

export default ItemList;
