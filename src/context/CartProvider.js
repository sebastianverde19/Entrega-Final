import {CartContext } from "./CartContext";
import { useState, useEffect } from "react"



const CartProvider = ({children}) => {
    const [products, setProducts] = useState ([]);
    const [productQuantity, setProductQuantity] = useState(0);

    const addItem =(product, quantity)=>{
        if (isInCart(product.id)){
            const newProducts = products.map((item)=>{
                if (item.id === product.id){
                    return{
                        ...item,
                        quantity: item.quantity + quantity
                    }
                }
                return item;
            })
            setProducts(newProducts);
        } else{
            setProducts([...products, {...product, quantity},]);
        };
        };

    const clear = ()=>{
    setProducts([]);
};

const removeItem = (productId) =>{
    setProducts(products.filter((product) => product.id !== productId))
};

const isInCart = (id) => {
    return products.some((product) => product.id === id );
};

const precioTotal = () => {
    return products.reduce((acc,prod) =>acc + prod.price * prod.quantity, 0);
}

  


    useEffect(()=>{setProductQuantity(
        products.reduce((acc, product)=> acc + product.quantity, 0), 0);
    }, [products]);
    return(
        <CartContext.Provider value={{products, addItem, productQuantity, clear, removeItem, precioTotal}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider
