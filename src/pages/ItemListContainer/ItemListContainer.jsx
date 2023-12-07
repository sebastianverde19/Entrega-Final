
import ItemList from '../../components/ItemList/ItemList';
import { useEffect, useState } from 'react';
//firebase//
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from "../../firebase/config"
import { useParams } from 'react-router-dom';




//contex//
const ItemListContainer = () => {

const [products, setProductos] = useState([]);

const categoria = useParams().category;

  useEffect(() =>{

    const productosRef =collection(db, "products");

   const q = categoria ? query(productosRef, where('category', '==', categoria)): productosRef;

    getDocs(q)
    .then((resp) =>{

      setProductos(
        resp.docs.map((doc)=>{
          return { ...doc.data(), id: doc.id}
        })
      )
    })

  }, [categoria]);

  return (
      <ItemList products={products} />
      );
  };

export default ItemListContainer;