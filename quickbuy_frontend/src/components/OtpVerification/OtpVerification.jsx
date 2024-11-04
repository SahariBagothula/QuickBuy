import React from "react";
import "./OtpVerification.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const OtpVerification = () => {
    return (
        <>
            <Header />
            <div className="otp-verification">
                <div className="otp-verification__form-container">
                    <h2 className="otp-verification__heading">Verify Your Account</h2>
                    <p className="otp-verification__text">Please enter your username and the OTP sent to your email to verify your account.</p>
                    <form className="otp-verification__form">
                        <div className="otp-verification__form-group">
                            <label className="otp-verification__label" htmlFor="username">Username</label>
                            <input className="otp-verification__input" type="text" id="username" required />
                        </div>
                        <div className="otp-verification__form-group">
                            <label className="otp-verification__label" htmlFor="otp">OTP</label>
                            <input className="otp-verification__input" type="text" id="otp" required />
                        </div>
                        <button className="otp-verification__button" type="submit">Verify</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OtpVerification;
