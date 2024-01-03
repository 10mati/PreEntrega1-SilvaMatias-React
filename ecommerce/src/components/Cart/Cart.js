import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link }  from "react-router-dom";
import CartItem from "../CartItem/CartItem"


const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext (CartContext)

    if (totalQuantity === 0) {
        return(
            <div>
                <h1>EL CARRITO ESTA VACIO</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }
    return(
        <div>
            { cart.map(products => <CartItem key={products.id} {...products}/>)}
            <h3>TOTAL: ${total}</h3>
            <button onClick={()=> clearCart()}>Limpiar Carrito</button>
            
        </div>
    )
}

export default Cart;