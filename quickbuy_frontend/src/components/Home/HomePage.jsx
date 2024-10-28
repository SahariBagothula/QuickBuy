import { useContext } from 'react';
import { ProductsContext } from '../../index';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import { customerSupport, returnIcon, truck, safetyIcon } from '../../assets/index';
import './HomePage.css';

const HomePage = () => {

    const { state, dispatch } = useContext(ProductsContext);

    const infoData = [
        {
            id: 1,
            icon: truck,
            title: "free shipping",
            description: "Enjoy free shipping on all orders above $100",
        },
        {
            id: 2,
            icon: customerSupport,
            title: "support 24/7",
            description: "Our support team is there to help you for queries",
        },
        {
            id: 3,
            icon: returnIcon,
            title: "30 days return",
            description: "Simply return it within 30 days for an exchange",
        },
        {
            id: 4,
            icon: safetyIcon,
            title: "100% payment secure",
            description: "Our payments are secured with 256 bit encryption",
        },
    ];

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
                            state?.data?.map(({ id, category, description, name, price, imageUrl, gender }) => {
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
                    {infoData.map(({ id, icon, title, description }) => (
                        <div className="home-page__info-item" key={id}>
                            <div className="home-page__info-left">
                                <img className="home-page__info-icon" src={icon} alt="icons" />
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
                            state?.data?.map(({ id, category, description, name, price, imageUrl, gender }) => {
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
