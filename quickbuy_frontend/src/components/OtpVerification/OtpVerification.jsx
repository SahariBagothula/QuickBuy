import React, { useContext } from "react";

import { RegistrationContext } from "../../index";
import "./OtpVerification.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const OtpVerification = () => {

    const { state, dispatch, verifyUser } = useContext(RegistrationContext);

    const handleInputChange = (field, value) => {
        dispatch({ type: "SET_FIELD_VALUE", field, value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        verifyUser();
    }

    return (
        <>
            <Header />
            <div className="otp-verification">
                <div className="otp-verification__form-container">
                    <h2 className="otp-verification__heading poppins-semibold">Verify Your Account</h2>
                    <p className="otp-verification__text poppins-regular">Please enter your username and the OTP sent to your email to verify your account.</p>
                    <form className="otp-verification__form poppins-semibold">
                        <div className="otp-verification__form-group">
                            <label className="otp-verification__label" htmlFor="username">Username</label>
                            <input className="otp-verification__input" type="text" id="username" required value={state.identifier} onChange={(e) => handleInputChange("identifier", e.target.value)} />
                        </div>
                        <div className="otp-verification__form-group">
                            <label className="otp-verification__label" htmlFor="otp">OTP</label>
                            <input className="otp-verification__input" type="text" id="otp" required value={state.otp} onChange={(e) => handleInputChange("otp", e.target.value)} />
                        </div>
                        <button className="otp-verification__button poppins-semibold" type="submit" onClick={handleSubmit}>Verify</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OtpVerification;
