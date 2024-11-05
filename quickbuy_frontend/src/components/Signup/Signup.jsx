import React, { useContext } from "react";

import { ImagesContext } from '../../index';
import { RegistrationContext } from "../../index";
import './Signup.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SignUp = () => {


    const { state: imagesState } = useContext(ImagesContext);
    const { state, dispatch, registerUser } = useContext(RegistrationContext);

    const handleInputChange = (field, value) => {
        dispatch({ type: "SET_FIELD_VALUE", field, value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        registerUser();
    }

    const heroImage = imagesState?.images?.find(({ imageHeading }) => imageHeading === 'signup');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';
    // console.log(imageUrl)


    return (
        <>
            <Header />
            <div className="signup">
                <div className="signup__image">
                    <img
                        className="signup__image-src"
                        src={imageUrl}
                        alt="Signup visual"
                    />
                </div>
                <div className="signup__form-container">
                    <h2 className="signup__heading poppins-semibold">Create Your Account</h2>
                    <form className="signup__form poppins-semibold">
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="fullname">Fullname</label>
                            <input className="signup__input" type="text" id="fullname" required value={state.fullname} onChange={(e) => handleInputChange('fullname', e.target.value)} />
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="username">Username</label>
                            <input className="signup__input" type="text" id="username" required value={state.username} onChange={(e) => handleInputChange('username', e.target.value)} />
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="email">Email</label>
                            <input className="signup__input" type="email" id="email" required value={state.email} onChange={(e) => handleInputChange('email', e.target.value)} />
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="mobile">Mobile number</label>
                            <input className="signup__input" type="tel" id="mobile" pattern="[0-9]{10}" required value={state.mobilenumber} onChange={(e) => handleInputChange('mobilenumber', e.target.value)} />
                        </div>

                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="gender">Gender:</label>
                            <select id="gender" name="gender" className="signup__input" value={state.gender} onChange={(e) => handleInputChange('gender', e.target.value)}>
                                <option value="" disabled>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="password">Password</label>
                            <input className="signup__input" type="password" id="password" required value={state.password} onChange={(e) => handleInputChange('password', e.target.value)} />
                        </div>
                        <button className="signup__button poppins-semibold" type="submit" onClick={handleSubmit}>Sign Up</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SignUp;
