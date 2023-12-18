import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [ quantity, setQuantity] = useState (initial)

    const incrementar = () => {
        if (quantity < stock) {
         setQuantity (quantity + 1) 
        }
    }
    const decrementar = () => {
        if (quantity > 1) {
            setQuantity (quantity - 1)
        }
    }
    
    

    return (
        <div className="counter">
            <div className="control mt-4 ">
                <button className="button is-small" onClick={decrementar}>-</button>
                <h4 className="tag is-large mx-6"> {quantity}</h4>
                <button className="button is-small" onClick={incrementar}>+</button>
            </div>
            <div>
                < button className="button is-outlined mt-2" onClick={() => onAdd (quantity)} disabled ={! stock}>
                   Agregar al carrito
                </button>
            </div>
        </div>
    )

    }

export default ItemCount;