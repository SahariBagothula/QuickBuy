import React, { useContext, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

import { AddressContext } from '../../contexts/AddressContext';
import Header from '../Header/Header';
import './Checkout.css';

const Checkout = () => {

    const { state } = useContext(AddressContext);

    const [userId, setuserId] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [stateName, setStateName] = useState("");
    const [pincode, setPincode] = useState("");
    const [country, setCountry] = useState("");

    const saveDetails = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/address/add", {
                userId: userId,
                houseNumber: houseNumber,
                street: street,
                city: city,
                stateName: stateName,
                pincode: pincode,
                country: country,
            });
            alert("Address saved successfully");
        } catch (error) {
            console.error("Error response:", error.response);
            alert(error.response?.data || "An error occurred. Please try again.");
        }

    }

    const showModal = () => {
        Swal.fire({
            title: "Order placed successfully",
            text: "Your order has been placed and will be processed shortly.",
            icon: "success",
            customClass: {
                popup: 'my-popup', // Add your custom class here
                title: 'my-popup-title',
                content: 'my-popup-content',
                confirmButton: 'my-popup-confirm-button',
            },
            confirmButtonText: 'OK',
        });
    };



    return (
        <>
            <Header />
            <main className="checkout">
                <h2 className="checkout__heading poppins-bold">Checkout</h2>
                <h1 className="checkout__mainheading poppins-regular">Billing details</h1>
                <section className="addresses">
                    <h1 className="addresses__heading poppins-semibold">Saved Addresses</h1>
                    <div className="addresses_block poppins-regular">
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
                <section className="add__address poppins-regular">
                    <h1 className="add__address-heading poppins-semibold">Add address</h1>
                    <label className="address__label">User id
                        <span className="required">*</span>  </label>
                    <input type="text" className="address__input" value={userId} onChange={(e) => setuserId(e.target.value)} />
                    <label className="address__label">HouseNumber
                        <span className="required">*</span>  </label>
                    <input type="text" className="address__input" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} />

                    <label className="address__label">Street
                        <span className="required">*</span>  </label>
                    <input type="text" className="address__input" value={street} onChange={(e) => setStreet(e.target.value)} />

                    <label className="address__label">City
                        <span className="required">*</span> </label>
                    <input type="text" className="address__input" value={city} onChange={(e) => setCity(e.target.value)} />

                    <label className="address__label">Pincode
                        <span className="required">*</span></label>
                    <input type="number" className="address__input" value={pincode} onChange={(e) => setPincode(e.target.value)} />

                    <label className="address__label">State
                        <span className="required">*</span> </label>
                    <input type="text" className="address__input" value={stateName} onChange={(e) => setStateName(e.target.value)} />

                    <label className="address__label">Country
                        <span className="required">*</span> </label>
                    <input type="text" className="address__input" value={country} onChange={(e) => setCountry(e.target.value)} />
                    <button className="signup__button  poppins-semibold" type="submit" onClick={saveDetails}>Save address</button>

                </section>
                <section className='placeorder poppins-regular'>
                    <p className='placeorder__content'>Cash on delivery. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                    <button onClick={() => showModal()} className='placeorder__button poppins-semibold'>Place order</button>
                </section>
            </main>
        </>
    )
}

export default Checkout;