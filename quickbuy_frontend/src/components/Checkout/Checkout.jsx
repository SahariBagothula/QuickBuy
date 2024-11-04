import { useContext } from 'react';
import { AddressContext } from '../../contexts/AddressContext';
import Header from '../Header/Header';
import './Checkout.css';

const Checkout = () => {

    const { state, dispatch } = useContext(AddressContext);

    return (
        <>
            <Header />
            <main className="checkout">
                <h2 className="checkout__heading">Checkout</h2>
                <h1 className="checkout__mainheading">Billing details</h1>
                <section className="addresses">
                    <h1 className="addresses__heading">Saved Addresses</h1>
                    <div className="addresses_block">
                        {
                            state?.data?.map(({ id, city, houseNumber, pincode, state, street, country }) => {
                                return (
                                    <div className="address" key={id}>
                                        <p><span className="address__text">H.No:</span>{houseNumber}</p>
                                        <p><span className="address__text">Street Name: </span>{street}</p>
                                        <p><span className="address__text">City:</span> {city} </p>
                                        <p><span className="address__text">Pincode: </span>{pincode}</p>
                                        <p><span className="address__text">State: </span>{state}</p>
                                        <p><span className="address__text">Country: </span>{country}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className="add__address">
                    <h1 className="add__address-heading">Add address</h1>
                    <label className="address__label">HouseNumber
                        <span className="required">*</span>  </label>
                    <input type="text" className="address__input" />

                    <label className="address__label">Street
                        <span className="required">*</span>  </label>
                    <input type="text" className="address__input" />

                    <label className="address__label">City
                        <span className="required">*</span> </label>
                    <input type="text" className="address__input" />

                    <label className="address__label">Pincode
                        <span className="required">*</span></label>
                    <input type="number" className="address__input" />

                    <label className="address__label">State
                        <span className="required">*</span> </label>
                    <input type="text" className="address__input" />

                    <label className="address__label">Country
                        <span className="required">*</span> </label>
                    <input type="text" className="address__input" />

                </section>
                <section className='placeorder'>
                    <p className='placeorder__content'>Cash on delivery. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                    <button onClick={() => dispatch({ type: 'TOGGLE_MODAL' })} className='placeorder__button'>Place order</button>
                    <div className='modal'>
                        <div className='overlay'>
                            <h1>Order placed successfully</h1>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Checkout;