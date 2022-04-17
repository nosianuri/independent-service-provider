import React from 'react';
import './Actor.css';

const Actor = ({ actor }) => {
    const { name, img } = actor;
    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>
            <div style={{ width: "10rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    </div>
                    </div>
            </div>
            
        
    );
};

export default Actor;