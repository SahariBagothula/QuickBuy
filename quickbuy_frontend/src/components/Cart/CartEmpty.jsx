import React from "react";
import './CartEmpty.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const CartEmpty = () => {
    const imageUrl = '/images/cart-empty-image.jpg'; // Replace with the correct image URL

    return (
        <>
            <Header />
            <div className="cart-empty">
                <div className="cart-empty__image">
                    <img className="cart-empty__image-src" src={imageUrl} alt="Empty Cart Visual" />
                </div>
                <div className="cart-empty__content">
                    <h2 className="cart-empty__heading poppins-semibold">
                        Your Cart is Empty!
                    </h2>
                    <p className="cart-empty__text poppins-regular">
                        No items in the cart yet. Start shopping and get everything you want!
                    </p>
                    <button className="cart-empty__button poppins-semibold">
                        Start Shopping
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CartEmpty;
