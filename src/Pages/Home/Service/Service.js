import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='drama'>
            <img src={img} alt="" />
            <h2>Drama Name: {name}</h2>
            <p>{description}</p>
            <p><small>Price: ${price}</small></p>
            <button className='set-btn'>Buy Now: {name}</button>
        </div>
        
    );
};

export default Service;