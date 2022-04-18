import React, { useEffect, useState } from 'react';
import Galleries from '../Galleries/Galleries';
import './Gallery.css';

const Gallery = () => {

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => setGallery(data));
    }, []);

    return (
        <div className='container'>
            <div className="row mt-5">
                
                <div className='gallery-container'>
                    {
                        gallery.map(galleries => <Galleries
                            key={galleries.id}
                            galleries={galleries}
                        ></Galleries>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;