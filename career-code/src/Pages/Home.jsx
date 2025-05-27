import React from 'react';
import Banner from '../Components/Banner';
import BrowseCategory from '../Components/BrowseCategory';
import Hiring from '../Components/Hiring';
import JobsByLocation from '../Components/JobsByLocation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrowseCategory></BrowseCategory>
            <Hiring></Hiring>
            <JobsByLocation></JobsByLocation>
        </div>
    );
};

export default Home;