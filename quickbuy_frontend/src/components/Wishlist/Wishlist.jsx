import React, { useContext } from "react";

import { ProductsContext } from "../../index";
import "./Wishlist.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Wishlist = () => {

    const { state } = useContext(ProductsContext);

    return (
        <>
            <Header />
            <main className="wishlist">
                <h1 className="wishlist__heading poppins-bold">Wishlist</h1>
                <div className="wishlist__content-heading poppins-regular">
                    <p className="wishlist__content-details">Image</p>
                    <p className="wishlist__content-details">Product</p>
                    <p className="wishlist__content-details">Price</p>
                    <p className="wishlist__content-details">Size</p>
                    <p className="wishlist__content-details">Quantity</p>
                    <p className="wishlist__content-details">Total</p>
                </div>
                <div className="wishlist__divider"></div>
                <div className="wishlist__products poppins-regular">
                    {state?.productsInWishlist?.map(({ id, name, price, brand, imageUrl }) => (
                        <>
                            <article className="wishlist__product" key={id}>
                                <div className="wishlist__product-image" key={id}>
                                    <img
                                        src={`http://localhost:8080${imageUrl}`}
                                        alt={name}
                                        className="wishlist__product-image-src"
                                    />
                                </div>

                                <p className="wishlist__product-name">{name}</p>
                                <p className="wishlist__product-price">{`$${price}`}</p>
                                <p className="wishlist__product-size">Size: {brand}</p>
                                {/* <div className="wishlist__product-quantity">
                                    <button
                                        className="wishlist__quantity-button"
                                        onClick={() => dispatch({ type: "DECREMENT" })}
                                    >−</button>
                                    <span className="wishlist__quantity-number">{state.productQuantity}</span>
                                    <button
                                        className="wishlist__quantity-button"
                                        onClick={() => dispatch({ type: "INCREMENT" })}
                                    >+</button>
                                </div> */}
                                <p className="wishlist__product-total">{state.productQuantity * price}</p>

                            </article>
                            <div className="wishlist__divider"></div>
                        </>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Wishlist;
