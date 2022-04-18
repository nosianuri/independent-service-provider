import React from 'react';
import me from '../../images/nosia.png';
import './About.css';

const About = () => {
    return (
        <div className='about mt-5'>
            <img className='circle' src={me} alt="" />
            <h5> Nosia Akter</h5>
            <p>I want to be a good programmer in future.</p>
        </div>
    );
};

export default About;