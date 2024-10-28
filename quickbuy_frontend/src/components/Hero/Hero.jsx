import './Hero.css';
import { hero } from '../../assets/index';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>

            <div className="hero__background">
                <div className="hero__content">
                    <h1 className="hero__title">Stylish picks beat the heat</h1>
                    <button className="hero__button">Shop Now</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
