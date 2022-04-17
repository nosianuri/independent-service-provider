import React from 'react';
import Actors from '../Actors/Actors';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Actors></Actors>
        </>
    );
};

export default Home;