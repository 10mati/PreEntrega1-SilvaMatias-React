import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
    return (
        <div className="card ">
            <h2> {name} </h2>
            <figure className="image is-128x128 m-auto"><img src= {img} alt={name}/></figure>
            <p>Precio :${price}</p>
            <p> Stock Disponible: {stock}</p>
            <Link to={`/item/${id}`} className="Option"> Ver Detalle </Link>
        </div>
    )
}
export default Item