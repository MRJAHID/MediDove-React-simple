// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../contexts/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Login.css';

const Login = () => {
    // const auth = getAuth();

    // email pass state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signinUsingGoogle, handleLogin } = useAuth();
    // const [error, setError] = useState('');
    // Email Handle
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    // Password Handle
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    // Registration Handle
    const handleUserLogin = (e) => {
        handleLogin(email, password);
        e.preventDefault();
    };

    return (
        <div>
            <Header></Header>
            <main>
                <header>
                    <ul className="header-menu">
                        <li id="header-register-button">Sign In</li>
                    </ul>
                </header>
                <form id="content-wrapper" onSubmit={handleUserLogin}>
                    <input
                        onBlur={handleEmail}
                        type="email"
                        className="client-info"
                        placeholder="Email"
                        required
                    />
                    <input
                        onBlur={handlePassword}
                        type="password"
                        className="client-info"
                        placeholder="Password"
                        required
                    />

                    <HashLink id="recovery" to="/register">
                        Create New Account
                    </HashLink>
                    <button id="signin-button" type="submit">
                        Log In
                    </button>
                    <div id="other-option-wrapper">
                        <span className="line" />
                        <p id="continue-with">Or continue with</p>
                        <span className="line" />
                    </div>
                    <div id="other-icon-wrapper">
                        <button onClick={signinUsingGoogle} className="other-icon">
                            <svg viewBox="0 0 256 262">
                                <path
                                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                    fill="#34A853"
                                />
                                <path
                                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                    fill="#EB4335"
                                />
                            </svg>
                        </button>
                        <div className="other-icon">
                            <svg viewBox="0 0 456.008 560.035">
                                <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
                            </svg>
                        </div>
                        <div className="other-icon">
                            <svg viewBox="0 0 1950 1950">
                                <path
                                    style={{ fill: '#3A589E' }}
                                    d="M1946.6,988c0-536.5-435.3-971.7-971.7-971.7c-15.6,0-31.8,0.6-47.4,1.3C426.7,41.6,18.1,457.4,3.1,958.8V988c0,478.1,347.7,871.2,819.9,945.8v-643.5H573.3v-312h249.7V757.7c0-250.4,155-387.9,391.8-387.9c77.8,0.6,155.7,7.1,232.2,18.8v277h-136.2c-133.6,0-175.8,77.2-175.8,156.3v156.3h266.6l-42.2,312h-224.4c-0.6,214.7-1.3,428.8-2.6,643.5c63.6-8.4,406.7-59.7,635.7-369.7C1944.6,1324,1948.5,1071,1946.6,988L1946.6,988z"
                                />
                            </svg>
                        </div>
                    </div>
                </form>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Login;
