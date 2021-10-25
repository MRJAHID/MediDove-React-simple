import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, img, badge, id, description } = props.product;
    return (
        <div>
            <div className="product-card">
                <div className="badge">{badge}</div>
                <div className="product-tumb">
                    <img src={img} alt={name} />
                </div>
                <div className="product-details">
                    <h4>{name}</h4>
                    <p>{description.slice(0, 150)}</p>
                    <Link to={`/serviceDetails/${id}`}>
                        <button>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
