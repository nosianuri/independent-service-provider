import React, { useEffect, useState } from 'react';


const Gallery = () => {

    const [gallary, setGallery] = useState([]);

    useEffect( ()=>{
        fetch('gallery.json')
        .then(res => res.json())
        .then(data => setGallery(data));
    }, []);
    
    return (
        <div>
            <h2>Gallery: {gallary.length} </h2>
        </div>
    );
};

export default Gallery;