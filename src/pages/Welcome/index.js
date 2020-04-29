import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
    const isAuthenticated = () => { return localStorage.getItem("token") ? true : false; }
    const link = isAuthenticated() ? "/dashboard" : "login";

    return (
        <div className="welcome-container">
            <div className="welcome-objects-container">
                <h1 className="welcome-h1">Rent Tracker - Keep Rental Records Simple!</h1>
                <div className="welcome-button-container">
                    <Link to={link}><button className="welcome-button">See My Properties</button></Link>
                    <Link to="/register"><button className="welcome-button">Sign Up Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome;