import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './About.css';

// About Us Page
const About = () => {
    return (
        <div>
            <Header></Header>
            <section
                className="breadcrumb-bg pt-200 pb-180"
                data-background="http://themepure.net/template/medidove-prv/medidove/img/page/page-bg.jpg"
                style={{
                    backgroundImage:
                        'url("http://themepure.net/template/medidove-prv/medidove/img/page/page-bg.jpg")',
                }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9">
                            <div className="page-title">
                                <p className="small-text pb-15">We are here for your care.</p>
                                <h1>About Us</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 d-flex justify-content-start justify-content-md-end align-items-center">
                            <div className="page-breadcumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb ">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            About
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fact-area fact-map primary-bg pos-rel pt-115 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="section-title pos-rel mb-45">
                                <div className="section-text section-text-white pos-rel">
                                    <h5>We are available 24/7</h5>
                                    <h1 className="white-color">
                                        We Always Ready For A Challenge.
                                    </h1>
                                </div>
                            </div>
                            <div className="section-button section-button-left mb-30">
                                <a
                                    data-animation="fadeInLeft"
                                    data-delay=".6s"
                                    href="#"
                                    className="btn btn-icon ml-0">
                                    <span>+</span>Make Appointment
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-6 col-md-8">
                            <div className="cta-satisfied">
                                <div className="single-satisfied mb-50">
                                    <h1>1M+</h1>
                                    <h5>
                                        {' '}
                                        <i className="fas fa-user"></i> Satisfied Patients
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                </div>
                                <div className="single-satisfied mb-50">
                                    <h1>100+</h1>
                                    <h5>
                                        <i className="far fa-thumbs-up"></i> World Awards
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default About;
