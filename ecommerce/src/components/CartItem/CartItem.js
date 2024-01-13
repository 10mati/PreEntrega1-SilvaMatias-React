import { CartContext } from "../../Context/CartContext";
import React from "react";
import { useContext } from "react";


const CartItem = ({id, name, quantity, price}) => {
    const {removeItem} = useContext (CartContext)

    return (
        
        <div className="tabs is-medium is-centered mt-6 is-justify-content-space-around has-background-white-ter"> 
        <h2>{name}</h2>
        <p>cantidad: {quantity}</p>
        <p>Subtotal: {quantity * price}</p>
        <button  className="button is-danger is-outlined" onClick={() => removeItem(id)}>x</button>
        
        </div>
    
    
    )
}
export default CartItem;