import React from 'react';
import Services from '../../Services/Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Serving from '../Serving/Serving';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Serving></Serving>
            <Services></Services>
            <Teams></Teams>
            <Footer></Footer>
        </div>
    );
};

export default Home;
