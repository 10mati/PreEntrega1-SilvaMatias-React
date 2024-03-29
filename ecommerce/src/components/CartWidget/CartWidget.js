import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {Link} from "react-router-dom"


const CartWidget = () => {
    const {totalQuantity} = useContext (CartContext)

    return (
        
            <Link to="/cart" >
            <FiShoppingCart />
            <span className="icon"> {totalQuantity() || ''} </span>
            </Link>
        
    );
};

export default CartWidget;