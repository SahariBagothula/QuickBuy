import React from "react";
import { useNavigate } from "react-router-dom";
import { ImagesContext } from '../../index';

import './NotFound.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const NotFound = () => {
    const { state: imagesState } = React.useContext(ImagesContext);
    const navigate = useNavigate();

    const heroImage = imagesState?.images?.find(({ imageHeading }) => imageHeading === 'notfound');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';

    return (
        <>
            <Header />
            <div className="not-found">
                <div className="not-found__image-container">
                    <img
                        className="not-found__image-src"
                        src={imageUrl}
                        alt="404 - Not Found"
                    />
                    <button className="not-found__button" onClick={() => navigate("/")}>Go Back</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
