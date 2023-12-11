import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import Itemlist from "../ItemList/ItemList"




const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    useEffect (() =>{
        getProducts ()
            .then(Response => {
                    setProducts (Response)
            })
            .catch(Error =>{
                console.log(Error)
            })
        },[])
return (
    <div>
        <h1 className="mb-6"> {greeting} </h1>
        <Itemlist products = {products}/>
    </div>
)
}
export default ItemListContainer