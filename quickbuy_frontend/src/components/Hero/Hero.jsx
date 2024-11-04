import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import { ImagesContext } from '../../index';

import './Hero.css';

const Hero = () => {

    const { state: imagesState } = useContext(ImagesContext);

    const heroImage = imagesState.images.find(({ imageHeading }) => imageHeading === 'hero');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';
    // console.log(imageUrl)

    return (
        <section className="hero" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>

            <div className="hero__background">
                <div className="hero__content">
                    <h1 className="hero__title poppins-bold ">Stylish picks beat the heat</h1>
                    <button className="hero__button poppins-regular"><Link className="hero__button-link" to='/productsListing'>Shop Now</Link></button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
