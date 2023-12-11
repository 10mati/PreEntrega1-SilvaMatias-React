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
            <div className="control mt-6">
                <button className="button is-danger is-outlined" onClick={decrementar}>-</button>
                <h4 className="tag is-large mx-6"> {quantity}</h4>
                <button className="button is-success is-outlined" onClick={incrementar}>+</button>
            </div>
            <div>
                < button className="button is-info is-outlined mt-4" onClick={() => onAdd (quantity)} disabled ={! stock}>
                   Agregar al carrito
                </button>
            </div>
        </div>
    )

    }

export default ItemCount;