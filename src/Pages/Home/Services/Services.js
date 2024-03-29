import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <div className='container'>
            <div className="row">
            <h1 className='drama-title mt-5'>Drama List: {services.length} </h1>
            <div className='dramas-container'>
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;