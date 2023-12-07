import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
  const { products, clear, removeItem, precioTotal } = useContext(CartContext);

  return (
    <div className='text-cart'>
      <h1>Ticket de Compra</h1>

      {products.length > 0 ? (
        <>
        <button className='button-compra' onClick={clear}>Vaciar Carrito </button>

          <div>
  <table className="products-cart">
    <thead>
      <tr>
        <th>Producto</th>
        <th>Precio Unidad</th>
        <th>Cantidad</th>
        <th>Precio Total</th>
        <th>Eliminar</th>
      </tr>
    </thead>
    <tbody>
      {products.map((item) => (
        <tr key={item.id} >
          <td>
            <h3>{item.title}</h3>
          </td>
          <td>${item.price}</td>
          <td>{item.quantity}</td>
          <td>${item.price * item.quantity}</td>
          <td>
            <button className='tacho' onClick={() => removeItem(item.id)}><img src='/img/eliminar.png' alt='tacho de basura' width={30} /></button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


          
          <div className='total-cart'>
          <h2>Precio total: ${precioTotal()}</h2>
          <button ><Link className='button-compra'  to="/checkout">Finalizar compra</Link></button>
          </div>
        </>
      ) : (
        <h2>No hay productos en el carrito </h2>
      )}
    </div>
  );
};

export default Cart;