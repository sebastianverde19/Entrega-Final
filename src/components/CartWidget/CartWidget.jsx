import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { productQuantity } = useContext(CartContext);

  return (
    <div className='cart'>
      <Link to={'/cart'} className='logo' >
        <img src='/img/carrito.png' alt='carrito de compras' width={50} />
      </Link>
      <span>{productQuantity}</span>
    </div>
  );
};

export default CartWidget;
