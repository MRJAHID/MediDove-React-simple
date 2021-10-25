import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { id } = useParams();
    const [showProducts, setShowProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MRJAHID/json-data/gh-pages/products.JSON')
            .then((res) => res.json())
            .then((data) => {
                setShowProducts(data[id - 1]);
            });
    }, []);

    console.log(showProducts);
    const { badge, name, description, img } = showProducts;
    console.log(id);

    return (
        <div>
            <Header></Header>

            <div className="detailscontainer">
                <div className="imgBx">
                    <img src={img} alt={name} />
                </div>
                <div className="details">
                    <div className="content">
                        <h2>
                            {name} <br />
                            <span>{badge}</span>
                        </h2>
                        <p>{description}</p>
                        <p className="product-colors">
                            <span
                                className="black active"
                                data-color-primary="#000"
                                data-color-sec="#212121"
                                data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"
                            />
                            <span
                                className="red"
                                data-color-primary="#7E021C"
                                data-color-sec="#bd072d"
                                data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true"
                            />
                            <span
                                className="orange"
                                data-color-primary="#CE5B39"
                                data-color-sec="#F18557"
                                data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true"
                            />
                        </p>
                        <h3>Rs. 12,800</h3>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;
