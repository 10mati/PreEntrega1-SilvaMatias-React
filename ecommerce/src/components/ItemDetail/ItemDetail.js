import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <div className="card  ">
            <h2> {name} </h2>
            <figure className="image is-128x128 m-auto"><img src= {img} alt={name}/></figure>
            <p>Precio : ${price}</p>
            <p>Categoria : {category}</p>
            <p>Descripcion : {description}</p>
            <p> Stock Disponible: {stock}</p>
            <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log("cantidad Agregada",quantity) }/>
        </div>
    )
}
export default ItemDetail