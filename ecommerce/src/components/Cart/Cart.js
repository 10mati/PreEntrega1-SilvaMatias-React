import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link }  from "react-router-dom";
import CartItem from "../CartItem/CartItem"


const Cart = () => {
    const {cart, totalPrice, clearCart} = useContext (CartContext)

    if (cart.length === 0) {
        return (
            <div className="pt6 ">
                <h1 className="title is-size-1 mt-6"> EL CARRITO ESTA VACIO </h1>
                <Link to='/' className="button is-medium is-outlined">Productos</Link>
            </div>
        );
    }
    return( 
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h1 className="is-size-4">TOTAL: $ { totalPrice() }</h1>

            <div className="is-flex is-flex-direction-column is-align-items-center">
            <button className="button is-danger is-outlined mb-2 mt-4" onClick={clearCart}>Limpiar Carrito</button>
            <Link to='/Checkout' className="button is-link is-outlined ">Checkout</Link>
            </div>

        </div>

    )
}

export default Cart;