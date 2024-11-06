import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import { CartContext } from "../../index";
import "./Cart.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Cart = () => {

    const { state } = useContext(CartContext);

    const CartTotal = state.cart.reduce((acc, product) => acc + product.price, 0);
    const discount = CartTotal * 0.1;

    return (
        <>
            <Header />
            <main className="cart">
                <h1 className="cart__heading poppins-bold">Shopping Cart</h1>
                <div className="cart__content-heading poppins-regular">
                    <p className="cart__content-details">Image</p>
                    <p className="cart__content-details">Product</p>
                    <p className="cart__content-details">Price</p>
                    <p className="cart__content-details">Size</p>
                    <p className="cart__content-details">Quantity</p>
                    <p className="cart__content-details">Total</p>
                </div>
                <div className="cart__divider"></div>
                <div className="cart__products poppins-regular">
                    {state?.cart?.map(({ id, name, price, brand, imageUrl }) => (
                        <div key={id}>
                            <article className="cart__product">
                                <div className="cart__product-image">
                                    <img
                                        src={`http://localhost:8080${imageUrl}`}
                                        alt={name}
                                        className="cart__product-image-src"
                                    />
                                </div>

                                <p className="cart__product-name">{name}</p>
                                <p className="cart__product-price">{`$${price}`}</p>
                                <p className="cart__product-size">Size: {brand}</p>
                                {/* <div className="cart__product-quantity">
                                    <button
                                        className="cart__quantity-button"
                                        onClick={() => dispatch({ type: "DECREMENT" })}
                                    >−</button>
                                    <span className="cart__quantity-number">{state.productQuantity}</span>
                                    <button
                                        className="cart__quantity-button"
                                        onClick={() => dispatch({ type: "INCREMENT" })}
                                    >+</button>
                                </div> */}
                                <p className="cart__product-total">{state.productQuantity * price}</p>

                            </article>
                            <div className="cart__divider"></div>
                        </div>
                    ))}
                </div>
                <aside className="cart__summary poppins-regular">
                    <h2 className="cart__summary-heading poppins-medium">Cart Totals</h2>
                    <p className="cart__summary-item">Subtotal <span className="cart__summary-item-price">{`$${CartTotal}`}</span></p>
                    <div className="cart__divider"></div>
                    <p className="cart__summary-item">Discount <span className="cart__summary-item-price">{`$${discount}`}</span></p>
                    <div className="cart__divider"></div>
                    <p className="cart__summary-item">Shipping Fees <span className="cart__summary-item-price">FREE!!!</span></p>
                    <div className="cart__divider"></div>
                    <p className="cart__summary-item, cart__total">Cart Value <span className="cart__summary-item-price">{`$${CartTotal - discount}`}</span></p>
                    <button className="cart__summary-button poppins-semibold"><Link to="/checkout" className="cart__summary-button-link">Proceed to checkout</Link></button>
                </aside>
            </main>
            <Footer />
        </>
    );
};

export default Cart;
