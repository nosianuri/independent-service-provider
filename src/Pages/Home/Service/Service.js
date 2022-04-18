import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToDramaDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='drama'>
            <img src={img} alt="" />
            <h4>Drama Name: {name}</h4>
            <p>{description}</p>
            <p><small>Price: ${price}</small></p>
            <button onClick={() => navigateToDramaDetail(id)} className='set-btn'>Buy Now: {name}</button>
        </div>
        
    );
};

export default Service;