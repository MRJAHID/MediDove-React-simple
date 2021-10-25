import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React } from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <section className="banner">
                <picture className="banner__img">
                    <img src="https://i.ibb.co/ncT47Ft/home5-hero-b1g.jpg" alt="" />
                </picture>
                <div className="banner__content">
                    <h3> Health & Doctor </h3>
                    <h5>
                        Avoids pleasure itself, how rationally because it is pleasure, but because
                        those who do not know how rationally encounter consequences that extremely
                        system weathe.
                    </h5>

                    <div className="d-flex flex-column mb-30">
                        <span className="">
                            <FontAwesomeIcon icon={faArrowCircleRight} />
                            <span>Digital Laboratory &amp; Computerized System</span>
                        </span>
                        <span className="">
                            <FontAwesomeIcon icon={faArrowCircleRight} />
                            <span>Digital Laboratory &amp; Computerized System</span>
                        </span>
                    </div>
                    <div className="section-button section-button-left mb-30">
                        <a
                            data-animation="fadeInLeft"
                            data-delay=".6s"
                            href="#"
                            className="btn btn-icon ml-0">
                            <span style={{ lineHeight: 3 }}>+</span>Make Appointment
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
