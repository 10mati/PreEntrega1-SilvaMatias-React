import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {Link} from "react-router-dom"


const CartWidget = () => {
    const {totalQuantity} = useContext (CartContext)

    return (
        
            <Link to="/cart"  style={{display: totalQuantity > 0 ? 'block': 'none'}}>
            <FiShoppingCart />
          <i className="icon is-large">{totalQuantity}</i>  
          </Link>
        
    )
}
export default CartWidget