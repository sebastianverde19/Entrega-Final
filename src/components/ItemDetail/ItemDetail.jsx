import { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ itemSelected }) => {
  const [count, setCount] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const stock = itemSelected?.stock;
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);

  const addToCart = () => {
    addItem(itemSelected, count);
    setAddedToCart(true); 
  };

  const handleNavigate = () => {
    navigate('/cart');
  };

  return (
    <div className='card-detail'>
      <div className='cart-img'>
        <h3 className='card-title'>{itemSelected?.title}</h3>
        <img src={itemSelected?.img} alt={itemSelected?.title} />
      </div>
      <div className='data-detail'>
        <p>{itemSelected?.description}</p>
        <p>${itemSelected?.price}</p>
        <p>stock:{itemSelected?.stock}</p>
        <ItemCount  count={count} setCount={setCount} stock={stock} />
        {addedToCart && (
          <button className='button-d' onClick={handleNavigate}>
            Terminar mi compra
          </button>
        )}
        <button className='button-d' onClick={addToCart}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;





