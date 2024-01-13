import { useState } from 'react'


const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState ('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData ={
        name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <div className="field has-addons has-addons-centered">
            <form onSubmit={handleConfirm} method='post'>
            <div className="field">
            <label className="label">Nombre Completo</label>
            <div className="control">
            <input className="input" type="text" value={name} onChange={({target}) => setName(target.value)} placeholder="Matias Silva"/>
            </div>
            </div>

            <div className="field">
            <label className="label">Telefono</label>
            <div className="control">
            <input className="input" type="text" value={phone} onChange={({target}) => setPhone(target.value)} placeholder="11-15448873"/>
            </div>
            </div>

            <div className="field">
            <label className="label">Email</label>
            <div className="control">
            <input className="input" type="email" value={email} onChange={({target}) => setEmail(target.value)} placeholder="Silvamatias@hotmail.com"/>
            </div>
            </div>
            <input className='button is-outlined' type='submit' value="Crear Orden"/>
            </form>
        </div>
    )
}
export default CheckoutForm; 