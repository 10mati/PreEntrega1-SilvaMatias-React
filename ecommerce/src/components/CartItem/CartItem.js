import { CartContext } from "../../Context/CartContext";
import React from "react";
import { useContext } from "react";


const CartItem = ({product}) => {
    const {removeProducts} = useContext (CartContext)

    return (
        <div> 
        <img src={product.img} alt={product.name}/>
        <h2>{product.name}</h2>
        <p>cantidad: {product.quantity}</p>
        <p>Subtotal: {product.quantity * product.price}</p>
        <button onClick={() => removeProducts(product.id)}>Eliminar</button>
        </div>
    )
}
export default CartItem;