import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../contexts/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <header className="container  header">
                <div className="header__container ">
                    <div className="header__left">
                        <picture className="header__logo">
                            <img src="https://i.ibb.co/VpVMrbQ/logo-4.png" alt="" />
                        </picture>
                        <nav className="header__nav">
                            <ul>
                                <li>
                                    <HashLink to="/home">Home</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/home#service">Services</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/contact">Contact Us</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/about">About Us</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/home#team">Team</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/home#serving">Serving</HashLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__right ">
                        <div className="header__login">
                            <Link to="/login">{user?.email || user?.displayName}</Link>
                        </div>
                        <div className="header__signup">
                            {user?.email || user?.displayName ? (
                                <button className="logout-btn" onClick={logout}>
                                    Logout
                                </button>
                            ) : (
                                <Link to="/login">
                                    <button
                                        style={{
                                            border: 'navajowhite',
                                            background: 'transparent',
                                            color: 'white',
                                            fontWeight: 500,
                                        }}>
                                        Signin
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
