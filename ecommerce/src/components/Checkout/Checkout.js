import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import {db} from '../../services/firebase/firebaseConfig'
import { Timestamp, addDoc, collection, getDocs, where, query, documentId, writeBatch } from 'firebase/firestore'


const Checkout = () => {
    const [loading, setLoading] = useState (false)
    const [orderId, setOrderId] = useState ('')
    const {cart, totalPrice, clearCart} = useContext (CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder ={
                buyer:{
                    name, phone, email
                }, 
                items: cart,
                total: totalPrice (),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch (db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection (db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const {docs} = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productsAddedToCart = cart.find(prod =>prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
            if (outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc (orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('hay productos que estan fuera del stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading (false)
        }
    }
    if (loading) {
        return <h1 className='is-size-3 my-6'> Se esta generando su orden ...</h1>
    }
    if (orderId) {
        return <h1 className='is-size-3'> El Id de su orden es : {orderId}</h1>
    }

    return(
        <div>
            <h1 className='my-5 is-size-4'>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}
export default Checkout;