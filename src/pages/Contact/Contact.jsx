import { faEnvelope, faPhone, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Teams from '../Home/Teams/Teams';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header></Header>

            <div className="contact__container">
                <h1 className="brand">
                    <span>Phoenix Web Design</span>
                </h1>
                <div className="wrapper">
                    {/* COMPANY INFORMATION */}
                    <div className="company-info">
                        <h3>MediDove</h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faStreetView} /> 44 Main Street
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} /> (555) 555-5555
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} /> test@phoenix.com
                            </li>
                        </ul>
                    </div>
                    {/* End .company-info */}
                    {/* CONTACT FORM */}
                    <div className="contact">
                        <h3>E-mail Us</h3>
                        <form id="contact-form">
                            <p>
                                <label>Name</label>
                                <input type="text" name="name" id="name" required />
                            </p>
                            <p>
                                <label>Company</label>
                                <input type="text" name="company" id="company" />
                            </p>
                            <p>
                                <label>E-mail Address</label>
                                <input type="email" name="email" id="email" required />
                            </p>
                            <p>
                                <label>Phone Number</label>
                                <input type="text" name="phone" id="phone" />
                            </p>
                            <p className="full">
                                <label>Message</label>
                                <textarea name="message" rows={5} id="message" defaultValue={''} />
                            </p>
                            <p className="full">
                                <button type="submit">Submit</button>
                            </p>
                        </form>
                        {/* End #contact-form */}
                    </div>
                    {/* End .contact */}
                </div>
                {/* End .wrapper */}
            </div>
            {/* End .container */}

            <Teams></Teams>

            <Footer></Footer>
        </div>
    );
};

export default Contact;
