import { useEffect, useState} from 'react'
import{ useParams }  from 'react-router-dom'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import{db} from "../../firebase/config"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { categoryId, productId} = useParams();

  useEffect(() => {
      
    const docRef = doc(db, "products", productId)
    getDoc(docRef)
    .then((resp) =>{
      setProduct(
        {...resp.data(), id :resp.id}
      )
    })

  }, [categoryId, productId]);

  return (
      <div>
        <ItemDetail itemSelected={product} /> 
      </div>
  );
};

export default ItemDetailContainer
