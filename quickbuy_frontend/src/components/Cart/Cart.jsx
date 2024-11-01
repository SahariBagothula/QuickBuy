import React, { useContext } from "react";
import { ProductsContext } from "../../index";
import "./Cart.css";
import Header from "../Header/Header";

const Cart = () => {

    const { state, dispatch } = useContext(ProductsContext);

    const CartTotal = state.productsInCart.reduce((acc, product) => acc + product.price, 0);
    const discount = CartTotal * 0.1;

    return (
        <>
            <Header />
            <main className="cart">
                <h1 className="cart__heading">Shopping Cart</h1>
                <div className="cart__content-heading">
                    <p className="cart__content-details">Image</p>
                    <p className="cart__content-details">Product</p>
                    <p className="cart__content-details">Price</p>
                    <p className="cart__content-details">Size</p>
                    <p className="cart__content-details">Quantity</p>
                    <p className="cart__content-details">Total</p>
                </div>
                <div className="cart__divider"></div>
                <div className="cart__products">
                    {state?.productsInCart?.map(({ id, name, price, brand, imageUrl }) => (
                        <>
                            <article className="cart__product" key={id}>
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
                        </>
                    ))}
                </div>
                <aside className="cart__summary">
                    <h2 className="cart__summary-heading">Cart Totals</h2>
                    <p className="cart__summary-item">Subtotal <span className="cart__summary-item-price">{`$${CartTotal}`}</span></p>
                    <div className="cart__divider"></div>
                    <p className="cart__summary-item">Discount <span className="cart__summary-item-price">{`$${discount}`}</span></p>
                    <div className="cart__divider"></div>
                    <p className="cart__summary-item">Shipping Fees <span className="cart__summary-item-price">FREE!!!</span></p>
                    <div className="cart__divider"></div>
                    <p className="cart__summary-item, cart__total">Cart Value <span className="cart__summary-item-price">{`$${CartTotal - discount}`}</span></p>
                    <button className="cart__summary-button">Proceed to checkout</button>
                </aside>
            </main>
        </>
    );
};

export default Cart;
