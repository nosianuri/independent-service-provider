import React from 'react';
import './Galleries.css';

const Galleries = ({ galleries }) => {
    const { name, image } = galleries;
    return (
        <div className='galleries'>
            <img className='w-100' src={image} alt="" />
            <h4> {name}</h4>
        </div>
    );
};

export default Galleries;