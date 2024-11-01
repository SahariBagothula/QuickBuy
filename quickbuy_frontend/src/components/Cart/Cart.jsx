import React, { useContext } from "react";
import { ProductsContext } from "../../index";
import "./Cart.css";
import Header from "../Header/Header";

const Cart = () => {

    const { state } = useContext(ProductsContext);

    const CartTotal = state.productsInCart.reduce((acc, product) => acc + product.price, 0);
    const discount = CartTotal * 0.1;

    return (
        <>
            <Header />
            <main className="cart">
                <h1 className="cart__heading">Cart</h1>
                <div className="cart__content">
                    <section className="cart__products">
                        {state?.productsInCart?.map(({ id, name, price, brand, imageUrl }) => (
                            <article className="cart__product" key={id}>
                                <div className="cart__product-image">
                                    <img
                                        src={`http://localhost:8080${imageUrl}`}
                                        alt={name}
                                        className="cart__product-image-src"
                                    />
                                </div>
                                <div className="cart__product-details">
                                    <h2 className="cart__product-name">{name}</h2>
                                    <p className="cart__product-price">{`$${price}`}</p>
                                    <p className="cart__product-size">Size: {brand}</p>
                                    <div className="cart__product-quantity">
                                        <button
                                            className="cart__quantity-button"
                                        >−</button>
                                        <span className="cart__quantity-number">quantity</span>
                                        <button
                                            className="cart__quantity-button"
                                        >+</button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>
                    <aside className="cart__summary">
                        <h2 className="cart__summary-heading">Total</h2>
                        <p className="cart__summary-item">Subtotal <span className="cart__summary-item-price">{`$${CartTotal}`}</span></p>
                        <p className="cart__summary-item">Discount <span className="cart__summary-item-price">{`$${discount}`}</span></p>
                        <p className="cart__summary-item">Shipping Fees <span className="cart__summary-item-price">FREE!!!</span></p>
                        <p className="cart__summary-item">Cart Value <span className="cart__summary-item-price">{`$${cartTotal - discount}`}</span></p>
                        <button className="cart__summary-button">Place Order</button>
                    </aside>
                </div>
            </main>
        </>
    );
};

export default Cart;
