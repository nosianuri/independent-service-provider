import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DramaDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>Welcome to detail: {serviceId}</h2>
            <div className='text-center'>
            <Link to="/resume">
                <button className='btn btn-primary'>Proceed Resume</button>
            </Link>
            </div>
        </div>
    );
};

export default DramaDetail;

