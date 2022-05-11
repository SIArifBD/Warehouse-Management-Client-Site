import React from 'react';
import About from '../../About/About';
import Blogs from '../../Blogs/Blogs';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;