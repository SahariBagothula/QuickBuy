import React from "react";
import { useHistory } from "react-router-dom";
import { ImagesContext } from '../../index';
import './NotFound.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const NotFound = () => {
    const { state: imagesState } = React.useContext(ImagesContext);
    const history = useHistory();

    const heroImage = imagesState?.images?.find(({ imageHeading }) => imageHeading === 'not-found');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';

    const handleGoHome = () => {
        history.push('/');
    };

    return (
        <>
            <Header />
            <div className="not-found">
                <div className="not-found__image">
                    <img
                        className="not-found__image-src"
                        src={imageUrl}
                        alt="404 - Not Found"
                    />
                </div>
                <div className="not-found__content">
                    <h2 className="not-found__heading poppins-semibold">Oops! This Path Doesn't Exist</h2>
                    <p className="not-found__text poppins-semibold">We couldn't find the page you were looking for. But don't worry, you can always go back to the homepage and explore!</p>
                    <button className="not-found__button poppins-semibold" onClick={handleGoHome}>Go to Homepage</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
