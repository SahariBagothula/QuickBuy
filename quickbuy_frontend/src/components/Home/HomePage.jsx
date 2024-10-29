import { useContext } from 'react';
import { ProductsContext, InfoDataContext } from '../../index';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import './HomePage.css';

const HomePage = () => {

    const { state: productsState } = useContext(ProductsContext);
    const { state: dataState } = useContext(InfoDataContext);

    return (
        <>
            <Header />
            <Hero />
            <div>
                <div className="home-page__new-arrivals">
                    <h2 className="home-page__new-arrivals-title">Discover NEW Arrivals</h2>
                    <h3 className="home-page__new-arrivals-subtitle">Recently added clothes!</h3>
                    <ul className="home-page__product-list">
                        {
                            productsState?.data?.map(({ id, category, description, name, price, imageUrl, gender }) => {
                                return (
                                    <li className="home-page__product-item" key={id}>
                                        <img className="home-page__product-image" src={imageUrl} alt={name} />
                                        <h3 className="home-page__product-name">{name}</h3>
                                        <p className="home-page__product-price">{`$${price}`}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <section className="home-page__info-section">
                    {dataState?.data?.map(({ id, imageUrl, title, description }) => (
                        <div className="home-page__info-item" key={id}>
                            <div className="home-page__info-left">
                                {console.log(imageUrl)}
                                <img className="home-page__info-icon" src={`http://localhost:8080${imageUrl}`} alt="icons" />
                            </div>
                            <div className="home-page__info-right">
                                <h4 className="home-page__info-title">{title}</h4>
                                <p className="home-page__info-description">{description}</p>
                            </div>
                        </div>
                    ))}
                </section>
                <div className="home-page__new-arrivals">
                    <h2 className="home-page__new-arrivals-title">Top Sellers</h2>
                    <h3 className="home-page__new-arrivals-subtitle">Browse our top-selling products</h3>
                    <ul className="home-page__product-list">
                        {
                            productsState?.data?.map(({ id, category, description, name, price, imageUrl, gender }) => {
                                return (
                                    <li className="home-page__product-item" key={id}>
                                        <img className="home-page__product-image" src={imageUrl} alt={name} />
                                        <h3 className="home-page__product-name">{name}</h3>
                                        <p className="home-page__product-price">{`$${price}`}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
