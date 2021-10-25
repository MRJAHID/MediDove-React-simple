import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./service.json')
            .then((res) => res.json())
            .then((data) => {
                setDisplayProducts(data);
            });
    }, []);

    return (
        <div>
            <section className="services-area gray-bg pos-rel pt-185 pb-160" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                            <div className="section-title text-center pos-rel mb-75">
                                <div className="section-text pos-rel">
                                    <h5>Departments</h5>
                                    <h1>Managed Your Heathcare Services</h1>
                                </div>
                                <div className="section-line pos-rel">
                                    <img
                                        src="http://themepure.net/template/medidove-prv/medidove/img/shape/section-title-line.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product__wrapper">
                        {displayProducts.map((product) => (
                            <Service key={product.id} product={product}></Service>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
