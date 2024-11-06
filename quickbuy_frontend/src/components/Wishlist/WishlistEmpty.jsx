import React from "react";
import './WishlistEmpty.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const WishlistEmpty = () => {
    const imageUrl = '/images/cart-empty-image.jpg'; // Replace with the correct image URL

    return (
        <>
            <Header />
            <div className="wishlist-empty">
                <div className="wishlist-empty__image">
                    <img className="wishlist-empty__image-src" src={imageUrl} alt="Empty wishlist Visual" />
                </div>
                <div className="wishlist-empty__content">
                    <h2 className="wishlist-empty__heading poppins-semibold">
                        Your wishlist is Empty!
                    </h2>
                    <p className="wishlist-empty__text poppins-regular">
                        No items in the wishlist yet. Start shopping and get everything you want!
                    </p>
                    <button className="wishlist-empty__button poppins-semibold">
                        Start Shopping
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default WishlistEmpty;
