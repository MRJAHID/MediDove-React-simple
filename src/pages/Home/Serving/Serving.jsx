import React from 'react';
import './Serving.css';

// This is home serving section
const Serving = () => {
    return (
        <div>
            <section className="about-area pt-130 pb-100" id="serving">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="about-title text-center mb-60">
                                <h5 className="pink-color">MediDove help increase your readers.</h5>
                                <h1>25+ Years Of Since We Provide Medical Serving</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-4 mb-30">
                            <div className="h5services-wrapper theme-bg">
                                <i className="h5sicon-bg">
                                    <img
                                        src="http://themepure.net/template/medidove-prv/medidove/img/icon/services_bg_icon1.png"
                                        alt="icon"
                                    />
                                </i>
                                <div className="h5services-content">
                                    <i className="h5services-icon">
                                        <img
                                            src="http://themepure.net/template/medidove-prv/medidove/img/icon/h5services__icon1.png"
                                            alt=""
                                        />
                                    </i>
                                    <h3 className="white-color h5services-title">Energercy Case</h3>
                                    <p>
                                        Must explain to you how all this mistaken idea of denouncing
                                        pleasure and praising pain was born and will give complete
                                    </p>
                                    <a href="#" className="green-color text-uppercase f-500">
                                        <span className="plus">+</span>
                                        <span className="link">conatct us</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-30">
                            <div className="h5services-wrapper theme-bg2">
                                <i className="h5sicon-bg">
                                    <img
                                        src="http://themepure.net/template/medidove-prv/medidove/img/icon/services_bg_icon2.png"
                                        alt="icon"
                                    />
                                </i>
                                <div className="h5services-content">
                                    <i className="h5services-icon">
                                        <img
                                            src="http://themepure.net/template/medidove-prv/medidove/img/icon/h5services__icon2.png"
                                            alt=""
                                        />
                                    </i>
                                    <h3 className="white-color h5services-title">Medical Care</h3>
                                    <p>
                                        Must explain to you how all this mistaken idea of denouncing
                                        pleasure and praising pain was born and will give complete
                                    </p>
                                    <a href="#" className="green-color text-uppercase f-500">
                                        <span className="plus">+</span>
                                        <span className="link">read more</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-30">
                            <div className="h5services-wrapper pink-bg">
                                <i className="h5sicon-bg">
                                    <img
                                        src="http://themepure.net/template/medidove-prv/medidove/img/icon/services_bg_icon3.png"
                                        alt="icon"
                                    />
                                </i>
                                <div className="h5services-content">
                                    <i className="h5services-icon">
                                        <img
                                            src="http://themepure.net/template/medidove-prv/medidove/img/icon/h5services__icon3.png"
                                            alt=""
                                        />
                                    </i>
                                    <h3 className="white-color h5services-title">Opening Hours</h3>
                                    <ul className="h5services-events">
                                        <li className="white-color f-500">
                                            Mon - Friday <span>08:00 am</span>
                                        </li>
                                        <li className="white-color f-500">
                                            Mon - Friday <span>05:00 pm</span>
                                        </li>
                                    </ul>
                                    <ul className="h5services-events h5sclose-days">
                                        <li className="white-color f-500">
                                            Sunday <span>Closed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Serving;
