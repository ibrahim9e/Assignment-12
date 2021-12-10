import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BottomBanner from '../BottomBanner/BottomBanner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <BottomBanner></BottomBanner>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;