

const Item = ({id, name, img, price, stock}) => {
    return (
        <div className="card ">
            <h2> {name} </h2>
            <figure className="image is-128x128 m-auto"><img src= {img} alt={name}/></figure>
            <p>Precio :${price}</p>
            <p> Stock Disponible: {stock}</p>
            <button>Ver detalle</button>
        </div>
    )
}
export default Item