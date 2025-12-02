import React from 'react';
import Banner from './Banner/Banner';
import HomeAbout from './About/HomeAbout';
import Trending from './TrendingGame/Trending';
import Newsletter from './Newsletter/Newsletter';
import Testimonials from './Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <title>Home | NovaArcade</title>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Trending></Trending>
            <Newsletter></Newsletter>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;