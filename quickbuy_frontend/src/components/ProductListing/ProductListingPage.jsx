import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductsContext } from '../../index';
import './ProductListingPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ProductListingPage = () => {

    const { state: productsState, dispatch } = useContext(ProductsContext);

    const searchHandler = () => {
        dispatch({ type: "SEARCH_PRODUCTS", payload: productsState.enteredText });
        dispatch({ type: "ENTERED_TEXT", payload: "" });
    }

    return (
        <>
            <Header />
            <div className="product-listing-page">
                <aside className="product-listing-page__sidebar">

                    <div className="product-listing-page__sidebar__price-slider poppins-regular">
                        <h4 className="poppins-medium">Price</h4>
                        <input type="range" min="0" max="1000" />
                        <label>
                            <input type="radio" name="price" value="lth" onChange={() => dispatch({ type: 'SORT_LOW_TO_HIGH' })} /> Low to high
                        </label>
                        <label>
                            <input type="radio" name="price" value="htl" onChange={() => dispatch({ type: 'SORT_HIGH_TO_LOW' })} /> High to low
                        </label>
                    </div>

                    <div className="product-listing-page__sidebar__brands poppins-regular">
                        <h4 className="poppins-medium">Brands</h4>
                        <label>
                            <input
                                type="checkbox"
                                name="brand"
                                value="puma"
                                checked={productsState?.selectedBrands?.includes("puma")}
                                onChange={(event) =>
                                    dispatch({ type: "TOGGLE_BRAND_FILTER", payload: event.target.value.toLowerCase() })
                                }
                            />{" "}
                            Puma
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="brand"
                                value="uspolo"
                                checked={productsState?.selectedBrands?.includes("uspolo")}
                                onChange={(event) =>
                                    dispatch({ type: "TOGGLE_BRAND_FILTER", payload: event.target.value.toLowerCase() })
                                }
                            />{" "}
                            U.S. Polo Assn.
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="brand"
                                value="nike"
                                checked={productsState?.selectedBrands?.includes("nike")}
                                onChange={(event) =>
                                    dispatch({ type: "TOGGLE_BRAND_FILTER", payload: event.target.value.toLowerCase() })
                                }
                            />{" "}
                            Nike
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="brand"
                                value="denim"
                                checked={productsState?.selectedBrands?.includes("denim")}
                                onChange={(event) =>
                                    dispatch({ type: "TOGGLE_BRAND_FILTER", payload: event.target.value.toLowerCase() })
                                }
                            />{" "}
                            Denim
                        </label>
                    </div>


                    <div className="product-listing-page__sidebar__categories poppins-regular">
                        <h4 className="poppins-medium">Categories</h4>
                        <label>
                            <input type="checkbox" name="category" value="Shirt" checked={productsState?.selectedCategory?.includes("shirts")} onChange={(event) => dispatch({ type: "TOGGLE_CATEGORY_FILTER", payload: event.target.value.toLowerCase() })} /> Shirts
                        </label>
                        <label>
                            <input type="checkbox" name="category" value="Tshirt" checked={productsState?.selectedCategory?.includes("tshirts")} onChange={(event) => dispatch({ type: "TOGGLE_CATEGORY_FILTER", payload: event.target.value.toLowerCase() })} /> Tshirts
                        </label>
                        <label>
                            <input type="checkbox" name="category" value="Jacket" checked={productsState?.selectedCategory?.includes("jackets")} onChange={(event) => dispatch({ type: "TOGGLE_CATEGORY_FILTER", payload: event.target.value.toLowerCase() })} /> Jackets
                        </label>
                        <label>
                            <input type="checkbox" name="category" value="Dress" checked={productsState?.selectedCategory?.includes("dresses")} onChange={(event) => dispatch({ type: "TOGGLE_CATEGORY_FILTER", payload: event.target.value.toLowerCase() })} /> Dresses
                        </label>
                    </div>
                </aside>

                <div className='product-listing-page__rightsidepart'>
                    <div className="product-listing-page__search">
                        <label>
                            <input type="text" className="product-listing-page__search-input" value={productsState.enteredText} onChange={(event) => dispatch({ type: 'ENTERED_TEXT', payload: event.target.value })} placeholder="Search for any product" />
                        </label>
                        <button onClick={searchHandler} className='product-listing-page__search-button'>Search</button>
                    </div>

                    <section className="product-listing-page__products">

                        {productsState?.data?.map(product => (
                            <Link to={`/productDetails/${product.id}`} className="product-listing-page__products-link" key={product.id}>
                                <div className="product-card">
                                    <img
                                        src={`http://localhost:8080${product.imageUrl}`}
                                        alt={product.name}
                                        className="product-card__image"
                                    />
                                    <h3 className="product-card__name poppins-semibold ">{product.name}</h3>
                                    <p className="product-card__price  poppins-regular ">${product.price}</p>
                                    {/* {product.brand} */}
                                </div>
                            </Link>
                        ))}
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductListingPage;
