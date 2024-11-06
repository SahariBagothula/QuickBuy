import React, { useContext } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Profile.css';
import { ProfileContext } from "../../contexts/ProfileContext";

const Profile = () => {

    const { state } = useContext(ProfileContext);

    if (!state.profileData) {
        return <p>Loading profile...</p>;
    }

    const profileData = state?.profileData;
    console.log(profileData)

    return (
        <>
            <Header />
            <main className="profile">
                <div className="profile__header">
                    <h1 className="profile__title poppins-bold">Profile</h1>
                </div>
                <div className="profile__content poppins-regular">
                    <h2 className="profile__subtitle poppins-medium">Personal Information</h2>
                    <p className="profile__details"><span className="profile__label">Full name: </span>{profileData.fullname}</p>
                    <p className="profile__details"><span className="profile__label">Username: </span>{profileData.username}</p>
                    <p className="profile__details"><span className="profile__label">Email: </span>{profileData.email}</p>
                    <p className="profile__details"><span className="profile__label">Phone: </span>{profileData.mobileNumber}</p>
                    <p className="profile__details"><span className="profile__label">Gender: </span>{profileData.gender}</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Profile;
