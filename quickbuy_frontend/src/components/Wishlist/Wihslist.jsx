import React, { useContext } from "react";
import { ProductsContext } from "../../index";
import "./Wihslist.css";
import Header from "../Header/Header";

const Wishlist = () => {

    const { state } = useContext(ProductsContext);

    const wishlistTotal = state.productsInWishlist.reduce((acc, product) => acc + product.price, 0);
    console.log(wishlistTotal);
    const discount = Math.round(wishlistTotal * 0.1);

    return (
        <>
            <Header />
            <main className="wishlist">
                <h1 className="wishlist__heading">Wishlist</h1>
                <div className="wishlist__content">
                    <section className="wishlist__products">
                        {state?.productsInWishlist?.map(({ id, name, price, brand, imageUrl }) => (
                            <article className="wishlist__product" key={id}>
                                <div className="wishlist__product-image">
                                    <img
                                        src={`http://localhost:8080${imageUrl}`}
                                        alt={name}
                                        className="wishlist__product-image-src"
                                    />
                                </div>
                                <div className="wishlist__product-details">
                                    <h2 className="wishlist__product-name">{name}</h2>
                                    <p className="wishlist__product-price">{`$${price}`}</p>
                                    <p className="wishlist__product-size">Size: {brand}</p>
                                    <div className="wishlist__product-quantity">
                                        <button
                                            className="wishlist__quantity-button"
                                        >−</button>
                                        <span className="wishlist__quantity-number">quantity</span>
                                        <button
                                            className="wishlist__quantity-button"
                                        >+</button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>
                    <aside className="wishlist__summary">
                        <h2 className="wishlist__summary-heading">Total</h2>
                        <p className="wishlist__summary-item">Subtotal <span className="wishlist__summary-item-price">{`$${wishlistTotal}`}</span></p>
                        <p className="wishlist__summary-item">Discount <span className="wishlist__summary-item-price">{`$${discount}`}</span></p>
                        <p className="wishlist__summary-item">Shipping Fees <span className="wishlist__summary-item-price">FREE!!!</span></p>
                        <p className="wishlist__summary-item">wishlist Value <span className="wishlist__summary-item-price">{`$${wishlistTotal - discount}`}</span></p>
                        <button className="wishlist__summary-button">Place Order</button>
                    </aside>
                </div>
            </main>
        </>
    );
};

export default Wishlist;
