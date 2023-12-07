import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import { collection,addDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import './Checkout.css'


const Checkout = () => {
    
    const[pedidosId, setPedidosId] = useState("");

    const { products,  precioTotal, clear}= useContext(CartContext)

    const {register, handleSubmit} = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: products,
            total: precioTotal()
        }
        console.log(pedido);
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc)=>{
            setPedidosId(doc.id);
            clear()
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
          });
        
    }

    if (pedidosId){
        return(
            <div className='final-compra'>
                <img src='/img/gracias.png' alt='gracias' width={400} height={150} />
                <p>Tu numero de pedido es: {pedidosId}</p>
            </div>
        )
    }

  return (
    <div className='form-compra'>
        <h1>Finalizar compra</h1>
        <form className='datos-form' onSubmit={handleSubmit(comprar)}>
            <input className='data-form' type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
            <input className='data-form' type="email" placeholder='Ingresa tu e-mail' {...register("email")} />
            <input className='data-form' type="tel" placeholder='Ingresa tu telefono' {...register("telefono")} />
            <button className='boton-comprar' type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Checkout