import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

import "./OtpVerification.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const OtpVerification = () => {

    const [identifier, setIdentifier] = useState("");
    const [otp, setOtp] = useState("");

    const saveDetails = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/user/verifyOtp", {
                identifier: identifier,
                otp: otp
            });
            Swal.fire({
                icon: 'success',
                title: 'Verification successful!',
                text: 'Registration successful, you can now shop.',
                customClass: {
                    popup: 'swal-popup' // Custom class for additional styling
                }
            });
        } catch (error) {
            console.log(`Error response: ${error.response}`);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data || "An error occurred. Please try again.",
                customClass: {
                    popup: 'swal-popup' // Custom class for additional styling
                }
            });
        }
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
                            <input className="otp-verification__input" type="text" id="username" required value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
                        </div>
                        <div className="otp-verification__form-group">
                            <label className="otp-verification__label" htmlFor="otp">OTP</label>
                            <input className="otp-verification__input" type="text" id="otp" required value={otp} onChange={(e) => setOtp(e.target.value)} />
                        </div>
                        <button className="otp-verification__button poppins-semibold" type="submit" onClick={saveDetails}>Verify</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OtpVerification;
