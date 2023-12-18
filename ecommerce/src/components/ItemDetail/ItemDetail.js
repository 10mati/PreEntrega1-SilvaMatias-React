import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"


const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)
    }
    return (
        <div className="card column is-4 has-background-light mx-auto ">
            <h2 className="has-text-black-bis mb-3"> {name} </h2>
            <figure className="image is-128x128 m-auto "><img src= {img} alt={name}/></figure>
            <p>PRECIO : ${price}</p>
            <p>CATEGORIA : {category}</p>
            <p className="is-size-7 has-text-justified-centered">DESCRIPCION : {description}</p>
            <p className="mt-2"> Stock Disponible: {stock}</p>
            <div>
                {
                quantityAdded > 0 ? (
                    <Link to= '/cart' className="button is-outlined mt-2">Terminar Compra</Link>
                ) : (
            < ItemCount initial={1} stock={stock} onAdd={(handleOnAdd) }/>
               )
             }
            </div>
                
        </div>
        )
     }
export default ItemDetail